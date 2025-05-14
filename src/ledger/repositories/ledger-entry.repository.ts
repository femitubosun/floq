import { Injectable } from '@nestjs/common';
import {
  CreateLedgerEntryInputSchema,
  LedgerEntryDtoSchema,
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

  #LedgerEntry = this.prismaService.ledgerEntry;
}
