import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Option} from "../../std/option/structs";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface NewArgs { u641: bigint | TransactionArgument; u642: bigint | TransactionArgument; u8: number | TransactionArgument; option: (bigint | TransactionArgument | TransactionArgument | null) }

export function new_( tx: Transaction, typeArg: string, args: NewArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::new`, typeArguments: [typeArg], arguments: [ pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`), pure(tx, args.u8, `u8`), pure(tx, args.option, `${Option.$typeName}<u64>`) ], }) }

export interface OutputArgs { bucket: TransactionObjectInput; u64: bigint | TransactionArgument }

export function output( tx: Transaction, typeArg: string, args: OutputArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::output`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucket), pure(tx, args.u64, `u64`) ], }) }

export interface InputArgs { bucket: TransactionObjectInput; balance: TransactionObjectInput }

export function input( tx: Transaction, typeArg: string, args: InputArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::input`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucket), obj(tx, args.balance) ], }) }

export interface HandleFlashBorrowArgs { bucket: TransactionObjectInput; u64: bigint | TransactionArgument }

export function handleFlashBorrow( tx: Transaction, typeArg: string, args: HandleFlashBorrowArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::handle_flash_borrow`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucket), pure(tx, args.u64, `u64`) ], }) }

export interface HandleFlashRepayArgs { bucket: TransactionObjectInput; balance: TransactionObjectInput; flashReceipt: TransactionObjectInput }

export function handleFlashRepay( tx: Transaction, typeArg: string, args: HandleFlashRepayArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::handle_flash_repay`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucket), obj(tx, args.balance), obj(tx, args.flashReceipt) ], }) }

export function isNotLocked( tx: Transaction, typeArg: string, bucket: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::is_not_locked`, typeArguments: [typeArg], arguments: [ obj(tx, bucket) ], }) }

export function getTotalFlashLoanAmount( tx: Transaction, typeArg: string, bucket: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::get_total_flash_loan_amount`, typeArguments: [typeArg], arguments: [ obj(tx, bucket) ], }) }

export function getReceiptInfo( tx: Transaction, typeArg: string, flashReceipt: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::get_receipt_info`, typeArguments: [typeArg], arguments: [ obj(tx, flashReceipt) ], }) }

export interface AddInterestIndexToBottleArgs { bottle: TransactionObjectInput; u256: bigint | TransactionArgument }

export function addInterestIndexToBottle( tx: Transaction, args: AddInterestIndexToBottleArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::add_interest_index_to_bottle`, arguments: [ obj(tx, args.bottle), pure(tx, args.u256, `u256`) ], }) }

export interface ComputeBuckValueToCollateralArgs { u641: bigint | TransactionArgument; u8: number | TransactionArgument; u642: bigint | TransactionArgument; u643: bigint | TransactionArgument }

export function computeBuckValueToCollateral( tx: Transaction, args: ComputeBuckValueToCollateralArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::compute_buck_value_to_collateral`, arguments: [ pure(tx, args.u641, `u64`), pure(tx, args.u8, `u8`), pure(tx, args.u642, `u64`), pure(tx, args.u643, `u64`) ], }) }

export interface BottleExistsArgs { bucket: TransactionObjectInput; address: string | TransactionArgument }

export function bottleExists( tx: Transaction, typeArg: string, args: BottleExistsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::bottle_exists`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucket), pure(tx, args.address, `address`) ], }) }

export function getLowestCrDebtor( tx: Transaction, typeArg: string, bucket: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::get_lowest_cr_debtor`, typeArguments: [typeArg], arguments: [ obj(tx, bucket) ], }) }

export interface GetBottleInfoArgs { bucket: TransactionObjectInput; bottle: TransactionObjectInput }

export function getBottleInfo( tx: Transaction, typeArg: string, args: GetBottleInfoArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::get_bottle_info`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucket), obj(tx, args.bottle) ], }) }

export interface GetBottleInfoByDebtorArgs { bucket: TransactionObjectInput; address: string | TransactionArgument }

