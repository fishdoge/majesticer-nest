import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface NewArgs { u641: bigint | TransactionArgument; u642: bigint | TransactionArgument; u643: bigint | TransactionArgument }

export function new_( tx: Transaction, typeArg: string, args: NewArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::reservoir::new`, typeArguments: [typeArg], arguments: [ pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`), pure(tx, args.u643, `u64`) ], }) }

export function conversionRate( tx: Transaction, typeArg: string, reservoir: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::reservoir::conversion_rate`, typeArguments: [typeArg], arguments: [ obj(tx, reservoir) ], }) }

export interface HandleChargeArgs { reservoir: TransactionObjectInput; balance: TransactionObjectInput }

export function handleCharge( tx: Transaction, typeArg: string, args: HandleChargeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::reservoir::handle_charge`, typeArguments: [typeArg], arguments: [ obj(tx, args.reservoir), obj(tx, args.balance) ], }) }

export interface HandleDischargeArgs { reservoir: TransactionObjectInput; u64: bigint | TransactionArgument }

export function handleDischarge( tx: Transaction, typeArg: string, args: HandleDischargeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::reservoir::handle_discharge`, typeArguments: [typeArg], arguments: [ obj(tx, args.reservoir), pure(tx, args.u64, `u64`) ], }) }

export interface UpdateFeeRateArgs { reservoir: TransactionObjectInput; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument }

export function updateFeeRate( tx: Transaction, typeArg: string, args: UpdateFeeRateArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::reservoir::update_fee_rate`, typeArguments: [typeArg], arguments: [ obj(tx, args.reservoir), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`) ], }) }

export interface SetFeeConfigArgs { reservoir: TransactionObjectInput; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument }

export function setFeeConfig( tx: Transaction, typeArgs: [string, string], args: SetFeeConfigArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::reservoir::set_fee_config`, typeArguments: typeArgs, arguments: [ obj(tx, args.reservoir), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`) ], }) }

export function chargeFeeRate( tx: Transaction, typeArg: string, reservoir: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::reservoir::charge_fee_rate`, typeArguments: [typeArg], arguments: [ obj(tx, reservoir) ], }) }

export function dischargeFeeRate( tx: Transaction, typeArg: string, reservoir: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::reservoir::discharge_fee_rate`, typeArguments: [typeArg], arguments: [ obj(tx, reservoir) ], }) }

export function poolBalance( tx: Transaction, typeArg: string, reservoir: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::reservoir::pool_balance`, typeArguments: [typeArg], arguments: [ obj(tx, reservoir) ], }) }

export function isPartner( tx: Transaction, typeArgs: [string, string], reservoir: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::reservoir::is_partner`, typeArguments: typeArgs, arguments: [ obj(tx, reservoir) ], }) }

export function chargeFeeRateForPartner( tx: Transaction, typeArgs: [string, string], reservoir: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::reservoir::charge_fee_rate_for_partner`, typeArguments: typeArgs, arguments: [ obj(tx, reservoir) ], }) }

export function dischargeFeeRateForPartner( tx: Transaction, typeArgs: [string, string], reservoir: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::reservoir::discharge_fee_rate_for_partner`, typeArguments: typeArgs, arguments: [ obj(tx, reservoir) ], }) }
