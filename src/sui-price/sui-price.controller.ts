import { Controller, Get } from '@nestjs/common';
import { SuiPriceService } from './sui-price.service';
// import { CacheInterceptor, CacheTTL } from '@nestjs/cache-manager';
@Controller('sui-price')
// @UseInterceptors(CacheInterceptor)  // 使用快取來減少 API 調用
export class SuiPriceController {
  constructor(private readonly suiPriceService: SuiPriceService) {}

  @Get()
  getCurrentPrice() {
    return this.suiPriceService.getCurrentPrice();
  }
} 