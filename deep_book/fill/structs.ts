import {ID} from "../../_dependencies/onchain/0x2/object/structs";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {OrderDeepPrice} from "../deep-price/structs";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== Fill =============================== */

export function isFill(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::fill::Fill`; }

export interface FillFields { makerOrderId: ToField<"u128">; makerClientOrderId: ToField<"u64">; executionPrice: ToField<"u64">; balanceManagerId: ToField<ID>; expired: ToField<"bool">; completed: ToField<"bool">; originalMakerQuantity: ToField<"u64">; baseQuantity: ToField<"u64">; quoteQuantity: ToField<"u64">; takerIsBid: ToField<"bool">; makerEpoch: ToField<"u64">; makerDeepPrice: ToField<OrderDeepPrice>; takerFee: ToField<"u64">; takerFeeIsDeep: ToField<"bool">; makerFee: ToField<"u64">; makerFeeIsDeep: ToField<"bool"> }

export type FillReified = Reified< Fill, FillFields >;

export class Fill implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::fill::Fill`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Fill.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::fill::Fill`; readonly $typeArgs: []; readonly $isPhantom = Fill.$isPhantom;

 readonly makerOrderId: ToField<"u128">; readonly makerClientOrderId: ToField<"u64">; readonly executionPrice: ToField<"u64">; readonly balanceManagerId: ToField<ID>; readonly expired: ToField<"bool">; readonly completed: ToField<"bool">; readonly originalMakerQuantity: ToField<"u64">; readonly baseQuantity: ToField<"u64">; readonly quoteQuantity: ToField<"u64">; readonly takerIsBid: ToField<"bool">; readonly makerEpoch: ToField<"u64">; readonly makerDeepPrice: ToField<OrderDeepPrice>; readonly takerFee: ToField<"u64">; readonly takerFeeIsDeep: ToField<"bool">; readonly makerFee: ToField<"u64">; readonly makerFeeIsDeep: ToField<"bool">

 private constructor(typeArgs: [], fields: FillFields, ) { this.$fullTypeName = composeSuiType( Fill.$typeName, ...typeArgs ) as `${typeof PKG_V1}::fill::Fill`; this.$typeArgs = typeArgs;

 this.makerOrderId = fields.makerOrderId;; this.makerClientOrderId = fields.makerClientOrderId;; this.executionPrice = fields.executionPrice;; this.balanceManagerId = fields.balanceManagerId;; this.expired = fields.expired;; this.completed = fields.completed;; this.originalMakerQuantity = fields.originalMakerQuantity;; this.baseQuantity = fields.baseQuantity;; this.quoteQuantity = fields.quoteQuantity;; this.takerIsBid = fields.takerIsBid;; this.makerEpoch = fields.makerEpoch;; this.makerDeepPrice = fields.makerDeepPrice;; this.takerFee = fields.takerFee;; this.takerFeeIsDeep = fields.takerFeeIsDeep;; this.makerFee = fields.makerFee;; this.makerFeeIsDeep = fields.makerFeeIsDeep; }

 static reified( ): FillReified { return { typeName: Fill.$typeName, fullTypeName: composeSuiType( Fill.$typeName, ...[] ) as `${typeof PKG_V1}::fill::Fill`, typeArgs: [ ] as [], isPhantom: Fill.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Fill.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Fill.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Fill.fromBcs( data, ), bcs: Fill.bcs, fromJSONField: (field: any) => Fill.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Fill.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Fill.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Fill.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Fill.fetch( client, id, ), new: ( fields: FillFields, ) => { return new Fill( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Fill.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Fill>> { return phantom(Fill.reified( )); } static get p() { return Fill.phantom() }

 static get bcs() { return bcs.struct("Fill", {

 maker_order_id: bcs.u128(), maker_client_order_id: bcs.u64(), execution_price: bcs.u64(), balance_manager_id: ID.bcs, expired: bcs.bool(), completed: bcs.bool(), original_maker_quantity: bcs.u64(), base_quantity: bcs.u64(), quote_quantity: bcs.u64(), taker_is_bid: bcs.bool(), maker_epoch: bcs.u64(), maker_deep_price: OrderDeepPrice.bcs, taker_fee: bcs.u64(), taker_fee_is_deep: bcs.bool(), maker_fee: bcs.u64(), maker_fee_is_deep: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): Fill { return Fill.reified( ).new( { makerOrderId: decodeFromFields("u128", fields.maker_order_id), makerClientOrderId: decodeFromFields("u64", fields.maker_client_order_id), executionPrice: decodeFromFields("u64", fields.execution_price), balanceManagerId: decodeFromFields(ID.reified(), fields.balance_manager_id), expired: decodeFromFields("bool", fields.expired), completed: decodeFromFields("bool", fields.completed), originalMakerQuantity: decodeFromFields("u64", fields.original_maker_quantity), baseQuantity: decodeFromFields("u64", fields.base_quantity), quoteQuantity: decodeFromFields("u64", fields.quote_quantity), takerIsBid: decodeFromFields("bool", fields.taker_is_bid), makerEpoch: decodeFromFields("u64", fields.maker_epoch), makerDeepPrice: decodeFromFields(OrderDeepPrice.reified(), fields.maker_deep_price), takerFee: decodeFromFields("u64", fields.taker_fee), takerFeeIsDeep: decodeFromFields("bool", fields.taker_fee_is_deep), makerFee: decodeFromFields("u64", fields.maker_fee), makerFeeIsDeep: decodeFromFields("bool", fields.maker_fee_is_deep) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Fill { if (!isFill(item.type)) { throw new Error("not a Fill type");

 }

 return Fill.reified( ).new( { makerOrderId: decodeFromFieldsWithTypes("u128", item.fields.maker_order_id), makerClientOrderId: decodeFromFieldsWithTypes("u64", item.fields.maker_client_order_id), executionPrice: decodeFromFieldsWithTypes("u64", item.fields.execution_price), balanceManagerId: decodeFromFieldsWithTypes(ID.reified(), item.fields.balance_manager_id), expired: decodeFromFieldsWithTypes("bool", item.fields.expired), completed: decodeFromFieldsWithTypes("bool", item.fields.completed), originalMakerQuantity: decodeFromFieldsWithTypes("u64", item.fields.original_maker_quantity), baseQuantity: decodeFromFieldsWithTypes("u64", item.fields.base_quantity), quoteQuantity: decodeFromFieldsWithTypes("u64", item.fields.quote_quantity), takerIsBid: decodeFromFieldsWithTypes("bool", item.fields.taker_is_bid), makerEpoch: decodeFromFieldsWithTypes("u64", item.fields.maker_epoch), makerDeepPrice: decodeFromFieldsWithTypes(OrderDeepPrice.reified(), item.fields.maker_deep_price), takerFee: decodeFromFieldsWithTypes("u64", item.fields.taker_fee), takerFeeIsDeep: decodeFromFieldsWithTypes("bool", item.fields.taker_fee_is_deep), makerFee: decodeFromFieldsWithTypes("u64", item.fields.maker_fee), makerFeeIsDeep: decodeFromFieldsWithTypes("bool", item.fields.maker_fee_is_deep) } ) }

 static fromBcs( data: Uint8Array ): Fill { return Fill.fromFields( Fill.bcs.parse(data) ) }

 toJSONField() { return {

 makerOrderId: this.makerOrderId.toString(),makerClientOrderId: this.makerClientOrderId.toString(),executionPrice: this.executionPrice.toString(),balanceManagerId: this.balanceManagerId,expired: this.expired,completed: this.completed,originalMakerQuantity: this.originalMakerQuantity.toString(),baseQuantity: this.baseQuantity.toString(),quoteQuantity: this.quoteQuantity.toString(),takerIsBid: this.takerIsBid,makerEpoch: this.makerEpoch.toString(),makerDeepPrice: this.makerDeepPrice.toJSONField(),takerFee: this.takerFee.toString(),takerFeeIsDeep: this.takerFeeIsDeep,makerFee: this.makerFee.toString(),makerFeeIsDeep: this.makerFeeIsDeep,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Fill { return Fill.reified( ).new( { makerOrderId: decodeFromJSONField("u128", field.makerOrderId), makerClientOrderId: decodeFromJSONField("u64", field.makerClientOrderId), executionPrice: decodeFromJSONField("u64", field.executionPrice), balanceManagerId: decodeFromJSONField(ID.reified(), field.balanceManagerId), expired: decodeFromJSONField("bool", field.expired), completed: decodeFromJSONField("bool", field.completed), originalMakerQuantity: decodeFromJSONField("u64", field.originalMakerQuantity), baseQuantity: decodeFromJSONField("u64", field.baseQuantity), quoteQuantity: decodeFromJSONField("u64", field.quoteQuantity), takerIsBid: decodeFromJSONField("bool", field.takerIsBid), makerEpoch: decodeFromJSONField("u64", field.makerEpoch), makerDeepPrice: decodeFromJSONField(OrderDeepPrice.reified(), field.makerDeepPrice), takerFee: decodeFromJSONField("u64", field.takerFee), takerFeeIsDeep: decodeFromJSONField("bool", field.takerFeeIsDeep), makerFee: decodeFromJSONField("u64", field.makerFee), makerFeeIsDeep: decodeFromJSONField("bool", field.makerFeeIsDeep) } ) }

 static fromJSON( json: Record<string, any> ): Fill { if (json.$typeName !== Fill.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Fill.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Fill { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isFill(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Fill object`); } return Fill.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Fill { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isFill(data.bcs.type)) { throw new Error(`object at is not a Fill object`); }

 return Fill.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Fill.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Fill> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Fill object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isFill(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Fill object`); }

 return Fill.fromSuiObjectData( res.data ); }

 }
