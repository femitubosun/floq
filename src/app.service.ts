import { Injectable } from '@nestjs/common';
import { RedisService } from '@/infrastructure/cache/services/redis.service';

@Injectable()
export class AppService {
  constructor(private cacheService: RedisService) {}

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
