import {Bag} from "../../_dependencies/onchain/0x2/bag/structs";
import {ID, UID} from "../../_dependencies/onchain/0x2/object/structs";
import {VecSet} from "../../_dependencies/onchain/0x2/vec-set/structs";
import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName} from "../../_framework/util";
import {TypeName} from "../../std/type-name/structs";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64, fromHEX, toHEX} from "@mysten/sui/utils";

/* ============================== BalanceManager =============================== */

export function isBalanceManager(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::balance_manager::BalanceManager`; }

export interface BalanceManagerFields { id: ToField<UID>; owner: ToField<"address">; balances: ToField<Bag>; allowListed: ToField<VecSet<ID>> }

export type BalanceManagerReified = Reified< BalanceManager, BalanceManagerFields >;

export class BalanceManager implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::balance_manager::BalanceManager`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = BalanceManager.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::balance_manager::BalanceManager`; readonly $typeArgs: []; readonly $isPhantom = BalanceManager.$isPhantom;

 readonly id: ToField<UID>; readonly owner: ToField<"address">; readonly balances: ToField<Bag>; readonly allowListed: ToField<VecSet<ID>>

 private constructor(typeArgs: [], fields: BalanceManagerFields, ) { this.$fullTypeName = composeSuiType( BalanceManager.$typeName, ...typeArgs ) as `${typeof PKG_V1}::balance_manager::BalanceManager`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.owner = fields.owner;; this.balances = fields.balances;; this.allowListed = fields.allowListed; }

 static reified( ): BalanceManagerReified { return { typeName: BalanceManager.$typeName, fullTypeName: composeSuiType( BalanceManager.$typeName, ...[] ) as `${typeof PKG_V1}::balance_manager::BalanceManager`, typeArgs: [ ] as [], isPhantom: BalanceManager.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BalanceManager.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BalanceManager.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BalanceManager.fromBcs( data, ), bcs: BalanceManager.bcs, fromJSONField: (field: any) => BalanceManager.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BalanceManager.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BalanceManager.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => BalanceManager.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => BalanceManager.fetch( client, id, ), new: ( fields: BalanceManagerFields, ) => { return new BalanceManager( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BalanceManager.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BalanceManager>> { return phantom(BalanceManager.reified( )); } static get p() { return BalanceManager.phantom() }

 static get bcs() { return bcs.struct("BalanceManager", {

 id: UID.bcs, owner: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), balances: Bag.bcs, allow_listed: VecSet.bcs(ID.bcs)

}) };

 static fromFields( fields: Record<string, any> ): BalanceManager { return BalanceManager.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), owner: decodeFromFields("address", fields.owner), balances: decodeFromFields(Bag.reified(), fields.balances), allowListed: decodeFromFields(VecSet.reified(ID.reified()), fields.allow_listed) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BalanceManager { if (!isBalanceManager(item.type)) { throw new Error("not a BalanceManager type");

 }

 return BalanceManager.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), owner: decodeFromFieldsWithTypes("address", item.fields.owner), balances: decodeFromFieldsWithTypes(Bag.reified(), item.fields.balances), allowListed: decodeFromFieldsWithTypes(VecSet.reified(ID.reified()), item.fields.allow_listed) } ) }

 static fromBcs( data: Uint8Array ): BalanceManager { return BalanceManager.fromFields( BalanceManager.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,owner: this.owner,balances: this.balances.toJSONField(),allowListed: this.allowListed.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BalanceManager { return BalanceManager.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), owner: decodeFromJSONField("address", field.owner), balances: decodeFromJSONField(Bag.reified(), field.balances), allowListed: decodeFromJSONField(VecSet.reified(ID.reified()), field.allowListed) } ) }

 static fromJSON( json: Record<string, any> ): BalanceManager { if (json.$typeName !== BalanceManager.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BalanceManager.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BalanceManager { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBalanceManager(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BalanceManager object`); } return BalanceManager.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): BalanceManager { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBalanceManager(data.bcs.type)) { throw new Error(`object at is not a BalanceManager object`); }

 return BalanceManager.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BalanceManager.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<BalanceManager> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BalanceManager object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBalanceManager(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BalanceManager object`); }

 return BalanceManager.fromSuiObjectData( res.data ); }

 }

/* ============================== BalanceEvent =============================== */

export function isBalanceEvent(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::balance_manager::BalanceEvent`; }

export interface BalanceEventFields { balanceManagerId: ToField<ID>; asset: ToField<TypeName>; amount: ToField<"u64">; deposit: ToField<"bool"> }

export type BalanceEventReified = Reified< BalanceEvent, BalanceEventFields >;

