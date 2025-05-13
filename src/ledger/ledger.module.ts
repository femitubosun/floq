import { Module } from '@nestjs/common';
import { VirtualAccountRepository } from '@/ledger/repositories/virtual-account.repository';
import { VirtualAccountService } from '@/ledger/services/virtual-account.service';
import { CreateVirtualAccountUseCase } from '@/ledger/use-cases/virtual-account/create-virtual-account.use-case';
import { AccountsController } from '@/ledger/controller/accounts.controller';
import { ListVirtualAccountsUseCase } from '@/ledger/use-cases/virtual-account/list-virtual-accounts.use-case';
import { GetVirtualAccountByIdUseCase } from './use-cases/virtual-account/get-virtual-account-by-id.use-case';
import { UpdateVirtualAccountUseCase } from '@/ledger/use-cases/virtual-account/update-virtual-account.use-case';

@Module({
  providers: [
    VirtualAccountRepository,
    VirtualAccountService,
    CreateVirtualAccountUseCase,
    ListVirtualAccountsUseCase,
    GetVirtualAccountByIdUseCase,
    UpdateVirtualAccountUseCase,
  ],
  controllers: [AccountsController],
})
export class LedgerModule {}
