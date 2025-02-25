import * as reified from "../../_framework/reified";
import {Balance} from "../../_dependencies/onchain/0x2/balance/structs";
import {UID} from "../../_dependencies/onchain/0x2/object/structs";
import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, phantom, ToTypeStr as ToPhantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName} from "../../_framework/util";
import {BKT} from "../bkt/structs";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== Well =============================== */

export function isWell(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::well::Well` + '<'); }

export interface WellFields<T0 extends PhantomTypeArgument> { id: ToField<UID>; sharedPool: ToField<Balance<T0>>; reserve: ToField<Balance<T0>>; staked: ToField<Balance<ToPhantom<BKT>>>; totalWeight: ToField<"u64">; currentS: ToField<"u128"> }

export type WellReified<T0 extends PhantomTypeArgument> = Reified< Well<T0>, WellFields<T0> >;

export class Well<T0 extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::well::Well`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = Well.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::well::Well<${PhantomToTypeStr<T0>}>`; readonly $typeArgs: [PhantomToTypeStr<T0>]; readonly $isPhantom = Well.$isPhantom;

 readonly id: ToField<UID>; readonly sharedPool: ToField<Balance<T0>>; readonly reserve: ToField<Balance<T0>>; readonly staked: ToField<Balance<ToPhantom<BKT>>>; readonly totalWeight: ToField<"u64">; readonly currentS: ToField<"u128">

 private constructor(typeArgs: [PhantomToTypeStr<T0>], fields: WellFields<T0>, ) { this.$fullTypeName = composeSuiType( Well.$typeName, ...typeArgs ) as `${typeof PKG_V1}::well::Well<${PhantomToTypeStr<T0>}>`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.sharedPool = fields.sharedPool;; this.reserve = fields.reserve;; this.staked = fields.staked;; this.totalWeight = fields.totalWeight;; this.currentS = fields.currentS; }

 static reified<T0 extends PhantomReified<PhantomTypeArgument>>( T0: T0 ): WellReified<ToPhantomTypeArgument<T0>> { return { typeName: Well.$typeName, fullTypeName: composeSuiType( Well.$typeName, ...[extractType(T0)] ) as `${typeof PKG_V1}::well::Well<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`, typeArgs: [ extractType(T0) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T0>>], isPhantom: Well.$isPhantom, reifiedTypeArgs: [T0], fromFields: (fields: Record<string, any>) => Well.fromFields( T0, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Well.fromFieldsWithTypes( T0, item, ), fromBcs: (data: Uint8Array) => Well.fromBcs( T0, data, ), bcs: Well.bcs, fromJSONField: (field: any) => Well.fromJSONField( T0, field, ), fromJSON: (json: Record<string, any>) => Well.fromJSON( T0, json, ), fromSuiParsedData: (content: SuiParsedData) => Well.fromSuiParsedData( T0, content, ), fromSuiObjectData: (content: SuiObjectData) => Well.fromSuiObjectData( T0, content, ), fetch: async (client: SuiClient, id: string) => Well.fetch( client, T0, id, ), new: ( fields: WellFields<ToPhantomTypeArgument<T0>>, ) => { return new Well( [extractType(T0)], fields ) }, kind: "StructClassReified", } }

 static get r() { return Well.reified }

 static phantom<T0 extends PhantomReified<PhantomTypeArgument>>( T0: T0 ): PhantomReified<ToTypeStr<Well<ToPhantomTypeArgument<T0>>>> { return phantom(Well.reified( T0 )); } static get p() { return Well.phantom }

 static get bcs() { return bcs.struct("Well", {

 id: UID.bcs, shared_pool: Balance.bcs, reserve: Balance.bcs, staked: Balance.bcs, total_weight: bcs.u64(), current_s: bcs.u128()

}) };

 static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, fields: Record<string, any> ): Well<ToPhantomTypeArgument<T0>> { return Well.reified( typeArg, ).new( { id: decodeFromFields(UID.reified(), fields.id), sharedPool: decodeFromFields(Balance.reified(typeArg), fields.shared_pool), reserve: decodeFromFields(Balance.reified(typeArg), fields.reserve), staked: decodeFromFields(Balance.reified(reified.phantom(BKT.reified())), fields.staked), totalWeight: decodeFromFields("u64", fields.total_weight), currentS: decodeFromFields("u128", fields.current_s) } ) }

 static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, item: FieldsWithTypes ): Well<ToPhantomTypeArgument<T0>> { if (!isWell(item.type)) { throw new Error("not a Well type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return Well.reified( typeArg, ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), sharedPool: decodeFromFieldsWithTypes(Balance.reified(typeArg), item.fields.shared_pool), reserve: decodeFromFieldsWithTypes(Balance.reified(typeArg), item.fields.reserve), staked: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(BKT.reified())), item.fields.staked), totalWeight: decodeFromFieldsWithTypes("u64", item.fields.total_weight), currentS: decodeFromFieldsWithTypes("u128", item.fields.current_s) } ) }

 static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, data: Uint8Array ): Well<ToPhantomTypeArgument<T0>> { return Well.fromFields( typeArg, Well.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,sharedPool: this.sharedPool.toJSONField(),reserve: this.reserve.toJSONField(),staked: this.staked.toJSONField(),totalWeight: this.totalWeight.toString(),currentS: this.currentS.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, field: any ): Well<ToPhantomTypeArgument<T0>> { return Well.reified( typeArg, ).new( { id: decodeFromJSONField(UID.reified(), field.id), sharedPool: decodeFromJSONField(Balance.reified(typeArg), field.sharedPool), reserve: decodeFromJSONField(Balance.reified(typeArg), field.reserve), staked: decodeFromJSONField(Balance.reified(reified.phantom(BKT.reified())), field.staked), totalWeight: decodeFromJSONField("u64", field.totalWeight), currentS: decodeFromJSONField("u128", field.currentS) } ) }

 static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, json: Record<string, any> ): Well<ToPhantomTypeArgument<T0>> { if (json.$typeName !== Well.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(Well.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return Well.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, content: SuiParsedData ): Well<ToPhantomTypeArgument<T0>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isWell(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Well object`); } return Well.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, data: SuiObjectData ): Well<ToPhantomTypeArgument<T0>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isWell(data.bcs.type)) { throw new Error(`object at is not a Well object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return Well.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Well.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: T0, id: string ): Promise<Well<ToPhantomTypeArgument<T0>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Well object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isWell(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Well object`); }

 return Well.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== StakedBKT =============================== */

