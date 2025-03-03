import * as reified from "../../_framework/reified";
import {ID} from "../../_dependencies/onchain/0x2/object/structs";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, fieldToJSON, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {Vector} from "../../_framework/vector";
import {OrderDeepPrice} from "../deep-price/structs";
import {Fill} from "../fill/structs";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64, fromHEX, toHEX} from "@mysten/sui/utils";

/* ============================== OrderInfo =============================== */

export function isOrderInfo(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::order_info::OrderInfo`; }

export interface OrderInfoFields { poolId: ToField<ID>; orderId: ToField<"u128">; balanceManagerId: ToField<ID>; clientOrderId: ToField<"u64">; trader: ToField<"address">; orderType: ToField<"u8">; selfMatchingOption: ToField<"u8">; price: ToField<"u64">; isBid: ToField<"bool">; originalQuantity: ToField<"u64">; orderDeepPrice: ToField<OrderDeepPrice>; expireTimestamp: ToField<"u64">; executedQuantity: ToField<"u64">; cumulativeQuoteQuantity: ToField<"u64">; fills: ToField<Vector<Fill>>; feeIsDeep: ToField<"bool">; paidFees: ToField<"u64">; makerFees: ToField<"u64">; epoch: ToField<"u64">; status: ToField<"u8">; marketOrder: ToField<"bool">; fillLimitReached: ToField<"bool">; orderInserted: ToField<"bool">; timestamp: ToField<"u64"> }

export type OrderInfoReified = Reified< OrderInfo, OrderInfoFields >;

export class OrderInfo implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::order_info::OrderInfo`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = OrderInfo.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::order_info::OrderInfo`; readonly $typeArgs: []; readonly $isPhantom = OrderInfo.$isPhantom;

 readonly poolId: ToField<ID>; readonly orderId: ToField<"u128">; readonly balanceManagerId: ToField<ID>; readonly clientOrderId: ToField<"u64">; readonly trader: ToField<"address">; readonly orderType: ToField<"u8">; readonly selfMatchingOption: ToField<"u8">; readonly price: ToField<"u64">; readonly isBid: ToField<"bool">; readonly originalQuantity: ToField<"u64">; readonly orderDeepPrice: ToField<OrderDeepPrice>; readonly expireTimestamp: ToField<"u64">; readonly executedQuantity: ToField<"u64">; readonly cumulativeQuoteQuantity: ToField<"u64">; readonly fills: ToField<Vector<Fill>>; readonly feeIsDeep: ToField<"bool">; readonly paidFees: ToField<"u64">; readonly makerFees: ToField<"u64">; readonly epoch: ToField<"u64">; readonly status: ToField<"u8">; readonly marketOrder: ToField<"bool">; readonly fillLimitReached: ToField<"bool">; readonly orderInserted: ToField<"bool">; readonly timestamp: ToField<"u64">

 private constructor(typeArgs: [], fields: OrderInfoFields, ) { this.$fullTypeName = composeSuiType( OrderInfo.$typeName, ...typeArgs ) as `${typeof PKG_V1}::order_info::OrderInfo`; this.$typeArgs = typeArgs;

 this.poolId = fields.poolId;; this.orderId = fields.orderId;; this.balanceManagerId = fields.balanceManagerId;; this.clientOrderId = fields.clientOrderId;; this.trader = fields.trader;; this.orderType = fields.orderType;; this.selfMatchingOption = fields.selfMatchingOption;; this.price = fields.price;; this.isBid = fields.isBid;; this.originalQuantity = fields.originalQuantity;; this.orderDeepPrice = fields.orderDeepPrice;; this.expireTimestamp = fields.expireTimestamp;; this.executedQuantity = fields.executedQuantity;; this.cumulativeQuoteQuantity = fields.cumulativeQuoteQuantity;; this.fills = fields.fills;; this.feeIsDeep = fields.feeIsDeep;; this.paidFees = fields.paidFees;; this.makerFees = fields.makerFees;; this.epoch = fields.epoch;; this.status = fields.status;; this.marketOrder = fields.marketOrder;; this.fillLimitReached = fields.fillLimitReached;; this.orderInserted = fields.orderInserted;; this.timestamp = fields.timestamp; }

 static reified( ): OrderInfoReified { return { typeName: OrderInfo.$typeName, fullTypeName: composeSuiType( OrderInfo.$typeName, ...[] ) as `${typeof PKG_V1}::order_info::OrderInfo`, typeArgs: [ ] as [], isPhantom: OrderInfo.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => OrderInfo.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => OrderInfo.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => OrderInfo.fromBcs( data, ), bcs: OrderInfo.bcs, fromJSONField: (field: any) => OrderInfo.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => OrderInfo.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => OrderInfo.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => OrderInfo.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => OrderInfo.fetch( client, id, ), new: ( fields: OrderInfoFields, ) => { return new OrderInfo( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return OrderInfo.reified() }

 static phantom( ): PhantomReified<ToTypeStr<OrderInfo>> { return phantom(OrderInfo.reified( )); } static get p() { return OrderInfo.phantom() }

 static get bcs() { return bcs.struct("OrderInfo", {

 pool_id: ID.bcs, order_id: bcs.u128(), balance_manager_id: ID.bcs, client_order_id: bcs.u64(), trader: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), order_type: bcs.u8(), self_matching_option: bcs.u8(), price: bcs.u64(), is_bid: bcs.bool(), original_quantity: bcs.u64(), order_deep_price: OrderDeepPrice.bcs, expire_timestamp: bcs.u64(), executed_quantity: bcs.u64(), cumulative_quote_quantity: bcs.u64(), fills: bcs.vector(Fill.bcs), fee_is_deep: bcs.bool(), paid_fees: bcs.u64(), maker_fees: bcs.u64(), epoch: bcs.u64(), status: bcs.u8(), market_order: bcs.bool(), fill_limit_reached: bcs.bool(), order_inserted: bcs.bool(), timestamp: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): OrderInfo { return OrderInfo.reified( ).new( { poolId: decodeFromFields(ID.reified(), fields.pool_id), orderId: decodeFromFields("u128", fields.order_id), balanceManagerId: decodeFromFields(ID.reified(), fields.balance_manager_id), clientOrderId: decodeFromFields("u64", fields.client_order_id), trader: decodeFromFields("address", fields.trader), orderType: decodeFromFields("u8", fields.order_type), selfMatchingOption: decodeFromFields("u8", fields.self_matching_option), price: decodeFromFields("u64", fields.price), isBid: decodeFromFields("bool", fields.is_bid), originalQuantity: decodeFromFields("u64", fields.original_quantity), orderDeepPrice: decodeFromFields(OrderDeepPrice.reified(), fields.order_deep_price), expireTimestamp: decodeFromFields("u64", fields.expire_timestamp), executedQuantity: decodeFromFields("u64", fields.executed_quantity), cumulativeQuoteQuantity: decodeFromFields("u64", fields.cumulative_quote_quantity), fills: decodeFromFields(reified.vector(Fill.reified()), fields.fills), feeIsDeep: decodeFromFields("bool", fields.fee_is_deep), paidFees: decodeFromFields("u64", fields.paid_fees), makerFees: decodeFromFields("u64", fields.maker_fees), epoch: decodeFromFields("u64", fields.epoch), status: decodeFromFields("u8", fields.status), marketOrder: decodeFromFields("bool", fields.market_order), fillLimitReached: decodeFromFields("bool", fields.fill_limit_reached), orderInserted: decodeFromFields("bool", fields.order_inserted), timestamp: decodeFromFields("u64", fields.timestamp) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): OrderInfo { if (!isOrderInfo(item.type)) { throw new Error("not a OrderInfo type");

 }

 return OrderInfo.reified( ).new( { poolId: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool_id), orderId: decodeFromFieldsWithTypes("u128", item.fields.order_id), balanceManagerId: decodeFromFieldsWithTypes(ID.reified(), item.fields.balance_manager_id), clientOrderId: decodeFromFieldsWithTypes("u64", item.fields.client_order_id), trader: decodeFromFieldsWithTypes("address", item.fields.trader), orderType: decodeFromFieldsWithTypes("u8", item.fields.order_type), selfMatchingOption: decodeFromFieldsWithTypes("u8", item.fields.self_matching_option), price: decodeFromFieldsWithTypes("u64", item.fields.price), isBid: decodeFromFieldsWithTypes("bool", item.fields.is_bid), originalQuantity: decodeFromFieldsWithTypes("u64", item.fields.original_quantity), orderDeepPrice: decodeFromFieldsWithTypes(OrderDeepPrice.reified(), item.fields.order_deep_price), expireTimestamp: decodeFromFieldsWithTypes("u64", item.fields.expire_timestamp), executedQuantity: decodeFromFieldsWithTypes("u64", item.fields.executed_quantity), cumulativeQuoteQuantity: decodeFromFieldsWithTypes("u64", item.fields.cumulative_quote_quantity), fills: decodeFromFieldsWithTypes(reified.vector(Fill.reified()), item.fields.fills), feeIsDeep: decodeFromFieldsWithTypes("bool", item.fields.fee_is_deep), paidFees: decodeFromFieldsWithTypes("u64", item.fields.paid_fees), makerFees: decodeFromFieldsWithTypes("u64", item.fields.maker_fees), epoch: decodeFromFieldsWithTypes("u64", item.fields.epoch), status: decodeFromFieldsWithTypes("u8", item.fields.status), marketOrder: decodeFromFieldsWithTypes("bool", item.fields.market_order), fillLimitReached: decodeFromFieldsWithTypes("bool", item.fields.fill_limit_reached), orderInserted: decodeFromFieldsWithTypes("bool", item.fields.order_inserted), timestamp: decodeFromFieldsWithTypes("u64", item.fields.timestamp) } ) }

 static fromBcs( data: Uint8Array ): OrderInfo { return OrderInfo.fromFields( OrderInfo.bcs.parse(data) ) }

 toJSONField() { return {

 poolId: this.poolId,orderId: this.orderId.toString(),balanceManagerId: this.balanceManagerId,clientOrderId: this.clientOrderId.toString(),trader: this.trader,orderType: this.orderType,selfMatchingOption: this.selfMatchingOption,price: this.price.toString(),isBid: this.isBid,originalQuantity: this.originalQuantity.toString(),orderDeepPrice: this.orderDeepPrice.toJSONField(),expireTimestamp: this.expireTimestamp.toString(),executedQuantity: this.executedQuantity.toString(),cumulativeQuoteQuantity: this.cumulativeQuoteQuantity.toString(),fills: fieldToJSON<Vector<Fill>>(`vector<${Fill.$typeName}>`, this.fills),feeIsDeep: this.feeIsDeep,paidFees: this.paidFees.toString(),makerFees: this.makerFees.toString(),epoch: this.epoch.toString(),status: this.status,marketOrder: this.marketOrder,fillLimitReached: this.fillLimitReached,orderInserted: this.orderInserted,timestamp: this.timestamp.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): OrderInfo { return OrderInfo.reified( ).new( { poolId: decodeFromJSONField(ID.reified(), field.poolId), orderId: decodeFromJSONField("u128", field.orderId), balanceManagerId: decodeFromJSONField(ID.reified(), field.balanceManagerId), clientOrderId: decodeFromJSONField("u64", field.clientOrderId), trader: decodeFromJSONField("address", field.trader), orderType: decodeFromJSONField("u8", field.orderType), selfMatchingOption: decodeFromJSONField("u8", field.selfMatchingOption), price: decodeFromJSONField("u64", field.price), isBid: decodeFromJSONField("bool", field.isBid), originalQuantity: decodeFromJSONField("u64", field.originalQuantity), orderDeepPrice: decodeFromJSONField(OrderDeepPrice.reified(), field.orderDeepPrice), expireTimestamp: decodeFromJSONField("u64", field.expireTimestamp), executedQuantity: decodeFromJSONField("u64", field.executedQuantity), cumulativeQuoteQuantity: decodeFromJSONField("u64", field.cumulativeQuoteQuantity), fills: decodeFromJSONField(reified.vector(Fill.reified()), field.fills), feeIsDeep: decodeFromJSONField("bool", field.feeIsDeep), paidFees: decodeFromJSONField("u64", field.paidFees), makerFees: decodeFromJSONField("u64", field.makerFees), epoch: decodeFromJSONField("u64", field.epoch), status: decodeFromJSONField("u8", field.status), marketOrder: decodeFromJSONField("bool", field.marketOrder), fillLimitReached: decodeFromJSONField("bool", field.fillLimitReached), orderInserted: decodeFromJSONField("bool", field.orderInserted), timestamp: decodeFromJSONField("u64", field.timestamp) } ) }

 static fromJSON( json: Record<string, any> ): OrderInfo { if (json.$typeName !== OrderInfo.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return OrderInfo.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): OrderInfo { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isOrderInfo(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a OrderInfo object`); } return OrderInfo.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): OrderInfo { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isOrderInfo(data.bcs.type)) { throw new Error(`object at is not a OrderInfo object`); }

 return OrderInfo.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return OrderInfo.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<OrderInfo> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching OrderInfo object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isOrderInfo(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a OrderInfo object`); }

 return OrderInfo.fromSuiObjectData( res.data ); }

 }

/* ============================== OrderFilled =============================== */

export function isOrderFilled(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::order_info::OrderFilled`; }

