import { FloqDecimal } from '@/common/__defs__';
import { HttpService } from '@/infrastructure/http/services/http.service';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class FetchFxRatesUseCase {
  constructor(
    private readonly httpService: HttpService,
    private readonly configSerive: ConfigService,
  ) {}

  private baseUrl = 'https://openexchangerates.org/api/latest.json';

  execute() {
    const appId = this.configSerive.get<string>('OPEN_EXCHANGE_RATES_APP_ID');

    if (!appId) {
      throw new InternalServerErrorException(
        'OPEN_EXCHANGE_RATES_APP_ID not found',
      );
    }
    const url = new URL(this.baseUrl);
    url.searchParams.set('app_id', appId);
    return this.httpService.get<{ rates: Record<string, FloqDecimal> }>({
      endpointUrl: url.toString(),
    });
  }
}
