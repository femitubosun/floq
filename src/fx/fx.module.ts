import { Module } from '@nestjs/common';
import { FxController } from './controllers/fx.controlller';
import { FetchFxRatesUseCase } from './use-cases/fetch-fx-rates.use-case';

@Module({
  providers: [FetchFxRatesUseCase],
  controllers: [FxController],
})
export class FxModule {}
