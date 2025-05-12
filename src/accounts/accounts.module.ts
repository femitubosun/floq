import { Module } from '@nestjs/common';
import { VirtualAccountRepository } from '@/accounts/repositories/virtual-account.repository';
import { VirtualAccountService } from '@/accounts/services/virtual-account.service';
import { CreateVirtualAccountUseCase } from '@/accounts/use-cases/create-virtual-account.use-case';
import { AccountsController } from '@/accounts/controller/accounts.controller';
import { ListVirtualAccountsUseCase } from '@/accounts/use-cases/list-virtual-accounts.use-case';
import { GetVirtualAccountByIdUseCase } from './use-cases/get-virtual-account-by-id.use-case';

@Module({
  providers: [
    VirtualAccountRepository,
    VirtualAccountService,
    CreateVirtualAccountUseCase,
    ListVirtualAccountsUseCase,
    GetVirtualAccountByIdUseCase,
  ],
  controllers: [AccountsController],
})
export class AccountsModule {}
