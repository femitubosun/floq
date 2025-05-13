import { PrismaService } from '@/infrastructure/prisma/prisma.service';
import { CreateTransactionInputDto } from '../__defs__/transaction.dto';
import { Prisma } from '@/infrastructure/prisma/generated';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TransactionRepository {
  constructor(private readonly prismaService: PrismaService) {}

  #Transaction = this.prismaService.transaction;

  async createTransaction(
    input: CreateTransactionInputDto,
    tx?: Prisma.TransactionClient,
  ) {
    return (tx ? tx.transaction : this.#Transaction).create({
      data: input,
    });
  }

  async findIdByIdempotencyKey(idempotencyKey: string) {
    return this.#Transaction.findFirst({
      where: {
        idempotencyKey,
      },
      select: {
        id: true,
      },
    });
  }
}
