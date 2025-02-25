import { Injectable } from '@nestjs/common';
import { Transaction } from '@mysten/sui/transactions';
import { getFullnodeUrl, SuiClient } from '@mysten/sui/client';
import { bcs } from '@mysten/sui/bcs';
import { SUI_CLOCK_OBJECT_ID } from '@mysten/sui/utils';
import { fromHex, toHex } from '@mysten/sui/utils';
import axios from 'axios';

const POOL =
  '0xe05dafb5133bcffb8d59f4e12465dc0e9faeaa05e3e342a08fe135800e3e4407'; // sui_usdc
const MOCK_SENDER =
  '0xfb58f3db6e97678ecbe3f3f9fa2a5f5f4f16cca39a5987aaede60df468c59661';
const USDC =
  '0xdba34672e30cb065b1f93e3ab55318768fd6fef66c15942c9f7cb846e2f900e7::usdc::USDC';

@Injectable()
export class PriceService {
  async getSuiPrice() {
    const price = await preSwapSui();
    return {
      price,
    };
  }

  async getDeepPrice() {
    const price = await preSwapDeep();
    return {
      price,
    };
  }

  async getAskOrder(limit: number) {
    const orders = await queryOrder(false, limit);
    return orders;
  }

  async getBidOrder(limit: number) {
    const orders = await queryOrder(true, limit);
    return orders;
  }

  async getDaily() {
    const blockdata = await getTransactions();
    return blockdata;
  }
}

async function getTransactions() {
  const url =
    'https://api.blockberry.one/sui/v1/widgets/total-transactions?period=DAY&size=SMALL';
  const headers = {
    accept: '*/*',
    'x-api-key': process.env.NEXT_PUBLIC_BLOCKBERRY, // 請填入你的 API 金鑰
  };

  try {
    const response = await axios.get(url, { headers });
    console.log(response.data.changeValue); // Axios 返回的數據在 `data` 屬性中

    return response.data.changeValue;
  } catch (e) {
    console.log(e);
    return 0;
  }
}

const ID = bcs.fixedArray(32, bcs.u8()).transform({
  input: (id: string) => fromHex(id),
  output: (id) => toHex(Uint8Array.from(id)),
});

const OrderDeepPrice = bcs.struct('OrderDeepPrice', {
  asset_is_base: bcs.bool(),
  deep_per_asset: bcs.u64(),
});

export const Order = bcs.struct('Order', {
  balance_manager_id: ID,
  order_id: bcs.u128(),
  client_order_id: bcs.u64(),
  quantity: bcs.u64(),
  filled_quantity: bcs.u64(),
  fee_is_deep: bcs.bool(),
  order_deep_price: OrderDeepPrice,
  epoch: bcs.u64(),
  status: bcs.u8(),
  expire_timestamp: bcs.u64(),
});

async function queryOrder(isBid: boolean, limit: number) {
  const rpcUrl = getFullnodeUrl('mainnet');
  const client = new SuiClient({ url: rpcUrl });

  const tx = new Transaction();

  const [orderPage] = tx.moveCall({
    target:
      '0x2c8d603bc51326b8c13cef9dd07031a408a48dddb541963357661df5d3204809::order_query::iter_orders',
    typeArguments: ['0x2::sui::SUI', USDC],
    arguments: [
      tx.object(POOL),
      tx.pure.option('u128', null),
      tx.pure.option('u128', null),
      tx.pure.option('u64', null),
      tx.pure.u64(limit),
      tx.pure.bool(isBid),
    ],
  });

  tx.moveCall({
    target:
      '0x2c8d603bc51326b8c13cef9dd07031a408a48dddb541963357661df5d3204809::order_query::orders',
    typeArguments: [],
    arguments: [orderPage],
  });

  try {
    const res = await client.devInspectTransactionBlock({
      sender: MOCK_SENDER,
      transactionBlock: tx,
    });

    const orders = bcs
      .vector(Order)
      .parse(new Uint8Array(res.results![1].returnValues![0][0]));

    const dataInfo: { quantity: string; price: number }[] = [];

    orders.forEach((order) => {
      console.log('Quantity: ', order.quantity);
      const { price } = decodeOrderId(BigInt(order.order_id));
      console.log('Price: ', price);

      dataInfo.push({ quantity: order.quantity, price: Number(price) });
    });

    console.log(dataInfo);

    return dataInfo;
  } catch (e) {
    console.error(e);
  }
}

