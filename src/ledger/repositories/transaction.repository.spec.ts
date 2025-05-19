import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '@/infrastructure/prisma/prisma.service';
import { TransactionRepository } from './transcation.repository';
import {
  CreateTransactionInputSchema,
  TransactionDtoSchema,
} from '../__defs__/transaction.dto';
import { Prisma } from '@/infrastructure/prisma/generated';
import { Mocked } from 'jest-mock';
import { zodToPrismaSelect } from '@/infrastructure/prisma/utils/prisma';

describe('TransactionRepository', () => {
  let repository: TransactionRepository;

  const mockPrismaTransactionDelegate = {
    create: jest.fn(),
    findFirst: jest.fn(),
  };

  const mockPrismaService = {
    transaction: mockPrismaTransactionDelegate,
  };

  const mockTxClient: Mocked<Prisma.TransactionClient> = {
    transaction: {
      create: jest.fn(),
      findFirst: jest.fn(),
      // Add other methods if your transaction client uses them for transactions
    },
  } as unknown as Mocked<Prisma.TransactionClient>;

  const mockCreateInput: CreateTransactionInputSchema = {
    type: 'TRANSFER',
    initiatorId: 'user-123',
    initiatorType: 'USER',
    idempotencyKey: 'idempotency-key-abc-123',
  };

  const mockCreatedTransaction: TransactionDtoSchema = {
    id: 'txn-xyz-789',
    type: 'TRANSFER',
    status: 'PENDING',
    initiatorId: 'user-123',
    initiatorType: 'USER',
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
    executedAt: null,
  };

  const selectArgs = zodToPrismaSelect(TransactionDtoSchema);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TransactionRepository,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    repository = module.get<TransactionRepository>(TransactionRepository);

    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  describe('createTransaction', () => {
    it('should create a transaction using the default Prisma client when no transaction client is provided', async () => {
      mockPrismaTransactionDelegate.create.mockResolvedValue(
        mockCreatedTransaction,
      );

      const result = await repository.createTransaction(mockCreateInput);

      expect(result).toEqual(mockCreatedTransaction);
      expect(mockPrismaTransactionDelegate.create).toHaveBeenCalledWith({
        data: mockCreateInput,
        select: selectArgs,
      });
      expect(mockTxClient.transaction.create).not.toHaveBeenCalled();
    });

    it('should create a transaction using the provided transaction client', async () => {
      mockTxClient.transaction.create.mockResolvedValue(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        mockCreatedTransaction as any, // Using 'as any' for mock simplicity
      );

      const result = await repository.createTransaction(
        mockCreateInput,
        mockTxClient,
      );

      expect(result).toEqual(mockCreatedTransaction);
      expect(mockTxClient.transaction.create).toHaveBeenCalledWith({
        data: mockCreateInput,
        select: selectArgs,
      });
      expect(mockPrismaTransactionDelegate.create).not.toHaveBeenCalled();
    });

    it('should propagate errors from the Prisma client during creation', async () => {
      const dbError = new Error('Database connection error');
      mockPrismaTransactionDelegate.create.mockRejectedValue(dbError);

      await expect(
        repository.createTransaction(mockCreateInput),
      ).rejects.toThrow(dbError);
      expect(mockPrismaTransactionDelegate.create).toHaveBeenCalledWith({
        data: mockCreateInput,
        select: selectArgs,
      });
    });

    it('should propagate errors from the transaction client during creation', async () => {
      const txError = new Error('Transaction client error');
      mockTxClient.transaction.create.mockRejectedValue(txError);

      await expect(
        repository.createTransaction(mockCreateInput, mockTxClient),
      ).rejects.toThrow(txError);
      expect(mockTxClient.transaction.create).toHaveBeenCalledWith({
        data: mockCreateInput,
        select: selectArgs,
      });
    });
  });

  describe('findIdByIdempotencyKey', () => {
    const idempotencyKey = 'test-idempotency-key';

    it('should return the transaction ID if found', async () => {
      const expectedResult: TransactionDtoSchema = {
        id: 'txn-found-id',
        type: 'TRANSFER',
        status: 'PENDING',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      mockPrismaTransactionDelegate.findFirst.mockResolvedValue(expectedResult);

      const result = await repository.findIdByIdempotencyKey(idempotencyKey);

      expect(result).toEqual(expectedResult);
      expect(mockPrismaTransactionDelegate.findFirst).toHaveBeenCalledWith({
        where: { idempotencyKey },
        select: selectArgs,
      });
    });

    it('should return null if no transaction is found for the idempotency key', async () => {
      mockPrismaTransactionDelegate.findFirst.mockResolvedValue(null);

      const result = await repository.findIdByIdempotencyKey(idempotencyKey);

      expect(result).toBeNull();
      expect(mockPrismaTransactionDelegate.findFirst).toHaveBeenCalledWith({
        where: { idempotencyKey },
        select: selectArgs,
      });
    });

    it('should propagate errors from the Prisma client during findIdByIdempotencyKey', async () => {
      const dbError = new Error('Database find error');
      mockPrismaTransactionDelegate.findFirst.mockRejectedValue(dbError);

      await expect(
        repository.findIdByIdempotencyKey(idempotencyKey),
      ).rejects.toThrow(dbError);
      expect(mockPrismaTransactionDelegate.findFirst).toHaveBeenCalledWith({
        where: { idempotencyKey },
        select: selectArgs,
      });
    });
  });
});
