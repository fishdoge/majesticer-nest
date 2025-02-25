import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function new_( tx: Transaction, typeArg: string, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::strap::new`, typeArguments: [typeArg], arguments: [ ], }) }

export function destroy( tx: Transaction, typeArg: string, bottleStrap: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::strap::destroy`, typeArguments: [typeArg], arguments: [ obj(tx, bottleStrap) ], }) }

export function init( tx: Transaction, strap: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::strap::init`, arguments: [ obj(tx, strap) ], }) }

export function getAddress( tx: Transaction, typeArg: string, bottleStrap: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::strap::get_address`, typeArguments: [typeArg], arguments: [ obj(tx, bottleStrap) ], }) }

export function feeRate( tx: Transaction, typeArg: string, bottleStrap: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::strap::fee_rate`, typeArguments: [typeArg], arguments: [ obj(tx, bottleStrap) ], }) }

export function newWithFeeRate( tx: Transaction, typeArg: string, u64: bigint | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::strap::new_with_fee_rate`, typeArguments: [typeArg], arguments: [ pure(tx, u64, `u64`) ], }) }
