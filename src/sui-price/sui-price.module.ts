import { Module } from '@nestjs/common';
import { SuiPriceController } from './sui-price.controller';
import { SuiPriceService } from './sui-price.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [SuiPriceController],
  providers: [SuiPriceService],
})
export class SuiPriceModule {} 