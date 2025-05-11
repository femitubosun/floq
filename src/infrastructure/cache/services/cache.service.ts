import { Injectable } from '@nestjs/common';
import { RedisService } from './redis.service'; // Assuming redis.service.ts is in the same directory

const TAG_SET_PREFIX = 'tagset:';

@Injectable()
export class CacheService {
  constructor(private readonly redisService: RedisService) {}

  /**
   * Fetches data from cache if available, otherwise resolves it and caches the result.
   * Implements cache-first retrieval.
   * @param args Arguments for the key builder and resolver.
   * @param config Configuration object containing key builder, resolver, and optional tags.
   * @returns The resolved data.
   */
  async fetch<TArgs extends unknown[], TResult>(
    args: TArgs,
    config: {
      key: (...args: TArgs) => string;
      resolver: (...args: TArgs) => Promise<TResult>;
      tags?: string[]; // Tags to associate with this cache entry
      ttlSeconds?: number; // Optional TTL for this specific entry, if needed
    },
  ): Promise<TResult> {
    const cacheKey = config.key(...args);

    // 1. Try to get from cache
    const cachedValue = await this.redisService.get<TResult>(cacheKey);
    if (cachedValue !== null) {
      console.log(`Cache HIT for key: ${cacheKey}`);
      return cachedValue;
    }

    console.log(`Cache MISS for key: ${cacheKey}. Fetching from resolver.`);
    // 2. If not in cache, call resolver
    const result = await config.resolver(...args);

    // 3. Store in cache
    await this.redisService.set({
      key: cacheKey,
      value: result,
      ttlSeconds: config.ttlSeconds, // Pass TTL if provided
    });

    // 4. If tags are provided, associate the key with these tags
    if (config.tags && config.tags.length > 0) {
      for (const tag of config.tags) {
        const tagSetKey = `${TAG_SET_PREFIX}${tag}`;
        await this.redisService.sAdd(tagSetKey, cacheKey);
      }
    }

    return result;
  }

  /**
   * Invalidates one or more cache keys.
   * @param keys A single key or an array of keys to invalidate.
   */
  async invalidate(keys: string | string[]): Promise<void> {
    const keysToDelete = Array.isArray(keys) ? keys : [keys];
    if (keysToDelete.length === 0) {
      return;
    }
    // The PRD implies `invalidate` is for direct key invalidation.
    // `invalidateByTag` handles tag-based invalidation, which includes removing keys from sets.
    // If a key is part of a tag and is invalidated directly using this method,
    // its reference in the tag set might become stale.
    // A more complex system would involve tracking key-to-tag memberships to clean them up here.
    await this.redisService.delete(keysToDelete);
    console.log(`Invalidated key(s): ${keysToDelete.join(', ')}`);
  }

  /**
   * Invalidates all cache keys matching a given prefix.
   * WARNING: Uses SCAN, which can be slow on large Redis datasets.
   * @param prefix The prefix to match (e.g., "transactions:user:").
   */
  async invalidateByPrefix(prefix: string): Promise<void> {
    console.log(`Attempting to invalidate keys with prefix: ${prefix}`);
    const keysToDelete: string[] = [];
    // The pattern for SCAN should end with '*' to match anything after the prefix
    const scanPattern = prefix.endsWith('*') ? prefix : `${prefix}*`;

    for await (const key of this.redisService.scan(scanPattern)) {
      // Ensure we are not accidentally deleting tag sets if they match the prefix
      if (!key.startsWith(TAG_SET_PREFIX)) {
        keysToDelete.push(key);
      }
    }

    if (keysToDelete.length > 0) {
      // Batch delete keys
      await this.redisService.delete(keysToDelete);
      console.log(
        `Invalidated ${keysToDelete.length} keys with prefix ${prefix}:`,
        keysToDelete,
      );
    } else {
      console.log(`No keys found with prefix: ${prefix}`);
    }
  }

  /**
   * Invalidates all cache keys associated with a given tag.
   * @param tag The tag to invalidate.
   */
  async invalidateByTag(tag: string): Promise<void> {
    const tagSetKey = `${TAG_SET_PREFIX}${tag}`;
    console.log(
      `Attempting to invalidate keys for tag: ${tag} (set key: ${tagSetKey})`,
    );

    const keysToInvalidate = await this.redisService.sMembers(tagSetKey);

    if (keysToInvalidate.length > 0) {
      console.log(
        `Found ${keysToInvalidate.length} keys for tag ${tag}:`,
        keysToInvalidate,
      );
      // Create a list of keys to delete: the actual cache entries + the tag set itself
      const allKeysToDelete = [...keysToInvalidate, tagSetKey];
      await this.redisService.delete(allKeysToDelete);

      console.log(
        `Invalidated ${keysToInvalidate.length} keys and removed tag set ${tagSetKey}.`,
      );
    } else {
      console.log(`No keys found for tag: ${tag}`);
    }
  }
}
