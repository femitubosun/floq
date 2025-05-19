import { VirtualAccountDetailOutputDto } from '@/ledger/__defs__/accounts.dto';
import { Money } from '@/common/objects/money';
import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { TransactionService } from '@/ledger/services/transaction.service';
import { VirtualAccountService } from '@/ledger/services/virtual-account.service';
import { PrismaService } from '@/infrastructure/prisma/prisma.service';
import { FxService } from '@/fx/services/fx.service';
import { InitiatorTypeType } from '@/infrastructure/prisma/__defs__';
import { CreateLedgerEntriesForTransactionUseCase } from '@/ledger/use-cases/transactions/create-ledger-entries.use-case';
import { FloqDecimal } from '@/common/__defs__';

interface TransferCommitInput {
  idempotencyKey: string;
  initiatorId?: string;
  initiatorType: InitiatorTypeType;
  deps: TransferDependencies;
}

interface TransferDependencies {
  txService: TransactionService;
  fxService: FxService;
  ledgerUseCase: CreateLedgerEntriesForTransactionUseCase;
  vaService: VirtualAccountService;
  prisma: PrismaService;
}

export class Transfer {
  constructor(
    private readonly from: VirtualAccountDetailOutputDto,
    private readonly to: VirtualAccountDetailOutputDto,
    private readonly amount: Money,
  ) {}

  static create(input: {
    from: VirtualAccountDetailOutputDto;
    to: VirtualAccountDetailOutputDto;
    amount: Money;
  }) {
    if (input.amount.currency !== input.from.currency) {
      throw new BadRequestException(
        'Amount and From account currencies  must match',
      );
    }

    if (
      new Money(input.from.balance, input.from.currency).isLessThan(
        input.amount,
      )
    ) {
      throw new BadRequestException('Insufficient funds');
    }

    return new Transfer(input.from, input.to, input.amount);
  }

  async commit(input: TransferCommitInput) {
    const { idempotencyKey, initiatorId, initiatorType, deps } = input;

    const { txService, ledgerUseCase, vaService, fxService, prisma } = deps;

    return prisma.runInTransaction(async (tx) => {
      const rate = await fxService.getRate(
        this.to.currency,
        this.from.currency,
      );

      const transaction = await txService.createTransaction(
        {
          type: 'TRANSFER',
          idempotencyKey,
          initiatorType,
          initiatorId,
          status: 'COMMITTED',
        },
        tx,
      );

      const rateSnapShot = await fxService.createSnapshot(
        {
          baseCurrency: this.from.currency,
          quoteCurrency: this.to.currency,
          rate,
          transactionId: transaction.id,
          provider: 'OPENEXCHANGERATES',
        },
        tx,
      );

      await txService.update(
        transaction.id,
        {
          fxSnapshotId: rateSnapShot.id,
        },
        tx,
      );

      const { creditAmount, debitAmount } = await ledgerUseCase.execute(
        {
          fromAccountId: this.from.id,
          toAccountId: this.to.id,
          transactionId: transaction.id,
          amountToTransfer: this.amount,
          amountToReceive: this.#getLedgerAmounts(rate).creditAmount,
        },
        tx,
      );

      await Promise.all([
        vaService.updateBalance(
          { id: this.from.id, amount: debitAmount.negated() },
          tx,
        ),
        vaService.updateBalance({ id: this.to.id, amount: creditAmount }, tx),
      ]);

      return { transaction, creditAmount, debitAmount, rateSnapShot };
    });
  }

  async reverse(
    input: TransferCommitInput & {
      originalTransaction: { id: string; fxSnapshotId?: string };
    },
  ) {
    const {
      idempotencyKey,
      initiatorId,
      initiatorType,
      deps,
      originalTransaction,
    } = input;
    const { txService, fxService, ledgerUseCase, vaService, prisma } = deps;

    return prisma.runInTransaction(async (tx) => {
      if (!originalTransaction.fxSnapshotId) {
        throw new InternalServerErrorException(
          'Original Transaction not found',
        );
      }

      const fxSnapshot = await fxService.getSnapshotById(
        originalTransaction.fxSnapshotId,
      );

      if (!fxSnapshot) {
        throw new InternalServerErrorException(
          'Original FX Snapshot not found',
        );
      }

      const rate = fxSnapshot.rate;
      const baseCurrency = fxSnapshot.baseCurrency;
      const quoteCurrency = fxSnapshot.quoteCurrency;

      const reversalTransaction = await txService.createTransaction(
        {
          type: 'REVERSAL',
          idempotencyKey,
          initiatorType,
          initiatorId,
          status: 'COMMITTED',
          relatedTransactionId: originalTransaction.id,
        },
        tx,
      );

      const reversalSnapshot = await fxService.createSnapshot({
        baseCurrency,
        quoteCurrency,
        rate,
        transactionId: reversalTransaction.id,
        provider: 'OPENEXCHANGERATES',
      });

      const { creditAmount, debitAmount } = await ledgerUseCase.execute(
        {
          fromAccountId: this.to.id,
          toAccountId: this.from.id,
          transactionId: reversalTransaction.id,
          amountToTransfer: this.#getLedgerAmounts(rate).debitAmount,
          amountToReceive: this.#getLedgerAmounts(rate).debitAmount,
        },
        tx,
      );

      await Promise.all([
        vaService.updateBalance(
          { id: this.to.id, amount: creditAmount.negated() },
          tx,
        ),
        vaService.updateBalance({ id: this.from.id, amount: debitAmount }, tx),
      ]);

      return {
        reversalTransaction,
        creditAmount,
        debitAmount,
        reversalSnapshot,
      };
    });
  }

  #getLedgerAmounts(rate: FloqDecimal) {
    const creditAmount =
      this.from.currency === this.to.currency
        ? this.amount
        : this.amount.multiply(rate);
    const debitAmount =
      this.from.currency === this.to.currency
        ? this.amount
        : this.amount.multiply(rate);
    return { creditAmount, debitAmount };
  }
}
