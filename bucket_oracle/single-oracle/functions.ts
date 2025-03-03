import {PUBLISHED_AT} from "..";
import {GenericArg, generic, obj, pure} from "../../_framework/util";
import {Option} from "../../std/option/structs";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface NewArgs { u8: number | TransactionArgument; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument; option1: (string | TransactionArgument | TransactionArgument | null); option2: (string | TransactionArgument | TransactionArgument | null); option3: (number | TransactionArgument | TransactionArgument | null) }

export function new_( tx: Transaction, typeArg: string, args: NewArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::single_oracle::new`, typeArguments: [typeArg], arguments: [ pure(tx, args.u8, `u8`), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`), pure(tx, args.option1, `${Option.$typeName}<address>`), pure(tx, args.option2, `${Option.$typeName}<address>`), pure(tx, args.option3, `${Option.$typeName}<u32>`) ], }) }

export interface GetPriceArgs { singleOracle: TransactionObjectInput; clock: TransactionObjectInput }

export function getPrice( tx: Transaction, typeArg: string, args: GetPriceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::single_oracle::get_price`, typeArguments: [typeArg], arguments: [ obj(tx, args.singleOracle), obj(tx, args.clock) ], }) }

export function addRule( tx: Transaction, typeArgs: [string, string], singleOracle: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::single_oracle::add_rule`, typeArguments: typeArgs, arguments: [ obj(tx, singleOracle) ], }) }

export function removeRule( tx: Transaction, typeArgs: [string, string], singleOracle: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::single_oracle::remove_rule`, typeArguments: typeArgs, arguments: [ obj(tx, singleOracle) ], }) }

export interface UpdateThresholdArgs { singleOracle: TransactionObjectInput; u64: bigint | TransactionArgument }

export function updateThreshold( tx: Transaction, typeArg: string, args: UpdateThresholdArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::single_oracle::update_threshold`, typeArguments: [typeArg], arguments: [ obj(tx, args.singleOracle), pure(tx, args.u64, `u64`) ], }) }

export interface UpdateToleranceMsArgs { singleOracle: TransactionObjectInput; u64: bigint | TransactionArgument }

export function updateToleranceMs( tx: Transaction, typeArg: string, args: UpdateToleranceMsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::single_oracle::update_tolerance_ms`, typeArguments: [typeArg], arguments: [ obj(tx, args.singleOracle), pure(tx, args.u64, `u64`) ], }) }

export interface UpdateSwitchboardConfigArgs { singleOracle: TransactionObjectInput; option: (string | TransactionArgument | TransactionArgument | null) }

export function updateSwitchboardConfig( tx: Transaction, typeArg: string, args: UpdateSwitchboardConfigArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::single_oracle::update_switchboard_config`, typeArguments: [typeArg], arguments: [ obj(tx, args.singleOracle), pure(tx, args.option, `${Option.$typeName}<address>`) ], }) }

export interface CollectPriceFromSwitchboardArgs { singleOracle: TransactionObjectInput; priceCollector: TransactionObjectInput; aggregator: TransactionObjectInput }

export function collectPriceFromSwitchboard( tx: Transaction, typeArg: string, args: CollectPriceFromSwitchboardArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::single_oracle::collect_price_from_switchboard`, typeArguments: [typeArg], arguments: [ obj(tx, args.singleOracle), obj(tx, args.priceCollector), obj(tx, args.aggregator) ], }) }

export interface UpdatePythConfigArgs { singleOracle: TransactionObjectInput; option: (string | TransactionArgument | TransactionArgument | null) }

export function updatePythConfig( tx: Transaction, typeArg: string, args: UpdatePythConfigArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::single_oracle::update_pyth_config`, typeArguments: [typeArg], arguments: [ obj(tx, args.singleOracle), pure(tx, args.option, `${Option.$typeName}<address>`) ], }) }

