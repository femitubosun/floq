import { Prisma } from '@/infrastructure/prisma/generated';
import { CreateLedgerEntriesForTransactionInputSchema } from '@/ledger/__defs__/ledger-entry.dto';
import { LedgerEntryService } from '@/ledger/services/ledger-entry.service';
import { Money } from '@/common/objects/money';

export class CreateLedgerEntriesForTransactionsUseCaseCreateLedgerEntriesForTransactionsUseCase {
  constructor(private readonly lEService: LedgerEntryService) {}

  async execute(
    input: CreateLedgerEntriesForTransactionInputSchema,
    tx?: Prisma.TransactionClient,
  ) {
    const {
      toAccountId,
      fromAccountId,
      transactionId,
      amountToTransfer,
      amountToReceive,
    } = input;

    const { amount: debitAmount, currency: debitCurrency } =
      await this.lEService.createDebit(
        {
          amount: amountToTransfer.amount,
          currency: amountToTransfer.currency,
          accountId: fromAccountId,
          transactionId,
        },
        tx,
      );

    const { amount: creditAmount, currency: creditCurrency } =
      await this.lEService.createCredit(
        {
          amount: amountToReceive.amount,
          currency: amountToReceive.currency,
          accountId: toAccountId,
          transactionId,
        },
        tx,
      );
    return {
      debitAmount: new Money(debitAmount, debitCurrency),
      creditAmount: new Money(creditAmount, creditCurrency),
    };
  }
}
