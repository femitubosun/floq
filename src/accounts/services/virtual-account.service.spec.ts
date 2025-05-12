import { VirtualAccountService } from '@/accounts/services/virtual-account.service';
import { VirtualAccountRepository } from '@/accounts/repositories/virtual-account.repository';
import { Test, TestingModule } from '@nestjs/testing';
import { Mocked } from 'jest-mock';
import { VirtualAccountDto } from '@/accounts/__defs__/accounts';

describe('VirtualAccountService', () => {
  let service: VirtualAccountService;
  let mockRepository: Mocked<VirtualAccountRepository>;

  const mockVirtualAccount: VirtualAccountDto = {
    id: 'account-123',
    name: 'Test Account',
    currency: 'USD',
    idempotencyKey: 'unique-key-123',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VirtualAccountService,
        {
          provide: VirtualAccountRepository,
          useValue: {
            createAccount: jest.fn(),
            list: jest.fn(),
            findByIdempotencyKey: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<VirtualAccountService>(VirtualAccountService);
    mockRepository = module.get<Mocked<VirtualAccountRepository>>(
      VirtualAccountRepository,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new virtual account when no account with the same idempotencyKey exists', async () => {
    mockRepository.findByIdempotencyKey.mockResolvedValue(null);
    mockRepository.createAccount.mockResolvedValue(mockVirtualAccount);

    const input = {
      name: 'Test Account',
      currency: 'USD' as const,
      idempotencyKey: 'unique-key-123',
    };

    const result = await service.create(input);

    expect(mockRepository.findByIdempotencyKey).toHaveBeenCalledWith(
      input.idempotencyKey,
    );
    expect(mockRepository.createAccount).toHaveBeenCalledWith(input);
    expect(result).toEqual(mockVirtualAccount);
  });

  it('should return an existing account when an account with the same idempotencyKey exists', async () => {
    mockRepository.findByIdempotencyKey.mockResolvedValue(mockVirtualAccount);

    const input = {
      name: 'Test Account',
      currency: 'USD' as const,
      idempotencyKey: 'unique-key-123',
    };

    const result = await service.create(input);

    expect(mockRepository.findByIdempotencyKey).toHaveBeenCalledWith(
      input.idempotencyKey,
    );

    expect(mockRepository.createAccount).not.toHaveBeenCalled();
    expect(result).toEqual(mockVirtualAccount);
  });
});
