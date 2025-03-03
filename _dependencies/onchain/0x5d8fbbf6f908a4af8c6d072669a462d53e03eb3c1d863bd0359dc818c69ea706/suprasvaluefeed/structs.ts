import * as reified from "../../../../_framework/reified";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, fieldToJSON, phantom, ToTypeStr as ToPhantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../../../_framework/util";
import {Vector} from "../../../../_framework/vector";
import {ID, UID} from "../../0x2/object/structs";
import {Table} from "../../0x2/table/structs";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== Price =============================== */

export function isPrice(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::SupraSValueFeed::Price`; }

export interface PriceFields { pair: ToField<"u32">; value: ToField<"u128">; decimal: ToField<"u16">; timestamp: ToField<"u128">; round: ToField<"u64"> }

export type PriceReified = Reified< Price, PriceFields >;

export class Price implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::SupraSValueFeed::Price`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Price.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::SupraSValueFeed::Price`; readonly $typeArgs: []; readonly $isPhantom = Price.$isPhantom;

 readonly pair: ToField<"u32">; readonly value: ToField<"u128">; readonly decimal: ToField<"u16">; readonly timestamp: ToField<"u128">; readonly round: ToField<"u64">

 private constructor(typeArgs: [], fields: PriceFields, ) { this.$fullTypeName = composeSuiType( Price.$typeName, ...typeArgs ) as `${typeof PKG_V1}::SupraSValueFeed::Price`; this.$typeArgs = typeArgs;

 this.pair = fields.pair;; this.value = fields.value;; this.decimal = fields.decimal;; this.timestamp = fields.timestamp;; this.round = fields.round; }

 static reified( ): PriceReified { return { typeName: Price.$typeName, fullTypeName: composeSuiType( Price.$typeName, ...[] ) as `${typeof PKG_V1}::SupraSValueFeed::Price`, typeArgs: [ ] as [], isPhantom: Price.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Price.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Price.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Price.fromBcs( data, ), bcs: Price.bcs, fromJSONField: (field: any) => Price.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Price.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Price.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Price.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Price.fetch( client, id, ), new: ( fields: PriceFields, ) => { return new Price( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Price.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Price>> { return phantom(Price.reified( )); } static get p() { return Price.phantom() }

 static get bcs() { return bcs.struct("Price", {

 pair: bcs.u32(), value: bcs.u128(), decimal: bcs.u16(), timestamp: bcs.u128(), round: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): Price { return Price.reified( ).new( { pair: decodeFromFields("u32", fields.pair), value: decodeFromFields("u128", fields.value), decimal: decodeFromFields("u16", fields.decimal), timestamp: decodeFromFields("u128", fields.timestamp), round: decodeFromFields("u64", fields.round) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Price { if (!isPrice(item.type)) { throw new Error("not a Price type");

 }

 return Price.reified( ).new( { pair: decodeFromFieldsWithTypes("u32", item.fields.pair), value: decodeFromFieldsWithTypes("u128", item.fields.value), decimal: decodeFromFieldsWithTypes("u16", item.fields.decimal), timestamp: decodeFromFieldsWithTypes("u128", item.fields.timestamp), round: decodeFromFieldsWithTypes("u64", item.fields.round) } ) }

 static fromBcs( data: Uint8Array ): Price { return Price.fromFields( Price.bcs.parse(data) ) }

 toJSONField() { return {

 pair: this.pair,value: this.value.toString(),decimal: this.decimal,timestamp: this.timestamp.toString(),round: this.round.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Price { return Price.reified( ).new( { pair: decodeFromJSONField("u32", field.pair), value: decodeFromJSONField("u128", field.value), decimal: decodeFromJSONField("u16", field.decimal), timestamp: decodeFromJSONField("u128", field.timestamp), round: decodeFromJSONField("u64", field.round) } ) }

 static fromJSON( json: Record<string, any> ): Price { if (json.$typeName !== Price.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Price.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Price { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPrice(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Price object`); } return Price.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Price { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isPrice(data.bcs.type)) { throw new Error(`object at is not a Price object`); }

 return Price.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Price.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Price> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Price object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPrice(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Price object`); }

 return Price.fromSuiObjectData( res.data ); }

 }

/* ============================== Entry =============================== */

export function isEntry(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::SupraSValueFeed::Entry`; }

export interface EntryFields { value: ToField<"u128">; decimal: ToField<"u16">; timestamp: ToField<"u128">; round: ToField<"u64"> }

export type EntryReified = Reified< Entry, EntryFields >;

