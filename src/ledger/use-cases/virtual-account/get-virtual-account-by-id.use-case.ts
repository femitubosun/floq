import { Injectable, NotFoundException } from '@nestjs/common';
import { CacheService } from '@/infrastructure/cache/services/cache.service';
import { VirtualAccountService } from '@/ledger/services/virtual-account.service';
import { VirtualAccountDetailOutputDto } from '@/ledger/__defs__/accounts.dto';
import { VirtualAccountsCacheKeys } from '@/ledger/utils';

@Injectable()
export class GetVirtualAccountByIdUseCase {
  constructor(
    private readonly cacheService: CacheService,
    private readonly virtualAccountService: VirtualAccountService,
  ) {}

  async execute(id: string): Promise<VirtualAccountDetailOutputDto> {
    const resolver = async () => {
      const data = await this.virtualAccountService.getById(id);
      if (!data) {
        throw new NotFoundException('Virtual Account');
      }
      return data;
    };

    return await this.cacheService.fetch<
      [string],
      VirtualAccountDetailOutputDto
    >([id], {
      key: VirtualAccountsCacheKeys.single(id),
      resolver,
      tags: [VirtualAccountsCacheKeys.getDomainPrefix(id)],
    });
  }
}
