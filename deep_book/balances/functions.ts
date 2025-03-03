import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface NewArgs { u641: bigint | TransactionArgument; u642: bigint | TransactionArgument; u643: bigint | TransactionArgument }

export function new_( tx: Transaction, args: NewArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::balances::new`, arguments: [ pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`), pure(tx, args.u643, `u64`) ], }) }

export function empty( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::balances::empty`, arguments: [ ], }) }

export function reset( tx: Transaction, balances: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::balances::reset`, arguments: [ obj(tx, balances) ], }) }

export interface AddBalancesArgs { balances1: TransactionObjectInput; balances2: TransactionObjectInput }

export function addBalances( tx: Transaction, args: AddBalancesArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::balances::add_balances`, arguments: [ obj(tx, args.balances1), obj(tx, args.balances2) ], }) }

export interface AddBaseArgs { balances: TransactionObjectInput; u64: bigint | TransactionArgument }

export function addBase( tx: Transaction, args: AddBaseArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::balances::add_base`, arguments: [ obj(tx, args.balances), pure(tx, args.u64, `u64`) ], }) }

export interface AddQuoteArgs { balances: TransactionObjectInput; u64: bigint | TransactionArgument }

export function addQuote( tx: Transaction, args: AddQuoteArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::balances::add_quote`, arguments: [ obj(tx, args.balances), pure(tx, args.u64, `u64`) ], }) }

export interface AddDeepArgs { balances: TransactionObjectInput; u64: bigint | TransactionArgument }

export function addDeep( tx: Transaction, args: AddDeepArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::balances::add_deep`, arguments: [ obj(tx, args.balances), pure(tx, args.u64, `u64`) ], }) }

export function base( tx: Transaction, balances: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::balances::base`, arguments: [ obj(tx, balances) ], }) }

export function quote( tx: Transaction, balances: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::balances::quote`, arguments: [ obj(tx, balances) ], }) }

export function deep( tx: Transaction, balances: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::balances::deep`, arguments: [ obj(tx, balances) ], }) }
