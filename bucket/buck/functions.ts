import {PUBLISHED_AT} from "..";
import {GenericArg, generic, obj, pure} from "../../_framework/util";
import {Option} from "../../std/option/structs";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface BorrowArgs { bucketProtocol: TransactionObjectInput; bucketOracle: TransactionObjectInput; clock: TransactionObjectInput; balance: TransactionObjectInput; u64: bigint | TransactionArgument; option: (string | TransactionArgument | TransactionArgument | null) }

export function borrow( tx: Transaction, typeArg: string, args: BorrowArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::borrow`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucketProtocol), obj(tx, args.bucketOracle), obj(tx, args.clock), obj(tx, args.balance), pure(tx, args.u64, `u64`), pure(tx, args.option, `${Option.$typeName}<address>`) ], }) }

export function init( tx: Transaction, buck: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::init`, arguments: [ obj(tx, buck) ], }) }

export interface SetInterestRateArgs { adminCap: TransactionObjectInput; bucketProtocol: TransactionObjectInput; u256: bigint | TransactionArgument; clock: TransactionObjectInput }

export function setInterestRate( tx: Transaction, typeArg: string, args: SetInterestRateArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::set_interest_rate`, typeArguments: [typeArg], arguments: [ obj(tx, args.adminCap), obj(tx, args.bucketProtocol), pure(tx, args.u256, `u256`), obj(tx, args.clock) ], }) }

export function collectInterests( tx: Transaction, typeArg: string, bucketProtocol: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::collect_interests`, typeArguments: [typeArg], arguments: [ obj(tx, bucketProtocol) ], }) }

export interface DestroyPipeArgs { adminCap: TransactionObjectInput; bucketProtocol: TransactionObjectInput }

export function destroyPipe( tx: Transaction, typeArgs: [string, string], args: DestroyPipeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::destroy_pipe`, typeArguments: typeArgs, arguments: [ obj(tx, args.adminCap), obj(tx, args.bucketProtocol) ], }) }

export interface OutputArgs { bucketProtocol: TransactionObjectInput; u64: bigint | TransactionArgument }

export function output( tx: Transaction, typeArgs: [string, string], args: OutputArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::output`, typeArguments: typeArgs, arguments: [ obj(tx, args.bucketProtocol), pure(tx, args.u64, `u64`) ], }) }

export interface InputArgs { bucketProtocol: TransactionObjectInput; inputCarrier: TransactionObjectInput }

export function input( tx: Transaction, typeArgs: [string, string], args: InputArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::input`, typeArguments: typeArgs, arguments: [ obj(tx, args.bucketProtocol), obj(tx, args.inputCarrier) ], }) }

export interface WithdrawArgs { bucketProtocol: TransactionObjectInput; bucketOracle: TransactionObjectInput; clock: TransactionObjectInput; u64: bigint | TransactionArgument; option: (string | TransactionArgument | TransactionArgument | null) }

export function withdraw( tx: Transaction, typeArg: string, args: WithdrawArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::withdraw`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucketProtocol), obj(tx, args.bucketOracle), obj(tx, args.clock), pure(tx, args.u64, `u64`), pure(tx, args.option, `${Option.$typeName}<address>`) ], }) }

export interface ReleaseBktArgs { adminCap: TransactionObjectInput; bucketProtocol: TransactionObjectInput; bktTreasury: TransactionObjectInput; u64: bigint | TransactionArgument }

export function releaseBkt( tx: Transaction, typeArg: string, args: ReleaseBktArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::release_bkt`, typeArguments: [typeArg], arguments: [ obj(tx, args.adminCap), obj(tx, args.bucketProtocol), obj(tx, args.bktTreasury), pure(tx, args.u64, `u64`) ], }) }

export function packageVersion( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::package_version`, arguments: [ ], }) }

export interface GetBottleInfoByDebtorArgs { bucketProtocol: TransactionObjectInput; address: string | TransactionArgument }

export function getBottleInfoByDebtor( tx: Transaction, typeArg: string, args: GetBottleInfoByDebtorArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::get_bottle_info_by_debtor`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucketProtocol), pure(tx, args.address, `address`) ], }) }

export interface GetBottleInfoWithInterestByDebtorArgs { bucketProtocol: TransactionObjectInput; address: string | TransactionArgument; clock: TransactionObjectInput }

export function getBottleInfoWithInterestByDebtor( tx: Transaction, typeArg: string, args: GetBottleInfoWithInterestByDebtorArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::get_bottle_info_with_interest_by_debtor`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucketProtocol), pure(tx, args.address, `address`), obj(tx, args.clock) ], }) }

