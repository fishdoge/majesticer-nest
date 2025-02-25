export const rightShift = (encodedOrderId: bigint, shiftBy: number): bigint => {
  return encodedOrderId >> BigInt(shiftBy);
};

export const format = (amount: number, coinDecimal: number): number => {
  return Number((amount / 10 ** coinDecimal).toFixed(coinDecimal));
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
