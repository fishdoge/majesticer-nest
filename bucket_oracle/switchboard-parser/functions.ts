import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Option} from "../../std/option/structs";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface ParsePriceArgs { aggregator: TransactionObjectInput; u8: number | TransactionArgument }

export function parsePrice( tx: Transaction, args: ParsePriceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::switchboard_parser::parse_price`, arguments: [ obj(tx, args.aggregator), pure(tx, args.u8, `u8`) ], }) }

export function extractAggregatorInfo( tx: Transaction, aggregator: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::switchboard_parser::extract_aggregator_info`, arguments: [ obj(tx, aggregator) ], }) }

export function parseConfig( tx: Transaction, option: (string | TransactionArgument | TransactionArgument | null) ) { return tx.moveCall({ target: `${PUBLISHED_AT}::switchboard_parser::parse_config`, arguments: [ pure(tx, option, `${Option.$typeName}<address>`) ], }) }
