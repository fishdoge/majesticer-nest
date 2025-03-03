import * as reified from "../../_framework/reified";
import {UID} from "../../_dependencies/onchain/0x2/object/structs";
import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeArgument, ToTypeStr, TypeArgument, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, fieldToJSON, phantom, toBcs} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName} from "../../_framework/util";
import {Vector} from "../../_framework/vector";
import {PKG_V1} from "../index";
import {BcsType, bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== BigVector =============================== */

export function isBigVector(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::big_vector::BigVector` + '<'); }

export interface BigVectorFields<T0 extends PhantomTypeArgument> { id: ToField<UID>; depth: ToField<"u8">; length: ToField<"u64">; maxSliceSize: ToField<"u64">; maxFanOut: ToField<"u64">; rootId: ToField<"u64">; lastId: ToField<"u64"> }

export type BigVectorReified<T0 extends PhantomTypeArgument> = Reified< BigVector<T0>, BigVectorFields<T0> >;

export class BigVector<T0 extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::big_vector::BigVector`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = BigVector.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::big_vector::BigVector<${PhantomToTypeStr<T0>}>`; readonly $typeArgs: [PhantomToTypeStr<T0>]; readonly $isPhantom = BigVector.$isPhantom;

 readonly id: ToField<UID>; readonly depth: ToField<"u8">; readonly length: ToField<"u64">; readonly maxSliceSize: ToField<"u64">; readonly maxFanOut: ToField<"u64">; readonly rootId: ToField<"u64">; readonly lastId: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<T0>], fields: BigVectorFields<T0>, ) { this.$fullTypeName = composeSuiType( BigVector.$typeName, ...typeArgs ) as `${typeof PKG_V1}::big_vector::BigVector<${PhantomToTypeStr<T0>}>`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.depth = fields.depth;; this.length = fields.length;; this.maxSliceSize = fields.maxSliceSize;; this.maxFanOut = fields.maxFanOut;; this.rootId = fields.rootId;; this.lastId = fields.lastId; }

 static reified<T0 extends PhantomReified<PhantomTypeArgument>>( T0: T0 ): BigVectorReified<ToPhantomTypeArgument<T0>> { return { typeName: BigVector.$typeName, fullTypeName: composeSuiType( BigVector.$typeName, ...[extractType(T0)] ) as `${typeof PKG_V1}::big_vector::BigVector<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`, typeArgs: [ extractType(T0) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T0>>], isPhantom: BigVector.$isPhantom, reifiedTypeArgs: [T0], fromFields: (fields: Record<string, any>) => BigVector.fromFields( T0, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BigVector.fromFieldsWithTypes( T0, item, ), fromBcs: (data: Uint8Array) => BigVector.fromBcs( T0, data, ), bcs: BigVector.bcs, fromJSONField: (field: any) => BigVector.fromJSONField( T0, field, ), fromJSON: (json: Record<string, any>) => BigVector.fromJSON( T0, json, ), fromSuiParsedData: (content: SuiParsedData) => BigVector.fromSuiParsedData( T0, content, ), fromSuiObjectData: (content: SuiObjectData) => BigVector.fromSuiObjectData( T0, content, ), fetch: async (client: SuiClient, id: string) => BigVector.fetch( client, T0, id, ), new: ( fields: BigVectorFields<ToPhantomTypeArgument<T0>>, ) => { return new BigVector( [extractType(T0)], fields ) }, kind: "StructClassReified", } }

 static get r() { return BigVector.reified }

 static phantom<T0 extends PhantomReified<PhantomTypeArgument>>( T0: T0 ): PhantomReified<ToTypeStr<BigVector<ToPhantomTypeArgument<T0>>>> { return phantom(BigVector.reified( T0 )); } static get p() { return BigVector.phantom }

 static get bcs() { return bcs.struct("BigVector", {

 id: UID.bcs, depth: bcs.u8(), length: bcs.u64(), max_slice_size: bcs.u64(), max_fan_out: bcs.u64(), root_id: bcs.u64(), last_id: bcs.u64()

}) };

 static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, fields: Record<string, any> ): BigVector<ToPhantomTypeArgument<T0>> { return BigVector.reified( typeArg, ).new( { id: decodeFromFields(UID.reified(), fields.id), depth: decodeFromFields("u8", fields.depth), length: decodeFromFields("u64", fields.length), maxSliceSize: decodeFromFields("u64", fields.max_slice_size), maxFanOut: decodeFromFields("u64", fields.max_fan_out), rootId: decodeFromFields("u64", fields.root_id), lastId: decodeFromFields("u64", fields.last_id) } ) }

 static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, item: FieldsWithTypes ): BigVector<ToPhantomTypeArgument<T0>> { if (!isBigVector(item.type)) { throw new Error("not a BigVector type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return BigVector.reified( typeArg, ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), depth: decodeFromFieldsWithTypes("u8", item.fields.depth), length: decodeFromFieldsWithTypes("u64", item.fields.length), maxSliceSize: decodeFromFieldsWithTypes("u64", item.fields.max_slice_size), maxFanOut: decodeFromFieldsWithTypes("u64", item.fields.max_fan_out), rootId: decodeFromFieldsWithTypes("u64", item.fields.root_id), lastId: decodeFromFieldsWithTypes("u64", item.fields.last_id) } ) }

 static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, data: Uint8Array ): BigVector<ToPhantomTypeArgument<T0>> { return BigVector.fromFields( typeArg, BigVector.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,depth: this.depth,length: this.length.toString(),maxSliceSize: this.maxSliceSize.toString(),maxFanOut: this.maxFanOut.toString(),rootId: this.rootId.toString(),lastId: this.lastId.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, field: any ): BigVector<ToPhantomTypeArgument<T0>> { return BigVector.reified( typeArg, ).new( { id: decodeFromJSONField(UID.reified(), field.id), depth: decodeFromJSONField("u8", field.depth), length: decodeFromJSONField("u64", field.length), maxSliceSize: decodeFromJSONField("u64", field.maxSliceSize), maxFanOut: decodeFromJSONField("u64", field.maxFanOut), rootId: decodeFromJSONField("u64", field.rootId), lastId: decodeFromJSONField("u64", field.lastId) } ) }

 static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, json: Record<string, any> ): BigVector<ToPhantomTypeArgument<T0>> { if (json.$typeName !== BigVector.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(BigVector.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return BigVector.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, content: SuiParsedData ): BigVector<ToPhantomTypeArgument<T0>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBigVector(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BigVector object`); } return BigVector.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, data: SuiObjectData ): BigVector<ToPhantomTypeArgument<T0>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBigVector(data.bcs.type)) { throw new Error(`object at is not a BigVector object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return BigVector.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BigVector.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: T0, id: string ): Promise<BigVector<ToPhantomTypeArgument<T0>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BigVector object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBigVector(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BigVector object`); }

 return BigVector.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== Slice =============================== */

