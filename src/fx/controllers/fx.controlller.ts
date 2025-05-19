import { Controller, Get } from '@nestjs/common';
import { FetchFxRatesUseCase } from '../use-cases/fetch-fx-rates.use-case';

@Controller('fx')
export class FxController {
  constructor(private readonly fetchUsc: FetchFxRatesUseCase) {}

  @Get()
  async getFxRates() {
    return this.fetchUsc.execute();
  }
}
