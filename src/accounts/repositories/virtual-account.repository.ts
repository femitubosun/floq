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
  VirtualAccountDetailOutputDto,
  VirtualAccountDetailSchema,
  VirtualAccountDto,
  VirtualAccountDtoSchema,
  VirtualAccountListingInput,
  VirtualAccountListingOutputDto,
} from '@/accounts/__defs__/accounts.dto';

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

  getById(id: string): Promise<VirtualAccountDetailOutputDto | null> {
    return this.#Account.findUnique({
      where: {
        id,
      },
      select: zodToPrismaSelect(VirtualAccountDetailSchema),
    });
  }

  #Account = this.prismaService.virtualAccount;
}
