import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Option} from "../../std/option/structs";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function new_( tx: Transaction, bottleTable: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::new`, arguments: [ obj(tx, bottleTable) ], }) }

export interface InsertArgs { bottleTable: TransactionObjectInput; address: string | TransactionArgument; bottle: TransactionObjectInput; option: (string | TransactionArgument | TransactionArgument | null) }

export function insert( tx: Transaction, args: InsertArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::insert`, arguments: [ obj(tx, args.bottleTable), pure(tx, args.address, `address`), obj(tx, args.bottle), pure(tx, args.option, `${Option.$typeName}<address>`) ], }) }

export function popFront( tx: Transaction, bottleTable: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::pop_front`, arguments: [ obj(tx, bottleTable) ], }) }

export function newTable( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::new_table`, arguments: [ ], }) }

export interface AddInterestIndexToBottleArgs { bottle: TransactionObjectInput; u256: bigint | TransactionArgument }

export function addInterestIndexToBottle( tx: Transaction, args: AddInterestIndexToBottleArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::add_interest_index_to_bottle`, arguments: [ obj(tx, args.bottle), pure(tx, args.u256, `u256`) ], }) }

export interface RecordBorrowArgs { bottle: TransactionObjectInput; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument; u643: bigint | TransactionArgument }

export function recordBorrow( tx: Transaction, args: RecordBorrowArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::record_borrow`, arguments: [ obj(tx, args.bottle), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`), pure(tx, args.u643, `u64`) ], }) }

export interface RecordTopUpArgs { bottle: TransactionObjectInput; u64: bigint | TransactionArgument }

export function recordTopUp( tx: Transaction, args: RecordTopUpArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::record_top_up`, arguments: [ obj(tx, args.bottle), pure(tx, args.u64, `u64`) ], }) }

export interface RecordRepayArgs { bottle: TransactionObjectInput; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument; bool: boolean | TransactionArgument }

export function recordRepay( tx: Transaction, args: RecordRepayArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::record_repay`, arguments: [ obj(tx, args.bottle), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`), pure(tx, args.bool, `bool`) ], }) }

export interface RecordWithdrawArgs { bottle: TransactionObjectInput; u64: bigint | TransactionArgument }

export function recordWithdraw( tx: Transaction, args: RecordWithdrawArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::record_withdraw`, arguments: [ obj(tx, args.bottle), pure(tx, args.u64, `u64`) ], }) }

export interface ComputeBuckValueToCollateralArgs { u641: bigint | TransactionArgument; u8: number | TransactionArgument; u642: bigint | TransactionArgument; u643: bigint | TransactionArgument }

export function computeBuckValueToCollateral( tx: Transaction, args: ComputeBuckValueToCollateralArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::compute_buck_value_to_collateral`, arguments: [ pure(tx, args.u641, `u64`), pure(tx, args.u8, `u8`), pure(tx, args.u642, `u64`), pure(tx, args.u643, `u64`) ], }) }

export interface RecordRepayCappedArgs { bottle: TransactionObjectInput; u641: bigint | TransactionArgument; bucketOracle: TransactionObjectInput; clock: TransactionObjectInput; u642: bigint | TransactionArgument; u8: number | TransactionArgument }

export function recordRepayCapped( tx: Transaction, typeArg: string, args: RecordRepayCappedArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::record_repay_capped`, typeArguments: [typeArg], arguments: [ obj(tx, args.bottle), pure(tx, args.u641, `u64`), obj(tx, args.bucketOracle), obj(tx, args.clock), pure(tx, args.u642, `u64`), pure(tx, args.u8, `u8`) ], }) }

export interface RecordRedeemArgs { bottle: TransactionObjectInput; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument }

export function recordRedeem( tx: Transaction, args: RecordRedeemArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::record_redeem`, arguments: [ obj(tx, args.bottle), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`) ], }) }

export function destroySurplusBottle( tx: Transaction, bottle: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::destroy_surplus_bottle`, arguments: [ obj(tx, bottle) ], }) }

export interface RemoveBottleStakeArgs { bottleTable: TransactionObjectInput; address: string | TransactionArgument }

export function removeBottleStake( tx: Transaction, args: RemoveBottleStakeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::remove_bottle_stake`, arguments: [ obj(tx, args.bottleTable), pure(tx, args.address, `address`) ], }) }

export interface DestroyBottleArgs { bottleTable: TransactionObjectInput; address: string | TransactionArgument }

export function destroyBottle( tx: Transaction, args: DestroyBottleArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::destroy_bottle`, arguments: [ obj(tx, args.bottleTable), pure(tx, args.address, `address`) ], }) }

