import { Module } from '@nestjs/common';
import { VirtualAccountRepository } from '@/ledger/repositories/virtual-account.repository';
import { VirtualAccountService } from '@/ledger/services/virtual-account.service';
import { CreateVirtualAccountUseCase } from '@/ledger/use-cases/virtual-account/create-virtual-account.use-case';
import { AccountsController } from '@/ledger/controller/accounts.controller';
import { ListVirtualAccountsUseCase } from '@/ledger/use-cases/virtual-account/list-virtual-accounts.use-case';
import { GetVirtualAccountByIdUseCase } from './use-cases/virtual-account/get-virtual-account-by-id.use-case';
import { UpdateVirtualAccountUseCase } from '@/ledger/use-cases/virtual-account/update-virtual-account.use-case';
import { LedgerEntryRepository } from '@/ledger/repositories/ledger-entry.repository';
import { TransactionRepository } from '@/ledger/repositories/transcation.repository';
import { LedgerEntryService } from '@/ledger/services/ledger-entry.service';
import { TransactionService } from '@/ledger/services/transaction.service';
import { CreateLedgerEntriesForTransactionUseCase } from '@/ledger/use-cases/transactions/create-ledger-entries.use-case';
import { TransferToAccountUseCase } from '@/ledger/use-cases/transactions/transfer-to-account.use-case';
import { TransfersController } from './controller/transfers.controller';
import { FxModule } from '@/fx/fx.module';

const REPOSITORIES = [
  VirtualAccountRepository,
  LedgerEntryRepository,
  TransactionRepository,
];
const MODEL_SERVICES = [
  LedgerEntryService,
  TransactionService,
  VirtualAccountService,
];
const USE_CASES = [
  CreateVirtualAccountUseCase,
  ListVirtualAccountsUseCase,
  GetVirtualAccountByIdUseCase,
  UpdateVirtualAccountUseCase,
  CreateLedgerEntriesForTransactionUseCase,
  TransferToAccountUseCase,
];

@Module({
  imports: [FxModule],
  providers: [...REPOSITORIES, ...MODEL_SERVICES, ...USE_CASES],
  controllers: [AccountsController, TransfersController],
})
export class LedgerModule {}
