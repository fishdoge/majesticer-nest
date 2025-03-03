import {PUBLISHED_AT} from "..";
import {ID} from "../../_dependencies/onchain/0x2/object/structs";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function init( tx: Transaction, registry: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::registry::init`, arguments: [ obj(tx, registry) ], }) }

export function loadInnerMut( tx: Transaction, registry: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::registry::load_inner_mut`, arguments: [ obj(tx, registry) ], }) }

export function loadInner( tx: Transaction, registry: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::registry::load_inner`, arguments: [ obj(tx, registry) ], }) }

export interface SetTreasuryAddressArgs { registry: TransactionObjectInput; address: string | TransactionArgument; deepbookAdminCap: TransactionObjectInput }

export function setTreasuryAddress( tx: Transaction, args: SetTreasuryAddressArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::registry::set_treasury_address`, arguments: [ obj(tx, args.registry), pure(tx, args.address, `address`), obj(tx, args.deepbookAdminCap) ], }) }

export interface EnableVersionArgs { registry: TransactionObjectInput; u64: bigint | TransactionArgument; deepbookAdminCap: TransactionObjectInput }

export function enableVersion( tx: Transaction, args: EnableVersionArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::registry::enable_version`, arguments: [ obj(tx, args.registry), pure(tx, args.u64, `u64`), obj(tx, args.deepbookAdminCap) ], }) }

export interface DisableVersionArgs { registry: TransactionObjectInput; u64: bigint | TransactionArgument; deepbookAdminCap: TransactionObjectInput }

export function disableVersion( tx: Transaction, args: DisableVersionArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::registry::disable_version`, arguments: [ obj(tx, args.registry), pure(tx, args.u64, `u64`), obj(tx, args.deepbookAdminCap) ], }) }

export interface RegisterPoolArgs { registry: TransactionObjectInput; id: string | TransactionArgument }

export function registerPool( tx: Transaction, typeArgs: [string, string], args: RegisterPoolArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::registry::register_pool`, typeArguments: typeArgs, arguments: [ obj(tx, args.registry), pure(tx, args.id, `${ID.$typeName}`) ], }) }

export function unregisterPool( tx: Transaction, typeArgs: [string, string], registry: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::registry::unregister_pool`, typeArguments: typeArgs, arguments: [ obj(tx, registry) ], }) }

export function getPoolId( tx: Transaction, typeArgs: [string, string], registry: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::registry::get_pool_id`, typeArguments: typeArgs, arguments: [ obj(tx, registry) ], }) }

export function treasuryAddress( tx: Transaction, registry: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::registry::treasury_address`, arguments: [ obj(tx, registry) ], }) }

export function allowedVersions( tx: Transaction, registry: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::registry::allowed_versions`, arguments: [ obj(tx, registry) ], }) }
