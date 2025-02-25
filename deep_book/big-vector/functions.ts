import {PUBLISHED_AT} from "..";
import {GenericArg, generic, obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface EmptyArgs { u641: bigint | TransactionArgument; u642: bigint | TransactionArgument }

export function empty( tx: Transaction, typeArg: string, args: EmptyArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::big_vector::empty`, typeArguments: [typeArg], arguments: [ pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`) ], }) }

export function length( tx: Transaction, typeArg: string, bigVector: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::big_vector::length`, typeArguments: [typeArg], arguments: [ obj(tx, bigVector) ], }) }

export interface BorrowArgs { bigVector: TransactionObjectInput; u128: bigint | TransactionArgument }

export function borrow( tx: Transaction, typeArg: string, args: BorrowArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::big_vector::borrow`, typeArguments: [typeArg], arguments: [ obj(tx, args.bigVector), pure(tx, args.u128, `u128`) ], }) }

export interface BorrowMutArgs { bigVector: TransactionObjectInput; u128: bigint | TransactionArgument }

export function borrowMut( tx: Transaction, typeArg: string, args: BorrowMutArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::big_vector::borrow_mut`, typeArguments: [typeArg], arguments: [ obj(tx, args.bigVector), pure(tx, args.u128, `u128`) ], }) }

export function destroyEmpty( tx: Transaction, typeArg: string, bigVector: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::big_vector::destroy_empty`, typeArguments: [typeArg], arguments: [ obj(tx, bigVector) ], }) }

export interface SingletonArgs { u128: bigint | TransactionArgument; t0: GenericArg }

export function singleton( tx: Transaction, typeArg: string, args: SingletonArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::big_vector::singleton`, typeArguments: [typeArg], arguments: [ pure(tx, args.u128, `u128`), generic(tx, `${typeArg}`, args.t0) ], }) }

export function isEmpty( tx: Transaction, typeArg: string, bigVector: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::big_vector::is_empty`, typeArguments: [typeArg], arguments: [ obj(tx, bigVector) ], }) }

export interface RemoveArgs { bigVector: TransactionObjectInput; u128: bigint | TransactionArgument }

export function remove( tx: Transaction, typeArg: string, args: RemoveArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::big_vector::remove`, typeArguments: [typeArg], arguments: [ obj(tx, args.bigVector), pure(tx, args.u128, `u128`) ], }) }

export interface InsertArgs { bigVector: TransactionObjectInput; u128: bigint | TransactionArgument; t0: GenericArg }

export function insert( tx: Transaction, typeArg: string, args: InsertArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::big_vector::insert`, typeArguments: [typeArg], arguments: [ obj(tx, args.bigVector), pure(tx, args.u128, `u128`), generic(tx, `${typeArg}`, args.t0) ], }) }

export function depth( tx: Transaction, typeArg: string, bigVector: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::big_vector::depth`, typeArguments: [typeArg], arguments: [ obj(tx, bigVector) ], }) }

export interface RemoveBatchArgs { bigVector: TransactionObjectInput; vecU128: Array<bigint | TransactionArgument> | TransactionArgument }

export function removeBatch( tx: Transaction, typeArg: string, args: RemoveBatchArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::big_vector::remove_batch`, typeArguments: [typeArg], arguments: [ obj(tx, args.bigVector), pure(tx, args.vecU128, `vector<u128>`) ], }) }

export interface SliceAroundArgs { bigVector: TransactionObjectInput; u128: bigint | TransactionArgument }

export function sliceAround( tx: Transaction, typeArg: string, args: SliceAroundArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::big_vector::slice_around`, typeArguments: [typeArg], arguments: [ obj(tx, args.bigVector), pure(tx, args.u128, `u128`) ], }) }

export interface SliceFollowingArgs { bigVector: TransactionObjectInput; u128: bigint | TransactionArgument }

export function sliceFollowing( tx: Transaction, typeArg: string, args: SliceFollowingArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::big_vector::slice_following`, typeArguments: [typeArg], arguments: [ obj(tx, args.bigVector), pure(tx, args.u128, `u128`) ], }) }