export function getTableLength( tx: Transaction, bottleTable: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::get_table_length`, arguments: [ obj(tx, bottleTable) ], }) }

export interface BottleExistsArgs { bottleTable: TransactionObjectInput; address: string | TransactionArgument }

export function bottleExists( tx: Transaction, args: BottleExistsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::bottle_exists`, arguments: [ obj(tx, args.bottleTable), pure(tx, args.address, `address`) ], }) }

export interface BorrowBottleArgs { bottleTable: TransactionObjectInput; address: string | TransactionArgument }

export function borrowBottle( tx: Transaction, args: BorrowBottleArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::borrow_bottle`, arguments: [ obj(tx, args.bottleTable), pure(tx, args.address, `address`) ], }) }

export interface BorrowBottleMutArgs { bottleTable: TransactionObjectInput; address: string | TransactionArgument }

export function borrowBottleMut( tx: Transaction, args: BorrowBottleMutArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::borrow_bottle_mut`, arguments: [ obj(tx, args.bottleTable), pure(tx, args.address, `address`) ], }) }

export function borrowInterestIndex( tx: Transaction, bottle: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::borrow_interest_index`, arguments: [ obj(tx, bottle) ], }) }

export function borrowInterestIndexMut( tx: Transaction, bottle: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::borrow_interest_index_mut`, arguments: [ obj(tx, bottle) ], }) }

export interface RemoveBottleArgs { bottleTable: TransactionObjectInput; address: string | TransactionArgument }

export function removeBottle( tx: Transaction, args: RemoveBottleArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::remove_bottle`, arguments: [ obj(tx, args.bottleTable), pure(tx, args.address, `address`) ], }) }

export function getLowestCrDebtor( tx: Transaction, bottleTable: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::get_lowest_cr_debtor`, arguments: [ obj(tx, bottleTable) ], }) }

export interface GetBottleInfoArgs { bottleTable: TransactionObjectInput; bottle: TransactionObjectInput }

export function getBottleInfo( tx: Transaction, args: GetBottleInfoArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::get_bottle_info`, arguments: [ obj(tx, args.bottleTable), obj(tx, args.bottle) ], }) }

export interface GetBottleInfoByDebtorArgs { bottleTable: TransactionObjectInput; address: string | TransactionArgument }

export function getBottleInfoByDebtor( tx: Transaction, args: GetBottleInfoByDebtorArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::get_bottle_info_by_debtor`, arguments: [ obj(tx, args.bottleTable), pure(tx, args.address, `address`) ], }) }

export interface GetBottleRawInfoByDebatorArgs { bottleTable: TransactionObjectInput; address: string | TransactionArgument }

export function getBottleRawInfoByDebator( tx: Transaction, args: GetBottleRawInfoByDebatorArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::get_bottle_raw_info_by_debator`, arguments: [ obj(tx, args.bottleTable), pure(tx, args.address, `address`) ], }) }

export function getBottleRawInfo( tx: Transaction, bottle: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::get_bottle_raw_info`, arguments: [ obj(tx, bottle) ], }) }

export interface GetBottleInfoWithInterestArgs { bottleTable: TransactionObjectInput; bottle: TransactionObjectInput; interestTable: TransactionObjectInput; clock: TransactionObjectInput }

export function getBottleInfoWithInterest( tx: Transaction, args: GetBottleInfoWithInterestArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::get_bottle_info_with_interest`, arguments: [ obj(tx, args.bottleTable), obj(tx, args.bottle), obj(tx, args.interestTable), obj(tx, args.clock) ], }) }

export interface GetBottleInfoWithInterestByDebtorArgs { bottleTable: TransactionObjectInput; address: string | TransactionArgument; interestTable: TransactionObjectInput; clock: TransactionObjectInput }

export function getBottleInfoWithInterestByDebtor( tx: Transaction, args: GetBottleInfoWithInterestByDebtorArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::get_bottle_info_with_interest_by_debtor`, arguments: [ obj(tx, args.bottleTable), pure(tx, args.address, `address`), obj(tx, args.interestTable), obj(tx, args.clock) ], }) }

export interface GetDebtAmountWithInterestArgs { bottle: TransactionObjectInput; interestTable: TransactionObjectInput; u64: bigint | TransactionArgument; clock: TransactionObjectInput }

export function getDebtAmountWithInterest( tx: Transaction, args: GetDebtAmountWithInterestArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::get_debt_amount_with_interest`, arguments: [ obj(tx, args.bottle), obj(tx, args.interestTable), pure(tx, args.u64, `u64`), obj(tx, args.clock) ], }) }

export interface GetPendingCollArgs { bottle: TransactionObjectInput; bottleTable: TransactionObjectInput }

export function getPendingColl( tx: Transaction, args: GetPendingCollArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::get_pending_coll`, arguments: [ obj(tx, args.bottle), obj(tx, args.bottleTable) ], }) }

