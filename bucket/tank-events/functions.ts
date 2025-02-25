import {PUBLISHED_AT} from "..";
import {pure} from "../../_framework/util";
import {Transaction, TransactionArgument} from "@mysten/sui/transactions";

export function emitDeposit( tx: Transaction, typeArg: string, u64: bigint | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::tank_events::emit_deposit`, typeArguments: [typeArg], arguments: [ pure(tx, u64, `u64`) ], }) }

export interface EmitWithdrawArgs { u641: bigint | TransactionArgument; u642: bigint | TransactionArgument; u643: bigint | TransactionArgument }

export function emitWithdraw( tx: Transaction, typeArg: string, args: EmitWithdrawArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::tank_events::emit_withdraw`, typeArguments: [typeArg], arguments: [ pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`), pure(tx, args.u643, `u64`) ], }) }

export interface EmitAbsorbArgs { u641: bigint | TransactionArgument; u642: bigint | TransactionArgument }

export function emitAbsorb( tx: Transaction, typeArg: string, args: EmitAbsorbArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::tank_events::emit_absorb`, typeArguments: [typeArg], arguments: [ pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`) ], }) }

export interface EmitTankUpdateArgs { u641: bigint | TransactionArgument; u642: bigint | TransactionArgument; u643: bigint | TransactionArgument }

export function emitTankUpdate( tx: Transaction, typeArg: string, args: EmitTankUpdateArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::tank_events::emit_tank_update`, typeArguments: [typeArg], arguments: [ pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`), pure(tx, args.u643, `u64`) ], }) }

export function emitCollectBkt( tx: Transaction, typeArg: string, u64: bigint | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::tank_events::emit_collect_bkt`, typeArguments: [typeArg], arguments: [ pure(tx, u64, `u64`) ], }) }
