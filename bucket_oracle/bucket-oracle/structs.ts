import {UID} from "../../_dependencies/onchain/0x2/object/structs";
import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName} from "../../_framework/util";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== AdminCap =============================== */

export function isAdminCap(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::bucket_oracle::AdminCap`; }

export interface AdminCapFields { id: ToField<UID> }

export type AdminCapReified = Reified< AdminCap, AdminCapFields >;

export class AdminCap implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::bucket_oracle::AdminCap`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = AdminCap.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::bucket_oracle::AdminCap`; readonly $typeArgs: []; readonly $isPhantom = AdminCap.$isPhantom;

 readonly id: ToField<UID>

 private constructor(typeArgs: [], fields: AdminCapFields, ) { this.$fullTypeName = composeSuiType( AdminCap.$typeName, ...typeArgs ) as `${typeof PKG_V1}::bucket_oracle::AdminCap`; this.$typeArgs = typeArgs;

 this.id = fields.id; }

 static reified( ): AdminCapReified { return { typeName: AdminCap.$typeName, fullTypeName: composeSuiType( AdminCap.$typeName, ...[] ) as `${typeof PKG_V1}::bucket_oracle::AdminCap`, typeArgs: [ ] as [], isPhantom: AdminCap.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => AdminCap.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => AdminCap.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => AdminCap.fromBcs( data, ), bcs: AdminCap.bcs, fromJSONField: (field: any) => AdminCap.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => AdminCap.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => AdminCap.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => AdminCap.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => AdminCap.fetch( client, id, ), new: ( fields: AdminCapFields, ) => { return new AdminCap( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return AdminCap.reified() }

 static phantom( ): PhantomReified<ToTypeStr<AdminCap>> { return phantom(AdminCap.reified( )); } static get p() { return AdminCap.phantom() }

 static get bcs() { return bcs.struct("AdminCap", {

 id: UID.bcs

}) };

 static fromFields( fields: Record<string, any> ): AdminCap { return AdminCap.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): AdminCap { if (!isAdminCap(item.type)) { throw new Error("not a AdminCap type");

 }

 return AdminCap.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id) } ) }

 static fromBcs( data: Uint8Array ): AdminCap { return AdminCap.fromFields( AdminCap.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): AdminCap { return AdminCap.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id) } ) }

 static fromJSON( json: Record<string, any> ): AdminCap { if (json.$typeName !== AdminCap.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return AdminCap.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): AdminCap { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isAdminCap(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a AdminCap object`); } return AdminCap.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): AdminCap { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isAdminCap(data.bcs.type)) { throw new Error(`object at is not a AdminCap object`); }

 return AdminCap.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return AdminCap.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<AdminCap> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching AdminCap object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isAdminCap(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a AdminCap object`); }

 return AdminCap.fromSuiObjectData( res.data ); }

 }

/* ============================== BucketOracle =============================== */

export function isBucketOracle(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::bucket_oracle::BucketOracle`; }

export interface BucketOracleFields { id: ToField<UID>; version: ToField<"u64"> }

export type BucketOracleReified = Reified< BucketOracle, BucketOracleFields >;

