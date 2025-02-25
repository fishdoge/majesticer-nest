import * as reified from "../../_framework/reified";
import {Balance} from "../../_dependencies/onchain/0x2/balance/structs";
import {ID} from "../../_dependencies/onchain/0x2/object/structs";
import {DEEP} from "../../_dependencies/onchain/0xdeeb7a4662eec9f2f3def03fb937a663dddaa2e215b8078a284d026b7946c270/deep/structs";
import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, phantom, ToTypeStr as ToPhantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName} from "../../_framework/util";
import {TypeName} from "../../std/type-name/structs";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== Vault =============================== */

export function isVault(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::vault::Vault` + '<'); }

export interface VaultFields<T0 extends PhantomTypeArgument, T1 extends PhantomTypeArgument> { baseBalance: ToField<Balance<T0>>; quoteBalance: ToField<Balance<T1>>; deepBalance: ToField<Balance<ToPhantom<DEEP>>> }

export type VaultReified<T0 extends PhantomTypeArgument, T1 extends PhantomTypeArgument> = Reified< Vault<T0, T1>, VaultFields<T0, T1> >;

export class Vault<T0 extends PhantomTypeArgument, T1 extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::vault::Vault`; static readonly $numTypeParams = 2; static readonly $isPhantom = [true,true,] as const;

 readonly $typeName = Vault.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::vault::Vault<${PhantomToTypeStr<T0>}, ${PhantomToTypeStr<T1>}>`; readonly $typeArgs: [PhantomToTypeStr<T0>, PhantomToTypeStr<T1>]; readonly $isPhantom = Vault.$isPhantom;

 readonly baseBalance: ToField<Balance<T0>>; readonly quoteBalance: ToField<Balance<T1>>; readonly deepBalance: ToField<Balance<ToPhantom<DEEP>>>

 private constructor(typeArgs: [PhantomToTypeStr<T0>, PhantomToTypeStr<T1>], fields: VaultFields<T0, T1>, ) { this.$fullTypeName = composeSuiType( Vault.$typeName, ...typeArgs ) as `${typeof PKG_V1}::vault::Vault<${PhantomToTypeStr<T0>}, ${PhantomToTypeStr<T1>}>`; this.$typeArgs = typeArgs;

 this.baseBalance = fields.baseBalance;; this.quoteBalance = fields.quoteBalance;; this.deepBalance = fields.deepBalance; }

 static reified<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( T0: T0, T1: T1 ): VaultReified<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { return { typeName: Vault.$typeName, fullTypeName: composeSuiType( Vault.$typeName, ...[extractType(T0), extractType(T1)] ) as `${typeof PKG_V1}::vault::Vault<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<T1>>}>`, typeArgs: [ extractType(T0), extractType(T1) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T0>>, PhantomToTypeStr<ToPhantomTypeArgument<T1>>], isPhantom: Vault.$isPhantom, reifiedTypeArgs: [T0, T1], fromFields: (fields: Record<string, any>) => Vault.fromFields( [T0, T1], fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Vault.fromFieldsWithTypes( [T0, T1], item, ), fromBcs: (data: Uint8Array) => Vault.fromBcs( [T0, T1], data, ), bcs: Vault.bcs, fromJSONField: (field: any) => Vault.fromJSONField( [T0, T1], field, ), fromJSON: (json: Record<string, any>) => Vault.fromJSON( [T0, T1], json, ), fromSuiParsedData: (content: SuiParsedData) => Vault.fromSuiParsedData( [T0, T1], content, ), fromSuiObjectData: (content: SuiObjectData) => Vault.fromSuiObjectData( [T0, T1], content, ), fetch: async (client: SuiClient, id: string) => Vault.fetch( client, [T0, T1], id, ), new: ( fields: VaultFields<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>>, ) => { return new Vault( [extractType(T0), extractType(T1)], fields ) }, kind: "StructClassReified", } }

 static get r() { return Vault.reified }

 static phantom<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( T0: T0, T1: T1 ): PhantomReified<ToTypeStr<Vault<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>>>> { return phantom(Vault.reified( T0, T1 )); } static get p() { return Vault.phantom }

 static get bcs() { return bcs.struct("Vault", {

 base_balance: Balance.bcs, quote_balance: Balance.bcs, deep_balance: Balance.bcs

}) };

 static fromFields<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], fields: Record<string, any> ): Vault<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { return Vault.reified( typeArgs[0], typeArgs[1], ).new( { baseBalance: decodeFromFields(Balance.reified(typeArgs[0]), fields.base_balance), quoteBalance: decodeFromFields(Balance.reified(typeArgs[1]), fields.quote_balance), deepBalance: decodeFromFields(Balance.reified(reified.phantom(DEEP.reified())), fields.deep_balance) } ) }

 static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], item: FieldsWithTypes ): Vault<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { if (!isVault(item.type)) { throw new Error("not a Vault type");

 } assertFieldsWithTypesArgsMatch(item, typeArgs);

 return Vault.reified( typeArgs[0], typeArgs[1], ).new( { baseBalance: decodeFromFieldsWithTypes(Balance.reified(typeArgs[0]), item.fields.base_balance), quoteBalance: decodeFromFieldsWithTypes(Balance.reified(typeArgs[1]), item.fields.quote_balance), deepBalance: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(DEEP.reified())), item.fields.deep_balance) } ) }

 static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], data: Uint8Array ): Vault<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { return Vault.fromFields( typeArgs, Vault.bcs.parse(data) ) }

 toJSONField() { return {

 baseBalance: this.baseBalance.toJSONField(),quoteBalance: this.quoteBalance.toJSONField(),deepBalance: this.deepBalance.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], field: any ): Vault<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { return Vault.reified( typeArgs[0], typeArgs[1], ).new( { baseBalance: decodeFromJSONField(Balance.reified(typeArgs[0]), field.baseBalance), quoteBalance: decodeFromJSONField(Balance.reified(typeArgs[1]), field.quoteBalance), deepBalance: decodeFromJSONField(Balance.reified(reified.phantom(DEEP.reified())), field.deepBalance) } ) }

 static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], json: Record<string, any> ): Vault<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { if (json.$typeName !== Vault.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(Vault.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs, )

 return Vault.fromJSONField( typeArgs, json, ) }

 static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], content: SuiParsedData ): Vault<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isVault(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Vault object`); } return Vault.fromFieldsWithTypes( typeArgs, content ); }

 static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], data: SuiObjectData ): Vault<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isVault(data.bcs.type)) { throw new Error(`object at is not a Vault object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 2) { throw new Error(`type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 2; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

 return Vault.fromBcs( typeArgs, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Vault.fromSuiParsedData( typeArgs, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArgs: [T0, T1], id: string ): Promise<Vault<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Vault object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isVault(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Vault object`); }

 return Vault.fromSuiObjectData( typeArgs, res.data ); }

 }

/* ============================== FlashLoan =============================== */

export function isFlashLoan(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::vault::FlashLoan`; }

export interface FlashLoanFields { poolId: ToField<ID>; borrowQuantity: ToField<"u64">; typeName: ToField<TypeName> }

export type FlashLoanReified = Reified< FlashLoan, FlashLoanFields >;

export class FlashLoan implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::vault::FlashLoan`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = FlashLoan.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::vault::FlashLoan`; readonly $typeArgs: []; readonly $isPhantom = FlashLoan.$isPhantom;

 readonly poolId: ToField<ID>; readonly borrowQuantity: ToField<"u64">; readonly typeName: ToField<TypeName>

 private constructor(typeArgs: [], fields: FlashLoanFields, ) { this.$fullTypeName = composeSuiType( FlashLoan.$typeName, ...typeArgs ) as `${typeof PKG_V1}::vault::FlashLoan`; this.$typeArgs = typeArgs;

 this.poolId = fields.poolId;; this.borrowQuantity = fields.borrowQuantity;; this.typeName = fields.typeName; }

 static reified( ): FlashLoanReified { return { typeName: FlashLoan.$typeName, fullTypeName: composeSuiType( FlashLoan.$typeName, ...[] ) as `${typeof PKG_V1}::vault::FlashLoan`, typeArgs: [ ] as [], isPhantom: FlashLoan.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => FlashLoan.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => FlashLoan.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => FlashLoan.fromBcs( data, ), bcs: FlashLoan.bcs, fromJSONField: (field: any) => FlashLoan.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => FlashLoan.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => FlashLoan.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => FlashLoan.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => FlashLoan.fetch( client, id, ), new: ( fields: FlashLoanFields, ) => { return new FlashLoan( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return FlashLoan.reified() }

 static phantom( ): PhantomReified<ToTypeStr<FlashLoan>> { return phantom(FlashLoan.reified( )); } static get p() { return FlashLoan.phantom() }

 static get bcs() { return bcs.struct("FlashLoan", {

 pool_id: ID.bcs, borrow_quantity: bcs.u64(), type_name: TypeName.bcs

}) };

 static fromFields( fields: Record<string, any> ): FlashLoan { return FlashLoan.reified( ).new( { poolId: decodeFromFields(ID.reified(), fields.pool_id), borrowQuantity: decodeFromFields("u64", fields.borrow_quantity), typeName: decodeFromFields(TypeName.reified(), fields.type_name) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): FlashLoan { if (!isFlashLoan(item.type)) { throw new Error("not a FlashLoan type");

 }

 return FlashLoan.reified( ).new( { poolId: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool_id), borrowQuantity: decodeFromFieldsWithTypes("u64", item.fields.borrow_quantity), typeName: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.type_name) } ) }

 static fromBcs( data: Uint8Array ): FlashLoan { return FlashLoan.fromFields( FlashLoan.bcs.parse(data) ) }

 toJSONField() { return {

 poolId: this.poolId,borrowQuantity: this.borrowQuantity.toString(),typeName: this.typeName.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): FlashLoan { return FlashLoan.reified( ).new( { poolId: decodeFromJSONField(ID.reified(), field.poolId), borrowQuantity: decodeFromJSONField("u64", field.borrowQuantity), typeName: decodeFromJSONField(TypeName.reified(), field.typeName) } ) }

 static fromJSON( json: Record<string, any> ): FlashLoan { if (json.$typeName !== FlashLoan.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return FlashLoan.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): FlashLoan { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isFlashLoan(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a FlashLoan object`); } return FlashLoan.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): FlashLoan { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isFlashLoan(data.bcs.type)) { throw new Error(`object at is not a FlashLoan object`); }

 return FlashLoan.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return FlashLoan.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<FlashLoan> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching FlashLoan object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isFlashLoan(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a FlashLoan object`); }

 return FlashLoan.fromSuiObjectData( res.data ); }

 }

/* ============================== FlashLoanBorrowed =============================== */

export function isFlashLoanBorrowed(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::vault::FlashLoanBorrowed`; }

export interface FlashLoanBorrowedFields { poolId: ToField<ID>; borrowQuantity: ToField<"u64">; typeName: ToField<TypeName> }

export type FlashLoanBorrowedReified = Reified< FlashLoanBorrowed, FlashLoanBorrowedFields >;

export class FlashLoanBorrowed implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::vault::FlashLoanBorrowed`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = FlashLoanBorrowed.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::vault::FlashLoanBorrowed`; readonly $typeArgs: []; readonly $isPhantom = FlashLoanBorrowed.$isPhantom;

 readonly poolId: ToField<ID>; readonly borrowQuantity: ToField<"u64">; readonly typeName: ToField<TypeName>

 private constructor(typeArgs: [], fields: FlashLoanBorrowedFields, ) { this.$fullTypeName = composeSuiType( FlashLoanBorrowed.$typeName, ...typeArgs ) as `${typeof PKG_V1}::vault::FlashLoanBorrowed`; this.$typeArgs = typeArgs;

 this.poolId = fields.poolId;; this.borrowQuantity = fields.borrowQuantity;; this.typeName = fields.typeName; }

 static reified( ): FlashLoanBorrowedReified { return { typeName: FlashLoanBorrowed.$typeName, fullTypeName: composeSuiType( FlashLoanBorrowed.$typeName, ...[] ) as `${typeof PKG_V1}::vault::FlashLoanBorrowed`, typeArgs: [ ] as [], isPhantom: FlashLoanBorrowed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => FlashLoanBorrowed.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => FlashLoanBorrowed.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => FlashLoanBorrowed.fromBcs( data, ), bcs: FlashLoanBorrowed.bcs, fromJSONField: (field: any) => FlashLoanBorrowed.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => FlashLoanBorrowed.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => FlashLoanBorrowed.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => FlashLoanBorrowed.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => FlashLoanBorrowed.fetch( client, id, ), new: ( fields: FlashLoanBorrowedFields, ) => { return new FlashLoanBorrowed( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return FlashLoanBorrowed.reified() }

 static phantom( ): PhantomReified<ToTypeStr<FlashLoanBorrowed>> { return phantom(FlashLoanBorrowed.reified( )); } static get p() { return FlashLoanBorrowed.phantom() }

 static get bcs() { return bcs.struct("FlashLoanBorrowed", {

 pool_id: ID.bcs, borrow_quantity: bcs.u64(), type_name: TypeName.bcs

}) };

 static fromFields( fields: Record<string, any> ): FlashLoanBorrowed { return FlashLoanBorrowed.reified( ).new( { poolId: decodeFromFields(ID.reified(), fields.pool_id), borrowQuantity: decodeFromFields("u64", fields.borrow_quantity), typeName: decodeFromFields(TypeName.reified(), fields.type_name) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): FlashLoanBorrowed { if (!isFlashLoanBorrowed(item.type)) { throw new Error("not a FlashLoanBorrowed type");

 }

 return FlashLoanBorrowed.reified( ).new( { poolId: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool_id), borrowQuantity: decodeFromFieldsWithTypes("u64", item.fields.borrow_quantity), typeName: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.type_name) } ) }

 static fromBcs( data: Uint8Array ): FlashLoanBorrowed { return FlashLoanBorrowed.fromFields( FlashLoanBorrowed.bcs.parse(data) ) }

 toJSONField() { return {

 poolId: this.poolId,borrowQuantity: this.borrowQuantity.toString(),typeName: this.typeName.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): FlashLoanBorrowed { return FlashLoanBorrowed.reified( ).new( { poolId: decodeFromJSONField(ID.reified(), field.poolId), borrowQuantity: decodeFromJSONField("u64", field.borrowQuantity), typeName: decodeFromJSONField(TypeName.reified(), field.typeName) } ) }

 static fromJSON( json: Record<string, any> ): FlashLoanBorrowed { if (json.$typeName !== FlashLoanBorrowed.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return FlashLoanBorrowed.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): FlashLoanBorrowed { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isFlashLoanBorrowed(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a FlashLoanBorrowed object`); } return FlashLoanBorrowed.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): FlashLoanBorrowed { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isFlashLoanBorrowed(data.bcs.type)) { throw new Error(`object at is not a FlashLoanBorrowed object`); }

 return FlashLoanBorrowed.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return FlashLoanBorrowed.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<FlashLoanBorrowed> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching FlashLoanBorrowed object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isFlashLoanBorrowed(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a FlashLoanBorrowed object`); }

 return FlashLoanBorrowed.fromSuiObjectData( res.data ); }

 }
