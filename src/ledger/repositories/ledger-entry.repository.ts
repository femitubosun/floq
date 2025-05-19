import { Injectable } from '@nestjs/common';
import {
  CreateLedgerEntryInputSchema,
  LedgerEntryDtoSchema,
  LedgerEntryDtoSchemaWithAccount,
} from '../__defs__/ledger-entry.dto';
import { Prisma } from '@/infrastructure/prisma/generated';
import { PrismaService } from '@/infrastructure/prisma/prisma.service';
import { zodToPrismaSelect } from '@/infrastructure/prisma/utils/prisma';

@Injectable()
export class LedgerEntryRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(
    data: CreateLedgerEntryInputSchema,
    tx?: Prisma.TransactionClient,
  ): Promise<LedgerEntryDtoSchema> {
    return (tx ? tx.ledgerEntry : this.#LedgerEntry).create({
      data,
      select: zodToPrismaSelect(LedgerEntryDtoSchema),
    });
  }

  async getByTransactionId(transactionId: string) {
    return this.#LedgerEntry.findMany({
      where: { transactionId },
      select: zodToPrismaSelect(LedgerEntryDtoSchemaWithAccount),
    });
  }

  #LedgerEntry = this.prismaService.ledgerEntry;
}
