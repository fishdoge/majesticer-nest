import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function emitCollectFee( tx: Transaction, typeArg: string, u64: bigint | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::well_events::emit_collect_fee`, typeArguments: [typeArg], arguments: [ pure(tx, u64, `u64`) ], }) }

export interface EmitStakeArgs { u641: bigint | TransactionArgument; u642: bigint | TransactionArgument; u643: bigint | TransactionArgument }

export function emitStake( tx: Transaction, typeArg: string, args: EmitStakeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::well_events::emit_stake`, typeArguments: [typeArg], arguments: [ pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`), pure(tx, args.u643, `u64`) ], }) }

export interface EmitUnstakeArgs { u641: bigint | TransactionArgument; u642: bigint | TransactionArgument; u643: bigint | TransactionArgument }

export function emitUnstake( tx: Transaction, typeArg: string, args: EmitUnstakeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::well_events::emit_unstake`, typeArguments: [typeArg], arguments: [ pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`), pure(tx, args.u643, `u64`) ], }) }

export function emitClaim( tx: Transaction, typeArg: string, u64: bigint | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::well_events::emit_claim`, typeArguments: [typeArg], arguments: [ pure(tx, u64, `u64`) ], }) }

export function emitPenalty( tx: Transaction, typeArg: string, u64: bigint | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::well_events::emit_penalty`, typeArguments: [typeArg], arguments: [ pure(tx, u64, `u64`) ], }) }

export interface EmitCollectFeeFromArgs { balance: TransactionObjectInput; vecU8: Array<number | TransactionArgument> | TransactionArgument }

export function emitCollectFeeFrom( tx: Transaction, typeArg: string, args: EmitCollectFeeFromArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::well_events::emit_collect_fee_from`, typeArguments: [typeArg], arguments: [ obj(tx, args.balance), pure(tx, args.vecU8, `vector<u8>`) ], }) }
