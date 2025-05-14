import { Test, TestingModule } from '@nestjs/testing';
import { CreateLedgerEntriesForTransactionsUseCase } from './create-ledger-entries.use-case';
import { LedgerEntryService } from '@/ledger/services/ledger-entry.service';
import {
  CreateLedgerEntriesForTransactionInputSchema,
  LedgerEntryDtoSchema,
} from '@/ledger/__defs__/ledger-entry.dto';
import { Prisma } from '@/infrastructure/prisma/generated';
import { Mocked } from 'jest-mock';
import { Money } from '@/common/objects/money';
import { FloqDecimal } from '@/common/__defs__';

jest.mock('@/ledger/services/ledger-entry.service');

describe('CreateLedgerEntriesForTransactionsUseCase', () => {
  let useCase: CreateLedgerEntriesForTransactionsUseCase;
  let mockLedgerEntryService: Mocked<LedgerEntryService>;

  const mockTxClient = {} as unknown as Prisma.TransactionClient;

  const mockInput: CreateLedgerEntriesForTransactionInputSchema = {
    toAccountId: 'account-to-789',
    fromAccountId: 'account-from-123',
    transactionId: 'txn-abc-456',
    amount: new Money(new FloqDecimal(150.75), 'USD'),
  };

  const mockOutput: LedgerEntryDtoSchema = {
    createdAt: new Date(),
    currency: 'USD',
    entryType: 'CREDIT',
    amount: new FloqDecimal(150.75),
    id: '111',
    transactionId: '111',
    updatedAt: new Date(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateLedgerEntriesForTransactionsUseCase,
        LedgerEntryService,
      ],
    }).compile();

    useCase = module.get<CreateLedgerEntriesForTransactionsUseCase>(
      CreateLedgerEntriesForTransactionsUseCase,
    );
    mockLedgerEntryService =
      module.get<Mocked<LedgerEntryService>>(LedgerEntryService);

    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(useCase).toBeDefined();
  });

  describe('execute', () => {
    it('should call createDebit and createCredit on LedgerEntryService with correct parameters and no transaction client', async () => {
      mockLedgerEntryService.createDebit.mockResolvedValue(undefined as any); // Assuming void or some DTO
      mockLedgerEntryService.createCredit.mockResolvedValue(undefined as any);

      await useCase.execute(mockInput);

      expect(mockLedgerEntryService.createDebit).toHaveBeenCalledWith(
        {
          amount: mockInput.amount.amount,
          currency: mockInput.amount.currency,
          accountId: mockInput.fromAccountId,
          transactionId: mockInput.transactionId,
        },
        undefined, // Explicitly checking for undefined tx client
      );

      expect(mockLedgerEntryService.createCredit).toHaveBeenCalledWith(
        {
          amount: mockInput.amount.amount,
          currency: mockInput.amount.currency,
          accountId: mockInput.toAccountId,
          transactionId: mockInput.transactionId,
        },
        undefined, // Explicitly checking for undefined tx client
      );
    });

    it('should call createDebit and createCredit on LedgerEntryService with correct parameters and a transaction client', async () => {
      mockLedgerEntryService.createDebit.mockResolvedValue(
        new Money(mockOutput.amount, mockOutput.currency),
      );
      mockLedgerEntryService.createCredit.mockResolvedValue(
        new Money(mockOutput.amount, mockOutput.currency),
      );

      await useCase.execute(mockInput, mockTxClient);

      expect(mockLedgerEntryService.createDebit).toHaveBeenCalledWith(
        {
          amount: mockInput.amount.amount,
          currency: mockInput.amount.currency,
          accountId: mockInput.fromAccountId,
          transactionId: mockInput.transactionId,
        },
        mockTxClient,
      );

      expect(mockLedgerEntryService.createCredit).toHaveBeenCalledWith(
        {
          amount: mockInput.amount.amount,
          currency: mockInput.amount.currency,
          accountId: mockInput.toAccountId,
          transactionId: mockInput.transactionId,
        },
        mockTxClient,
      );
    });

    it('should propagate error if createCredit fails (after createDebit succeeds)', async () => {
      const creditError = new Error('Failed to create credit entry');
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      mockLedgerEntryService.createDebit.mockResolvedValue(undefined as any);
      mockLedgerEntryService.createCredit.mockRejectedValue(creditError);

      await expect(useCase.execute(mockInput)).rejects.toThrow(creditError);

      expect(mockLedgerEntryService.createDebit).toHaveBeenCalledTimes(1);
      expect(mockLedgerEntryService.createCredit).toHaveBeenCalledTimes(1);
    });
  });
});
