import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function emitOutput( tx: Transaction, typeArgs: [string, string], u64: bigint | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pipe_events::emit_output`, typeArguments: typeArgs, arguments: [ pure(tx, u64, `u64`) ], }) }

export function emitInput( tx: Transaction, typeArgs: [string, string], balance: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pipe_events::emit_input`, typeArguments: typeArgs, arguments: [ obj(tx, balance) ], }) }
