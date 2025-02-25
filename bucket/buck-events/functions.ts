import {PUBLISHED_AT} from "..";
import {ID} from "../../_dependencies/onchain/0x2/object/structs";
import {pure} from "../../_framework/util";
import {Option} from "../../std/option/structs";
import {Transaction, TransactionArgument} from "@mysten/sui/transactions";

export function emitBuckMinted( tx: Transaction, typeArg: string, u64: bigint | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck_events::emit_buck_minted`, typeArguments: [typeArg], arguments: [ pure(tx, u64, `u64`) ], }) }

export function emitBuckBurnt( tx: Transaction, typeArg: string, u64: bigint | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck_events::emit_buck_burnt`, typeArguments: [typeArg], arguments: [ pure(tx, u64, `u64`) ], }) }

export function emitCollateralIncreased( tx: Transaction, typeArg: string, u64: bigint | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck_events::emit_collateral_increased`, typeArguments: [typeArg], arguments: [ pure(tx, u64, `u64`) ], }) }

export function emitCollateralDecreased( tx: Transaction, typeArg: string, u64: bigint | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck_events::emit_collateral_decreased`, typeArguments: [typeArg], arguments: [ pure(tx, u64, `u64`) ], }) }

export function emitFlashLoan( tx: Transaction, typeArg: string, u64: bigint | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck_events::emit_flash_loan`, typeArguments: [typeArg], arguments: [ pure(tx, u64, `u64`) ], }) }

export interface EmitFlashMintArgs { id: string | TransactionArgument; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument }

export function emitFlashMint( tx: Transaction, args: EmitFlashMintArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck_events::emit_flash_mint`, arguments: [ pure(tx, args.id, `${ID.$typeName}`), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`) ], }) }

export interface EmitParamUpdatedArgs { vecU8: Array<number | TransactionArgument> | TransactionArgument; u64: bigint | TransactionArgument }

export function emitParamUpdated( tx: Transaction, typeArg: string, args: EmitParamUpdatedArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck_events::emit_param_updated`, typeArguments: [typeArg], arguments: [ pure(tx, args.vecU8, `vector<u8>`), pure(tx, args.u64, `u64`) ], }) }

export interface EmitLiquidationArgs { u641: bigint | TransactionArgument; u642: bigint | TransactionArgument; u643: bigint | TransactionArgument; u644: bigint | TransactionArgument; option: (bigint | TransactionArgument | TransactionArgument | null); address: string | TransactionArgument }

export function emitLiquidation( tx: Transaction, typeArg: string, args: EmitLiquidationArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::buck_events::emit_liquidation`, typeArguments: [typeArg], arguments: [ pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`), pure(tx, args.u643, `u64`), pure(tx, args.u644, `u64`), pure(tx, args.option, `${Option.$typeName}<u64>`), pure(tx, args.address, `address`) ], }) }
