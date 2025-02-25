import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== TradeParams =============================== */

export function isTradeParams(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::trade_params::TradeParams`; }

export interface TradeParamsFields { takerFee: ToField<"u64">; makerFee: ToField<"u64">; stakeRequired: ToField<"u64"> }

export type TradeParamsReified = Reified< TradeParams, TradeParamsFields >;

export class TradeParams implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::trade_params::TradeParams`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = TradeParams.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::trade_params::TradeParams`; readonly $typeArgs: []; readonly $isPhantom = TradeParams.$isPhantom;

 readonly takerFee: ToField<"u64">; readonly makerFee: ToField<"u64">; readonly stakeRequired: ToField<"u64">

 private constructor(typeArgs: [], fields: TradeParamsFields, ) { this.$fullTypeName = composeSuiType( TradeParams.$typeName, ...typeArgs ) as `${typeof PKG_V1}::trade_params::TradeParams`; this.$typeArgs = typeArgs;

 this.takerFee = fields.takerFee;; this.makerFee = fields.makerFee;; this.stakeRequired = fields.stakeRequired; }

 static reified( ): TradeParamsReified { return { typeName: TradeParams.$typeName, fullTypeName: composeSuiType( TradeParams.$typeName, ...[] ) as `${typeof PKG_V1}::trade_params::TradeParams`, typeArgs: [ ] as [], isPhantom: TradeParams.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => TradeParams.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => TradeParams.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => TradeParams.fromBcs( data, ), bcs: TradeParams.bcs, fromJSONField: (field: any) => TradeParams.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => TradeParams.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => TradeParams.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => TradeParams.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => TradeParams.fetch( client, id, ), new: ( fields: TradeParamsFields, ) => { return new TradeParams( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return TradeParams.reified() }

 static phantom( ): PhantomReified<ToTypeStr<TradeParams>> { return phantom(TradeParams.reified( )); } static get p() { return TradeParams.phantom() }

 static get bcs() { return bcs.struct("TradeParams", {

 taker_fee: bcs.u64(), maker_fee: bcs.u64(), stake_required: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): TradeParams { return TradeParams.reified( ).new( { takerFee: decodeFromFields("u64", fields.taker_fee), makerFee: decodeFromFields("u64", fields.maker_fee), stakeRequired: decodeFromFields("u64", fields.stake_required) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): TradeParams { if (!isTradeParams(item.type)) { throw new Error("not a TradeParams type");

 }

 return TradeParams.reified( ).new( { takerFee: decodeFromFieldsWithTypes("u64", item.fields.taker_fee), makerFee: decodeFromFieldsWithTypes("u64", item.fields.maker_fee), stakeRequired: decodeFromFieldsWithTypes("u64", item.fields.stake_required) } ) }

 static fromBcs( data: Uint8Array ): TradeParams { return TradeParams.fromFields( TradeParams.bcs.parse(data) ) }

 toJSONField() { return {

 takerFee: this.takerFee.toString(),makerFee: this.makerFee.toString(),stakeRequired: this.stakeRequired.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): TradeParams { return TradeParams.reified( ).new( { takerFee: decodeFromJSONField("u64", field.takerFee), makerFee: decodeFromJSONField("u64", field.makerFee), stakeRequired: decodeFromJSONField("u64", field.stakeRequired) } ) }

 static fromJSON( json: Record<string, any> ): TradeParams { if (json.$typeName !== TradeParams.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return TradeParams.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): TradeParams { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isTradeParams(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a TradeParams object`); } return TradeParams.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): TradeParams { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isTradeParams(data.bcs.type)) { throw new Error(`object at is not a TradeParams object`); }

 return TradeParams.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return TradeParams.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<TradeParams> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching TradeParams object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isTradeParams(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a TradeParams object`); }

 return TradeParams.fromSuiObjectData( res.data ); }

 }
