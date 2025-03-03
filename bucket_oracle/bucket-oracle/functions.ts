import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Option} from "../../std/option/structs";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface GetPriceArgs { bucketOracle: TransactionObjectInput; clock: TransactionObjectInput }

export function getPrice( tx: Transaction, typeArg: string, args: GetPriceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket_oracle::get_price`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucketOracle), obj(tx, args.clock) ], }) }

export function init( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket_oracle::init`, arguments: [ ], }) }

export interface AddRuleArgs { adminCap: TransactionObjectInput; bucketOracle: TransactionObjectInput }

export function addRule( tx: Transaction, typeArgs: [string, string], args: AddRuleArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket_oracle::add_rule`, typeArguments: typeArgs, arguments: [ obj(tx, args.adminCap), obj(tx, args.bucketOracle) ], }) }

export interface RemoveRuleArgs { adminCap: TransactionObjectInput; bucketOracle: TransactionObjectInput }

export function removeRule( tx: Transaction, typeArgs: [string, string], args: RemoveRuleArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket_oracle::remove_rule`, typeArguments: typeArgs, arguments: [ obj(tx, args.adminCap), obj(tx, args.bucketOracle) ], }) }

export interface UpdateThresholdArgs { adminCap: TransactionObjectInput; bucketOracle: TransactionObjectInput; u64: bigint | TransactionArgument }

export function updateThreshold( tx: Transaction, typeArg: string, args: UpdateThresholdArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket_oracle::update_threshold`, typeArguments: [typeArg], arguments: [ obj(tx, args.adminCap), obj(tx, args.bucketOracle), pure(tx, args.u64, `u64`) ], }) }

export interface UpdateToleranceMsArgs { adminCap: TransactionObjectInput; bucketOracle: TransactionObjectInput; u64: bigint | TransactionArgument }

export function updateToleranceMs( tx: Transaction, typeArg: string, args: UpdateToleranceMsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket_oracle::update_tolerance_ms`, typeArguments: [typeArg], arguments: [ obj(tx, args.adminCap), obj(tx, args.bucketOracle), pure(tx, args.u64, `u64`) ], }) }

export interface UpdateSwitchboardConfigArgs { adminCap: TransactionObjectInput; bucketOracle: TransactionObjectInput; option: (string | TransactionArgument | TransactionArgument | null) }

export function updateSwitchboardConfig( tx: Transaction, typeArg: string, args: UpdateSwitchboardConfigArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket_oracle::update_switchboard_config`, typeArguments: [typeArg], arguments: [ obj(tx, args.adminCap), obj(tx, args.bucketOracle), pure(tx, args.option, `${Option.$typeName}<address>`) ], }) }

export interface UpdatePythConfigArgs { adminCap: TransactionObjectInput; bucketOracle: TransactionObjectInput; option: (string | TransactionArgument | TransactionArgument | null) }

export function updatePythConfig( tx: Transaction, typeArg: string, args: UpdatePythConfigArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket_oracle::update_pyth_config`, typeArguments: [typeArg], arguments: [ obj(tx, args.adminCap), obj(tx, args.bucketOracle), pure(tx, args.option, `${Option.$typeName}<address>`) ], }) }

export interface UpdateSupraConfigArgs { adminCap: TransactionObjectInput; bucketOracle: TransactionObjectInput; option: (number | TransactionArgument | TransactionArgument | null) }

export function updateSupraConfig( tx: Transaction, typeArg: string, args: UpdateSupraConfigArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket_oracle::update_supra_config`, typeArguments: [typeArg], arguments: [ obj(tx, args.adminCap), obj(tx, args.bucketOracle), pure(tx, args.option, `${Option.$typeName}<u32>`) ], }) }

export function newOracle( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket_oracle::new_oracle`, arguments: [ ], }) }

