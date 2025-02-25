import * as reified from "../../../../_framework/reified";
import {PhantomReified, Reified, StructClass, ToField, ToTypeArgument, ToTypeStr, TypeArgument, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, fieldToJSON, phantom, toBcs, ToTypeStr as ToPhantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName} from "../../../../_framework/util";
import {Vector} from "../../../../_framework/vector";
import {Table} from "../../0x2/table/structs";
import {PKG_V1} from "../index";
import {BcsType, bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== Unit =============================== */

export function isUnit(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::set::Unit`; }

export interface UnitFields { dummyField: ToField<"bool"> }

export type UnitReified = Reified< Unit, UnitFields >;

export class Unit implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::set::Unit`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Unit.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::set::Unit`; readonly $typeArgs: []; readonly $isPhantom = Unit.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: UnitFields, ) { this.$fullTypeName = composeSuiType( Unit.$typeName, ...typeArgs ) as `${typeof PKG_V1}::set::Unit`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): UnitReified { return { typeName: Unit.$typeName, fullTypeName: composeSuiType( Unit.$typeName, ...[] ) as `${typeof PKG_V1}::set::Unit`, typeArgs: [ ] as [], isPhantom: Unit.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Unit.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Unit.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Unit.fromBcs( data, ), bcs: Unit.bcs, fromJSONField: (field: any) => Unit.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Unit.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Unit.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Unit.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Unit.fetch( client, id, ), new: ( fields: UnitFields, ) => { return new Unit( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Unit.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Unit>> { return phantom(Unit.reified( )); } static get p() { return Unit.phantom() }

 static get bcs() { return bcs.struct("Unit", {

 dummy_field: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): Unit { return Unit.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Unit { if (!isUnit(item.type)) { throw new Error("not a Unit type");

 }

 return Unit.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs( data: Uint8Array ): Unit { return Unit.fromFields( Unit.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Unit { return Unit.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): Unit { if (json.$typeName !== Unit.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Unit.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Unit { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUnit(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Unit object`); } return Unit.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Unit { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isUnit(data.bcs.type)) { throw new Error(`object at is not a Unit object`); }

 return Unit.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Unit.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Unit> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Unit object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUnit(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Unit object`); }

 return Unit.fromSuiObjectData( res.data ); }

 }

/* ============================== Set =============================== */

export function isSet(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::set::Set` + '<'); }

export interface SetFields<T0 extends TypeArgument> { keys: ToField<Vector<T0>>; elems: ToField<Table<ToPhantom<T0>, ToPhantom<Unit>>> }

export type SetReified<T0 extends TypeArgument> = Reified< Set<T0>, SetFields<T0> >;