function decodeOrderId(encodedOrderId: bigint): {
  isBid: boolean;
  price: bigint;
  orderId: bigint;
} {
  const isBid = encodedOrderId >> BigInt(127) === BigInt(0);
  const price =
    (encodedOrderId >> BigInt(64)) & ((BigInt(1) << BigInt(63)) - BigInt(1));
  const orderId = encodedOrderId & ((BigInt(1) << BigInt(64)) - BigInt(1));

  return { isBid, price, orderId };
}

const DeepPool =
  '0xf948981b806057580f91622417534f491da5f61aeaf33d0ed8e69fd5691c95ce';

export async function preSwapDeep(): Promise<number> {
  const rpcUrl = getFullnodeUrl('mainnet');
  const client = new SuiClient({ url: rpcUrl });

  const tx = new Transaction();

  // Swap Deep -> USDC
  tx.moveCall({
    target:
      '0x2c8d603bc51326b8c13cef9dd07031a408a48dddb541963357661df5d3204809::pool::get_quote_quantity_out',
    typeArguments: [
      '0xdeeb7a4662eec9f2f3def03fb937a663dddaa2e215b8078a284d026b7946c270::deep::DEEP',
      USDC,
    ],
    arguments: [
      tx.object(DeepPool),
      tx.pure.u64(1_000_000_000),
      tx.object(SUI_CLOCK_OBJECT_ID),
    ],
  });

  try {
    const res = await client.devInspectTransactionBlock({
      sender:
        '0x8cf2285fb2ae4a5dd23a0fd28dbd129917fcd59b04f6272ff2b5eb358349e5f2',
      transactionBlock: tx,
    });

    const baseOut = Number(
      bcs.U64.parse(new Uint8Array(res.results![0].returnValues![0][0])),
    );
    const quoteOut = Number(
      bcs.U64.parse(new Uint8Array(res.results![0].returnValues![1][0])),
    );
    const deepRequired = Number(
      bcs.U64.parse(new Uint8Array(res.results![0].returnValues![2][0])),
    );

    const deepPrize: number | undefined = decimals(
      baseOut,
      quoteOut,
      deepRequired,
      1e14,
    );

    if (deepPrize === undefined) {
      return 0; // 確保返回值為數字
    }

    return deepPrize; // deepPrize 一定是 number
  } catch (e) {
    console.log(e);
    return 0;
  }
}

async function preSwapSui() {
  const rpcUrl = getFullnodeUrl('mainnet');
  const client = new SuiClient({ url: rpcUrl });

  const tx = new Transaction();

  // Swap SUI -> USDC
  tx.moveCall({
    target:
      '0x2c8d603bc51326b8c13cef9dd07031a408a48dddb541963357661df5d3204809::pool::get_quote_quantity_out',
    typeArguments: ['0x2::sui::SUI', USDC],
    arguments: [
      tx.object(POOL),
      tx.pure.u64(1_000_000_000),
      tx.object(SUI_CLOCK_OBJECT_ID),
    ],
  });

  try {
    const res = await client.devInspectTransactionBlock({
      sender: MOCK_SENDER,
      transactionBlock: tx,
    });

    const baseOut = Number(
      bcs.U64.parse(new Uint8Array(res.results![0].returnValues![0][0])),
    );
    const quoteOut = Number(
      bcs.U64.parse(new Uint8Array(res.results![0].returnValues![1][0])),
    );
    const deepRequired = Number(
      bcs.U64.parse(new Uint8Array(res.results![0].returnValues![2][0])),
    );

    const suiPrize = decimals(baseOut, quoteOut, deepRequired, 1e11);

    console.log(suiPrize);

    return suiPrize;
  } catch (e) {
    console.log(e);
  }
}

function decimals(
  baseOut: number,
  quoteOut: number,
  deepRequired: number,
  dec: number,
) {
  const decimalValue = baseOut * 1e10 + quoteOut * 1e5 + deepRequired;
  const value = decimalValue / dec;
  return value;
}
