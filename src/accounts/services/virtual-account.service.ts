import { Injectable } from '@nestjs/common';
import { VirtualAccountRepository } from '@/accounts/repositories/virtual-account.repository';
import {
  CreateVirtualAccountInput,
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
}
