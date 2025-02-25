import {PUBLISHED_AT} from "..";
import {pure} from "../../_framework/util";
import {Transaction, TransactionArgument} from "@mysten/sui/transactions";

export interface MulArgs { u641: bigint | TransactionArgument; u642: bigint | TransactionArgument }

export function mul( tx: Transaction, args: MulArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::mul`, arguments: [ pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`) ], }) }

export interface DivArgs { u641: bigint | TransactionArgument; u642: bigint | TransactionArgument }

export function div( tx: Transaction, args: DivArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::div`, arguments: [ pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`) ], }) }

export function median( tx: Transaction, vecU128: Array<bigint | TransactionArgument> | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::median`, arguments: [ pure(tx, vecU128, `vector<u128>`) ], }) }

export interface MulInternalArgs { u641: bigint | TransactionArgument; u642: bigint | TransactionArgument }

export function mulInternal( tx: Transaction, args: MulInternalArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::mul_internal`, arguments: [ pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`) ], }) }

export function quickSort( tx: Transaction, vecU128: Array<bigint | TransactionArgument> | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::quick_sort`, arguments: [ pure(tx, vecU128, `vector<u128>`) ], }) }

export interface SqrtArgs { u641: bigint | TransactionArgument; u642: bigint | TransactionArgument }

export function sqrt( tx: Transaction, args: SqrtArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::sqrt`, arguments: [ pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`) ], }) }

export interface MulU128Args { u1281: bigint | TransactionArgument; u1282: bigint | TransactionArgument }

export function mulU128( tx: Transaction, args: MulU128Args ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::mul_u128`, arguments: [ pure(tx, args.u1281, `u128`), pure(tx, args.u1282, `u128`) ], }) }

export interface MulRoundUpArgs { u641: bigint | TransactionArgument; u642: bigint | TransactionArgument }

export function mulRoundUp( tx: Transaction, args: MulRoundUpArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::mul_round_up`, arguments: [ pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`) ], }) }

export interface DivU128Args { u1281: bigint | TransactionArgument; u1282: bigint | TransactionArgument }

export function divU128( tx: Transaction, args: DivU128Args ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::div_u128`, arguments: [ pure(tx, args.u1281, `u128`), pure(tx, args.u1282, `u128`) ], }) }

export interface DivRoundUpArgs { u641: bigint | TransactionArgument; u642: bigint | TransactionArgument }

export function divRoundUp( tx: Transaction, args: DivRoundUpArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::div_round_up`, arguments: [ pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`) ], }) }

export interface MulInternalU128Args { u1281: bigint | TransactionArgument; u1282: bigint | TransactionArgument }

export function mulInternalU128( tx: Transaction, args: MulInternalU128Args ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::mul_internal_u128`, arguments: [ pure(tx, args.u1281, `u128`), pure(tx, args.u1282, `u128`) ], }) }

export interface DivInternalArgs { u641: bigint | TransactionArgument; u642: bigint | TransactionArgument }

export function divInternal( tx: Transaction, args: DivInternalArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::div_internal`, arguments: [ pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`) ], }) }

export interface DivInternalU128Args { u1281: bigint | TransactionArgument; u1282: bigint | TransactionArgument }

export function divInternalU128( tx: Transaction, args: DivInternalU128Args ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::div_internal_u128`, arguments: [ pure(tx, args.u1281, `u128`), pure(tx, args.u1282, `u128`) ], }) }
