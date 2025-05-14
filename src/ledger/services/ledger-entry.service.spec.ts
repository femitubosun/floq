import { Test, TestingModule } from '@nestjs/testing';
import { LedgerEntryService } from './ledger-entry.service';
import { LedgerEntryRepository } from '@/ledger/repositories/ledger-entry.repository';
import {
  CreateLedgerEntryInputSchema,
  LedgerEntryDtoSchema,
} from '@/ledger/__defs__/ledger-entry.dto';
import { Prisma } from '@/infrastructure/prisma/generated';
import { Mocked } from 'jest-mock';
import { FloqDecimal } from '@/common/__defs__';
import { Money } from '@/common/objects/money';

// Mock the repository
jest.mock('@/ledger/repositories/ledger-entry.repository');

describe('LedgerEntryService', () => {
  let service: LedgerEntryService;
  let mockLedgerEntryRepository: Mocked<LedgerEntryRepository>;

  // Mock a Prisma TransactionClient
  const mockTxClient = {
    // Add any methods your transaction client might need if it were more complex
  } as unknown as Prisma.TransactionClient;

  const mockBaseInput: Omit<CreateLedgerEntryInputSchema, 'entryType'> = {
    currency: 'NGN',
    accountId: 'va-123',
    transactionId: 'txn-456',
    amount: new FloqDecimal(100),
  };

  const mockCreatedLedgerEntry: LedgerEntryDtoSchema = {
    id: 'le-789',
    transactionId: 'txn-456',
    entryType: 'CREDIT', // This will be overridden in specific tests
    amount: new Money(new FloqDecimal(100), 'NGN').amount,
    currency: 'NGN',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LedgerEntryService, LedgerEntryRepository], // LedgerEntryRepository will be auto-mocked by jest.mock
    }).compile();

    service = module.get<LedgerEntryService>(LedgerEntryService);
    mockLedgerEntryRepository = module.get(LedgerEntryRepository);

    // Reset mocks before each test
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createDebit', () => {
    it('should call repository.create with entryType DEBIT and no transaction client', async () => {
      mockLedgerEntryRepository.create.mockResolvedValue({
        ...mockCreatedLedgerEntry,
        entryType: 'DEBIT',
      });

      const result = await service.createDebit(mockBaseInput);

      expect(mockLedgerEntryRepository.create).toHaveBeenCalledWith(
        {
          ...mockBaseInput,
          entryType: 'DEBIT',
        },
        undefined, // Explicitly checking for undefined tx client
      );
      expect(result).toBeInstanceOf(Money);
    });

    it('should call repository.create with entryType DEBIT and a transaction client', async () => {
      mockLedgerEntryRepository.create.mockResolvedValue({
        ...mockCreatedLedgerEntry,
        entryType: 'DEBIT',
      });

      const result = await service.createDebit(mockBaseInput, mockTxClient);

      expect(mockLedgerEntryRepository.create).toHaveBeenCalledWith(
        {
          ...mockBaseInput,
          entryType: 'DEBIT',
        },
        mockTxClient,
      );
      expect(result).toBeInstanceOf(Money);
    });
  });

  describe('createCredit', () => {
    it('should call repository.create with entryType CREDIT and no transaction client', async () => {
      mockLedgerEntryRepository.create.mockResolvedValue({
        ...mockCreatedLedgerEntry,
        entryType: 'CREDIT',
      });

      const result = await service.createCredit(mockBaseInput);

      expect(mockLedgerEntryRepository.create).toHaveBeenCalledWith(
        {
          ...mockBaseInput,
          entryType: 'CREDIT',
        },
        undefined, // Explicitly checking for undefined tx client
      );
      expect(result).toBeInstanceOf(Money);
    });

    it('should call repository.create with entryType CREDIT and a transaction client', async () => {
      mockLedgerEntryRepository.create.mockResolvedValue({
        ...mockCreatedLedgerEntry,
        entryType: 'CREDIT',
      });

      const result = await service.createCredit(mockBaseInput, mockTxClient);

      expect(mockLedgerEntryRepository.create).toHaveBeenCalledWith(
        {
          ...mockBaseInput,
          entryType: 'CREDIT',
        },
        mockTxClient,
      );
      expect(result).toBeInstanceOf(Money);
    });
  });
});
