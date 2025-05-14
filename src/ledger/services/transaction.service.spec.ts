import { Test, TestingModule } from '@nestjs/testing';
import { TransactionService } from './transaction.service';
import { TransactionRepository } from '../repositories/transcation.repository';
import {
  CreateTransactionInputDto,
  TransactionDtoSchema,
} from '../__defs__/transaction.dto';
import { Prisma } from '@/infrastructure/prisma/generated';
import { Mocked } from 'jest-mock';

// Mock the repository
jest.mock('../repositories/transcation.repository');

describe('TransactionService', () => {
  let service: TransactionService;
  let mockTransactionRepository: Mocked<TransactionRepository>;

  // Mock a Prisma TransactionClient
  const mockTxClient = {} as unknown as Prisma.TransactionClient;

  const mockCreateInput: CreateTransactionInputDto = {
    type: 'TRANSFER',
    initiatorId: 'user-123',
    initiatorType: 'USER',
    idempotencyKey: 'idempotency-key-abc-123',
  };

  const mockTransaction: TransactionDtoSchema = {
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

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionService, TransactionRepository], // TransactionRepository will be auto-mocked
    }).compile();

    service = module.get<TransactionService>(TransactionService);
    mockTransactionRepository = module.get(TransactionRepository);

    // Reset mocks before each test
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createTransaction', () => {
    it('should call repository.createTransaction with the given transaction and no transaction client', async () => {
      mockTransactionRepository.createTransaction.mockResolvedValue(
        mockTransaction,
      );

      const result = await service.createTransaction(mockCreateInput);

      expect(mockTransactionRepository.createTransaction).toHaveBeenCalledWith(
        mockCreateInput,
        undefined,
      );
      expect(result).toEqual(mockTransaction);
    });

    it('should call repository.createTransaction with the given transaction and a transaction client', async () => {
      mockTransactionRepository.createTransaction.mockResolvedValue(
        mockTransaction,
      );

      const result = await service.createTransaction(
        mockCreateInput,
        mockTxClient,
      );

      expect(mockTransactionRepository.createTransaction).toHaveBeenCalledWith(
        mockCreateInput,
        mockTxClient,
      );
      expect(result).toEqual(mockTransaction);
    });

    it('should propagate errors from repository.createTransaction', async () => {
      const createError = new Error('Failed to create transaction');
      mockTransactionRepository.createTransaction.mockRejectedValue(
        createError,
      );

      await expect(service.createTransaction(mockCreateInput)).rejects.toThrow(
        createError,
      );
    });
  });

  describe('findByIdempotencyKey', () => {
    const idempotencyKey = 'test-idempotency-key';

    it('should call repository.findIdByIdempotencyKey with the given key and return its result', async () => {
      const expectedResult: TransactionDtoSchema = {
        id: 'txn-found-id',
        type: 'TRANSFER' as const,
        status: 'PENDING' as const,
        initiatorType: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      mockTransactionRepository.findIdByIdempotencyKey.mockResolvedValue(
        expectedResult,
      );

      const result = await service.findByIdempotencyKey(idempotencyKey);

      expect(
        mockTransactionRepository.findIdByIdempotencyKey,
      ).toHaveBeenCalledWith(idempotencyKey);
      expect(result).toEqual(expectedResult);
    });

    it('should return null if repository.findIdByIdempotencyKey returns null', async () => {
      mockTransactionRepository.findIdByIdempotencyKey.mockResolvedValue(null);

      const result = await service.findByIdempotencyKey(idempotencyKey);

      expect(
        mockTransactionRepository.findIdByIdempotencyKey,
      ).toHaveBeenCalledWith(idempotencyKey);
      expect(result).toBeNull();
    });

    it('should propagate errors from repository.findIdByIdempotencyKey', async () => {
      const findError = new Error('Failed to find by idempotency key');
      mockTransactionRepository.findIdByIdempotencyKey.mockRejectedValue(
        findError,
      );

      await expect(
        service.findByIdempotencyKey(idempotencyKey),
      ).rejects.toThrow(findError);
    });
  });
});
