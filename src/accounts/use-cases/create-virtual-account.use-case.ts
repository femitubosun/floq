import { Injectable, Logger } from '@nestjs/common';
import { CacheService } from '@/infrastructure/cache/services/cache.service';
import { VirtualAccountRepository } from '@/accounts/repositories/virtual-account.repository';
import { CreateVirtualAccountDto } from '@/accounts/__defs__/accounts';
import { VirtualAccountsCacheKeys } from '@/accounts/utils';

@Injectable()
export class CreateVirtualAccountUseCase {
  private logger = new Logger(CreateVirtualAccountUseCase.name);
  constructor(
    private readonly cacheService: CacheService,
    private readonly virtualAccountRepository: VirtualAccountRepository,
  ) {}

  async execute(input: CreateVirtualAccountDto) {
    const [createResult, cacheResult] = await Promise.allSettled([
      this.virtualAccountRepository.createAccount(input),
      this.cacheService.invalidateByTag(
        VirtualAccountsCacheKeys.getDomainPrefix(),
      ),
    ]);

    if (createResult.status !== 'fulfilled') {
      throw createResult.reason;
    }

    if (cacheResult.status !== 'fulfilled') {
      this.logger.warn('Cache invalidation failed', cacheResult.reason);
    }

    return createResult.value;
  }
}