export class Set<T0 extends TypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::set::Set`; static readonly $numTypeParams = 1; static readonly $isPhantom = [false,] as const;

 readonly $typeName = Set.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::set::Set<${ToTypeStr<T0>}>`; readonly $typeArgs: [ToTypeStr<T0>]; readonly $isPhantom = Set.$isPhantom;

 readonly keys: ToField<Vector<T0>>; readonly elems: ToField<Table<ToPhantom<T0>, ToPhantom<Unit>>>

 private constructor(typeArgs: [ToTypeStr<T0>], fields: SetFields<T0>, ) { this.$fullTypeName = composeSuiType( Set.$typeName, ...typeArgs ) as `${typeof PKG_V1}::set::Set<${ToTypeStr<T0>}>`; this.$typeArgs = typeArgs;

 this.keys = fields.keys;; this.elems = fields.elems; }

 static reified<T0 extends Reified<TypeArgument, any>>( T0: T0 ): SetReified<ToTypeArgument<T0>> { return { typeName: Set.$typeName, fullTypeName: composeSuiType( Set.$typeName, ...[extractType(T0)] ) as `${typeof PKG_V1}::set::Set<${ToTypeStr<ToTypeArgument<T0>>}>`, typeArgs: [ extractType(T0) ] as [ToTypeStr<ToTypeArgument<T0>>], isPhantom: Set.$isPhantom, reifiedTypeArgs: [T0], fromFields: (fields: Record<string, any>) => Set.fromFields( T0, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Set.fromFieldsWithTypes( T0, item, ), fromBcs: (data: Uint8Array) => Set.fromBcs( T0, data, ), bcs: Set.bcs(toBcs(T0)), fromJSONField: (field: any) => Set.fromJSONField( T0, field, ), fromJSON: (json: Record<string, any>) => Set.fromJSON( T0, json, ), fromSuiParsedData: (content: SuiParsedData) => Set.fromSuiParsedData( T0, content, ), fromSuiObjectData: (content: SuiObjectData) => Set.fromSuiObjectData( T0, content, ), fetch: async (client: SuiClient, id: string) => Set.fetch( client, T0, id, ), new: ( fields: SetFields<ToTypeArgument<T0>>, ) => { return new Set( [extractType(T0)], fields ) }, kind: "StructClassReified", } }

 static get r() { return Set.reified }

 static phantom<T0 extends Reified<TypeArgument, any>>( T0: T0 ): PhantomReified<ToTypeStr<Set<ToTypeArgument<T0>>>> { return phantom(Set.reified( T0 )); } static get p() { return Set.phantom }

 static get bcs() { return <T0 extends BcsType<any>>(T0: T0) => bcs.struct(`Set<${T0.name}>`, {

 keys: bcs.vector(T0), elems: Table.bcs

}) };

 static fromFields<T0 extends Reified<TypeArgument, any>>( typeArg: T0, fields: Record<string, any> ): Set<ToTypeArgument<T0>> { return Set.reified( typeArg, ).new( { keys: decodeFromFields(reified.vector(typeArg), fields.keys), elems: decodeFromFields(Table.reified(reified.phantom(typeArg), reified.phantom(Unit.reified())), fields.elems) } ) }

 static fromFieldsWithTypes<T0 extends Reified<TypeArgument, any>>( typeArg: T0, item: FieldsWithTypes ): Set<ToTypeArgument<T0>> { if (!isSet(item.type)) { throw new Error("not a Set type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return Set.reified( typeArg, ).new( { keys: decodeFromFieldsWithTypes(reified.vector(typeArg), item.fields.keys), elems: decodeFromFieldsWithTypes(Table.reified(reified.phantom(typeArg), reified.phantom(Unit.reified())), item.fields.elems) } ) }

 static fromBcs<T0 extends Reified<TypeArgument, any>>( typeArg: T0, data: Uint8Array ): Set<ToTypeArgument<T0>> { const typeArgs = [typeArg];

 return Set.fromFields( typeArg, Set.bcs( toBcs(typeArgs[0]) ).parse(data) ) }

 toJSONField() { return {

 keys: fieldToJSON<Vector<T0>>(`vector<${this.$typeArgs[0]}>`, this.keys),elems: this.elems.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T0 extends Reified<TypeArgument, any>>( typeArg: T0, field: any ): Set<ToTypeArgument<T0>> { return Set.reified( typeArg, ).new( { keys: decodeFromJSONField(reified.vector(typeArg), field.keys), elems: decodeFromJSONField(Table.reified(reified.phantom(typeArg), reified.phantom(Unit.reified())), field.elems) } ) }

 static fromJSON<T0 extends Reified<TypeArgument, any>>( typeArg: T0, json: Record<string, any> ): Set<ToTypeArgument<T0>> { if (json.$typeName !== Set.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(Set.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return Set.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<T0 extends Reified<TypeArgument, any>>( typeArg: T0, content: SuiParsedData ): Set<ToTypeArgument<T0>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isSet(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Set object`); } return Set.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<T0 extends Reified<TypeArgument, any>>( typeArg: T0, data: SuiObjectData ): Set<ToTypeArgument<T0>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isSet(data.bcs.type)) { throw new Error(`object at is not a Set object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return Set.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Set.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T0 extends Reified<TypeArgument, any>>( client: SuiClient, typeArg: T0, id: string ): Promise<Set<ToTypeArgument<T0>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Set object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isSet(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Set object`); }

 return Set.fromSuiObjectData( typeArg, res.data ); }

 }
