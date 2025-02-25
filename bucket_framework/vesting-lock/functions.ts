import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface NewArgs { balance: TransactionObjectInput; clock: TransactionObjectInput; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument }

export function new_( tx: Transaction, typeArg: string, args: NewArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vesting_lock::new`, typeArguments: [typeArg], arguments: [ obj(tx, args.balance), obj(tx, args.clock), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`) ], }) }

export function destroyEmpty( tx: Transaction, typeArg: string, vestingLock: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vesting_lock::destroy_empty`, typeArguments: [typeArg], arguments: [ obj(tx, vestingLock) ], }) }

export interface CreateArgs { coin: TransactionObjectInput; clock: TransactionObjectInput; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument; address: string | TransactionArgument }

export function create( tx: Transaction, typeArg: string, args: CreateArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vesting_lock::create`, typeArguments: [typeArg], arguments: [ obj(tx, args.coin), obj(tx, args.clock), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`), pure(tx, args.address, `address`) ], }) }

export interface SplitArgs { vestingLock: TransactionObjectInput; clock: TransactionObjectInput; u64: bigint | TransactionArgument }

export function split( tx: Transaction, typeArg: string, args: SplitArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vesting_lock::split`, typeArguments: [typeArg], arguments: [ obj(tx, args.vestingLock), obj(tx, args.clock), pure(tx, args.u64, `u64`) ], }) }

export interface ReleaseArgs { vestingLock: TransactionObjectInput; clock: TransactionObjectInput }

export function release( tx: Transaction, typeArg: string, args: ReleaseArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vesting_lock::release`, typeArguments: [typeArg], arguments: [ obj(tx, args.vestingLock), obj(tx, args.clock) ], }) }

export interface ReleaseToArgs { vestingLock: TransactionObjectInput; clock: TransactionObjectInput; address: string | TransactionArgument }

export function releaseTo( tx: Transaction, typeArg: string, args: ReleaseToArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vesting_lock::release_to`, typeArguments: [typeArg], arguments: [ obj(tx, args.vestingLock), obj(tx, args.clock), pure(tx, args.address, `address`) ], }) }

export function duration( tx: Transaction, typeArg: string, vestingLock: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vesting_lock::duration`, typeArguments: [typeArg], arguments: [ obj(tx, vestingLock) ], }) }

export function startTime( tx: Transaction, typeArg: string, vestingLock: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vesting_lock::start_time`, typeArguments: [typeArg], arguments: [ obj(tx, vestingLock) ], }) }

export function releasedAmount( tx: Transaction, typeArg: string, vestingLock: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vesting_lock::released_amount`, typeArguments: [typeArg], arguments: [ obj(tx, vestingLock) ], }) }

export interface ComputeVestedAmountArgs { vestingLock: TransactionObjectInput; u64: bigint | TransactionArgument }

export function computeVestedAmount( tx: Transaction, typeArg: string, args: ComputeVestedAmountArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vesting_lock::compute_vested_amount`, typeArguments: [typeArg], arguments: [ obj(tx, args.vestingLock), pure(tx, args.u64, `u64`) ], }) }

export interface ReleasableAmountArgs { vestingLock: TransactionObjectInput; clock: TransactionObjectInput }

export function releasableAmount( tx: Transaction, typeArg: string, args: ReleasableAmountArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vesting_lock::releasable_amount`, typeArguments: [typeArg], arguments: [ obj(tx, args.vestingLock), obj(tx, args.clock) ], }) }

export interface SplitToArgs { vestingLock: TransactionObjectInput; clock: TransactionObjectInput; u64: bigint | TransactionArgument; address: string | TransactionArgument }

export function splitTo( tx: Transaction, typeArg: string, args: SplitToArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vesting_lock::split_to`, typeArguments: [typeArg], arguments: [ obj(tx, args.vestingLock), obj(tx, args.clock), pure(tx, args.u64, `u64`), pure(tx, args.address, `address`) ], }) }
