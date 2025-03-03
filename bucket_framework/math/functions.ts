import {PUBLISHED_AT} from "..";
import {pure} from "../../_framework/util";
import {Transaction, TransactionArgument} from "@mysten/sui/transactions";

export interface MulFactorArgs { u641: bigint | TransactionArgument; u642: bigint | TransactionArgument; u643: bigint | TransactionArgument }

export function mulFactor( tx: Transaction, args: MulFactorArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::mul_factor`, arguments: [ pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`), pure(tx, args.u643, `u64`) ], }) }

export interface MulFactorU128Args { u1281: bigint | TransactionArgument; u1282: bigint | TransactionArgument; u1283: bigint | TransactionArgument }

export function mulFactorU128( tx: Transaction, args: MulFactorU128Args ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::mul_factor_u128`, arguments: [ pure(tx, args.u1281, `u128`), pure(tx, args.u1282, `u128`), pure(tx, args.u1283, `u128`) ], }) }
