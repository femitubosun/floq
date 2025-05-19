import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '@/infrastructure/prisma/prisma.service';
import { LedgerEntryRepository } from './ledger-entry.repository';
import {
  CreateLedgerEntryInputSchema,
  LedgerEntryDtoSchema,
} from '../__defs__/ledger-entry.dto';
import { Prisma } from '@/infrastructure/prisma/generated';
import { Money } from '@/common/objects/money';
import { FloqDecimal } from '@/common/__defs__';
import { Mocked } from 'jest-mock';
import { zodToPrismaSelect } from '@/infrastructure/prisma/utils/prisma';

describe('LedgerEntryRepository', () => {
  let repository: LedgerEntryRepository;

  const mockPrismaLedgerEntryDelegate = {
    create: jest.fn(),
  };

  const mockPrismaService = {
    ledgerEntry: mockPrismaLedgerEntryDelegate,
  };

  const mockTxClient: Mocked<Prisma.TransactionClient> = {
    ledgerEntry: {
      create: jest.fn(),
    },
  } as unknown as Mocked<Prisma.TransactionClient>;

  const mockCreateInput: CreateLedgerEntryInputSchema = {
    currency: 'NGN',
    accountId: 'va-123',
    transactionId: 'txn-456',
    entryType: 'CREDIT',
    amount: new FloqDecimal(100),
  };

  const mockCreatedLedgerEntry: LedgerEntryDtoSchema = {
    createdAt: new Date(),
    updatedAt: new Date(),
    id: 'le-789',
    transactionId: 'txn-456',
    entryType: 'CREDIT',
    amount: new Money(new FloqDecimal(100), 'NGN').amount,
    currency: 'NGN',
  };

  const selectArgs = zodToPrismaSelect(LedgerEntryDtoSchema);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LedgerEntryRepository,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    repository = module.get<LedgerEntryRepository>(LedgerEntryRepository);

    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  describe('create', () => {
    it('should create a ledger entry using the default Prisma client when no transaction client is provided', async () => {
      mockPrismaLedgerEntryDelegate.create.mockResolvedValue(
        mockCreatedLedgerEntry,
      );

      const result = await repository.create(mockCreateInput);

      expect(result).toEqual(mockCreatedLedgerEntry);
      expect(mockPrismaLedgerEntryDelegate.create).toHaveBeenCalledWith({
        data: mockCreateInput,
        select: selectArgs,
      });
      expect(mockTxClient.ledgerEntry.create).not.toHaveBeenCalled();
    });

    it('should create a ledger entry using the provided transaction client', async () => {
      mockTxClient.ledgerEntry.create.mockResolvedValue(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        mockCreatedLedgerEntry as any,
      );

      const result = await repository.create(mockCreateInput, mockTxClient);

      expect(result).toEqual(mockCreatedLedgerEntry);
      expect(mockTxClient.ledgerEntry.create).toHaveBeenCalledWith({
        data: mockCreateInput,
        select: selectArgs,
      });
      expect(mockPrismaLedgerEntryDelegate.create).not.toHaveBeenCalled();
    });

    it('should propagate errors from the Prisma client during creation', async () => {
      const dbError = new Error('Database connection error');
      mockPrismaLedgerEntryDelegate.create.mockRejectedValue(dbError);

      await expect(repository.create(mockCreateInput)).rejects.toThrow(dbError);
      expect(mockPrismaLedgerEntryDelegate.create).toHaveBeenCalledWith({
        data: mockCreateInput,
        select: selectArgs,
      });
    });

    it('should propagate errors from the transaction client during creation', async () => {
      const txError = new Error('Transaction client error');
      mockTxClient.ledgerEntry.create.mockRejectedValue(txError);

      await expect(
        repository.create(mockCreateInput, mockTxClient),
      ).rejects.toThrow(txError);
      expect(mockTxClient.ledgerEntry.create).toHaveBeenCalledWith({
        data: mockCreateInput,
        select: selectArgs,
      });
    });
  });
});
