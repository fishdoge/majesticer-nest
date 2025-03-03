import * as reified from "../../../../_framework/reified";
import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, phantom, ToTypeStr as ToPhantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName} from "../../../../_framework/util";
import {Balance, Supply} from "../../0x2/balance/structs";
import {UID} from "../../0x2/object/structs";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== SBUCK =============================== */

export function isSBUCK(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::sbuck::SBUCK`; }

export interface SBUCKFields { dummyField: ToField<"bool"> }

export type SBUCKReified = Reified< SBUCK, SBUCKFields >;

export class SBUCK implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::sbuck::SBUCK`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = SBUCK.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::sbuck::SBUCK`; readonly $typeArgs: []; readonly $isPhantom = SBUCK.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: SBUCKFields, ) { this.$fullTypeName = composeSuiType( SBUCK.$typeName, ...typeArgs ) as `${typeof PKG_V1}::sbuck::SBUCK`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): SBUCKReified { return { typeName: SBUCK.$typeName, fullTypeName: composeSuiType( SBUCK.$typeName, ...[] ) as `${typeof PKG_V1}::sbuck::SBUCK`, typeArgs: [ ] as [], isPhantom: SBUCK.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => SBUCK.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => SBUCK.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => SBUCK.fromBcs( data, ), bcs: SBUCK.bcs, fromJSONField: (field: any) => SBUCK.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => SBUCK.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => SBUCK.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => SBUCK.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => SBUCK.fetch( client, id, ), new: ( fields: SBUCKFields, ) => { return new SBUCK( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return SBUCK.reified() }

 static phantom( ): PhantomReified<ToTypeStr<SBUCK>> { return phantom(SBUCK.reified( )); } static get p() { return SBUCK.phantom() }

 static get bcs() { return bcs.struct("SBUCK", {

 dummy_field: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): SBUCK { return SBUCK.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): SBUCK { if (!isSBUCK(item.type)) { throw new Error("not a SBUCK type");

 }

 return SBUCK.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs( data: Uint8Array ): SBUCK { return SBUCK.fromFields( SBUCK.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): SBUCK { return SBUCK.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): SBUCK { if (json.$typeName !== SBUCK.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return SBUCK.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): SBUCK { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isSBUCK(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a SBUCK object`); } return SBUCK.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): SBUCK { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isSBUCK(data.bcs.type)) { throw new Error(`object at is not a SBUCK object`); }

 return SBUCK.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return SBUCK.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<SBUCK> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching SBUCK object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isSBUCK(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a SBUCK object`); }

 return SBUCK.fromSuiObjectData( res.data ); }

 }

/* ============================== Flask =============================== */

export function isFlask(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::sbuck::Flask` + '<'); }

export interface FlaskFields<T0 extends PhantomTypeArgument> { id: ToField<UID>; version: ToField<"u64">; reserves: ToField<Balance<T0>>; sbuckSupply: ToField<Supply<ToPhantom<SBUCK>>> }

export type FlaskReified<T0 extends PhantomTypeArgument> = Reified< Flask<T0>, FlaskFields<T0> >;

