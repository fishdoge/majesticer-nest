import * as reified from "../../_framework/reified";
import {ID} from "../../_dependencies/onchain/0x2/object/structs";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, fieldToJSON, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {Vector} from "../../_framework/vector";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== Price =============================== */

export function isPrice(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::deep_price::Price`; }

export interface PriceFields { conversionRate: ToField<"u64">; timestamp: ToField<"u64"> }

export type PriceReified = Reified< Price, PriceFields >;

export class Price implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::deep_price::Price`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Price.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::deep_price::Price`; readonly $typeArgs: []; readonly $isPhantom = Price.$isPhantom;

 readonly conversionRate: ToField<"u64">; readonly timestamp: ToField<"u64">

 private constructor(typeArgs: [], fields: PriceFields, ) { this.$fullTypeName = composeSuiType( Price.$typeName, ...typeArgs ) as `${typeof PKG_V1}::deep_price::Price`; this.$typeArgs = typeArgs;

 this.conversionRate = fields.conversionRate;; this.timestamp = fields.timestamp; }

 static reified( ): PriceReified { return { typeName: Price.$typeName, fullTypeName: composeSuiType( Price.$typeName, ...[] ) as `${typeof PKG_V1}::deep_price::Price`, typeArgs: [ ] as [], isPhantom: Price.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Price.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Price.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Price.fromBcs( data, ), bcs: Price.bcs, fromJSONField: (field: any) => Price.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Price.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Price.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Price.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Price.fetch( client, id, ), new: ( fields: PriceFields, ) => { return new Price( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Price.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Price>> { return phantom(Price.reified( )); } static get p() { return Price.phantom() }

 static get bcs() { return bcs.struct("Price", {

 conversion_rate: bcs.u64(), timestamp: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): Price { return Price.reified( ).new( { conversionRate: decodeFromFields("u64", fields.conversion_rate), timestamp: decodeFromFields("u64", fields.timestamp) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Price { if (!isPrice(item.type)) { throw new Error("not a Price type");

 }

 return Price.reified( ).new( { conversionRate: decodeFromFieldsWithTypes("u64", item.fields.conversion_rate), timestamp: decodeFromFieldsWithTypes("u64", item.fields.timestamp) } ) }

 static fromBcs( data: Uint8Array ): Price { return Price.fromFields( Price.bcs.parse(data) ) }

 toJSONField() { return {

 conversionRate: this.conversionRate.toString(),timestamp: this.timestamp.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Price { return Price.reified( ).new( { conversionRate: decodeFromJSONField("u64", field.conversionRate), timestamp: decodeFromJSONField("u64", field.timestamp) } ) }

 static fromJSON( json: Record<string, any> ): Price { if (json.$typeName !== Price.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Price.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Price { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPrice(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Price object`); } return Price.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Price { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isPrice(data.bcs.type)) { throw new Error(`object at is not a Price object`); }

 return Price.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Price.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Price> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Price object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPrice(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Price object`); }

 return Price.fromSuiObjectData( res.data ); }

 }

/* ============================== PriceAdded =============================== */

export function isPriceAdded(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::deep_price::PriceAdded`; }

export interface PriceAddedFields { conversionRate: ToField<"u64">; timestamp: ToField<"u64">; isBaseConversion: ToField<"bool">; referencePool: ToField<ID>; targetPool: ToField<ID> }

export type PriceAddedReified = Reified< PriceAdded, PriceAddedFields >;