export class BalanceEvent implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::balance_manager::BalanceEvent`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = BalanceEvent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::balance_manager::BalanceEvent`; readonly $typeArgs: []; readonly $isPhantom = BalanceEvent.$isPhantom;

 readonly balanceManagerId: ToField<ID>; readonly asset: ToField<TypeName>; readonly amount: ToField<"u64">; readonly deposit: ToField<"bool">

 private constructor(typeArgs: [], fields: BalanceEventFields, ) { this.$fullTypeName = composeSuiType( BalanceEvent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::balance_manager::BalanceEvent`; this.$typeArgs = typeArgs;

 this.balanceManagerId = fields.balanceManagerId;; this.asset = fields.asset;; this.amount = fields.amount;; this.deposit = fields.deposit; }

 static reified( ): BalanceEventReified { return { typeName: BalanceEvent.$typeName, fullTypeName: composeSuiType( BalanceEvent.$typeName, ...[] ) as `${typeof PKG_V1}::balance_manager::BalanceEvent`, typeArgs: [ ] as [], isPhantom: BalanceEvent.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BalanceEvent.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BalanceEvent.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BalanceEvent.fromBcs( data, ), bcs: BalanceEvent.bcs, fromJSONField: (field: any) => BalanceEvent.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BalanceEvent.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BalanceEvent.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => BalanceEvent.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => BalanceEvent.fetch( client, id, ), new: ( fields: BalanceEventFields, ) => { return new BalanceEvent( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BalanceEvent.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BalanceEvent>> { return phantom(BalanceEvent.reified( )); } static get p() { return BalanceEvent.phantom() }

 static get bcs() { return bcs.struct("BalanceEvent", {

 balance_manager_id: ID.bcs, asset: TypeName.bcs, amount: bcs.u64(), deposit: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): BalanceEvent { return BalanceEvent.reified( ).new( { balanceManagerId: decodeFromFields(ID.reified(), fields.balance_manager_id), asset: decodeFromFields(TypeName.reified(), fields.asset), amount: decodeFromFields("u64", fields.amount), deposit: decodeFromFields("bool", fields.deposit) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BalanceEvent { if (!isBalanceEvent(item.type)) { throw new Error("not a BalanceEvent type");

 }

 return BalanceEvent.reified( ).new( { balanceManagerId: decodeFromFieldsWithTypes(ID.reified(), item.fields.balance_manager_id), asset: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.asset), amount: decodeFromFieldsWithTypes("u64", item.fields.amount), deposit: decodeFromFieldsWithTypes("bool", item.fields.deposit) } ) }

 static fromBcs( data: Uint8Array ): BalanceEvent { return BalanceEvent.fromFields( BalanceEvent.bcs.parse(data) ) }

 toJSONField() { return {

 balanceManagerId: this.balanceManagerId,asset: this.asset.toJSONField(),amount: this.amount.toString(),deposit: this.deposit,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BalanceEvent { return BalanceEvent.reified( ).new( { balanceManagerId: decodeFromJSONField(ID.reified(), field.balanceManagerId), asset: decodeFromJSONField(TypeName.reified(), field.asset), amount: decodeFromJSONField("u64", field.amount), deposit: decodeFromJSONField("bool", field.deposit) } ) }

 static fromJSON( json: Record<string, any> ): BalanceEvent { if (json.$typeName !== BalanceEvent.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BalanceEvent.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BalanceEvent { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBalanceEvent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BalanceEvent object`); } return BalanceEvent.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): BalanceEvent { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBalanceEvent(data.bcs.type)) { throw new Error(`object at is not a BalanceEvent object`); }

 return BalanceEvent.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BalanceEvent.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<BalanceEvent> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BalanceEvent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBalanceEvent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BalanceEvent object`); }

 return BalanceEvent.fromSuiObjectData( res.data ); }

 }

/* ============================== BalanceKey =============================== */

export function isBalanceKey(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::balance_manager::BalanceKey` + '<'); }

export interface BalanceKeyFields<T0 extends PhantomTypeArgument> { dummyField: ToField<"bool"> }

export type BalanceKeyReified<T0 extends PhantomTypeArgument> = Reified< BalanceKey<T0>, BalanceKeyFields<T0> >;

