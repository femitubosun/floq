import { Injectable } from '@nestjs/common';
import { CreateLedgerEntryInputSchema } from '../__defs__/ledger-entry.dto';
import { Prisma } from '@/infrastructure/prisma/generated';
import { PrismaService } from '@/infrastructure/prisma/prisma.service';

@Injectable()
export class LedgerEntryRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(
    data: CreateLedgerEntryInputSchema,
    tx?: Prisma.TransactionClient,
  ) {
    return (tx ? tx.ledgerEntry : this.#LedgerEntry).create({
      data,
    });
  }

  #LedgerEntry = this.prismaService.ledgerEntry;
}
