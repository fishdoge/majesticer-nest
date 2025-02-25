import {Bag} from "../../_dependencies/onchain/0x2/bag/structs";
import {UID} from "../../_dependencies/onchain/0x2/object/structs";
import {VecSet} from "../../_dependencies/onchain/0x2/vec-set/structs";
import {Versioned} from "../../_dependencies/onchain/0x2/versioned/structs";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {TypeName} from "../../std/type-name/structs";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64, fromHEX, toHEX} from "@mysten/sui/utils";

/* ============================== REGISTRY =============================== */

export function isREGISTRY(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::registry::REGISTRY`; }

export interface REGISTRYFields { dummyField: ToField<"bool"> }

export type REGISTRYReified = Reified< REGISTRY, REGISTRYFields >;

export class REGISTRY implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::registry::REGISTRY`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = REGISTRY.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::registry::REGISTRY`; readonly $typeArgs: []; readonly $isPhantom = REGISTRY.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: REGISTRYFields, ) { this.$fullTypeName = composeSuiType( REGISTRY.$typeName, ...typeArgs ) as `${typeof PKG_V1}::registry::REGISTRY`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): REGISTRYReified { return { typeName: REGISTRY.$typeName, fullTypeName: composeSuiType( REGISTRY.$typeName, ...[] ) as `${typeof PKG_V1}::registry::REGISTRY`, typeArgs: [ ] as [], isPhantom: REGISTRY.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => REGISTRY.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => REGISTRY.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => REGISTRY.fromBcs( data, ), bcs: REGISTRY.bcs, fromJSONField: (field: any) => REGISTRY.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => REGISTRY.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => REGISTRY.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => REGISTRY.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => REGISTRY.fetch( client, id, ), new: ( fields: REGISTRYFields, ) => { return new REGISTRY( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return REGISTRY.reified() }

 static phantom( ): PhantomReified<ToTypeStr<REGISTRY>> { return phantom(REGISTRY.reified( )); } static get p() { return REGISTRY.phantom() }

 static get bcs() { return bcs.struct("REGISTRY", {

 dummy_field: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): REGISTRY { return REGISTRY.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): REGISTRY { if (!isREGISTRY(item.type)) { throw new Error("not a REGISTRY type");

 }

 return REGISTRY.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs( data: Uint8Array ): REGISTRY { return REGISTRY.fromFields( REGISTRY.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): REGISTRY { return REGISTRY.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): REGISTRY { if (json.$typeName !== REGISTRY.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return REGISTRY.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): REGISTRY { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isREGISTRY(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a REGISTRY object`); } return REGISTRY.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): REGISTRY { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isREGISTRY(data.bcs.type)) { throw new Error(`object at is not a REGISTRY object`); }

 return REGISTRY.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return REGISTRY.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<REGISTRY> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching REGISTRY object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isREGISTRY(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a REGISTRY object`); }

 return REGISTRY.fromSuiObjectData( res.data ); }

 }

/* ============================== DeepbookAdminCap =============================== */

export function isDeepbookAdminCap(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::registry::DeepbookAdminCap`; }

export interface DeepbookAdminCapFields { id: ToField<UID> }

export type DeepbookAdminCapReified = Reified< DeepbookAdminCap, DeepbookAdminCapFields >;

