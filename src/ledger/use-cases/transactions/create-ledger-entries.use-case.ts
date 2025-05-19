import { Prisma } from '@/infrastructure/prisma/generated';
import { CreateLedgerEntriesForTransactionInputSchema } from '@/ledger/__defs__/ledger-entry.dto';
import { LedgerEntryService } from '@/ledger/services/ledger-entry.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateLedgerEntriesForTransactionUseCase {
  constructor(private readonly lEService: LedgerEntryService) {}

  async execute(
    input: CreateLedgerEntriesForTransactionInputSchema,
    tx?: Prisma.TransactionClient,
  ) {
    const {
      toAccountId,
      fromAccountId,
      transactionId,
      amountToReceive,
      amountToTransfer,
    } = input;

    const [creditAmount, debitAmount] = await Promise.all([
      this.lEService.createDebit(
        {
          amount: amountToTransfer.amount,
          currency: amountToTransfer.currency,
          accountId: fromAccountId,
          transactionId,
        },
        tx,
      ),
      this.lEService.createCredit(
        {
          amount: amountToReceive.amount,
          currency: amountToReceive.currency,
          accountId: toAccountId,
          transactionId,
        },
        tx,
      ),
    ]);

    return {
      debitAmount,
      creditAmount,
    };
  }
}