export interface AddPendingRecordToBucketArgs { adminCap: TransactionObjectInput; bucketProtocol: TransactionObjectInput }

export function addPendingRecordToBucket( tx: Transaction, typeArg: string, args: AddPendingRecordToBucketArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::add_pending_record_to_bucket`, typeArguments: [typeArg], arguments: [ obj(tx, args.adminCap), obj(tx, args.bucketProtocol) ], }) }

export interface AddInterestTableToBucketArgs { adminCap: TransactionObjectInput; bucketProtocol: TransactionObjectInput; clock: TransactionObjectInput }

export function addInterestTableToBucket( tx: Transaction, typeArg: string, args: AddInterestTableToBucketArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::add_interest_table_to_bucket`, typeArguments: [typeArg], arguments: [ obj(tx, args.adminCap), obj(tx, args.bucketProtocol), obj(tx, args.clock) ], }) }

export interface IsLiquidatableArgs { bucketProtocol: TransactionObjectInput; bucketOracle: TransactionObjectInput; clock: TransactionObjectInput; address: string | TransactionArgument }

export function isLiquidatable( tx: Transaction, typeArg: string, args: IsLiquidatableArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::is_liquidatable`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucketProtocol), obj(tx, args.bucketOracle), obj(tx, args.clock), pure(tx, args.address, `address`) ], }) }

export function withdrawSurplusCollateral( tx: Transaction, typeArg: string, bucketProtocol: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::withdraw_surplus_collateral`, typeArguments: [typeArg], arguments: [ obj(tx, bucketProtocol) ], }) }

export interface UpdateMaxMintAmountArgs { adminCap: TransactionObjectInput; bucketProtocol: TransactionObjectInput; option: (bigint | TransactionArgument | TransactionArgument | null) }

export function updateMaxMintAmount( tx: Transaction, typeArg: string, args: UpdateMaxMintAmountArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::update_max_mint_amount`, typeArguments: [typeArg], arguments: [ obj(tx, args.adminCap), obj(tx, args.bucketProtocol), pure(tx, args.option, `${Option.$typeName}<u64>`) ], }) }

export interface UpdateLiquidationConfigArgs { adminCap: TransactionObjectInput; bucketProtocol: TransactionObjectInput; bucketOracle: TransactionObjectInput; clock: TransactionObjectInput; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument }

export function updateLiquidationConfig( tx: Transaction, typeArg: string, args: UpdateLiquidationConfigArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::update_liquidation_config`, typeArguments: [typeArg], arguments: [ obj(tx, args.adminCap), obj(tx, args.bucketProtocol), obj(tx, args.bucketOracle), obj(tx, args.clock), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`) ], }) }

export interface AdjustPendingRecordArgs { adminCap: TransactionObjectInput; bucketProtocol: TransactionObjectInput }

export function adjustPendingRecord( tx: Transaction, typeArg: string, args: AdjustPendingRecordArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::adjust_pending_record`, typeArguments: [typeArg], arguments: [ obj(tx, args.adminCap), obj(tx, args.bucketProtocol) ], }) }

export function newProtocol( tx: Transaction, buck: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::new_protocol`, arguments: [ obj(tx, buck) ], }) }

export interface TopUpArgs { bucketProtocol: TransactionObjectInput; balance: TransactionObjectInput; address: string | TransactionArgument; option: (string | TransactionArgument | TransactionArgument | null) }

export function topUp( tx: Transaction, typeArg: string, args: TopUpArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::top_up`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucketProtocol), obj(tx, args.balance), pure(tx, args.address, `address`), pure(tx, args.option, `${Option.$typeName}<address>`) ], }) }

export interface TopUpCollArgs { bucketProtocol: TransactionObjectInput; balance: TransactionObjectInput; address: string | TransactionArgument; option: (string | TransactionArgument | TransactionArgument | null); clock: TransactionObjectInput }

export function topUpColl( tx: Transaction, typeArg: string, args: TopUpCollArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::top_up_coll`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucketProtocol), obj(tx, args.balance), pure(tx, args.address, `address`), pure(tx, args.option, `${Option.$typeName}<address>`), obj(tx, args.clock) ], }) }

export interface RepayArgs { bucketProtocol: TransactionObjectInput; balance: TransactionObjectInput }

export function repay( tx: Transaction, typeArg: string, args: RepayArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::repay`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucketProtocol), obj(tx, args.balance) ], }) }

