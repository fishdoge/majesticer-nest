import {PUBLISHED_AT} from "..";
import {ID} from "../../_dependencies/onchain/0x2/object/structs";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function balances( tx: Transaction, typeArgs: [string, string], vault: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vault::balances`, typeArguments: typeArgs, arguments: [ obj(tx, vault) ], }) }

export function empty( tx: Transaction, typeArgs: [string, string], ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vault::empty`, typeArguments: typeArgs, arguments: [ ], }) }

export interface SettleBalanceManagerArgs { vault: TransactionObjectInput; balances1: TransactionObjectInput; balances2: TransactionObjectInput; balanceManager: TransactionObjectInput; tradeProof: TransactionObjectInput }

export function settleBalanceManager( tx: Transaction, typeArgs: [string, string], args: SettleBalanceManagerArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vault::settle_balance_manager`, typeArguments: typeArgs, arguments: [ obj(tx, args.vault), obj(tx, args.balances1), obj(tx, args.balances2), obj(tx, args.balanceManager), obj(tx, args.tradeProof) ], }) }

export interface WithdrawDeepToBurnArgs { vault: TransactionObjectInput; u64: bigint | TransactionArgument }

export function withdrawDeepToBurn( tx: Transaction, typeArgs: [string, string], args: WithdrawDeepToBurnArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vault::withdraw_deep_to_burn`, typeArguments: typeArgs, arguments: [ obj(tx, args.vault), pure(tx, args.u64, `u64`) ], }) }

export interface BorrowFlashloanBaseArgs { vault: TransactionObjectInput; id: string | TransactionArgument; u64: bigint | TransactionArgument }

export function borrowFlashloanBase( tx: Transaction, typeArgs: [string, string], args: BorrowFlashloanBaseArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vault::borrow_flashloan_base`, typeArguments: typeArgs, arguments: [ obj(tx, args.vault), pure(tx, args.id, `${ID.$typeName}`), pure(tx, args.u64, `u64`) ], }) }

export interface BorrowFlashloanQuoteArgs { vault: TransactionObjectInput; id: string | TransactionArgument; u64: bigint | TransactionArgument }

export function borrowFlashloanQuote( tx: Transaction, typeArgs: [string, string], args: BorrowFlashloanQuoteArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vault::borrow_flashloan_quote`, typeArguments: typeArgs, arguments: [ obj(tx, args.vault), pure(tx, args.id, `${ID.$typeName}`), pure(tx, args.u64, `u64`) ], }) }

export interface ReturnFlashloanBaseArgs { vault: TransactionObjectInput; id: string | TransactionArgument; coin: TransactionObjectInput; flashLoan: TransactionObjectInput }

export function returnFlashloanBase( tx: Transaction, typeArgs: [string, string], args: ReturnFlashloanBaseArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vault::return_flashloan_base`, typeArguments: typeArgs, arguments: [ obj(tx, args.vault), pure(tx, args.id, `${ID.$typeName}`), obj(tx, args.coin), obj(tx, args.flashLoan) ], }) }

export interface ReturnFlashloanQuoteArgs { vault: TransactionObjectInput; id: string | TransactionArgument; coin: TransactionObjectInput; flashLoan: TransactionObjectInput }

export function returnFlashloanQuote( tx: Transaction, typeArgs: [string, string], args: ReturnFlashloanQuoteArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vault::return_flashloan_quote`, typeArguments: typeArgs, arguments: [ obj(tx, args.vault), pure(tx, args.id, `${ID.$typeName}`), obj(tx, args.coin), obj(tx, args.flashLoan) ], }) }
