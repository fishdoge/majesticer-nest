import { Controller, Get, Query } from '@nestjs/common';
import { BucketService } from './bucket.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('bucket')
@ApiTags('bucket')
export class BucketController {
  constructor(private readonly bucketService: BucketService) {}

  @Get('bottles')
  @ApiOperation({ summary: 'Get user bottles' })
  @ApiResponse({ status: 200, description: 'Get user bottles' })
  getBottles(@Query('address') address: string) {
    return this.bucketService.getBottles(address);
  }
}
