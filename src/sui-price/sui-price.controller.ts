import { Controller, Get } from '@nestjs/common';
import { SuiPriceService } from './sui-price.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ApiKeyAuth } from '../common/decorators/api-key-auth.decorator';

@Controller('sui-price')
@ApiTags('sui-price')
@ApiKeyAuth()
export class SuiPriceController {
  constructor(private readonly suiPriceService: SuiPriceService) {}

  @Get()
  @ApiOperation({ summary: 'Get current SUI price' })
  @ApiResponse({ status: 200, description: 'Current SUI price' })
  async getPrice() {
    return this.suiPriceService.getCurrentPrice();
  }
} 