export function getBottleInfoByDebtor( tx: Transaction, typeArg: string, args: GetBottleInfoByDebtorArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::get_bottle_info_by_debtor`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucket), pure(tx, args.address, `address`) ], }) }

export interface GetBottleInfoWithInterestArgs { bucket: TransactionObjectInput; bottle: TransactionObjectInput; clock: TransactionObjectInput }

export function getBottleInfoWithInterest( tx: Transaction, typeArg: string, args: GetBottleInfoWithInterestArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::get_bottle_info_with_interest`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucket), obj(tx, args.bottle), obj(tx, args.clock) ], }) }

export interface GetBottleInfoWithInterestByDebtorArgs { bucket: TransactionObjectInput; address: string | TransactionArgument; clock: TransactionObjectInput }

export function getBottleInfoWithInterestByDebtor( tx: Transaction, typeArg: string, args: GetBottleInfoWithInterestByDebtorArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::get_bottle_info_with_interest_by_debtor`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucket), pure(tx, args.address, `address`), obj(tx, args.clock) ], }) }

export function updateSnapshot( tx: Transaction, typeArg: string, bucket: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::update_snapshot`, typeArguments: [typeArg], arguments: [ obj(tx, bucket) ], }) }

export function newPendingRecord( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::new_pending_record`, arguments: [ ], }) }

export function addPendingRecordToBucket( tx: Transaction, typeArg: string, bucket: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::add_pending_record_to_bucket`, typeArguments: [typeArg], arguments: [ obj(tx, bucket) ], }) }

export interface AddInterestTableToBucketArgs { bucket: TransactionObjectInput; clock: TransactionObjectInput }

export function addInterestTableToBucket( tx: Transaction, typeArg: string, args: AddInterestTableToBucketArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::add_interest_table_to_bucket`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucket), obj(tx, args.clock) ], }) }

export interface AddInterestIndexToBottleByDebtorArgs { bucket: TransactionObjectInput; address: string | TransactionArgument; u256: bigint | TransactionArgument }

export function addInterestIndexToBottleByDebtor( tx: Transaction, typeArg: string, args: AddInterestIndexToBottleByDebtorArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::add_interest_index_to_bottle_by_debtor`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucket), pure(tx, args.address, `address`), pure(tx, args.u256, `u256`) ], }) }

export function borrowInterestTable( tx: Transaction, typeArg: string, bucket: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::borrow_interest_table`, typeArguments: [typeArg], arguments: [ obj(tx, bucket) ], }) }

export function borrowInterestTableMut( tx: Transaction, typeArg: string, bucket: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::borrow_interest_table_mut`, typeArguments: [typeArg], arguments: [ obj(tx, bucket) ], }) }

export interface AccrueInterestsByDebtorArgs { bucket: TransactionObjectInput; address: string | TransactionArgument; clock: TransactionObjectInput }

export function accrueInterestsByDebtor( tx: Transaction, typeArg: string, args: AccrueInterestsByDebtorArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::accrue_interests_by_debtor`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucket), pure(tx, args.address, `address`), obj(tx, args.clock) ], }) }

export interface HandleBorrowArgs { bucket: TransactionObjectInput; bucketOracle: TransactionObjectInput; address: string | TransactionArgument; clock: TransactionObjectInput; balance: TransactionObjectInput; u641: bigint | TransactionArgument; option: (string | TransactionArgument | TransactionArgument | null); u642: bigint | TransactionArgument }

export function handleBorrow( tx: Transaction, typeArg: string, args: HandleBorrowArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::handle_borrow`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucket), obj(tx, args.bucketOracle), pure(tx, args.address, `address`), obj(tx, args.clock), obj(tx, args.balance), pure(tx, args.u641, `u64`), pure(tx, args.option, `${Option.$typeName}<address>`), pure(tx, args.u642, `u64`) ], }) }

export interface HandleTopUpArgs { bucket: TransactionObjectInput; balance: TransactionObjectInput; address: string | TransactionArgument; option: (string | TransactionArgument | TransactionArgument | null); clock: TransactionObjectInput }

export function handleTopUp( tx: Transaction, typeArg: string, args: HandleTopUpArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::handle_top_up`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucket), obj(tx, args.balance), pure(tx, args.address, `address`), pure(tx, args.option, `${Option.$typeName}<address>`), obj(tx, args.clock) ], }) }

export interface HandleWithdrawArgs { bucket: TransactionObjectInput; bucketOracle: TransactionObjectInput; address: string | TransactionArgument; clock: TransactionObjectInput; u64: bigint | TransactionArgument; option: (string | TransactionArgument | TransactionArgument | null) }

export function handleWithdraw( tx: Transaction, typeArg: string, args: HandleWithdrawArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::handle_withdraw`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucket), obj(tx, args.bucketOracle), pure(tx, args.address, `address`), obj(tx, args.clock), pure(tx, args.u64, `u64`), pure(tx, args.option, `${Option.$typeName}<address>`) ], }) }