export class DeepbookAdminCap implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::registry::DeepbookAdminCap`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = DeepbookAdminCap.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::registry::DeepbookAdminCap`; readonly $typeArgs: []; readonly $isPhantom = DeepbookAdminCap.$isPhantom;

 readonly id: ToField<UID>

 private constructor(typeArgs: [], fields: DeepbookAdminCapFields, ) { this.$fullTypeName = composeSuiType( DeepbookAdminCap.$typeName, ...typeArgs ) as `${typeof PKG_V1}::registry::DeepbookAdminCap`; this.$typeArgs = typeArgs;

 this.id = fields.id; }

 static reified( ): DeepbookAdminCapReified { return { typeName: DeepbookAdminCap.$typeName, fullTypeName: composeSuiType( DeepbookAdminCap.$typeName, ...[] ) as `${typeof PKG_V1}::registry::DeepbookAdminCap`, typeArgs: [ ] as [], isPhantom: DeepbookAdminCap.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => DeepbookAdminCap.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => DeepbookAdminCap.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => DeepbookAdminCap.fromBcs( data, ), bcs: DeepbookAdminCap.bcs, fromJSONField: (field: any) => DeepbookAdminCap.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => DeepbookAdminCap.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => DeepbookAdminCap.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => DeepbookAdminCap.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => DeepbookAdminCap.fetch( client, id, ), new: ( fields: DeepbookAdminCapFields, ) => { return new DeepbookAdminCap( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return DeepbookAdminCap.reified() }

 static phantom( ): PhantomReified<ToTypeStr<DeepbookAdminCap>> { return phantom(DeepbookAdminCap.reified( )); } static get p() { return DeepbookAdminCap.phantom() }

 static get bcs() { return bcs.struct("DeepbookAdminCap", {

 id: UID.bcs

}) };

 static fromFields( fields: Record<string, any> ): DeepbookAdminCap { return DeepbookAdminCap.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): DeepbookAdminCap { if (!isDeepbookAdminCap(item.type)) { throw new Error("not a DeepbookAdminCap type");

 }

 return DeepbookAdminCap.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id) } ) }

 static fromBcs( data: Uint8Array ): DeepbookAdminCap { return DeepbookAdminCap.fromFields( DeepbookAdminCap.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): DeepbookAdminCap { return DeepbookAdminCap.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id) } ) }

 static fromJSON( json: Record<string, any> ): DeepbookAdminCap { if (json.$typeName !== DeepbookAdminCap.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return DeepbookAdminCap.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): DeepbookAdminCap { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDeepbookAdminCap(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a DeepbookAdminCap object`); } return DeepbookAdminCap.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): DeepbookAdminCap { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isDeepbookAdminCap(data.bcs.type)) { throw new Error(`object at is not a DeepbookAdminCap object`); }

 return DeepbookAdminCap.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return DeepbookAdminCap.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<DeepbookAdminCap> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching DeepbookAdminCap object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDeepbookAdminCap(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a DeepbookAdminCap object`); }

 return DeepbookAdminCap.fromSuiObjectData( res.data ); }

 }

/* ============================== Registry =============================== */

export function isRegistry(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::registry::Registry`; }

export interface RegistryFields { id: ToField<UID>; inner: ToField<Versioned> }

export type RegistryReified = Reified< Registry, RegistryFields >;

export class Registry implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::registry::Registry`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Registry.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::registry::Registry`; readonly $typeArgs: []; readonly $isPhantom = Registry.$isPhantom;

 readonly id: ToField<UID>; readonly inner: ToField<Versioned>

 private constructor(typeArgs: [], fields: RegistryFields, ) { this.$fullTypeName = composeSuiType( Registry.$typeName, ...typeArgs ) as `${typeof PKG_V1}::registry::Registry`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.inner = fields.inner; }

 static reified( ): RegistryReified { return { typeName: Registry.$typeName, fullTypeName: composeSuiType( Registry.$typeName, ...[] ) as `${typeof PKG_V1}::registry::Registry`, typeArgs: [ ] as [], isPhantom: Registry.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Registry.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Registry.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Registry.fromBcs( data, ), bcs: Registry.bcs, fromJSONField: (field: any) => Registry.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Registry.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Registry.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Registry.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Registry.fetch( client, id, ), new: ( fields: RegistryFields, ) => { return new Registry( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Registry.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Registry>> { return phantom(Registry.reified( )); } static get p() { return Registry.phantom() }

 static get bcs() { return bcs.struct("Registry", {

 id: UID.bcs, inner: Versioned.bcs

}) };

 static fromFields( fields: Record<string, any> ): Registry { return Registry.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), inner: decodeFromFields(Versioned.reified(), fields.inner) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Registry { if (!isRegistry(item.type)) { throw new Error("not a Registry type");

 }

 return Registry.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), inner: decodeFromFieldsWithTypes(Versioned.reified(), item.fields.inner) } ) }

 static fromBcs( data: Uint8Array ): Registry { return Registry.fromFields( Registry.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,inner: this.inner.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Registry { return Registry.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), inner: decodeFromJSONField(Versioned.reified(), field.inner) } ) }

 static fromJSON( json: Record<string, any> ): Registry { if (json.$typeName !== Registry.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Registry.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Registry { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isRegistry(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Registry object`); } return Registry.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Registry { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isRegistry(data.bcs.type)) { throw new Error(`object at is not a Registry object`); }

 return Registry.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Registry.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Registry> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Registry object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isRegistry(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Registry object`); }

 return Registry.fromSuiObjectData( res.data ); }

 }

/* ============================== RegistryInner =============================== */

export function isRegistryInner(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::registry::RegistryInner`; }

