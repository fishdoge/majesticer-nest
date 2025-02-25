import { Module } from '@nestjs/common';
import { PriceController } from './price.controller';
import { PriceService } from './price.service';
import { DeepBookModule } from 'src/deepbook/deepbook.module';

@Module({
  imports: [DeepBookModule],
  controllers: [PriceController],
  providers: [PriceService],
})
export class PriceModule {}
