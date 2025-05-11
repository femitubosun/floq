import { Controller } from '@nestjs/common';
import { CacheService } from '@/infrastructure/cache/services/cache.service';
import { AccountsCacheKeys } from '@/accounts/utils';

@Controller()
export class AccountsController {
  constructor(private readonly cacheService: CacheService) {}

  async getAccounts() {
    const userId = 'sss';
    const filters = {};

    // const data = await this.cacheService.fetch<
    //   [string, Record<any, any>],
    //   Array<number>
    // >([userId, filters], {
    //   key: (uId: string, f: Record<any, any>) =>
    //     AccountsCacheKeys.userList(uId, f),
    //   resolver: async (uid, f) => {
    //     return await this.transactionRepository.findByUser(uid, f);
    //   },
    //   tags: ['transactions', `transactions_list_user_${userId}`],
    //   ttlSeconds: 200,
    // });
  }
}
