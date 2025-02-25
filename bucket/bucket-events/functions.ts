import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface EmitBottleCreatedArgs { address: string | TransactionArgument; bottle: TransactionObjectInput }

export function emitBottleCreated( tx: Transaction, typeArg: string, args: EmitBottleCreatedArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket_events::emit_bottle_created`, typeArguments: [typeArg], arguments: [ pure(tx, args.address, `address`), obj(tx, args.bottle) ], }) }

export interface EmitBottleUpdatedArgs { address: string | TransactionArgument; bottle: TransactionObjectInput }

export function emitBottleUpdated( tx: Transaction, typeArg: string, args: EmitBottleUpdatedArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket_events::emit_bottle_updated`, typeArguments: [typeArg], arguments: [ pure(tx, args.address, `address`), obj(tx, args.bottle) ], }) }

export interface EmitBottleDestroyedArgs { address: string | TransactionArgument; bottle: TransactionObjectInput }

export function emitBottleDestroyed( tx: Transaction, typeArg: string, args: EmitBottleDestroyedArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket_events::emit_bottle_destroyed`, typeArguments: [typeArg], arguments: [ pure(tx, args.address, `address`), obj(tx, args.bottle) ], }) }

export interface EmitSurplusBottleGeneratedArgs { address: string | TransactionArgument; bottle: TransactionObjectInput }

export function emitSurplusBottleGenerated( tx: Transaction, typeArg: string, args: EmitSurplusBottleGeneratedArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket_events::emit_surplus_bottle_generated`, typeArguments: [typeArg], arguments: [ pure(tx, args.address, `address`), obj(tx, args.bottle) ], }) }

export interface EmitSurplusBottleWithdrawalArgs { address: string | TransactionArgument; bottle: TransactionObjectInput }

export function emitSurplusBottleWithdrawal( tx: Transaction, typeArg: string, args: EmitSurplusBottleWithdrawalArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket_events::emit_surplus_bottle_withdrawal`, typeArguments: [typeArg], arguments: [ pure(tx, args.address, `address`), obj(tx, args.bottle) ], }) }

export interface EmitRedeemArgs { u641: bigint | TransactionArgument; u642: bigint | TransactionArgument }

export function emitRedeem( tx: Transaction, typeArg: string, args: EmitRedeemArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket_events::emit_redeem`, typeArguments: [typeArg], arguments: [ pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`) ], }) }

export function emitFeeRateChanged( tx: Transaction, typeArg: string, u64: bigint | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket_events::emit_fee_rate_changed`, typeArguments: [typeArg], arguments: [ pure(tx, u64, `u64`) ], }) }

export function emitRedistribution( tx: Transaction, typeArg: string, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket_events::emit_redistribution`, typeArguments: [typeArg], arguments: [ ], }) }
