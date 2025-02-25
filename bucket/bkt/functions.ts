import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function init( tx: Transaction, bkt: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bkt::init`, arguments: [ obj(tx, bkt) ], }) }

export function newTreasury( tx: Transaction, bkt: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bkt::new_treasury`, arguments: [ obj(tx, bkt) ], }) }

export interface CollectBktArgs { bktTreasury: TransactionObjectInput; balance: TransactionObjectInput }

export function collectBkt( tx: Transaction, args: CollectBktArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bkt::collect_bkt`, arguments: [ obj(tx, args.bktTreasury), obj(tx, args.balance) ], }) }

export interface WithdrawTreasuryArgs { bktAdminCap: TransactionObjectInput; bktTreasury: TransactionObjectInput; u64: bigint | TransactionArgument }

export function withdrawTreasury( tx: Transaction, args: WithdrawTreasuryArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bkt::withdraw_treasury`, arguments: [ obj(tx, args.bktAdminCap), obj(tx, args.bktTreasury), pure(tx, args.u64, `u64`) ], }) }

export interface WithdrawTreasuryToArgs { bktAdminCap: TransactionObjectInput; bktTreasury: TransactionObjectInput; u64: bigint | TransactionArgument; address: string | TransactionArgument }

export function withdrawTreasuryTo( tx: Transaction, args: WithdrawTreasuryToArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bkt::withdraw_treasury_to`, arguments: [ obj(tx, args.bktAdminCap), obj(tx, args.bktTreasury), pure(tx, args.u64, `u64`), pure(tx, args.address, `address`) ], }) }

export interface ReleaseBktArgs { bktTreasury: TransactionObjectInput; u64: bigint | TransactionArgument }

export function releaseBkt( tx: Transaction, args: ReleaseBktArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bkt::release_bkt`, arguments: [ obj(tx, args.bktTreasury), pure(tx, args.u64, `u64`) ], }) }

export function amountOf( tx: Transaction, u64: bigint | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bkt::amount_of`, arguments: [ pure(tx, u64, `u64`) ], }) }

export function getEcoPartBalance( tx: Transaction, bktTreasury: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::bkt::get_eco_part_balance`, arguments: [ obj(tx, bktTreasury) ], }) }