export interface RepayDebtArgs { bucketProtocol: TransactionObjectInput; balance: TransactionObjectInput; clock: TransactionObjectInput }

export function repayDebt( tx: Transaction, typeArg: string, args: RepayDebtArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::repay_debt`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucketProtocol), obj(tx, args.balance), obj(tx, args.clock) ], }) }

export interface RedeemArgs { bucketProtocol: TransactionObjectInput; bucketOracle: TransactionObjectInput; clock: TransactionObjectInput; balance: TransactionObjectInput; option: (string | TransactionArgument | TransactionArgument | null) }

export function redeem( tx: Transaction, typeArg: string, args: RedeemArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::redeem`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucketProtocol), obj(tx, args.bucketOracle), obj(tx, args.clock), obj(tx, args.balance), pure(tx, args.option, `${Option.$typeName}<address>`) ], }) }

export interface LiquidateUnderNormalModeArgs { bucketProtocol: TransactionObjectInput; bucketOracle: TransactionObjectInput; clock: TransactionObjectInput; address: string | TransactionArgument }

export function liquidateUnderNormalMode( tx: Transaction, typeArg: string, args: LiquidateUnderNormalModeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::liquidate_under_normal_mode`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucketProtocol), obj(tx, args.bucketOracle), obj(tx, args.clock), pure(tx, args.address, `address`) ], }) }

export interface LiquidateUnderRecoveryModeArgs { bucketProtocol: TransactionObjectInput; bucketOracle: TransactionObjectInput; clock: TransactionObjectInput; address: string | TransactionArgument }

export function liquidateUnderRecoveryMode( tx: Transaction, typeArg: string, args: LiquidateUnderRecoveryModeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::liquidate_under_recovery_mode`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucketProtocol), obj(tx, args.bucketOracle), obj(tx, args.clock), pure(tx, args.address, `address`) ], }) }

export interface NormallyLiquidateArgs { bucketProtocol: TransactionObjectInput; bucketOracle: TransactionObjectInput; clock: TransactionObjectInput; address: string | TransactionArgument; option: (bigint | TransactionArgument | TransactionArgument | null) }

export function normallyLiquidate( tx: Transaction, typeArg: string, args: NormallyLiquidateArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::normally_liquidate`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucketProtocol), obj(tx, args.bucketOracle), obj(tx, args.clock), pure(tx, args.address, `address`), pure(tx, args.option, `${Option.$typeName}<u64>`) ], }) }

export interface FlashBorrowArgs { bucketProtocol: TransactionObjectInput; u64: bigint | TransactionArgument }

export function flashBorrow( tx: Transaction, typeArg: string, args: FlashBorrowArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::flash_borrow`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucketProtocol), pure(tx, args.u64, `u64`) ], }) }

export interface FlashRepayArgs { bucketProtocol: TransactionObjectInput; balance: TransactionObjectInput; flashReceipt: TransactionObjectInput }

export function flashRepay( tx: Transaction, typeArg: string, args: FlashRepayArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::flash_repay`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucketProtocol), obj(tx, args.balance), obj(tx, args.flashReceipt) ], }) }

export interface FlashBorrowBuckArgs { bucketProtocol: TransactionObjectInput; u64: bigint | TransactionArgument }

export function flashBorrowBuck( tx: Transaction, typeArg: string, args: FlashBorrowBuckArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::flash_borrow_buck`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucketProtocol), pure(tx, args.u64, `u64`) ], }) }

export interface FlashRepayBuckArgs { bucketProtocol: TransactionObjectInput; balance: TransactionObjectInput; flashReceipt: TransactionObjectInput }

export function flashRepayBuck( tx: Transaction, typeArg: string, args: FlashRepayBuckArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::flash_repay_buck`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucketProtocol), obj(tx, args.balance), obj(tx, args.flashReceipt) ], }) }

export interface TankWithdrawArgs { bucketProtocol: TransactionObjectInput; bucketOracle: TransactionObjectInput; clock: TransactionObjectInput; bktTreasury: TransactionObjectInput; contributorToken: TransactionObjectInput }

export function tankWithdraw( tx: Transaction, typeArg: string, args: TankWithdrawArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::tank_withdraw`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucketProtocol), obj(tx, args.bucketOracle), obj(tx, args.clock), obj(tx, args.bktTreasury), obj(tx, args.contributorToken) ], }) }

