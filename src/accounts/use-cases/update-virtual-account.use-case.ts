import { Injectable, Logger } from '@nestjs/common';
import { VirtualAccountService } from '../services/virtual-account.service';
import { UpdateVirtualAccountDto } from '../__defs__/accounts.dto';
import { CacheService } from '@/infrastructure/cache/services/cache.service';
import { VirtualAccountsCacheKeys } from '../utils';

@Injectable()
export class UpdateVirtualAccountUseCase {
  private logger = new Logger(UpdateVirtualAccountUseCase.name);

  constructor(
    private readonly vaService: VirtualAccountService,
    private readonly cacheService: CacheService,
  ) {}

  async execute(id: string, data: UpdateVirtualAccountDto) {
    const [updatedResult, cacheResult] = await Promise.allSettled([
      this.vaService.update(id, data),
      this.cacheService.invalidateByTag([
        VirtualAccountsCacheKeys.getDomainPrefix(id),
        VirtualAccountsCacheKeys.getDomainPrefix(),
      ]),
    ]);

    if (updatedResult.status != 'fulfilled') {
      throw updatedResult.reason;
    }

    if (cacheResult.status != 'fulfilled') {
      this.logger.warn(
        'Failed to invalidate cache for virtual account',
        cacheResult.reason,
      );
    }

    return updatedResult.value;
  }
}
