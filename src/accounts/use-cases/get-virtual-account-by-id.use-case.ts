import { Injectable, NotFoundException } from '@nestjs/common';
import { CacheService } from '@/infrastructure/cache/services/cache.service';
import { VirtualAccountService } from '@/accounts/services/virtual-account.service';
import { VirtualAccountDetailOutputDto } from '@/accounts/__defs__/accounts.dto';
import { VirtualAccountsCacheKeys } from '@/accounts/utils';

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