export interface OrderFilledFields { poolId: ToField<ID>; makerOrderId: ToField<"u128">; takerOrderId: ToField<"u128">; makerClientOrderId: ToField<"u64">; takerClientOrderId: ToField<"u64">; price: ToField<"u64">; takerIsBid: ToField<"bool">; takerFee: ToField<"u64">; takerFeeIsDeep: ToField<"bool">; makerFee: ToField<"u64">; makerFeeIsDeep: ToField<"bool">; baseQuantity: ToField<"u64">; quoteQuantity: ToField<"u64">; makerBalanceManagerId: ToField<ID>; takerBalanceManagerId: ToField<ID>; timestamp: ToField<"u64"> }

export type OrderFilledReified = Reified< OrderFilled, OrderFilledFields >;

export class OrderFilled implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::order_info::OrderFilled`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = OrderFilled.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::order_info::OrderFilled`; readonly $typeArgs: []; readonly $isPhantom = OrderFilled.$isPhantom;

 readonly poolId: ToField<ID>; readonly makerOrderId: ToField<"u128">; readonly takerOrderId: ToField<"u128">; readonly makerClientOrderId: ToField<"u64">; readonly takerClientOrderId: ToField<"u64">; readonly price: ToField<"u64">; readonly takerIsBid: ToField<"bool">; readonly takerFee: ToField<"u64">; readonly takerFeeIsDeep: ToField<"bool">; readonly makerFee: ToField<"u64">; readonly makerFeeIsDeep: ToField<"bool">; readonly baseQuantity: ToField<"u64">; readonly quoteQuantity: ToField<"u64">; readonly makerBalanceManagerId: ToField<ID>; readonly takerBalanceManagerId: ToField<ID>; readonly timestamp: ToField<"u64">

 private constructor(typeArgs: [], fields: OrderFilledFields, ) { this.$fullTypeName = composeSuiType( OrderFilled.$typeName, ...typeArgs ) as `${typeof PKG_V1}::order_info::OrderFilled`; this.$typeArgs = typeArgs;

 this.poolId = fields.poolId;; this.makerOrderId = fields.makerOrderId;; this.takerOrderId = fields.takerOrderId;; this.makerClientOrderId = fields.makerClientOrderId;; this.takerClientOrderId = fields.takerClientOrderId;; this.price = fields.price;; this.takerIsBid = fields.takerIsBid;; this.takerFee = fields.takerFee;; this.takerFeeIsDeep = fields.takerFeeIsDeep;; this.makerFee = fields.makerFee;; this.makerFeeIsDeep = fields.makerFeeIsDeep;; this.baseQuantity = fields.baseQuantity;; this.quoteQuantity = fields.quoteQuantity;; this.makerBalanceManagerId = fields.makerBalanceManagerId;; this.takerBalanceManagerId = fields.takerBalanceManagerId;; this.timestamp = fields.timestamp; }

 static reified( ): OrderFilledReified { return { typeName: OrderFilled.$typeName, fullTypeName: composeSuiType( OrderFilled.$typeName, ...[] ) as `${typeof PKG_V1}::order_info::OrderFilled`, typeArgs: [ ] as [], isPhantom: OrderFilled.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => OrderFilled.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => OrderFilled.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => OrderFilled.fromBcs( data, ), bcs: OrderFilled.bcs, fromJSONField: (field: any) => OrderFilled.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => OrderFilled.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => OrderFilled.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => OrderFilled.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => OrderFilled.fetch( client, id, ), new: ( fields: OrderFilledFields, ) => { return new OrderFilled( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return OrderFilled.reified() }

 static phantom( ): PhantomReified<ToTypeStr<OrderFilled>> { return phantom(OrderFilled.reified( )); } static get p() { return OrderFilled.phantom() }

 static get bcs() { return bcs.struct("OrderFilled", {

 pool_id: ID.bcs, maker_order_id: bcs.u128(), taker_order_id: bcs.u128(), maker_client_order_id: bcs.u64(), taker_client_order_id: bcs.u64(), price: bcs.u64(), taker_is_bid: bcs.bool(), taker_fee: bcs.u64(), taker_fee_is_deep: bcs.bool(), maker_fee: bcs.u64(), maker_fee_is_deep: bcs.bool(), base_quantity: bcs.u64(), quote_quantity: bcs.u64(), maker_balance_manager_id: ID.bcs, taker_balance_manager_id: ID.bcs, timestamp: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): OrderFilled { return OrderFilled.reified( ).new( { poolId: decodeFromFields(ID.reified(), fields.pool_id), makerOrderId: decodeFromFields("u128", fields.maker_order_id), takerOrderId: decodeFromFields("u128", fields.taker_order_id), makerClientOrderId: decodeFromFields("u64", fields.maker_client_order_id), takerClientOrderId: decodeFromFields("u64", fields.taker_client_order_id), price: decodeFromFields("u64", fields.price), takerIsBid: decodeFromFields("bool", fields.taker_is_bid), takerFee: decodeFromFields("u64", fields.taker_fee), takerFeeIsDeep: decodeFromFields("bool", fields.taker_fee_is_deep), makerFee: decodeFromFields("u64", fields.maker_fee), makerFeeIsDeep: decodeFromFields("bool", fields.maker_fee_is_deep), baseQuantity: decodeFromFields("u64", fields.base_quantity), quoteQuantity: decodeFromFields("u64", fields.quote_quantity), makerBalanceManagerId: decodeFromFields(ID.reified(), fields.maker_balance_manager_id), takerBalanceManagerId: decodeFromFields(ID.reified(), fields.taker_balance_manager_id), timestamp: decodeFromFields("u64", fields.timestamp) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): OrderFilled { if (!isOrderFilled(item.type)) { throw new Error("not a OrderFilled type");

 }

 return OrderFilled.reified( ).new( { poolId: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool_id), makerOrderId: decodeFromFieldsWithTypes("u128", item.fields.maker_order_id), takerOrderId: decodeFromFieldsWithTypes("u128", item.fields.taker_order_id), makerClientOrderId: decodeFromFieldsWithTypes("u64", item.fields.maker_client_order_id), takerClientOrderId: decodeFromFieldsWithTypes("u64", item.fields.taker_client_order_id), price: decodeFromFieldsWithTypes("u64", item.fields.price), takerIsBid: decodeFromFieldsWithTypes("bool", item.fields.taker_is_bid), takerFee: decodeFromFieldsWithTypes("u64", item.fields.taker_fee), takerFeeIsDeep: decodeFromFieldsWithTypes("bool", item.fields.taker_fee_is_deep), makerFee: decodeFromFieldsWithTypes("u64", item.fields.maker_fee), makerFeeIsDeep: decodeFromFieldsWithTypes("bool", item.fields.maker_fee_is_deep), baseQuantity: decodeFromFieldsWithTypes("u64", item.fields.base_quantity), quoteQuantity: decodeFromFieldsWithTypes("u64", item.fields.quote_quantity), makerBalanceManagerId: decodeFromFieldsWithTypes(ID.reified(), item.fields.maker_balance_manager_id), takerBalanceManagerId: decodeFromFieldsWithTypes(ID.reified(), item.fields.taker_balance_manager_id), timestamp: decodeFromFieldsWithTypes("u64", item.fields.timestamp) } ) }

 static fromBcs( data: Uint8Array ): OrderFilled { return OrderFilled.fromFields( OrderFilled.bcs.parse(data) ) }

 toJSONField() { return {

 poolId: this.poolId,makerOrderId: this.makerOrderId.toString(),takerOrderId: this.takerOrderId.toString(),makerClientOrderId: this.makerClientOrderId.toString(),takerClientOrderId: this.takerClientOrderId.toString(),price: this.price.toString(),takerIsBid: this.takerIsBid,takerFee: this.takerFee.toString(),takerFeeIsDeep: this.takerFeeIsDeep,makerFee: this.makerFee.toString(),makerFeeIsDeep: this.makerFeeIsDeep,baseQuantity: this.baseQuantity.toString(),quoteQuantity: this.quoteQuantity.toString(),makerBalanceManagerId: this.makerBalanceManagerId,takerBalanceManagerId: this.takerBalanceManagerId,timestamp: this.timestamp.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): OrderFilled { return OrderFilled.reified( ).new( { poolId: decodeFromJSONField(ID.reified(), field.poolId), makerOrderId: decodeFromJSONField("u128", field.makerOrderId), takerOrderId: decodeFromJSONField("u128", field.takerOrderId), makerClientOrderId: decodeFromJSONField("u64", field.makerClientOrderId), takerClientOrderId: decodeFromJSONField("u64", field.takerClientOrderId), price: decodeFromJSONField("u64", field.price), takerIsBid: decodeFromJSONField("bool", field.takerIsBid), takerFee: decodeFromJSONField("u64", field.takerFee), takerFeeIsDeep: decodeFromJSONField("bool", field.takerFeeIsDeep), makerFee: decodeFromJSONField("u64", field.makerFee), makerFeeIsDeep: decodeFromJSONField("bool", field.makerFeeIsDeep), baseQuantity: decodeFromJSONField("u64", field.baseQuantity), quoteQuantity: decodeFromJSONField("u64", field.quoteQuantity), makerBalanceManagerId: decodeFromJSONField(ID.reified(), field.makerBalanceManagerId), takerBalanceManagerId: decodeFromJSONField(ID.reified(), field.takerBalanceManagerId), timestamp: decodeFromJSONField("u64", field.timestamp) } ) }

 static fromJSON( json: Record<string, any> ): OrderFilled { if (json.$typeName !== OrderFilled.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return OrderFilled.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): OrderFilled { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isOrderFilled(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a OrderFilled object`); } return OrderFilled.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): OrderFilled { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isOrderFilled(data.bcs.type)) { throw new Error(`object at is not a OrderFilled object`); }

 return OrderFilled.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return OrderFilled.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<OrderFilled> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching OrderFilled object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isOrderFilled(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a OrderFilled object`); }

 return OrderFilled.fromSuiObjectData( res.data ); }

 }

/* ============================== OrderPlaced =============================== */

export function isOrderPlaced(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::order_info::OrderPlaced`; }

export interface OrderPlacedFields { balanceManagerId: ToField<ID>; poolId: ToField<ID>; orderId: ToField<"u128">; clientOrderId: ToField<"u64">; trader: ToField<"address">; price: ToField<"u64">; isBid: ToField<"bool">; placedQuantity: ToField<"u64">; expireTimestamp: ToField<"u64">; timestamp: ToField<"u64"> }

export type OrderPlacedReified = Reified< OrderPlaced, OrderPlacedFields >;

export class OrderPlaced implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::order_info::OrderPlaced`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = OrderPlaced.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::order_info::OrderPlaced`; readonly $typeArgs: []; readonly $isPhantom = OrderPlaced.$isPhantom;

 readonly balanceManagerId: ToField<ID>; readonly poolId: ToField<ID>; readonly orderId: ToField<"u128">; readonly clientOrderId: ToField<"u64">; readonly trader: ToField<"address">; readonly price: ToField<"u64">; readonly isBid: ToField<"bool">; readonly placedQuantity: ToField<"u64">; readonly expireTimestamp: ToField<"u64">; readonly timestamp: ToField<"u64">

 private constructor(typeArgs: [], fields: OrderPlacedFields, ) { this.$fullTypeName = composeSuiType( OrderPlaced.$typeName, ...typeArgs ) as `${typeof PKG_V1}::order_info::OrderPlaced`; this.$typeArgs = typeArgs;

 this.balanceManagerId = fields.balanceManagerId;; this.poolId = fields.poolId;; this.orderId = fields.orderId;; this.clientOrderId = fields.clientOrderId;; this.trader = fields.trader;; this.price = fields.price;; this.isBid = fields.isBid;; this.placedQuantity = fields.placedQuantity;; this.expireTimestamp = fields.expireTimestamp;; this.timestamp = fields.timestamp; }

 static reified( ): OrderPlacedReified { return { typeName: OrderPlaced.$typeName, fullTypeName: composeSuiType( OrderPlaced.$typeName, ...[] ) as `${typeof PKG_V1}::order_info::OrderPlaced`, typeArgs: [ ] as [], isPhantom: OrderPlaced.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => OrderPlaced.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => OrderPlaced.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => OrderPlaced.fromBcs( data, ), bcs: OrderPlaced.bcs, fromJSONField: (field: any) => OrderPlaced.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => OrderPlaced.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => OrderPlaced.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => OrderPlaced.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => OrderPlaced.fetch( client, id, ), new: ( fields: OrderPlacedFields, ) => { return new OrderPlaced( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return OrderPlaced.reified() }

 static phantom( ): PhantomReified<ToTypeStr<OrderPlaced>> { return phantom(OrderPlaced.reified( )); } static get p() { return OrderPlaced.phantom() }

 static get bcs() { return bcs.struct("OrderPlaced", {

 balance_manager_id: ID.bcs, pool_id: ID.bcs, order_id: bcs.u128(), client_order_id: bcs.u64(), trader: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), price: bcs.u64(), is_bid: bcs.bool(), placed_quantity: bcs.u64(), expire_timestamp: bcs.u64(), timestamp: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): OrderPlaced { return OrderPlaced.reified( ).new( { balanceManagerId: decodeFromFields(ID.reified(), fields.balance_manager_id), poolId: decodeFromFields(ID.reified(), fields.pool_id), orderId: decodeFromFields("u128", fields.order_id), clientOrderId: decodeFromFields("u64", fields.client_order_id), trader: decodeFromFields("address", fields.trader), price: decodeFromFields("u64", fields.price), isBid: decodeFromFields("bool", fields.is_bid), placedQuantity: decodeFromFields("u64", fields.placed_quantity), expireTimestamp: decodeFromFields("u64", fields.expire_timestamp), timestamp: decodeFromFields("u64", fields.timestamp) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): OrderPlaced { if (!isOrderPlaced(item.type)) { throw new Error("not a OrderPlaced type");

 }

 return OrderPlaced.reified( ).new( { balanceManagerId: decodeFromFieldsWithTypes(ID.reified(), item.fields.balance_manager_id), poolId: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool_id), orderId: decodeFromFieldsWithTypes("u128", item.fields.order_id), clientOrderId: decodeFromFieldsWithTypes("u64", item.fields.client_order_id), trader: decodeFromFieldsWithTypes("address", item.fields.trader), price: decodeFromFieldsWithTypes("u64", item.fields.price), isBid: decodeFromFieldsWithTypes("bool", item.fields.is_bid), placedQuantity: decodeFromFieldsWithTypes("u64", item.fields.placed_quantity), expireTimestamp: decodeFromFieldsWithTypes("u64", item.fields.expire_timestamp), timestamp: decodeFromFieldsWithTypes("u64", item.fields.timestamp) } ) }

 static fromBcs( data: Uint8Array ): OrderPlaced { return OrderPlaced.fromFields( OrderPlaced.bcs.parse(data) ) }

 toJSONField() { return {

 balanceManagerId: this.balanceManagerId,poolId: this.poolId,orderId: this.orderId.toString(),clientOrderId: this.clientOrderId.toString(),trader: this.trader,price: this.price.toString(),isBid: this.isBid,placedQuantity: this.placedQuantity.toString(),expireTimestamp: this.expireTimestamp.toString(),timestamp: this.timestamp.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): OrderPlaced { return OrderPlaced.reified( ).new( { balanceManagerId: decodeFromJSONField(ID.reified(), field.balanceManagerId), poolId: decodeFromJSONField(ID.reified(), field.poolId), orderId: decodeFromJSONField("u128", field.orderId), clientOrderId: decodeFromJSONField("u64", field.clientOrderId), trader: decodeFromJSONField("address", field.trader), price: decodeFromJSONField("u64", field.price), isBid: decodeFromJSONField("bool", field.isBid), placedQuantity: decodeFromJSONField("u64", field.placedQuantity), expireTimestamp: decodeFromJSONField("u64", field.expireTimestamp), timestamp: decodeFromJSONField("u64", field.timestamp) } ) }

 static fromJSON( json: Record<string, any> ): OrderPlaced { if (json.$typeName !== OrderPlaced.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return OrderPlaced.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): OrderPlaced { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isOrderPlaced(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a OrderPlaced object`); } return OrderPlaced.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): OrderPlaced { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isOrderPlaced(data.bcs.type)) { throw new Error(`object at is not a OrderPlaced object`); }

 return OrderPlaced.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return OrderPlaced.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<OrderPlaced> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching OrderPlaced object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isOrderPlaced(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a OrderPlaced object`); }

 return OrderPlaced.fromSuiObjectData( res.data ); }

 }

/* ============================== OrderExpired =============================== */

export function isOrderExpired(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::order_info::OrderExpired`; }

export interface OrderExpiredFields { balanceManagerId: ToField<ID>; poolId: ToField<ID>; orderId: ToField<"u128">; clientOrderId: ToField<"u64">; trader: ToField<"address">; price: ToField<"u64">; isBid: ToField<"bool">; originalQuantity: ToField<"u64">; baseAssetQuantityCanceled: ToField<"u64">; timestamp: ToField<"u64"> }

export type OrderExpiredReified = Reified< OrderExpired, OrderExpiredFields >;

export class OrderExpired implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::order_info::OrderExpired`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = OrderExpired.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::order_info::OrderExpired`; readonly $typeArgs: []; readonly $isPhantom = OrderExpired.$isPhantom;

 readonly balanceManagerId: ToField<ID>; readonly poolId: ToField<ID>; readonly orderId: ToField<"u128">; readonly clientOrderId: ToField<"u64">; readonly trader: ToField<"address">; readonly price: ToField<"u64">; readonly isBid: ToField<"bool">; readonly originalQuantity: ToField<"u64">; readonly baseAssetQuantityCanceled: ToField<"u64">; readonly timestamp: ToField<"u64">

 private constructor(typeArgs: [], fields: OrderExpiredFields, ) { this.$fullTypeName = composeSuiType( OrderExpired.$typeName, ...typeArgs ) as `${typeof PKG_V1}::order_info::OrderExpired`; this.$typeArgs = typeArgs;

 this.balanceManagerId = fields.balanceManagerId;; this.poolId = fields.poolId;; this.orderId = fields.orderId;; this.clientOrderId = fields.clientOrderId;; this.trader = fields.trader;; this.price = fields.price;; this.isBid = fields.isBid;; this.originalQuantity = fields.originalQuantity;; this.baseAssetQuantityCanceled = fields.baseAssetQuantityCanceled;; this.timestamp = fields.timestamp; }

 static reified( ): OrderExpiredReified { return { typeName: OrderExpired.$typeName, fullTypeName: composeSuiType( OrderExpired.$typeName, ...[] ) as `${typeof PKG_V1}::order_info::OrderExpired`, typeArgs: [ ] as [], isPhantom: OrderExpired.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => OrderExpired.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => OrderExpired.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => OrderExpired.fromBcs( data, ), bcs: OrderExpired.bcs, fromJSONField: (field: any) => OrderExpired.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => OrderExpired.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => OrderExpired.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => OrderExpired.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => OrderExpired.fetch( client, id, ), new: ( fields: OrderExpiredFields, ) => { return new OrderExpired( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return OrderExpired.reified() }

 static phantom( ): PhantomReified<ToTypeStr<OrderExpired>> { return phantom(OrderExpired.reified( )); } static get p() { return OrderExpired.phantom() }

 static get bcs() { return bcs.struct("OrderExpired", {

 balance_manager_id: ID.bcs, pool_id: ID.bcs, order_id: bcs.u128(), client_order_id: bcs.u64(), trader: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), price: bcs.u64(), is_bid: bcs.bool(), original_quantity: bcs.u64(), base_asset_quantity_canceled: bcs.u64(), timestamp: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): OrderExpired { return OrderExpired.reified( ).new( { balanceManagerId: decodeFromFields(ID.reified(), fields.balance_manager_id), poolId: decodeFromFields(ID.reified(), fields.pool_id), orderId: decodeFromFields("u128", fields.order_id), clientOrderId: decodeFromFields("u64", fields.client_order_id), trader: decodeFromFields("address", fields.trader), price: decodeFromFields("u64", fields.price), isBid: decodeFromFields("bool", fields.is_bid), originalQuantity: decodeFromFields("u64", fields.original_quantity), baseAssetQuantityCanceled: decodeFromFields("u64", fields.base_asset_quantity_canceled), timestamp: decodeFromFields("u64", fields.timestamp) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): OrderExpired { if (!isOrderExpired(item.type)) { throw new Error("not a OrderExpired type");

 }

 return OrderExpired.reified( ).new( { balanceManagerId: decodeFromFieldsWithTypes(ID.reified(), item.fields.balance_manager_id), poolId: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool_id), orderId: decodeFromFieldsWithTypes("u128", item.fields.order_id), clientOrderId: decodeFromFieldsWithTypes("u64", item.fields.client_order_id), trader: decodeFromFieldsWithTypes("address", item.fields.trader), price: decodeFromFieldsWithTypes("u64", item.fields.price), isBid: decodeFromFieldsWithTypes("bool", item.fields.is_bid), originalQuantity: decodeFromFieldsWithTypes("u64", item.fields.original_quantity), baseAssetQuantityCanceled: decodeFromFieldsWithTypes("u64", item.fields.base_asset_quantity_canceled), timestamp: decodeFromFieldsWithTypes("u64", item.fields.timestamp) } ) }

 static fromBcs( data: Uint8Array ): OrderExpired { return OrderExpired.fromFields( OrderExpired.bcs.parse(data) ) }

 toJSONField() { return {

 balanceManagerId: this.balanceManagerId,poolId: this.poolId,orderId: this.orderId.toString(),clientOrderId: this.clientOrderId.toString(),trader: this.trader,price: this.price.toString(),isBid: this.isBid,originalQuantity: this.originalQuantity.toString(),baseAssetQuantityCanceled: this.baseAssetQuantityCanceled.toString(),timestamp: this.timestamp.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): OrderExpired { return OrderExpired.reified( ).new( { balanceManagerId: decodeFromJSONField(ID.reified(), field.balanceManagerId), poolId: decodeFromJSONField(ID.reified(), field.poolId), orderId: decodeFromJSONField("u128", field.orderId), clientOrderId: decodeFromJSONField("u64", field.clientOrderId), trader: decodeFromJSONField("address", field.trader), price: decodeFromJSONField("u64", field.price), isBid: decodeFromJSONField("bool", field.isBid), originalQuantity: decodeFromJSONField("u64", field.originalQuantity), baseAssetQuantityCanceled: decodeFromJSONField("u64", field.baseAssetQuantityCanceled), timestamp: decodeFromJSONField("u64", field.timestamp) } ) }

 static fromJSON( json: Record<string, any> ): OrderExpired { if (json.$typeName !== OrderExpired.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return OrderExpired.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): OrderExpired { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isOrderExpired(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a OrderExpired object`); } return OrderExpired.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): OrderExpired { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isOrderExpired(data.bcs.type)) { throw new Error(`object at is not a OrderExpired object`); }

 return OrderExpired.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return OrderExpired.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<OrderExpired> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching OrderExpired object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isOrderExpired(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a OrderExpired object`); }

 return OrderExpired.fromSuiObjectData( res.data ); }

 }
