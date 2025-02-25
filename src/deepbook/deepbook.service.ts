import { format } from './../utils/math';
import { SuiClient } from '@mysten/sui/dist/cjs/client';
import { Transaction } from '@mysten/sui/transactions';
import { bcs } from '@mysten/sui/bcs';

import type { Order as OrderT } from '../utils/types';
import { getClient } from '../utils/client';
import { COINS, DEV_SENDER } from '../utils/configs';
import { Order } from '../utils/types';

import { Injectable } from '@nestjs/common';
import { SUI_CLOCK_OBJECT_ID } from '@mysten/sui/utils';

export const DEEP_BOOK = {
  package: '0x2c8d603bc51326b8c13cef9dd07031a408a48dddb541963357661df5d3204809',
  suiUsdcPool:
    '0xe05dafb5133bcffb8d59f4e12465dc0e9faeaa05e3e342a08fe135800e3e4407',
};

@Injectable()
export class DeepBookService {
  client: SuiClient;
  #address: string;

  public static package = DEEP_BOOK.package;

  constructor() {
    // Mainnet & dev sender are by default
    this.client = getClient('mainnet');
    this.#address = DEV_SENDER;
  }

  async getPrice(order: OrderT) {
    const tx = new Transaction();

    tx.moveCall({
      target: `${DeepBookService.package}::order::price`,
      typeArguments: [],
      arguments: [Order.serialize(order)],
    });

    const res = await this.client.devInspectTransactionBlock({
      sender: this.#address,
      transactionBlock: tx,
    });

    const price = bcs
      .u64()
      .parse(new Uint8Array(res.results![0].returnValues![0][0]));

    return price;
  }

  async getOrders(limit: number, isBid: boolean) {
    const tx = new Transaction();

    const [orderPage] = tx.moveCall({
      target: `${DeepBookService.package}::order_query::iter_orders`,
      typeArguments: [COINS.SUI, COINS.USDC],
      arguments: [
        tx.object(DEEP_BOOK.suiUsdcPool),
        tx.pure.option('u128', null),
        tx.pure.option('u128', null),
        tx.pure.option('u64', null),
        tx.pure.u64(limit),
        tx.pure.bool(isBid),
      ],
    });

    tx.moveCall({
      target: `${DeepBookService.package}::order_query::orders`,
      typeArguments: [],
      arguments: [orderPage],
    });

    const res = await this.client.devInspectTransactionBlock({
      sender: this.#address,
      transactionBlock: tx,
    });

    const orders = bcs
      .vector(Order)
      .parse(new Uint8Array(res.results![1].returnValues![0][0]));

    return orders;
  }

  async swapExactBaseForQuote() {
    const tx = new Transaction();

    const BASE = COINS.SUI;
    const QUOTE = COINS.USDC;

    const [sui] = tx.splitCoins(tx.gas, [1e9]);

    const [base, quote] = tx.moveCall({
      target: `${DeepBookService.package}::pool::swap_exact_base_for_quote`,
      typeArguments: [COINS.SUI, COINS.USDC],
      arguments: [
        tx.object(DEEP_BOOK.suiUsdcPool),
        sui,
        tx.object(
          '0x77c0c570a1c548e6ca16c10153a8c8c3b613887ff09469692d5b51dabf77bb71',
        ),
        tx.pure.u64(0),
        tx.object(SUI_CLOCK_OBJECT_ID),
      ],
    });

    tx.moveCall({
      target: `0x2::coin::value`,
      typeArguments: [BASE],
      arguments: [base],
    });

    tx.moveCall({
      target: `0x2::coin::value`,
      typeArguments: [QUOTE],
      arguments: [quote],
    });

    const res = await this.client.devInspectTransactionBlock({
      sender: this.#address,
      transactionBlock: tx,
    });

    console.log(res);

    const baseValue = bcs
      .u64()
      .parse(new Uint8Array(res.results![2].returnValues![0][0]));
    const quoteValue = bcs
      .u64()
      .parse(new Uint8Array(res.results![3].returnValues![0][0]));

    console.log('baseValue', format(Number(baseValue), 9));
    console.log('quoteValue', format(Number(quoteValue), 6));
    console.log(Number(quoteValue) / (1e9 - Number(baseValue)));

    return {
      baseValue: format(Number(baseValue), 9),
      quoteValue: format(Number(quoteValue), 6),
    };
  }
}