export function isStakedBKT(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::well::StakedBKT` + '<'); }

export interface StakedBKTFields<T0 extends PhantomTypeArgument> { id: ToField<UID>; stakeAmount: ToField<"u64">; startS: ToField<"u128">; stakeWeight: ToField<"u64">; lockUntil: ToField<"u64"> }

export type StakedBKTReified<T0 extends PhantomTypeArgument> = Reified< StakedBKT<T0>, StakedBKTFields<T0> >;

export class StakedBKT<T0 extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::well::StakedBKT`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = StakedBKT.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::well::StakedBKT<${PhantomToTypeStr<T0>}>`; readonly $typeArgs: [PhantomToTypeStr<T0>]; readonly $isPhantom = StakedBKT.$isPhantom;

 readonly id: ToField<UID>; readonly stakeAmount: ToField<"u64">; readonly startS: ToField<"u128">; readonly stakeWeight: ToField<"u64">; readonly lockUntil: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<T0>], fields: StakedBKTFields<T0>, ) { this.$fullTypeName = composeSuiType( StakedBKT.$typeName, ...typeArgs ) as `${typeof PKG_V1}::well::StakedBKT<${PhantomToTypeStr<T0>}>`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.stakeAmount = fields.stakeAmount;; this.startS = fields.startS;; this.stakeWeight = fields.stakeWeight;; this.lockUntil = fields.lockUntil; }

 static reified<T0 extends PhantomReified<PhantomTypeArgument>>( T0: T0 ): StakedBKTReified<ToPhantomTypeArgument<T0>> { return { typeName: StakedBKT.$typeName, fullTypeName: composeSuiType( StakedBKT.$typeName, ...[extractType(T0)] ) as `${typeof PKG_V1}::well::StakedBKT<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`, typeArgs: [ extractType(T0) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T0>>], isPhantom: StakedBKT.$isPhantom, reifiedTypeArgs: [T0], fromFields: (fields: Record<string, any>) => StakedBKT.fromFields( T0, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => StakedBKT.fromFieldsWithTypes( T0, item, ), fromBcs: (data: Uint8Array) => StakedBKT.fromBcs( T0, data, ), bcs: StakedBKT.bcs, fromJSONField: (field: any) => StakedBKT.fromJSONField( T0, field, ), fromJSON: (json: Record<string, any>) => StakedBKT.fromJSON( T0, json, ), fromSuiParsedData: (content: SuiParsedData) => StakedBKT.fromSuiParsedData( T0, content, ), fromSuiObjectData: (content: SuiObjectData) => StakedBKT.fromSuiObjectData( T0, content, ), fetch: async (client: SuiClient, id: string) => StakedBKT.fetch( client, T0, id, ), new: ( fields: StakedBKTFields<ToPhantomTypeArgument<T0>>, ) => { return new StakedBKT( [extractType(T0)], fields ) }, kind: "StructClassReified", } }

 static get r() { return StakedBKT.reified }

 static phantom<T0 extends PhantomReified<PhantomTypeArgument>>( T0: T0 ): PhantomReified<ToTypeStr<StakedBKT<ToPhantomTypeArgument<T0>>>> { return phantom(StakedBKT.reified( T0 )); } static get p() { return StakedBKT.phantom }

 static get bcs() { return bcs.struct("StakedBKT", {

 id: UID.bcs, stake_amount: bcs.u64(), start_s: bcs.u128(), stake_weight: bcs.u64(), lock_until: bcs.u64()

}) };

 static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, fields: Record<string, any> ): StakedBKT<ToPhantomTypeArgument<T0>> { return StakedBKT.reified( typeArg, ).new( { id: decodeFromFields(UID.reified(), fields.id), stakeAmount: decodeFromFields("u64", fields.stake_amount), startS: decodeFromFields("u128", fields.start_s), stakeWeight: decodeFromFields("u64", fields.stake_weight), lockUntil: decodeFromFields("u64", fields.lock_until) } ) }

 static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, item: FieldsWithTypes ): StakedBKT<ToPhantomTypeArgument<T0>> { if (!isStakedBKT(item.type)) { throw new Error("not a StakedBKT type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return StakedBKT.reified( typeArg, ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), stakeAmount: decodeFromFieldsWithTypes("u64", item.fields.stake_amount), startS: decodeFromFieldsWithTypes("u128", item.fields.start_s), stakeWeight: decodeFromFieldsWithTypes("u64", item.fields.stake_weight), lockUntil: decodeFromFieldsWithTypes("u64", item.fields.lock_until) } ) }

 static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, data: Uint8Array ): StakedBKT<ToPhantomTypeArgument<T0>> { return StakedBKT.fromFields( typeArg, StakedBKT.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,stakeAmount: this.stakeAmount.toString(),startS: this.startS.toString(),stakeWeight: this.stakeWeight.toString(),lockUntil: this.lockUntil.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, field: any ): StakedBKT<ToPhantomTypeArgument<T0>> { return StakedBKT.reified( typeArg, ).new( { id: decodeFromJSONField(UID.reified(), field.id), stakeAmount: decodeFromJSONField("u64", field.stakeAmount), startS: decodeFromJSONField("u128", field.startS), stakeWeight: decodeFromJSONField("u64", field.stakeWeight), lockUntil: decodeFromJSONField("u64", field.lockUntil) } ) }

 static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, json: Record<string, any> ): StakedBKT<ToPhantomTypeArgument<T0>> { if (json.$typeName !== StakedBKT.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(StakedBKT.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return StakedBKT.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, content: SuiParsedData ): StakedBKT<ToPhantomTypeArgument<T0>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isStakedBKT(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a StakedBKT object`); } return StakedBKT.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, data: SuiObjectData ): StakedBKT<ToPhantomTypeArgument<T0>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isStakedBKT(data.bcs.type)) { throw new Error(`object at is not a StakedBKT object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return StakedBKT.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return StakedBKT.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: T0, id: string ): Promise<StakedBKT<ToPhantomTypeArgument<T0>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching StakedBKT object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isStakedBKT(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a StakedBKT object`); }

 return StakedBKT.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== WELL =============================== */

