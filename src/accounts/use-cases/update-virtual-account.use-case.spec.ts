import { CacheService } from '@/infrastructure/cache/services/cache.service';
import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { Mocked } from 'jest-mock';
import {
  UpdateVirtualAccountDto,
  VirtualAccountDetailOutputDto,
} from '../__defs__/accounts.dto';
import { VirtualAccountService } from '../services/virtual-account.service';
import { VirtualAccountsCacheKeys } from '../utils';
import { UpdateVirtualAccountUseCase } from './update-virtual-account.use-case';

describe('UpdateVirtualAccountUseCase', () => {
  let useCase: UpdateVirtualAccountUseCase;
  let virtualAccountService: Mocked<VirtualAccountService>;
  let cacheService: Mocked<CacheService>;

  const mockVirtualAccount: VirtualAccountDetailOutputDto = {
    id: 'va-123',
    name: 'Test Account',
    currency: 'USD',
    createdAt: new Date(),
    updatedAt: new Date(),
    ledgerEntries: [],
  };

  const updateDto: UpdateVirtualAccountDto = {
    name: 'Updated Account',
    currency: 'EUR' as const,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UpdateVirtualAccountUseCase,
        {
          provide: VirtualAccountService,
          useValue: {
            update: jest.fn(),
          },
        },
        {
          provide: CacheService,
          useValue: {
            invalidateByTag: jest.fn(),
          },
        },
      ],
    }).compile();

    useCase = module.get<UpdateVirtualAccountUseCase>(
      UpdateVirtualAccountUseCase,
    );
    virtualAccountService = module.get(VirtualAccountService);
    cacheService = module.get(CacheService);
  });

  it('should update virtual account and invalidate cache', async () => {
    virtualAccountService.update.mockResolvedValue({
      ...mockVirtualAccount,
      ...updateDto,
    });
    cacheService.invalidateByTag.mockResolvedValue(undefined);

    const result = await useCase.execute('va-123', updateDto);

    expect(virtualAccountService.update).toHaveBeenCalledWith(
      'va-123',
      updateDto,
    );
    expect(cacheService.invalidateByTag).toHaveBeenCalledWith([
      VirtualAccountsCacheKeys.getDomainPrefix('va-123'),
      VirtualAccountsCacheKeys.getDomainPrefix(),
    ]);
    expect(result).toEqual({
      ...mockVirtualAccount,
      ...updateDto,
    });
  });

  it('should still return updated account data even if cache invalidation fails', async () => {
    virtualAccountService.update.mockResolvedValue({
      ...mockVirtualAccount,
      ...updateDto,
    });
    cacheService.invalidateByTag.mockRejectedValue(
      new Error('Cache invalidation failed'),
    );

    const result = await useCase.execute('va-123', updateDto);

    expect(virtualAccountService.update).toHaveBeenCalledWith(
      'va-123',
      updateDto,
    );
    expect(cacheService.invalidateByTag).toHaveBeenCalledWith([
      VirtualAccountsCacheKeys.getDomainPrefix('va-123'),
      VirtualAccountsCacheKeys.getDomainPrefix(),
    ]);
    expect(result).toEqual({
      ...mockVirtualAccount,
      ...updateDto,
    });
  });

  it('should throw NotFoundException when account does not exist', async () => {
    virtualAccountService.update.mockRejectedValue(
      new NotFoundException('Virtual Account'),
    );

    await expect(useCase.execute('non-existent-id', updateDto)).rejects.toThrow(
      NotFoundException,
    );

    expect(virtualAccountService.update).toHaveBeenCalledWith(
      'non-existent-id',
      updateDto,
    );
  });
});