export class BalanceKey<T0 extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::balance_manager::BalanceKey`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = BalanceKey.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::balance_manager::BalanceKey<${PhantomToTypeStr<T0>}>`; readonly $typeArgs: [PhantomToTypeStr<T0>]; readonly $isPhantom = BalanceKey.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [PhantomToTypeStr<T0>], fields: BalanceKeyFields<T0>, ) { this.$fullTypeName = composeSuiType( BalanceKey.$typeName, ...typeArgs ) as `${typeof PKG_V1}::balance_manager::BalanceKey<${PhantomToTypeStr<T0>}>`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified<T0 extends PhantomReified<PhantomTypeArgument>>( T0: T0 ): BalanceKeyReified<ToPhantomTypeArgument<T0>> { return { typeName: BalanceKey.$typeName, fullTypeName: composeSuiType( BalanceKey.$typeName, ...[extractType(T0)] ) as `${typeof PKG_V1}::balance_manager::BalanceKey<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`, typeArgs: [ extractType(T0) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T0>>], isPhantom: BalanceKey.$isPhantom, reifiedTypeArgs: [T0], fromFields: (fields: Record<string, any>) => BalanceKey.fromFields( T0, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BalanceKey.fromFieldsWithTypes( T0, item, ), fromBcs: (data: Uint8Array) => BalanceKey.fromBcs( T0, data, ), bcs: BalanceKey.bcs, fromJSONField: (field: any) => BalanceKey.fromJSONField( T0, field, ), fromJSON: (json: Record<string, any>) => BalanceKey.fromJSON( T0, json, ), fromSuiParsedData: (content: SuiParsedData) => BalanceKey.fromSuiParsedData( T0, content, ), fromSuiObjectData: (content: SuiObjectData) => BalanceKey.fromSuiObjectData( T0, content, ), fetch: async (client: SuiClient, id: string) => BalanceKey.fetch( client, T0, id, ), new: ( fields: BalanceKeyFields<ToPhantomTypeArgument<T0>>, ) => { return new BalanceKey( [extractType(T0)], fields ) }, kind: "StructClassReified", } }

 static get r() { return BalanceKey.reified }

 static phantom<T0 extends PhantomReified<PhantomTypeArgument>>( T0: T0 ): PhantomReified<ToTypeStr<BalanceKey<ToPhantomTypeArgument<T0>>>> { return phantom(BalanceKey.reified( T0 )); } static get p() { return BalanceKey.phantom }

 static get bcs() { return bcs.struct("BalanceKey", {

 dummy_field: bcs.bool()

}) };

