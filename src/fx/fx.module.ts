import { Module } from '@nestjs/common';
import { FxController } from './controllers/fx.controlller';
import { FetchFxRatesUseCase } from './use-cases/fetch-fx-rates.use-case';
import { FxService } from '@/fx/services/fx.service';
import { FxRateProvider } from '@/fx/services/fx-rate.provider';
import { FxSnapshotRepository } from '@/fx/respositories/fx-snapshot.repository';

@Module({
  providers: [
    FetchFxRatesUseCase,
    FxService,
    FxRateProvider,
    FxSnapshotRepository,
  ],
  controllers: [FxController],
  exports: [FxService],
})
export class FxModule {}
