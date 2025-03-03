import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function new_( tx: Transaction, typeArgs: [string, string], ) { return tx.moveCall({ target: `${PUBLISHED_AT}::tank::new`, typeArguments: typeArgs, arguments: [ ], }) }

export interface DepositArgs { tank: TransactionObjectInput; balance: TransactionObjectInput }

export function deposit( tx: Transaction, typeArgs: [string, string], args: DepositArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::tank::deposit`, typeArguments: typeArgs, arguments: [ obj(tx, args.tank), obj(tx, args.balance) ], }) }

export function init( tx: Transaction, tank: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::tank::init`, arguments: [ obj(tx, tank) ], }) }

export interface WithdrawArgs { tank: TransactionObjectInput; bktTreasury: TransactionObjectInput; contributorToken: TransactionObjectInput }

export function withdraw( tx: Transaction, typeArgs: [string, string], args: WithdrawArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::tank::withdraw`, typeArguments: typeArgs, arguments: [ obj(tx, args.tank), obj(tx, args.bktTreasury), obj(tx, args.contributorToken) ], }) }

export interface CollectBktArgs { tank: TransactionObjectInput; balance: TransactionObjectInput }

export function collectBkt( tx: Transaction, typeArgs: [string, string], args: CollectBktArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::tank::collect_bkt`, typeArguments: typeArgs, arguments: [ obj(tx, args.tank), obj(tx, args.balance) ], }) }

export interface ClaimArgs { tank: TransactionObjectInput; bktTreasury: TransactionObjectInput; contributorToken: TransactionObjectInput }

export function claim( tx: Transaction, typeArgs: [string, string], args: ClaimArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::tank::claim`, typeArguments: typeArgs, arguments: [ obj(tx, args.tank), obj(tx, args.bktTreasury), obj(tx, args.contributorToken) ], }) }

export function errDepositAndWithdrawInSameTxn( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::tank::err_deposit_and_withdraw_in_same_txn`, arguments: [ ], }) }

export function newTable( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::tank::new_table`, arguments: [ ], }) }

export interface AddTableArgs { table: TransactionObjectInput; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument }

export function addTable( tx: Transaction, args: AddTableArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::tank::add_table`, arguments: [ obj(tx, args.table), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`) ], }) }

export interface AbsorbArgs { tank: TransactionObjectInput; balance: TransactionObjectInput; u64: bigint | TransactionArgument }

export function absorb( tx: Transaction, typeArgs: [string, string], args: AbsorbArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::tank::absorb`, typeArguments: typeArgs, arguments: [ obj(tx, args.tank), obj(tx, args.balance), pure(tx, args.u64, `u64`) ], }) }

export interface ClaimBktArgs { tank: TransactionObjectInput; contributorToken: TransactionObjectInput }

export function claimBkt( tx: Transaction, typeArgs: [string, string], args: ClaimBktArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::tank::claim_bkt`, typeArguments: typeArgs, arguments: [ obj(tx, args.tank), obj(tx, args.contributorToken) ], }) }

export interface AirdropCollateralArgs { tank: TransactionObjectInput; balance: TransactionObjectInput }

export function airdropCollateral( tx: Transaction, typeArgs: [string, string], args: AirdropCollateralArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::tank::airdrop_collateral`, typeArguments: typeArgs, arguments: [ obj(tx, args.tank), obj(tx, args.balance) ], }) }

export interface AirdropBktArgs { tank: TransactionObjectInput; balance: TransactionObjectInput }

export function airdropBkt( tx: Transaction, typeArgs: [string, string], args: AirdropBktArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::tank::airdrop_bkt`, typeArguments: typeArgs, arguments: [ obj(tx, args.tank), obj(tx, args.balance) ], }) }

export function getReserveBalance( tx: Transaction, typeArgs: [string, string], tank: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::tank::get_reserve_balance`, typeArguments: typeArgs, arguments: [ obj(tx, tank) ], }) }

export function getBktPoolBalance( tx: Transaction, typeArgs: [string, string], tank: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::tank::get_bkt_pool_balance`, typeArguments: typeArgs, arguments: [ obj(tx, tank) ], }) }

export function getCollateralPoolBalance( tx: Transaction, typeArgs: [string, string], tank: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::tank::get_collateral_pool_balance`, typeArguments: typeArgs, arguments: [ obj(tx, tank) ], }) }

