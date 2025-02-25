import { Module } from '@nestjs/common';
import { DeepBookService } from './deepbook.service';

@Module({
  providers: [DeepBookService],
  exports: [DeepBookService], // 要指定 export 哪個 service 出去
})
export class DeepBookModule {}
