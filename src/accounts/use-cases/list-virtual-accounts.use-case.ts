import { Injectable } from '@nestjs/common';
import { VirtualAccountRepository } from '@/accounts/repositories/virtual-account.repository';
import { CacheService } from '@/infrastructure/cache/services/cache.service';
import { VirtualAccountsCacheKeys } from '@/accounts/utils';
import { VirtualAccountDto } from '@/accounts/__defs__/accounts';

@Injectable()
export class ListVirtualAccountsUseCase {
  constructor(
    private readonly virtualAccountRepository: VirtualAccountRepository,
    private readonly cacheService: CacheService,
  ) {}

  execute() {
    return this.cacheService.fetch<[], Array<VirtualAccountDto>>([], {
      key: () => VirtualAccountsCacheKeys.list(),
      resolver: async () => {
        return this.virtualAccountRepository.list();
      },
      tags: [VirtualAccountsCacheKeys.getDomainPrefix()],
    });
  }
}
