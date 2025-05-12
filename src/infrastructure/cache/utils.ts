export class BaseKeyBuilder {
  protected readonly domainPrefix: string;
  protected readonly version: string;
  protected readonly separator: string = ':'; // Key segment separator

  /**
   * Constructs a new BaseKeyBuilder.
   * @param domainPrefix The primary namespace for the keys (e.g., "transactions", "users").
   * @param version The version string for these keys (e.g., "v1", "v2"). Defaults to "v1".
   */
  constructor(domainPrefix: string, version: string = 'v1') {
    if (!domainPrefix || domainPrefix.trim() === '') {
      throw new Error('Domain prefix cannot be empty for KeyBuilder.');
    }
    if (!version || version.trim() === '') {
      throw new Error('Version cannot be empty for KeyBuilder.');
    }
    this.domainPrefix = domainPrefix.trim();
    this.version = version.trim();
  }

  /**
   * Returns the fully versioned prefix for this domain.
   * This is useful for prefix-based invalidation strategies.
   * Example (domain "transactions", version "v1"): "transactions:v1"
   * @returns The versioned domain prefix string.
   */
  public getVersionedPrefix(): string {
    return `${this.domainPrefix}${this.separator}${this.version}`;
  }

  /**
   * returns the domain prefix string
   */
  public getDomainPrefix(key?: string): string {
    return key ? `${this.domainPrefix}:${key}` : this.domainPrefix;
  }

  /**
   * Builds a cache key string from the given parts, automatically including
   * the domain prefix and version.
   * @param parts Individual segments of the key. Numbers will be converted to strings.
   * Null or undefined parts will be skipped.
   * @returns The fully formatted cache key string.
   */
  protected buildKey(...parts: (string | number | null | undefined)[]): string {
    const stringParts = parts
      .filter((part) => part !== null && part !== undefined)
      .map((part) => part?.toString());
    return [this.getVersionedPrefix(), ...stringParts].join(this.separator);
  }

  /**
   * Sorts the keys of an object alphabetically (deep sort). This is useful for ensuring
   * that filter objects always produce the same string when stringified,
   * regardless of the original key order.
   * @param obj The object to sort.
   * @returns A new object with keys sorted alphabetically.
   */
  protected sortObjectKeys(obj: Record<string, any>): Record<string, any> {
    if (typeof obj !== 'object' || obj === null) {
      return obj;
    }
    return Object.keys(obj)
      .sort()
      .reduce(
        (result, key) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          const value = obj[key];
          if (
            typeof value === 'object' &&
            value !== null &&
            !Array.isArray(value)
          ) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            result[key] = this.sortObjectKeys(value);
          } else if (Array.isArray(value)) {
            result[key] = value.map((item) =>
              typeof item === 'object' && item !== null && !Array.isArray(item)
                ? this.sortObjectKeys(item)
                : item,
            );
          } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            result[key] = value;
          }
          return result;
        },
        {} as Record<string, any>,
      );
  }

  // --- Common Key Patterns ---

  /**
   * Key for a list of items within the current domain, potentially filtered.
   * @param filterOptions An object representing filter criteria. Keys will be sorted before stringifying.
   * If null or undefined, it implies no filters (or a general list).
   * Example (domain "transactions"): "transactions:v1:list:{\"amountMin\":100}"
   * Example (no filters): "transactions:v1:list"
   */
  list(filterOptions?: Record<string, any> | null): string {
    if (!filterOptions || Object.keys(filterOptions).length === 0) {
      return this.buildKey('list');
    }
    const sortedFiltersString = JSON.stringify(
      this.sortObjectKeys(filterOptions),
    );
    return this.buildKey('list', sortedFiltersString);
  }

  /**
   * Key for a single item within the current domain by its identifier.
   * @param itemId The unique identifier of the item.
   * Example (domain "transactions"): "transactions:v1:single:abc-123"
   */
  single(itemId: string | number): string {
    return this.buildKey('single', itemId);
  }

  /**
   * Key for a list of items specific to a user, within the current domain, potentially filtered.
   * @param userId The ID of the user.
   * @param filterOptions An object representing filter criteria. Keys will be sorted before stringifying.
   * If null or undefined, it implies no filters for the user's list.
   * Example (domain "transactions"): "transactions:v1:user:456:list:{\"type\":\"debit\"}"
   */
  userList(
    userId: string | number,
    filterOptions?: Record<string, any> | null,
  ): string {
    if (!filterOptions || Object.keys(filterOptions).length === 0) {
      return this.buildKey('user', userId, 'list');
    }
    const sortedFiltersString = JSON.stringify(
      this.sortObjectKeys(filterOptions),
    );
    return this.buildKey('user', userId, 'list', sortedFiltersString);
  }

  /**
   * Key for a single item, explicitly namespaced under a user, within the current domain.
   * @param userId The ID of the user.
   * @param itemId The unique identifier of the item.
   * Example (domain "transactions"): "transactions:v1:user:456:single:abc-123"
   */
  userSingle(userId: string | number, itemId: string | number): string {
    return this.buildKey('user', userId, 'single', itemId);
  }

  // --- Common Prefix Patterns for Invalidation ---

  /**
   * Prefix for all data related to a specific user within the current domain.
   * Example (domain "transactions"): "transactions:v1:user:456"
   */
  userPrefix(userId: string | number): string {
    return this.buildKey('user', userId);
  }

  /**
   * Prefix for all list data within the current domain.
   * Example (domain "transactions"): "transactions:v1:list"
   */
  listPrefix(): string {
    return this.buildKey('list');
  }

  /**
   * Prefix for all list data for a specific user within the current domain.
   * Example (domain "transactions"): "transactions:v1:user:456:list"
   */
  userListPrefix(userId: string | number): string {
    return this.buildKey('user', userId, 'list');
  }
}