export function isSlice(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::big_vector::Slice` + '<'); }

export interface SliceFields<T0 extends TypeArgument> { prev: ToField<"u64">; next: ToField<"u64">; keys: ToField<Vector<"u128">>; vals: ToField<Vector<T0>> }

export type SliceReified<T0 extends TypeArgument> = Reified< Slice<T0>, SliceFields<T0> >;

export class Slice<T0 extends TypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::big_vector::Slice`; static readonly $numTypeParams = 1; static readonly $isPhantom = [false,] as const;

 readonly $typeName = Slice.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::big_vector::Slice<${ToTypeStr<T0>}>`; readonly $typeArgs: [ToTypeStr<T0>]; readonly $isPhantom = Slice.$isPhantom;

 readonly prev: ToField<"u64">; readonly next: ToField<"u64">; readonly keys: ToField<Vector<"u128">>; readonly vals: ToField<Vector<T0>>

 private constructor(typeArgs: [ToTypeStr<T0>], fields: SliceFields<T0>, ) { this.$fullTypeName = composeSuiType( Slice.$typeName, ...typeArgs ) as `${typeof PKG_V1}::big_vector::Slice<${ToTypeStr<T0>}>`; this.$typeArgs = typeArgs;

 this.prev = fields.prev;; this.next = fields.next;; this.keys = fields.keys;; this.vals = fields.vals; }

 static reified<T0 extends Reified<TypeArgument, any>>( T0: T0 ): SliceReified<ToTypeArgument<T0>> { return { typeName: Slice.$typeName, fullTypeName: composeSuiType( Slice.$typeName, ...[extractType(T0)] ) as `${typeof PKG_V1}::big_vector::Slice<${ToTypeStr<ToTypeArgument<T0>>}>`, typeArgs: [ extractType(T0) ] as [ToTypeStr<ToTypeArgument<T0>>], isPhantom: Slice.$isPhantom, reifiedTypeArgs: [T0], fromFields: (fields: Record<string, any>) => Slice.fromFields( T0, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Slice.fromFieldsWithTypes( T0, item, ), fromBcs: (data: Uint8Array) => Slice.fromBcs( T0, data, ), bcs: Slice.bcs(toBcs(T0)), fromJSONField: (field: any) => Slice.fromJSONField( T0, field, ), fromJSON: (json: Record<string, any>) => Slice.fromJSON( T0, json, ), fromSuiParsedData: (content: SuiParsedData) => Slice.fromSuiParsedData( T0, content, ), fromSuiObjectData: (content: SuiObjectData) => Slice.fromSuiObjectData( T0, content, ), fetch: async (client: SuiClient, id: string) => Slice.fetch( client, T0, id, ), new: ( fields: SliceFields<ToTypeArgument<T0>>, ) => { return new Slice( [extractType(T0)], fields ) }, kind: "StructClassReified", } }

 static get r() { return Slice.reified }

 static phantom<T0 extends Reified<TypeArgument, any>>( T0: T0 ): PhantomReified<ToTypeStr<Slice<ToTypeArgument<T0>>>> { return phantom(Slice.reified( T0 )); } static get p() { return Slice.phantom }

 static get bcs() { return <T0 extends BcsType<any>>(T0: T0) => bcs.struct(`Slice<${T0.name}>`, {

 prev: bcs.u64(), next: bcs.u64(), keys: bcs.vector(bcs.u128()), vals: bcs.vector(T0)

}) };

 static fromFields<T0 extends Reified<TypeArgument, any>>( typeArg: T0, fields: Record<string, any> ): Slice<ToTypeArgument<T0>> { return Slice.reified( typeArg, ).new( { prev: decodeFromFields("u64", fields.prev), next: decodeFromFields("u64", fields.next), keys: decodeFromFields(reified.vector("u128"), fields.keys), vals: decodeFromFields(reified.vector(typeArg), fields.vals) } ) }

 static fromFieldsWithTypes<T0 extends Reified<TypeArgument, any>>( typeArg: T0, item: FieldsWithTypes ): Slice<ToTypeArgument<T0>> { if (!isSlice(item.type)) { throw new Error("not a Slice type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return Slice.reified( typeArg, ).new( { prev: decodeFromFieldsWithTypes("u64", item.fields.prev), next: decodeFromFieldsWithTypes("u64", item.fields.next), keys: decodeFromFieldsWithTypes(reified.vector("u128"), item.fields.keys), vals: decodeFromFieldsWithTypes(reified.vector(typeArg), item.fields.vals) } ) }

 static fromBcs<T0 extends Reified<TypeArgument, any>>( typeArg: T0, data: Uint8Array ): Slice<ToTypeArgument<T0>> { const typeArgs = [typeArg];

 return Slice.fromFields( typeArg, Slice.bcs( toBcs(typeArgs[0]) ).parse(data) ) }

 toJSONField() { return {

 prev: this.prev.toString(),next: this.next.toString(),keys: fieldToJSON<Vector<"u128">>(`vector<u128>`, this.keys),vals: fieldToJSON<Vector<T0>>(`vector<${this.$typeArgs[0]}>`, this.vals),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T0 extends Reified<TypeArgument, any>>( typeArg: T0, field: any ): Slice<ToTypeArgument<T0>> { return Slice.reified( typeArg, ).new( { prev: decodeFromJSONField("u64", field.prev), next: decodeFromJSONField("u64", field.next), keys: decodeFromJSONField(reified.vector("u128"), field.keys), vals: decodeFromJSONField(reified.vector(typeArg), field.vals) } ) }

 static fromJSON<T0 extends Reified<TypeArgument, any>>( typeArg: T0, json: Record<string, any> ): Slice<ToTypeArgument<T0>> { if (json.$typeName !== Slice.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(Slice.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return Slice.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<T0 extends Reified<TypeArgument, any>>( typeArg: T0, content: SuiParsedData ): Slice<ToTypeArgument<T0>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isSlice(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Slice object`); } return Slice.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<T0 extends Reified<TypeArgument, any>>( typeArg: T0, data: SuiObjectData ): Slice<ToTypeArgument<T0>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isSlice(data.bcs.type)) { throw new Error(`object at is not a Slice object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return Slice.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Slice.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T0 extends Reified<TypeArgument, any>>( client: SuiClient, typeArg: T0, id: string ): Promise<Slice<ToTypeArgument<T0>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Slice object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isSlice(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Slice object`); }

 return Slice.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== SliceRef =============================== */