export class Entry implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::SupraSValueFeed::Entry`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Entry.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::SupraSValueFeed::Entry`; readonly $typeArgs: []; readonly $isPhantom = Entry.$isPhantom;

 readonly value: ToField<"u128">; readonly decimal: ToField<"u16">; readonly timestamp: ToField<"u128">; readonly round: ToField<"u64">

 private constructor(typeArgs: [], fields: EntryFields, ) { this.$fullTypeName = composeSuiType( Entry.$typeName, ...typeArgs ) as `${typeof PKG_V1}::SupraSValueFeed::Entry`; this.$typeArgs = typeArgs;

 this.value = fields.value;; this.decimal = fields.decimal;; this.timestamp = fields.timestamp;; this.round = fields.round; }

 static reified( ): EntryReified { return { typeName: Entry.$typeName, fullTypeName: composeSuiType( Entry.$typeName, ...[] ) as `${typeof PKG_V1}::SupraSValueFeed::Entry`, typeArgs: [ ] as [], isPhantom: Entry.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Entry.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Entry.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Entry.fromBcs( data, ), bcs: Entry.bcs, fromJSONField: (field: any) => Entry.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Entry.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Entry.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Entry.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Entry.fetch( client, id, ), new: ( fields: EntryFields, ) => { return new Entry( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Entry.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Entry>> { return phantom(Entry.reified( )); } static get p() { return Entry.phantom() }

 static get bcs() { return bcs.struct("Entry", {

 value: bcs.u128(), decimal: bcs.u16(), timestamp: bcs.u128(), round: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): Entry { return Entry.reified( ).new( { value: decodeFromFields("u128", fields.value), decimal: decodeFromFields("u16", fields.decimal), timestamp: decodeFromFields("u128", fields.timestamp), round: decodeFromFields("u64", fields.round) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Entry { if (!isEntry(item.type)) { throw new Error("not a Entry type");

 }

 return Entry.reified( ).new( { value: decodeFromFieldsWithTypes("u128", item.fields.value), decimal: decodeFromFieldsWithTypes("u16", item.fields.decimal), timestamp: decodeFromFieldsWithTypes("u128", item.fields.timestamp), round: decodeFromFieldsWithTypes("u64", item.fields.round) } ) }

 static fromBcs( data: Uint8Array ): Entry { return Entry.fromFields( Entry.bcs.parse(data) ) }

 toJSONField() { return {

 value: this.value.toString(),decimal: this.decimal,timestamp: this.timestamp.toString(),round: this.round.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Entry { return Entry.reified( ).new( { value: decodeFromJSONField("u128", field.value), decimal: decodeFromJSONField("u16", field.decimal), timestamp: decodeFromJSONField("u128", field.timestamp), round: decodeFromJSONField("u64", field.round) } ) }

 static fromJSON( json: Record<string, any> ): Entry { if (json.$typeName !== Entry.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Entry.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Entry { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isEntry(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Entry object`); } return Entry.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Entry { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isEntry(data.bcs.type)) { throw new Error(`object at is not a Entry object`); }

 return Entry.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Entry.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Entry> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Entry object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isEntry(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Entry object`); }

 return Entry.fromSuiObjectData( res.data ); }

 }

/* ============================== OwnerCap =============================== */

export function isOwnerCap(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::SupraSValueFeed::OwnerCap`; }

export interface OwnerCapFields { id: ToField<UID> }

export type OwnerCapReified = Reified< OwnerCap, OwnerCapFields >;

export class OwnerCap implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::SupraSValueFeed::OwnerCap`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = OwnerCap.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::SupraSValueFeed::OwnerCap`; readonly $typeArgs: []; readonly $isPhantom = OwnerCap.$isPhantom;

 readonly id: ToField<UID>

 private constructor(typeArgs: [], fields: OwnerCapFields, ) { this.$fullTypeName = composeSuiType( OwnerCap.$typeName, ...typeArgs ) as `${typeof PKG_V1}::SupraSValueFeed::OwnerCap`; this.$typeArgs = typeArgs;

 this.id = fields.id; }

 static reified( ): OwnerCapReified { return { typeName: OwnerCap.$typeName, fullTypeName: composeSuiType( OwnerCap.$typeName, ...[] ) as `${typeof PKG_V1}::SupraSValueFeed::OwnerCap`, typeArgs: [ ] as [], isPhantom: OwnerCap.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => OwnerCap.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => OwnerCap.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => OwnerCap.fromBcs( data, ), bcs: OwnerCap.bcs, fromJSONField: (field: any) => OwnerCap.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => OwnerCap.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => OwnerCap.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => OwnerCap.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => OwnerCap.fetch( client, id, ), new: ( fields: OwnerCapFields, ) => { return new OwnerCap( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return OwnerCap.reified() }

 static phantom( ): PhantomReified<ToTypeStr<OwnerCap>> { return phantom(OwnerCap.reified( )); } static get p() { return OwnerCap.phantom() }

 static get bcs() { return bcs.struct("OwnerCap", {

 id: UID.bcs

}) };

 static fromFields( fields: Record<string, any> ): OwnerCap { return OwnerCap.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): OwnerCap { if (!isOwnerCap(item.type)) { throw new Error("not a OwnerCap type");

 }

 return OwnerCap.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id) } ) }

 static fromBcs( data: Uint8Array ): OwnerCap { return OwnerCap.fromFields( OwnerCap.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): OwnerCap { return OwnerCap.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id) } ) }

 static fromJSON( json: Record<string, any> ): OwnerCap { if (json.$typeName !== OwnerCap.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return OwnerCap.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): OwnerCap { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isOwnerCap(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a OwnerCap object`); } return OwnerCap.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): OwnerCap { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isOwnerCap(data.bcs.type)) { throw new Error(`object at is not a OwnerCap object`); }

 return OwnerCap.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return OwnerCap.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<OwnerCap> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching OwnerCap object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isOwnerCap(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a OwnerCap object`); }

 return OwnerCap.fromSuiObjectData( res.data ); }

 }

/* ============================== DkgState =============================== */

export function isDkgState(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::SupraSValueFeed::DkgState`; }

export interface DkgStateFields { id: ToField<UID>; publicKey: ToField<Vector<"u8">> }

export type DkgStateReified = Reified< DkgState, DkgStateFields >;

export class DkgState implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::SupraSValueFeed::DkgState`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = DkgState.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::SupraSValueFeed::DkgState`; readonly $typeArgs: []; readonly $isPhantom = DkgState.$isPhantom;

 readonly id: ToField<UID>; readonly publicKey: ToField<Vector<"u8">>

 private constructor(typeArgs: [], fields: DkgStateFields, ) { this.$fullTypeName = composeSuiType( DkgState.$typeName, ...typeArgs ) as `${typeof PKG_V1}::SupraSValueFeed::DkgState`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.publicKey = fields.publicKey; }

 static reified( ): DkgStateReified { return { typeName: DkgState.$typeName, fullTypeName: composeSuiType( DkgState.$typeName, ...[] ) as `${typeof PKG_V1}::SupraSValueFeed::DkgState`, typeArgs: [ ] as [], isPhantom: DkgState.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => DkgState.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => DkgState.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => DkgState.fromBcs( data, ), bcs: DkgState.bcs, fromJSONField: (field: any) => DkgState.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => DkgState.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => DkgState.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => DkgState.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => DkgState.fetch( client, id, ), new: ( fields: DkgStateFields, ) => { return new DkgState( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return DkgState.reified() }

 static phantom( ): PhantomReified<ToTypeStr<DkgState>> { return phantom(DkgState.reified( )); } static get p() { return DkgState.phantom() }

 static get bcs() { return bcs.struct("DkgState", {

 id: UID.bcs, public_key: bcs.vector(bcs.u8())

}) };

 static fromFields( fields: Record<string, any> ): DkgState { return DkgState.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), publicKey: decodeFromFields(reified.vector("u8"), fields.public_key) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): DkgState { if (!isDkgState(item.type)) { throw new Error("not a DkgState type");

 }

 return DkgState.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), publicKey: decodeFromFieldsWithTypes(reified.vector("u8"), item.fields.public_key) } ) }

 static fromBcs( data: Uint8Array ): DkgState { return DkgState.fromFields( DkgState.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,publicKey: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.publicKey),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): DkgState { return DkgState.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), publicKey: decodeFromJSONField(reified.vector("u8"), field.publicKey) } ) }

 static fromJSON( json: Record<string, any> ): DkgState { if (json.$typeName !== DkgState.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return DkgState.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): DkgState { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDkgState(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a DkgState object`); } return DkgState.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): DkgState { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isDkgState(data.bcs.type)) { throw new Error(`object at is not a DkgState object`); }

 return DkgState.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return DkgState.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<DkgState> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching DkgState object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDkgState(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a DkgState object`); }

 return DkgState.fromSuiObjectData( res.data ); }

 }

/* ============================== OracleHolder =============================== */

export function isOracleHolder(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::SupraSValueFeed::OracleHolder`; }

export interface OracleHolderFields { id: ToField<UID>; version: ToField<"u64">; owner: ToField<ID>; feeds: ToField<Table<"u32", ToPhantom<Entry>>> }

export type OracleHolderReified = Reified< OracleHolder, OracleHolderFields >;

export class OracleHolder implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::SupraSValueFeed::OracleHolder`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = OracleHolder.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::SupraSValueFeed::OracleHolder`; readonly $typeArgs: []; readonly $isPhantom = OracleHolder.$isPhantom;

 readonly id: ToField<UID>; readonly version: ToField<"u64">; readonly owner: ToField<ID>; readonly feeds: ToField<Table<"u32", ToPhantom<Entry>>>

 private constructor(typeArgs: [], fields: OracleHolderFields, ) { this.$fullTypeName = composeSuiType( OracleHolder.$typeName, ...typeArgs ) as `${typeof PKG_V1}::SupraSValueFeed::OracleHolder`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.version = fields.version;; this.owner = fields.owner;; this.feeds = fields.feeds; }

 static reified( ): OracleHolderReified { return { typeName: OracleHolder.$typeName, fullTypeName: composeSuiType( OracleHolder.$typeName, ...[] ) as `${typeof PKG_V1}::SupraSValueFeed::OracleHolder`, typeArgs: [ ] as [], isPhantom: OracleHolder.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => OracleHolder.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => OracleHolder.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => OracleHolder.fromBcs( data, ), bcs: OracleHolder.bcs, fromJSONField: (field: any) => OracleHolder.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => OracleHolder.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => OracleHolder.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => OracleHolder.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => OracleHolder.fetch( client, id, ), new: ( fields: OracleHolderFields, ) => { return new OracleHolder( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return OracleHolder.reified() }

 static phantom( ): PhantomReified<ToTypeStr<OracleHolder>> { return phantom(OracleHolder.reified( )); } static get p() { return OracleHolder.phantom() }

 static get bcs() { return bcs.struct("OracleHolder", {

 id: UID.bcs, version: bcs.u64(), owner: ID.bcs, feeds: Table.bcs

}) };

 static fromFields( fields: Record<string, any> ): OracleHolder { return OracleHolder.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), version: decodeFromFields("u64", fields.version), owner: decodeFromFields(ID.reified(), fields.owner), feeds: decodeFromFields(Table.reified(reified.phantom("u32"), reified.phantom(Entry.reified())), fields.feeds) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): OracleHolder { if (!isOracleHolder(item.type)) { throw new Error("not a OracleHolder type");

 }

 return OracleHolder.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), version: decodeFromFieldsWithTypes("u64", item.fields.version), owner: decodeFromFieldsWithTypes(ID.reified(), item.fields.owner), feeds: decodeFromFieldsWithTypes(Table.reified(reified.phantom("u32"), reified.phantom(Entry.reified())), item.fields.feeds) } ) }

 static fromBcs( data: Uint8Array ): OracleHolder { return OracleHolder.fromFields( OracleHolder.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,version: this.version.toString(),owner: this.owner,feeds: this.feeds.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): OracleHolder { return OracleHolder.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), version: decodeFromJSONField("u64", field.version), owner: decodeFromJSONField(ID.reified(), field.owner), feeds: decodeFromJSONField(Table.reified(reified.phantom("u32"), reified.phantom(Entry.reified())), field.feeds) } ) }

 static fromJSON( json: Record<string, any> ): OracleHolder { if (json.$typeName !== OracleHolder.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return OracleHolder.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): OracleHolder { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isOracleHolder(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a OracleHolder object`); } return OracleHolder.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): OracleHolder { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isOracleHolder(data.bcs.type)) { throw new Error(`object at is not a OracleHolder object`); }

 return OracleHolder.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return OracleHolder.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<OracleHolder> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching OracleHolder object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isOracleHolder(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a OracleHolder object`); }

 return OracleHolder.fromSuiObjectData( res.data ); }

 }

/* ============================== MinBlock =============================== */

export function isMinBlock(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::SupraSValueFeed::MinBlock`; }

export interface MinBlockFields { round: ToField<Vector<"u8">>; timestamp: ToField<Vector<"u8">>; author: ToField<Vector<"u8">>; qcHash: ToField<Vector<"u8">>; batchHashes: ToField<Vector<Vector<"u8">>> }

export type MinBlockReified = Reified< MinBlock, MinBlockFields >;

export class MinBlock implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::SupraSValueFeed::MinBlock`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = MinBlock.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::SupraSValueFeed::MinBlock`; readonly $typeArgs: []; readonly $isPhantom = MinBlock.$isPhantom;

 readonly round: ToField<Vector<"u8">>; readonly timestamp: ToField<Vector<"u8">>; readonly author: ToField<Vector<"u8">>; readonly qcHash: ToField<Vector<"u8">>; readonly batchHashes: ToField<Vector<Vector<"u8">>>

 private constructor(typeArgs: [], fields: MinBlockFields, ) { this.$fullTypeName = composeSuiType( MinBlock.$typeName, ...typeArgs ) as `${typeof PKG_V1}::SupraSValueFeed::MinBlock`; this.$typeArgs = typeArgs;

 this.round = fields.round;; this.timestamp = fields.timestamp;; this.author = fields.author;; this.qcHash = fields.qcHash;; this.batchHashes = fields.batchHashes; }

 static reified( ): MinBlockReified { return { typeName: MinBlock.$typeName, fullTypeName: composeSuiType( MinBlock.$typeName, ...[] ) as `${typeof PKG_V1}::SupraSValueFeed::MinBlock`, typeArgs: [ ] as [], isPhantom: MinBlock.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => MinBlock.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => MinBlock.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => MinBlock.fromBcs( data, ), bcs: MinBlock.bcs, fromJSONField: (field: any) => MinBlock.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => MinBlock.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => MinBlock.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => MinBlock.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => MinBlock.fetch( client, id, ), new: ( fields: MinBlockFields, ) => { return new MinBlock( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return MinBlock.reified() }

 static phantom( ): PhantomReified<ToTypeStr<MinBlock>> { return phantom(MinBlock.reified( )); } static get p() { return MinBlock.phantom() }

 static get bcs() { return bcs.struct("MinBlock", {

 round: bcs.vector(bcs.u8()), timestamp: bcs.vector(bcs.u8()), author: bcs.vector(bcs.u8()), qc_hash: bcs.vector(bcs.u8()), batch_hashes: bcs.vector(bcs.vector(bcs.u8()))

}) };

 static fromFields( fields: Record<string, any> ): MinBlock { return MinBlock.reified( ).new( { round: decodeFromFields(reified.vector("u8"), fields.round), timestamp: decodeFromFields(reified.vector("u8"), fields.timestamp), author: decodeFromFields(reified.vector("u8"), fields.author), qcHash: decodeFromFields(reified.vector("u8"), fields.qc_hash), batchHashes: decodeFromFields(reified.vector(reified.vector("u8")), fields.batch_hashes) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): MinBlock { if (!isMinBlock(item.type)) { throw new Error("not a MinBlock type");

 }

 return MinBlock.reified( ).new( { round: decodeFromFieldsWithTypes(reified.vector("u8"), item.fields.round), timestamp: decodeFromFieldsWithTypes(reified.vector("u8"), item.fields.timestamp), author: decodeFromFieldsWithTypes(reified.vector("u8"), item.fields.author), qcHash: decodeFromFieldsWithTypes(reified.vector("u8"), item.fields.qc_hash), batchHashes: decodeFromFieldsWithTypes(reified.vector(reified.vector("u8")), item.fields.batch_hashes) } ) }

 static fromBcs( data: Uint8Array ): MinBlock { return MinBlock.fromFields( MinBlock.bcs.parse(data) ) }

 toJSONField() { return {

 round: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.round),timestamp: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.timestamp),author: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.author),qcHash: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.qcHash),batchHashes: fieldToJSON<Vector<Vector<"u8">>>(`vector<vector<u8>>`, this.batchHashes),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): MinBlock { return MinBlock.reified( ).new( { round: decodeFromJSONField(reified.vector("u8"), field.round), timestamp: decodeFromJSONField(reified.vector("u8"), field.timestamp), author: decodeFromJSONField(reified.vector("u8"), field.author), qcHash: decodeFromJSONField(reified.vector("u8"), field.qcHash), batchHashes: decodeFromJSONField(reified.vector(reified.vector("u8")), field.batchHashes) } ) }

 static fromJSON( json: Record<string, any> ): MinBlock { if (json.$typeName !== MinBlock.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return MinBlock.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): MinBlock { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isMinBlock(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a MinBlock object`); } return MinBlock.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): MinBlock { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isMinBlock(data.bcs.type)) { throw new Error(`object at is not a MinBlock object`); }

 return MinBlock.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return MinBlock.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<MinBlock> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching MinBlock object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isMinBlock(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a MinBlock object`); }

 return MinBlock.fromSuiObjectData( res.data ); }

 }

/* ============================== Vote =============================== */

export function isVote(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::SupraSValueFeed::Vote`; }

export interface VoteFields { smrBlock: ToField<MinBlock>; round: ToField<"u64"> }

export type VoteReified = Reified< Vote, VoteFields >;

export class Vote implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::SupraSValueFeed::Vote`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Vote.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::SupraSValueFeed::Vote`; readonly $typeArgs: []; readonly $isPhantom = Vote.$isPhantom;

 readonly smrBlock: ToField<MinBlock>; readonly round: ToField<"u64">

 private constructor(typeArgs: [], fields: VoteFields, ) { this.$fullTypeName = composeSuiType( Vote.$typeName, ...typeArgs ) as `${typeof PKG_V1}::SupraSValueFeed::Vote`; this.$typeArgs = typeArgs;

 this.smrBlock = fields.smrBlock;; this.round = fields.round; }

 static reified( ): VoteReified { return { typeName: Vote.$typeName, fullTypeName: composeSuiType( Vote.$typeName, ...[] ) as `${typeof PKG_V1}::SupraSValueFeed::Vote`, typeArgs: [ ] as [], isPhantom: Vote.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Vote.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Vote.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Vote.fromBcs( data, ), bcs: Vote.bcs, fromJSONField: (field: any) => Vote.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Vote.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Vote.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Vote.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Vote.fetch( client, id, ), new: ( fields: VoteFields, ) => { return new Vote( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Vote.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Vote>> { return phantom(Vote.reified( )); } static get p() { return Vote.phantom() }

 static get bcs() { return bcs.struct("Vote", {

 smr_block: MinBlock.bcs, round: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): Vote { return Vote.reified( ).new( { smrBlock: decodeFromFields(MinBlock.reified(), fields.smr_block), round: decodeFromFields("u64", fields.round) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Vote { if (!isVote(item.type)) { throw new Error("not a Vote type");

 }

 return Vote.reified( ).new( { smrBlock: decodeFromFieldsWithTypes(MinBlock.reified(), item.fields.smr_block), round: decodeFromFieldsWithTypes("u64", item.fields.round) } ) }

 static fromBcs( data: Uint8Array ): Vote { return Vote.fromFields( Vote.bcs.parse(data) ) }

 toJSONField() { return {

 smrBlock: this.smrBlock.toJSONField(),round: this.round.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Vote { return Vote.reified( ).new( { smrBlock: decodeFromJSONField(MinBlock.reified(), field.smrBlock), round: decodeFromJSONField("u64", field.round) } ) }

 static fromJSON( json: Record<string, any> ): Vote { if (json.$typeName !== Vote.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Vote.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Vote { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isVote(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Vote object`); } return Vote.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Vote { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isVote(data.bcs.type)) { throw new Error(`object at is not a Vote object`); }

 return Vote.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Vote.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Vote> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Vote object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isVote(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Vote object`); }

 return Vote.fromSuiObjectData( res.data ); }

 }

/* ============================== MinBatch =============================== */

export function isMinBatch(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::SupraSValueFeed::MinBatch`; }

export interface MinBatchFields { protocol: ToField<Vector<"u8">>; txnHashes: ToField<Vector<Vector<"u8">>> }

export type MinBatchReified = Reified< MinBatch, MinBatchFields >;

export class MinBatch implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::SupraSValueFeed::MinBatch`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = MinBatch.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::SupraSValueFeed::MinBatch`; readonly $typeArgs: []; readonly $isPhantom = MinBatch.$isPhantom;

 readonly protocol: ToField<Vector<"u8">>; readonly txnHashes: ToField<Vector<Vector<"u8">>>

 private constructor(typeArgs: [], fields: MinBatchFields, ) { this.$fullTypeName = composeSuiType( MinBatch.$typeName, ...typeArgs ) as `${typeof PKG_V1}::SupraSValueFeed::MinBatch`; this.$typeArgs = typeArgs;

 this.protocol = fields.protocol;; this.txnHashes = fields.txnHashes; }

 static reified( ): MinBatchReified { return { typeName: MinBatch.$typeName, fullTypeName: composeSuiType( MinBatch.$typeName, ...[] ) as `${typeof PKG_V1}::SupraSValueFeed::MinBatch`, typeArgs: [ ] as [], isPhantom: MinBatch.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => MinBatch.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => MinBatch.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => MinBatch.fromBcs( data, ), bcs: MinBatch.bcs, fromJSONField: (field: any) => MinBatch.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => MinBatch.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => MinBatch.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => MinBatch.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => MinBatch.fetch( client, id, ), new: ( fields: MinBatchFields, ) => { return new MinBatch( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return MinBatch.reified() }

 static phantom( ): PhantomReified<ToTypeStr<MinBatch>> { return phantom(MinBatch.reified( )); } static get p() { return MinBatch.phantom() }

 static get bcs() { return bcs.struct("MinBatch", {

 protocol: bcs.vector(bcs.u8()), txn_hashes: bcs.vector(bcs.vector(bcs.u8()))

}) };

 static fromFields( fields: Record<string, any> ): MinBatch { return MinBatch.reified( ).new( { protocol: decodeFromFields(reified.vector("u8"), fields.protocol), txnHashes: decodeFromFields(reified.vector(reified.vector("u8")), fields.txn_hashes) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): MinBatch { if (!isMinBatch(item.type)) { throw new Error("not a MinBatch type");

 }

 return MinBatch.reified( ).new( { protocol: decodeFromFieldsWithTypes(reified.vector("u8"), item.fields.protocol), txnHashes: decodeFromFieldsWithTypes(reified.vector(reified.vector("u8")), item.fields.txn_hashes) } ) }

 static fromBcs( data: Uint8Array ): MinBatch { return MinBatch.fromFields( MinBatch.bcs.parse(data) ) }

 toJSONField() { return {

 protocol: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.protocol),txnHashes: fieldToJSON<Vector<Vector<"u8">>>(`vector<vector<u8>>`, this.txnHashes),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): MinBatch { return MinBatch.reified( ).new( { protocol: decodeFromJSONField(reified.vector("u8"), field.protocol), txnHashes: decodeFromJSONField(reified.vector(reified.vector("u8")), field.txnHashes) } ) }

 static fromJSON( json: Record<string, any> ): MinBatch { if (json.$typeName !== MinBatch.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return MinBatch.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): MinBatch { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isMinBatch(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a MinBatch object`); } return MinBatch.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): MinBatch { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isMinBatch(data.bcs.type)) { throw new Error(`object at is not a MinBatch object`); }

 return MinBatch.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return MinBatch.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<MinBatch> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching MinBatch object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isMinBatch(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a MinBatch object`); }

 return MinBatch.fromSuiObjectData( res.data ); }

 }

/* ============================== MinTxn =============================== */

export function isMinTxn(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::SupraSValueFeed::MinTxn`; }

export interface MinTxnFields { clusterHashes: ToField<Vector<Vector<"u8">>>; sender: ToField<Vector<"u8">>; protocol: ToField<Vector<"u8">>; txSubType: ToField<"u8"> }

export type MinTxnReified = Reified< MinTxn, MinTxnFields >;

export class MinTxn implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::SupraSValueFeed::MinTxn`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = MinTxn.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::SupraSValueFeed::MinTxn`; readonly $typeArgs: []; readonly $isPhantom = MinTxn.$isPhantom;

 readonly clusterHashes: ToField<Vector<Vector<"u8">>>; readonly sender: ToField<Vector<"u8">>; readonly protocol: ToField<Vector<"u8">>; readonly txSubType: ToField<"u8">

 private constructor(typeArgs: [], fields: MinTxnFields, ) { this.$fullTypeName = composeSuiType( MinTxn.$typeName, ...typeArgs ) as `${typeof PKG_V1}::SupraSValueFeed::MinTxn`; this.$typeArgs = typeArgs;

 this.clusterHashes = fields.clusterHashes;; this.sender = fields.sender;; this.protocol = fields.protocol;; this.txSubType = fields.txSubType; }

 static reified( ): MinTxnReified { return { typeName: MinTxn.$typeName, fullTypeName: composeSuiType( MinTxn.$typeName, ...[] ) as `${typeof PKG_V1}::SupraSValueFeed::MinTxn`, typeArgs: [ ] as [], isPhantom: MinTxn.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => MinTxn.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => MinTxn.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => MinTxn.fromBcs( data, ), bcs: MinTxn.bcs, fromJSONField: (field: any) => MinTxn.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => MinTxn.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => MinTxn.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => MinTxn.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => MinTxn.fetch( client, id, ), new: ( fields: MinTxnFields, ) => { return new MinTxn( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return MinTxn.reified() }

 static phantom( ): PhantomReified<ToTypeStr<MinTxn>> { return phantom(MinTxn.reified( )); } static get p() { return MinTxn.phantom() }

 static get bcs() { return bcs.struct("MinTxn", {

 cluster_hashes: bcs.vector(bcs.vector(bcs.u8())), sender: bcs.vector(bcs.u8()), protocol: bcs.vector(bcs.u8()), tx_sub_type: bcs.u8()

}) };

 static fromFields( fields: Record<string, any> ): MinTxn { return MinTxn.reified( ).new( { clusterHashes: decodeFromFields(reified.vector(reified.vector("u8")), fields.cluster_hashes), sender: decodeFromFields(reified.vector("u8"), fields.sender), protocol: decodeFromFields(reified.vector("u8"), fields.protocol), txSubType: decodeFromFields("u8", fields.tx_sub_type) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): MinTxn { if (!isMinTxn(item.type)) { throw new Error("not a MinTxn type");

 }

 return MinTxn.reified( ).new( { clusterHashes: decodeFromFieldsWithTypes(reified.vector(reified.vector("u8")), item.fields.cluster_hashes), sender: decodeFromFieldsWithTypes(reified.vector("u8"), item.fields.sender), protocol: decodeFromFieldsWithTypes(reified.vector("u8"), item.fields.protocol), txSubType: decodeFromFieldsWithTypes("u8", item.fields.tx_sub_type) } ) }

 static fromBcs( data: Uint8Array ): MinTxn { return MinTxn.fromFields( MinTxn.bcs.parse(data) ) }

 toJSONField() { return {

 clusterHashes: fieldToJSON<Vector<Vector<"u8">>>(`vector<vector<u8>>`, this.clusterHashes),sender: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.sender),protocol: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.protocol),txSubType: this.txSubType,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): MinTxn { return MinTxn.reified( ).new( { clusterHashes: decodeFromJSONField(reified.vector(reified.vector("u8")), field.clusterHashes), sender: decodeFromJSONField(reified.vector("u8"), field.sender), protocol: decodeFromJSONField(reified.vector("u8"), field.protocol), txSubType: decodeFromJSONField("u8", field.txSubType) } ) }

 static fromJSON( json: Record<string, any> ): MinTxn { if (json.$typeName !== MinTxn.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return MinTxn.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): MinTxn { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isMinTxn(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a MinTxn object`); } return MinTxn.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): MinTxn { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isMinTxn(data.bcs.type)) { throw new Error(`object at is not a MinTxn object`); }

 return MinTxn.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return MinTxn.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<MinTxn> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching MinTxn object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isMinTxn(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a MinTxn object`); }

 return MinTxn.fromSuiObjectData( res.data ); }

 }

/* ============================== SignedCoherentCluster =============================== */

export function isSignedCoherentCluster(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::SupraSValueFeed::SignedCoherentCluster`; }

export interface SignedCoherentClusterFields { cc: ToField<CoherentCluster>; qc: ToField<Vector<"u8">>; round: ToField<"u64">; origin: ToField<Origin> }

export type SignedCoherentClusterReified = Reified< SignedCoherentCluster, SignedCoherentClusterFields >;

export class SignedCoherentCluster implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::SupraSValueFeed::SignedCoherentCluster`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = SignedCoherentCluster.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::SupraSValueFeed::SignedCoherentCluster`; readonly $typeArgs: []; readonly $isPhantom = SignedCoherentCluster.$isPhantom;

 readonly cc: ToField<CoherentCluster>; readonly qc: ToField<Vector<"u8">>; readonly round: ToField<"u64">; readonly origin: ToField<Origin>

 private constructor(typeArgs: [], fields: SignedCoherentClusterFields, ) { this.$fullTypeName = composeSuiType( SignedCoherentCluster.$typeName, ...typeArgs ) as `${typeof PKG_V1}::SupraSValueFeed::SignedCoherentCluster`; this.$typeArgs = typeArgs;

 this.cc = fields.cc;; this.qc = fields.qc;; this.round = fields.round;; this.origin = fields.origin; }

 static reified( ): SignedCoherentClusterReified { return { typeName: SignedCoherentCluster.$typeName, fullTypeName: composeSuiType( SignedCoherentCluster.$typeName, ...[] ) as `${typeof PKG_V1}::SupraSValueFeed::SignedCoherentCluster`, typeArgs: [ ] as [], isPhantom: SignedCoherentCluster.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => SignedCoherentCluster.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => SignedCoherentCluster.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => SignedCoherentCluster.fromBcs( data, ), bcs: SignedCoherentCluster.bcs, fromJSONField: (field: any) => SignedCoherentCluster.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => SignedCoherentCluster.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => SignedCoherentCluster.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => SignedCoherentCluster.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => SignedCoherentCluster.fetch( client, id, ), new: ( fields: SignedCoherentClusterFields, ) => { return new SignedCoherentCluster( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return SignedCoherentCluster.reified() }

 static phantom( ): PhantomReified<ToTypeStr<SignedCoherentCluster>> { return phantom(SignedCoherentCluster.reified( )); } static get p() { return SignedCoherentCluster.phantom() }

 static get bcs() { return bcs.struct("SignedCoherentCluster", {

 cc: CoherentCluster.bcs, qc: bcs.vector(bcs.u8()), round: bcs.u64(), origin: Origin.bcs

}) };

 static fromFields( fields: Record<string, any> ): SignedCoherentCluster { return SignedCoherentCluster.reified( ).new( { cc: decodeFromFields(CoherentCluster.reified(), fields.cc), qc: decodeFromFields(reified.vector("u8"), fields.qc), round: decodeFromFields("u64", fields.round), origin: decodeFromFields(Origin.reified(), fields.origin) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): SignedCoherentCluster { if (!isSignedCoherentCluster(item.type)) { throw new Error("not a SignedCoherentCluster type");

 }

 return SignedCoherentCluster.reified( ).new( { cc: decodeFromFieldsWithTypes(CoherentCluster.reified(), item.fields.cc), qc: decodeFromFieldsWithTypes(reified.vector("u8"), item.fields.qc), round: decodeFromFieldsWithTypes("u64", item.fields.round), origin: decodeFromFieldsWithTypes(Origin.reified(), item.fields.origin) } ) }

 static fromBcs( data: Uint8Array ): SignedCoherentCluster { return SignedCoherentCluster.fromFields( SignedCoherentCluster.bcs.parse(data) ) }

 toJSONField() { return {

 cc: this.cc.toJSONField(),qc: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.qc),round: this.round.toString(),origin: this.origin.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): SignedCoherentCluster { return SignedCoherentCluster.reified( ).new( { cc: decodeFromJSONField(CoherentCluster.reified(), field.cc), qc: decodeFromJSONField(reified.vector("u8"), field.qc), round: decodeFromJSONField("u64", field.round), origin: decodeFromJSONField(Origin.reified(), field.origin) } ) }

 static fromJSON( json: Record<string, any> ): SignedCoherentCluster { if (json.$typeName !== SignedCoherentCluster.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return SignedCoherentCluster.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): SignedCoherentCluster { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isSignedCoherentCluster(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a SignedCoherentCluster object`); } return SignedCoherentCluster.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): SignedCoherentCluster { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isSignedCoherentCluster(data.bcs.type)) { throw new Error(`object at is not a SignedCoherentCluster object`); }

 return SignedCoherentCluster.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return SignedCoherentCluster.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<SignedCoherentCluster> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching SignedCoherentCluster object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isSignedCoherentCluster(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a SignedCoherentCluster object`); }

 return SignedCoherentCluster.fromSuiObjectData( res.data ); }

 }

/* ============================== CoherentCluster =============================== */

export function isCoherentCluster(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::SupraSValueFeed::CoherentCluster`; }

export interface CoherentClusterFields { dataHash: ToField<Vector<"u8">>; pair: ToField<Vector<"u32">>; prices: ToField<Vector<"u128">>; timestamp: ToField<Vector<"u128">>; decimals: ToField<Vector<"u16">> }

export type CoherentClusterReified = Reified< CoherentCluster, CoherentClusterFields >;

export class CoherentCluster implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::SupraSValueFeed::CoherentCluster`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = CoherentCluster.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::SupraSValueFeed::CoherentCluster`; readonly $typeArgs: []; readonly $isPhantom = CoherentCluster.$isPhantom;

 readonly dataHash: ToField<Vector<"u8">>; readonly pair: ToField<Vector<"u32">>; readonly prices: ToField<Vector<"u128">>; readonly timestamp: ToField<Vector<"u128">>; readonly decimals: ToField<Vector<"u16">>

 private constructor(typeArgs: [], fields: CoherentClusterFields, ) { this.$fullTypeName = composeSuiType( CoherentCluster.$typeName, ...typeArgs ) as `${typeof PKG_V1}::SupraSValueFeed::CoherentCluster`; this.$typeArgs = typeArgs;

 this.dataHash = fields.dataHash;; this.pair = fields.pair;; this.prices = fields.prices;; this.timestamp = fields.timestamp;; this.decimals = fields.decimals; }

 static reified( ): CoherentClusterReified { return { typeName: CoherentCluster.$typeName, fullTypeName: composeSuiType( CoherentCluster.$typeName, ...[] ) as `${typeof PKG_V1}::SupraSValueFeed::CoherentCluster`, typeArgs: [ ] as [], isPhantom: CoherentCluster.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => CoherentCluster.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => CoherentCluster.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => CoherentCluster.fromBcs( data, ), bcs: CoherentCluster.bcs, fromJSONField: (field: any) => CoherentCluster.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => CoherentCluster.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => CoherentCluster.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => CoherentCluster.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => CoherentCluster.fetch( client, id, ), new: ( fields: CoherentClusterFields, ) => { return new CoherentCluster( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return CoherentCluster.reified() }

 static phantom( ): PhantomReified<ToTypeStr<CoherentCluster>> { return phantom(CoherentCluster.reified( )); } static get p() { return CoherentCluster.phantom() }

 static get bcs() { return bcs.struct("CoherentCluster", {

 data_hash: bcs.vector(bcs.u8()), pair: bcs.vector(bcs.u32()), prices: bcs.vector(bcs.u128()), timestamp: bcs.vector(bcs.u128()), decimals: bcs.vector(bcs.u16())

}) };

 static fromFields( fields: Record<string, any> ): CoherentCluster { return CoherentCluster.reified( ).new( { dataHash: decodeFromFields(reified.vector("u8"), fields.data_hash), pair: decodeFromFields(reified.vector("u32"), fields.pair), prices: decodeFromFields(reified.vector("u128"), fields.prices), timestamp: decodeFromFields(reified.vector("u128"), fields.timestamp), decimals: decodeFromFields(reified.vector("u16"), fields.decimals) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): CoherentCluster { if (!isCoherentCluster(item.type)) { throw new Error("not a CoherentCluster type");

 }

 return CoherentCluster.reified( ).new( { dataHash: decodeFromFieldsWithTypes(reified.vector("u8"), item.fields.data_hash), pair: decodeFromFieldsWithTypes(reified.vector("u32"), item.fields.pair), prices: decodeFromFieldsWithTypes(reified.vector("u128"), item.fields.prices), timestamp: decodeFromFieldsWithTypes(reified.vector("u128"), item.fields.timestamp), decimals: decodeFromFieldsWithTypes(reified.vector("u16"), item.fields.decimals) } ) }

 static fromBcs( data: Uint8Array ): CoherentCluster { return CoherentCluster.fromFields( CoherentCluster.bcs.parse(data) ) }

 toJSONField() { return {

 dataHash: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.dataHash),pair: fieldToJSON<Vector<"u32">>(`vector<u32>`, this.pair),prices: fieldToJSON<Vector<"u128">>(`vector<u128>`, this.prices),timestamp: fieldToJSON<Vector<"u128">>(`vector<u128>`, this.timestamp),decimals: fieldToJSON<Vector<"u16">>(`vector<u16>`, this.decimals),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): CoherentCluster { return CoherentCluster.reified( ).new( { dataHash: decodeFromJSONField(reified.vector("u8"), field.dataHash), pair: decodeFromJSONField(reified.vector("u32"), field.pair), prices: decodeFromJSONField(reified.vector("u128"), field.prices), timestamp: decodeFromJSONField(reified.vector("u128"), field.timestamp), decimals: decodeFromJSONField(reified.vector("u16"), field.decimals) } ) }

 static fromJSON( json: Record<string, any> ): CoherentCluster { if (json.$typeName !== CoherentCluster.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return CoherentCluster.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): CoherentCluster { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isCoherentCluster(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a CoherentCluster object`); } return CoherentCluster.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): CoherentCluster { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isCoherentCluster(data.bcs.type)) { throw new Error(`object at is not a CoherentCluster object`); }

 return CoherentCluster.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return CoherentCluster.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<CoherentCluster> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching CoherentCluster object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isCoherentCluster(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a CoherentCluster object`); }

 return CoherentCluster.fromSuiObjectData( res.data ); }

 }

/* ============================== Origin =============================== */

export function isOrigin(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::SupraSValueFeed::Origin`; }

export interface OriginFields { id: ToField<Vector<"u8">>; memberIndex: ToField<"u64">; committeeIndex: ToField<"u64"> }

export type OriginReified = Reified< Origin, OriginFields >;

export class Origin implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::SupraSValueFeed::Origin`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Origin.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::SupraSValueFeed::Origin`; readonly $typeArgs: []; readonly $isPhantom = Origin.$isPhantom;

 readonly id: ToField<Vector<"u8">>; readonly memberIndex: ToField<"u64">; readonly committeeIndex: ToField<"u64">

 private constructor(typeArgs: [], fields: OriginFields, ) { this.$fullTypeName = composeSuiType( Origin.$typeName, ...typeArgs ) as `${typeof PKG_V1}::SupraSValueFeed::Origin`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.memberIndex = fields.memberIndex;; this.committeeIndex = fields.committeeIndex; }

 static reified( ): OriginReified { return { typeName: Origin.$typeName, fullTypeName: composeSuiType( Origin.$typeName, ...[] ) as `${typeof PKG_V1}::SupraSValueFeed::Origin`, typeArgs: [ ] as [], isPhantom: Origin.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Origin.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Origin.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Origin.fromBcs( data, ), bcs: Origin.bcs, fromJSONField: (field: any) => Origin.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Origin.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Origin.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Origin.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Origin.fetch( client, id, ), new: ( fields: OriginFields, ) => { return new Origin( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Origin.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Origin>> { return phantom(Origin.reified( )); } static get p() { return Origin.phantom() }

 static get bcs() { return bcs.struct("Origin", {

 id: bcs.vector(bcs.u8()), member_index: bcs.u64(), committee_index: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): Origin { return Origin.reified( ).new( { id: decodeFromFields(reified.vector("u8"), fields.id), memberIndex: decodeFromFields("u64", fields.member_index), committeeIndex: decodeFromFields("u64", fields.committee_index) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Origin { if (!isOrigin(item.type)) { throw new Error("not a Origin type");

 }

 return Origin.reified( ).new( { id: decodeFromFieldsWithTypes(reified.vector("u8"), item.fields.id), memberIndex: decodeFromFieldsWithTypes("u64", item.fields.member_index), committeeIndex: decodeFromFieldsWithTypes("u64", item.fields.committee_index) } ) }

 static fromBcs( data: Uint8Array ): Origin { return Origin.fromFields( Origin.bcs.parse(data) ) }

 toJSONField() { return {

 id: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.id),memberIndex: this.memberIndex.toString(),committeeIndex: this.committeeIndex.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Origin { return Origin.reified( ).new( { id: decodeFromJSONField(reified.vector("u8"), field.id), memberIndex: decodeFromJSONField("u64", field.memberIndex), committeeIndex: decodeFromJSONField("u64", field.committeeIndex) } ) }

 static fromJSON( json: Record<string, any> ): Origin { if (json.$typeName !== Origin.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Origin.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Origin { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isOrigin(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Origin object`); } return Origin.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Origin { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isOrigin(data.bcs.type)) { throw new Error(`object at is not a Origin object`); }

 return Origin.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Origin.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Origin> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Origin object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isOrigin(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Origin object`); }

 return Origin.fromSuiObjectData( res.data ); }

 }

/* ============================== SCCProcessedEvent =============================== */

export function isSCCProcessedEvent(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::SupraSValueFeed::SCCProcessedEvent`; }

export interface SCCProcessedEventFields { hash: ToField<Vector<"u8">> }

export type SCCProcessedEventReified = Reified< SCCProcessedEvent, SCCProcessedEventFields >;

export class SCCProcessedEvent implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::SupraSValueFeed::SCCProcessedEvent`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = SCCProcessedEvent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::SupraSValueFeed::SCCProcessedEvent`; readonly $typeArgs: []; readonly $isPhantom = SCCProcessedEvent.$isPhantom;

 readonly hash: ToField<Vector<"u8">>

 private constructor(typeArgs: [], fields: SCCProcessedEventFields, ) { this.$fullTypeName = composeSuiType( SCCProcessedEvent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::SupraSValueFeed::SCCProcessedEvent`; this.$typeArgs = typeArgs;

 this.hash = fields.hash; }

 static reified( ): SCCProcessedEventReified { return { typeName: SCCProcessedEvent.$typeName, fullTypeName: composeSuiType( SCCProcessedEvent.$typeName, ...[] ) as `${typeof PKG_V1}::SupraSValueFeed::SCCProcessedEvent`, typeArgs: [ ] as [], isPhantom: SCCProcessedEvent.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => SCCProcessedEvent.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => SCCProcessedEvent.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => SCCProcessedEvent.fromBcs( data, ), bcs: SCCProcessedEvent.bcs, fromJSONField: (field: any) => SCCProcessedEvent.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => SCCProcessedEvent.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => SCCProcessedEvent.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => SCCProcessedEvent.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => SCCProcessedEvent.fetch( client, id, ), new: ( fields: SCCProcessedEventFields, ) => { return new SCCProcessedEvent( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return SCCProcessedEvent.reified() }

 static phantom( ): PhantomReified<ToTypeStr<SCCProcessedEvent>> { return phantom(SCCProcessedEvent.reified( )); } static get p() { return SCCProcessedEvent.phantom() }

 static get bcs() { return bcs.struct("SCCProcessedEvent", {

 hash: bcs.vector(bcs.u8())

}) };

 static fromFields( fields: Record<string, any> ): SCCProcessedEvent { return SCCProcessedEvent.reified( ).new( { hash: decodeFromFields(reified.vector("u8"), fields.hash) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): SCCProcessedEvent { if (!isSCCProcessedEvent(item.type)) { throw new Error("not a SCCProcessedEvent type");

 }

 return SCCProcessedEvent.reified( ).new( { hash: decodeFromFieldsWithTypes(reified.vector("u8"), item.fields.hash) } ) }

 static fromBcs( data: Uint8Array ): SCCProcessedEvent { return SCCProcessedEvent.fromFields( SCCProcessedEvent.bcs.parse(data) ) }

 toJSONField() { return {

 hash: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.hash),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): SCCProcessedEvent { return SCCProcessedEvent.reified( ).new( { hash: decodeFromJSONField(reified.vector("u8"), field.hash) } ) }

 static fromJSON( json: Record<string, any> ): SCCProcessedEvent { if (json.$typeName !== SCCProcessedEvent.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return SCCProcessedEvent.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): SCCProcessedEvent { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isSCCProcessedEvent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a SCCProcessedEvent object`); } return SCCProcessedEvent.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): SCCProcessedEvent { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isSCCProcessedEvent(data.bcs.type)) { throw new Error(`object at is not a SCCProcessedEvent object`); }

 return SCCProcessedEvent.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return SCCProcessedEvent.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<SCCProcessedEvent> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching SCCProcessedEvent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isSCCProcessedEvent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a SCCProcessedEvent object`); }

 return SCCProcessedEvent.fromSuiObjectData( res.data ); }

 }