export class PriceAdded implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::deep_price::PriceAdded`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = PriceAdded.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::deep_price::PriceAdded`; readonly $typeArgs: []; readonly $isPhantom = PriceAdded.$isPhantom;

 readonly conversionRate: ToField<"u64">; readonly timestamp: ToField<"u64">; readonly isBaseConversion: ToField<"bool">; readonly referencePool: ToField<ID>; readonly targetPool: ToField<ID>

 private constructor(typeArgs: [], fields: PriceAddedFields, ) { this.$fullTypeName = composeSuiType( PriceAdded.$typeName, ...typeArgs ) as `${typeof PKG_V1}::deep_price::PriceAdded`; this.$typeArgs = typeArgs;

 this.conversionRate = fields.conversionRate;; this.timestamp = fields.timestamp;; this.isBaseConversion = fields.isBaseConversion;; this.referencePool = fields.referencePool;; this.targetPool = fields.targetPool; }

 static reified( ): PriceAddedReified { return { typeName: PriceAdded.$typeName, fullTypeName: composeSuiType( PriceAdded.$typeName, ...[] ) as `${typeof PKG_V1}::deep_price::PriceAdded`, typeArgs: [ ] as [], isPhantom: PriceAdded.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => PriceAdded.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => PriceAdded.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => PriceAdded.fromBcs( data, ), bcs: PriceAdded.bcs, fromJSONField: (field: any) => PriceAdded.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => PriceAdded.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => PriceAdded.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => PriceAdded.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => PriceAdded.fetch( client, id, ), new: ( fields: PriceAddedFields, ) => { return new PriceAdded( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return PriceAdded.reified() }

 static phantom( ): PhantomReified<ToTypeStr<PriceAdded>> { return phantom(PriceAdded.reified( )); } static get p() { return PriceAdded.phantom() }

 static get bcs() { return bcs.struct("PriceAdded", {

 conversion_rate: bcs.u64(), timestamp: bcs.u64(), is_base_conversion: bcs.bool(), reference_pool: ID.bcs, target_pool: ID.bcs

}) };

 static fromFields( fields: Record<string, any> ): PriceAdded { return PriceAdded.reified( ).new( { conversionRate: decodeFromFields("u64", fields.conversion_rate), timestamp: decodeFromFields("u64", fields.timestamp), isBaseConversion: decodeFromFields("bool", fields.is_base_conversion), referencePool: decodeFromFields(ID.reified(), fields.reference_pool), targetPool: decodeFromFields(ID.reified(), fields.target_pool) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): PriceAdded { if (!isPriceAdded(item.type)) { throw new Error("not a PriceAdded type");

 }

 return PriceAdded.reified( ).new( { conversionRate: decodeFromFieldsWithTypes("u64", item.fields.conversion_rate), timestamp: decodeFromFieldsWithTypes("u64", item.fields.timestamp), isBaseConversion: decodeFromFieldsWithTypes("bool", item.fields.is_base_conversion), referencePool: decodeFromFieldsWithTypes(ID.reified(), item.fields.reference_pool), targetPool: decodeFromFieldsWithTypes(ID.reified(), item.fields.target_pool) } ) }

 static fromBcs( data: Uint8Array ): PriceAdded { return PriceAdded.fromFields( PriceAdded.bcs.parse(data) ) }

 toJSONField() { return {

 conversionRate: this.conversionRate.toString(),timestamp: this.timestamp.toString(),isBaseConversion: this.isBaseConversion,referencePool: this.referencePool,targetPool: this.targetPool,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): PriceAdded { return PriceAdded.reified( ).new( { conversionRate: decodeFromJSONField("u64", field.conversionRate), timestamp: decodeFromJSONField("u64", field.timestamp), isBaseConversion: decodeFromJSONField("bool", field.isBaseConversion), referencePool: decodeFromJSONField(ID.reified(), field.referencePool), targetPool: decodeFromJSONField(ID.reified(), field.targetPool) } ) }

 static fromJSON( json: Record<string, any> ): PriceAdded { if (json.$typeName !== PriceAdded.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return PriceAdded.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): PriceAdded { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPriceAdded(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a PriceAdded object`); } return PriceAdded.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): PriceAdded { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isPriceAdded(data.bcs.type)) { throw new Error(`object at is not a PriceAdded object`); }

 return PriceAdded.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return PriceAdded.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<PriceAdded> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching PriceAdded object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPriceAdded(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a PriceAdded object`); }

 return PriceAdded.fromSuiObjectData( res.data ); }

 }

/* ============================== DeepPrice =============================== */

export function isDeepPrice(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::deep_price::DeepPrice`; }

export interface DeepPriceFields { basePrices: ToField<Vector<Price>>; cumulativeBase: ToField<"u64">; quotePrices: ToField<Vector<Price>>; cumulativeQuote: ToField<"u64"> }

export type DeepPriceReified = Reified< DeepPrice, DeepPriceFields >;

export class DeepPrice implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::deep_price::DeepPrice`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = DeepPrice.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::deep_price::DeepPrice`; readonly $typeArgs: []; readonly $isPhantom = DeepPrice.$isPhantom;

 readonly basePrices: ToField<Vector<Price>>; readonly cumulativeBase: ToField<"u64">; readonly quotePrices: ToField<Vector<Price>>; readonly cumulativeQuote: ToField<"u64">

 private constructor(typeArgs: [], fields: DeepPriceFields, ) { this.$fullTypeName = composeSuiType( DeepPrice.$typeName, ...typeArgs ) as `${typeof PKG_V1}::deep_price::DeepPrice`; this.$typeArgs = typeArgs;

 this.basePrices = fields.basePrices;; this.cumulativeBase = fields.cumulativeBase;; this.quotePrices = fields.quotePrices;; this.cumulativeQuote = fields.cumulativeQuote; }

 static reified( ): DeepPriceReified { return { typeName: DeepPrice.$typeName, fullTypeName: composeSuiType( DeepPrice.$typeName, ...[] ) as `${typeof PKG_V1}::deep_price::DeepPrice`, typeArgs: [ ] as [], isPhantom: DeepPrice.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => DeepPrice.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => DeepPrice.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => DeepPrice.fromBcs( data, ), bcs: DeepPrice.bcs, fromJSONField: (field: any) => DeepPrice.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => DeepPrice.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => DeepPrice.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => DeepPrice.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => DeepPrice.fetch( client, id, ), new: ( fields: DeepPriceFields, ) => { return new DeepPrice( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return DeepPrice.reified() }

 static phantom( ): PhantomReified<ToTypeStr<DeepPrice>> { return phantom(DeepPrice.reified( )); } static get p() { return DeepPrice.phantom() }

 static get bcs() { return bcs.struct("DeepPrice", {

 base_prices: bcs.vector(Price.bcs), cumulative_base: bcs.u64(), quote_prices: bcs.vector(Price.bcs), cumulative_quote: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): DeepPrice { return DeepPrice.reified( ).new( { basePrices: decodeFromFields(reified.vector(Price.reified()), fields.base_prices), cumulativeBase: decodeFromFields("u64", fields.cumulative_base), quotePrices: decodeFromFields(reified.vector(Price.reified()), fields.quote_prices), cumulativeQuote: decodeFromFields("u64", fields.cumulative_quote) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): DeepPrice { if (!isDeepPrice(item.type)) { throw new Error("not a DeepPrice type");

 }

 return DeepPrice.reified( ).new( { basePrices: decodeFromFieldsWithTypes(reified.vector(Price.reified()), item.fields.base_prices), cumulativeBase: decodeFromFieldsWithTypes("u64", item.fields.cumulative_base), quotePrices: decodeFromFieldsWithTypes(reified.vector(Price.reified()), item.fields.quote_prices), cumulativeQuote: decodeFromFieldsWithTypes("u64", item.fields.cumulative_quote) } ) }

 static fromBcs( data: Uint8Array ): DeepPrice { return DeepPrice.fromFields( DeepPrice.bcs.parse(data) ) }

 toJSONField() { return {

 basePrices: fieldToJSON<Vector<Price>>(`vector<${Price.$typeName}>`, this.basePrices),cumulativeBase: this.cumulativeBase.toString(),quotePrices: fieldToJSON<Vector<Price>>(`vector<${Price.$typeName}>`, this.quotePrices),cumulativeQuote: this.cumulativeQuote.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): DeepPrice { return DeepPrice.reified( ).new( { basePrices: decodeFromJSONField(reified.vector(Price.reified()), field.basePrices), cumulativeBase: decodeFromJSONField("u64", field.cumulativeBase), quotePrices: decodeFromJSONField(reified.vector(Price.reified()), field.quotePrices), cumulativeQuote: decodeFromJSONField("u64", field.cumulativeQuote) } ) }

 static fromJSON( json: Record<string, any> ): DeepPrice { if (json.$typeName !== DeepPrice.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return DeepPrice.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): DeepPrice { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDeepPrice(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a DeepPrice object`); } return DeepPrice.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): DeepPrice { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isDeepPrice(data.bcs.type)) { throw new Error(`object at is not a DeepPrice object`); }

 return DeepPrice.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return DeepPrice.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<DeepPrice> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching DeepPrice object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDeepPrice(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a DeepPrice object`); }

 return DeepPrice.fromSuiObjectData( res.data ); }

 }

/* ============================== OrderDeepPrice =============================== */

export function isOrderDeepPrice(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::deep_price::OrderDeepPrice`; }

export interface OrderDeepPriceFields { assetIsBase: ToField<"bool">; deepPerAsset: ToField<"u64"> }

export type OrderDeepPriceReified = Reified< OrderDeepPrice, OrderDeepPriceFields >;

export class OrderDeepPrice implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::deep_price::OrderDeepPrice`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = OrderDeepPrice.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::deep_price::OrderDeepPrice`; readonly $typeArgs: []; readonly $isPhantom = OrderDeepPrice.$isPhantom;

 readonly assetIsBase: ToField<"bool">; readonly deepPerAsset: ToField<"u64">

 private constructor(typeArgs: [], fields: OrderDeepPriceFields, ) { this.$fullTypeName = composeSuiType( OrderDeepPrice.$typeName, ...typeArgs ) as `${typeof PKG_V1}::deep_price::OrderDeepPrice`; this.$typeArgs = typeArgs;

 this.assetIsBase = fields.assetIsBase;; this.deepPerAsset = fields.deepPerAsset; }

 static reified( ): OrderDeepPriceReified { return { typeName: OrderDeepPrice.$typeName, fullTypeName: composeSuiType( OrderDeepPrice.$typeName, ...[] ) as `${typeof PKG_V1}::deep_price::OrderDeepPrice`, typeArgs: [ ] as [], isPhantom: OrderDeepPrice.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => OrderDeepPrice.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => OrderDeepPrice.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => OrderDeepPrice.fromBcs( data, ), bcs: OrderDeepPrice.bcs, fromJSONField: (field: any) => OrderDeepPrice.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => OrderDeepPrice.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => OrderDeepPrice.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => OrderDeepPrice.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => OrderDeepPrice.fetch( client, id, ), new: ( fields: OrderDeepPriceFields, ) => { return new OrderDeepPrice( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return OrderDeepPrice.reified() }

 static phantom( ): PhantomReified<ToTypeStr<OrderDeepPrice>> { return phantom(OrderDeepPrice.reified( )); } static get p() { return OrderDeepPrice.phantom() }

 static get bcs() { return bcs.struct("OrderDeepPrice", {

 asset_is_base: bcs.bool(), deep_per_asset: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): OrderDeepPrice { return OrderDeepPrice.reified( ).new( { assetIsBase: decodeFromFields("bool", fields.asset_is_base), deepPerAsset: decodeFromFields("u64", fields.deep_per_asset) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): OrderDeepPrice { if (!isOrderDeepPrice(item.type)) { throw new Error("not a OrderDeepPrice type");

 }

 return OrderDeepPrice.reified( ).new( { assetIsBase: decodeFromFieldsWithTypes("bool", item.fields.asset_is_base), deepPerAsset: decodeFromFieldsWithTypes("u64", item.fields.deep_per_asset) } ) }

 static fromBcs( data: Uint8Array ): OrderDeepPrice { return OrderDeepPrice.fromFields( OrderDeepPrice.bcs.parse(data) ) }

 toJSONField() { return {

 assetIsBase: this.assetIsBase,deepPerAsset: this.deepPerAsset.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): OrderDeepPrice { return OrderDeepPrice.reified( ).new( { assetIsBase: decodeFromJSONField("bool", field.assetIsBase), deepPerAsset: decodeFromJSONField("u64", field.deepPerAsset) } ) }

 static fromJSON( json: Record<string, any> ): OrderDeepPrice { if (json.$typeName !== OrderDeepPrice.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return OrderDeepPrice.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): OrderDeepPrice { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isOrderDeepPrice(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a OrderDeepPrice object`); } return OrderDeepPrice.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): OrderDeepPrice { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isOrderDeepPrice(data.bcs.type)) { throw new Error(`object at is not a OrderDeepPrice object`); }

 return OrderDeepPrice.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return OrderDeepPrice.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<OrderDeepPrice> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching OrderDeepPrice object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isOrderDeepPrice(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a OrderDeepPrice object`); }

 return OrderDeepPrice.fromSuiObjectData( res.data ); }

 }
