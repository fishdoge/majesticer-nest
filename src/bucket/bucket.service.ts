import { Injectable } from '@nestjs/common';
import { BucketClient } from 'bucket-protocol-sdk';
import { SuiPriceService } from 'src/sui-price/sui-price.service';

export function getLiquidateInfo(
  price: number,
  buckAmount: number,
  collateralAmount: number,
  MCR: number = 1.1,
) {
  const value = Number(collateralAmount) * price;
  const CR = value / Number(buckAmount);

  const liquidateable = MCR * Number(buckAmount);
  const liquidatePrice = liquidateable / Number(collateralAmount);

  return { CR, liquidatePrice };
}

@Injectable()
export class BucketService {
  constructor(private readonly suiPriceService: SuiPriceService) {}

  async getBottles(address: string) {
    const bucket = new BucketClient();
    const bottles = await bucket.getUserBottles(address);

    const { price } = await this.suiPriceService.getCurrentPrice();
    console.log('price', price);

    const data = bottles.map((bottle) => {
      const { buckAmount, collateralAmount } = bottle;
      const { CR, liquidatePrice } = getLiquidateInfo(
        price,
        buckAmount,
        collateralAmount,
      );

      return {
        bottle,
        collateralRatio: CR,
        liquidatePrice,
      };
    });

    return data;
  }
}
