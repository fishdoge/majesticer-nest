import { bcs } from "@mysten/sui/bcs";
import { fromHex, toHex } from "@mysten/sui/utils";

const ID = bcs.fixedArray(32, bcs.u8()).transform({
  input: (id: string) => fromHex(id),
  output: (id) => toHex(Uint8Array.from(id)),
});

const OrderDeepPrice = bcs.struct("OrderDeepPrice", {
  assetIsBase: bcs.bool(),
  deepPerAsset: bcs.u64(),
});

//? not hardcode?
export type Order = {
  balanceManagerId: string;
  orderId: string;
  clientOrderId: string;
  quantity: string;
  filledQuantity: string;
  feeIsDeep: boolean;
  orderDeepPrice: {
    assetIsBase: boolean;
    deepPerAsset: string;
  };
  epoch: string;
  status: number;
  expireTimestamp: string;
};

export const Order = bcs.struct("Order", {
  balanceManagerId: ID,
  orderId: bcs.u128(),
  clientOrderId: bcs.u64(),
  quantity: bcs.u64(),
  filledQuantity: bcs.u64(),
  feeIsDeep: bcs.bool(),
  orderDeepPrice: OrderDeepPrice,
  epoch: bcs.u64(),
  status: bcs.u8(),
  expireTimestamp: bcs.u64(),
});

// struct CalculatedSwapResult has copy, drop, store {
//   amount_in: u64,
//   amount_out: u64,
//   fee_amount: u64,
//   fee_rate: u64,
//   after_sqrt_price: u128,
//   is_exceed: bool,
//   step_results: vector<SwapStepResult>
// }

// struct SwapStepResult has copy, drop, store {
//   current_sqrt_price: u128,
//   target_sqrt_price: u128,
//   current_liquidity: u128,
//   amount_in: u64,
//   amount_out: u64,
//   fee_amount: u64,
//   remainder_amount: u64
// }

const SwapStepResult = bcs.struct("SwapStepResult", {
  currentSqrtPrice: bcs.u128(),
  targetSqrtPrice: bcs.u128(),
  currentLiquidity: bcs.u128(),
  amountIn: bcs.u64(),
  amountOut: bcs.u64(),
  feeAmount: bcs.u64(),
  remainderAmount: bcs.u64(),
});

export const CalculatedSwapResult = bcs.struct("CalculatedSwapResult", {
  amountIn: bcs.u64(),
  amountOut: bcs.u64(),
  feeAmount: bcs.u64(),
  feeRate: bcs.u64(),
  afterSqrtPrice: bcs.u128(),
  isExceed: bcs.bool(),
  stepResults: bcs.vector(SwapStepResult),
});

export const Balance = bcs.struct("Balance", {
  value: bcs.u64(),
});

export const Address = bcs.bytes(32).transform({
  // To change the input type, you need to provide a type definition for the input
  input: (val: string) => fromHex(val),
  output: (val) => toHex(val),
});