export function isWELL(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::well::WELL`; }

export interface WELLFields { dummyField: ToField<"bool"> }

export type WELLReified = Reified< WELL, WELLFields >;

export class WELL implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::well::WELL`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = WELL.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::well::WELL`; readonly $typeArgs: []; readonly $isPhantom = WELL.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: WELLFields, ) { this.$fullTypeName = composeSuiType( WELL.$typeName, ...typeArgs ) as `${typeof PKG_V1}::well::WELL`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): WELLReified { return { typeName: WELL.$typeName, fullTypeName: composeSuiType( WELL.$typeName, ...[] ) as `${typeof PKG_V1}::well::WELL`, typeArgs: [ ] as [], isPhantom: WELL.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => WELL.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => WELL.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => WELL.fromBcs( data, ), bcs: WELL.bcs, fromJSONField: (field: any) => WELL.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => WELL.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => WELL.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => WELL.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => WELL.fetch( client, id, ), new: ( fields: WELLFields, ) => { return new WELL( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return WELL.reified() }

 static phantom( ): PhantomReified<ToTypeStr<WELL>> { return phantom(WELL.reified( )); } static get p() { return WELL.phantom() }

 static get bcs() { return bcs.struct("WELL", {

 dummy_field: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): WELL { return WELL.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): WELL { if (!isWELL(item.type)) { throw new Error("not a WELL type");

 }

 return WELL.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs( data: Uint8Array ): WELL { return WELL.fromFields( WELL.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): WELL { return WELL.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): WELL { if (json.$typeName !== WELL.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return WELL.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): WELL { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isWELL(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a WELL object`); } return WELL.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): WELL { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isWELL(data.bcs.type)) { throw new Error(`object at is not a WELL object`); }

 return WELL.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return WELL.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<WELL> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching WELL object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isWELL(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a WELL object`); }

 return WELL.fromSuiObjectData( res.data ); }

 }
