import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ApiKeysModule } from './api-keys/api-keys.module';
import { SuiPriceModule } from './sui-price/sui-price.module';
import { ApiKeyMiddleware } from './common/middleware/api-key.middleware';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    PrismaModule,
    ApiKeysModule,
    SuiPriceModule,
    CacheModule.register({
      ttl: 30, // 快取 30 秒
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ApiKeyMiddleware)
      .exclude('/api-keys')  // 排除 API key 創建的端點
      .forRoutes('*');  // 應用到所有其他路由
  }
}
