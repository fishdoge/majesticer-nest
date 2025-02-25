import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface ParsePriceArgs { oracleHolder: TransactionObjectInput; u32: number | TransactionArgument; u8: number | TransactionArgument }

export function parsePrice( tx: Transaction, args: ParsePriceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::supra_parser::parse_price`, arguments: [ obj(tx, args.oracleHolder), pure(tx, args.u32, `u32`), pure(tx, args.u8, `u8`) ], }) }
