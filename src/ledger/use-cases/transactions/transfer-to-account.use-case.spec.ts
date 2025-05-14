import { FloqDecimal } from '@/common/__defs__';
import { Money } from '@/common/objects/money';
import { CacheService } from '@/infrastructure/cache/services/cache.service';
import { PrismaService } from '@/infrastructure/prisma/prisma.service';
import { VirtualAccountDetailOutputDto } from '@/ledger/__defs__/accounts.dto';
import { TransactionService } from '@/ledger/services/transaction.service';
import { VirtualAccountService } from '@/ledger/services/virtual-account.service';
import { VirtualAccountsCacheKeys } from '@/ledger/utils';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CreateLedgerEntriesForTransactionsUseCase } from './create-ledger-entries.use-case';
import { TransferToAccountUseCase } from './transfer-to-account.use-case';

describe('TransferToAccountUseCase', () => {
  let useCase: TransferToAccountUseCase;
  let vaService: jest.Mocked<VirtualAccountService>;
  let txnService: jest.Mocked<TransactionService>;
  let crLedgerEntriesUsc: jest.Mocked<CreateLedgerEntriesForTransactionsUseCase>;
  let cacheService: jest.Mocked<CacheService>;
  let prismaService: jest.Mocked<PrismaService>;

  const mockFromAccount: VirtualAccountDetailOutputDto = {
    id: 'from-account-123',
    balance: new FloqDecimal(1000),
    currency: 'USD' as const,
    name: '',
    createdAt: new Date(),
    updatedAt: new Date(),
    ledgerEntries: [],
  };

  const mockToAccount: VirtualAccountDetailOutputDto = {
    id: 'to-account-456',
    balance: new FloqDecimal(500),
    currency: 'USD' as const,
    name: '',
    createdAt: new Date(),
    updatedAt: new Date(),
    ledgerEntries: [],
  };

  const mockTransaction = {
    id: 'txn-789',
    type: 'TRANSFER' as const,
    status: 'PENDING' as const,
    initiatorId: 'user-123',
    initiatorType: 'USER' as const,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const mockTransferInput = {
    amount: 100,
    currency: 'USD' as const,
    idempotencyKey: 'idempotency-key-123',
    fromAccountId: mockFromAccount.id,
    toAccountId: mockToAccount.id,
    initiatorId: 'user-123',
    initiatorType: 'USER' as const,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TransferToAccountUseCase,
        {
          provide: VirtualAccountService,
          useValue: {
            getById: jest.fn(),
            updateBalance: jest.fn(),
          },
        },
        {
          provide: TransactionService,
          useValue: {
            findByIdempotencyKey: jest.fn(),
            createTransaction: jest.fn(),
          },
        },
        {
          provide: CreateLedgerEntriesForTransactionsUseCase,
          useValue: {
            execute: jest.fn(),
          },
        },
        {
          provide: CacheService,
          useValue: {
            invalidateByTag: jest.fn(),
          },
        },
        {
          provide: PrismaService,
          useValue: {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
            runInTransaction: jest.fn((callback) => callback({ prisma: 'tx' })),
          },
        },
      ],
    }).compile();

    useCase = module.get<TransferToAccountUseCase>(TransferToAccountUseCase);
    vaService = module.get(VirtualAccountService);
    txnService = module.get(TransactionService);
    crLedgerEntriesUsc = module.get(CreateLedgerEntriesForTransactionsUseCase);
    cacheService = module.get(CacheService);
    prismaService = module.get(PrismaService);
  });

  it('should be defined', () => {
    expect(useCase).toBeDefined();
  });

  it('should return existing transaction if idempotency key exists', async () => {
    txnService.findByIdempotencyKey.mockResolvedValue(mockTransaction);

    const result = await useCase.execute(mockTransferInput);

    expect(result).toEqual(mockTransaction);
    expect(txnService.findByIdempotencyKey).toHaveBeenCalledWith(
      mockTransferInput.idempotencyKey,
    );
    expect(vaService.getById).not.toHaveBeenCalled();
  });

  it('should throw NotFoundException when from account does not exist', async () => {
    txnService.findByIdempotencyKey.mockResolvedValue(null);
    vaService.getById.mockImplementation(async (id) => {
      if (id === mockFromAccount.id) return Promise.resolve(null);
      if (id === mockToAccount.id) return Promise.resolve(mockToAccount);
      return null;
    });

    await expect(useCase.execute(mockTransferInput)).rejects.toThrow(
      new NotFoundException('From Account not found'),
    );
  });

  it('should throw NotFoundException when to account does not exist', async () => {
    txnService.findByIdempotencyKey.mockResolvedValue(null);
    vaService.getById.mockImplementation(async (id) => {
      if (id === mockFromAccount.id) return Promise.resolve(mockFromAccount);
      if (id === mockToAccount.id) return Promise.resolve(null);
      return null;
    });

    await expect(useCase.execute(mockTransferInput)).rejects.toThrow(
      new NotFoundException('To Account not found'),
    );
  });

  it('should throw BadRequestException when from account has insufficient balance', async () => {
    const lowBalanceAccount = {
      ...mockFromAccount,
      balance: new FloqDecimal(50),
    };

    txnService.findByIdempotencyKey.mockResolvedValue(null);
    vaService.getById.mockImplementation(async (id) => {
      if (id === mockFromAccount.id) return Promise.resolve(lowBalanceAccount);
      if (id === mockToAccount.id) return Promise.resolve(mockToAccount);
      return null;
    });

    await expect(useCase.execute(mockTransferInput)).rejects.toThrow(
      new BadRequestException('Insufficient balance'),
    );
  });

  it('should successfully transfer funds between accounts', async () => {
    txnService.findByIdempotencyKey
      .mockResolvedValueOnce(null)
      .mockResolvedValueOnce(mockTransaction);
    vaService.getById.mockImplementation(async (id) => {
      if (id === mockFromAccount.id) return Promise.resolve(mockFromAccount);
      if (id === mockToAccount.id) return Promise.resolve(mockToAccount);
      return null;
    });
    txnService.createTransaction.mockResolvedValue(mockTransaction);
    crLedgerEntriesUsc.execute.mockResolvedValue(undefined);
    vaService.updateBalance.mockResolvedValue({
      id: mockFromAccount.id,
      balance: new FloqDecimal(900),
    });
    cacheService.invalidateByTag.mockResolvedValue(undefined);

    const result = await useCase.execute(mockTransferInput);

    expect(result).toEqual(mockTransaction);
    expect(prismaService.runInTransaction).toHaveBeenCalled();
    expect(txnService.createTransaction).toHaveBeenCalledWith(
      {
        type: 'TRANSFER',
        idempotencyKey: mockTransferInput.idempotencyKey,
        initiatorId: mockTransferInput.initiatorId,
        initiatorType: mockTransferInput.initiatorType,
        status: 'COMMITTED',
      },
      expect.anything(),
    );
    expect(crLedgerEntriesUsc.execute).toHaveBeenCalledWith(
      {
        transactionId: mockTransaction.id,
        fromAccountId: mockFromAccount.id,
        toAccountId: mockToAccount.id,
        amount: new Money(
          new FloqDecimal(mockTransferInput.amount),
          mockTransferInput.currency,
        ),
      },
      expect.anything(),
    );
    expect(vaService.updateBalance).toHaveBeenCalledTimes(2);
    expect(cacheService.invalidateByTag).toHaveBeenCalledWith([
      VirtualAccountsCacheKeys.getDomainPrefix(),
      VirtualAccountsCacheKeys.getDomainPrefix(mockFromAccount.id),
      VirtualAccountsCacheKeys.getDomainPrefix(mockToAccount.id),
    ]);
  });
});
