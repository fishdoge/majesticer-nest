import {PUBLISHED_AT} from "..";
import {ID} from "../../_dependencies/onchain/0x2/object/structs";
import {obj, pure, vector} from "../../_framework/util";
import {Fill} from "../fill/structs";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function empty( tx: Transaction, bool: boolean | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::state::empty`, arguments: [ pure(tx, bool, `bool`) ], }) }

export function history( tx: Transaction, state: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::state::history`, arguments: [ obj(tx, state) ], }) }

export interface AccountArgs { state: TransactionObjectInput; id: string | TransactionArgument }

export function account( tx: Transaction, args: AccountArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::state::account`, arguments: [ obj(tx, args.state), pure(tx, args.id, `${ID.$typeName}`) ], }) }

export function governance( tx: Transaction, state: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::state::governance`, arguments: [ obj(tx, state) ], }) }

export interface ProcessCreateArgs { state: TransactionObjectInput; orderInfo: TransactionObjectInput }

export function processCreate( tx: Transaction, args: ProcessCreateArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::state::process_create`, arguments: [ obj(tx, args.state), obj(tx, args.orderInfo) ], }) }

export interface WithdrawSettledAmountsArgs { state: TransactionObjectInput; id: string | TransactionArgument }

export function withdrawSettledAmounts( tx: Transaction, args: WithdrawSettledAmountsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::state::withdraw_settled_amounts`, arguments: [ obj(tx, args.state), pure(tx, args.id, `${ID.$typeName}`) ], }) }

export interface ProcessCancelArgs { state: TransactionObjectInput; order: TransactionObjectInput; id: string | TransactionArgument }

export function processCancel( tx: Transaction, args: ProcessCancelArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::state::process_cancel`, arguments: [ obj(tx, args.state), obj(tx, args.order), pure(tx, args.id, `${ID.$typeName}`) ], }) }

export interface ProcessModifyArgs { state: TransactionObjectInput; id: string | TransactionArgument; u64: bigint | TransactionArgument; order: TransactionObjectInput }

export function processModify( tx: Transaction, args: ProcessModifyArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::state::process_modify`, arguments: [ obj(tx, args.state), pure(tx, args.id, `${ID.$typeName}`), pure(tx, args.u64, `u64`), obj(tx, args.order) ], }) }

export interface ProcessStakeArgs { state: TransactionObjectInput; id1: string | TransactionArgument; id2: string | TransactionArgument; u64: bigint | TransactionArgument }

export function processStake( tx: Transaction, args: ProcessStakeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::state::process_stake`, arguments: [ obj(tx, args.state), pure(tx, args.id1, `${ID.$typeName}`), pure(tx, args.id2, `${ID.$typeName}`), pure(tx, args.u64, `u64`) ], }) }

export interface ProcessUnstakeArgs { state: TransactionObjectInput; id1: string | TransactionArgument; id2: string | TransactionArgument }

export function processUnstake( tx: Transaction, args: ProcessUnstakeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::state::process_unstake`, arguments: [ obj(tx, args.state), pure(tx, args.id1, `${ID.$typeName}`), pure(tx, args.id2, `${ID.$typeName}`) ], }) }

export interface ProcessProposalArgs { state: TransactionObjectInput; id1: string | TransactionArgument; id2: string | TransactionArgument; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument; u643: bigint | TransactionArgument }

export function processProposal( tx: Transaction, args: ProcessProposalArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::state::process_proposal`, arguments: [ obj(tx, args.state), pure(tx, args.id1, `${ID.$typeName}`), pure(tx, args.id2, `${ID.$typeName}`), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`), pure(tx, args.u643, `u64`) ], }) }

export interface ProcessVoteArgs { state: TransactionObjectInput; id1: string | TransactionArgument; id2: string | TransactionArgument; id3: string | TransactionArgument }

export function processVote( tx: Transaction, args: ProcessVoteArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::state::process_vote`, arguments: [ obj(tx, args.state), pure(tx, args.id1, `${ID.$typeName}`), pure(tx, args.id2, `${ID.$typeName}`), pure(tx, args.id3, `${ID.$typeName}`) ], }) }

export interface ProcessClaimRebatesArgs { state: TransactionObjectInput; id1: string | TransactionArgument; id2: string | TransactionArgument }

export function processClaimRebates( tx: Transaction, args: ProcessClaimRebatesArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::state::process_claim_rebates`, arguments: [ obj(tx, args.state), pure(tx, args.id1, `${ID.$typeName}`), pure(tx, args.id2, `${ID.$typeName}`) ], }) }

export function governanceMut( tx: Transaction, state: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::state::governance_mut`, arguments: [ obj(tx, state) ], }) }

export interface AccountExistsArgs { state: TransactionObjectInput; id: string | TransactionArgument }

export function accountExists( tx: Transaction, args: AccountExistsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::state::account_exists`, arguments: [ obj(tx, args.state), pure(tx, args.id, `${ID.$typeName}`) ], }) }

export function historyMut( tx: Transaction, state: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::state::history_mut`, arguments: [ obj(tx, state) ], }) }

export interface ProcessFillsArgs { state: TransactionObjectInput; vecFill: Array<TransactionObjectInput> | TransactionArgument }

export function processFills( tx: Transaction, args: ProcessFillsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::state::process_fills`, arguments: [ obj(tx, args.state), vector(tx, `${Fill.$typeName}`, args.vecFill) ], }) }

export interface UpdateAccountArgs { state: TransactionObjectInput; id: string | TransactionArgument }

export function updateAccount( tx: Transaction, args: UpdateAccountArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::state::update_account`, arguments: [ obj(tx, args.state), pure(tx, args.id, `${ID.$typeName}`) ], }) }
