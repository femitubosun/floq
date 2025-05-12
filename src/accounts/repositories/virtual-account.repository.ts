import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/infrastructure/prisma/prisma.service';
import {
  CreateVirtualAccountDto,
  VirtualAccountDto,
  VirtualAccountDtoSchema,
} from '@/accounts/__defs__/accounts';
import { zodToPrismaSelect } from '@/infrastructure/prisma/utils';

@Injectable()
export class VirtualAccountRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createAccount(
    input: CreateVirtualAccountDto,
  ): Promise<VirtualAccountDto> {
    return this.#accountDelegate.create({
      data: input,
      select: zodToPrismaSelect(VirtualAccountDtoSchema),
    });
  }

  async list(): Promise<VirtualAccountDto[]> {
    return this.#accountDelegate.findMany({
      select: zodToPrismaSelect(VirtualAccountDtoSchema),
    });
  }

  async findByIdempotencyKey(
    idempotencyKey: string,
  ): Promise<VirtualAccountDto | null> {
    return this.#accountDelegate.findFirst({
      where: {
        idempotencyKey,
      },
      select: zodToPrismaSelect(VirtualAccountDtoSchema),
    });
  }

  #accountDelegate = this.prismaService.virtualAccount;
}
