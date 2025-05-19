import { PrismaService } from '@/infrastructure/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import {
  CreateFxSnapshotInputSchema,
  FxSnapShotDto,
} from '@/fx/__defs__/fx-snapshot.dto';
import { Prisma } from '@/infrastructure/prisma/generated';
import { zodToPrismaSelect } from '@/infrastructure/prisma/utils/prisma';

@Injectable()
export class FxSnapshotRepository {
  #FxSnapshot = this.prismaService.fxSnapshot;
  #detailSelect = zodToPrismaSelect(FxSnapShotDto);

  constructor(private readonly prismaService: PrismaService) {}

  async create(
    input: CreateFxSnapshotInputSchema,
    tx?: Prisma.TransactionClient,
  ): Promise<FxSnapShotDto> {
    return (tx ? tx.fxSnapshot : this.#FxSnapshot).create({
      data: input,
      select: this.#detailSelect,
    });
  }

  async getById(id: string): Promise<FxSnapShotDto | null> {
    return this.#FxSnapshot.findUnique({
      where: {
        id,
      },
      select: this.#detailSelect,
    });
  }
}