export interface CreateBucketArgs { adminCap: TransactionObjectInput; bucketProtocol: TransactionObjectInput; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument; u8: number | TransactionArgument; option: (bigint | TransactionArgument | TransactionArgument | null) }

export function createBucket( tx: Transaction, typeArg: string, args: CreateBucketArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::create_bucket`, typeArguments: [typeArg], arguments: [ obj(tx, args.adminCap), obj(tx, args.bucketProtocol), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`), pure(tx, args.u8, `u8`), pure(tx, args.option, `${Option.$typeName}<u64>`) ], }) }

export interface UpdateMinBottleSizeArgs { adminCap: TransactionObjectInput; bucketProtocol: TransactionObjectInput; u64: bigint | TransactionArgument }

export function updateMinBottleSize( tx: Transaction, args: UpdateMinBottleSizeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::update_min_bottle_size`, arguments: [ obj(tx, args.adminCap), obj(tx, args.bucketProtocol), pure(tx, args.u64, `u64`) ], }) }

export interface UpdateProtocolVersionArgs { adminCap: TransactionObjectInput; bucketProtocol: TransactionObjectInput; u64: bigint | TransactionArgument }

export function updateProtocolVersion( tx: Transaction, args: UpdateProtocolVersionArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::update_protocol_version`, arguments: [ obj(tx, args.adminCap), obj(tx, args.bucketProtocol), pure(tx, args.u64, `u64`) ], }) }

export function borrowBucket( tx: Transaction, typeArg: string, bucketProtocol: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::borrow_bucket`, typeArguments: [typeArg], arguments: [ obj(tx, bucketProtocol) ], }) }

export function borrowBucketMut( tx: Transaction, typeArg: string, bucketProtocol: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::borrow_bucket_mut`, typeArguments: [typeArg], arguments: [ obj(tx, bucketProtocol) ], }) }

export function borrowWell( tx: Transaction, typeArg: string, bucketProtocol: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::borrow_well`, typeArguments: [typeArg], arguments: [ obj(tx, bucketProtocol) ], }) }

export function borrowWellMut( tx: Transaction, typeArg: string, bucketProtocol: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::borrow_well_mut`, typeArguments: [typeArg], arguments: [ obj(tx, bucketProtocol) ], }) }

export function borrowTank( tx: Transaction, typeArg: string, bucketProtocol: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::borrow_tank`, typeArguments: [typeArg], arguments: [ obj(tx, bucketProtocol) ], }) }

export function borrowTankMut( tx: Transaction, typeArg: string, bucketProtocol: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::borrow_tank_mut`, typeArguments: [typeArg], arguments: [ obj(tx, bucketProtocol) ], }) }

export function getMinBottleSize( tx: Transaction, bucketProtocol: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::get_min_bottle_size`, arguments: [ obj(tx, bucketProtocol) ], }) }

export interface ComputeBaseRateFeeArgs { bucket: TransactionObjectInput; clock: TransactionObjectInput }

export function computeBaseRateFee( tx: Transaction, typeArg: string, args: ComputeBaseRateFeeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::compute_base_rate_fee`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucket), obj(tx, args.clock) ], }) }

export interface MintBuckArgs { bucketProtocol: TransactionObjectInput; u64: bigint | TransactionArgument }

export function mintBuck( tx: Transaction, typeArg: string, args: MintBuckArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::mint_buck`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucketProtocol), pure(tx, args.u64, `u64`) ], }) }

export interface BurnBuckArgs { bucketProtocol: TransactionObjectInput; balance: TransactionObjectInput }

export function burnBuck( tx: Transaction, typeArg: string, args: BurnBuckArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::burn_buck`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucketProtocol), obj(tx, args.balance) ], }) }

export interface CreateFlashMintConfigToArgs { adminCap: TransactionObjectInput; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument; address: string | TransactionArgument }

export function createFlashMintConfigTo( tx: Transaction, args: CreateFlashMintConfigToArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::create_flash_mint_config_to`, arguments: [ obj(tx, args.adminCap), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`), pure(tx, args.address, `address`) ], }) }

export interface ShareFlashMintConfigArgs { adminCap: TransactionObjectInput; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument }

export function shareFlashMintConfig( tx: Transaction, args: ShareFlashMintConfigArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::share_flash_mint_config`, arguments: [ obj(tx, args.adminCap), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`) ], }) }

export interface UpdateFlashMintConfigArgs { adminCap: TransactionObjectInput; flashMintConfig: TransactionObjectInput; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument }

export function updateFlashMintConfig( tx: Transaction, args: UpdateFlashMintConfigArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::update_flash_mint_config`, arguments: [ obj(tx, args.adminCap), obj(tx, args.flashMintConfig), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`) ], }) }

export interface FlashMintArgs { bucketProtocol: TransactionObjectInput; flashMintConfig: TransactionObjectInput; u64: bigint | TransactionArgument }

export function flashMint( tx: Transaction, args: FlashMintArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::flash_mint`, arguments: [ obj(tx, args.bucketProtocol), obj(tx, args.flashMintConfig), pure(tx, args.u64, `u64`) ], }) }

export interface FlashBurnArgs { bucketProtocol: TransactionObjectInput; flashMintConfig: TransactionObjectInput; balance: TransactionObjectInput; flashMintReceipt: TransactionObjectInput }

export function flashBurn( tx: Transaction, args: FlashBurnArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::flash_burn`, arguments: [ obj(tx, args.bucketProtocol), obj(tx, args.flashMintConfig), obj(tx, args.balance), obj(tx, args.flashMintReceipt) ], }) }

export interface CreateReservoirArgs { adminCap: TransactionObjectInput; bucketProtocol: TransactionObjectInput; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument; u643: bigint | TransactionArgument }

export function createReservoir( tx: Transaction, typeArg: string, args: CreateReservoirArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::create_reservoir`, typeArguments: [typeArg], arguments: [ obj(tx, args.adminCap), obj(tx, args.bucketProtocol), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`), pure(tx, args.u643, `u64`) ], }) }

export function borrowReservoir( tx: Transaction, typeArg: string, bucketProtocol: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::borrow_reservoir`, typeArguments: [typeArg], arguments: [ obj(tx, bucketProtocol) ], }) }

export function borrowReservoirMut( tx: Transaction, typeArg: string, bucketProtocol: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::borrow_reservoir_mut`, typeArguments: [typeArg], arguments: [ obj(tx, bucketProtocol) ], }) }

export interface UpdateReservoirFeeRateArgs { adminCap: TransactionObjectInput; bucketProtocol: TransactionObjectInput; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument }

export function updateReservoirFeeRate( tx: Transaction, typeArg: string, args: UpdateReservoirFeeRateArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::update_reservoir_fee_rate`, typeArguments: [typeArg], arguments: [ obj(tx, args.adminCap), obj(tx, args.bucketProtocol), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`) ], }) }

export interface ChargeReservoirArgs { bucketProtocol: TransactionObjectInput; balance: TransactionObjectInput }

export function chargeReservoir( tx: Transaction, typeArg: string, args: ChargeReservoirArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::charge_reservoir`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucketProtocol), obj(tx, args.balance) ], }) }

export interface DischargeReservoirArgs { bucketProtocol: TransactionObjectInput; balance: TransactionObjectInput }

export function dischargeReservoir( tx: Transaction, typeArg: string, args: DischargeReservoirArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::discharge_reservoir`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucketProtocol), obj(tx, args.balance) ], }) }

export interface ChargeReservoirWithoutFeeArgs { noFeePermission: TransactionObjectInput; bucketProtocol: TransactionObjectInput; balance: TransactionObjectInput }

export function chargeReservoirWithoutFee( tx: Transaction, typeArg: string, args: ChargeReservoirWithoutFeeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::charge_reservoir_without_fee`, typeArguments: [typeArg], arguments: [ obj(tx, args.noFeePermission), obj(tx, args.bucketProtocol), obj(tx, args.balance) ], }) }

export interface DischargeReservoirWithoutFeeArgs { noFeePermission: TransactionObjectInput; bucketProtocol: TransactionObjectInput; balance: TransactionObjectInput }

export function dischargeReservoirWithoutFee( tx: Transaction, typeArg: string, args: DischargeReservoirWithoutFeeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::discharge_reservoir_without_fee`, typeArguments: [typeArg], arguments: [ obj(tx, args.noFeePermission), obj(tx, args.bucketProtocol), obj(tx, args.balance) ], }) }