export interface GetPendingDebtArgs { bottle: TransactionObjectInput; bottleTable: TransactionObjectInput }

export function getPendingDebt( tx: Transaction, args: GetPendingDebtArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::get_pending_debt`, arguments: [ obj(tx, args.bottle), obj(tx, args.bottleTable) ], }) }

export function borrowTable( tx: Transaction, bottleTable: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::borrow_table`, arguments: [ obj(tx, bottleTable) ], }) }

export interface GetBottleInfoAfterUpdateArgs { bottleTable: TransactionObjectInput; address: string | TransactionArgument }

export function getBottleInfoAfterUpdate( tx: Transaction, args: GetBottleInfoAfterUpdateArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::get_bottle_info_after_update`, arguments: [ obj(tx, args.bottleTable), pure(tx, args.address, `address`) ], }) }

export interface UpdateSnapshotArgs { bottleTable: TransactionObjectInput; u64: bigint | TransactionArgument }

export function updateSnapshot( tx: Transaction, args: UpdateSnapshotArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::update_snapshot`, arguments: [ obj(tx, args.bottleTable), pure(tx, args.u64, `u64`) ], }) }

export interface UpdateBottleDebtAndInterestIndexArgs { bottle: TransactionObjectInput; u64: bigint | TransactionArgument; u256: bigint | TransactionArgument }

export function updateBottleDebtAndInterestIndex( tx: Transaction, args: UpdateBottleDebtAndInterestIndexArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::update_bottle_debt_and_interest_index`, arguments: [ obj(tx, args.bottle), pure(tx, args.u64, `u64`), pure(tx, args.u256, `u256`) ], }) }

export interface UpdateStakeAndTotalStakeArgs { bottleTable: TransactionObjectInput; bottle: TransactionObjectInput }

export function updateStakeAndTotalStake( tx: Transaction, args: UpdateStakeAndTotalStakeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::update_stake_and_total_stake`, arguments: [ obj(tx, args.bottleTable), obj(tx, args.bottle) ], }) }

export interface UpdateStakeAndTotalStakeByDebtorArgs { bottleTable: TransactionObjectInput; address: string | TransactionArgument }

export function updateStakeAndTotalStakeByDebtor( tx: Transaction, args: UpdateStakeAndTotalStakeByDebtorArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::update_stake_and_total_stake_by_debtor`, arguments: [ obj(tx, args.bottleTable), pure(tx, args.address, `address`) ], }) }

export interface ComputeNewStakeArgs { bottleTable: TransactionObjectInput; u64: bigint | TransactionArgument }

export function computeNewStake( tx: Transaction, args: ComputeNewStakeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::compute_new_stake`, arguments: [ obj(tx, args.bottleTable), pure(tx, args.u64, `u64`) ], }) }

export interface RecordRedistributionArgs { bottleTable: TransactionObjectInput; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument; address: string | TransactionArgument }

export function recordRedistribution( tx: Transaction, args: RecordRedistributionArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::record_redistribution`, arguments: [ obj(tx, args.bottleTable), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`), pure(tx, args.address, `address`) ], }) }

export interface InsertBottleArgs { bottleTable: TransactionObjectInput; interestTable: TransactionObjectInput; address: string | TransactionArgument; bottle: TransactionObjectInput; option: (string | TransactionArgument | TransactionArgument | null); clock: TransactionObjectInput }

export function insertBottle( tx: Transaction, args: InsertBottleArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::insert_bottle`, arguments: [ obj(tx, args.bottleTable), obj(tx, args.interestTable), pure(tx, args.address, `address`), obj(tx, args.bottle), pure(tx, args.option, `${Option.$typeName}<address>`), obj(tx, args.clock) ], }) }

export interface FindUpwardAndInsertWithInterestArgs { bottleTable: TransactionObjectInput; interestTable: TransactionObjectInput; address: string | TransactionArgument; bottle: TransactionObjectInput; option: (string | TransactionArgument | TransactionArgument | null); clock: TransactionObjectInput }

export function findUpwardAndInsertWithInterest( tx: Transaction, args: FindUpwardAndInsertWithInterestArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::find_upward_and_insert_with_interest`, arguments: [ obj(tx, args.bottleTable), obj(tx, args.interestTable), pure(tx, args.address, `address`), obj(tx, args.bottle), pure(tx, args.option, `${Option.$typeName}<address>`), obj(tx, args.clock) ], }) }

