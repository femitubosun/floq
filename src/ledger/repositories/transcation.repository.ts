import { PrismaService } from '@/infrastructure/prisma/prisma.service';
import {
  CreateTransactionInputDto,
  TransactionDtoSchema,
} from '../__defs__/transaction.dto';
import { Prisma } from '@/infrastructure/prisma/generated';
import { Injectable } from '@nestjs/common';
import { zodToPrismaSelect } from '@/infrastructure/prisma/utils/prisma';

@Injectable()
export class TransactionRepository {
  constructor(private readonly prismaService: PrismaService) {}

  #Transaction = this.prismaService.transaction;
  #detailSelect = zodToPrismaSelect(TransactionDtoSchema);

  async createTransaction(
    input: CreateTransactionInputDto,
    tx?: Prisma.TransactionClient,
  ): Promise<TransactionDtoSchema> {
    return (tx ? tx.transaction : this.#Transaction).create({
      data: input,
      select: zodToPrismaSelect(TransactionDtoSchema),
    });
  }

  async findIdByIdempotencyKey(
    idempotencyKey: string,
  ): Promise<TransactionDtoSchema | null> {
    return this.#Transaction.findFirst({
      where: {
        idempotencyKey,
      },
      select: this.#detailSelect,
    });
  }

  findById(id: string) {
    return this.#Transaction.findUnique({
      where: { id },
      select: this.#detailSelect,
    });
  }
}