export interface CreateNoFeePermissionToArgs { adminCap: TransactionObjectInput; address: string | TransactionArgument }

export function createNoFeePermissionTo( tx: Transaction, args: CreateNoFeePermissionToArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::create_no_fee_permission_to`, arguments: [ obj(tx, args.adminCap), pure(tx, args.address, `address`) ], }) }

export interface SetReservoirPartnerArgs { adminCap: TransactionObjectInput; bucketProtocol: TransactionObjectInput; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument }

export function setReservoirPartner( tx: Transaction, typeArgs: [string, string], args: SetReservoirPartnerArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::set_reservoir_partner`, typeArguments: typeArgs, arguments: [ obj(tx, args.adminCap), obj(tx, args.bucketProtocol), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`) ], }) }

export interface ChargeReservoirByPartnerArgs { bucketProtocol: TransactionObjectInput; balance: TransactionObjectInput; t1: GenericArg }

export function chargeReservoirByPartner( tx: Transaction, typeArgs: [string, string], args: ChargeReservoirByPartnerArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::charge_reservoir_by_partner`, typeArguments: typeArgs, arguments: [ obj(tx, args.bucketProtocol), obj(tx, args.balance), generic(tx, `${typeArgs[1]}`, args.t1) ], }) }

export interface DischargeReservoirByPartnerArgs { bucketProtocol: TransactionObjectInput; balance: TransactionObjectInput; t1: GenericArg }

export function dischargeReservoirByPartner( tx: Transaction, typeArgs: [string, string], args: DischargeReservoirByPartnerArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::discharge_reservoir_by_partner`, typeArguments: typeArgs, arguments: [ obj(tx, args.bucketProtocol), obj(tx, args.balance), generic(tx, `${typeArgs[1]}`, args.t1) ], }) }

export interface ChargeReservoirInternalArgs { bucketProtocol: TransactionObjectInput; balance: TransactionObjectInput; u64: bigint | TransactionArgument }

export function chargeReservoirInternal( tx: Transaction, typeArg: string, args: ChargeReservoirInternalArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::charge_reservoir_internal`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucketProtocol), obj(tx, args.balance), pure(tx, args.u64, `u64`) ], }) }

export interface DischargeReservoirInternalArgs { bucketProtocol: TransactionObjectInput; balance: TransactionObjectInput; u64: bigint | TransactionArgument }

export function dischargeReservoirInternal( tx: Transaction, typeArg: string, args: DischargeReservoirInternalArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::discharge_reservoir_internal`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucketProtocol), obj(tx, args.balance), pure(tx, args.u64, `u64`) ], }) }

export interface CollectInterestsToFlaskArgs { bucketProtocol: TransactionObjectInput; flask: TransactionObjectInput }

export function collectInterestsToFlask( tx: Transaction, typeArg: string, args: CollectInterestsToFlaskArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::collect_interests_to_flask`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucketProtocol), obj(tx, args.flask) ], }) }

export interface MintSbuckArgs { bucketProtocol: TransactionObjectInput; flask: TransactionObjectInput; coin: TransactionObjectInput }

export function mintSbuck( tx: Transaction, args: MintSbuckArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::mint_sbuck`, arguments: [ obj(tx, args.bucketProtocol), obj(tx, args.flask), obj(tx, args.coin) ], }) }

export interface BurnSbuckArgs { bucketProtocol: TransactionObjectInput; flask: TransactionObjectInput; coin: TransactionObjectInput }

export function burnSbuck( tx: Transaction, args: BurnSbuckArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::burn_sbuck`, arguments: [ obj(tx, args.bucketProtocol), obj(tx, args.flask), obj(tx, args.coin) ], }) }

export interface SetSbuckRateArgs { adminCap: TransactionObjectInput; bucketProtocol: TransactionObjectInput; flask: TransactionObjectInput; clock: TransactionObjectInput; u64: bigint | TransactionArgument }

export function setSbuckRate( tx: Transaction, args: SetSbuckRateArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::set_sbuck_rate`, arguments: [ obj(tx, args.adminCap), obj(tx, args.bucketProtocol), obj(tx, args.flask), obj(tx, args.clock), pure(tx, args.u64, `u64`) ], }) }

export interface InterestAmountArgs { bucketProtocol: TransactionObjectInput; flask: TransactionObjectInput; clock: TransactionObjectInput }

export function interestAmount( tx: Transaction, args: InterestAmountArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::interest_amount`, arguments: [ obj(tx, args.bucketProtocol), obj(tx, args.flask), obj(tx, args.clock) ], }) }

