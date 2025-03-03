import {ID, UID} from "../../_dependencies/onchain/0x2/object/structs";
import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, fieldToJSON, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName} from "../../_framework/util";
import {String} from "../../std/ascii/structs";
import {Option} from "../../std/option/structs";
import {PKG_V1, PKG_V3} from "../index";
import {PriceInfo} from "../price-aggregator/structs";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== ParsePriceEvent =============================== */

export function isParsePriceEvent(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::single_oracle::ParsePriceEvent`; }

export interface ParsePriceEventFields { coinType: ToField<String>; sourceId: ToField<"u8">; priceInfo: ToField<Option<PriceInfo>> }

export type ParsePriceEventReified = Reified< ParsePriceEvent, ParsePriceEventFields >;

export class ParsePriceEvent implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::single_oracle::ParsePriceEvent`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = ParsePriceEvent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::single_oracle::ParsePriceEvent`; readonly $typeArgs: []; readonly $isPhantom = ParsePriceEvent.$isPhantom;

 readonly coinType: ToField<String>; readonly sourceId: ToField<"u8">; readonly priceInfo: ToField<Option<PriceInfo>>

 private constructor(typeArgs: [], fields: ParsePriceEventFields, ) { this.$fullTypeName = composeSuiType( ParsePriceEvent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::single_oracle::ParsePriceEvent`; this.$typeArgs = typeArgs;

 this.coinType = fields.coinType;; this.sourceId = fields.sourceId;; this.priceInfo = fields.priceInfo; }

 static reified( ): ParsePriceEventReified { return { typeName: ParsePriceEvent.$typeName, fullTypeName: composeSuiType( ParsePriceEvent.$typeName, ...[] ) as `${typeof PKG_V1}::single_oracle::ParsePriceEvent`, typeArgs: [ ] as [], isPhantom: ParsePriceEvent.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ParsePriceEvent.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ParsePriceEvent.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ParsePriceEvent.fromBcs( data, ), bcs: ParsePriceEvent.bcs, fromJSONField: (field: any) => ParsePriceEvent.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ParsePriceEvent.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ParsePriceEvent.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => ParsePriceEvent.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => ParsePriceEvent.fetch( client, id, ), new: ( fields: ParsePriceEventFields, ) => { return new ParsePriceEvent( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ParsePriceEvent.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ParsePriceEvent>> { return phantom(ParsePriceEvent.reified( )); } static get p() { return ParsePriceEvent.phantom() }

 static get bcs() { return bcs.struct("ParsePriceEvent", {

 coin_type: String.bcs, source_id: bcs.u8(), price_info: Option.bcs(PriceInfo.bcs)

}) };

 static fromFields( fields: Record<string, any> ): ParsePriceEvent { return ParsePriceEvent.reified( ).new( { coinType: decodeFromFields(String.reified(), fields.coin_type), sourceId: decodeFromFields("u8", fields.source_id), priceInfo: decodeFromFields(Option.reified(PriceInfo.reified()), fields.price_info) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ParsePriceEvent { if (!isParsePriceEvent(item.type)) { throw new Error("not a ParsePriceEvent type");

 }

 return ParsePriceEvent.reified( ).new( { coinType: decodeFromFieldsWithTypes(String.reified(), item.fields.coin_type), sourceId: decodeFromFieldsWithTypes("u8", item.fields.source_id), priceInfo: decodeFromFieldsWithTypes(Option.reified(PriceInfo.reified()), item.fields.price_info) } ) }

 static fromBcs( data: Uint8Array ): ParsePriceEvent { return ParsePriceEvent.fromFields( ParsePriceEvent.bcs.parse(data) ) }

 toJSONField() { return {

 coinType: this.coinType,sourceId: this.sourceId,priceInfo: fieldToJSON<Option<PriceInfo>>(`${Option.$typeName}<${PriceInfo.$typeName}>`, this.priceInfo),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ParsePriceEvent { return ParsePriceEvent.reified( ).new( { coinType: decodeFromJSONField(String.reified(), field.coinType), sourceId: decodeFromJSONField("u8", field.sourceId), priceInfo: decodeFromJSONField(Option.reified(PriceInfo.reified()), field.priceInfo) } ) }

 static fromJSON( json: Record<string, any> ): ParsePriceEvent { if (json.$typeName !== ParsePriceEvent.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ParsePriceEvent.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ParsePriceEvent { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isParsePriceEvent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ParsePriceEvent object`); } return ParsePriceEvent.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): ParsePriceEvent { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isParsePriceEvent(data.bcs.type)) { throw new Error(`object at is not a ParsePriceEvent object`); }

 return ParsePriceEvent.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return ParsePriceEvent.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<ParsePriceEvent> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ParsePriceEvent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isParsePriceEvent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ParsePriceEvent object`); }

 return ParsePriceEvent.fromSuiObjectData( res.data ); }

 }

/* ============================== SingleOracle =============================== */

export function isSingleOracle(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::single_oracle::SingleOracle` + '<'); }

export interface SingleOracleFields<T0 extends PhantomTypeArgument> { id: ToField<UID>; price: ToField<"u64">; precisionDecimal: ToField<"u8">; precision: ToField<"u64">; toleranceMs: ToField<"u64">; threshold: ToField<"u64">; latestUpdateMs: ToField<"u64">; switchboardConfig: ToField<Option<ID>>; pythConfig: ToField<Option<ID>>; supraConfig: ToField<Option<"u32">> }

export type SingleOracleReified<T0 extends PhantomTypeArgument> = Reified< SingleOracle<T0>, SingleOracleFields<T0> >;

export class SingleOracle<T0 extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::single_oracle::SingleOracle`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = SingleOracle.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::single_oracle::SingleOracle<${PhantomToTypeStr<T0>}>`; readonly $typeArgs: [PhantomToTypeStr<T0>]; readonly $isPhantom = SingleOracle.$isPhantom;

 readonly id: ToField<UID>; readonly price: ToField<"u64">; readonly precisionDecimal: ToField<"u8">; readonly precision: ToField<"u64">; readonly toleranceMs: ToField<"u64">; readonly threshold: ToField<"u64">; readonly latestUpdateMs: ToField<"u64">; readonly switchboardConfig: ToField<Option<ID>>; readonly pythConfig: ToField<Option<ID>>; readonly supraConfig: ToField<Option<"u32">>

 private constructor(typeArgs: [PhantomToTypeStr<T0>], fields: SingleOracleFields<T0>, ) { this.$fullTypeName = composeSuiType( SingleOracle.$typeName, ...typeArgs ) as `${typeof PKG_V1}::single_oracle::SingleOracle<${PhantomToTypeStr<T0>}>`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.price = fields.price;; this.precisionDecimal = fields.precisionDecimal;; this.precision = fields.precision;; this.toleranceMs = fields.toleranceMs;; this.threshold = fields.threshold;; this.latestUpdateMs = fields.latestUpdateMs;; this.switchboardConfig = fields.switchboardConfig;; this.pythConfig = fields.pythConfig;; this.supraConfig = fields.supraConfig; }

 static reified<T0 extends PhantomReified<PhantomTypeArgument>>( T0: T0 ): SingleOracleReified<ToPhantomTypeArgument<T0>> { return { typeName: SingleOracle.$typeName, fullTypeName: composeSuiType( SingleOracle.$typeName, ...[extractType(T0)] ) as `${typeof PKG_V1}::single_oracle::SingleOracle<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`, typeArgs: [ extractType(T0) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T0>>], isPhantom: SingleOracle.$isPhantom, reifiedTypeArgs: [T0], fromFields: (fields: Record<string, any>) => SingleOracle.fromFields( T0, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => SingleOracle.fromFieldsWithTypes( T0, item, ), fromBcs: (data: Uint8Array) => SingleOracle.fromBcs( T0, data, ), bcs: SingleOracle.bcs, fromJSONField: (field: any) => SingleOracle.fromJSONField( T0, field, ), fromJSON: (json: Record<string, any>) => SingleOracle.fromJSON( T0, json, ), fromSuiParsedData: (content: SuiParsedData) => SingleOracle.fromSuiParsedData( T0, content, ), fromSuiObjectData: (content: SuiObjectData) => SingleOracle.fromSuiObjectData( T0, content, ), fetch: async (client: SuiClient, id: string) => SingleOracle.fetch( client, T0, id, ), new: ( fields: SingleOracleFields<ToPhantomTypeArgument<T0>>, ) => { return new SingleOracle( [extractType(T0)], fields ) }, kind: "StructClassReified", } }

 static get r() { return SingleOracle.reified }

 static phantom<T0 extends PhantomReified<PhantomTypeArgument>>( T0: T0 ): PhantomReified<ToTypeStr<SingleOracle<ToPhantomTypeArgument<T0>>>> { return phantom(SingleOracle.reified( T0 )); } static get p() { return SingleOracle.phantom }

 static get bcs() { return bcs.struct("SingleOracle", {

 id: UID.bcs, price: bcs.u64(), precision_decimal: bcs.u8(), precision: bcs.u64(), tolerance_ms: bcs.u64(), threshold: bcs.u64(), latest_update_ms: bcs.u64(), switchboard_config: Option.bcs(ID.bcs), pyth_config: Option.bcs(ID.bcs), supra_config: Option.bcs(bcs.u32())

}) };

 static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, fields: Record<string, any> ): SingleOracle<ToPhantomTypeArgument<T0>> { return SingleOracle.reified( typeArg, ).new( { id: decodeFromFields(UID.reified(), fields.id), price: decodeFromFields("u64", fields.price), precisionDecimal: decodeFromFields("u8", fields.precision_decimal), precision: decodeFromFields("u64", fields.precision), toleranceMs: decodeFromFields("u64", fields.tolerance_ms), threshold: decodeFromFields("u64", fields.threshold), latestUpdateMs: decodeFromFields("u64", fields.latest_update_ms), switchboardConfig: decodeFromFields(Option.reified(ID.reified()), fields.switchboard_config), pythConfig: decodeFromFields(Option.reified(ID.reified()), fields.pyth_config), supraConfig: decodeFromFields(Option.reified("u32"), fields.supra_config) } ) }

 static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, item: FieldsWithTypes ): SingleOracle<ToPhantomTypeArgument<T0>> { if (!isSingleOracle(item.type)) { throw new Error("not a SingleOracle type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return SingleOracle.reified( typeArg, ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), price: decodeFromFieldsWithTypes("u64", item.fields.price), precisionDecimal: decodeFromFieldsWithTypes("u8", item.fields.precision_decimal), precision: decodeFromFieldsWithTypes("u64", item.fields.precision), toleranceMs: decodeFromFieldsWithTypes("u64", item.fields.tolerance_ms), threshold: decodeFromFieldsWithTypes("u64", item.fields.threshold), latestUpdateMs: decodeFromFieldsWithTypes("u64", item.fields.latest_update_ms), switchboardConfig: decodeFromFieldsWithTypes(Option.reified(ID.reified()), item.fields.switchboard_config), pythConfig: decodeFromFieldsWithTypes(Option.reified(ID.reified()), item.fields.pyth_config), supraConfig: decodeFromFieldsWithTypes(Option.reified("u32"), item.fields.supra_config) } ) }

 static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, data: Uint8Array ): SingleOracle<ToPhantomTypeArgument<T0>> { return SingleOracle.fromFields( typeArg, SingleOracle.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,price: this.price.toString(),precisionDecimal: this.precisionDecimal,precision: this.precision.toString(),toleranceMs: this.toleranceMs.toString(),threshold: this.threshold.toString(),latestUpdateMs: this.latestUpdateMs.toString(),switchboardConfig: fieldToJSON<Option<ID>>(`${Option.$typeName}<${ID.$typeName}>`, this.switchboardConfig),pythConfig: fieldToJSON<Option<ID>>(`${Option.$typeName}<${ID.$typeName}>`, this.pythConfig),supraConfig: fieldToJSON<Option<"u32">>(`${Option.$typeName}<u32>`, this.supraConfig),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, field: any ): SingleOracle<ToPhantomTypeArgument<T0>> { return SingleOracle.reified( typeArg, ).new( { id: decodeFromJSONField(UID.reified(), field.id), price: decodeFromJSONField("u64", field.price), precisionDecimal: decodeFromJSONField("u8", field.precisionDecimal), precision: decodeFromJSONField("u64", field.precision), toleranceMs: decodeFromJSONField("u64", field.toleranceMs), threshold: decodeFromJSONField("u64", field.threshold), latestUpdateMs: decodeFromJSONField("u64", field.latestUpdateMs), switchboardConfig: decodeFromJSONField(Option.reified(ID.reified()), field.switchboardConfig), pythConfig: decodeFromJSONField(Option.reified(ID.reified()), field.pythConfig), supraConfig: decodeFromJSONField(Option.reified("u32"), field.supraConfig) } ) }

 static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, json: Record<string, any> ): SingleOracle<ToPhantomTypeArgument<T0>> { if (json.$typeName !== SingleOracle.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(SingleOracle.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return SingleOracle.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, content: SuiParsedData ): SingleOracle<ToPhantomTypeArgument<T0>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isSingleOracle(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a SingleOracle object`); } return SingleOracle.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, data: SuiObjectData ): SingleOracle<ToPhantomTypeArgument<T0>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isSingleOracle(data.bcs.type)) { throw new Error(`object at is not a SingleOracle object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return SingleOracle.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return SingleOracle.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: T0, id: string ): Promise<SingleOracle<ToPhantomTypeArgument<T0>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching SingleOracle object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isSingleOracle(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a SingleOracle object`); }

 return SingleOracle.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== PriceCollector =============================== */

export function isPriceCollector(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::single_oracle::PriceCollector` + '<'); }

export interface PriceCollectorFields<T0 extends PhantomTypeArgument> { switchboardResult: ToField<Option<PriceInfo>>; pythResult: ToField<Option<PriceInfo>>; supraResult: ToField<Option<PriceInfo>> }

export type PriceCollectorReified<T0 extends PhantomTypeArgument> = Reified< PriceCollector<T0>, PriceCollectorFields<T0> >;

export class PriceCollector<T0 extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::single_oracle::PriceCollector`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = PriceCollector.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::single_oracle::PriceCollector<${PhantomToTypeStr<T0>}>`; readonly $typeArgs: [PhantomToTypeStr<T0>]; readonly $isPhantom = PriceCollector.$isPhantom;

 readonly switchboardResult: ToField<Option<PriceInfo>>; readonly pythResult: ToField<Option<PriceInfo>>; readonly supraResult: ToField<Option<PriceInfo>>

 private constructor(typeArgs: [PhantomToTypeStr<T0>], fields: PriceCollectorFields<T0>, ) { this.$fullTypeName = composeSuiType( PriceCollector.$typeName, ...typeArgs ) as `${typeof PKG_V1}::single_oracle::PriceCollector<${PhantomToTypeStr<T0>}>`; this.$typeArgs = typeArgs;

 this.switchboardResult = fields.switchboardResult;; this.pythResult = fields.pythResult;; this.supraResult = fields.supraResult; }

 static reified<T0 extends PhantomReified<PhantomTypeArgument>>( T0: T0 ): PriceCollectorReified<ToPhantomTypeArgument<T0>> { return { typeName: PriceCollector.$typeName, fullTypeName: composeSuiType( PriceCollector.$typeName, ...[extractType(T0)] ) as `${typeof PKG_V1}::single_oracle::PriceCollector<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`, typeArgs: [ extractType(T0) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T0>>], isPhantom: PriceCollector.$isPhantom, reifiedTypeArgs: [T0], fromFields: (fields: Record<string, any>) => PriceCollector.fromFields( T0, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => PriceCollector.fromFieldsWithTypes( T0, item, ), fromBcs: (data: Uint8Array) => PriceCollector.fromBcs( T0, data, ), bcs: PriceCollector.bcs, fromJSONField: (field: any) => PriceCollector.fromJSONField( T0, field, ), fromJSON: (json: Record<string, any>) => PriceCollector.fromJSON( T0, json, ), fromSuiParsedData: (content: SuiParsedData) => PriceCollector.fromSuiParsedData( T0, content, ), fromSuiObjectData: (content: SuiObjectData) => PriceCollector.fromSuiObjectData( T0, content, ), fetch: async (client: SuiClient, id: string) => PriceCollector.fetch( client, T0, id, ), new: ( fields: PriceCollectorFields<ToPhantomTypeArgument<T0>>, ) => { return new PriceCollector( [extractType(T0)], fields ) }, kind: "StructClassReified", } }

 static get r() { return PriceCollector.reified }

 static phantom<T0 extends PhantomReified<PhantomTypeArgument>>( T0: T0 ): PhantomReified<ToTypeStr<PriceCollector<ToPhantomTypeArgument<T0>>>> { return phantom(PriceCollector.reified( T0 )); } static get p() { return PriceCollector.phantom }

 static get bcs() { return bcs.struct("PriceCollector", {

 switchboard_result: Option.bcs(PriceInfo.bcs), pyth_result: Option.bcs(PriceInfo.bcs), supra_result: Option.bcs(PriceInfo.bcs)

}) };

 static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, fields: Record<string, any> ): PriceCollector<ToPhantomTypeArgument<T0>> { return PriceCollector.reified( typeArg, ).new( { switchboardResult: decodeFromFields(Option.reified(PriceInfo.reified()), fields.switchboard_result), pythResult: decodeFromFields(Option.reified(PriceInfo.reified()), fields.pyth_result), supraResult: decodeFromFields(Option.reified(PriceInfo.reified()), fields.supra_result) } ) }

 static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, item: FieldsWithTypes ): PriceCollector<ToPhantomTypeArgument<T0>> { if (!isPriceCollector(item.type)) { throw new Error("not a PriceCollector type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return PriceCollector.reified( typeArg, ).new( { switchboardResult: decodeFromFieldsWithTypes(Option.reified(PriceInfo.reified()), item.fields.switchboard_result), pythResult: decodeFromFieldsWithTypes(Option.reified(PriceInfo.reified()), item.fields.pyth_result), supraResult: decodeFromFieldsWithTypes(Option.reified(PriceInfo.reified()), item.fields.supra_result) } ) }

 static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, data: Uint8Array ): PriceCollector<ToPhantomTypeArgument<T0>> { return PriceCollector.fromFields( typeArg, PriceCollector.bcs.parse(data) ) }

 toJSONField() { return {

 switchboardResult: fieldToJSON<Option<PriceInfo>>(`${Option.$typeName}<${PriceInfo.$typeName}>`, this.switchboardResult),pythResult: fieldToJSON<Option<PriceInfo>>(`${Option.$typeName}<${PriceInfo.$typeName}>`, this.pythResult),supraResult: fieldToJSON<Option<PriceInfo>>(`${Option.$typeName}<${PriceInfo.$typeName}>`, this.supraResult),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, field: any ): PriceCollector<ToPhantomTypeArgument<T0>> { return PriceCollector.reified( typeArg, ).new( { switchboardResult: decodeFromJSONField(Option.reified(PriceInfo.reified()), field.switchboardResult), pythResult: decodeFromJSONField(Option.reified(PriceInfo.reified()), field.pythResult), supraResult: decodeFromJSONField(Option.reified(PriceInfo.reified()), field.supraResult) } ) }

 static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, json: Record<string, any> ): PriceCollector<ToPhantomTypeArgument<T0>> { if (json.$typeName !== PriceCollector.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(PriceCollector.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return PriceCollector.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, content: SuiParsedData ): PriceCollector<ToPhantomTypeArgument<T0>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPriceCollector(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a PriceCollector object`); } return PriceCollector.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, data: SuiObjectData ): PriceCollector<ToPhantomTypeArgument<T0>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isPriceCollector(data.bcs.type)) { throw new Error(`object at is not a PriceCollector object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return PriceCollector.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return PriceCollector.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: T0, id: string ): Promise<PriceCollector<ToPhantomTypeArgument<T0>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching PriceCollector object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPriceCollector(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a PriceCollector object`); }

 return PriceCollector.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== WhitelistRule =============================== */

export function isWhitelistRule(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V3}::single_oracle::WhitelistRule` + '<'); }

export interface WhitelistRuleFields<T0 extends PhantomTypeArgument> { dummyField: ToField<"bool"> }

export type WhitelistRuleReified<T0 extends PhantomTypeArgument> = Reified< WhitelistRule<T0>, WhitelistRuleFields<T0> >;

export class WhitelistRule<T0 extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V3}::single_oracle::WhitelistRule`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = WhitelistRule.$typeName; readonly $fullTypeName: `${typeof PKG_V3}::single_oracle::WhitelistRule<${PhantomToTypeStr<T0>}>`; readonly $typeArgs: [PhantomToTypeStr<T0>]; readonly $isPhantom = WhitelistRule.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [PhantomToTypeStr<T0>], fields: WhitelistRuleFields<T0>, ) { this.$fullTypeName = composeSuiType( WhitelistRule.$typeName, ...typeArgs ) as `${typeof PKG_V3}::single_oracle::WhitelistRule<${PhantomToTypeStr<T0>}>`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified<T0 extends PhantomReified<PhantomTypeArgument>>( T0: T0 ): WhitelistRuleReified<ToPhantomTypeArgument<T0>> { return { typeName: WhitelistRule.$typeName, fullTypeName: composeSuiType( WhitelistRule.$typeName, ...[extractType(T0)] ) as `${typeof PKG_V3}::single_oracle::WhitelistRule<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`, typeArgs: [ extractType(T0) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T0>>], isPhantom: WhitelistRule.$isPhantom, reifiedTypeArgs: [T0], fromFields: (fields: Record<string, any>) => WhitelistRule.fromFields( T0, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => WhitelistRule.fromFieldsWithTypes( T0, item, ), fromBcs: (data: Uint8Array) => WhitelistRule.fromBcs( T0, data, ), bcs: WhitelistRule.bcs, fromJSONField: (field: any) => WhitelistRule.fromJSONField( T0, field, ), fromJSON: (json: Record<string, any>) => WhitelistRule.fromJSON( T0, json, ), fromSuiParsedData: (content: SuiParsedData) => WhitelistRule.fromSuiParsedData( T0, content, ), fromSuiObjectData: (content: SuiObjectData) => WhitelistRule.fromSuiObjectData( T0, content, ), fetch: async (client: SuiClient, id: string) => WhitelistRule.fetch( client, T0, id, ), new: ( fields: WhitelistRuleFields<ToPhantomTypeArgument<T0>>, ) => { return new WhitelistRule( [extractType(T0)], fields ) }, kind: "StructClassReified", } }

 static get r() { return WhitelistRule.reified }

 static phantom<T0 extends PhantomReified<PhantomTypeArgument>>( T0: T0 ): PhantomReified<ToTypeStr<WhitelistRule<ToPhantomTypeArgument<T0>>>> { return phantom(WhitelistRule.reified( T0 )); } static get p() { return WhitelistRule.phantom }

 static get bcs() { return bcs.struct("WhitelistRule", {

 dummy_field: bcs.bool()

}) };

 static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, fields: Record<string, any> ): WhitelistRule<ToPhantomTypeArgument<T0>> { return WhitelistRule.reified( typeArg, ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, item: FieldsWithTypes ): WhitelistRule<ToPhantomTypeArgument<T0>> { if (!isWhitelistRule(item.type)) { throw new Error("not a WhitelistRule type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return WhitelistRule.reified( typeArg, ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, data: Uint8Array ): WhitelistRule<ToPhantomTypeArgument<T0>> { return WhitelistRule.fromFields( typeArg, WhitelistRule.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, field: any ): WhitelistRule<ToPhantomTypeArgument<T0>> { return WhitelistRule.reified( typeArg, ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, json: Record<string, any> ): WhitelistRule<ToPhantomTypeArgument<T0>> { if (json.$typeName !== WhitelistRule.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(WhitelistRule.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return WhitelistRule.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, content: SuiParsedData ): WhitelistRule<ToPhantomTypeArgument<T0>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isWhitelistRule(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a WhitelistRule object`); } return WhitelistRule.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, data: SuiObjectData ): WhitelistRule<ToPhantomTypeArgument<T0>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isWhitelistRule(data.bcs.type)) { throw new Error(`object at is not a WhitelistRule object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return WhitelistRule.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return WhitelistRule.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: T0, id: string ): Promise<WhitelistRule<ToPhantomTypeArgument<T0>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching WhitelistRule object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isWhitelistRule(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a WhitelistRule object`); }

 return WhitelistRule.fromSuiObjectData( typeArg, res.data ); }

 }
