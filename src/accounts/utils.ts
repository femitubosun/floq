import { BaseKeyBuilder } from '@/infrastructure/cache/utils';

class AccountsKeyBuilder extends BaseKeyBuilder {
  /**
   * @param version The version for account keys
   */
  constructor(version: string = 'v1') {
    super('accounts', version);
  }
}

export const AccountsCacheKeys = new AccountsKeyBuilder();
