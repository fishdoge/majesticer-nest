import { Injectable } from '@nestjs/common';
import { BucketClient, UserBottleInfo } from 'bucket-protocol-sdk';
import { SuiPriceService } from 'src/sui-price/sui-price.service';

const COIN_MAPPING = {
  vSUI: 'volo-staked-sui',
  SUI: 'sui',
  afSUI: 'aftermath-staked-sui',
  haSUI: 'haedal-staked-sui',
};

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

type Bottle = {
  bottle: UserBottleInfo;
  collateralRatio: number;
  liquidatePrice: number;
};

@Injectable()
export class BucketService {
  constructor(private readonly suiPriceService: SuiPriceService) {}

  async getBottles(address: string) {
    const bucket = new BucketClient();
    const bottles = await bucket.getUserBottles(address);

    const data: Bottle[] = [];
    for (const bottle of bottles) {
      const { buckAmount, collateralAmount, token } = bottle;

      // TODO only support SUI / vSUI / afSUI / haSUI now
      const { price } = await this.suiPriceService.getCurrentPrice(
        COIN_MAPPING[token],
      );
      const { minCollateralRatio } = await bucket.getBucket(token);
      const { CR, liquidatePrice } = getLiquidateInfo(
        price,
        buckAmount,
        collateralAmount,
        Number(minCollateralRatio) / 100,
      );

      data.push({
        bottle,
        collateralRatio: CR,
        liquidatePrice,
      });
    }

    return data;
  }
}