export interface HandleRepayArgs { bucket: TransactionObjectInput; address: string | TransactionArgument; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument; bool: boolean | TransactionArgument; clock: TransactionObjectInput }

export function handleRepay( tx: Transaction, typeArg: string, args: HandleRepayArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::handle_repay`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucket), pure(tx, args.address, `address`), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`), pure(tx, args.bool, `bool`), obj(tx, args.clock) ], }) }

export interface HandleRepayCappedArgs { bucket: TransactionObjectInput; address: string | TransactionArgument; u64: bigint | TransactionArgument; bucketOracle: TransactionObjectInput; clock: TransactionObjectInput }

export function handleRepayCapped( tx: Transaction, typeArg: string, args: HandleRepayCappedArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::handle_repay_capped`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucket), pure(tx, args.address, `address`), pure(tx, args.u64, `u64`), obj(tx, args.bucketOracle), obj(tx, args.clock) ], }) }

export interface HandleRedeemArgs { bucket: TransactionObjectInput; bucketOracle: TransactionObjectInput; clock: TransactionObjectInput; u64: bigint | TransactionArgument; option: (string | TransactionArgument | TransactionArgument | null) }

export function handleRedeem( tx: Transaction, typeArg: string, args: HandleRedeemArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::handle_redeem`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucket), obj(tx, args.bucketOracle), obj(tx, args.clock), pure(tx, args.u64, `u64`), pure(tx, args.option, `${Option.$typeName}<address>`) ], }) }

export interface GetSurplusBottleInfoByDebtorArgs { bucket: TransactionObjectInput; address: string | TransactionArgument }

export function getSurplusBottleInfoByDebtor( tx: Transaction, typeArg: string, args: GetSurplusBottleInfoByDebtorArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::get_surplus_bottle_info_by_debtor`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucket), pure(tx, args.address, `address`) ], }) }

export interface IsHealthyBottleArgs { bucket: TransactionObjectInput; bucketOracle: TransactionObjectInput; clock: TransactionObjectInput; bottle: TransactionObjectInput }

export function isHealthyBottle( tx: Transaction, typeArg: string, args: IsHealthyBottleArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::is_healthy_bottle`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucket), obj(tx, args.bucketOracle), obj(tx, args.clock), obj(tx, args.bottle) ], }) }

export interface IsHealthyBottleByDebtorArgs { bucket: TransactionObjectInput; bucketOracle: TransactionObjectInput; clock: TransactionObjectInput; address: string | TransactionArgument }

export function isHealthyBottleByDebtor( tx: Transaction, typeArg: string, args: IsHealthyBottleByDebtorArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::is_healthy_bottle_by_debtor`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucket), obj(tx, args.bucketOracle), obj(tx, args.clock), pure(tx, args.address, `address`) ], }) }

export interface GetBucketTcrArgs { bucket: TransactionObjectInput; bucketOracle: TransactionObjectInput; clock: TransactionObjectInput }

export function getBucketTcr( tx: Transaction, typeArg: string, args: GetBucketTcrArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::get_bucket_tcr`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucket), obj(tx, args.bucketOracle), obj(tx, args.clock) ], }) }

export interface GetBottleIcrArgs { bucket: TransactionObjectInput; bucketOracle: TransactionObjectInput; clock: TransactionObjectInput; address: string | TransactionArgument }

export function getBottleIcr( tx: Transaction, typeArg: string, args: GetBottleIcrArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::get_bottle_icr`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucket), obj(tx, args.bucketOracle), obj(tx, args.clock), pure(tx, args.address, `address`) ], }) }

export function getBottleTableLength( tx: Transaction, typeArg: string, bucket: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::get_bottle_table_length`, typeArguments: [typeArg], arguments: [ obj(tx, bucket) ], }) }

