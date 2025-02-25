import {PUBLISHED_AT} from "..";
import {obj, option, pure, vector} from "../../_framework/util";
import {PriceInfo} from "./structs";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface NewArgs { u641: bigint | TransactionArgument; u642: bigint | TransactionArgument }

export function new_( tx: Transaction, args: NewArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::price_aggregator::new`, arguments: [ pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`) ], }) }

export function extract( tx: Transaction, priceInfo: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::price_aggregator::extract`, arguments: [ obj(tx, priceInfo) ], }) }

export interface PushPriceArgs { vecPriceInfo: Array<TransactionObjectInput> | TransactionArgument; option: (TransactionObjectInput | TransactionArgument | null) }

export function pushPrice( tx: Transaction, args: PushPriceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::price_aggregator::push_price`, arguments: [ vector(tx, `${PriceInfo.$typeName}`, args.vecPriceInfo), option(tx, `${PriceInfo.$typeName}`, args.option) ], }) }

export interface AggregatePriceArgs { clock: TransactionObjectInput; vecPriceInfo: Array<TransactionObjectInput> | TransactionArgument; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument }

export function aggregatePrice( tx: Transaction, args: AggregatePriceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::price_aggregator::aggregate_price`, arguments: [ obj(tx, args.clock), vector(tx, `${PriceInfo.$typeName}`, args.vecPriceInfo), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`) ], }) }

export interface ProcessPricesArgs { vecU64: Array<bigint | TransactionArgument> | TransactionArgument; u64: bigint | TransactionArgument }

export function processPrices( tx: Transaction, args: ProcessPricesArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::price_aggregator::process_prices`, arguments: [ pure(tx, args.vecU64, `vector<u64>`), pure(tx, args.u64, `u64`) ], }) }
