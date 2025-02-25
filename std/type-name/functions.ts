import {PUBLISHED_AT} from "..";
import {obj} from "../../_framework/util";
import {Transaction, TransactionObjectInput} from "@mysten/sui/transactions";

export function get( tx: Transaction, typeArg: string, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::type_name::get`, typeArguments: [typeArg], arguments: [ ], }) }

export function getWithOriginalIds( tx: Transaction, typeArg: string, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::type_name::get_with_original_ids`, typeArguments: [typeArg], arguments: [ ], }) }

export function isPrimitive( tx: Transaction, typeName: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::type_name::is_primitive`, arguments: [ obj(tx, typeName) ], }) }

export function borrowString( tx: Transaction, typeName: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::type_name::borrow_string`, arguments: [ obj(tx, typeName) ], }) }

export function getAddress( tx: Transaction, typeName: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::type_name::get_address`, arguments: [ obj(tx, typeName) ], }) }

export function getModule( tx: Transaction, typeName: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::type_name::get_module`, arguments: [ obj(tx, typeName) ], }) }

export function intoString( tx: Transaction, typeName: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::type_name::into_string`, arguments: [ obj(tx, typeName) ], }) }
