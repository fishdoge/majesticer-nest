import {PUBLISHED_AT} from "..";
import {Transaction} from "@mysten/sui/transactions";

export function feePrecision( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::fee_precision`, arguments: [ ], }) }

export function liquidationRebate( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::liquidation_rebate`, arguments: [ ], }) }

export function flashLoanFee( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::flash_loan_fee`, arguments: [ ], }) }

export function minuteDecayFactor( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::minute_decay_factor`, arguments: [ ], }) }

export function decayFactorPrecision( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::decay_factor_precision`, arguments: [ ], }) }

export function buckDecimal( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::buck_decimal`, arguments: [ ], }) }

export function decimalFactor( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::decimal_factor`, arguments: [ ], }) }

export function maxU64( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::max_u64`, arguments: [ ], }) }

export function pInitialValue( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::p_initial_value`, arguments: [ ], }) }

export function scaleFactor( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::scale_factor`, arguments: [ ], }) }

export function distributionPrecision( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::distribution_precision`, arguments: [ ], }) }

export function maxLockTime( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::max_lock_time`, arguments: [ ], }) }

export function minLockTime( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::min_lock_time`, arguments: [ ], }) }

export function minFee( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::min_fee`, arguments: [ ], }) }

export function maxFee( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::max_fee`, arguments: [ ], }) }

export function interestPrecision( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::interest_precision`, arguments: [ ], }) }

export function msInYear( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::ms_in_year`, arguments: [ ], }) }

export function liquidationFee( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::liquidation_fee`, arguments: [ ], }) }
