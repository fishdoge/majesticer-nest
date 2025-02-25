import * as reified from "../../_framework/reified";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom, ToTypeStr as ToPhantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {BigVector} from "../big-vector/structs";
import {PKG_V1} from "../index";
import {Order} from "../order/structs";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== Book =============================== */

export function isBook(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::book::Book`; }

export interface BookFields { tickSize: ToField<"u64">; lotSize: ToField<"u64">; minSize: ToField<"u64">; bids: ToField<BigVector<ToPhantom<Order>>>; asks: ToField<BigVector<ToPhantom<Order>>>; nextBidOrderId: ToField<"u64">; nextAskOrderId: ToField<"u64"> }

export type BookReified = Reified< Book, BookFields >;

export class Book implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::book::Book`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Book.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::book::Book`; readonly $typeArgs: []; readonly $isPhantom = Book.$isPhantom;

 readonly tickSize: ToField<"u64">; readonly lotSize: ToField<"u64">; readonly minSize: ToField<"u64">; readonly bids: ToField<BigVector<ToPhantom<Order>>>; readonly asks: ToField<BigVector<ToPhantom<Order>>>; readonly nextBidOrderId: ToField<"u64">; readonly nextAskOrderId: ToField<"u64">

 private constructor(typeArgs: [], fields: BookFields, ) { this.$fullTypeName = composeSuiType( Book.$typeName, ...typeArgs ) as `${typeof PKG_V1}::book::Book`; this.$typeArgs = typeArgs;

 this.tickSize = fields.tickSize;; this.lotSize = fields.lotSize;; this.minSize = fields.minSize;; this.bids = fields.bids;; this.asks = fields.asks;; this.nextBidOrderId = fields.nextBidOrderId;; this.nextAskOrderId = fields.nextAskOrderId; }

 static reified( ): BookReified { return { typeName: Book.$typeName, fullTypeName: composeSuiType( Book.$typeName, ...[] ) as `${typeof PKG_V1}::book::Book`, typeArgs: [ ] as [], isPhantom: Book.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Book.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Book.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Book.fromBcs( data, ), bcs: Book.bcs, fromJSONField: (field: any) => Book.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Book.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Book.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Book.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Book.fetch( client, id, ), new: ( fields: BookFields, ) => { return new Book( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Book.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Book>> { return phantom(Book.reified( )); } static get p() { return Book.phantom() }

 static get bcs() { return bcs.struct("Book", {

 tick_size: bcs.u64(), lot_size: bcs.u64(), min_size: bcs.u64(), bids: BigVector.bcs, asks: BigVector.bcs, next_bid_order_id: bcs.u64(), next_ask_order_id: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): Book { return Book.reified( ).new( { tickSize: decodeFromFields("u64", fields.tick_size), lotSize: decodeFromFields("u64", fields.lot_size), minSize: decodeFromFields("u64", fields.min_size), bids: decodeFromFields(BigVector.reified(reified.phantom(Order.reified())), fields.bids), asks: decodeFromFields(BigVector.reified(reified.phantom(Order.reified())), fields.asks), nextBidOrderId: decodeFromFields("u64", fields.next_bid_order_id), nextAskOrderId: decodeFromFields("u64", fields.next_ask_order_id) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Book { if (!isBook(item.type)) { throw new Error("not a Book type");

 }

 return Book.reified( ).new( { tickSize: decodeFromFieldsWithTypes("u64", item.fields.tick_size), lotSize: decodeFromFieldsWithTypes("u64", item.fields.lot_size), minSize: decodeFromFieldsWithTypes("u64", item.fields.min_size), bids: decodeFromFieldsWithTypes(BigVector.reified(reified.phantom(Order.reified())), item.fields.bids), asks: decodeFromFieldsWithTypes(BigVector.reified(reified.phantom(Order.reified())), item.fields.asks), nextBidOrderId: decodeFromFieldsWithTypes("u64", item.fields.next_bid_order_id), nextAskOrderId: decodeFromFieldsWithTypes("u64", item.fields.next_ask_order_id) } ) }

 static fromBcs( data: Uint8Array ): Book { return Book.fromFields( Book.bcs.parse(data) ) }

 toJSONField() { return {

 tickSize: this.tickSize.toString(),lotSize: this.lotSize.toString(),minSize: this.minSize.toString(),bids: this.bids.toJSONField(),asks: this.asks.toJSONField(),nextBidOrderId: this.nextBidOrderId.toString(),nextAskOrderId: this.nextAskOrderId.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Book { return Book.reified( ).new( { tickSize: decodeFromJSONField("u64", field.tickSize), lotSize: decodeFromJSONField("u64", field.lotSize), minSize: decodeFromJSONField("u64", field.minSize), bids: decodeFromJSONField(BigVector.reified(reified.phantom(Order.reified())), field.bids), asks: decodeFromJSONField(BigVector.reified(reified.phantom(Order.reified())), field.asks), nextBidOrderId: decodeFromJSONField("u64", field.nextBidOrderId), nextAskOrderId: decodeFromJSONField("u64", field.nextAskOrderId) } ) }

 static fromJSON( json: Record<string, any> ): Book { if (json.$typeName !== Book.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Book.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Book { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBook(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Book object`); } return Book.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Book { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBook(data.bcs.type)) { throw new Error(`object at is not a Book object`); }

 return Book.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Book.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Book> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Book object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBook(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Book object`); }

 return Book.fromSuiObjectData( res.data ); }

 }
