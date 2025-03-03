import { Controller, Get, Query } from '@nestjs/common';
import { PriceService } from './price.service';

@Controller('price')
export class PriceController {
  constructor(private readonly priceService: PriceService) {}

  @Get('sui')
  getSuiPrice() {
    return this.priceService.getSuiPrice();
  }

  @Get('deep')
  getDeepPrice() {
    return this.priceService.getDeepPrice();
  }

  @Get('get_ask_order')
  getAskOrder(@Query('limit') limit: number) {
    return this.priceService.getAskOrder(limit);
  }

  @Get('get_bid_order')
  getBidOrder(@Query('limit') limit: number) {
    return this.priceService.getBidOrder(limit);
  }

  @Get('daily_tx')
  getDailyTx() {
    return this.priceService.getDaily();
  }
}
