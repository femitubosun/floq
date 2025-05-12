import { Test, TestingModule } from '@nestjs/testing';
import { ListVirtualAccountsUseCase } from '@/accounts/use-cases/list-virtual-accounts.use-case';
import { VirtualAccountRepository } from '@/accounts/repositories/virtual-account.repository';
import { CacheService } from '@/infrastructure/cache/services/cache.service';
import { VirtualAccountsCacheKeys } from '@/accounts/utils';
import { VirtualAccountListingInput } from '@/accounts/__defs__/accounts.dto';

describe('ListVirtualAccountsUseCase', () => {
  let useCase: ListVirtualAccountsUseCase;
  let virtualAccountRepository: jest.Mocked<VirtualAccountRepository>;
  let cacheService: jest.Mocked<CacheService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ListVirtualAccountsUseCase,
        {
          provide: VirtualAccountRepository,
          useValue: {
            list: jest.fn(),
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

    useCase = module.get<ListVirtualAccountsUseCase>(
      ListVirtualAccountsUseCase,
    );
    virtualAccountRepository = module.get<VirtualAccountRepository>(
      VirtualAccountRepository,
    ) as jest.Mocked<VirtualAccountRepository>;
    cacheService = module.get<CacheService>(
      CacheService,
    ) as jest.Mocked<CacheService>;
  });

  const mockInput: VirtualAccountListingInput = {};

  const testCases: any[] = [
    {
      description: 'should return cached data if cache exists',
      cacheResult: [{ id: '1', name: 'Account 1' }],
      repositoryResult: [],
      expectedResult: [{ id: '1', name: 'Account 1' }],
      cacheFetchCalledWith: {
        key: expect.any(String),
        resolver: expect.any(Function),
        tags: [VirtualAccountsCacheKeys.getDomainPrefix()],
      },
    },
    {
      description: 'should fetch data from repository if cache is empty',
      cacheResult: null,
      repositoryResult: [{ id: '2', name: 'Account 2' }],
      expectedResult: [{ id: '2', name: 'Account 2' }],
      cacheFetchCalledWith: {
        key: expect.any(String),
        resolver: expect.any(Function),
        tags: [VirtualAccountsCacheKeys.getDomainPrefix()],
      },
    },
    {
      description: 'should handle empty repository result',
      cacheResult: null,
      repositoryResult: [],
      expectedResult: [],
      cacheFetchCalledWith: {
        key: expect.any(String),
        resolver: expect.any(Function),
        tags: [VirtualAccountsCacheKeys.getDomainPrefix()],
      },
    },
    {
      description: 'should handle error from repository gracefully',
      cacheResult: null,
      repositoryResult: null,
      expectedResult: null,
      cacheFetchCalledWith: {
        key: expect.any(String),
        resolver: expect.any(Function),
        tags: [VirtualAccountsCacheKeys.getDomainPrefix()],
      },
      repositoryError: new Error('Repository error'),
    },
  ];

  testCases.forEach(
    ({
      description,
      cacheResult,
      repositoryResult,
      expectedResult,
      cacheFetchCalledWith,
      repositoryError,
    }) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      it(description, async () => {
        // Mock cacheService.fetch behavior
        cacheService.fetch.mockImplementation(async (_, options) => {
          if (repositoryError) {
            throw repositoryError;
          }
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          return cacheResult || (await options.resolver());
        });

        // Mock virtualAccountRepository.list behavior
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        virtualAccountRepository.list.mockResolvedValue(repositoryResult);

        if (repositoryError) {
          await expect(useCase.execute(mockInput)).rejects.toThrow(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            repositoryError,
          );
        } else {
          const result = await useCase.execute(mockInput);
          expect(result).toEqual(expectedResult);
        }

        expect(cacheService.fetch).toHaveBeenCalledWith(
          [mockInput],
          cacheFetchCalledWith,
        );
        if (!repositoryError && !cacheResult) {
          expect(virtualAccountRepository.list).toHaveBeenCalled();
        }
      });
    },
  );
});