export class Flask<T0 extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::sbuck::Flask`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = Flask.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::sbuck::Flask<${PhantomToTypeStr<T0>}>`; readonly $typeArgs: [PhantomToTypeStr<T0>]; readonly $isPhantom = Flask.$isPhantom;

 readonly id: ToField<UID>; readonly version: ToField<"u64">; readonly reserves: ToField<Balance<T0>>; readonly sbuckSupply: ToField<Supply<ToPhantom<SBUCK>>>

 private constructor(typeArgs: [PhantomToTypeStr<T0>], fields: FlaskFields<T0>, ) { this.$fullTypeName = composeSuiType( Flask.$typeName, ...typeArgs ) as `${typeof PKG_V1}::sbuck::Flask<${PhantomToTypeStr<T0>}>`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.version = fields.version;; this.reserves = fields.reserves;; this.sbuckSupply = fields.sbuckSupply; }

 static reified<T0 extends PhantomReified<PhantomTypeArgument>>( T0: T0 ): FlaskReified<ToPhantomTypeArgument<T0>> { return { typeName: Flask.$typeName, fullTypeName: composeSuiType( Flask.$typeName, ...[extractType(T0)] ) as `${typeof PKG_V1}::sbuck::Flask<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`, typeArgs: [ extractType(T0) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T0>>], isPhantom: Flask.$isPhantom, reifiedTypeArgs: [T0], fromFields: (fields: Record<string, any>) => Flask.fromFields( T0, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Flask.fromFieldsWithTypes( T0, item, ), fromBcs: (data: Uint8Array) => Flask.fromBcs( T0, data, ), bcs: Flask.bcs, fromJSONField: (field: any) => Flask.fromJSONField( T0, field, ), fromJSON: (json: Record<string, any>) => Flask.fromJSON( T0, json, ), fromSuiParsedData: (content: SuiParsedData) => Flask.fromSuiParsedData( T0, content, ), fromSuiObjectData: (content: SuiObjectData) => Flask.fromSuiObjectData( T0, content, ), fetch: async (client: SuiClient, id: string) => Flask.fetch( client, T0, id, ), new: ( fields: FlaskFields<ToPhantomTypeArgument<T0>>, ) => { return new Flask( [extractType(T0)], fields ) }, kind: "StructClassReified", } }

 static get r() { return Flask.reified }

 static phantom<T0 extends PhantomReified<PhantomTypeArgument>>( T0: T0 ): PhantomReified<ToTypeStr<Flask<ToPhantomTypeArgument<T0>>>> { return phantom(Flask.reified( T0 )); } static get p() { return Flask.phantom }

 static get bcs() { return bcs.struct("Flask", {

 id: UID.bcs, version: bcs.u64(), reserves: Balance.bcs, sbuck_supply: Supply.bcs

}) };

 static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, fields: Record<string, any> ): Flask<ToPhantomTypeArgument<T0>> { return Flask.reified( typeArg, ).new( { id: decodeFromFields(UID.reified(), fields.id), version: decodeFromFields("u64", fields.version), reserves: decodeFromFields(Balance.reified(typeArg), fields.reserves), sbuckSupply: decodeFromFields(Supply.reified(reified.phantom(SBUCK.reified())), fields.sbuck_supply) } ) }

 static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, item: FieldsWithTypes ): Flask<ToPhantomTypeArgument<T0>> { if (!isFlask(item.type)) { throw new Error("not a Flask type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return Flask.reified( typeArg, ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), version: decodeFromFieldsWithTypes("u64", item.fields.version), reserves: decodeFromFieldsWithTypes(Balance.reified(typeArg), item.fields.reserves), sbuckSupply: decodeFromFieldsWithTypes(Supply.reified(reified.phantom(SBUCK.reified())), item.fields.sbuck_supply) } ) }

 static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, data: Uint8Array ): Flask<ToPhantomTypeArgument<T0>> { return Flask.fromFields( typeArg, Flask.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,version: this.version.toString(),reserves: this.reserves.toJSONField(),sbuckSupply: this.sbuckSupply.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, field: any ): Flask<ToPhantomTypeArgument<T0>> { return Flask.reified( typeArg, ).new( { id: decodeFromJSONField(UID.reified(), field.id), version: decodeFromJSONField("u64", field.version), reserves: decodeFromJSONField(Balance.reified(typeArg), field.reserves), sbuckSupply: decodeFromJSONField(Supply.reified(reified.phantom(SBUCK.reified())), field.sbuckSupply) } ) }

 static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, json: Record<string, any> ): Flask<ToPhantomTypeArgument<T0>> { if (json.$typeName !== Flask.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(Flask.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return Flask.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, content: SuiParsedData ): Flask<ToPhantomTypeArgument<T0>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isFlask(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Flask object`); } return Flask.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, data: SuiObjectData ): Flask<ToPhantomTypeArgument<T0>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isFlask(data.bcs.type)) { throw new Error(`object at is not a Flask object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return Flask.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Flask.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: T0, id: string ): Promise<Flask<ToPhantomTypeArgument<T0>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Flask object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isFlask(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Flask object`); }

 return Flask.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== WhitelistCap =============================== */

export function isWhitelistCap(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::sbuck::WhitelistCap`; }

export interface WhitelistCapFields { id: ToField<UID> }

export type WhitelistCapReified = Reified< WhitelistCap, WhitelistCapFields >;

export class WhitelistCap implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::sbuck::WhitelistCap`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = WhitelistCap.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::sbuck::WhitelistCap`; readonly $typeArgs: []; readonly $isPhantom = WhitelistCap.$isPhantom;

 readonly id: ToField<UID>

 private constructor(typeArgs: [], fields: WhitelistCapFields, ) { this.$fullTypeName = composeSuiType( WhitelistCap.$typeName, ...typeArgs ) as `${typeof PKG_V1}::sbuck::WhitelistCap`; this.$typeArgs = typeArgs;

 this.id = fields.id; }

 static reified( ): WhitelistCapReified { return { typeName: WhitelistCap.$typeName, fullTypeName: composeSuiType( WhitelistCap.$typeName, ...[] ) as `${typeof PKG_V1}::sbuck::WhitelistCap`, typeArgs: [ ] as [], isPhantom: WhitelistCap.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => WhitelistCap.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => WhitelistCap.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => WhitelistCap.fromBcs( data, ), bcs: WhitelistCap.bcs, fromJSONField: (field: any) => WhitelistCap.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => WhitelistCap.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => WhitelistCap.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => WhitelistCap.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => WhitelistCap.fetch( client, id, ), new: ( fields: WhitelistCapFields, ) => { return new WhitelistCap( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return WhitelistCap.reified() }

 static phantom( ): PhantomReified<ToTypeStr<WhitelistCap>> { return phantom(WhitelistCap.reified( )); } static get p() { return WhitelistCap.phantom() }

 static get bcs() { return bcs.struct("WhitelistCap", {

 id: UID.bcs

}) };

 static fromFields( fields: Record<string, any> ): WhitelistCap { return WhitelistCap.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): WhitelistCap { if (!isWhitelistCap(item.type)) { throw new Error("not a WhitelistCap type");

 }

 return WhitelistCap.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id) } ) }

 static fromBcs( data: Uint8Array ): WhitelistCap { return WhitelistCap.fromFields( WhitelistCap.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): WhitelistCap { return WhitelistCap.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id) } ) }

 static fromJSON( json: Record<string, any> ): WhitelistCap { if (json.$typeName !== WhitelistCap.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return WhitelistCap.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): WhitelistCap { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isWhitelistCap(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a WhitelistCap object`); } return WhitelistCap.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): WhitelistCap { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isWhitelistCap(data.bcs.type)) { throw new Error(`object at is not a WhitelistCap object`); }

 return WhitelistCap.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return WhitelistCap.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<WhitelistCap> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching WhitelistCap object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isWhitelistCap(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a WhitelistCap object`); }

 return WhitelistCap.fromSuiObjectData( res.data ); }

 }
