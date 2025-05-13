import { Injectable } from '@nestjs/common';
import { CreateTransactionInputDto } from '../__defs__/transaction.dto';
import { TransactionRepository } from '../repositories/transcation.repository';
import { Prisma } from '@/infrastructure/prisma/generated';

@Injectable()
export class TransactionService {
  constructor(private readonly repo: TransactionRepository) {}

  async createTransaction(
    transaction: CreateTransactionInputDto,
    tx?: Prisma.TransactionClient,
  ) {
    return this.repo.createTransaction(transaction, tx);
  }

  async findByIdempotencyKey(idempotencyKey: string) {
    return this.repo.findIdByIdempotencyKey(idempotencyKey);
  }
}
