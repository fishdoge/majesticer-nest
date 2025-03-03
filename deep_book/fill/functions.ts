import {PUBLISHED_AT} from "..";
import {ID} from "../../_dependencies/onchain/0x2/object/structs";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface NewArgs { u128: bigint | TransactionArgument; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument; id: string | TransactionArgument; bool1: boolean | TransactionArgument; bool2: boolean | TransactionArgument; u643: bigint | TransactionArgument; u644: bigint | TransactionArgument; u645: bigint | TransactionArgument; bool3: boolean | TransactionArgument; u646: bigint | TransactionArgument; orderDeepPrice: TransactionObjectInput; bool4: boolean | TransactionArgument; bool5: boolean | TransactionArgument }

export function new_( tx: Transaction, args: NewArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::fill::new`, arguments: [ pure(tx, args.u128, `u128`), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`), pure(tx, args.id, `${ID.$typeName}`), pure(tx, args.bool1, `bool`), pure(tx, args.bool2, `bool`), pure(tx, args.u643, `u64`), pure(tx, args.u644, `u64`), pure(tx, args.u645, `u64`), pure(tx, args.bool3, `bool`), pure(tx, args.u646, `u64`), obj(tx, args.orderDeepPrice), pure(tx, args.bool4, `bool`), pure(tx, args.bool5, `bool`) ], }) }

export function makerFee( tx: Transaction, fill: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::fill::maker_fee`, arguments: [ obj(tx, fill) ], }) }

export function takerFee( tx: Transaction, fill: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::fill::taker_fee`, arguments: [ obj(tx, fill) ], }) }

export function expired( tx: Transaction, fill: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::fill::expired`, arguments: [ obj(tx, fill) ], }) }

export function makerOrderId( tx: Transaction, fill: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::fill::maker_order_id`, arguments: [ obj(tx, fill) ], }) }

export function makerClientOrderId( tx: Transaction, fill: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::fill::maker_client_order_id`, arguments: [ obj(tx, fill) ], }) }

export function executionPrice( tx: Transaction, fill: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::fill::execution_price`, arguments: [ obj(tx, fill) ], }) }

export function balanceManagerId( tx: Transaction, fill: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::fill::balance_manager_id`, arguments: [ obj(tx, fill) ], }) }

export function completed( tx: Transaction, fill: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::fill::completed`, arguments: [ obj(tx, fill) ], }) }

export function originalMakerQuantity( tx: Transaction, fill: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::fill::original_maker_quantity`, arguments: [ obj(tx, fill) ], }) }

export function baseQuantity( tx: Transaction, fill: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::fill::base_quantity`, arguments: [ obj(tx, fill) ], }) }

export function takerIsBid( tx: Transaction, fill: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::fill::taker_is_bid`, arguments: [ obj(tx, fill) ], }) }

export function quoteQuantity( tx: Transaction, fill: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::fill::quote_quantity`, arguments: [ obj(tx, fill) ], }) }

export function makerEpoch( tx: Transaction, fill: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::fill::maker_epoch`, arguments: [ obj(tx, fill) ], }) }

export function makerDeepPrice( tx: Transaction, fill: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::fill::maker_deep_price`, arguments: [ obj(tx, fill) ], }) }

export function takerFeeIsDeep( tx: Transaction, fill: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::fill::taker_fee_is_deep`, arguments: [ obj(tx, fill) ], }) }

export function makerFeeIsDeep( tx: Transaction, fill: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::fill::maker_fee_is_deep`, arguments: [ obj(tx, fill) ], }) }

export function getSettledMakerQuantities( tx: Transaction, fill: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::fill::get_settled_maker_quantities`, arguments: [ obj(tx, fill) ], }) }

export interface SetFillMakerFeeArgs { fill: TransactionObjectInput; u64: bigint | TransactionArgument }

export function setFillMakerFee( tx: Transaction, args: SetFillMakerFeeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::fill::set_fill_maker_fee`, arguments: [ obj(tx, args.fill), pure(tx, args.u64, `u64`) ], }) }

export interface SetFillTakerFeeArgs { fill: TransactionObjectInput; u64: bigint | TransactionArgument }

export function setFillTakerFee( tx: Transaction, args: SetFillTakerFeeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::fill::set_fill_taker_fee`, arguments: [ obj(tx, args.fill), pure(tx, args.u64, `u64`) ], }) }
