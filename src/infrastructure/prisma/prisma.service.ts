import { Injectable, OnModuleInit } from '@nestjs/common';
import { Prisma, PrismaClient } from './generated';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async runInTransaction<T>(
    callback: (tx: Prisma.TransactionClient) => Promise<T>,
  ): Promise<T> {
    return this.$transaction(callback);
  }
}
