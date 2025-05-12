import { Injectable } from '@nestjs/common';
import { VirtualAccountRepository } from '@/accounts/repositories/virtual-account.repository';
import { CreateVirtualAccountInput } from '../__defs__/accounts';

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

  async list() {
    return this.repo.list();
  }
}
