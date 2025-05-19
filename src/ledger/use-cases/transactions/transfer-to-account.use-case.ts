import { Money } from '@/common/objects/money';
import { CacheService } from '@/infrastructure/cache/services/cache.service';
import { TransferToAccountInputDto } from '@/ledger/__defs__/transaction.dto';
import { TransactionService } from '@/ledger/services/transaction.service';
import { VirtualAccountService } from '@/ledger/services/virtual-account.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLedgerEntriesForTransactionUseCase } from './create-ledger-entries.use-case';
import { PrismaService } from '@/infrastructure/prisma/prisma.service';
import { VirtualAccountsCacheKeys } from '@/ledger/utils';
import { FloqDecimal } from '@/common/__defs__';
import { FxService } from '@/fx/services/fx.service';
import { Transfer } from '@/ledger/domain/transfer';

@Injectable()
export class TransferToAccountUseCase {
  constructor(
    private readonly vaService: VirtualAccountService,
    private readonly txnService: TransactionService,
    private readonly crLedgerEntriesUsc: CreateLedgerEntriesForTransactionUseCase,
    private readonly cacheService: CacheService,
    private readonly prismaService: PrismaService,
    private readonly fxService: FxService,
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

    const transfer = Transfer.create({
      from: fromAccount,
      to: toAccount,
      amount: new Money(new FloqDecimal(amount), currency),
    });

    const { transaction: createdTransaction } = await transfer.commit({
      idempotencyKey,
      initiatorId,
      initiatorType,
      deps: {
        ledgerUseCase: this.crLedgerEntriesUsc,
        prisma: this.prismaService,
        txService: this.txnService,
        vaService: this.vaService,
        fxService: this.fxService,
      },
    });

    await this.cacheService.invalidateByTag([
      VirtualAccountsCacheKeys.getDomainPrefix(),
      VirtualAccountsCacheKeys.getDomainPrefix(fromAccountId),
      VirtualAccountsCacheKeys.getDomainPrefix(toAccountId),
    ]);

    return this.txnService.findById(createdTransaction.id);
  }
}
