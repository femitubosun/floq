import { Injectable } from '@nestjs/common';
import { VirtualAccountService } from '../services/virtual-account.service';
import { UpdateVirtualAccountDto } from '../__defs__/accounts.dto';
import { CacheService } from '@/infrastructure/cache/services/cache.service';
import { VirtualAccountsCacheKeys } from '../utils';

@Injectable()
export class UpdateVirtualAccountUseCase {
  constructor(
    private readonly vaService: VirtualAccountService,
    private readonly cacheService: CacheService,
  ) {}

  async execute(id: string, data: UpdateVirtualAccountDto) {
    const res = await this.vaService.update(id, data);

    await this.cacheService.invalidateByTag([
      VirtualAccountsCacheKeys.getDomainPrefix(id),
      VirtualAccountsCacheKeys.getDomainPrefix(),
    ]);

    return res;
  }
}