export class BucketOracle implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::bucket_oracle::BucketOracle`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = BucketOracle.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::bucket_oracle::BucketOracle`; readonly $typeArgs: []; readonly $isPhantom = BucketOracle.$isPhantom;

 readonly id: ToField<UID>; readonly version: ToField<"u64">

 private constructor(typeArgs: [], fields: BucketOracleFields, ) { this.$fullTypeName = composeSuiType( BucketOracle.$typeName, ...typeArgs ) as `${typeof PKG_V1}::bucket_oracle::BucketOracle`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.version = fields.version; }

 static reified( ): BucketOracleReified { return { typeName: BucketOracle.$typeName, fullTypeName: composeSuiType( BucketOracle.$typeName, ...[] ) as `${typeof PKG_V1}::bucket_oracle::BucketOracle`, typeArgs: [ ] as [], isPhantom: BucketOracle.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BucketOracle.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BucketOracle.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BucketOracle.fromBcs( data, ), bcs: BucketOracle.bcs, fromJSONField: (field: any) => BucketOracle.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BucketOracle.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BucketOracle.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => BucketOracle.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => BucketOracle.fetch( client, id, ), new: ( fields: BucketOracleFields, ) => { return new BucketOracle( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BucketOracle.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BucketOracle>> { return phantom(BucketOracle.reified( )); } static get p() { return BucketOracle.phantom() }

 static get bcs() { return bcs.struct("BucketOracle", {

 id: UID.bcs, version: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): BucketOracle { return BucketOracle.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), version: decodeFromFields("u64", fields.version) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BucketOracle { if (!isBucketOracle(item.type)) { throw new Error("not a BucketOracle type");

 }

 return BucketOracle.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), version: decodeFromFieldsWithTypes("u64", item.fields.version) } ) }

 static fromBcs( data: Uint8Array ): BucketOracle { return BucketOracle.fromFields( BucketOracle.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,version: this.version.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BucketOracle { return BucketOracle.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), version: decodeFromJSONField("u64", field.version) } ) }

 static fromJSON( json: Record<string, any> ): BucketOracle { if (json.$typeName !== BucketOracle.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BucketOracle.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BucketOracle { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBucketOracle(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BucketOracle object`); } return BucketOracle.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): BucketOracle { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBucketOracle(data.bcs.type)) { throw new Error(`object at is not a BucketOracle object`); }

 return BucketOracle.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BucketOracle.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<BucketOracle> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BucketOracle object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBucketOracle(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BucketOracle object`); }

 return BucketOracle.fromSuiObjectData( res.data ); }

 }

/* ============================== PriceType =============================== */

export function isPriceType(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::bucket_oracle::PriceType` + '<'); }

export interface PriceTypeFields<T0 extends PhantomTypeArgument> { dummyField: ToField<"bool"> }

export type PriceTypeReified<T0 extends PhantomTypeArgument> = Reified< PriceType<T0>, PriceTypeFields<T0> >;

export class PriceType<T0 extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::bucket_oracle::PriceType`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = PriceType.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::bucket_oracle::PriceType<${PhantomToTypeStr<T0>}>`; readonly $typeArgs: [PhantomToTypeStr<T0>]; readonly $isPhantom = PriceType.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [PhantomToTypeStr<T0>], fields: PriceTypeFields<T0>, ) { this.$fullTypeName = composeSuiType( PriceType.$typeName, ...typeArgs ) as `${typeof PKG_V1}::bucket_oracle::PriceType<${PhantomToTypeStr<T0>}>`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified<T0 extends PhantomReified<PhantomTypeArgument>>( T0: T0 ): PriceTypeReified<ToPhantomTypeArgument<T0>> { return { typeName: PriceType.$typeName, fullTypeName: composeSuiType( PriceType.$typeName, ...[extractType(T0)] ) as `${typeof PKG_V1}::bucket_oracle::PriceType<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`, typeArgs: [ extractType(T0) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T0>>], isPhantom: PriceType.$isPhantom, reifiedTypeArgs: [T0], fromFields: (fields: Record<string, any>) => PriceType.fromFields( T0, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => PriceType.fromFieldsWithTypes( T0, item, ), fromBcs: (data: Uint8Array) => PriceType.fromBcs( T0, data, ), bcs: PriceType.bcs, fromJSONField: (field: any) => PriceType.fromJSONField( T0, field, ), fromJSON: (json: Record<string, any>) => PriceType.fromJSON( T0, json, ), fromSuiParsedData: (content: SuiParsedData) => PriceType.fromSuiParsedData( T0, content, ), fromSuiObjectData: (content: SuiObjectData) => PriceType.fromSuiObjectData( T0, content, ), fetch: async (client: SuiClient, id: string) => PriceType.fetch( client, T0, id, ), new: ( fields: PriceTypeFields<ToPhantomTypeArgument<T0>>, ) => { return new PriceType( [extractType(T0)], fields ) }, kind: "StructClassReified", } }

 static get r() { return PriceType.reified }

 static phantom<T0 extends PhantomReified<PhantomTypeArgument>>( T0: T0 ): PhantomReified<ToTypeStr<PriceType<ToPhantomTypeArgument<T0>>>> { return phantom(PriceType.reified( T0 )); } static get p() { return PriceType.phantom }

 static get bcs() { return bcs.struct("PriceType", {

 dummy_field: bcs.bool()

}) };

 static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, fields: Record<string, any> ): PriceType<ToPhantomTypeArgument<T0>> { return PriceType.reified( typeArg, ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, item: FieldsWithTypes ): PriceType<ToPhantomTypeArgument<T0>> { if (!isPriceType(item.type)) { throw new Error("not a PriceType type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return PriceType.reified( typeArg, ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, data: Uint8Array ): PriceType<ToPhantomTypeArgument<T0>> { return PriceType.fromFields( typeArg, PriceType.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, field: any ): PriceType<ToPhantomTypeArgument<T0>> { return PriceType.reified( typeArg, ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, json: Record<string, any> ): PriceType<ToPhantomTypeArgument<T0>> { if (json.$typeName !== PriceType.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(PriceType.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return PriceType.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, content: SuiParsedData ): PriceType<ToPhantomTypeArgument<T0>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPriceType(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a PriceType object`); } return PriceType.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, data: SuiObjectData ): PriceType<ToPhantomTypeArgument<T0>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isPriceType(data.bcs.type)) { throw new Error(`object at is not a PriceType object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return PriceType.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return PriceType.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: T0, id: string ): Promise<PriceType<ToPhantomTypeArgument<T0>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching PriceType object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPriceType(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a PriceType object`); }

 return PriceType.fromSuiObjectData( typeArg, res.data ); }

 }
