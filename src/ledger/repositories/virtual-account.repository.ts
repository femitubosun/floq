import { Prisma } from '@/infrastructure/prisma/generated';
import { PrismaService } from '@/infrastructure/prisma/prisma.service';
import {
  findManyWithPagination,
  toPrismaSkipTake,
} from '@/infrastructure/prisma/utils';
import { zodToPrismaSelect } from '@/infrastructure/prisma/utils/prisma';
import { Injectable } from '@nestjs/common';
import {
  CreateVirtualAccountDto,
  UpdateVirtualAccountDto,
  VirtualAccountDetailOutputDto,
  VirtualAccountDetailSchema,
  VirtualAccountDto,
  VirtualAccountDtoSchema,
  VirtualAccountListingInput,
  VirtualAccountListingOutputDto,
} from '@/ledger/__defs__/accounts.dto';
import Decimal from 'decimal.js';

@Injectable()
export class VirtualAccountRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createAccount(
    input: CreateVirtualAccountDto,
  ): Promise<VirtualAccountDto> {
    return this.#Account.create({
      data: input,
      select: zodToPrismaSelect(VirtualAccountDtoSchema),
    });
  }

  async list(
    input: VirtualAccountListingInput,
  ): Promise<VirtualAccountListingOutputDto> {
    const findManyArgs: Prisma.VirtualAccountFindManyArgs = {
      where: {
        ...(input.filters?.currency && { currency: input.filters.currency }),
        ...(input.search && {
          name: { contains: input.search, mode: 'insensitive' },
        }),
      },
      select: zodToPrismaSelect(VirtualAccountDtoSchema),
    };

    return findManyWithPagination(
      (args: typeof findManyArgs) => this.#Account.findMany(args),
      () => this.#Account.count({ where: findManyArgs.where }),
      toPrismaSkipTake(input.pagination || { page: 1, perPage: 100 }),
      findManyArgs,
    );
  }

  async findByIdempotencyKey(
    idempotencyKey: string,
  ): Promise<VirtualAccountDto | null> {
    return this.#Account.findFirst({
      where: {
        idempotencyKey,
      },
      select: zodToPrismaSelect(VirtualAccountDtoSchema),
    });
  }

  async getById(id: string): Promise<VirtualAccountDetailOutputDto | null> {
    return this.#Account.findUnique({
      where: {
        id,
        deletedAt: null,
      },
      select: zodToPrismaSelect(VirtualAccountDetailSchema),
    });
  }

  async update(
    id: string,
    data: UpdateVirtualAccountDto,
    tx?: Prisma.TransactionClient,
  ): Promise<VirtualAccountDetailSchema> {
    return (tx ? tx.virtualAccount : this.#Account).update({
      where: {
        id,
      },
      data,
      select: zodToPrismaSelect(VirtualAccountDetailSchema),
    });
  }

  async incrementBalance(
    id: string,
    balance: Decimal,
    tx?: Prisma.TransactionClient,
  ) {
    return (tx ? tx : this.prismaService).virtualAccount.update({
      where: {
        id,
      },
      data: {
        balance: {
          increment: balance,
        },
      },
      select: {
        id: true,
        balance: true,
      },
    });
  }

  #Account = this.prismaService.virtualAccount;
}
