import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Option} from "../../std/option/structs";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface IterOrdersArgs { pool: TransactionObjectInput; option1: (bigint | TransactionArgument | TransactionArgument | null); option2: (bigint | TransactionArgument | TransactionArgument | null); option3: (bigint | TransactionArgument | TransactionArgument | null); u64: bigint | TransactionArgument; bool: boolean | TransactionArgument }

export function iterOrders( tx: Transaction, typeArgs: [string, string], args: IterOrdersArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_query::iter_orders`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), pure(tx, args.option1, `${Option.$typeName}<u128>`), pure(tx, args.option2, `${Option.$typeName}<u128>`), pure(tx, args.option3, `${Option.$typeName}<u64>`), pure(tx, args.u64, `u64`), pure(tx, args.bool, `bool`) ], }) }

export function orders( tx: Transaction, orderPage: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_query::orders`, arguments: [ obj(tx, orderPage) ], }) }

export function hasNextPage( tx: Transaction, orderPage: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_query::has_next_page`, arguments: [ obj(tx, orderPage) ], }) }