export function isSliceRef(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::big_vector::SliceRef`; }

export interface SliceRefFields { ix: ToField<"u64"> }

export type SliceRefReified = Reified< SliceRef, SliceRefFields >;

export class SliceRef implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::big_vector::SliceRef`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = SliceRef.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::big_vector::SliceRef`; readonly $typeArgs: []; readonly $isPhantom = SliceRef.$isPhantom;

 readonly ix: ToField<"u64">

 private constructor(typeArgs: [], fields: SliceRefFields, ) { this.$fullTypeName = composeSuiType( SliceRef.$typeName, ...typeArgs ) as `${typeof PKG_V1}::big_vector::SliceRef`; this.$typeArgs = typeArgs;

 this.ix = fields.ix; }

 static reified( ): SliceRefReified { return { typeName: SliceRef.$typeName, fullTypeName: composeSuiType( SliceRef.$typeName, ...[] ) as `${typeof PKG_V1}::big_vector::SliceRef`, typeArgs: [ ] as [], isPhantom: SliceRef.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => SliceRef.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => SliceRef.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => SliceRef.fromBcs( data, ), bcs: SliceRef.bcs, fromJSONField: (field: any) => SliceRef.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => SliceRef.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => SliceRef.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => SliceRef.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => SliceRef.fetch( client, id, ), new: ( fields: SliceRefFields, ) => { return new SliceRef( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return SliceRef.reified() }

 static phantom( ): PhantomReified<ToTypeStr<SliceRef>> { return phantom(SliceRef.reified( )); } static get p() { return SliceRef.phantom() }

 static get bcs() { return bcs.struct("SliceRef", {

 ix: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): SliceRef { return SliceRef.reified( ).new( { ix: decodeFromFields("u64", fields.ix) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): SliceRef { if (!isSliceRef(item.type)) { throw new Error("not a SliceRef type");

 }

 return SliceRef.reified( ).new( { ix: decodeFromFieldsWithTypes("u64", item.fields.ix) } ) }

 static fromBcs( data: Uint8Array ): SliceRef { return SliceRef.fromFields( SliceRef.bcs.parse(data) ) }

 toJSONField() { return {

 ix: this.ix.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): SliceRef { return SliceRef.reified( ).new( { ix: decodeFromJSONField("u64", field.ix) } ) }

 static fromJSON( json: Record<string, any> ): SliceRef { if (json.$typeName !== SliceRef.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return SliceRef.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): SliceRef { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isSliceRef(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a SliceRef object`); } return SliceRef.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): SliceRef { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isSliceRef(data.bcs.type)) { throw new Error(`object at is not a SliceRef object`); }

 return SliceRef.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return SliceRef.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<SliceRef> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching SliceRef object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isSliceRef(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a SliceRef object`); }

 return SliceRef.fromSuiObjectData( res.data ); }

 }
