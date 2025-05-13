import { Money } from '@/common/objects/money';
import { CacheService } from '@/infrastructure/cache/services/cache.service';
import { TransferToAccountInputDto } from '@/ledger/__defs__/transaction.dto';
import { TransactionService } from '@/ledger/services/transaction.service';
import { VirtualAccountService } from '@/ledger/services/virtual-account.service';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateLedgerEntriesForTransactionsUseCase } from './create-ledge-entries.use-case';
import { PrismaService } from '@/infrastructure/prisma/prisma.service';
import { VirtualAccountsCacheKeys } from '@/ledger/utils';
import Decimal from 'decimal.js';

@Injectable()
export class TransferToAccountUseCase {
  constructor(
    private readonly vaService: VirtualAccountService,
    private readonly txnService: TransactionService,
    private readonly crLedgerEntriesUsc: CreateLedgerEntriesForTransactionsUseCase,
    private readonly cacheService: CacheService,
    private readonly prismaService: PrismaService,
  ) {}

  async execute(input: TransferToAccountInputDto) {
    const {
      amount,
      currency,
      idempotencyKey,
      toAccountId,
      fromAccountId,
      initiatorId,
      initiatorType,
    } = input;

    const existingTransaction =
      await this.txnService.findByIdempotencyKey(idempotencyKey);

    if (existingTransaction) {
      return existingTransaction;
    }

    const [fromAccount, toAccount] = await Promise.all([
      this.vaService.getById(fromAccountId),
      this.vaService.getById(toAccountId),
    ]);

    if (!fromAccount) {
      throw new NotFoundException('From Account not found');
    }

    if (!toAccount) {
      throw new NotFoundException('To Account not found');
    }

    const amountToTransfer = new Money(new Decimal(amount), currency);

    const fromAccountBalance = new Money(
      fromAccount.balance,
      fromAccount.currency,
    );

    if (fromAccountBalance.isLessThan(amountToTransfer)) {
      throw new BadRequestException('Insufficient balance');
    }

    await this.prismaService.runInTransaction(async (tx) => {
      const transaction = await this.txnService.createTransaction(
        {
          type: 'TRANSFER',
          idempotencyKey,
          initiatorId,
          initiatorType,
        },
        tx,
      );

      await this.crLedgerEntriesUsc.execute(
        {
          transactionId: transaction.id,
          fromAccountId: fromAccount.id,
          toAccountId: toAccount.id,
          amount: amountToTransfer,
        },
        tx,
      );

      await this.vaService.updateBalance(
        {
          id: fromAccount.id,
          amount: amountToTransfer.negated(),
        },
        tx,
      );

      await this.vaService.updateBalance(
        {
          id: toAccount.id,
          amount: amountToTransfer,
        },
        tx,
      );
    });

    await this.cacheService.invalidateByTag([
      VirtualAccountsCacheKeys.getDomainPrefix(),
      VirtualAccountsCacheKeys.getDomainPrefix(fromAccountId),
      VirtualAccountsCacheKeys.getDomainPrefix(toAccountId),
    ]);
  }
}
