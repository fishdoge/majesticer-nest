import {PUBLISHED_AT} from "..";
import {ID} from "../../_dependencies/onchain/0x2/object/structs";
import {obj, pure} from "../../_framework/util";
import {Option} from "../../std/option/structs";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface NewArgs { u128: bigint | TransactionArgument; id: string | TransactionArgument; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument; u643: bigint | TransactionArgument; bool: boolean | TransactionArgument; orderDeepPrice: TransactionObjectInput; u644: bigint | TransactionArgument; u8: number | TransactionArgument; u645: bigint | TransactionArgument }

export function new_( tx: Transaction, args: NewArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order::new`, arguments: [ pure(tx, args.u128, `u128`), pure(tx, args.id, `${ID.$typeName}`), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`), pure(tx, args.u643, `u64`), pure(tx, args.bool, `bool`), obj(tx, args.orderDeepPrice), pure(tx, args.u644, `u64`), pure(tx, args.u8, `u8`), pure(tx, args.u645, `u64`) ], }) }

export function feeIsDeep( tx: Transaction, order: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order::fee_is_deep`, arguments: [ obj(tx, order) ], }) }

export function status( tx: Transaction, order: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order::status`, arguments: [ obj(tx, order) ], }) }

export function price( tx: Transaction, order: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order::price`, arguments: [ obj(tx, order) ], }) }

export function epoch( tx: Transaction, order: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order::epoch`, arguments: [ obj(tx, order) ], }) }

export function balanceManagerId( tx: Transaction, order: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order::balance_manager_id`, arguments: [ obj(tx, order) ], }) }

export function orderId( tx: Transaction, order: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order::order_id`, arguments: [ obj(tx, order) ], }) }

export function clientOrderId( tx: Transaction, order: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order::client_order_id`, arguments: [ obj(tx, order) ], }) }

export function quantity( tx: Transaction, order: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order::quantity`, arguments: [ obj(tx, order) ], }) }

export function filledQuantity( tx: Transaction, order: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order::filled_quantity`, arguments: [ obj(tx, order) ], }) }

export function orderDeepPrice( tx: Transaction, order: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order::order_deep_price`, arguments: [ obj(tx, order) ], }) }

export function expireTimestamp( tx: Transaction, order: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order::expire_timestamp`, arguments: [ obj(tx, order) ], }) }

export interface GenerateFillArgs { order: TransactionObjectInput; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument; bool1: boolean | TransactionArgument; bool2: boolean | TransactionArgument; bool3: boolean | TransactionArgument }

export function generateFill( tx: Transaction, args: GenerateFillArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order::generate_fill`, arguments: [ obj(tx, args.order), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`), pure(tx, args.bool1, `bool`), pure(tx, args.bool2, `bool`), pure(tx, args.bool3, `bool`) ], }) }

export interface ModifyArgs { order: TransactionObjectInput; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument }

export function modify( tx: Transaction, args: ModifyArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order::modify`, arguments: [ obj(tx, args.order), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`) ], }) }

export interface CalculateCancelRefundArgs { order: TransactionObjectInput; u64: bigint | TransactionArgument; option: (bigint | TransactionArgument | TransactionArgument | null) }

export function calculateCancelRefund( tx: Transaction, args: CalculateCancelRefundArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order::calculate_cancel_refund`, arguments: [ obj(tx, args.order), pure(tx, args.u64, `u64`), pure(tx, args.option, `${Option.$typeName}<u64>`) ], }) }

export interface LockedBalanceArgs { order: TransactionObjectInput; u64: bigint | TransactionArgument }

export function lockedBalance( tx: Transaction, args: LockedBalanceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order::locked_balance`, arguments: [ obj(tx, args.order), pure(tx, args.u64, `u64`) ], }) }

export interface EmitOrderCanceledArgs { order: TransactionObjectInput; id: string | TransactionArgument; address: string | TransactionArgument; u64: bigint | TransactionArgument }

export function emitOrderCanceled( tx: Transaction, args: EmitOrderCanceledArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order::emit_order_canceled`, arguments: [ obj(tx, args.order), pure(tx, args.id, `${ID.$typeName}`), pure(tx, args.address, `address`), pure(tx, args.u64, `u64`) ], }) }

export interface EmitOrderModifiedArgs { order: TransactionObjectInput; id: string | TransactionArgument; u641: bigint | TransactionArgument; address: string | TransactionArgument; u642: bigint | TransactionArgument }

export function emitOrderModified( tx: Transaction, args: EmitOrderModifiedArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order::emit_order_modified`, arguments: [ obj(tx, args.order), pure(tx, args.id, `${ID.$typeName}`), pure(tx, args.u641, `u64`), pure(tx, args.address, `address`), pure(tx, args.u642, `u64`) ], }) }

export interface EmitCancelMakerArgs { id1: string | TransactionArgument; id2: string | TransactionArgument; u128: bigint | TransactionArgument; u641: bigint | TransactionArgument; address: string | TransactionArgument; u642: bigint | TransactionArgument; bool: boolean | TransactionArgument; u643: bigint | TransactionArgument; u644: bigint | TransactionArgument; u645: bigint | TransactionArgument }

export function emitCancelMaker( tx: Transaction, args: EmitCancelMakerArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order::emit_cancel_maker`, arguments: [ pure(tx, args.id1, `${ID.$typeName}`), pure(tx, args.id2, `${ID.$typeName}`), pure(tx, args.u128, `u128`), pure(tx, args.u641, `u64`), pure(tx, args.address, `address`), pure(tx, args.u642, `u64`), pure(tx, args.bool, `bool`), pure(tx, args.u643, `u64`), pure(tx, args.u644, `u64`), pure(tx, args.u645, `u64`) ], }) }

export function copyOrder( tx: Transaction, order: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order::copy_order`, arguments: [ obj(tx, order) ], }) }

export function setCanceled( tx: Transaction, order: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order::set_canceled`, arguments: [ obj(tx, order) ], }) }

export function isBid( tx: Transaction, order: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order::is_bid`, arguments: [ obj(tx, order) ], }) }
