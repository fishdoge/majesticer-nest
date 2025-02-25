import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {String} from "../../std/ascii/structs";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function new_( tx: Transaction, typeArg: string, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::well::new`, typeArguments: [typeArg], arguments: [ ], }) }

export function init( tx: Transaction, well: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::well::init`, arguments: [ obj(tx, well) ], }) }

export interface StakeArgs { clock: TransactionObjectInput; well: TransactionObjectInput; balance: TransactionObjectInput; u64: bigint | TransactionArgument }

export function stake( tx: Transaction, typeArg: string, args: StakeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::well::stake`, typeArguments: [typeArg], arguments: [ obj(tx, args.clock), obj(tx, args.well), obj(tx, args.balance), pure(tx, args.u64, `u64`) ], }) }

export interface ClaimArgs { well: TransactionObjectInput; stakedBkt: TransactionObjectInput }

export function claim( tx: Transaction, typeArg: string, args: ClaimArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::well::claim`, typeArguments: [typeArg], arguments: [ obj(tx, args.well), obj(tx, args.stakedBkt) ], }) }

export interface UnstakeArgs { clock: TransactionObjectInput; well: TransactionObjectInput; stakedBkt: TransactionObjectInput }

export function unstake( tx: Transaction, typeArg: string, args: UnstakeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::well::unstake`, typeArguments: [typeArg], arguments: [ obj(tx, args.clock), obj(tx, args.well), obj(tx, args.stakedBkt) ], }) }

export interface CollectFeeArgs { well: TransactionObjectInput; balance: TransactionObjectInput }

export function collectFee( tx: Transaction, typeArg: string, args: CollectFeeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::well::collect_fee`, typeArguments: [typeArg], arguments: [ obj(tx, args.well), obj(tx, args.balance) ], }) }

export interface CollectFeeFromArgs { well: TransactionObjectInput; balance: TransactionObjectInput; string: string | TransactionArgument }

export function collectFeeFrom( tx: Transaction, typeArg: string, args: CollectFeeFromArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::well::collect_fee_from`, typeArguments: [typeArg], arguments: [ obj(tx, args.well), obj(tx, args.balance), pure(tx, args.string, `${String.$typeName}`) ], }) }

export interface AirdropArgs { well: TransactionObjectInput; balance: TransactionObjectInput }

export function airdrop( tx: Transaction, typeArg: string, args: AirdropArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::well::airdrop`, typeArguments: [typeArg], arguments: [ obj(tx, args.well), obj(tx, args.balance) ], }) }

export interface ForceUnstakeArgs { clock: TransactionObjectInput; well: TransactionObjectInput; bktTreasury: TransactionObjectInput; stakedBkt: TransactionObjectInput }

export function forceUnstake( tx: Transaction, typeArg: string, args: ForceUnstakeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::well::force_unstake`, typeArguments: [typeArg], arguments: [ obj(tx, args.clock), obj(tx, args.well), obj(tx, args.bktTreasury), obj(tx, args.stakedBkt) ], }) }

export function getWellPoolBalance( tx: Transaction, typeArg: string, well: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::well::get_well_pool_balance`, typeArguments: [typeArg], arguments: [ obj(tx, well) ], }) }

export function getWellStakedBalance( tx: Transaction, typeArg: string, well: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::well::get_well_staked_balance`, typeArguments: [typeArg], arguments: [ obj(tx, well) ], }) }

export function getWellTotalWeight( tx: Transaction, typeArg: string, well: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::well::get_well_total_weight`, typeArguments: [typeArg], arguments: [ obj(tx, well) ], }) }

export function getWellReserveBalance( tx: Transaction, typeArg: string, well: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::well::get_well_reserve_balance`, typeArguments: [typeArg], arguments: [ obj(tx, well) ], }) }

export function getTokenStakeAmount( tx: Transaction, typeArg: string, stakedBkt: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::well::get_token_stake_amount`, typeArguments: [typeArg], arguments: [ obj(tx, stakedBkt) ], }) }

export function getTokenStakeWeight( tx: Transaction, typeArg: string, stakedBkt: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::well::get_token_stake_weight`, typeArguments: [typeArg], arguments: [ obj(tx, stakedBkt) ], }) }

export function getTokenLockUntil( tx: Transaction, typeArg: string, stakedBkt: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::well::get_token_lock_until`, typeArguments: [typeArg], arguments: [ obj(tx, stakedBkt) ], }) }

export interface GetTokenPenaltyAmountArgs { stakedBkt: TransactionObjectInput; u64: bigint | TransactionArgument }

export function getTokenPenaltyAmount( tx: Transaction, typeArg: string, args: GetTokenPenaltyAmountArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::well::get_token_penalty_amount`, typeArguments: [typeArg], arguments: [ obj(tx, args.stakedBkt), pure(tx, args.u64, `u64`) ], }) }

export interface GetRewardAmountArgs { well: TransactionObjectInput; stakedBkt: TransactionObjectInput }

export function getRewardAmount( tx: Transaction, typeArg: string, args: GetRewardAmountArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::well::get_reward_amount`, typeArguments: [typeArg], arguments: [ obj(tx, args.well), obj(tx, args.stakedBkt) ], }) }

export interface WithdrawReserveArgs { bktAdminCap: TransactionObjectInput; well: TransactionObjectInput }

export function withdrawReserve( tx: Transaction, typeArg: string, args: WithdrawReserveArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::well::withdraw_reserve`, typeArguments: [typeArg], arguments: [ obj(tx, args.bktAdminCap), obj(tx, args.well) ], }) }

export interface ComputeWeightArgs { u641: bigint | TransactionArgument; u642: bigint | TransactionArgument }

export function computeWeight( tx: Transaction, args: ComputeWeightArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::well::compute_weight`, arguments: [ pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`) ], }) }
