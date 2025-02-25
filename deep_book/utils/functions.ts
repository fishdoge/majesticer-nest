import {PUBLISHED_AT} from "..";
import {GenericArg, pure, vector} from "../../_framework/util";
import {Transaction, TransactionArgument} from "@mysten/sui/transactions";

export interface PopUntilArgs { vecT0: Array<GenericArg> | TransactionArgument; u64: bigint | TransactionArgument }

export function popUntil( tx: Transaction, typeArg: string, args: PopUntilArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::utils::pop_until`, typeArguments: [typeArg], arguments: [ vector(tx, `${typeArg}`, args.vecT0), pure(tx, args.u64, `u64`) ], }) }

export interface PopNArgs { vecT0: Array<GenericArg> | TransactionArgument; u64: bigint | TransactionArgument }

export function popN( tx: Transaction, typeArg: string, args: PopNArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::utils::pop_n`, typeArguments: [typeArg], arguments: [ vector(tx, `${typeArg}`, args.vecT0), pure(tx, args.u64, `u64`) ], }) }

export interface EncodeOrderIdArgs { bool: boolean | TransactionArgument; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument }

export function encodeOrderId( tx: Transaction, args: EncodeOrderIdArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::utils::encode_order_id`, arguments: [ pure(tx, args.bool, `bool`), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`) ], }) }

export function decodeOrderId( tx: Transaction, u128: bigint | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::utils::decode_order_id`, arguments: [ pure(tx, u128, `u128`) ], }) }
