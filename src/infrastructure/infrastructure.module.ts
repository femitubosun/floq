import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { CacheModule } from '@/infrastructure/cache/cache.module';
import { CryptoModule } from './crypto/crypto.module';
import { QueueModule } from './queue/queue.module';
import { MailModule } from './mail/mail.module';

@Global()
@Module({
  imports: [
    PrismaModule,
    CacheModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        url: configService.get<string>('CACHE_URL')!,
      }),
      inject: [ConfigService],
    }),
    CryptoModule,
    QueueModule,
    MailModule,
  ],
  exports: [PrismaModule, CacheModule, CryptoModule, QueueModule, MailModule],
})
export class InfrastructureModule {}
