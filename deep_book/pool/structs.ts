import {ID, UID} from "../../_dependencies/onchain/0x2/object/structs";
import {VecSet} from "../../_dependencies/onchain/0x2/vec-set/structs";
import {Versioned} from "../../_dependencies/onchain/0x2/versioned/structs";
import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName} from "../../_framework/util";
import {Book} from "../book/structs";
import {DeepPrice} from "../deep-price/structs";
import {PKG_V1} from "../index";
import {State} from "../state/structs";
import {Vault} from "../vault/structs";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64, fromHEX, toHEX} from "@mysten/sui/utils";

/* ============================== Pool =============================== */

export function isPool(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::pool::Pool` + '<'); }

export interface PoolFields<T0 extends PhantomTypeArgument, T1 extends PhantomTypeArgument> { id: ToField<UID>; inner: ToField<Versioned> }

export type PoolReified<T0 extends PhantomTypeArgument, T1 extends PhantomTypeArgument> = Reified< Pool<T0, T1>, PoolFields<T0, T1> >;

export class Pool<T0 extends PhantomTypeArgument, T1 extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::pool::Pool`; static readonly $numTypeParams = 2; static readonly $isPhantom = [true,true,] as const;

 readonly $typeName = Pool.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::pool::Pool<${PhantomToTypeStr<T0>}, ${PhantomToTypeStr<T1>}>`; readonly $typeArgs: [PhantomToTypeStr<T0>, PhantomToTypeStr<T1>]; readonly $isPhantom = Pool.$isPhantom;

 readonly id: ToField<UID>; readonly inner: ToField<Versioned>

 private constructor(typeArgs: [PhantomToTypeStr<T0>, PhantomToTypeStr<T1>], fields: PoolFields<T0, T1>, ) { this.$fullTypeName = composeSuiType( Pool.$typeName, ...typeArgs ) as `${typeof PKG_V1}::pool::Pool<${PhantomToTypeStr<T0>}, ${PhantomToTypeStr<T1>}>`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.inner = fields.inner; }

 static reified<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( T0: T0, T1: T1 ): PoolReified<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { return { typeName: Pool.$typeName, fullTypeName: composeSuiType( Pool.$typeName, ...[extractType(T0), extractType(T1)] ) as `${typeof PKG_V1}::pool::Pool<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<T1>>}>`, typeArgs: [ extractType(T0), extractType(T1) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T0>>, PhantomToTypeStr<ToPhantomTypeArgument<T1>>], isPhantom: Pool.$isPhantom, reifiedTypeArgs: [T0, T1], fromFields: (fields: Record<string, any>) => Pool.fromFields( [T0, T1], fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Pool.fromFieldsWithTypes( [T0, T1], item, ), fromBcs: (data: Uint8Array) => Pool.fromBcs( [T0, T1], data, ), bcs: Pool.bcs, fromJSONField: (field: any) => Pool.fromJSONField( [T0, T1], field, ), fromJSON: (json: Record<string, any>) => Pool.fromJSON( [T0, T1], json, ), fromSuiParsedData: (content: SuiParsedData) => Pool.fromSuiParsedData( [T0, T1], content, ), fromSuiObjectData: (content: SuiObjectData) => Pool.fromSuiObjectData( [T0, T1], content, ), fetch: async (client: SuiClient, id: string) => Pool.fetch( client, [T0, T1], id, ), new: ( fields: PoolFields<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>>, ) => { return new Pool( [extractType(T0), extractType(T1)], fields ) }, kind: "StructClassReified", } }

 static get r() { return Pool.reified }

 static phantom<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( T0: T0, T1: T1 ): PhantomReified<ToTypeStr<Pool<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>>>> { return phantom(Pool.reified( T0, T1 )); } static get p() { return Pool.phantom }

 static get bcs() { return bcs.struct("Pool", {

 id: UID.bcs, inner: Versioned.bcs

}) };

 static fromFields<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], fields: Record<string, any> ): Pool<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { return Pool.reified( typeArgs[0], typeArgs[1], ).new( { id: decodeFromFields(UID.reified(), fields.id), inner: decodeFromFields(Versioned.reified(), fields.inner) } ) }

 static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], item: FieldsWithTypes ): Pool<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { if (!isPool(item.type)) { throw new Error("not a Pool type");

 } assertFieldsWithTypesArgsMatch(item, typeArgs);

 return Pool.reified( typeArgs[0], typeArgs[1], ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), inner: decodeFromFieldsWithTypes(Versioned.reified(), item.fields.inner) } ) }

 static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], data: Uint8Array ): Pool<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { return Pool.fromFields( typeArgs, Pool.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,inner: this.inner.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], field: any ): Pool<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { return Pool.reified( typeArgs[0], typeArgs[1], ).new( { id: decodeFromJSONField(UID.reified(), field.id), inner: decodeFromJSONField(Versioned.reified(), field.inner) } ) }

 static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], json: Record<string, any> ): Pool<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { if (json.$typeName !== Pool.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(Pool.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs, )

 return Pool.fromJSONField( typeArgs, json, ) }

 static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], content: SuiParsedData ): Pool<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPool(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Pool object`); } return Pool.fromFieldsWithTypes( typeArgs, content ); }

 static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], data: SuiObjectData ): Pool<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isPool(data.bcs.type)) { throw new Error(`object at is not a Pool object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 2) { throw new Error(`type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 2; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

 return Pool.fromBcs( typeArgs, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Pool.fromSuiParsedData( typeArgs, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArgs: [T0, T1], id: string ): Promise<Pool<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Pool object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPool(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Pool object`); }

 return Pool.fromSuiObjectData( typeArgs, res.data ); }

 }

/* ============================== PoolInner =============================== */

export function isPoolInner(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::pool::PoolInner` + '<'); }

export interface PoolInnerFields<T0 extends PhantomTypeArgument, T1 extends PhantomTypeArgument> { allowedVersions: ToField<VecSet<"u64">>; poolId: ToField<ID>; book: ToField<Book>; state: ToField<State>; vault: ToField<Vault<T0, T1>>; deepPrice: ToField<DeepPrice>; registeredPool: ToField<"bool"> }

export type PoolInnerReified<T0 extends PhantomTypeArgument, T1 extends PhantomTypeArgument> = Reified< PoolInner<T0, T1>, PoolInnerFields<T0, T1> >;

export class PoolInner<T0 extends PhantomTypeArgument, T1 extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::pool::PoolInner`; static readonly $numTypeParams = 2; static readonly $isPhantom = [true,true,] as const;

 readonly $typeName = PoolInner.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::pool::PoolInner<${PhantomToTypeStr<T0>}, ${PhantomToTypeStr<T1>}>`; readonly $typeArgs: [PhantomToTypeStr<T0>, PhantomToTypeStr<T1>]; readonly $isPhantom = PoolInner.$isPhantom;

 readonly allowedVersions: ToField<VecSet<"u64">>; readonly poolId: ToField<ID>; readonly book: ToField<Book>; readonly state: ToField<State>; readonly vault: ToField<Vault<T0, T1>>; readonly deepPrice: ToField<DeepPrice>; readonly registeredPool: ToField<"bool">

 private constructor(typeArgs: [PhantomToTypeStr<T0>, PhantomToTypeStr<T1>], fields: PoolInnerFields<T0, T1>, ) { this.$fullTypeName = composeSuiType( PoolInner.$typeName, ...typeArgs ) as `${typeof PKG_V1}::pool::PoolInner<${PhantomToTypeStr<T0>}, ${PhantomToTypeStr<T1>}>`; this.$typeArgs = typeArgs;

 this.allowedVersions = fields.allowedVersions;; this.poolId = fields.poolId;; this.book = fields.book;; this.state = fields.state;; this.vault = fields.vault;; this.deepPrice = fields.deepPrice;; this.registeredPool = fields.registeredPool; }

 static reified<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( T0: T0, T1: T1 ): PoolInnerReified<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { return { typeName: PoolInner.$typeName, fullTypeName: composeSuiType( PoolInner.$typeName, ...[extractType(T0), extractType(T1)] ) as `${typeof PKG_V1}::pool::PoolInner<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<T1>>}>`, typeArgs: [ extractType(T0), extractType(T1) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T0>>, PhantomToTypeStr<ToPhantomTypeArgument<T1>>], isPhantom: PoolInner.$isPhantom, reifiedTypeArgs: [T0, T1], fromFields: (fields: Record<string, any>) => PoolInner.fromFields( [T0, T1], fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => PoolInner.fromFieldsWithTypes( [T0, T1], item, ), fromBcs: (data: Uint8Array) => PoolInner.fromBcs( [T0, T1], data, ), bcs: PoolInner.bcs, fromJSONField: (field: any) => PoolInner.fromJSONField( [T0, T1], field, ), fromJSON: (json: Record<string, any>) => PoolInner.fromJSON( [T0, T1], json, ), fromSuiParsedData: (content: SuiParsedData) => PoolInner.fromSuiParsedData( [T0, T1], content, ), fromSuiObjectData: (content: SuiObjectData) => PoolInner.fromSuiObjectData( [T0, T1], content, ), fetch: async (client: SuiClient, id: string) => PoolInner.fetch( client, [T0, T1], id, ), new: ( fields: PoolInnerFields<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>>, ) => { return new PoolInner( [extractType(T0), extractType(T1)], fields ) }, kind: "StructClassReified", } }

 static get r() { return PoolInner.reified }

 static phantom<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( T0: T0, T1: T1 ): PhantomReified<ToTypeStr<PoolInner<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>>>> { return phantom(PoolInner.reified( T0, T1 )); } static get p() { return PoolInner.phantom }

 static get bcs() { return bcs.struct("PoolInner", {

 allowed_versions: VecSet.bcs(bcs.u64()), pool_id: ID.bcs, book: Book.bcs, state: State.bcs, vault: Vault.bcs, deep_price: DeepPrice.bcs, registered_pool: bcs.bool()

}) };

 static fromFields<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], fields: Record<string, any> ): PoolInner<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { return PoolInner.reified( typeArgs[0], typeArgs[1], ).new( { allowedVersions: decodeFromFields(VecSet.reified("u64"), fields.allowed_versions), poolId: decodeFromFields(ID.reified(), fields.pool_id), book: decodeFromFields(Book.reified(), fields.book), state: decodeFromFields(State.reified(), fields.state), vault: decodeFromFields(Vault.reified(typeArgs[0], typeArgs[1]), fields.vault), deepPrice: decodeFromFields(DeepPrice.reified(), fields.deep_price), registeredPool: decodeFromFields("bool", fields.registered_pool) } ) }

 static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], item: FieldsWithTypes ): PoolInner<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { if (!isPoolInner(item.type)) { throw new Error("not a PoolInner type");

 } assertFieldsWithTypesArgsMatch(item, typeArgs);

 return PoolInner.reified( typeArgs[0], typeArgs[1], ).new( { allowedVersions: decodeFromFieldsWithTypes(VecSet.reified("u64"), item.fields.allowed_versions), poolId: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool_id), book: decodeFromFieldsWithTypes(Book.reified(), item.fields.book), state: decodeFromFieldsWithTypes(State.reified(), item.fields.state), vault: decodeFromFieldsWithTypes(Vault.reified(typeArgs[0], typeArgs[1]), item.fields.vault), deepPrice: decodeFromFieldsWithTypes(DeepPrice.reified(), item.fields.deep_price), registeredPool: decodeFromFieldsWithTypes("bool", item.fields.registered_pool) } ) }

 static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], data: Uint8Array ): PoolInner<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { return PoolInner.fromFields( typeArgs, PoolInner.bcs.parse(data) ) }

 toJSONField() { return {

 allowedVersions: this.allowedVersions.toJSONField(),poolId: this.poolId,book: this.book.toJSONField(),state: this.state.toJSONField(),vault: this.vault.toJSONField(),deepPrice: this.deepPrice.toJSONField(),registeredPool: this.registeredPool,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], field: any ): PoolInner<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { return PoolInner.reified( typeArgs[0], typeArgs[1], ).new( { allowedVersions: decodeFromJSONField(VecSet.reified("u64"), field.allowedVersions), poolId: decodeFromJSONField(ID.reified(), field.poolId), book: decodeFromJSONField(Book.reified(), field.book), state: decodeFromJSONField(State.reified(), field.state), vault: decodeFromJSONField(Vault.reified(typeArgs[0], typeArgs[1]), field.vault), deepPrice: decodeFromJSONField(DeepPrice.reified(), field.deepPrice), registeredPool: decodeFromJSONField("bool", field.registeredPool) } ) }

 static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], json: Record<string, any> ): PoolInner<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { if (json.$typeName !== PoolInner.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(PoolInner.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs, )

 return PoolInner.fromJSONField( typeArgs, json, ) }

 static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], content: SuiParsedData ): PoolInner<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPoolInner(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a PoolInner object`); } return PoolInner.fromFieldsWithTypes( typeArgs, content ); }

 static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], data: SuiObjectData ): PoolInner<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isPoolInner(data.bcs.type)) { throw new Error(`object at is not a PoolInner object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 2) { throw new Error(`type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 2; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

 return PoolInner.fromBcs( typeArgs, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return PoolInner.fromSuiParsedData( typeArgs, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArgs: [T0, T1], id: string ): Promise<PoolInner<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching PoolInner object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPoolInner(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a PoolInner object`); }

 return PoolInner.fromSuiObjectData( typeArgs, res.data ); }

 }