export interface FindUpwardAndInsertArgs { bottleTable: TransactionObjectInput; address: string | TransactionArgument; bottle: TransactionObjectInput; option: (string | TransactionArgument | TransactionArgument | null) }

export function findUpwardAndInsert( tx: Transaction, args: FindUpwardAndInsertArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::find_upward_and_insert`, arguments: [ obj(tx, args.bottleTable), pure(tx, args.address, `address`), obj(tx, args.bottle), pure(tx, args.option, `${Option.$typeName}<address>`) ], }) }

export interface FindDownwardAndInsertArgs { bottleTable: TransactionObjectInput; address: string | TransactionArgument; bottle: TransactionObjectInput; option: (string | TransactionArgument | TransactionArgument | null) }

export function findDownwardAndInsert( tx: Transaction, args: FindDownwardAndInsertArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::find_downward_and_insert`, arguments: [ obj(tx, args.bottleTable), pure(tx, args.address, `address`), obj(tx, args.bottle), pure(tx, args.option, `${Option.$typeName}<address>`) ], }) }

export interface FindDownwardAndInsertWithInterestArgs { bottleTable: TransactionObjectInput; interestTable: TransactionObjectInput; address: string | TransactionArgument; bottle: TransactionObjectInput; option: (string | TransactionArgument | TransactionArgument | null); clock: TransactionObjectInput }

export function findDownwardAndInsertWithInterest( tx: Transaction, args: FindDownwardAndInsertWithInterestArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::find_downward_and_insert_with_interest`, arguments: [ obj(tx, args.bottleTable), obj(tx, args.interestTable), pure(tx, args.address, `address`), obj(tx, args.bottle), pure(tx, args.option, `${Option.$typeName}<address>`), obj(tx, args.clock) ], }) }

export interface CrGreaterArgs { bottleTable: TransactionObjectInput; bottle1: TransactionObjectInput; bottle2: TransactionObjectInput }

export function crGreater( tx: Transaction, args: CrGreaterArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::cr_greater`, arguments: [ obj(tx, args.bottleTable), obj(tx, args.bottle1), obj(tx, args.bottle2) ], }) }

export interface CrGreaterWithInterestArgs { bottleTable: TransactionObjectInput; interestTable: TransactionObjectInput; bottle1: TransactionObjectInput; bottle2: TransactionObjectInput; clock: TransactionObjectInput }

export function crGreaterWithInterest( tx: Transaction, args: CrGreaterWithInterestArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::cr_greater_with_interest`, arguments: [ obj(tx, args.bottleTable), obj(tx, args.interestTable), obj(tx, args.bottle1), obj(tx, args.bottle2), obj(tx, args.clock) ], }) }

export interface CrLessOrEqualArgs { bottleTable: TransactionObjectInput; bottle1: TransactionObjectInput; bottle2: TransactionObjectInput }

export function crLessOrEqual( tx: Transaction, args: CrLessOrEqualArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::cr_less_or_equal`, arguments: [ obj(tx, args.bottleTable), obj(tx, args.bottle1), obj(tx, args.bottle2) ], }) }

export interface CrLessOrEqualWithInterestArgs { bottleTable: TransactionObjectInput; interestTable: TransactionObjectInput; bottle1: TransactionObjectInput; bottle2: TransactionObjectInput; clock: TransactionObjectInput }

export function crLessOrEqualWithInterest( tx: Transaction, args: CrLessOrEqualWithInterestArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::cr_less_or_equal_with_interest`, arguments: [ obj(tx, args.bottleTable), obj(tx, args.interestTable), obj(tx, args.bottle1), obj(tx, args.bottle2), obj(tx, args.clock) ], }) }

export interface ReInsertArgs { bottleTable: TransactionObjectInput; address: string | TransactionArgument }

export function reInsert( tx: Transaction, args: ReInsertArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::re_insert`, arguments: [ obj(tx, args.bottleTable), pure(tx, args.address, `address`) ], }) }

export interface ReInsertBottleArgs { bottleTable: TransactionObjectInput; interestTable: TransactionObjectInput; address: string | TransactionArgument; clock: TransactionObjectInput }

export function reInsertBottle( tx: Transaction, args: ReInsertBottleArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::re_insert_bottle`, arguments: [ obj(tx, args.bottleTable), obj(tx, args.interestTable), pure(tx, args.address, `address`), obj(tx, args.clock) ], }) }

export function isInterestIndexExists( tx: Transaction, bottle: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bottle::is_interest_index_exists`, arguments: [ obj(tx, bottle) ], }) }
