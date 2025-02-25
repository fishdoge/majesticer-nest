import {ID} from "../../_dependencies/onchain/0x2/object/structs";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {OrderDeepPrice} from "../deep-price/structs";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64, fromHEX, toHEX} from "@mysten/sui/utils";

/* ============================== Order =============================== */

export function isOrder(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::order::Order`; }

export interface OrderFields { balanceManagerId: ToField<ID>; orderId: ToField<"u128">; clientOrderId: ToField<"u64">; quantity: ToField<"u64">; filledQuantity: ToField<"u64">; feeIsDeep: ToField<"bool">; orderDeepPrice: ToField<OrderDeepPrice>; epoch: ToField<"u64">; status: ToField<"u8">; expireTimestamp: ToField<"u64"> }

export type OrderReified = Reified< Order, OrderFields >;

export class Order implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::order::Order`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Order.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::order::Order`; readonly $typeArgs: []; readonly $isPhantom = Order.$isPhantom;

 readonly balanceManagerId: ToField<ID>; readonly orderId: ToField<"u128">; readonly clientOrderId: ToField<"u64">; readonly quantity: ToField<"u64">; readonly filledQuantity: ToField<"u64">; readonly feeIsDeep: ToField<"bool">; readonly orderDeepPrice: ToField<OrderDeepPrice>; readonly epoch: ToField<"u64">; readonly status: ToField<"u8">; readonly expireTimestamp: ToField<"u64">

 private constructor(typeArgs: [], fields: OrderFields, ) { this.$fullTypeName = composeSuiType( Order.$typeName, ...typeArgs ) as `${typeof PKG_V1}::order::Order`; this.$typeArgs = typeArgs;

 this.balanceManagerId = fields.balanceManagerId;; this.orderId = fields.orderId;; this.clientOrderId = fields.clientOrderId;; this.quantity = fields.quantity;; this.filledQuantity = fields.filledQuantity;; this.feeIsDeep = fields.feeIsDeep;; this.orderDeepPrice = fields.orderDeepPrice;; this.epoch = fields.epoch;; this.status = fields.status;; this.expireTimestamp = fields.expireTimestamp; }

 static reified( ): OrderReified { return { typeName: Order.$typeName, fullTypeName: composeSuiType( Order.$typeName, ...[] ) as `${typeof PKG_V1}::order::Order`, typeArgs: [ ] as [], isPhantom: Order.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Order.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Order.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Order.fromBcs( data, ), bcs: Order.bcs, fromJSONField: (field: any) => Order.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Order.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Order.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Order.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Order.fetch( client, id, ), new: ( fields: OrderFields, ) => { return new Order( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Order.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Order>> { return phantom(Order.reified( )); } static get p() { return Order.phantom() }

 static get bcs() { return bcs.struct("Order", {

 balance_manager_id: ID.bcs, order_id: bcs.u128(), client_order_id: bcs.u64(), quantity: bcs.u64(), filled_quantity: bcs.u64(), fee_is_deep: bcs.bool(), order_deep_price: OrderDeepPrice.bcs, epoch: bcs.u64(), status: bcs.u8(), expire_timestamp: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): Order { return Order.reified( ).new( { balanceManagerId: decodeFromFields(ID.reified(), fields.balance_manager_id), orderId: decodeFromFields("u128", fields.order_id), clientOrderId: decodeFromFields("u64", fields.client_order_id), quantity: decodeFromFields("u64", fields.quantity), filledQuantity: decodeFromFields("u64", fields.filled_quantity), feeIsDeep: decodeFromFields("bool", fields.fee_is_deep), orderDeepPrice: decodeFromFields(OrderDeepPrice.reified(), fields.order_deep_price), epoch: decodeFromFields("u64", fields.epoch), status: decodeFromFields("u8", fields.status), expireTimestamp: decodeFromFields("u64", fields.expire_timestamp) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Order { if (!isOrder(item.type)) { throw new Error("not a Order type");

 }

 return Order.reified( ).new( { balanceManagerId: decodeFromFieldsWithTypes(ID.reified(), item.fields.balance_manager_id), orderId: decodeFromFieldsWithTypes("u128", item.fields.order_id), clientOrderId: decodeFromFieldsWithTypes("u64", item.fields.client_order_id), quantity: decodeFromFieldsWithTypes("u64", item.fields.quantity), filledQuantity: decodeFromFieldsWithTypes("u64", item.fields.filled_quantity), feeIsDeep: decodeFromFieldsWithTypes("bool", item.fields.fee_is_deep), orderDeepPrice: decodeFromFieldsWithTypes(OrderDeepPrice.reified(), item.fields.order_deep_price), epoch: decodeFromFieldsWithTypes("u64", item.fields.epoch), status: decodeFromFieldsWithTypes("u8", item.fields.status), expireTimestamp: decodeFromFieldsWithTypes("u64", item.fields.expire_timestamp) } ) }

 static fromBcs( data: Uint8Array ): Order { return Order.fromFields( Order.bcs.parse(data) ) }

 toJSONField() { return {

 balanceManagerId: this.balanceManagerId,orderId: this.orderId.toString(),clientOrderId: this.clientOrderId.toString(),quantity: this.quantity.toString(),filledQuantity: this.filledQuantity.toString(),feeIsDeep: this.feeIsDeep,orderDeepPrice: this.orderDeepPrice.toJSONField(),epoch: this.epoch.toString(),status: this.status,expireTimestamp: this.expireTimestamp.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Order { return Order.reified( ).new( { balanceManagerId: decodeFromJSONField(ID.reified(), field.balanceManagerId), orderId: decodeFromJSONField("u128", field.orderId), clientOrderId: decodeFromJSONField("u64", field.clientOrderId), quantity: decodeFromJSONField("u64", field.quantity), filledQuantity: decodeFromJSONField("u64", field.filledQuantity), feeIsDeep: decodeFromJSONField("bool", field.feeIsDeep), orderDeepPrice: decodeFromJSONField(OrderDeepPrice.reified(), field.orderDeepPrice), epoch: decodeFromJSONField("u64", field.epoch), status: decodeFromJSONField("u8", field.status), expireTimestamp: decodeFromJSONField("u64", field.expireTimestamp) } ) }

 static fromJSON( json: Record<string, any> ): Order { if (json.$typeName !== Order.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Order.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Order { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isOrder(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Order object`); } return Order.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Order { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isOrder(data.bcs.type)) { throw new Error(`object at is not a Order object`); }

 return Order.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Order.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Order> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Order object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isOrder(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Order object`); }

 return Order.fromSuiObjectData( res.data ); }

 }

/* ============================== OrderCanceled =============================== */

export function isOrderCanceled(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::order::OrderCanceled`; }

