import { Injectable } from '@nestjs/common';
import { LedgerEntryRepository } from '@/ledger/repositories/ledger-entry.repository';
import { CreateLedgerEntryInputSchema } from '@/ledger/__defs__/ledger-entry.dto';
import { Prisma } from '@/infrastructure/prisma/generated';

@Injectable()
export class LedgerEntryService {
  constructor(private readonly lERepo: LedgerEntryRepository) {}

  async createDebit(
    input: Omit<CreateLedgerEntryInputSchema, 'entryType'>,
    tx?: Prisma.TransactionClient,
  ) {
    return this.lERepo.create(
      {
        ...input,
        entryType: 'DEBIT',
      },
      tx,
    );
  }

  async createCredit(
    input: Omit<CreateLedgerEntryInputSchema, 'entryType'>,
    tx?: Prisma.TransactionClient,
  ) {
    return this.lERepo.create(
      {
        ...input,
        entryType: 'CREDIT',
      },
      tx,
    );
  }
}
