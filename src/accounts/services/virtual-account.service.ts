import { Injectable } from '@nestjs/common';
import { VirtualAccountRepository } from '@/accounts/repositories/virtual-account.repository';
import { CacheService } from '@/infrastructure/cache/services/cache.service';
import { CreateVirtualAccountDto } from '@/accounts/__defs__/accounts';
import { VirtualAccount } from '@/infrastructure/prisma/__defs__';
import { VirtualAccountsCacheKeys } from '@/accounts/utils';

@Injectable()
export class VirtualAccountService {
  constructor(
    private readonly virtualAccountRepository: VirtualAccountRepository,
    private readonly cacheService: CacheService,
  ) {}

  async create(input: CreateVirtualAccountDto) {
    const data = await this.virtualAccountRepository.createAccount(input);

    await this.cacheService.invalidateByTag('virtual_accounts');
  }

  async list() {
    return await this.cacheService.fetch<[], VirtualAccount[]>([], {
      key: () => VirtualAccountsCacheKeys.list(),
      resolver: () => this.virtualAccountRepository.list(),
      tags: ['virtual_accounts'],
    });
  }
}
