import { Test, TestingModule } from '@nestjs/testing';
import { Mocked } from 'jest-mock';
import { CreateVirtualAccountUseCase } from './create-virtual-account.use-case';
import { CacheService } from '@/infrastructure/cache/services/cache.service';
import {
  CreateVirtualAccountDto,
  VirtualAccountDto,
} from '@/ledger/__defs__/accounts.dto';
import { VirtualAccountsCacheKeys } from '@/ledger/utils';
import { VirtualAccountService } from '@/ledger/services/virtual-account.service';
import { Money } from '@/common/objects/money';
import { FloqDecimal } from '@/common/__defs__';

jest.mock('@/infrastructure/cache/services/cache.service');
jest.mock('@/ledger/services/virtual-account.service');

describe('CreateVirtualAccountUseCase', () => {
  let useCase: CreateVirtualAccountUseCase;
  let cacheService: Mocked<CacheService>;
  let virtualAccountService: Mocked<VirtualAccountService>;

  const mockCreateVirtualAccountDto: CreateVirtualAccountDto = {
    name: 'Account 1',
    currency: 'NGN',
    idempotencyKey: '1111',
    balance: new FloqDecimal(0),
  };

  const mockVirtualAccount: VirtualAccountDto = {
    id: 'va-id-123',
    name: 'Account 1',
    balance: new Money(new FloqDecimal(0), 'USD').amount,
    currency: 'USD',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const mockExistingVirtualAccount: VirtualAccountDto = {
    id: 'va-id-existing-789',
    name: 'Account 1',
    balance: new Money(new FloqDecimal(0), 'NGN').amount,
    currency: 'NGN',
    createdAt: new Date(Date.now() - 100000),
    updatedAt: new Date(Date.now() - 50000),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateVirtualAccountUseCase,
        CacheService,
        VirtualAccountService,
      ],
    }).compile();

    useCase = module.get<CreateVirtualAccountUseCase>(
      CreateVirtualAccountUseCase,
    );
    cacheService = module.get(CacheService);
    virtualAccountService = module.get(VirtualAccountService);
  });

  it('should create a virtual account and invalidate cache', async () => {
    virtualAccountService.create.mockResolvedValue(mockVirtualAccount);
    cacheService.invalidateByTag.mockResolvedValue(undefined);

    const result = await useCase.execute(mockCreateVirtualAccountDto);

    expect(virtualAccountService.create).toHaveBeenCalledWith(
      mockCreateVirtualAccountDto,
    );
    expect(cacheService.invalidateByTag).toHaveBeenCalledWith(
      VirtualAccountsCacheKeys.getDomainPrefix(),
    );
    expect(result).toEqual(mockVirtualAccount);
  });

  it('should still return created account data even if cache invalidation fails', async () => {
    virtualAccountService.create.mockResolvedValue(mockVirtualAccount);
    cacheService.invalidateByTag.mockRejectedValue(
      new Error('Cache invalidation failed'),
    );

    const result = await useCase.execute(mockCreateVirtualAccountDto);

    expect(virtualAccountService.create).toHaveBeenCalledWith(
      mockCreateVirtualAccountDto,
    );
    expect(cacheService.invalidateByTag).toHaveBeenCalledWith(
      VirtualAccountsCacheKeys.getDomainPrefix(),
    );
    expect(result).toEqual(mockVirtualAccount);
  });

  it('should propagate error if virtual account creation fails', async () => {
    const creationError = new Error('Account creation failed');
    virtualAccountService.create.mockRejectedValue(creationError);
    cacheService.invalidateByTag.mockResolvedValue(undefined); // or .mockRejectedValue for completeness

    await expect(useCase.execute(mockCreateVirtualAccountDto)).rejects.toThrow(
      creationError,
    );

    expect(virtualAccountService.create).toHaveBeenCalledWith(
      mockCreateVirtualAccountDto,
    );

    expect(cacheService.invalidateByTag).toHaveBeenCalledWith(
      VirtualAccountsCacheKeys.getDomainPrefix(),
    );
  });

  it('should create a new virtual account and invalidate cache if no existing account matches idempotency key', async () => {
    virtualAccountService.create.mockResolvedValue(mockVirtualAccount);
    cacheService.invalidateByTag.mockResolvedValue(undefined);

    const result = await useCase.execute(mockCreateVirtualAccountDto);

    expect(virtualAccountService.create).toHaveBeenCalledWith(
      mockCreateVirtualAccountDto,
    );
    expect(cacheService.invalidateByTag).toHaveBeenCalledWith(
      VirtualAccountsCacheKeys.getDomainPrefix(),
    );
    expect(result).toEqual(mockVirtualAccount);
  });

  it('should return existing account and invalidate cache if idempotency key matches an existing account', async () => {
    virtualAccountService.create.mockResolvedValue(mockExistingVirtualAccount);
    cacheService.invalidateByTag.mockResolvedValue(undefined);

    const result = await useCase.execute(mockCreateVirtualAccountDto);

    expect(virtualAccountService.create).toHaveBeenCalledWith(
      mockCreateVirtualAccountDto,
    );

    expect(cacheService.invalidateByTag).toHaveBeenCalledWith(
      VirtualAccountsCacheKeys.getDomainPrefix(),
    );

    expect(result).toEqual(mockExistingVirtualAccount);
  });
});