export function getCollateralVaultBalance( tx: Transaction, typeArg: string, bucket: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::get_collateral_vault_balance`, typeArguments: [typeArg], arguments: [ obj(tx, bucket) ], }) }

export function getMintedBuckAmount( tx: Transaction, typeArg: string, bucket: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::get_minted_buck_amount`, typeArguments: [typeArg], arguments: [ obj(tx, bucket) ], }) }

export interface GetBucketDebtArgs { bucket: TransactionObjectInput; clock: TransactionObjectInput }

export function getBucketDebt( tx: Transaction, typeArg: string, args: GetBucketDebtArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::get_bucket_debt`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucket), obj(tx, args.clock) ], }) }

export function getBucketSize( tx: Transaction, typeArg: string, bucket: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::get_bucket_size`, typeArguments: [typeArg], arguments: [ obj(tx, bucket) ], }) }

export interface IsLiquidatableArgs { bucket: TransactionObjectInput; bucketOracle: TransactionObjectInput; clock: TransactionObjectInput; address: string | TransactionArgument }

export function isLiquidatable( tx: Transaction, typeArg: string, args: IsLiquidatableArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::is_liquidatable`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucket), obj(tx, args.bucketOracle), obj(tx, args.clock), pure(tx, args.address, `address`) ], }) }

export interface HasLiquidatableBottleArgs { bucket: TransactionObjectInput; bucketOracle: TransactionObjectInput; clock: TransactionObjectInput }

export function hasLiquidatableBottle( tx: Transaction, typeArg: string, args: HasLiquidatableBottleArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::has_liquidatable_bottle`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucket), obj(tx, args.bucketOracle), obj(tx, args.clock) ], }) }

export interface IsInRecoveryModeArgs { bucket: TransactionObjectInput; bucketOracle: TransactionObjectInput; clock: TransactionObjectInput }

export function isInRecoveryMode( tx: Transaction, typeArg: string, args: IsInRecoveryModeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::is_in_recovery_mode`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucket), obj(tx, args.bucketOracle), obj(tx, args.clock) ], }) }

export function isInterestTableExists( tx: Transaction, typeArg: string, bucket: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::is_interest_table_exists`, typeArguments: [typeArg], arguments: [ obj(tx, bucket) ], }) }

export function getMinimumCollateralRatio( tx: Transaction, typeArg: string, bucket: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::get_minimum_collateral_ratio`, typeArguments: [typeArg], arguments: [ obj(tx, bucket) ], }) }

export function getMaxMintAmount( tx: Transaction, typeArg: string, bucket: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::get_max_mint_amount`, typeArguments: [typeArg], arguments: [ obj(tx, bucket) ], }) }

export interface ComputeBaseRateArgs { bucket: TransactionObjectInput; u64: bigint | TransactionArgument }

export function computeBaseRate( tx: Transaction, typeArg: string, args: ComputeBaseRateArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::compute_base_rate`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucket), pure(tx, args.u64, `u64`) ], }) }

export interface ComputeCollateralValueToBuckArgs { u641: bigint | TransactionArgument; u8: number | TransactionArgument; u642: bigint | TransactionArgument; u643: bigint | TransactionArgument }

export function computeCollateralValueToBuck( tx: Transaction, args: ComputeCollateralValueToBuckArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::compute_collateral_value_to_buck`, arguments: [ pure(tx, args.u641, `u64`), pure(tx, args.u8, `u8`), pure(tx, args.u642, `u64`), pure(tx, args.u643, `u64`) ], }) }

export interface UpdateBaseRateFeeArgs { bucket: TransactionObjectInput; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument }

export function updateBaseRateFee( tx: Transaction, typeArg: string, args: UpdateBaseRateFeeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::update_base_rate_fee`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucket), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`) ], }) }

export interface WithdrawSurplusCollateralArgs { bucket: TransactionObjectInput; address: string | TransactionArgument }

export function withdrawSurplusCollateral( tx: Transaction, typeArg: string, args: WithdrawSurplusCollateralArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::withdraw_surplus_collateral`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucket), pure(tx, args.address, `address`) ], }) }

export interface UpdateMaxMintAmountArgs { bucket: TransactionObjectInput; option: (bigint | TransactionArgument | TransactionArgument | null) }

export function updateMaxMintAmount( tx: Transaction, typeArg: string, args: UpdateMaxMintAmountArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::update_max_mint_amount`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucket), pure(tx, args.option, `${Option.$typeName}<u64>`) ], }) }

