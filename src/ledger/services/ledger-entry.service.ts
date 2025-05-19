import { Injectable } from '@nestjs/common';
import { LedgerEntryRepository } from '@/ledger/repositories/ledger-entry.repository';
import {
  CreateLedgerEntryInputSchema,
  LedgerEntryDtoSchemaWithAccount,
} from '@/ledger/__defs__/ledger-entry.dto';
import { Prisma } from '@/infrastructure/prisma/generated';
import { Money } from '@/common/objects/money';

@Injectable()
export class LedgerEntryService {
  constructor(private readonly lERepo: LedgerEntryRepository) {}

  async findTransactionEntiries(transactionId: string): Promise<{
    creditEntry: LedgerEntryDtoSchemaWithAccount;
    debitEntry: LedgerEntryDtoSchemaWithAccount;
  } | null> {
    const ledgerEntries = await this.lERepo.getByTransactionId(transactionId);
    if (!ledgerEntries || ledgerEntries.length === 0) return null;

    const creditEntry = ledgerEntries.find((e) => e.entryType === 'CREDIT');
    const debitEntry = ledgerEntries.find((e) => e.entryType === 'DEBIT');

    if (!creditEntry || !debitEntry) return null;

    return { creditEntry, debitEntry };
  }

  async createDebit(
    input: Omit<CreateLedgerEntryInputSchema, 'entryType'>,
    tx?: Prisma.TransactionClient,
  ) {
    const res = await this.lERepo.create(
      {
        ...input,
        entryType: 'DEBIT',
      },
      tx,
    );

    return new Money(res.amount, res.currency);
  }

  async createCredit(
    input: Omit<CreateLedgerEntryInputSchema, 'entryType'>,
    tx?: Prisma.TransactionClient,
  ) {
    const res = await this.lERepo.create(
      {
        ...input,
        entryType: 'CREDIT',
      },
      tx,
    );

    return new Money(res.amount, res.currency);
  }
}