export interface BuckToSbuckArgs { bucketProtocol: TransactionObjectInput; flask: TransactionObjectInput; clock: TransactionObjectInput; balance: TransactionObjectInput }

export function buckToSbuck( tx: Transaction, args: BuckToSbuckArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::buck_to_sbuck`, arguments: [ obj(tx, args.bucketProtocol), obj(tx, args.flask), obj(tx, args.clock), obj(tx, args.balance) ], }) }

export interface SbuckToBuckArgs { bucketProtocol: TransactionObjectInput; flask: TransactionObjectInput; clock: TransactionObjectInput; balance: TransactionObjectInput }

export function sbuckToBuck( tx: Transaction, args: SbuckToBuckArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::sbuck_to_buck`, arguments: [ obj(tx, args.bucketProtocol), obj(tx, args.flask), obj(tx, args.clock), obj(tx, args.balance) ], }) }

export interface CollectInterestArgs { bucketProtocol: TransactionObjectInput; flask: TransactionObjectInput; clock: TransactionObjectInput }

export function collectInterest( tx: Transaction, args: CollectInterestArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::collect_interest`, arguments: [ obj(tx, args.bucketProtocol), obj(tx, args.flask), obj(tx, args.clock) ], }) }

export function hasEmission( tx: Transaction, bucketProtocol: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::has_emission`, arguments: [ obj(tx, bucketProtocol) ], }) }

export function emission( tx: Transaction, bucketProtocol: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::emission`, arguments: [ obj(tx, bucketProtocol) ], }) }

export function emissionMut( tx: Transaction, bucketProtocol: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::emission_mut`, arguments: [ obj(tx, bucketProtocol) ], }) }

export interface CreateBucketWithInterestTableArgs { adminCap: TransactionObjectInput; bucketProtocol: TransactionObjectInput; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument; u8: number | TransactionArgument; option: (bigint | TransactionArgument | TransactionArgument | null); clock: TransactionObjectInput; u256: bigint | TransactionArgument }

export function createBucketWithInterestTable( tx: Transaction, typeArg: string, args: CreateBucketWithInterestTableArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::create_bucket_with_interest_table`, typeArguments: [typeArg], arguments: [ obj(tx, args.adminCap), obj(tx, args.bucketProtocol), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`), pure(tx, args.u8, `u8`), pure(tx, args.option, `${Option.$typeName}<u64>`), obj(tx, args.clock), pure(tx, args.u256, `u256`) ], }) }

export interface InitBottleCurrentInterestIndexArgs { adminCap: TransactionObjectInput; bucketProtocol: TransactionObjectInput; address: string | TransactionArgument }

export function initBottleCurrentInterestIndex( tx: Transaction, typeArg: string, args: InitBottleCurrentInterestIndexArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::init_bottle_current_interest_index`, typeArguments: [typeArg], arguments: [ obj(tx, args.adminCap), obj(tx, args.bucketProtocol), pure(tx, args.address, `address`) ], }) }

export interface InitBottleInterestIndexArgs { adminCap: TransactionObjectInput; bucketProtocol: TransactionObjectInput; address: string | TransactionArgument; u256: bigint | TransactionArgument }

export function initBottleInterestIndex( tx: Transaction, typeArg: string, args: InitBottleInterestIndexArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::init_bottle_interest_index`, typeArguments: [typeArg], arguments: [ obj(tx, args.adminCap), obj(tx, args.bucketProtocol), pure(tx, args.address, `address`), pure(tx, args.u256, `u256`) ], }) }

export interface BorrowWithStrapArgs { bucketProtocol: TransactionObjectInput; bucketOracle: TransactionObjectInput; bottleStrap: TransactionObjectInput; clock: TransactionObjectInput; balance: TransactionObjectInput; u64: bigint | TransactionArgument; option: (string | TransactionArgument | TransactionArgument | null) }

