import { Test, TestingModule } from '@nestjs/testing';
import { Mocked } from 'jest-mock';
import { CreateVirtualAccountUseCase } from './create-virtual-account.use-case';
import { CacheService } from '@/infrastructure/cache/services/cache.service';
import { VirtualAccountRepository } from '@/accounts/repositories/virtual-account.repository';
import {
  CreateVirtualAccountDto,
  VirtualAccountDto,
} from '@/accounts/__defs__/accounts';
import { VirtualAccountsCacheKeys } from '@/accounts/utils';

jest.mock('@/infrastructure/cache/services/cache.service');
jest.mock('@/accounts/repositories/virtual-account.repository');

describe('CreateVirtualAccountUseCase', () => {
  let useCase: CreateVirtualAccountUseCase;
  let cacheService: Mocked<CacheService>;
  let virtualAccountRepository: Mocked<VirtualAccountRepository>;

  const mockCreateVirtualAccountDto: CreateVirtualAccountDto = {
    name: 'Account 1',
    currency: 'NGN',
  };

  const mockVirtualAccount: VirtualAccountDto = {
    id: 'va-id-123',
    name: 'Account 1',
    currency: 'USD',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateVirtualAccountUseCase,
        CacheService,
        VirtualAccountRepository,
      ],
    }).compile();

    useCase = module.get<CreateVirtualAccountUseCase>(
      CreateVirtualAccountUseCase,
    );
    cacheService = module.get(CacheService);
    virtualAccountRepository = module.get(VirtualAccountRepository);
  });

  it('should create a virtual account and invalidate cache', async () => {
    virtualAccountRepository.createAccount.mockResolvedValue(
      mockVirtualAccount,
    );
    cacheService.invalidateByTag.mockResolvedValue(undefined);

    const result = await useCase.execute(mockCreateVirtualAccountDto);

    expect(virtualAccountRepository.createAccount).toHaveBeenCalledWith(
      mockCreateVirtualAccountDto,
    );
    expect(cacheService.invalidateByTag).toHaveBeenCalledWith(
      VirtualAccountsCacheKeys.getDomainPrefix(),
    );
    expect(result).toEqual(mockVirtualAccount);
  });

  it('should still return created account data even if cache invalidation fails', async () => {
    virtualAccountRepository.createAccount.mockResolvedValue(
      mockVirtualAccount,
    );
    cacheService.invalidateByTag.mockRejectedValue(
      new Error('Cache invalidation failed'),
    );

    const result = await useCase.execute(mockCreateVirtualAccountDto);

    expect(virtualAccountRepository.createAccount).toHaveBeenCalledWith(
      mockCreateVirtualAccountDto,
    );
    expect(cacheService.invalidateByTag).toHaveBeenCalledWith(
      VirtualAccountsCacheKeys.getDomainPrefix(),
    );
    expect(result).toEqual(mockVirtualAccount);
  });

  it('should propagate error if virtual account creation fails', async () => {
    const creationError = new Error('Account creation failed');
    virtualAccountRepository.createAccount.mockRejectedValue(creationError);
    cacheService.invalidateByTag.mockResolvedValue(undefined); // or .mockRejectedValue for completeness

    await expect(useCase.execute(mockCreateVirtualAccountDto)).rejects.toThrow(
      creationError,
    );

    expect(virtualAccountRepository.createAccount).toHaveBeenCalledWith(
      mockCreateVirtualAccountDto,
    );

    expect(cacheService.invalidateByTag).toHaveBeenCalledWith(
      VirtualAccountsCacheKeys.getDomainPrefix(),
    );
  });
});
