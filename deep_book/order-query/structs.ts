import * as reified from "../../_framework/reified";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, fieldToJSON, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {Vector} from "../../_framework/vector";
import {PKG_V1} from "../index";
import {Order} from "../order/structs";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== OrderPage =============================== */

export function isOrderPage(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::order_query::OrderPage`; }

export interface OrderPageFields { orders: ToField<Vector<Order>>; hasNextPage: ToField<"bool"> }

export type OrderPageReified = Reified< OrderPage, OrderPageFields >;

export class OrderPage implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::order_query::OrderPage`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = OrderPage.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::order_query::OrderPage`; readonly $typeArgs: []; readonly $isPhantom = OrderPage.$isPhantom;

 readonly orders: ToField<Vector<Order>>; readonly hasNextPage: ToField<"bool">

 private constructor(typeArgs: [], fields: OrderPageFields, ) { this.$fullTypeName = composeSuiType( OrderPage.$typeName, ...typeArgs ) as `${typeof PKG_V1}::order_query::OrderPage`; this.$typeArgs = typeArgs;

 this.orders = fields.orders;; this.hasNextPage = fields.hasNextPage; }

 static reified( ): OrderPageReified { return { typeName: OrderPage.$typeName, fullTypeName: composeSuiType( OrderPage.$typeName, ...[] ) as `${typeof PKG_V1}::order_query::OrderPage`, typeArgs: [ ] as [], isPhantom: OrderPage.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => OrderPage.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => OrderPage.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => OrderPage.fromBcs( data, ), bcs: OrderPage.bcs, fromJSONField: (field: any) => OrderPage.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => OrderPage.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => OrderPage.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => OrderPage.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => OrderPage.fetch( client, id, ), new: ( fields: OrderPageFields, ) => { return new OrderPage( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return OrderPage.reified() }

 static phantom( ): PhantomReified<ToTypeStr<OrderPage>> { return phantom(OrderPage.reified( )); } static get p() { return OrderPage.phantom() }

 static get bcs() { return bcs.struct("OrderPage", {

 orders: bcs.vector(Order.bcs), has_next_page: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): OrderPage { return OrderPage.reified( ).new( { orders: decodeFromFields(reified.vector(Order.reified()), fields.orders), hasNextPage: decodeFromFields("bool", fields.has_next_page) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): OrderPage { if (!isOrderPage(item.type)) { throw new Error("not a OrderPage type");

 }

 return OrderPage.reified( ).new( { orders: decodeFromFieldsWithTypes(reified.vector(Order.reified()), item.fields.orders), hasNextPage: decodeFromFieldsWithTypes("bool", item.fields.has_next_page) } ) }

 static fromBcs( data: Uint8Array ): OrderPage { return OrderPage.fromFields( OrderPage.bcs.parse(data) ) }

 toJSONField() { return {

 orders: fieldToJSON<Vector<Order>>(`vector<${Order.$typeName}>`, this.orders),hasNextPage: this.hasNextPage,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): OrderPage { return OrderPage.reified( ).new( { orders: decodeFromJSONField(reified.vector(Order.reified()), field.orders), hasNextPage: decodeFromJSONField("bool", field.hasNextPage) } ) }

 static fromJSON( json: Record<string, any> ): OrderPage { if (json.$typeName !== OrderPage.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return OrderPage.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): OrderPage { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isOrderPage(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a OrderPage object`); } return OrderPage.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): OrderPage { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isOrderPage(data.bcs.type)) { throw new Error(`object at is not a OrderPage object`); }

 return OrderPage.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return OrderPage.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<OrderPage> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching OrderPage object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isOrderPage(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a OrderPage object`); }

 return OrderPage.fromSuiObjectData( res.data ); }

 }