export interface SliceBeforeArgs { bigVector: TransactionObjectInput; u128: bigint | TransactionArgument }

export function sliceBefore( tx: Transaction, typeArg: string, args: SliceBeforeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::big_vector::slice_before`, typeArguments: [typeArg], arguments: [ obj(tx, args.bigVector), pure(tx, args.u128, `u128`) ], }) }

export function minSlice( tx: Transaction, typeArg: string, bigVector: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::big_vector::min_slice`, typeArguments: [typeArg], arguments: [ obj(tx, bigVector) ], }) }

export function maxSlice( tx: Transaction, typeArg: string, bigVector: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::big_vector::max_slice`, typeArguments: [typeArg], arguments: [ obj(tx, bigVector) ], }) }

export interface NextSliceArgs { bigVector: TransactionObjectInput; sliceRef: TransactionObjectInput; u64: bigint | TransactionArgument }

export function nextSlice( tx: Transaction, typeArg: string, args: NextSliceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::big_vector::next_slice`, typeArguments: [typeArg], arguments: [ obj(tx, args.bigVector), obj(tx, args.sliceRef), pure(tx, args.u64, `u64`) ], }) }

export interface PrevSliceArgs { bigVector: TransactionObjectInput; sliceRef: TransactionObjectInput; u64: bigint | TransactionArgument }

export function prevSlice( tx: Transaction, typeArg: string, args: PrevSliceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::big_vector::prev_slice`, typeArguments: [typeArg], arguments: [ obj(tx, args.bigVector), obj(tx, args.sliceRef), pure(tx, args.u64, `u64`) ], }) }

export interface BorrowSliceArgs { bigVector: TransactionObjectInput; sliceRef: TransactionObjectInput }

export function borrowSlice( tx: Transaction, typeArg: string, args: BorrowSliceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::big_vector::borrow_slice`, typeArguments: [typeArg], arguments: [ obj(tx, args.bigVector), obj(tx, args.sliceRef) ], }) }

export interface BorrowSliceMutArgs { bigVector: TransactionObjectInput; sliceRef: TransactionObjectInput }

export function borrowSliceMut( tx: Transaction, typeArg: string, args: BorrowSliceMutArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::big_vector::borrow_slice_mut`, typeArguments: [typeArg], arguments: [ obj(tx, args.bigVector), obj(tx, args.sliceRef) ], }) }

export function sliceIsNull( tx: Transaction, sliceRef: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::big_vector::slice_is_null`, arguments: [ obj(tx, sliceRef) ], }) }

export function sliceIsLeaf( tx: Transaction, typeArg: string, slice: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::big_vector::slice_is_leaf`, typeArguments: [typeArg], arguments: [ obj(tx, slice) ], }) }

export function sliceNext( tx: Transaction, typeArg: string, slice: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::big_vector::slice_next`, typeArguments: [typeArg], arguments: [ obj(tx, slice) ], }) }

export function slicePrev( tx: Transaction, typeArg: string, slice: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::big_vector::slice_prev`, typeArguments: [typeArg], arguments: [ obj(tx, slice) ], }) }

export function sliceLength( tx: Transaction, typeArg: string, slice: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::big_vector::slice_length`, typeArguments: [typeArg], arguments: [ obj(tx, slice) ], }) }

export interface SliceKeyArgs { slice: TransactionObjectInput; u64: bigint | TransactionArgument }

export function sliceKey( tx: Transaction, typeArg: string, args: SliceKeyArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::big_vector::slice_key`, typeArguments: [typeArg], arguments: [ obj(tx, args.slice), pure(tx, args.u64, `u64`) ], }) }

export interface SliceBorrowArgs { slice: TransactionObjectInput; u64: bigint | TransactionArgument }

export function sliceBorrow( tx: Transaction, typeArg: string, args: SliceBorrowArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::big_vector::slice_borrow`, typeArguments: [typeArg], arguments: [ obj(tx, args.slice), pure(tx, args.u64, `u64`) ], }) }

