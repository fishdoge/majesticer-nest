import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface EmptyArgs { tradeParams: TransactionObjectInput; u64: bigint | TransactionArgument }

export function empty( tx: Transaction, args: EmptyArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::history::empty`, arguments: [ obj(tx, args.tradeParams), pure(tx, args.u64, `u64`) ], }) }

export interface UpdateArgs { history: TransactionObjectInput; tradeParams: TransactionObjectInput }

export function update( tx: Transaction, args: UpdateArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::history::update`, arguments: [ obj(tx, args.history), obj(tx, args.tradeParams) ], }) }

export interface ResetVolumesArgs { history: TransactionObjectInput; tradeParams: TransactionObjectInput }

export function resetVolumes( tx: Transaction, args: ResetVolumesArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::history::reset_volumes`, arguments: [ obj(tx, args.history), obj(tx, args.tradeParams) ], }) }

export interface CalculateRebateAmountArgs { history: TransactionObjectInput; u641: bigint | TransactionArgument; u128: bigint | TransactionArgument; u642: bigint | TransactionArgument }

export function calculateRebateAmount( tx: Transaction, args: CalculateRebateAmountArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::history::calculate_rebate_amount`, arguments: [ obj(tx, args.history), pure(tx, args.u641, `u64`), pure(tx, args.u128, `u128`), pure(tx, args.u642, `u64`) ], }) }

export function updateHistoricMedian( tx: Transaction, history: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::history::update_historic_median`, arguments: [ obj(tx, history) ], }) }

export interface AddVolumeArgs { history: TransactionObjectInput; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument }

export function addVolume( tx: Transaction, args: AddVolumeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::history::add_volume`, arguments: [ obj(tx, args.history), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`) ], }) }

export function balanceToBurn( tx: Transaction, history: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::history::balance_to_burn`, arguments: [ obj(tx, history) ], }) }

export function resetBalanceToBurn( tx: Transaction, history: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::history::reset_balance_to_burn`, arguments: [ obj(tx, history) ], }) }

export interface HistoricMakerFeeArgs { history: TransactionObjectInput; u64: bigint | TransactionArgument }

export function historicMakerFee( tx: Transaction, args: HistoricMakerFeeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::history::historic_maker_fee`, arguments: [ obj(tx, args.history), pure(tx, args.u64, `u64`) ], }) }

export interface AddTotalFeesCollectedArgs { history: TransactionObjectInput; balances: TransactionObjectInput }

export function addTotalFeesCollected( tx: Transaction, args: AddTotalFeesCollectedArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::history::add_total_fees_collected`, arguments: [ obj(tx, args.history), obj(tx, args.balances) ], }) }
