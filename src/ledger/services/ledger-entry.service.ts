import { Injectable } from '@nestjs/common';
import { LedgerEntryRepository } from '@/ledger/repositories/ledger-entry.repository';
import { CreateLedgerEntryInputSchema } from '@/ledger/__defs__/ledger-entry.dto';
import { Prisma } from '@/infrastructure/prisma/generated';
import { Money } from '@/common/objects/money';

@Injectable()
export class LedgerEntryService {
  constructor(private readonly lERepo: LedgerEntryRepository) {}

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
