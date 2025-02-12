import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';

@Injectable()
export class SuiPriceService {
  private readonly logger = new Logger(SuiPriceService.name);

  constructor(private readonly httpService: HttpService) {}

  async getCurrentPrice(): Promise<{
    price: number;
    timestamp: number;
    currency: string;
  }> {
    const { data } = await firstValueFrom(
      this.httpService
        .get('https://api.coingecko.com/api/v3/simple/price', {
          params: {
            ids: 'sui',
            vs_currencies: 'usd',
            include_last_updated_at: true,
          },
        })
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error.response?.data);
            throw error;
          }),
        ),
    );

    return {
      price: data.sui.usd,
      timestamp: data.sui.last_updated_at * 1000, // 轉換為毫秒
      currency: 'USD',
    };
  }
} 