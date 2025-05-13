import { Test, TestingModule } from '@nestjs/testing';
import { GetVirtualAccountByIdUseCase } from './get-virtual-account-by-id.use-case';
import { CacheService } from '@/infrastructure/cache/services/cache.service';
import { VirtualAccountService } from '@/ledger/services/virtual-account.service';
import { VirtualAccountsCacheKeys } from '@/ledger/utils';
import { NotFoundException } from '@nestjs/common';

describe('GetVirtualAccountByIdUseCase', () => {
  let useCase: GetVirtualAccountByIdUseCase;
  let virtualAccountService: jest.Mocked<VirtualAccountService>;
  let cacheService: jest.Mocked<CacheService>;

  const mockVirtualAccount = {
    id: 'va-123',
    name: 'Test Account',
    currency: 'USD' as const,
    createdAt: new Date(),
    updatedAt: new Date(),
    ledgerEntries: [],
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetVirtualAccountByIdUseCase,
        {
          provide: VirtualAccountService,
          useValue: {
            getById: jest.fn(),
          },
        },
        {
          provide: CacheService,
          useValue: {
            fetch: jest.fn(),
          },
        },
      ],
    }).compile();

    useCase = module.get<GetVirtualAccountByIdUseCase>(
      GetVirtualAccountByIdUseCase,
    );
    virtualAccountService = module.get<VirtualAccountService>(
      VirtualAccountService,
    ) as jest.Mocked<VirtualAccountService>;
    cacheService = module.get<CacheService>(
      CacheService,
    ) as jest.Mocked<CacheService>;
  });

  const testCases = [
    {
      description: 'should return cached data if cache exists',
      cacheResult: mockVirtualAccount,
      serviceResult: null,
      expectedResult: mockVirtualAccount,
      cacheFetchCalledWith: {
        key: VirtualAccountsCacheKeys.single('test-id'),
        resolver: expect.any(Function),
        tags: [VirtualAccountsCacheKeys.getDomainPrefix('test-id')],
      },
    },
    {
      description: 'should fetch data from service if cache is empty',
      cacheResult: null,
      serviceResult: mockVirtualAccount,
      expectedResult: mockVirtualAccount,
      cacheFetchCalledWith: {
        key: VirtualAccountsCacheKeys.single('test-id'),
        resolver: expect.any(Function),
        tags: [VirtualAccountsCacheKeys.getDomainPrefix('test-id')],
      },
    },
    {
      description: 'should throw NotFoundException when account is not found',
      cacheResult: null,
      serviceResult: null,
      expectedError: new NotFoundException('Virtual Account'),
      cacheFetchCalledWith: {
        key: VirtualAccountsCacheKeys.single('test-id'),
        resolver: expect.any(Function),
        tags: [VirtualAccountsCacheKeys.getDomainPrefix('test-id')],
      },
    },
  ];

  testCases.forEach(
    ({
      description,
      cacheResult,
      serviceResult,
      expectedResult,
      expectedError,
      cacheFetchCalledWith,
    }) => {
      it(description, async () => {
        // Mock cacheService.fetch behavior
        cacheService.fetch.mockImplementation(async (_, options) => {
          if (cacheResult) return cacheResult;
          const result = await options.resolver();
          return result;
        });

        // Mock virtualAccountService.getById behavior
        virtualAccountService.getById.mockResolvedValue(serviceResult);

        if (expectedError) {
          await expect(useCase.execute('test-id')).rejects.toThrow(
            expectedError,
          );
        } else {
          const result = await useCase.execute('test-id');
          expect(result).toEqual(expectedResult);
        }

        expect(cacheService.fetch).toHaveBeenCalledWith(
          ['test-id'],
          cacheFetchCalledWith,
        );

        if (!cacheResult) {
          expect(virtualAccountService.getById).toHaveBeenCalledWith('test-id');
        }
      });
    },
  );
});
