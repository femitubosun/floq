import { Injectable } from '@nestjs/common';
import { FxRateProvider } from '@/fx/services/fx-rate.provider';
import { FxSnapshotRepository } from '@/fx/respositories/fx-snapshot.repository';
import { Currency, Prisma } from '@/infrastructure/prisma/generated';
import {
  CreateFxSnapshotInputSchema,
  FxSnapShotDto,
} from '@/fx/__defs__/fx-snapshot.dto';
import { FloqDecimal } from '@/common/__defs__';
import { convertViaUsd } from '@/fx/utils';

@Injectable()
export class FxService {
  constructor(
    private readonly fxRateProvider: FxRateProvider,
    private readonly fxSnapshotRepository: FxSnapshotRepository,
  ) {}

  async getRate(quoteCurrency: Currency, baseCurrency: Currency = 'USD') {
    if (quoteCurrency === baseCurrency) return new FloqDecimal(1);

    const fxRate = await this.fxRateProvider.execute();

    return convertViaUsd({
      base: {
        currency: baseCurrency,
        usdRate: fxRate[baseCurrency],
      },
      quote: {
        currency: quoteCurrency,
        usdRate: fxRate[quoteCurrency],
      },
    });
  }

  async createSnapshot(
    input: CreateFxSnapshotInputSchema,
    tx?: Prisma.TransactionClient,
  ) {
    return this.fxSnapshotRepository.create(input, tx);
  }

  async getSnapshotById(fxSnapshotId: string): Promise<FxSnapShotDto | null> {
    return this.fxSnapshotRepository.getById(fxSnapshotId);
  }
}