export function borrowWithStrap( tx: Transaction, typeArg: string, args: BorrowWithStrapArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::borrow_with_strap`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucketProtocol), obj(tx, args.bucketOracle), obj(tx, args.bottleStrap), obj(tx, args.clock), obj(tx, args.balance), pure(tx, args.u64, `u64`), pure(tx, args.option, `${Option.$typeName}<address>`) ], }) }

export interface WithdrawWithStrapArgs { bucketProtocol: TransactionObjectInput; bucketOracle: TransactionObjectInput; bottleStrap: TransactionObjectInput; clock: TransactionObjectInput; u64: bigint | TransactionArgument; option: (string | TransactionArgument | TransactionArgument | null) }

export function withdrawWithStrap( tx: Transaction, typeArg: string, args: WithdrawWithStrapArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::withdraw_with_strap`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucketProtocol), obj(tx, args.bucketOracle), obj(tx, args.bottleStrap), obj(tx, args.clock), pure(tx, args.u64, `u64`), pure(tx, args.option, `${Option.$typeName}<address>`) ], }) }

export interface RepayWithStrapArgs { bucketProtocol: TransactionObjectInput; bottleStrap: TransactionObjectInput; balance: TransactionObjectInput; clock: TransactionObjectInput }

export function repayWithStrap( tx: Transaction, typeArg: string, args: RepayWithStrapArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::repay_with_strap`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucketProtocol), obj(tx, args.bottleStrap), obj(tx, args.balance), obj(tx, args.clock) ], }) }

export interface WithdrawSurplusWithStrapArgs { bucketProtocol: TransactionObjectInput; bottleStrap: TransactionObjectInput }

export function withdrawSurplusWithStrap( tx: Transaction, typeArg: string, args: WithdrawSurplusWithStrapArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::withdraw_surplus_with_strap`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucketProtocol), obj(tx, args.bottleStrap) ], }) }

export interface NewStrapWithFeeRateToArgs { adminCap: TransactionObjectInput; u64: bigint | TransactionArgument; address: string | TransactionArgument }

export function newStrapWithFeeRateTo( tx: Transaction, typeArg: string, args: NewStrapWithFeeRateToArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::new_strap_with_fee_rate_to`, typeArguments: [typeArg], arguments: [ obj(tx, args.adminCap), pure(tx, args.u64, `u64`), pure(tx, args.address, `address`) ], }) }

export interface AddTestVersionArgs { adminCap: TransactionObjectInput; bucketProtocol: TransactionObjectInput; u64: bigint | TransactionArgument }

export function addTestVersion( tx: Transaction, args: AddTestVersionArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::add_test_version`, arguments: [ obj(tx, args.adminCap), obj(tx, args.bucketProtocol), pure(tx, args.u64, `u64`) ], }) }

export interface RemoveTestVersionArgs { adminCap: TransactionObjectInput; bucketProtocol: TransactionObjectInput }

export function removeTestVersion( tx: Transaction, args: RemoveTestVersionArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::remove_test_version`, arguments: [ obj(tx, args.adminCap), obj(tx, args.bucketProtocol) ], }) }

export function assertValidPackageVersion( tx: Transaction, bucketProtocol: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::assert_valid_package_version`, arguments: [ obj(tx, bucketProtocol) ], }) }

export interface CreatePipeArgs { adminCap: TransactionObjectInput; bucketProtocol: TransactionObjectInput }

export function createPipe( tx: Transaction, typeArgs: [string, string], args: CreatePipeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::create_pipe`, typeArguments: typeArgs, arguments: [ obj(tx, args.adminCap), obj(tx, args.bucketProtocol) ], }) }

export function borrowPipe( tx: Transaction, typeArgs: [string, string], bucketProtocol: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::borrow_pipe`, typeArguments: typeArgs, arguments: [ obj(tx, bucketProtocol) ], }) }

export function borrowPipeMut( tx: Transaction, typeArgs: [string, string], bucketProtocol: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::borrow_pipe_mut`, typeArguments: typeArgs, arguments: [ obj(tx, bucketProtocol) ], }) }

export interface OutputBuckArgs { bucketProtocol: TransactionObjectInput; u64: bigint | TransactionArgument }

export function outputBuck( tx: Transaction, typeArg: string, args: OutputBuckArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::output_buck`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucketProtocol), pure(tx, args.u64, `u64`) ], }) }

export interface InputBuckArgs { bucketProtocol: TransactionObjectInput; inputCarrier: TransactionObjectInput }

export function inputBuck( tx: Transaction, typeArg: string, args: InputBuckArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::input_buck`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucketProtocol), obj(tx, args.inputCarrier) ], }) }

export function isBuck( tx: Transaction, typeArg: string, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck::is_buck`, typeArguments: [typeArg], arguments: [ ], }) }
