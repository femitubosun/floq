import { Prisma } from '@/infrastructure/prisma/generated';
import { CreateLedgerEntriesForTransactionInputSchema } from '@/ledger/__defs__/ledger-entry.dto';
import { LedgerEntryService } from '@/ledger/services/ledger-entry.service';

export class CreateLedgerEntriesForTransactionsUseCase {
  constructor(private readonly lEService: LedgerEntryService) {}

  async execute(
    input: CreateLedgerEntriesForTransactionInputSchema,
    tx?: Prisma.TransactionClient,
  ) {
    const { toAccountId, fromAccountId, transactionId, amount } = input;

    await this.lEService.createDebit(
      {
        amount: amount.amount,
        currency: amount.currency,
        accountId: fromAccountId,
        transactionId,
      },
      tx,
    );

    await this.lEService.createCredit(
      {
        amount: amount.amount,
        currency: amount.currency,
        accountId: toAccountId,
        transactionId,
      },
      tx,
    );
  }
}
