import {PUBLISHED_AT} from "..";
import {ID} from "../../_dependencies/onchain/0x2/object/structs";
import {obj, pure} from "../../_framework/util";
import {Option} from "../../std/option/structs";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function empty( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::empty`, arguments: [ ], }) }

export function update( tx: Transaction, account: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::update`, arguments: [ obj(tx, account) ], }) }

export function totalVolume( tx: Transaction, account: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::total_volume`, arguments: [ obj(tx, account) ], }) }

export function openOrders( tx: Transaction, account: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::open_orders`, arguments: [ obj(tx, account) ], }) }

export function takerVolume( tx: Transaction, account: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::taker_volume`, arguments: [ obj(tx, account) ], }) }

export function makerVolume( tx: Transaction, account: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::maker_volume`, arguments: [ obj(tx, account) ], }) }

export function activeStake( tx: Transaction, account: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::active_stake`, arguments: [ obj(tx, account) ], }) }

export function inactiveStake( tx: Transaction, account: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::inactive_stake`, arguments: [ obj(tx, account) ], }) }

export function createdProposal( tx: Transaction, account: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::created_proposal`, arguments: [ obj(tx, account) ], }) }

export function votedProposal( tx: Transaction, account: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::voted_proposal`, arguments: [ obj(tx, account) ], }) }

export function settledBalances( tx: Transaction, account: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::settled_balances`, arguments: [ obj(tx, account) ], }) }

export interface ProcessMakerFillArgs { account: TransactionObjectInput; fill: TransactionObjectInput }

export function processMakerFill( tx: Transaction, args: ProcessMakerFillArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::process_maker_fill`, arguments: [ obj(tx, args.account), obj(tx, args.fill) ], }) }

export interface AddTakerVolumeArgs { account: TransactionObjectInput; u64: bigint | TransactionArgument }

export function addTakerVolume( tx: Transaction, args: AddTakerVolumeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::add_taker_volume`, arguments: [ obj(tx, args.account), pure(tx, args.u64, `u64`) ], }) }

export interface SetVotedProposalArgs { account: TransactionObjectInput; option: (string | TransactionArgument | TransactionArgument | null) }

export function setVotedProposal( tx: Transaction, args: SetVotedProposalArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::set_voted_proposal`, arguments: [ obj(tx, args.account), pure(tx, args.option, `${Option.$typeName}<${ID.$typeName}>`) ], }) }

export interface SetCreatedProposalArgs { account: TransactionObjectInput; bool: boolean | TransactionArgument }

export function setCreatedProposal( tx: Transaction, args: SetCreatedProposalArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::set_created_proposal`, arguments: [ obj(tx, args.account), pure(tx, args.bool, `bool`) ], }) }

export interface AddSettledBalancesArgs { account: TransactionObjectInput; balances: TransactionObjectInput }

export function addSettledBalances( tx: Transaction, args: AddSettledBalancesArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::add_settled_balances`, arguments: [ obj(tx, args.account), obj(tx, args.balances) ], }) }

export interface AddOwedBalancesArgs { account: TransactionObjectInput; balances: TransactionObjectInput }

export function addOwedBalances( tx: Transaction, args: AddOwedBalancesArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::add_owed_balances`, arguments: [ obj(tx, args.account), obj(tx, args.balances) ], }) }

export function settle( tx: Transaction, account: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::settle`, arguments: [ obj(tx, account) ], }) }

export interface AddRebatesArgs { account: TransactionObjectInput; balances: TransactionObjectInput }

export function addRebates( tx: Transaction, args: AddRebatesArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::add_rebates`, arguments: [ obj(tx, args.account), obj(tx, args.balances) ], }) }

export function claimRebates( tx: Transaction, account: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::claim_rebates`, arguments: [ obj(tx, account) ], }) }

export interface AddOrderArgs { account: TransactionObjectInput; u128: bigint | TransactionArgument }

export function addOrder( tx: Transaction, args: AddOrderArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::add_order`, arguments: [ obj(tx, args.account), pure(tx, args.u128, `u128`) ], }) }

export interface RemoveOrderArgs { account: TransactionObjectInput; u128: bigint | TransactionArgument }

export function removeOrder( tx: Transaction, args: RemoveOrderArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::remove_order`, arguments: [ obj(tx, args.account), pure(tx, args.u128, `u128`) ], }) }

export interface AddStakeArgs { account: TransactionObjectInput; u64: bigint | TransactionArgument }

export function addStake( tx: Transaction, args: AddStakeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::add_stake`, arguments: [ obj(tx, args.account), pure(tx, args.u64, `u64`) ], }) }

export function removeStake( tx: Transaction, account: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::remove_stake`, arguments: [ obj(tx, account) ], }) }