export interface RegistryInnerFields { allowedVersions: ToField<VecSet<"u64">>; pools: ToField<Bag>; treasuryAddress: ToField<"address"> }

export type RegistryInnerReified = Reified< RegistryInner, RegistryInnerFields >;

export class RegistryInner implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::registry::RegistryInner`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = RegistryInner.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::registry::RegistryInner`; readonly $typeArgs: []; readonly $isPhantom = RegistryInner.$isPhantom;

 readonly allowedVersions: ToField<VecSet<"u64">>; readonly pools: ToField<Bag>; readonly treasuryAddress: ToField<"address">

 private constructor(typeArgs: [], fields: RegistryInnerFields, ) { this.$fullTypeName = composeSuiType( RegistryInner.$typeName, ...typeArgs ) as `${typeof PKG_V1}::registry::RegistryInner`; this.$typeArgs = typeArgs;

 this.allowedVersions = fields.allowedVersions;; this.pools = fields.pools;; this.treasuryAddress = fields.treasuryAddress; }

 static reified( ): RegistryInnerReified { return { typeName: RegistryInner.$typeName, fullTypeName: composeSuiType( RegistryInner.$typeName, ...[] ) as `${typeof PKG_V1}::registry::RegistryInner`, typeArgs: [ ] as [], isPhantom: RegistryInner.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => RegistryInner.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => RegistryInner.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => RegistryInner.fromBcs( data, ), bcs: RegistryInner.bcs, fromJSONField: (field: any) => RegistryInner.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => RegistryInner.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => RegistryInner.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => RegistryInner.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => RegistryInner.fetch( client, id, ), new: ( fields: RegistryInnerFields, ) => { return new RegistryInner( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return RegistryInner.reified() }

 static phantom( ): PhantomReified<ToTypeStr<RegistryInner>> { return phantom(RegistryInner.reified( )); } static get p() { return RegistryInner.phantom() }

 static get bcs() { return bcs.struct("RegistryInner", {

 allowed_versions: VecSet.bcs(bcs.u64()), pools: Bag.bcs, treasury_address: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields( fields: Record<string, any> ): RegistryInner { return RegistryInner.reified( ).new( { allowedVersions: decodeFromFields(VecSet.reified("u64"), fields.allowed_versions), pools: decodeFromFields(Bag.reified(), fields.pools), treasuryAddress: decodeFromFields("address", fields.treasury_address) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): RegistryInner { if (!isRegistryInner(item.type)) { throw new Error("not a RegistryInner type");

 }

 return RegistryInner.reified( ).new( { allowedVersions: decodeFromFieldsWithTypes(VecSet.reified("u64"), item.fields.allowed_versions), pools: decodeFromFieldsWithTypes(Bag.reified(), item.fields.pools), treasuryAddress: decodeFromFieldsWithTypes("address", item.fields.treasury_address) } ) }

 static fromBcs( data: Uint8Array ): RegistryInner { return RegistryInner.fromFields( RegistryInner.bcs.parse(data) ) }

 toJSONField() { return {

 allowedVersions: this.allowedVersions.toJSONField(),pools: this.pools.toJSONField(),treasuryAddress: this.treasuryAddress,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): RegistryInner { return RegistryInner.reified( ).new( { allowedVersions: decodeFromJSONField(VecSet.reified("u64"), field.allowedVersions), pools: decodeFromJSONField(Bag.reified(), field.pools), treasuryAddress: decodeFromJSONField("address", field.treasuryAddress) } ) }

 static fromJSON( json: Record<string, any> ): RegistryInner { if (json.$typeName !== RegistryInner.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return RegistryInner.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): RegistryInner { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isRegistryInner(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a RegistryInner object`); } return RegistryInner.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): RegistryInner { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isRegistryInner(data.bcs.type)) { throw new Error(`object at is not a RegistryInner object`); }

 return RegistryInner.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return RegistryInner.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<RegistryInner> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching RegistryInner object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isRegistryInner(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a RegistryInner object`); }

 return RegistryInner.fromSuiObjectData( res.data ); }

 }

/* ============================== PoolKey =============================== */

export function isPoolKey(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::registry::PoolKey`; }

export interface PoolKeyFields { base: ToField<TypeName>; quote: ToField<TypeName> }

export type PoolKeyReified = Reified< PoolKey, PoolKeyFields >;

export class PoolKey implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::registry::PoolKey`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = PoolKey.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::registry::PoolKey`; readonly $typeArgs: []; readonly $isPhantom = PoolKey.$isPhantom;

 readonly base: ToField<TypeName>; readonly quote: ToField<TypeName>

 private constructor(typeArgs: [], fields: PoolKeyFields, ) { this.$fullTypeName = composeSuiType( PoolKey.$typeName, ...typeArgs ) as `${typeof PKG_V1}::registry::PoolKey`; this.$typeArgs = typeArgs;

 this.base = fields.base;; this.quote = fields.quote; }

 static reified( ): PoolKeyReified { return { typeName: PoolKey.$typeName, fullTypeName: composeSuiType( PoolKey.$typeName, ...[] ) as `${typeof PKG_V1}::registry::PoolKey`, typeArgs: [ ] as [], isPhantom: PoolKey.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => PoolKey.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => PoolKey.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => PoolKey.fromBcs( data, ), bcs: PoolKey.bcs, fromJSONField: (field: any) => PoolKey.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => PoolKey.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => PoolKey.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => PoolKey.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => PoolKey.fetch( client, id, ), new: ( fields: PoolKeyFields, ) => { return new PoolKey( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return PoolKey.reified() }

 static phantom( ): PhantomReified<ToTypeStr<PoolKey>> { return phantom(PoolKey.reified( )); } static get p() { return PoolKey.phantom() }

 static get bcs() { return bcs.struct("PoolKey", {

 base: TypeName.bcs, quote: TypeName.bcs

}) };

 static fromFields( fields: Record<string, any> ): PoolKey { return PoolKey.reified( ).new( { base: decodeFromFields(TypeName.reified(), fields.base), quote: decodeFromFields(TypeName.reified(), fields.quote) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): PoolKey { if (!isPoolKey(item.type)) { throw new Error("not a PoolKey type");

 }

 return PoolKey.reified( ).new( { base: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.base), quote: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.quote) } ) }

 static fromBcs( data: Uint8Array ): PoolKey { return PoolKey.fromFields( PoolKey.bcs.parse(data) ) }

 toJSONField() { return {

 base: this.base.toJSONField(),quote: this.quote.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): PoolKey { return PoolKey.reified( ).new( { base: decodeFromJSONField(TypeName.reified(), field.base), quote: decodeFromJSONField(TypeName.reified(), field.quote) } ) }

 static fromJSON( json: Record<string, any> ): PoolKey { if (json.$typeName !== PoolKey.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return PoolKey.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): PoolKey { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPoolKey(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a PoolKey object`); } return PoolKey.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): PoolKey { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isPoolKey(data.bcs.type)) { throw new Error(`object at is not a PoolKey object`); }

 return PoolKey.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return PoolKey.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<PoolKey> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching PoolKey object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPoolKey(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a PoolKey object`); }

 return PoolKey.fromSuiObjectData( res.data ); }

 }
