import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Option} from "../../std/option/structs";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface ParsePriceArgs { state1: TransactionObjectInput; state2: TransactionObjectInput; clock: TransactionObjectInput; priceInfoObject: TransactionObjectInput; vecU8: Array<number | TransactionArgument> | TransactionArgument; coin: TransactionObjectInput; u8: number | TransactionArgument }

export function parsePrice( tx: Transaction, args: ParsePriceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pyth_parser::parse_price`, arguments: [ obj(tx, args.state1), obj(tx, args.state2), obj(tx, args.clock), obj(tx, args.priceInfoObject), pure(tx, args.vecU8, `vector<u8>`), obj(tx, args.coin), pure(tx, args.u8, `u8`) ], }) }

export function parseConfig( tx: Transaction, option: (string | TransactionArgument | TransactionArgument | null) ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pyth_parser::parse_config`, arguments: [ pure(tx, option, `${Option.$typeName}<address>`) ], }) }

export interface ParsePriceReadOnlyArgs { state: TransactionObjectInput; clock: TransactionObjectInput; priceInfoObject: TransactionObjectInput; u8: number | TransactionArgument }

export function parsePriceReadOnly( tx: Transaction, args: ParsePriceReadOnlyArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pyth_parser::parse_price_read_only`, arguments: [ obj(tx, args.state), obj(tx, args.clock), obj(tx, args.priceInfoObject), pure(tx, args.u8, `u8`) ], }) }
