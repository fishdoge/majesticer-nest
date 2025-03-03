import { Module } from '@nestjs/common';
import { BucketController } from './bucket.controller';
import { HttpModule } from '@nestjs/axios';
import { BucketService } from './bucket.service';
import { SuiPriceService } from 'src/sui-price/sui-price.service';

@Module({
  imports: [HttpModule], // Add HttpModule to imports
  controllers: [BucketController],
  providers: [BucketService, SuiPriceService],
})
export class BucketModule {}
