import { Injectable } from '@nestjs/common';
import { CacheService } from '@/infrastructure/cache/services/cache.service';
import { VirtualAccountRepository } from '@/accounts/repositories/virtual-account.repository';
import { CreateVirtualAccountDto } from '@/accounts/__defs__/accounts';

@Injectable()
export class CreateVirtualAccountUseCase {
  constructor(
    private readonly cacheService: CacheService,
    private readonly virtualAccountRepository: VirtualAccountRepository,
  ) {}

  async execute(input: CreateVirtualAccountDto) {
    const [data, _] = await Promise.all([
      this.virtualAccountRepository.createAccount(input),
      this.cacheService.invalidateByTag('virtual_accounts'),
    ]);

    return data;
  }
}
