import { Controller, Get, Query } from '@nestjs/common';
import { BucketService } from './bucket.service';

@Controller('bucket')
export class BucketController {
  constructor(private readonly bucketService: BucketService) {}

  @Get('bottles')
  getBottles(@Query('address') address: string) {
    return this.bucketService.getBottles(address);
  }
}