export interface GetBktRewardAmountArgs { tank: TransactionObjectInput; contributorToken: TransactionObjectInput }

export function getBktRewardAmount( tx: Transaction, typeArgs: [string, string], args: GetBktRewardAmountArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::tank::get_bkt_reward_amount`, typeArguments: typeArgs, arguments: [ obj(tx, args.tank), obj(tx, args.contributorToken) ], }) }

export interface GetCollateralRewardAmountArgs { tank: TransactionObjectInput; contributorToken: TransactionObjectInput }

export function getCollateralRewardAmount( tx: Transaction, typeArgs: [string, string], args: GetCollateralRewardAmountArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::tank::get_collateral_reward_amount`, typeArguments: typeArgs, arguments: [ obj(tx, args.tank), obj(tx, args.contributorToken) ], }) }

export interface GetTokenWeightArgs { tank: TransactionObjectInput; contributorToken: TransactionObjectInput }

export function getTokenWeight( tx: Transaction, typeArgs: [string, string], args: GetTokenWeightArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::tank::get_token_weight`, typeArguments: typeArgs, arguments: [ obj(tx, args.tank), obj(tx, args.contributorToken) ], }) }

export interface HandleFlashBorrowArgs { tank: TransactionObjectInput; u64: bigint | TransactionArgument }

export function handleFlashBorrow( tx: Transaction, typeArgs: [string, string], args: HandleFlashBorrowArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::tank::handle_flash_borrow`, typeArguments: typeArgs, arguments: [ obj(tx, args.tank), pure(tx, args.u64, `u64`) ], }) }

export interface HandleFlashRepayArgs { tank: TransactionObjectInput; balance: TransactionObjectInput; flashReceipt: TransactionObjectInput }

export function handleFlashRepay( tx: Transaction, typeArgs: [string, string], args: HandleFlashRepayArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::tank::handle_flash_repay`, typeArguments: typeArgs, arguments: [ obj(tx, args.tank), obj(tx, args.balance), obj(tx, args.flashReceipt) ], }) }

export function isNotLocked( tx: Transaction, typeArgs: [string, string], tank: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::tank::is_not_locked`, typeArguments: typeArgs, arguments: [ obj(tx, tank) ], }) }

export function getTotalFlashLoanAmount( tx: Transaction, typeArgs: [string, string], tank: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::tank::get_total_flash_loan_amount`, typeArguments: typeArgs, arguments: [ obj(tx, tank) ], }) }

export function getReceiptInfo( tx: Transaction, typeArgs: [string, string], flashReceipt: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::tank::get_receipt_info`, typeArguments: typeArgs, arguments: [ obj(tx, flashReceipt) ], }) }

export function getCurrentP( tx: Transaction, typeArgs: [string, string], tank: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::tank::get_current_p`, typeArguments: typeArgs, arguments: [ obj(tx, tank) ], }) }

export function getCurrentScale( tx: Transaction, typeArgs: [string, string], tank: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::tank::get_current_scale`, typeArguments: typeArgs, arguments: [ obj(tx, tank) ], }) }

export function getCurrentEpoch( tx: Transaction, typeArgs: [string, string], tank: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::tank::get_current_epoch`, typeArguments: typeArgs, arguments: [ obj(tx, tank) ], }) }

export function getTokenCtxEpoch( tx: Transaction, typeArgs: [string, string], contributorToken: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::tank::get_token_ctx_epoch`, typeArguments: typeArgs, arguments: [ obj(tx, contributorToken) ], }) }

export interface GetEpochScaleSumMapArgs { tank: TransactionObjectInput; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument }

export function getEpochScaleSumMap( tx: Transaction, typeArgs: [string, string], args: GetEpochScaleSumMapArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::tank::get_epoch_scale_sum_map`, typeArguments: typeArgs, arguments: [ obj(tx, args.tank), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`) ], }) }

export interface GetEpochScaleGainMapArgs { tank: TransactionObjectInput; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument }

export function getEpochScaleGainMap( tx: Transaction, typeArgs: [string, string], args: GetEpochScaleGainMapArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::tank::get_epoch_scale_gain_map`, typeArguments: typeArgs, arguments: [ obj(tx, args.tank), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`) ], }) }

export function getContributorTokenValue( tx: Transaction, typeArgs: [string, string], contributorToken: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::tank::get_contributor_token_value`, typeArguments: typeArgs, arguments: [ obj(tx, contributorToken) ], }) }
