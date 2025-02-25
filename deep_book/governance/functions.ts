import {PUBLISHED_AT} from "..";
import {ID} from "../../_dependencies/onchain/0x2/object/structs";
import {obj, pure} from "../../_framework/util";
import {Option} from "../../std/option/structs";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function tradeParams( tx: Transaction, governance: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::governance::trade_params`, arguments: [ obj(tx, governance) ], }) }

export function empty( tx: Transaction, bool: boolean | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::governance::empty`, arguments: [ pure(tx, bool, `bool`) ], }) }

export function update( tx: Transaction, governance: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::governance::update`, arguments: [ obj(tx, governance) ], }) }

export interface SetWhitelistArgs { governance: TransactionObjectInput; bool: boolean | TransactionArgument }

export function setWhitelist( tx: Transaction, args: SetWhitelistArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::governance::set_whitelist`, arguments: [ obj(tx, args.governance), pure(tx, args.bool, `bool`) ], }) }

export function whitelisted( tx: Transaction, governance: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::governance::whitelisted`, arguments: [ obj(tx, governance) ], }) }

export interface AddProposalArgs { governance: TransactionObjectInput; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument; u643: bigint | TransactionArgument; u644: bigint | TransactionArgument; id: string | TransactionArgument }

export function addProposal( tx: Transaction, args: AddProposalArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::governance::add_proposal`, arguments: [ obj(tx, args.governance), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`), pure(tx, args.u643, `u64`), pure(tx, args.u644, `u64`), pure(tx, args.id, `${ID.$typeName}`) ], }) }

export interface AdjustVoteArgs { governance: TransactionObjectInput; option1: (string | TransactionArgument | TransactionArgument | null); option2: (string | TransactionArgument | TransactionArgument | null); u64: bigint | TransactionArgument }

export function adjustVote( tx: Transaction, args: AdjustVoteArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::governance::adjust_vote`, arguments: [ obj(tx, args.governance), pure(tx, args.option1, `${Option.$typeName}<${ID.$typeName}>`), pure(tx, args.option2, `${Option.$typeName}<${ID.$typeName}>`), pure(tx, args.u64, `u64`) ], }) }

export interface AdjustVotingPowerArgs { governance: TransactionObjectInput; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument }

export function adjustVotingPower( tx: Transaction, args: AdjustVotingPowerArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::governance::adjust_voting_power`, arguments: [ obj(tx, args.governance), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`) ], }) }

export function stakeToVotingPower( tx: Transaction, u64: bigint | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::governance::stake_to_voting_power`, arguments: [ pure(tx, u64, `u64`) ], }) }

export interface NewProposalArgs { u641: bigint | TransactionArgument; u642: bigint | TransactionArgument; u643: bigint | TransactionArgument }

export function newProposal( tx: Transaction, args: NewProposalArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::governance::new_proposal`, arguments: [ pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`), pure(tx, args.u643, `u64`) ], }) }

export interface RemoveLowestProposalArgs { governance: TransactionObjectInput; u64: bigint | TransactionArgument }

export function removeLowestProposal( tx: Transaction, args: RemoveLowestProposalArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::governance::remove_lowest_proposal`, arguments: [ obj(tx, args.governance), pure(tx, args.u64, `u64`) ], }) }

export function resetTradeParams( tx: Transaction, governance: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::governance::reset_trade_params`, arguments: [ obj(tx, governance) ], }) }

export function toTradeParams( tx: Transaction, proposal: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::governance::to_trade_params`, arguments: [ obj(tx, proposal) ], }) }
