import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/infrastructure/prisma/prisma.service';
import {
  CreateVirtualAccountDto,
  VirtualAccountDto,
} from '@/accounts/__defs__/accounts';

@Injectable()
export class VirtualAccountRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createAccount(
    input: CreateVirtualAccountDto,
  ): Promise<VirtualAccountDto> {
    return this.#accountDelegate.create({
      data: input,
    });
  }

  async list(): Promise<VirtualAccountDto[]> {
    return this.#accountDelegate.findMany();
  }

  #accountDelegate = this.prismaService.virtualAccount;
}