 static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, fields: Record<string, any> ): BalanceKey<ToPhantomTypeArgument<T0>> { return BalanceKey.reified( typeArg, ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, item: FieldsWithTypes ): BalanceKey<ToPhantomTypeArgument<T0>> { if (!isBalanceKey(item.type)) { throw new Error("not a BalanceKey type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return BalanceKey.reified( typeArg, ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, data: Uint8Array ): BalanceKey<ToPhantomTypeArgument<T0>> { return BalanceKey.fromFields( typeArg, BalanceKey.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, field: any ): BalanceKey<ToPhantomTypeArgument<T0>> { return BalanceKey.reified( typeArg, ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, json: Record<string, any> ): BalanceKey<ToPhantomTypeArgument<T0>> { if (json.$typeName !== BalanceKey.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(BalanceKey.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return BalanceKey.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, content: SuiParsedData ): BalanceKey<ToPhantomTypeArgument<T0>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBalanceKey(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BalanceKey object`); } return BalanceKey.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, data: SuiObjectData ): BalanceKey<ToPhantomTypeArgument<T0>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBalanceKey(data.bcs.type)) { throw new Error(`object at is not a BalanceKey object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return BalanceKey.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BalanceKey.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: T0, id: string ): Promise<BalanceKey<ToPhantomTypeArgument<T0>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BalanceKey object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBalanceKey(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BalanceKey object`); }

 return BalanceKey.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== TradeCap =============================== */

export function isTradeCap(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::balance_manager::TradeCap`; }

export interface TradeCapFields { id: ToField<UID>; balanceManagerId: ToField<ID> }

export type TradeCapReified = Reified< TradeCap, TradeCapFields >;

export class TradeCap implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::balance_manager::TradeCap`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = TradeCap.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::balance_manager::TradeCap`; readonly $typeArgs: []; readonly $isPhantom = TradeCap.$isPhantom;

 readonly id: ToField<UID>; readonly balanceManagerId: ToField<ID>

 private constructor(typeArgs: [], fields: TradeCapFields, ) { this.$fullTypeName = composeSuiType( TradeCap.$typeName, ...typeArgs ) as `${typeof PKG_V1}::balance_manager::TradeCap`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.balanceManagerId = fields.balanceManagerId; }

 static reified( ): TradeCapReified { return { typeName: TradeCap.$typeName, fullTypeName: composeSuiType( TradeCap.$typeName, ...[] ) as `${typeof PKG_V1}::balance_manager::TradeCap`, typeArgs: [ ] as [], isPhantom: TradeCap.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => TradeCap.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => TradeCap.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => TradeCap.fromBcs( data, ), bcs: TradeCap.bcs, fromJSONField: (field: any) => TradeCap.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => TradeCap.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => TradeCap.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => TradeCap.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => TradeCap.fetch( client, id, ), new: ( fields: TradeCapFields, ) => { return new TradeCap( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return TradeCap.reified() }

 static phantom( ): PhantomReified<ToTypeStr<TradeCap>> { return phantom(TradeCap.reified( )); } static get p() { return TradeCap.phantom() }

 static get bcs() { return bcs.struct("TradeCap", {

 id: UID.bcs, balance_manager_id: ID.bcs

}) };

 static fromFields( fields: Record<string, any> ): TradeCap { return TradeCap.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), balanceManagerId: decodeFromFields(ID.reified(), fields.balance_manager_id) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): TradeCap { if (!isTradeCap(item.type)) { throw new Error("not a TradeCap type");

 }

 return TradeCap.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), balanceManagerId: decodeFromFieldsWithTypes(ID.reified(), item.fields.balance_manager_id) } ) }

 static fromBcs( data: Uint8Array ): TradeCap { return TradeCap.fromFields( TradeCap.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,balanceManagerId: this.balanceManagerId,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): TradeCap { return TradeCap.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), balanceManagerId: decodeFromJSONField(ID.reified(), field.balanceManagerId) } ) }

 static fromJSON( json: Record<string, any> ): TradeCap { if (json.$typeName !== TradeCap.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return TradeCap.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): TradeCap { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isTradeCap(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a TradeCap object`); } return TradeCap.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): TradeCap { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isTradeCap(data.bcs.type)) { throw new Error(`object at is not a TradeCap object`); }

 return TradeCap.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return TradeCap.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<TradeCap> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching TradeCap object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isTradeCap(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a TradeCap object`); }

 return TradeCap.fromSuiObjectData( res.data ); }

 }

/* ============================== TradeProof =============================== */

export function isTradeProof(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::balance_manager::TradeProof`; }

export interface TradeProofFields { balanceManagerId: ToField<ID>; trader: ToField<"address"> }

export type TradeProofReified = Reified< TradeProof, TradeProofFields >;

export class TradeProof implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::balance_manager::TradeProof`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = TradeProof.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::balance_manager::TradeProof`; readonly $typeArgs: []; readonly $isPhantom = TradeProof.$isPhantom;

 readonly balanceManagerId: ToField<ID>; readonly trader: ToField<"address">

 private constructor(typeArgs: [], fields: TradeProofFields, ) { this.$fullTypeName = composeSuiType( TradeProof.$typeName, ...typeArgs ) as `${typeof PKG_V1}::balance_manager::TradeProof`; this.$typeArgs = typeArgs;

 this.balanceManagerId = fields.balanceManagerId;; this.trader = fields.trader; }

 static reified( ): TradeProofReified { return { typeName: TradeProof.$typeName, fullTypeName: composeSuiType( TradeProof.$typeName, ...[] ) as `${typeof PKG_V1}::balance_manager::TradeProof`, typeArgs: [ ] as [], isPhantom: TradeProof.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => TradeProof.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => TradeProof.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => TradeProof.fromBcs( data, ), bcs: TradeProof.bcs, fromJSONField: (field: any) => TradeProof.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => TradeProof.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => TradeProof.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => TradeProof.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => TradeProof.fetch( client, id, ), new: ( fields: TradeProofFields, ) => { return new TradeProof( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return TradeProof.reified() }

 static phantom( ): PhantomReified<ToTypeStr<TradeProof>> { return phantom(TradeProof.reified( )); } static get p() { return TradeProof.phantom() }

 static get bcs() { return bcs.struct("TradeProof", {

 balance_manager_id: ID.bcs, trader: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields( fields: Record<string, any> ): TradeProof { return TradeProof.reified( ).new( { balanceManagerId: decodeFromFields(ID.reified(), fields.balance_manager_id), trader: decodeFromFields("address", fields.trader) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): TradeProof { if (!isTradeProof(item.type)) { throw new Error("not a TradeProof type");

 }

 return TradeProof.reified( ).new( { balanceManagerId: decodeFromFieldsWithTypes(ID.reified(), item.fields.balance_manager_id), trader: decodeFromFieldsWithTypes("address", item.fields.trader) } ) }

 static fromBcs( data: Uint8Array ): TradeProof { return TradeProof.fromFields( TradeProof.bcs.parse(data) ) }

 toJSONField() { return {

 balanceManagerId: this.balanceManagerId,trader: this.trader,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): TradeProof { return TradeProof.reified( ).new( { balanceManagerId: decodeFromJSONField(ID.reified(), field.balanceManagerId), trader: decodeFromJSONField("address", field.trader) } ) }

 static fromJSON( json: Record<string, any> ): TradeProof { if (json.$typeName !== TradeProof.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return TradeProof.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): TradeProof { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isTradeProof(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a TradeProof object`); } return TradeProof.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): TradeProof { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isTradeProof(data.bcs.type)) { throw new Error(`object at is not a TradeProof object`); }

 return TradeProof.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return TradeProof.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<TradeProof> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching TradeProof object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isTradeProof(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a TradeProof object`); }

 return TradeProof.fromSuiObjectData( res.data ); }

 }
