import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface EmptyArgs { u641: bigint | TransactionArgument; u642: bigint | TransactionArgument; u643: bigint | TransactionArgument }

export function empty( tx: Transaction, args: EmptyArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::book::empty`, arguments: [ pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`), pure(tx, args.u643, `u64`) ], }) }

export function bids( tx: Transaction, book: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::book::bids`, arguments: [ obj(tx, book) ], }) }

export function asks( tx: Transaction, book: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::book::asks`, arguments: [ obj(tx, book) ], }) }

export function tickSize( tx: Transaction, book: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::book::tick_size`, arguments: [ obj(tx, book) ], }) }

export function lotSize( tx: Transaction, book: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::book::lot_size`, arguments: [ obj(tx, book) ], }) }

export function minSize( tx: Transaction, book: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::book::min_size`, arguments: [ obj(tx, book) ], }) }

export interface CreateOrderArgs { book: TransactionObjectInput; orderInfo: TransactionObjectInput; u64: bigint | TransactionArgument }

export function createOrder( tx: Transaction, args: CreateOrderArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::book::create_order`, arguments: [ obj(tx, args.book), obj(tx, args.orderInfo), pure(tx, args.u64, `u64`) ], }) }

export interface GetQuantityOutArgs { book: TransactionObjectInput; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument; u643: bigint | TransactionArgument; orderDeepPrice: TransactionObjectInput; u644: bigint | TransactionArgument; u645: bigint | TransactionArgument }

export function getQuantityOut( tx: Transaction, args: GetQuantityOutArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::book::get_quantity_out`, arguments: [ obj(tx, args.book), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`), pure(tx, args.u643, `u64`), obj(tx, args.orderDeepPrice), pure(tx, args.u644, `u64`), pure(tx, args.u645, `u64`) ], }) }

export interface CancelOrderArgs { book: TransactionObjectInput; u128: bigint | TransactionArgument }

export function cancelOrder( tx: Transaction, args: CancelOrderArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::book::cancel_order`, arguments: [ obj(tx, args.book), pure(tx, args.u128, `u128`) ], }) }

export interface ModifyOrderArgs { book: TransactionObjectInput; u128: bigint | TransactionArgument; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument }

export function modifyOrder( tx: Transaction, args: ModifyOrderArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::book::modify_order`, arguments: [ obj(tx, args.book), pure(tx, args.u128, `u128`), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`) ], }) }

export interface MidPriceArgs { book: TransactionObjectInput; u64: bigint | TransactionArgument }

export function midPrice( tx: Transaction, args: MidPriceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::book::mid_price`, arguments: [ obj(tx, args.book), pure(tx, args.u64, `u64`) ], }) }

export interface GetLevel2RangeAndTicksArgs { book: TransactionObjectInput; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument; u643: bigint | TransactionArgument; bool: boolean | TransactionArgument; u644: bigint | TransactionArgument }

export function getLevel2RangeAndTicks( tx: Transaction, args: GetLevel2RangeAndTicksArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::book::get_level2_range_and_ticks`, arguments: [ obj(tx, args.book), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`), pure(tx, args.u643, `u64`), pure(tx, args.bool, `bool`), pure(tx, args.u644, `u64`) ], }) }

export interface GetOrderArgs { book: TransactionObjectInput; u128: bigint | TransactionArgument }

export function getOrder( tx: Transaction, args: GetOrderArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::book::get_order`, arguments: [ obj(tx, args.book), pure(tx, args.u128, `u128`) ], }) }

export interface BookSideMutArgs { book: TransactionObjectInput; u128: bigint | TransactionArgument }

export function bookSideMut( tx: Transaction, args: BookSideMutArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::book::book_side_mut`, arguments: [ obj(tx, args.book), pure(tx, args.u128, `u128`) ], }) }

export interface BookSideArgs { book: TransactionObjectInput; u128: bigint | TransactionArgument }

export function bookSide( tx: Transaction, args: BookSideArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::book::book_side`, arguments: [ obj(tx, args.book), pure(tx, args.u128, `u128`) ], }) }

export interface MatchAgainstBookArgs { book: TransactionObjectInput; orderInfo: TransactionObjectInput; u64: bigint | TransactionArgument }

export function matchAgainstBook( tx: Transaction, args: MatchAgainstBookArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::book::match_against_book`, arguments: [ obj(tx, args.book), obj(tx, args.orderInfo), pure(tx, args.u64, `u64`) ], }) }

export interface GetOrderIdArgs { book: TransactionObjectInput; bool: boolean | TransactionArgument }

export function getOrderId( tx: Transaction, args: GetOrderIdArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::book::get_order_id`, arguments: [ obj(tx, args.book), pure(tx, args.bool, `bool`) ], }) }

export interface InjectLimitOrderArgs { book: TransactionObjectInput; orderInfo: TransactionObjectInput }

export function injectLimitOrder( tx: Transaction, args: InjectLimitOrderArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::book::inject_limit_order`, arguments: [ obj(tx, args.book), obj(tx, args.orderInfo) ], }) }
