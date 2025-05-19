import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { HttpService } from '@/infrastructure/http/services/http.service';
import { ConfigService } from '@nestjs/config';
import { FloqDecimal } from '@/common/__defs__';
import { Currency } from '@/infrastructure/prisma/generated';
import { CacheService } from '@/infrastructure/cache/services/cache.service';

export interface FxProviderResponse {
  disclaimer: string;
  license: string;
  timestamp: number;
  base: Currency;
  rates: Record<string, FloqDecimal>;
}

@Injectable()
export class FxRateProvider {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
    private readonly cacheService: CacheService,
  ) {
    this.#openXchangeAppId =
      this.configService.get<string>('OPEN_EXCHANGE_RATES_APP_ID') || '';

    if (!this.#openXchangeAppId) {
      throw new InternalServerErrorException(
        'OPEN_EXCHANGE_RATES_APP_ID not found',
      );
    }
  }

  #baseUrl = 'https://openexchangerates.org/api/latest.json';
  readonly #openXchangeAppId: string;

  async execute(): Promise<FxProviderResponse['rates']> {
    const cachedRates = await this.#getCached();
    if (cachedRates) {
      return cachedRates;
    }

    const { apiResponse } = await this.httpService.get<FxProviderResponse>({
      endpointUrl: this.#getProviderUrl(),
    });

    await this.#cacheResults(apiResponse.rates);

    return apiResponse.rates;
  }

  async #getCached() {
    const cached = await this.cacheService.get<FxProviderResponse['rates']>(
      this.#makeCk(),
    );

    if (cached) {
      return cached;
    }
  }

  #getProviderUrl() {
    const url = new URL(this.#baseUrl);
    url.searchParams.set('app_id', this.#openXchangeAppId);

    return url.toString();
  }

  async #cacheResults(rates: FxProviderResponse['rates']) {
    const FIVE_MINUTES = 300;

    await this.cacheService.set(this.#makeCk(), rates, FIVE_MINUTES);
  }

  #makeCk() {
    return `fx-rate:latest`;
  }
}