export interface OrderCanceledFields { balanceManagerId: ToField<ID>; poolId: ToField<ID>; orderId: ToField<"u128">; clientOrderId: ToField<"u64">; trader: ToField<"address">; price: ToField<"u64">; isBid: ToField<"bool">; originalQuantity: ToField<"u64">; baseAssetQuantityCanceled: ToField<"u64">; timestamp: ToField<"u64"> }

export type OrderCanceledReified = Reified< OrderCanceled, OrderCanceledFields >;

export class OrderCanceled implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::order::OrderCanceled`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = OrderCanceled.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::order::OrderCanceled`; readonly $typeArgs: []; readonly $isPhantom = OrderCanceled.$isPhantom;

 readonly balanceManagerId: ToField<ID>; readonly poolId: ToField<ID>; readonly orderId: ToField<"u128">; readonly clientOrderId: ToField<"u64">; readonly trader: ToField<"address">; readonly price: ToField<"u64">; readonly isBid: ToField<"bool">; readonly originalQuantity: ToField<"u64">; readonly baseAssetQuantityCanceled: ToField<"u64">; readonly timestamp: ToField<"u64">

 private constructor(typeArgs: [], fields: OrderCanceledFields, ) { this.$fullTypeName = composeSuiType( OrderCanceled.$typeName, ...typeArgs ) as `${typeof PKG_V1}::order::OrderCanceled`; this.$typeArgs = typeArgs;

 this.balanceManagerId = fields.balanceManagerId;; this.poolId = fields.poolId;; this.orderId = fields.orderId;; this.clientOrderId = fields.clientOrderId;; this.trader = fields.trader;; this.price = fields.price;; this.isBid = fields.isBid;; this.originalQuantity = fields.originalQuantity;; this.baseAssetQuantityCanceled = fields.baseAssetQuantityCanceled;; this.timestamp = fields.timestamp; }

 static reified( ): OrderCanceledReified { return { typeName: OrderCanceled.$typeName, fullTypeName: composeSuiType( OrderCanceled.$typeName, ...[] ) as `${typeof PKG_V1}::order::OrderCanceled`, typeArgs: [ ] as [], isPhantom: OrderCanceled.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => OrderCanceled.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => OrderCanceled.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => OrderCanceled.fromBcs( data, ), bcs: OrderCanceled.bcs, fromJSONField: (field: any) => OrderCanceled.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => OrderCanceled.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => OrderCanceled.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => OrderCanceled.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => OrderCanceled.fetch( client, id, ), new: ( fields: OrderCanceledFields, ) => { return new OrderCanceled( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return OrderCanceled.reified() }

 static phantom( ): PhantomReified<ToTypeStr<OrderCanceled>> { return phantom(OrderCanceled.reified( )); } static get p() { return OrderCanceled.phantom() }

 static get bcs() { return bcs.struct("OrderCanceled", {

 balance_manager_id: ID.bcs, pool_id: ID.bcs, order_id: bcs.u128(), client_order_id: bcs.u64(), trader: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), price: bcs.u64(), is_bid: bcs.bool(), original_quantity: bcs.u64(), base_asset_quantity_canceled: bcs.u64(), timestamp: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): OrderCanceled { return OrderCanceled.reified( ).new( { balanceManagerId: decodeFromFields(ID.reified(), fields.balance_manager_id), poolId: decodeFromFields(ID.reified(), fields.pool_id), orderId: decodeFromFields("u128", fields.order_id), clientOrderId: decodeFromFields("u64", fields.client_order_id), trader: decodeFromFields("address", fields.trader), price: decodeFromFields("u64", fields.price), isBid: decodeFromFields("bool", fields.is_bid), originalQuantity: decodeFromFields("u64", fields.original_quantity), baseAssetQuantityCanceled: decodeFromFields("u64", fields.base_asset_quantity_canceled), timestamp: decodeFromFields("u64", fields.timestamp) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): OrderCanceled { if (!isOrderCanceled(item.type)) { throw new Error("not a OrderCanceled type");

 }

 return OrderCanceled.reified( ).new( { balanceManagerId: decodeFromFieldsWithTypes(ID.reified(), item.fields.balance_manager_id), poolId: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool_id), orderId: decodeFromFieldsWithTypes("u128", item.fields.order_id), clientOrderId: decodeFromFieldsWithTypes("u64", item.fields.client_order_id), trader: decodeFromFieldsWithTypes("address", item.fields.trader), price: decodeFromFieldsWithTypes("u64", item.fields.price), isBid: decodeFromFieldsWithTypes("bool", item.fields.is_bid), originalQuantity: decodeFromFieldsWithTypes("u64", item.fields.original_quantity), baseAssetQuantityCanceled: decodeFromFieldsWithTypes("u64", item.fields.base_asset_quantity_canceled), timestamp: decodeFromFieldsWithTypes("u64", item.fields.timestamp) } ) }

 static fromBcs( data: Uint8Array ): OrderCanceled { return OrderCanceled.fromFields( OrderCanceled.bcs.parse(data) ) }

 toJSONField() { return {

 balanceManagerId: this.balanceManagerId,poolId: this.poolId,orderId: this.orderId.toString(),clientOrderId: this.clientOrderId.toString(),trader: this.trader,price: this.price.toString(),isBid: this.isBid,originalQuantity: this.originalQuantity.toString(),baseAssetQuantityCanceled: this.baseAssetQuantityCanceled.toString(),timestamp: this.timestamp.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): OrderCanceled { return OrderCanceled.reified( ).new( { balanceManagerId: decodeFromJSONField(ID.reified(), field.balanceManagerId), poolId: decodeFromJSONField(ID.reified(), field.poolId), orderId: decodeFromJSONField("u128", field.orderId), clientOrderId: decodeFromJSONField("u64", field.clientOrderId), trader: decodeFromJSONField("address", field.trader), price: decodeFromJSONField("u64", field.price), isBid: decodeFromJSONField("bool", field.isBid), originalQuantity: decodeFromJSONField("u64", field.originalQuantity), baseAssetQuantityCanceled: decodeFromJSONField("u64", field.baseAssetQuantityCanceled), timestamp: decodeFromJSONField("u64", field.timestamp) } ) }

 static fromJSON( json: Record<string, any> ): OrderCanceled { if (json.$typeName !== OrderCanceled.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return OrderCanceled.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): OrderCanceled { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isOrderCanceled(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a OrderCanceled object`); } return OrderCanceled.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): OrderCanceled { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isOrderCanceled(data.bcs.type)) { throw new Error(`object at is not a OrderCanceled object`); }

 return OrderCanceled.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return OrderCanceled.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<OrderCanceled> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching OrderCanceled object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isOrderCanceled(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a OrderCanceled object`); }

 return OrderCanceled.fromSuiObjectData( res.data ); }

 }

/* ============================== OrderModified =============================== */

export function isOrderModified(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::order::OrderModified`; }

export interface OrderModifiedFields { balanceManagerId: ToField<ID>; poolId: ToField<ID>; orderId: ToField<"u128">; clientOrderId: ToField<"u64">; trader: ToField<"address">; price: ToField<"u64">; isBid: ToField<"bool">; previousQuantity: ToField<"u64">; filledQuantity: ToField<"u64">; newQuantity: ToField<"u64">; timestamp: ToField<"u64"> }

export type OrderModifiedReified = Reified< OrderModified, OrderModifiedFields >;

export class OrderModified implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::order::OrderModified`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = OrderModified.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::order::OrderModified`; readonly $typeArgs: []; readonly $isPhantom = OrderModified.$isPhantom;

 readonly balanceManagerId: ToField<ID>; readonly poolId: ToField<ID>; readonly orderId: ToField<"u128">; readonly clientOrderId: ToField<"u64">; readonly trader: ToField<"address">; readonly price: ToField<"u64">; readonly isBid: ToField<"bool">; readonly previousQuantity: ToField<"u64">; readonly filledQuantity: ToField<"u64">; readonly newQuantity: ToField<"u64">; readonly timestamp: ToField<"u64">

 private constructor(typeArgs: [], fields: OrderModifiedFields, ) { this.$fullTypeName = composeSuiType( OrderModified.$typeName, ...typeArgs ) as `${typeof PKG_V1}::order::OrderModified`; this.$typeArgs = typeArgs;

 this.balanceManagerId = fields.balanceManagerId;; this.poolId = fields.poolId;; this.orderId = fields.orderId;; this.clientOrderId = fields.clientOrderId;; this.trader = fields.trader;; this.price = fields.price;; this.isBid = fields.isBid;; this.previousQuantity = fields.previousQuantity;; this.filledQuantity = fields.filledQuantity;; this.newQuantity = fields.newQuantity;; this.timestamp = fields.timestamp; }

 static reified( ): OrderModifiedReified { return { typeName: OrderModified.$typeName, fullTypeName: composeSuiType( OrderModified.$typeName, ...[] ) as `${typeof PKG_V1}::order::OrderModified`, typeArgs: [ ] as [], isPhantom: OrderModified.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => OrderModified.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => OrderModified.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => OrderModified.fromBcs( data, ), bcs: OrderModified.bcs, fromJSONField: (field: any) => OrderModified.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => OrderModified.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => OrderModified.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => OrderModified.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => OrderModified.fetch( client, id, ), new: ( fields: OrderModifiedFields, ) => { return new OrderModified( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return OrderModified.reified() }

 static phantom( ): PhantomReified<ToTypeStr<OrderModified>> { return phantom(OrderModified.reified( )); } static get p() { return OrderModified.phantom() }

 static get bcs() { return bcs.struct("OrderModified", {

 balance_manager_id: ID.bcs, pool_id: ID.bcs, order_id: bcs.u128(), client_order_id: bcs.u64(), trader: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), price: bcs.u64(), is_bid: bcs.bool(), previous_quantity: bcs.u64(), filled_quantity: bcs.u64(), new_quantity: bcs.u64(), timestamp: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): OrderModified { return OrderModified.reified( ).new( { balanceManagerId: decodeFromFields(ID.reified(), fields.balance_manager_id), poolId: decodeFromFields(ID.reified(), fields.pool_id), orderId: decodeFromFields("u128", fields.order_id), clientOrderId: decodeFromFields("u64", fields.client_order_id), trader: decodeFromFields("address", fields.trader), price: decodeFromFields("u64", fields.price), isBid: decodeFromFields("bool", fields.is_bid), previousQuantity: decodeFromFields("u64", fields.previous_quantity), filledQuantity: decodeFromFields("u64", fields.filled_quantity), newQuantity: decodeFromFields("u64", fields.new_quantity), timestamp: decodeFromFields("u64", fields.timestamp) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): OrderModified { if (!isOrderModified(item.type)) { throw new Error("not a OrderModified type");

 }

 return OrderModified.reified( ).new( { balanceManagerId: decodeFromFieldsWithTypes(ID.reified(), item.fields.balance_manager_id), poolId: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool_id), orderId: decodeFromFieldsWithTypes("u128", item.fields.order_id), clientOrderId: decodeFromFieldsWithTypes("u64", item.fields.client_order_id), trader: decodeFromFieldsWithTypes("address", item.fields.trader), price: decodeFromFieldsWithTypes("u64", item.fields.price), isBid: decodeFromFieldsWithTypes("bool", item.fields.is_bid), previousQuantity: decodeFromFieldsWithTypes("u64", item.fields.previous_quantity), filledQuantity: decodeFromFieldsWithTypes("u64", item.fields.filled_quantity), newQuantity: decodeFromFieldsWithTypes("u64", item.fields.new_quantity), timestamp: decodeFromFieldsWithTypes("u64", item.fields.timestamp) } ) }

 static fromBcs( data: Uint8Array ): OrderModified { return OrderModified.fromFields( OrderModified.bcs.parse(data) ) }

 toJSONField() { return {

 balanceManagerId: this.balanceManagerId,poolId: this.poolId,orderId: this.orderId.toString(),clientOrderId: this.clientOrderId.toString(),trader: this.trader,price: this.price.toString(),isBid: this.isBid,previousQuantity: this.previousQuantity.toString(),filledQuantity: this.filledQuantity.toString(),newQuantity: this.newQuantity.toString(),timestamp: this.timestamp.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): OrderModified { return OrderModified.reified( ).new( { balanceManagerId: decodeFromJSONField(ID.reified(), field.balanceManagerId), poolId: decodeFromJSONField(ID.reified(), field.poolId), orderId: decodeFromJSONField("u128", field.orderId), clientOrderId: decodeFromJSONField("u64", field.clientOrderId), trader: decodeFromJSONField("address", field.trader), price: decodeFromJSONField("u64", field.price), isBid: decodeFromJSONField("bool", field.isBid), previousQuantity: decodeFromJSONField("u64", field.previousQuantity), filledQuantity: decodeFromJSONField("u64", field.filledQuantity), newQuantity: decodeFromJSONField("u64", field.newQuantity), timestamp: decodeFromJSONField("u64", field.timestamp) } ) }

 static fromJSON( json: Record<string, any> ): OrderModified { if (json.$typeName !== OrderModified.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return OrderModified.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): OrderModified { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isOrderModified(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a OrderModified object`); } return OrderModified.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): OrderModified { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isOrderModified(data.bcs.type)) { throw new Error(`object at is not a OrderModified object`); }

 return OrderModified.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return OrderModified.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<OrderModified> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching OrderModified object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isOrderModified(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a OrderModified object`); }

 return OrderModified.fromSuiObjectData( res.data ); }

 }
