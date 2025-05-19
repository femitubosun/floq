import { Injectable, NotFoundException } from '@nestjs/common';
import { VirtualAccountService } from '@/ledger/services/virtual-account.service';
import { TransactionService } from '@/ledger/services/transaction.service';
import { CreateLedgerEntriesForTransactionUseCase } from '@/ledger/use-cases/transactions/create-ledger-entries.use-case';
import { PrismaService } from '@/infrastructure/prisma/prisma.service';
import { CacheService } from '@/infrastructure/cache/services/cache.service';
import { FxService } from '@/fx/services/fx.service';
import { Transfer } from '@/ledger/domain/transfer';
import { LedgerEntryService } from '@/ledger/services/ledger-entry.service';
import { Money } from '@/common/objects/money';
import { VirtualAccountsCacheKeys } from '@/ledger/utils';
import { ReverseTransactionInput } from '@/ledger/__defs__/transaction.dto';

@Injectable()
export class ReverseTransactionUseCase {
  constructor(
    private readonly vaService: VirtualAccountService,
    private readonly txnService: TransactionService,
    private readonly ledgerUseCase: CreateLedgerEntriesForTransactionUseCase,
    private readonly prismaService: PrismaService,
    private readonly fxService: FxService,
    private readonly cacheService: CacheService,
    private readonly ledgerService: LedgerEntryService,
  ) {}

  async execute(input: ReverseTransactionInput) {
    const transaction = await this.txnService.findById(
      input.originalTransaction.id,
    );

    if (!transaction) {
      throw new NotFoundException('Original Transaction not found');
    }

    if (!transaction.fxSnapshotId) {
      throw new NotFoundException('Fx Snapshot not found');
    }

    const ledgerEntry = await this.ledgerService.findTransactionEntiries(
      transaction.id,
    );

    if (!ledgerEntry) {
      throw new NotFoundException('Ledger Entries not found');
    }

    const [fromAccount, toAccount] = await Promise.all([
      this.vaService.getById(ledgerEntry.debitEntry.accountId),
      this.vaService.getById(ledgerEntry.creditEntry.accountId),
    ]);

    if (!fromAccount || !toAccount) {
      throw new NotFoundException('Accounts not found');
    }

    const transfer = Transfer.create({
      from: fromAccount,
      to: toAccount,
      amount: new Money(
        ledgerEntry.debitEntry.amount,
        ledgerEntry.debitEntry.currency,
      ),
      reversal: true,
    });

    const { transaction: createdTransaction } = await transfer.reverse({
      idempotencyKey: input.idempotencyKey,
      initiatorId: input.initiatorId,
      initiatorType: input.initiatorType,
      deps: {
        ledgerUseCase: this.ledgerUseCase,
        prisma: this.prismaService,
        txService: this.txnService,
        vaService: this.vaService,
        fxService: this.fxService,
      },
      originalTransaction: {
        id: transaction.id,
        fxSnapshotId: transaction.fxSnapshotId,
      },
    });

    await this.cacheService.invalidateByTag([
      VirtualAccountsCacheKeys.getDomainPrefix(),
      VirtualAccountsCacheKeys.getDomainPrefix(fromAccount.id),
      VirtualAccountsCacheKeys.getDomainPrefix(toAccount.id),
    ]);

    return this.txnService.findById(createdTransaction.id);
  }
}

/**
 *
 *
 *
 *
 * 1. Get original transaction
 * 2. create new transaction.
 * 3. create snapshot
 * 4. update transaction w snapshot
 * 5. create ledger entries
 * 6. update va balances
 * 7. return transaction
 *
 */
