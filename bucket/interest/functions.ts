import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function newInterestTable( tx: Transaction, clock: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::interest::new_interest_table`, arguments: [ obj(tx, clock) ], }) }

export function newBottleInterestIndex( tx: Transaction, u256: bigint | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::interest::new_bottle_interest_index`, arguments: [ pure(tx, u256, `u256`) ], }) }

export interface SetInterestRateArgs { interestTable: TransactionObjectInput; u256: bigint | TransactionArgument; u64: bigint | TransactionArgument; clock: TransactionObjectInput }

export function setInterestRate( tx: Transaction, args: SetInterestRateArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::interest::set_interest_rate`, arguments: [ obj(tx, args.interestTable), pure(tx, args.u256, `u256`), pure(tx, args.u64, `u64`), obj(tx, args.clock) ], }) }

export function collectInterests( tx: Transaction, interestTable: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::interest::collect_interests`, arguments: [ obj(tx, interestTable) ], }) }

export interface UpdateBottleInterestIndexArgs { bottleInterestIndex: TransactionObjectInput; u256: bigint | TransactionArgument }

export function updateBottleInterestIndex( tx: Transaction, args: UpdateBottleInterestIndexArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::interest::update_bottle_interest_index`, arguments: [ obj(tx, args.bottleInterestIndex), pure(tx, args.u256, `u256`) ], }) }

export interface AccrueActiveInterestsArgs { interestTable: TransactionObjectInput; u64: bigint | TransactionArgument; clock: TransactionObjectInput }

export function accrueActiveInterests( tx: Transaction, args: AccrueActiveInterestsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::interest::accrue_active_interests`, arguments: [ obj(tx, args.interestTable), pure(tx, args.u64, `u64`), obj(tx, args.clock) ], }) }

export interface CalculateInterestIndexArgs { interestTable: TransactionObjectInput; clock: TransactionObjectInput }

export function calculateInterestIndex( tx: Transaction, args: CalculateInterestIndexArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::interest::calculate_interest_index`, arguments: [ obj(tx, args.interestTable), obj(tx, args.clock) ], }) }

export function getInterestTableInfo( tx: Transaction, interestTable: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::interest::get_interest_table_info`, arguments: [ obj(tx, interestTable) ], }) }

export function getBottleInterestIndex( tx: Transaction, bottleInterestIndex: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::interest::get_bottle_interest_index`, arguments: [ obj(tx, bottleInterestIndex) ], }) }

export function getInterestRate( tx: Transaction, interestTable: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::interest::get_interest_rate`, arguments: [ obj(tx, interestTable) ], }) }

export function getActiveInterestIndex( tx: Transaction, interestTable: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::interest::get_active_interest_index`, arguments: [ obj(tx, interestTable) ], }) }

export function getLastActiveIndexUpdate( tx: Transaction, interestTable: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::interest::get_last_active_index_update`, arguments: [ obj(tx, interestTable) ], }) }

export function getInterestPayable( tx: Transaction, interestTable: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::interest::get_interest_payable`, arguments: [ obj(tx, interestTable) ], }) }
