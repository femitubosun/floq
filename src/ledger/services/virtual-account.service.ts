import { Injectable } from '@nestjs/common';
import { VirtualAccountRepository } from '@/ledger/repositories/virtual-account.repository';
import {
  CreateVirtualAccountInput,
  UpdateVirtualAccountDto,
  VirtualAccountDetailOutputDto,
  VirtualAccountListingInput,
  VirtualAccountListingOutput,
} from '../__defs__/accounts.dto';

@Injectable()
export class VirtualAccountService {
  constructor(private readonly repo: VirtualAccountRepository) {}

  async create(input: CreateVirtualAccountInput) {
    const existingAccount = await this.repo.findByIdempotencyKey(
      input.idempotencyKey,
    );

    if (existingAccount) {
      return existingAccount;
    }

    return this.repo.createAccount(input);
  }

  async list(
    input: VirtualAccountListingInput,
  ): Promise<VirtualAccountListingOutput> {
    return this.repo.list(input);
  }

  async getById(id: string) {
    return this.repo.getById(id);
  }

  async update(
    id: string,
    data: UpdateVirtualAccountDto,
  ): Promise<VirtualAccountDetailOutputDto> {
    const va = await this.repo.getById(id);
    if (!va) {
      throw new Error('Virtual Account not found');
    }
    return this.repo.update(id, data);
  }
}
