import { Injectable } from '@nestjs/common';
import { CacheService } from '@/infrastructure/cache/services/cache.service';

@Injectable()
export class AppService {
  constructor(private cacheService: CacheService) {}

  async getHello() {
    const cacheKey = 'hello';
    const cacheValue = await this.cacheService.get(cacheKey);

    if (cacheValue) {
      console.log('cache hit');
      return cacheValue;
    }

    const data = ['some things'];

    console.log('cache miss');
    return data;
  }
}
