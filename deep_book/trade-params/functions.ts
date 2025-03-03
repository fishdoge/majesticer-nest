import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface NewArgs { u641: bigint | TransactionArgument; u642: bigint | TransactionArgument; u643: bigint | TransactionArgument }

export function new_( tx: Transaction, args: NewArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::trade_params::new`, arguments: [ pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`), pure(tx, args.u643, `u64`) ], }) }

export function makerFee( tx: Transaction, tradeParams: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::trade_params::maker_fee`, arguments: [ obj(tx, tradeParams) ], }) }

export function takerFee( tx: Transaction, tradeParams: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::trade_params::taker_fee`, arguments: [ obj(tx, tradeParams) ], }) }

export interface TakerFeeForUserArgs { tradeParams: TransactionObjectInput; u64: bigint | TransactionArgument; u128: bigint | TransactionArgument }

export function takerFeeForUser( tx: Transaction, args: TakerFeeForUserArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::trade_params::taker_fee_for_user`, arguments: [ obj(tx, args.tradeParams), pure(tx, args.u64, `u64`), pure(tx, args.u128, `u128`) ], }) }

export function stakeRequired( tx: Transaction, tradeParams: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::trade_params::stake_required`, arguments: [ obj(tx, tradeParams) ], }) }
