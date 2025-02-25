import {PUBLISHED_AT} from "..";
import {pure} from "../../_framework/util";
import {Transaction, TransactionArgument} from "@mysten/sui/transactions";

export interface EmitChargeReservoirArgs { u641: bigint | TransactionArgument; u642: bigint | TransactionArgument }

export function emitChargeReservoir( tx: Transaction, typeArg: string, args: EmitChargeReservoirArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::reservoir_events::emit_charge_reservoir`, typeArguments: [typeArg], arguments: [ pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`) ], }) }

export interface EmitDischargeReservoirArgs { u641: bigint | TransactionArgument; u642: bigint | TransactionArgument }

export function emitDischargeReservoir( tx: Transaction, typeArg: string, args: EmitDischargeReservoirArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::reservoir_events::emit_discharge_reservoir`, typeArguments: [typeArg], arguments: [ pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`) ], }) }
