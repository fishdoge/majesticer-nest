import {PUBLISHED_AT} from "..";
import {pure} from "../../_framework/util";
import {Transaction, TransactionArgument} from "@mysten/sui/transactions";

export interface MulDivArgs { u641: bigint | TransactionArgument; u642: bigint | TransactionArgument; u643: bigint | TransactionArgument }

export function mulDiv( tx: Transaction, args: MulDivArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::mul_div`, arguments: [ pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`), pure(tx, args.u643, `u64`) ], }) }

export interface MulDivU128Args { u641: bigint | TransactionArgument; u642: bigint | TransactionArgument; u643: bigint | TransactionArgument }

export function mulDivU128( tx: Transaction, args: MulDivU128Args ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::mul_div_u128`, arguments: [ pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`), pure(tx, args.u643, `u64`) ], }) }

export interface MulFactorU256Args { u2561: bigint | TransactionArgument; u2562: bigint | TransactionArgument; u2563: bigint | TransactionArgument }

export function mulFactorU256( tx: Transaction, args: MulFactorU256Args ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::mul_factor_u256`, arguments: [ pure(tx, args.u2561, `u256`), pure(tx, args.u2562, `u256`), pure(tx, args.u2563, `u256`) ], }) }

export interface CheckedMulArgs { u2561: bigint | TransactionArgument; u2562: bigint | TransactionArgument }

export function checkedMul( tx: Transaction, args: CheckedMulArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::checked_mul`, arguments: [ pure(tx, args.u2561, `u256`), pure(tx, args.u2562, `u256`) ], }) }

export interface IsSafeMulArgs { u2561: bigint | TransactionArgument; u2562: bigint | TransactionArgument }

export function isSafeMul( tx: Transaction, args: IsSafeMulArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::is_safe_mul`, arguments: [ pure(tx, args.u2561, `u256`), pure(tx, args.u2562, `u256`) ], }) }