export interface SliceBorrowMutArgs { slice: TransactionObjectInput; u64: bigint | TransactionArgument }

export function sliceBorrowMut( tx: Transaction, typeArg: string, args: SliceBorrowMutArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::big_vector::slice_borrow_mut`, typeArguments: [typeArg], arguments: [ obj(tx, args.slice), pure(tx, args.u64, `u64`) ], }) }

export interface AllocArgs { bigVector: TransactionObjectInput; slice: TransactionObjectInput }

export function alloc( tx: Transaction, typeArgs: [string, string], args: AllocArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::big_vector::alloc`, typeArguments: typeArgs, arguments: [ obj(tx, args.bigVector), obj(tx, args.slice) ], }) }

export interface BranchArgs { u128: bigint | TransactionArgument; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument }

export function branch( tx: Transaction, args: BranchArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::big_vector::branch`, arguments: [ pure(tx, args.u128, `u128`), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`) ], }) }

export interface DropSliceArgs { uid: TransactionObjectInput; u8: number | TransactionArgument; u64: bigint | TransactionArgument }

export function dropSlice( tx: Transaction, typeArg: string, args: DropSliceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::big_vector::drop_slice`, typeArguments: [typeArg], arguments: [ obj(tx, args.uid), pure(tx, args.u8, `u8`), pure(tx, args.u64, `u64`) ], }) }

export interface FindLeafArgs { bigVector: TransactionObjectInput; u128: bigint | TransactionArgument }

export function findLeaf( tx: Transaction, typeArg: string, args: FindLeafArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::big_vector::find_leaf`, typeArguments: [typeArg], arguments: [ obj(tx, args.bigVector), pure(tx, args.u128, `u128`) ], }) }

export function findMinLeaf( tx: Transaction, typeArg: string, bigVector: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::big_vector::find_min_leaf`, typeArguments: [typeArg], arguments: [ obj(tx, bigVector) ], }) }

export function findMaxLeaf( tx: Transaction, typeArg: string, bigVector: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::big_vector::find_max_leaf`, typeArguments: [typeArg], arguments: [ obj(tx, bigVector) ], }) }

export interface SliceBisectLeftArgs { slice: TransactionObjectInput; u128: bigint | TransactionArgument }

export function sliceBisectLeft( tx: Transaction, typeArg: string, args: SliceBisectLeftArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::big_vector::slice_bisect_left`, typeArguments: [typeArg], arguments: [ obj(tx, args.slice), pure(tx, args.u128, `u128`) ], }) }

export interface SliceBisectRightArgs { slice: TransactionObjectInput; u128: bigint | TransactionArgument }

export function sliceBisectRight( tx: Transaction, typeArg: string, args: SliceBisectRightArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::big_vector::slice_bisect_right`, typeArguments: [typeArg], arguments: [ obj(tx, args.slice), pure(tx, args.u128, `u128`) ], }) }

export interface SliceInsertArgs { bigVector: TransactionObjectInput; u64: bigint | TransactionArgument; u8: number | TransactionArgument; u128: bigint | TransactionArgument; t0: GenericArg }

export function sliceInsert( tx: Transaction, typeArg: string, args: SliceInsertArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::big_vector::slice_insert`, typeArguments: [typeArg], arguments: [ obj(tx, args.bigVector), pure(tx, args.u64, `u64`), pure(tx, args.u8, `u8`), pure(tx, args.u128, `u128`), generic(tx, `${typeArg}`, args.t0) ], }) }

export interface LeafInsertArgs { bigVector: TransactionObjectInput; u64: bigint | TransactionArgument; u128: bigint | TransactionArgument; t0: GenericArg }

export function leafInsert( tx: Transaction, typeArg: string, args: LeafInsertArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::big_vector::leaf_insert`, typeArguments: [typeArg], arguments: [ obj(tx, args.bigVector), pure(tx, args.u64, `u64`), pure(tx, args.u128, `u128`), generic(tx, `${typeArg}`, args.t0) ], }) }