export interface CreateSingleOracleArgs { adminCap: TransactionObjectInput; bucketOracle: TransactionObjectInput; u8: number | TransactionArgument; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument; option1: (string | TransactionArgument | TransactionArgument | null); option2: (string | TransactionArgument | TransactionArgument | null); option3: (number | TransactionArgument | TransactionArgument | null) }

export function createSingleOracle( tx: Transaction, typeArg: string, args: CreateSingleOracleArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket_oracle::create_single_oracle`, typeArguments: [typeArg], arguments: [ obj(tx, args.adminCap), obj(tx, args.bucketOracle), pure(tx, args.u8, `u8`), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`), pure(tx, args.option1, `${Option.$typeName}<address>`), pure(tx, args.option2, `${Option.$typeName}<address>`), pure(tx, args.option3, `${Option.$typeName}<u32>`) ], }) }

export interface UpdatePackageVersionArgs { adminCap: TransactionObjectInput; bucketOracle: TransactionObjectInput; u64: bigint | TransactionArgument }

export function updatePackageVersion( tx: Transaction, typeArg: string, args: UpdatePackageVersionArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket_oracle::update_package_version`, typeArguments: [typeArg], arguments: [ obj(tx, args.adminCap), obj(tx, args.bucketOracle), pure(tx, args.u64, `u64`) ], }) }

export function borrowSingleOracle( tx: Transaction, typeArg: string, bucketOracle: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket_oracle::borrow_single_oracle`, typeArguments: [typeArg], arguments: [ obj(tx, bucketOracle) ], }) }

export function borrowSingleOracleMut( tx: Transaction, typeArg: string, bucketOracle: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket_oracle::borrow_single_oracle_mut`, typeArguments: [typeArg], arguments: [ obj(tx, bucketOracle) ], }) }

export interface UpdatePriceFromSwitchboardArgs { bucketOracle: TransactionObjectInput; clock: TransactionObjectInput; aggregator: TransactionObjectInput }

export function updatePriceFromSwitchboard( tx: Transaction, typeArg: string, args: UpdatePriceFromSwitchboardArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket_oracle::update_price_from_switchboard`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucketOracle), obj(tx, args.clock), obj(tx, args.aggregator) ], }) }

export interface UpdatePriceFromPythArgs { bucketOracle: TransactionObjectInput; clock: TransactionObjectInput; state1: TransactionObjectInput; state2: TransactionObjectInput; priceInfoObject: TransactionObjectInput; vecU8: Array<number | TransactionArgument> | TransactionArgument; coin: TransactionObjectInput }

export function updatePriceFromPyth( tx: Transaction, typeArg: string, args: UpdatePriceFromPythArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket_oracle::update_price_from_pyth`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucketOracle), obj(tx, args.clock), obj(tx, args.state1), obj(tx, args.state2), obj(tx, args.priceInfoObject), pure(tx, args.vecU8, `vector<u8>`), obj(tx, args.coin) ], }) }

export interface UpdatePriceFromPythReadOnlyArgs { bucketOracle: TransactionObjectInput; clock: TransactionObjectInput; state: TransactionObjectInput; priceInfoObject: TransactionObjectInput }

export function updatePriceFromPythReadOnly( tx: Transaction, typeArg: string, args: UpdatePriceFromPythReadOnlyArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket_oracle::update_price_from_pyth_read_only`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucketOracle), obj(tx, args.clock), obj(tx, args.state), obj(tx, args.priceInfoObject) ], }) }

export interface UpdatePriceFromSupraArgs { bucketOracle: TransactionObjectInput; clock: TransactionObjectInput; oracleHolder: TransactionObjectInput; u32: number | TransactionArgument }

export function updatePriceFromSupra( tx: Transaction, typeArg: string, args: UpdatePriceFromSupraArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bucket_oracle::update_price_from_supra`, typeArguments: [typeArg], arguments: [ obj(tx, args.bucketOracle), obj(tx, args.clock), obj(tx, args.oracleHolder), pure(tx, args.u32, `u32`) ], }) }
