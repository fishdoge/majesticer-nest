import {PUBLISHED_AT} from "..";
import {ID} from "../../_dependencies/onchain/0x2/object/structs";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function empty( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::deep_price::empty`, arguments: [ ], }) }

export function assetIsBase( tx: Transaction, orderDeepPrice: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::deep_price::asset_is_base`, arguments: [ obj(tx, orderDeepPrice) ], }) }

export function deepPerAsset( tx: Transaction, orderDeepPrice: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::deep_price::deep_per_asset`, arguments: [ obj(tx, orderDeepPrice) ], }) }

export interface NewOrderDeepPriceArgs { bool: boolean | TransactionArgument; u64: bigint | TransactionArgument }

export function newOrderDeepPrice( tx: Transaction, args: NewOrderDeepPriceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::deep_price::new_order_deep_price`, arguments: [ pure(tx, args.bool, `bool`), pure(tx, args.u64, `u64`) ], }) }

export interface GetOrderDeepPriceArgs { deepPrice: TransactionObjectInput; bool: boolean | TransactionArgument }

export function getOrderDeepPrice( tx: Transaction, args: GetOrderDeepPriceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::deep_price::get_order_deep_price`, arguments: [ obj(tx, args.deepPrice), pure(tx, args.bool, `bool`) ], }) }

export interface DeepQuantityArgs { orderDeepPrice: TransactionObjectInput; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument }

export function deepQuantity( tx: Transaction, args: DeepQuantityArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::deep_price::deep_quantity`, arguments: [ obj(tx, args.orderDeepPrice), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`) ], }) }

export interface DeepQuantityU128Args { orderDeepPrice: TransactionObjectInput; u1281: bigint | TransactionArgument; u1282: bigint | TransactionArgument }

export function deepQuantityU128( tx: Transaction, args: DeepQuantityU128Args ) { return tx.moveCall({ target: `${PUBLISHED_AT}::deep_price::deep_quantity_u128`, arguments: [ obj(tx, args.orderDeepPrice), pure(tx, args.u1281, `u128`), pure(tx, args.u1282, `u128`) ], }) }

export interface AddPricePointArgs { deepPrice: TransactionObjectInput; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument; bool: boolean | TransactionArgument }

export function addPricePoint( tx: Transaction, args: AddPricePointArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::deep_price::add_price_point`, arguments: [ obj(tx, args.deepPrice), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`), pure(tx, args.bool, `bool`) ], }) }

export interface EmitDeepPriceAddedArgs { u641: bigint | TransactionArgument; u642: bigint | TransactionArgument; bool: boolean | TransactionArgument; id1: string | TransactionArgument; id2: string | TransactionArgument }

export function emitDeepPriceAdded( tx: Transaction, args: EmitDeepPriceAddedArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::deep_price::emit_deep_price_added`, arguments: [ pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`), pure(tx, args.bool, `bool`), pure(tx, args.id1, `${ID.$typeName}`), pure(tx, args.id2, `${ID.$typeName}`) ], }) }

export interface CalculateOrderDeepPriceArgs { deepPrice: TransactionObjectInput; bool: boolean | TransactionArgument }

export function calculateOrderDeepPrice( tx: Transaction, args: CalculateOrderDeepPriceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::deep_price::calculate_order_deep_price`, arguments: [ obj(tx, args.deepPrice), pure(tx, args.bool, `bool`) ], }) }

export interface LastInsertTimestampArgs { deepPrice: TransactionObjectInput; bool: boolean | TransactionArgument }

export function lastInsertTimestamp( tx: Transaction, args: LastInsertTimestampArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::deep_price::last_insert_timestamp`, arguments: [ obj(tx, args.deepPrice), pure(tx, args.bool, `bool`) ], }) }
