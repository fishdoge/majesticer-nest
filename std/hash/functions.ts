import {PUBLISHED_AT} from "..";
import {pure} from "../../_framework/util";
import {Transaction, TransactionArgument} from "@mysten/sui/transactions";

export function sha2256( tx: Transaction, vecU8: Array<number | TransactionArgument> | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::hash::sha2_256`, arguments: [ pure(tx, vecU8, `vector<u8>`) ], }) }

export function sha3256( tx: Transaction, vecU8: Array<number | TransactionArgument> | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::hash::sha3_256`, arguments: [ pure(tx, vecU8, `vector<u8>`) ], }) }
