import {PUBLISHED_AT} from "..";
import {ID} from "../../_dependencies/onchain/0x2/object/structs";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function new_( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::balance_manager::new`, arguments: [ ], }) }

export function id( tx: Transaction, balanceManager: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::balance_manager::id`, arguments: [ obj(tx, balanceManager) ], }) }

export interface DepositArgs { balanceManager: TransactionObjectInput; coin: TransactionObjectInput }

export function deposit( tx: Transaction, typeArg: string, args: DepositArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::balance_manager::deposit`, typeArguments: [typeArg], arguments: [ obj(tx, args.balanceManager), obj(tx, args.coin) ], }) }

export function delete_( tx: Transaction, balanceManager: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::balance_manager::delete`, arguments: [ obj(tx, balanceManager) ], }) }

export function owner( tx: Transaction, balanceManager: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::balance_manager::owner`, arguments: [ obj(tx, balanceManager) ], }) }

export function trader( tx: Transaction, tradeProof: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::balance_manager::trader`, arguments: [ obj(tx, tradeProof) ], }) }

export function balance( tx: Transaction, typeArg: string, balanceManager: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::balance_manager::balance`, typeArguments: [typeArg], arguments: [ obj(tx, balanceManager) ], }) }

export function withdrawAll( tx: Transaction, typeArg: string, balanceManager: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::balance_manager::withdraw_all`, typeArguments: [typeArg], arguments: [ obj(tx, balanceManager) ], }) }

export interface WithdrawArgs { balanceManager: TransactionObjectInput; u64: bigint | TransactionArgument }

export function withdraw( tx: Transaction, typeArg: string, args: WithdrawArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::balance_manager::withdraw`, typeArguments: [typeArg], arguments: [ obj(tx, args.balanceManager), pure(tx, args.u64, `u64`) ], }) }

export function mintTradeCap( tx: Transaction, balanceManager: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::balance_manager::mint_trade_cap`, arguments: [ obj(tx, balanceManager) ], }) }

export interface RevokeTradeCapArgs { balanceManager: TransactionObjectInput; id: string | TransactionArgument }

export function revokeTradeCap( tx: Transaction, args: RevokeTradeCapArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::balance_manager::revoke_trade_cap`, arguments: [ obj(tx, args.balanceManager), pure(tx, args.id, `${ID.$typeName}`) ], }) }

export function generateProofAsOwner( tx: Transaction, balanceManager: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::balance_manager::generate_proof_as_owner`, arguments: [ obj(tx, balanceManager) ], }) }

export interface GenerateProofAsTraderArgs { balanceManager: TransactionObjectInput; tradeCap: TransactionObjectInput }

export function generateProofAsTrader( tx: Transaction, args: GenerateProofAsTraderArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::balance_manager::generate_proof_as_trader`, arguments: [ obj(tx, args.balanceManager), obj(tx, args.tradeCap) ], }) }

export interface ValidateProofArgs { balanceManager: TransactionObjectInput; tradeProof: TransactionObjectInput }

export function validateProof( tx: Transaction, args: ValidateProofArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::balance_manager::validate_proof`, arguments: [ obj(tx, args.balanceManager), obj(tx, args.tradeProof) ], }) }

export interface DepositWithProofArgs { balanceManager: TransactionObjectInput; tradeProof: TransactionObjectInput; balance: TransactionObjectInput }

export function depositWithProof( tx: Transaction, typeArg: string, args: DepositWithProofArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::balance_manager::deposit_with_proof`, typeArguments: [typeArg], arguments: [ obj(tx, args.balanceManager), obj(tx, args.tradeProof), obj(tx, args.balance) ], }) }

export interface WithdrawWithProofArgs { balanceManager: TransactionObjectInput; tradeProof: TransactionObjectInput; u64: bigint | TransactionArgument; bool: boolean | TransactionArgument }

export function withdrawWithProof( tx: Transaction, typeArg: string, args: WithdrawWithProofArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::balance_manager::withdraw_with_proof`, typeArguments: [typeArg], arguments: [ obj(tx, args.balanceManager), obj(tx, args.tradeProof), pure(tx, args.u64, `u64`), pure(tx, args.bool, `bool`) ], }) }

export function validateOwner( tx: Transaction, balanceManager: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::balance_manager::validate_owner`, arguments: [ obj(tx, balanceManager) ], }) }

export interface ValidateTraderArgs { balanceManager: TransactionObjectInput; tradeCap: TransactionObjectInput }

export function validateTrader( tx: Transaction, args: ValidateTraderArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::balance_manager::validate_trader`, arguments: [ obj(tx, args.balanceManager), obj(tx, args.tradeCap) ], }) }