export interface UpdateLiquidationConfigArgs { bucket: TransactionObjectInput; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument }

export function updateLiquidationConfig( tx: Transaction, typeArg: string, args: UpdateLiquidationConfigArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::update_liquidation_config`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucket), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`) ], }) }

export interface GetSurplusCollateralAmountArgs { bucket: TransactionObjectInput; address: string | TransactionArgument }

export function getSurplusCollateralAmount( tx: Transaction, typeArg: string, args: GetSurplusCollateralAmountArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::get_surplus_collateral_amount`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucket), pure(tx, args.address, `address`) ], }) }

export function getSurplusBottleTableSize( tx: Transaction, typeArg: string, bucket: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::get_surplus_bottle_table_size`, typeArguments: [typeArg], arguments: [ obj(tx, bucket) ], }) }

export function borrowBottleTable( tx: Transaction, typeArg: string, bucket: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::borrow_bottle_table`, typeArguments: [typeArg], arguments: [ obj(tx, bucket) ], }) }

export function borrowSurplusBottleTable( tx: Transaction, typeArg: string, bucket: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::borrow_surplus_bottle_table`, typeArguments: [typeArg], arguments: [ obj(tx, bucket) ], }) }

export function borrowPendingRecord( tx: Transaction, typeArg: string, bucket: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::borrow_pending_record`, typeArguments: [typeArg], arguments: [ obj(tx, bucket) ], }) }

export function borrowPendingRecordMut( tx: Transaction, typeArg: string, bucket: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::borrow_pending_record_mut`, typeArguments: [typeArg], arguments: [ obj(tx, bucket) ], }) }

export function getBucketPendingDebt( tx: Transaction, typeArg: string, bucket: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::get_bucket_pending_debt`, typeArguments: [typeArg], arguments: [ obj(tx, bucket) ], }) }

export function getBucketPendingCollateral( tx: Transaction, typeArg: string, bucket: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::get_bucket_pending_collateral`, typeArguments: [typeArg], arguments: [ obj(tx, bucket) ], }) }

export interface PrevDebtorArgs { bucket: TransactionObjectInput; address: string | TransactionArgument }

export function prevDebtor( tx: Transaction, typeArg: string, args: PrevDebtorArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::prev_debtor`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucket), pure(tx, args.address, `address`) ], }) }

export interface NextDebtorArgs { bucket: TransactionObjectInput; address: string | TransactionArgument }

export function nextDebtor( tx: Transaction, typeArg: string, args: NextDebtorArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::next_debtor`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucket), pure(tx, args.address, `address`) ], }) }

export interface ApplyPendingArgs { bucket: TransactionObjectInput; address: string | TransactionArgument }

export function applyPending( tx: Transaction, typeArg: string, args: ApplyPendingArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::apply_pending`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucket), pure(tx, args.address, `address`) ], }) }

export interface AdjustPendingRecordArgs { bucket: TransactionObjectInput; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument }

export function adjustPendingRecord( tx: Transaction, typeArg: string, args: AdjustPendingRecordArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::adjust_pending_record`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucket), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`) ], }) }

export interface DestroyEmptyStrapArgs { bucket: TransactionObjectInput; bottleStrap: TransactionObjectInput }

export function destroyEmptyStrap( tx: Transaction, typeArg: string, args: DestroyEmptyStrapArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::destroy_empty_strap`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucket), obj(tx, args.bottleStrap) ], }) }

export function getCollateralOutputVolume( tx: Transaction, typeArg: string, bucket: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::get_collateral_output_volume`, typeArguments: [typeArg], arguments: [ obj(tx, bucket) ], }) }

export function getTotalCollateralBalance( tx: Transaction, typeArg: string, bucket: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::get_total_collateral_balance`, typeArguments: [typeArg], arguments: [ obj(tx, bucket) ], }) }

export interface CheckInsertionPlaceArgs { bucket: TransactionObjectInput; address: string | TransactionArgument; option: (string | TransactionArgument | TransactionArgument | null) }

export function checkInsertionPlace( tx: Transaction, typeArg: string, args: CheckInsertionPlaceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket::check_insertion_place`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucket), pure(tx, args.address, `address`), pure(tx, args.option, `${Option.$typeName}<address>`) ], }) }