/* ============================== PoolCreated =============================== */

export function isPoolCreated(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::pool::PoolCreated` + '<'); }

export interface PoolCreatedFields<T0 extends PhantomTypeArgument, T1 extends PhantomTypeArgument> { poolId: ToField<ID>; takerFee: ToField<"u64">; makerFee: ToField<"u64">; tickSize: ToField<"u64">; lotSize: ToField<"u64">; minSize: ToField<"u64">; whitelistedPool: ToField<"bool">; treasuryAddress: ToField<"address"> }

export type PoolCreatedReified<T0 extends PhantomTypeArgument, T1 extends PhantomTypeArgument> = Reified< PoolCreated<T0, T1>, PoolCreatedFields<T0, T1> >;

export class PoolCreated<T0 extends PhantomTypeArgument, T1 extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::pool::PoolCreated`; static readonly $numTypeParams = 2; static readonly $isPhantom = [true,true,] as const;

 readonly $typeName = PoolCreated.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::pool::PoolCreated<${PhantomToTypeStr<T0>}, ${PhantomToTypeStr<T1>}>`; readonly $typeArgs: [PhantomToTypeStr<T0>, PhantomToTypeStr<T1>]; readonly $isPhantom = PoolCreated.$isPhantom;

 readonly poolId: ToField<ID>; readonly takerFee: ToField<"u64">; readonly makerFee: ToField<"u64">; readonly tickSize: ToField<"u64">; readonly lotSize: ToField<"u64">; readonly minSize: ToField<"u64">; readonly whitelistedPool: ToField<"bool">; readonly treasuryAddress: ToField<"address">

 private constructor(typeArgs: [PhantomToTypeStr<T0>, PhantomToTypeStr<T1>], fields: PoolCreatedFields<T0, T1>, ) { this.$fullTypeName = composeSuiType( PoolCreated.$typeName, ...typeArgs ) as `${typeof PKG_V1}::pool::PoolCreated<${PhantomToTypeStr<T0>}, ${PhantomToTypeStr<T1>}>`; this.$typeArgs = typeArgs;

 this.poolId = fields.poolId;; this.takerFee = fields.takerFee;; this.makerFee = fields.makerFee;; this.tickSize = fields.tickSize;; this.lotSize = fields.lotSize;; this.minSize = fields.minSize;; this.whitelistedPool = fields.whitelistedPool;; this.treasuryAddress = fields.treasuryAddress; }

 static reified<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( T0: T0, T1: T1 ): PoolCreatedReified<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { return { typeName: PoolCreated.$typeName, fullTypeName: composeSuiType( PoolCreated.$typeName, ...[extractType(T0), extractType(T1)] ) as `${typeof PKG_V1}::pool::PoolCreated<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<T1>>}>`, typeArgs: [ extractType(T0), extractType(T1) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T0>>, PhantomToTypeStr<ToPhantomTypeArgument<T1>>], isPhantom: PoolCreated.$isPhantom, reifiedTypeArgs: [T0, T1], fromFields: (fields: Record<string, any>) => PoolCreated.fromFields( [T0, T1], fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => PoolCreated.fromFieldsWithTypes( [T0, T1], item, ), fromBcs: (data: Uint8Array) => PoolCreated.fromBcs( [T0, T1], data, ), bcs: PoolCreated.bcs, fromJSONField: (field: any) => PoolCreated.fromJSONField( [T0, T1], field, ), fromJSON: (json: Record<string, any>) => PoolCreated.fromJSON( [T0, T1], json, ), fromSuiParsedData: (content: SuiParsedData) => PoolCreated.fromSuiParsedData( [T0, T1], content, ), fromSuiObjectData: (content: SuiObjectData) => PoolCreated.fromSuiObjectData( [T0, T1], content, ), fetch: async (client: SuiClient, id: string) => PoolCreated.fetch( client, [T0, T1], id, ), new: ( fields: PoolCreatedFields<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>>, ) => { return new PoolCreated( [extractType(T0), extractType(T1)], fields ) }, kind: "StructClassReified", } }

 static get r() { return PoolCreated.reified }

 static phantom<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( T0: T0, T1: T1 ): PhantomReified<ToTypeStr<PoolCreated<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>>>> { return phantom(PoolCreated.reified( T0, T1 )); } static get p() { return PoolCreated.phantom }

 static get bcs() { return bcs.struct("PoolCreated", {

 pool_id: ID.bcs, taker_fee: bcs.u64(), maker_fee: bcs.u64(), tick_size: bcs.u64(), lot_size: bcs.u64(), min_size: bcs.u64(), whitelisted_pool: bcs.bool(), treasury_address: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], fields: Record<string, any> ): PoolCreated<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { return PoolCreated.reified( typeArgs[0], typeArgs[1], ).new( { poolId: decodeFromFields(ID.reified(), fields.pool_id), takerFee: decodeFromFields("u64", fields.taker_fee), makerFee: decodeFromFields("u64", fields.maker_fee), tickSize: decodeFromFields("u64", fields.tick_size), lotSize: decodeFromFields("u64", fields.lot_size), minSize: decodeFromFields("u64", fields.min_size), whitelistedPool: decodeFromFields("bool", fields.whitelisted_pool), treasuryAddress: decodeFromFields("address", fields.treasury_address) } ) }

 static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], item: FieldsWithTypes ): PoolCreated<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { if (!isPoolCreated(item.type)) { throw new Error("not a PoolCreated type");

 } assertFieldsWithTypesArgsMatch(item, typeArgs);

 return PoolCreated.reified( typeArgs[0], typeArgs[1], ).new( { poolId: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool_id), takerFee: decodeFromFieldsWithTypes("u64", item.fields.taker_fee), makerFee: decodeFromFieldsWithTypes("u64", item.fields.maker_fee), tickSize: decodeFromFieldsWithTypes("u64", item.fields.tick_size), lotSize: decodeFromFieldsWithTypes("u64", item.fields.lot_size), minSize: decodeFromFieldsWithTypes("u64", item.fields.min_size), whitelistedPool: decodeFromFieldsWithTypes("bool", item.fields.whitelisted_pool), treasuryAddress: decodeFromFieldsWithTypes("address", item.fields.treasury_address) } ) }

 static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], data: Uint8Array ): PoolCreated<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { return PoolCreated.fromFields( typeArgs, PoolCreated.bcs.parse(data) ) }

 toJSONField() { return {

 poolId: this.poolId,takerFee: this.takerFee.toString(),makerFee: this.makerFee.toString(),tickSize: this.tickSize.toString(),lotSize: this.lotSize.toString(),minSize: this.minSize.toString(),whitelistedPool: this.whitelistedPool,treasuryAddress: this.treasuryAddress,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], field: any ): PoolCreated<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { return PoolCreated.reified( typeArgs[0], typeArgs[1], ).new( { poolId: decodeFromJSONField(ID.reified(), field.poolId), takerFee: decodeFromJSONField("u64", field.takerFee), makerFee: decodeFromJSONField("u64", field.makerFee), tickSize: decodeFromJSONField("u64", field.tickSize), lotSize: decodeFromJSONField("u64", field.lotSize), minSize: decodeFromJSONField("u64", field.minSize), whitelistedPool: decodeFromJSONField("bool", field.whitelistedPool), treasuryAddress: decodeFromJSONField("address", field.treasuryAddress) } ) }

 static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], json: Record<string, any> ): PoolCreated<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { if (json.$typeName !== PoolCreated.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(PoolCreated.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs, )

 return PoolCreated.fromJSONField( typeArgs, json, ) }

 static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], content: SuiParsedData ): PoolCreated<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPoolCreated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a PoolCreated object`); } return PoolCreated.fromFieldsWithTypes( typeArgs, content ); }

 static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], data: SuiObjectData ): PoolCreated<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isPoolCreated(data.bcs.type)) { throw new Error(`object at is not a PoolCreated object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 2) { throw new Error(`type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 2; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

 return PoolCreated.fromBcs( typeArgs, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return PoolCreated.fromSuiParsedData( typeArgs, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArgs: [T0, T1], id: string ): Promise<PoolCreated<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching PoolCreated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPoolCreated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a PoolCreated object`); }

 return PoolCreated.fromSuiObjectData( typeArgs, res.data ); }

 }
