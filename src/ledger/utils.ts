import { BaseKeyBuilder } from '@/infrastructure/cache/utils';

class VirtualAccountsKeyBuilder extends BaseKeyBuilder {
  /**
   * @param version The version for account keys
   */
  constructor(version: string = 'v1') {
    super('accounts', version);
  }
}

export const VirtualAccountsCacheKeys = new VirtualAccountsKeyBuilder();
