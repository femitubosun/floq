import { Injectable } from '@nestjs/common';
import { VirtualAccountRepository } from '@/ledger/repositories/virtual-account.repository';
import { CacheService } from '@/infrastructure/cache/services/cache.service';
import { VirtualAccountsCacheKeys } from '@/ledger/utils';
import {
  VirtualAccountListingInput,
  VirtualAccountListingOutputDto,
} from '@/ledger/__defs__/accounts.dto';

@Injectable()
export class ListVirtualAccountsUseCase {
  constructor(
    private readonly virtualAccountRepository: VirtualAccountRepository,
    private readonly cacheService: CacheService,
  ) {}

  async execute(input: VirtualAccountListingInput) {
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