export interface NodeInsertArgs { bigVector: TransactionObjectInput; u64: bigint | TransactionArgument; u8: number | TransactionArgument; u128: bigint | TransactionArgument; t0: GenericArg }

export function nodeInsert( tx: Transaction, typeArg: string, args: NodeInsertArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::big_vector::node_insert`, typeArguments: [typeArg], arguments: [ obj(tx, args.bigVector), pure(tx, args.u64, `u64`), pure(tx, args.u8, `u8`), pure(tx, args.u128, `u128`), generic(tx, `${typeArg}`, args.t0) ], }) }

export interface SliceRemoveArgs { bigVector: TransactionObjectInput; u641: bigint | TransactionArgument; u1281: bigint | TransactionArgument; u642: bigint | TransactionArgument; u1282: bigint | TransactionArgument; u643: bigint | TransactionArgument; u8: number | TransactionArgument; u1283: bigint | TransactionArgument }

export function sliceRemove( tx: Transaction, typeArg: string, args: SliceRemoveArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::big_vector::slice_remove`, typeArguments: [typeArg], arguments: [ obj(tx, args.bigVector), pure(tx, args.u641, `u64`), pure(tx, args.u1281, `u128`), pure(tx, args.u642, `u64`), pure(tx, args.u1282, `u128`), pure(tx, args.u643, `u64`), pure(tx, args.u8, `u8`), pure(tx, args.u1283, `u128`) ], }) }

export interface LeafRemoveArgs { bigVector: TransactionObjectInput; u641: bigint | TransactionArgument; u1281: bigint | TransactionArgument; u642: bigint | TransactionArgument; u1282: bigint | TransactionArgument; u643: bigint | TransactionArgument; u1283: bigint | TransactionArgument }

export function leafRemove( tx: Transaction, typeArg: string, args: LeafRemoveArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::big_vector::leaf_remove`, typeArguments: [typeArg], arguments: [ obj(tx, args.bigVector), pure(tx, args.u641, `u64`), pure(tx, args.u1281, `u128`), pure(tx, args.u642, `u64`), pure(tx, args.u1282, `u128`), pure(tx, args.u643, `u64`), pure(tx, args.u1283, `u128`) ], }) }

export interface NodeRemoveArgs { bigVector: TransactionObjectInput; u641: bigint | TransactionArgument; u1281: bigint | TransactionArgument; u642: bigint | TransactionArgument; u1282: bigint | TransactionArgument; u643: bigint | TransactionArgument; u8: number | TransactionArgument; u1283: bigint | TransactionArgument }

export function nodeRemove( tx: Transaction, typeArg: string, args: NodeRemoveArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::big_vector::node_remove`, typeArguments: [typeArg], arguments: [ obj(tx, args.bigVector), pure(tx, args.u641, `u64`), pure(tx, args.u1281, `u128`), pure(tx, args.u642, `u64`), pure(tx, args.u1282, `u128`), pure(tx, args.u643, `u64`), pure(tx, args.u8, `u8`), pure(tx, args.u1283, `u128`) ], }) }

export interface SliceRedistributeArgs { bigVector: TransactionObjectInput; u641: bigint | TransactionArgument; u128: bigint | TransactionArgument; u642: bigint | TransactionArgument }

export function sliceRedistribute( tx: Transaction, typeArgs: [string, string], args: SliceRedistributeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::big_vector::slice_redistribute`, typeArguments: typeArgs, arguments: [ obj(tx, args.bigVector), pure(tx, args.u641, `u64`), pure(tx, args.u128, `u128`), pure(tx, args.u642, `u64`) ], }) }

export interface SliceMergeArgs { bigVector: TransactionObjectInput; u641: bigint | TransactionArgument; u128: bigint | TransactionArgument; u642: bigint | TransactionArgument }

export function sliceMerge( tx: Transaction, typeArgs: [string, string], args: SliceMergeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::big_vector::slice_merge`, typeArguments: typeArgs, arguments: [ obj(tx, args.bigVector), pure(tx, args.u641, `u64`), pure(tx, args.u128, `u128`), pure(tx, args.u642, `u64`) ], }) }