export interface CollectPriceFromPythArgs { singleOracle: TransactionObjectInput; priceCollector: TransactionObjectInput; clock: TransactionObjectInput; state1: TransactionObjectInput; state2: TransactionObjectInput; priceInfoObject: TransactionObjectInput; vecU8: Array<number | TransactionArgument> | TransactionArgument; coin: TransactionObjectInput }

export function collectPriceFromPyth( tx: Transaction, typeArg: string, args: CollectPriceFromPythArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::single_oracle::collect_price_from_pyth`, typeArguments: [typeArg], arguments: [ obj(tx, args.singleOracle), obj(tx, args.priceCollector), obj(tx, args.clock), obj(tx, args.state1), obj(tx, args.state2), obj(tx, args.priceInfoObject), pure(tx, args.vecU8, `vector<u8>`), obj(tx, args.coin) ], }) }

export interface CollectPriceFromPythReadOnlyArgs { singleOracle: TransactionObjectInput; priceCollector: TransactionObjectInput; clock: TransactionObjectInput; state: TransactionObjectInput; priceInfoObject: TransactionObjectInput }

export function collectPriceFromPythReadOnly( tx: Transaction, typeArg: string, args: CollectPriceFromPythReadOnlyArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::single_oracle::collect_price_from_pyth_read_only`, typeArguments: [typeArg], arguments: [ obj(tx, args.singleOracle), obj(tx, args.priceCollector), obj(tx, args.clock), obj(tx, args.state), obj(tx, args.priceInfoObject) ], }) }

export interface UpdateSupraConfigArgs { singleOracle: TransactionObjectInput; option: (number | TransactionArgument | TransactionArgument | null) }

export function updateSupraConfig( tx: Transaction, typeArg: string, args: UpdateSupraConfigArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::single_oracle::update_supra_config`, typeArguments: [typeArg], arguments: [ obj(tx, args.singleOracle), pure(tx, args.option, `${Option.$typeName}<u32>`) ], }) }

export interface CollectPriceFromSupraArgs { singleOracle: TransactionObjectInput; priceCollector: TransactionObjectInput; oracleHolder: TransactionObjectInput; u32: number | TransactionArgument }

export function collectPriceFromSupra( tx: Transaction, typeArg: string, args: CollectPriceFromSupraArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::single_oracle::collect_price_from_supra`, typeArguments: [typeArg], arguments: [ obj(tx, args.singleOracle), obj(tx, args.priceCollector), obj(tx, args.oracleHolder), pure(tx, args.u32, `u32`) ], }) }

export function issuePriceCollector( tx: Transaction, typeArg: string, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::single_oracle::issue_price_collector`, typeArguments: [typeArg], arguments: [ ], }) }

export interface UpdateOraclePriceArgs { singleOracle: TransactionObjectInput; clock: TransactionObjectInput; priceCollector: TransactionObjectInput }

export function updateOraclePrice( tx: Transaction, typeArg: string, args: UpdateOraclePriceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::single_oracle::update_oracle_price`, typeArguments: [typeArg], arguments: [ obj(tx, args.singleOracle), obj(tx, args.clock), obj(tx, args.priceCollector) ], }) }

export interface UpdateOraclePriceWithRuleArgs { singleOracle: TransactionObjectInput; t1: GenericArg; clock: TransactionObjectInput; u64: bigint | TransactionArgument }

export function updateOraclePriceWithRule( tx: Transaction, typeArgs: [string, string], args: UpdateOraclePriceWithRuleArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::single_oracle::update_oracle_price_with_rule`, typeArguments: typeArgs, arguments: [ obj(tx, args.singleOracle), generic(tx, `${typeArgs[1]}`, args.t1), obj(tx, args.clock), pure(tx, args.u64, `u64`) ], }) }

export function precisionDecimal( tx: Transaction, typeArg: string, singleOracle: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::single_oracle::precision_decimal`, typeArguments: [typeArg], arguments: [ obj(tx, singleOracle) ], }) }

export function precision( tx: Transaction, typeArg: string, singleOracle: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::single_oracle::precision`, typeArguments: [typeArg], arguments: [ obj(tx, singleOracle) ], }) }
