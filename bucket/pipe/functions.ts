import {PUBLISHED_AT} from "..";
import {GenericArg, generic, obj} from "../../_framework/util";
import {Transaction, TransactionObjectInput} from "@mysten/sui/transactions";

export function errInputTooMuch( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pipe::err_input_too_much`, arguments: [ ], }) }

export function errDestroyNonEmptyPipe( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pipe::err_destroy_non_empty_pipe`, arguments: [ ], }) }

export function newType( tx: Transaction, typeArgs: [string, string], ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pipe::new_type`, typeArguments: typeArgs, arguments: [ ], }) }

export function newPipe( tx: Transaction, typeArgs: [string, string], ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pipe::new_pipe`, typeArguments: typeArgs, arguments: [ ], }) }

export function destroyPipe( tx: Transaction, typeArgs: [string, string], pipe: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pipe::destroy_pipe`, typeArguments: typeArgs, arguments: [ obj(tx, pipe) ], }) }

export function destroyBuckPipe( tx: Transaction, typeArgs: [string, string], pipe: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pipe::destroy_buck_pipe`, typeArguments: typeArgs, arguments: [ obj(tx, pipe) ], }) }

export interface OutputArgs { pipe: TransactionObjectInput; balance: TransactionObjectInput }

export function output( tx: Transaction, typeArgs: [string, string], args: OutputArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pipe::output`, typeArguments: typeArgs, arguments: [ obj(tx, args.pipe), obj(tx, args.balance) ], }) }

export interface DestroyOutputCarrierArgs { t1: GenericArg; outputCarrier: TransactionObjectInput }

export function destroyOutputCarrier( tx: Transaction, typeArgs: [string, string], args: DestroyOutputCarrierArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pipe::destroy_output_carrier`, typeArguments: typeArgs, arguments: [ generic(tx, `${typeArgs[1]}`, args.t1), obj(tx, args.outputCarrier) ], }) }

export interface InputArgs { t1: GenericArg; balance: TransactionObjectInput }

export function input( tx: Transaction, typeArgs: [string, string], args: InputArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pipe::input`, typeArguments: typeArgs, arguments: [ generic(tx, `${typeArgs[1]}`, args.t1), obj(tx, args.balance) ], }) }

export interface DestroyInputCarrierArgs { pipe: TransactionObjectInput; inputCarrier: TransactionObjectInput }

export function destroyInputCarrier( tx: Transaction, typeArgs: [string, string], args: DestroyInputCarrierArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pipe::destroy_input_carrier`, typeArguments: typeArgs, arguments: [ obj(tx, args.pipe), obj(tx, args.inputCarrier) ], }) }

export function outputVolume( tx: Transaction, typeArgs: [string, string], pipe: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pipe::output_volume`, typeArguments: typeArgs, arguments: [ obj(tx, pipe) ], }) }

export function outputCarrierVolume( tx: Transaction, typeArgs: [string, string], outputCarrier: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pipe::output_carrier_volume`, typeArguments: typeArgs, arguments: [ obj(tx, outputCarrier) ], }) }

export function inputCarrierVolume( tx: Transaction, typeArgs: [string, string], inputCarrier: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pipe::input_carrier_volume`, typeArguments: typeArgs, arguments: [ obj(tx, inputCarrier) ], }) }
