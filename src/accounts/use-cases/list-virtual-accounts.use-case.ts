import { Injectable } from '@nestjs/common';
import { VirtualAccountRepository } from '@/accounts/repositories/virtual-account.repository';
import { CacheService } from '@/infrastructure/cache/services/cache.service';
import { VirtualAccountsCacheKeys } from '@/accounts/utils';
import {
  VirtualAccountListingInput,
  VirtualAccountListingOutputDto,
} from '@/accounts/__defs__/accounts.dto';

@Injectable()
export class ListVirtualAccountsUseCase {
  constructor(
    private readonly virtualAccountRepository: VirtualAccountRepository,
    private readonly cacheService: CacheService,
  ) {}

  execute(input: VirtualAccountListingInput) {
    return this.cacheService.fetch<
      [VirtualAccountListingInput],
      VirtualAccountListingOutputDto
    >([input], {
      key: VirtualAccountsCacheKeys.list(input),
      resolver: async (i) => {
        return this.virtualAccountRepository.list(i);
      },
      tags: [VirtualAccountsCacheKeys.getDomainPrefix()],
    });
  }
}
