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
      tags?: string[];
      ttlSeconds?: number;
    },
  ): Promise<TResult> {
    const cacheKey = config.key(...args);

    const cachedValue = await this.redisService.get<TResult>(cacheKey);
    if (cachedValue !== null) {
      console.log(`Cache HIT for key: ${cacheKey}`);
      return cachedValue;
    }

    console.log(`Cache MISS for key: ${cacheKey}. Fetching from resolver.`);
    const result = await config.resolver(...args);

    await this.redisService.set({
      key: cacheKey,
      value: result,
      ttlSeconds: config.ttlSeconds,
    });

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

    const scanPattern = prefix.endsWith('*') ? prefix : `${prefix}*`;

    for await (const key of this.redisService.scan(scanPattern)) {
      if (!key.startsWith(TAG_SET_PREFIX)) {
        keysToDelete.push(key);
      }
    }

    if (keysToDelete.length > 0) {
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
      const allKeysToDelete = [...keysToInvalidate, tagSetKey];
      await this.redisService.delete(allKeysToDelete);

      console.log(
        `Invalidated ${keysToInvalidate.length} keys and removed tag set ${tagSetKey}.`,
      );
    } else {
      console.log(`No keys found for tag: ${tag}`);
    }
  }

  /**
   * Sets a value in Redis.
   * @param key
   * @param value
   * @param ttlSeconds
   */
  async set(key: string, value: unknown, ttlSeconds?: number) {
    return this.redisService.set({
      key,
      value,
      ttlSeconds,
    });
  }

  /**
   * Retrieves a value from cache by key.
   * @param key The key to retrieve.
   * @returns The value if found, otherwise null.
   */
  async get<T>(key: string) {
    return this.redisService.get<T>(key);
  }

  /**
   * Deletes one or more keys from cache.
   * @param key
   */
  async delete(key: string | string[]) {
    return this.redisService.delete(key);
  }
}
