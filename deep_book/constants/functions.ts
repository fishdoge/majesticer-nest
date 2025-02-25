import {PUBLISHED_AT} from "..";
import {Transaction} from "@mysten/sui/transactions";

export function maxU64( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::max_u64`, arguments: [ ], }) }

export function currentVersion( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::current_version`, arguments: [ ], }) }

export function poolCreationFee( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::pool_creation_fee`, arguments: [ ], }) }

export function floatScaling( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::float_scaling`, arguments: [ ], }) }

export function floatScalingU128( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::float_scaling_u128`, arguments: [ ], }) }

export function maxU128( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::max_u128`, arguments: [ ], }) }

export function noRestriction( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::no_restriction`, arguments: [ ], }) }

export function immediateOrCancel( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::immediate_or_cancel`, arguments: [ ], }) }

export function fillOrKill( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::fill_or_kill`, arguments: [ ], }) }

export function postOnly( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::post_only`, arguments: [ ], }) }

export function maxRestriction( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::max_restriction`, arguments: [ ], }) }

export function live( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::live`, arguments: [ ], }) }

export function partiallyFilled( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::partially_filled`, arguments: [ ], }) }

export function filled( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::filled`, arguments: [ ], }) }

export function canceled( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::canceled`, arguments: [ ], }) }

export function expired( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::expired`, arguments: [ ], }) }

export function selfMatchingAllowed( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::self_matching_allowed`, arguments: [ ], }) }

export function cancelTaker( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::cancel_taker`, arguments: [ ], }) }

export function cancelMaker( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::cancel_maker`, arguments: [ ], }) }

export function minPrice( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::min_price`, arguments: [ ], }) }

export function maxPrice( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::max_price`, arguments: [ ], }) }

export function phaseOutEpochs( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::phase_out_epochs`, arguments: [ ], }) }

export function defaultStakeRequired( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::default_stake_required`, arguments: [ ], }) }

export function half( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::half`, arguments: [ ], }) }

export function feeIsDeep( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::fee_is_deep`, arguments: [ ], }) }

export function deepUnit( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::deep_unit`, arguments: [ ], }) }

export function maxFills( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::max_fills`, arguments: [ ], }) }

export function maxOpenOrders( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::max_open_orders`, arguments: [ ], }) }

export function maxSliceSize( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::max_slice_size`, arguments: [ ], }) }

export function maxFanOut( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::constants::max_fan_out`, arguments: [ ], }) }
