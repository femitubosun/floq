import { Module } from '@nestjs/common';
import { VirtualAccountRepository } from '@/accounts/repositories/virtual-account.repository';
import { VirtualAccountService } from '@/accounts/services/virtual-account.service';

@Module({
  providers: [VirtualAccountRepository, VirtualAccountService],
})
export class AccountsModule {}
