import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '@/infrastructure/prisma/prisma.service';
import { VirtualAccountRepository } from './virtual-account.repository';
import {
  CreateVirtualAccountDto,
  VirtualAccountDetailSchema,
  VirtualAccountDtoSchema,
  VirtualAccountListingInput,
  VirtualAccountDto,
  VirtualAccountDetailOutputDto,
  VirtualAccountListingOutputDto,
} from '@/accounts/__defs__/accounts.dto';
import { Prisma } from '@/infrastructure/prisma/generated';
import { zodToPrismaSelect } from '@/infrastructure/prisma/utils/prisma';
import { toPrismaSkipTake } from '@/infrastructure/prisma/utils';

describe('VirtualAccountRepository', () => {
  let repository: VirtualAccountRepository;
  let prismaService: PrismaService;

  const mockVirtualAccountDtoSelect = zodToPrismaSelect(
    VirtualAccountDtoSchema,
  );
  const mockVirtualAccountDetailSelect = zodToPrismaSelect(
    VirtualAccountDetailSchema,
  );

  const mockVirtualAccount: VirtualAccountDto = {
    id: 'va-123',
    name: 'Test Account',
    currency: 'NGN',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const mockVirtualAccountDetail: VirtualAccountDetailOutputDto = {
    ...mockVirtualAccount,
    ledgerEntries: [],
  };

  // Mock PrismaService and its virtualAccount delegate
  const mockPrismaService = {
    virtualAccount: {
      create: jest.fn(),
      findMany: jest.fn(),
      count: jest.fn(),
      findFirst: jest.fn(),
      findUnique: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VirtualAccountRepository,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    repository = module.get<VirtualAccountRepository>(VirtualAccountRepository);
    prismaService = module.get<PrismaService>(PrismaService);

    // Reset mocks before each test
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  describe('createAccount', () => {
    it('should create a virtual account with the given input', async () => {
      const createInput: CreateVirtualAccountDto = {
        name: 'New Account',
        currency: 'USD',
        idempotencyKey: 'idempotency-key-create',
      };
      mockPrismaService.virtualAccount.create.mockResolvedValue(
        mockVirtualAccount,
      );

      const result = await repository.createAccount(createInput);

      expect(result).toEqual(mockVirtualAccount);
      expect(prismaService.virtualAccount.create).toHaveBeenCalledWith({
        data: createInput,
        select: mockVirtualAccountDtoSelect,
      });
    });
  });

  describe('list', () => {
    it('should list virtual accounts with pagination and filters', async () => {
      const listInput: VirtualAccountListingInput = {
        pagination: { page: 1, perPage: 10 },
        filters: { currency: 'NGN' },
        search: 'Test',
      };

      const mockAccounts = [mockVirtualAccount];
      const mockTotalCount = 1;
      const expectedSkipTake = toPrismaSkipTake(
        listInput.pagination || {
          page: 1,
          perPage: 100,
        },
      );

      // Mock the direct Prisma calls that findManyWithPagination would make
      mockPrismaService.virtualAccount.findMany.mockResolvedValue(mockAccounts);
      mockPrismaService.virtualAccount.count.mockResolvedValue(mockTotalCount);

      const expectedResult: VirtualAccountListingOutputDto = {
        data: mockAccounts,
        meta: {
          page: listInput.pagination?.page || 1,
          perPage: listInput.pagination?.perPage || 100,
          total: mockTotalCount,
          totalPages: Math.ceil(
            mockTotalCount / (listInput.pagination?.perPage || 100),
          ),
        },
      };

      const result = await repository.list(listInput);

      expect(result).toEqual(expectedResult);

      const expectedWhereClause: Prisma.VirtualAccountWhereInput = {
        currency: 'NGN',
        name: { contains: 'Test', mode: 'insensitive' },
      };

      expect(prismaService.virtualAccount.findMany).toHaveBeenCalledWith({
        where: expectedWhereClause,
        select: mockVirtualAccountDtoSelect,
        ...expectedSkipTake,
      });
      expect(prismaService.virtualAccount.count).toHaveBeenCalledWith({
        where: expectedWhereClause,
      });
    });

    it('should list virtual accounts with default pagination if none provided', async () => {
      const listInput: VirtualAccountListingInput = {}; // No pagination, filters, or search

      const mockAccounts = [mockVirtualAccount];
      const mockTotalCount = 1;
      const defaultPagination = { page: 1, perPage: 100 };
      const expectedSkipTake = toPrismaSkipTake(defaultPagination);

      mockPrismaService.virtualAccount.findMany.mockResolvedValue(mockAccounts);
      mockPrismaService.virtualAccount.count.mockResolvedValue(mockTotalCount);

      const expectedResult: VirtualAccountListingOutputDto = {
        data: mockAccounts,
        meta: {
          page: defaultPagination.page,
          perPage: defaultPagination.perPage,
          total: mockTotalCount,
          totalPages: Math.ceil(mockTotalCount / defaultPagination.perPage),
        },
      };

      const result = await repository.list(listInput);
      expect(result).toEqual(expectedResult);

      const expectedWhereClause: Prisma.VirtualAccountWhereInput = {};

      expect(prismaService.virtualAccount.findMany).toHaveBeenCalledWith({
        where: expectedWhereClause,
        select: mockVirtualAccountDtoSelect,
        ...expectedSkipTake,
      });
      expect(prismaService.virtualAccount.count).toHaveBeenCalledWith({
        where: expectedWhereClause,
      });
    });
  });

  describe('findByIdempotencyKey', () => {
    it('should find a virtual account by idempotency key', async () => {
      const idempotencyKey = 'unique-key-123';
      mockPrismaService.virtualAccount.findFirst.mockResolvedValue(
        mockVirtualAccount,
      );

      const result = await repository.findByIdempotencyKey(idempotencyKey);

      expect(result).toEqual(mockVirtualAccount);
      expect(prismaService.virtualAccount.findFirst).toHaveBeenCalledWith({
        where: { idempotencyKey },
        select: mockVirtualAccountDtoSelect,
      });
    });

    it('should return null if no account found by idempotency key', async () => {
      const idempotencyKey = 'non-existent-key';
      mockPrismaService.virtualAccount.findFirst.mockResolvedValue(null);

      const result = await repository.findByIdempotencyKey(idempotencyKey);

      expect(result).toBeNull();
      expect(prismaService.virtualAccount.findFirst).toHaveBeenCalledWith({
        where: { idempotencyKey },
        select: mockVirtualAccountDtoSelect,
      });
    });
  });

  describe('findById', () => {
    it('should find a virtual account by ID with details', async () => {
      const id = 'va-123';
      mockPrismaService.virtualAccount.findUnique.mockResolvedValue(
        mockVirtualAccountDetail,
      );

      const result = await repository.getById(id);

      expect(result).toEqual(mockVirtualAccountDetail);
      expect(prismaService.virtualAccount.findUnique).toHaveBeenCalledWith({
        where: { id, deletedAt: null },
        select: mockVirtualAccountDetailSelect,
      });
    });

    it('should return null if no account found by ID', async () => {
      const id = 'non-existent-id';
      mockPrismaService.virtualAccount.findUnique.mockResolvedValue(null);

      const result = await repository.getById(id);

      expect(result).toBeNull();
      expect(prismaService.virtualAccount.findUnique).toHaveBeenCalledWith({
        where: { id, deletedAt: null },
        select: mockVirtualAccountDetailSelect,
      });
    });
  });
});
