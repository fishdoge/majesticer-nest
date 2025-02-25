import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName} from "../../_framework/util";
import {PKG_V3} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== ChargeReservior =============================== */

export function isChargeReservior(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V3}::reservoir_events::ChargeReservior` + '<'); }

export interface ChargeReserviorFields<T0 extends PhantomTypeArgument> { inflowAmount: ToField<"u64">; buckAmount: ToField<"u64"> }

export type ChargeReserviorReified<T0 extends PhantomTypeArgument> = Reified< ChargeReservior<T0>, ChargeReserviorFields<T0> >;

export class ChargeReservior<T0 extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V3}::reservoir_events::ChargeReservior`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = ChargeReservior.$typeName; readonly $fullTypeName: `${typeof PKG_V3}::reservoir_events::ChargeReservior<${PhantomToTypeStr<T0>}>`; readonly $typeArgs: [PhantomToTypeStr<T0>]; readonly $isPhantom = ChargeReservior.$isPhantom;

 readonly inflowAmount: ToField<"u64">; readonly buckAmount: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<T0>], fields: ChargeReserviorFields<T0>, ) { this.$fullTypeName = composeSuiType( ChargeReservior.$typeName, ...typeArgs ) as `${typeof PKG_V3}::reservoir_events::ChargeReservior<${PhantomToTypeStr<T0>}>`; this.$typeArgs = typeArgs;

 this.inflowAmount = fields.inflowAmount;; this.buckAmount = fields.buckAmount; }

 static reified<T0 extends PhantomReified<PhantomTypeArgument>>( T0: T0 ): ChargeReserviorReified<ToPhantomTypeArgument<T0>> { return { typeName: ChargeReservior.$typeName, fullTypeName: composeSuiType( ChargeReservior.$typeName, ...[extractType(T0)] ) as `${typeof PKG_V3}::reservoir_events::ChargeReservior<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`, typeArgs: [ extractType(T0) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T0>>], isPhantom: ChargeReservior.$isPhantom, reifiedTypeArgs: [T0], fromFields: (fields: Record<string, any>) => ChargeReservior.fromFields( T0, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ChargeReservior.fromFieldsWithTypes( T0, item, ), fromBcs: (data: Uint8Array) => ChargeReservior.fromBcs( T0, data, ), bcs: ChargeReservior.bcs, fromJSONField: (field: any) => ChargeReservior.fromJSONField( T0, field, ), fromJSON: (json: Record<string, any>) => ChargeReservior.fromJSON( T0, json, ), fromSuiParsedData: (content: SuiParsedData) => ChargeReservior.fromSuiParsedData( T0, content, ), fromSuiObjectData: (content: SuiObjectData) => ChargeReservior.fromSuiObjectData( T0, content, ), fetch: async (client: SuiClient, id: string) => ChargeReservior.fetch( client, T0, id, ), new: ( fields: ChargeReserviorFields<ToPhantomTypeArgument<T0>>, ) => { return new ChargeReservior( [extractType(T0)], fields ) }, kind: "StructClassReified", } }

 static get r() { return ChargeReservior.reified }

 static phantom<T0 extends PhantomReified<PhantomTypeArgument>>( T0: T0 ): PhantomReified<ToTypeStr<ChargeReservior<ToPhantomTypeArgument<T0>>>> { return phantom(ChargeReservior.reified( T0 )); } static get p() { return ChargeReservior.phantom }

 static get bcs() { return bcs.struct("ChargeReservior", {

 inflow_amount: bcs.u64(), buck_amount: bcs.u64()

}) };

 static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, fields: Record<string, any> ): ChargeReservior<ToPhantomTypeArgument<T0>> { return ChargeReservior.reified( typeArg, ).new( { inflowAmount: decodeFromFields("u64", fields.inflow_amount), buckAmount: decodeFromFields("u64", fields.buck_amount) } ) }

 static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, item: FieldsWithTypes ): ChargeReservior<ToPhantomTypeArgument<T0>> { if (!isChargeReservior(item.type)) { throw new Error("not a ChargeReservior type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return ChargeReservior.reified( typeArg, ).new( { inflowAmount: decodeFromFieldsWithTypes("u64", item.fields.inflow_amount), buckAmount: decodeFromFieldsWithTypes("u64", item.fields.buck_amount) } ) }

 static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, data: Uint8Array ): ChargeReservior<ToPhantomTypeArgument<T0>> { return ChargeReservior.fromFields( typeArg, ChargeReservior.bcs.parse(data) ) }

 toJSONField() { return {

 inflowAmount: this.inflowAmount.toString(),buckAmount: this.buckAmount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, field: any ): ChargeReservior<ToPhantomTypeArgument<T0>> { return ChargeReservior.reified( typeArg, ).new( { inflowAmount: decodeFromJSONField("u64", field.inflowAmount), buckAmount: decodeFromJSONField("u64", field.buckAmount) } ) }

 static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, json: Record<string, any> ): ChargeReservior<ToPhantomTypeArgument<T0>> { if (json.$typeName !== ChargeReservior.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(ChargeReservior.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return ChargeReservior.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, content: SuiParsedData ): ChargeReservior<ToPhantomTypeArgument<T0>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isChargeReservior(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ChargeReservior object`); } return ChargeReservior.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, data: SuiObjectData ): ChargeReservior<ToPhantomTypeArgument<T0>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isChargeReservior(data.bcs.type)) { throw new Error(`object at is not a ChargeReservior object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return ChargeReservior.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return ChargeReservior.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: T0, id: string ): Promise<ChargeReservior<ToPhantomTypeArgument<T0>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ChargeReservior object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isChargeReservior(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ChargeReservior object`); }

 return ChargeReservior.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== DischargeReservior =============================== */

export function isDischargeReservior(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V3}::reservoir_events::DischargeReservior` + '<'); }

export interface DischargeReserviorFields<T0 extends PhantomTypeArgument> { outflowAmount: ToField<"u64">; buckAmount: ToField<"u64"> }

export type DischargeReserviorReified<T0 extends PhantomTypeArgument> = Reified< DischargeReservior<T0>, DischargeReserviorFields<T0> >;

export class DischargeReservior<T0 extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V3}::reservoir_events::DischargeReservior`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = DischargeReservior.$typeName; readonly $fullTypeName: `${typeof PKG_V3}::reservoir_events::DischargeReservior<${PhantomToTypeStr<T0>}>`; readonly $typeArgs: [PhantomToTypeStr<T0>]; readonly $isPhantom = DischargeReservior.$isPhantom;

 readonly outflowAmount: ToField<"u64">; readonly buckAmount: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<T0>], fields: DischargeReserviorFields<T0>, ) { this.$fullTypeName = composeSuiType( DischargeReservior.$typeName, ...typeArgs ) as `${typeof PKG_V3}::reservoir_events::DischargeReservior<${PhantomToTypeStr<T0>}>`; this.$typeArgs = typeArgs;

 this.outflowAmount = fields.outflowAmount;; this.buckAmount = fields.buckAmount; }

 static reified<T0 extends PhantomReified<PhantomTypeArgument>>( T0: T0 ): DischargeReserviorReified<ToPhantomTypeArgument<T0>> { return { typeName: DischargeReservior.$typeName, fullTypeName: composeSuiType( DischargeReservior.$typeName, ...[extractType(T0)] ) as `${typeof PKG_V3}::reservoir_events::DischargeReservior<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`, typeArgs: [ extractType(T0) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T0>>], isPhantom: DischargeReservior.$isPhantom, reifiedTypeArgs: [T0], fromFields: (fields: Record<string, any>) => DischargeReservior.fromFields( T0, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => DischargeReservior.fromFieldsWithTypes( T0, item, ), fromBcs: (data: Uint8Array) => DischargeReservior.fromBcs( T0, data, ), bcs: DischargeReservior.bcs, fromJSONField: (field: any) => DischargeReservior.fromJSONField( T0, field, ), fromJSON: (json: Record<string, any>) => DischargeReservior.fromJSON( T0, json, ), fromSuiParsedData: (content: SuiParsedData) => DischargeReservior.fromSuiParsedData( T0, content, ), fromSuiObjectData: (content: SuiObjectData) => DischargeReservior.fromSuiObjectData( T0, content, ), fetch: async (client: SuiClient, id: string) => DischargeReservior.fetch( client, T0, id, ), new: ( fields: DischargeReserviorFields<ToPhantomTypeArgument<T0>>, ) => { return new DischargeReservior( [extractType(T0)], fields ) }, kind: "StructClassReified", } }

 static get r() { return DischargeReservior.reified }

 static phantom<T0 extends PhantomReified<PhantomTypeArgument>>( T0: T0 ): PhantomReified<ToTypeStr<DischargeReservior<ToPhantomTypeArgument<T0>>>> { return phantom(DischargeReservior.reified( T0 )); } static get p() { return DischargeReservior.phantom }

 static get bcs() { return bcs.struct("DischargeReservior", {

 outflow_amount: bcs.u64(), buck_amount: bcs.u64()

}) };

 static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, fields: Record<string, any> ): DischargeReservior<ToPhantomTypeArgument<T0>> { return DischargeReservior.reified( typeArg, ).new( { outflowAmount: decodeFromFields("u64", fields.outflow_amount), buckAmount: decodeFromFields("u64", fields.buck_amount) } ) }

 static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, item: FieldsWithTypes ): DischargeReservior<ToPhantomTypeArgument<T0>> { if (!isDischargeReservior(item.type)) { throw new Error("not a DischargeReservior type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return DischargeReservior.reified( typeArg, ).new( { outflowAmount: decodeFromFieldsWithTypes("u64", item.fields.outflow_amount), buckAmount: decodeFromFieldsWithTypes("u64", item.fields.buck_amount) } ) }

 static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, data: Uint8Array ): DischargeReservior<ToPhantomTypeArgument<T0>> { return DischargeReservior.fromFields( typeArg, DischargeReservior.bcs.parse(data) ) }

 toJSONField() { return {

 outflowAmount: this.outflowAmount.toString(),buckAmount: this.buckAmount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, field: any ): DischargeReservior<ToPhantomTypeArgument<T0>> { return DischargeReservior.reified( typeArg, ).new( { outflowAmount: decodeFromJSONField("u64", field.outflowAmount), buckAmount: decodeFromJSONField("u64", field.buckAmount) } ) }

 static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, json: Record<string, any> ): DischargeReservior<ToPhantomTypeArgument<T0>> { if (json.$typeName !== DischargeReservior.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(DischargeReservior.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return DischargeReservior.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, content: SuiParsedData ): DischargeReservior<ToPhantomTypeArgument<T0>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDischargeReservior(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a DischargeReservior object`); } return DischargeReservior.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, data: SuiObjectData ): DischargeReservior<ToPhantomTypeArgument<T0>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isDischargeReservior(data.bcs.type)) { throw new Error(`object at is not a DischargeReservior object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return DischargeReservior.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return DischargeReservior.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: T0, id: string ): Promise<DischargeReservior<ToPhantomTypeArgument<T0>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching DischargeReservior object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDischargeReservior(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a DischargeReservior object`); }

 return DischargeReservior.fromSuiObjectData( typeArg, res.data ); }

 }
