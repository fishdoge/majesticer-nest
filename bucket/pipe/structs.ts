import {Balance} from "../../_dependencies/onchain/0x2/balance/structs";
import {UID} from "../../_dependencies/onchain/0x2/object/structs";
import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName} from "../../_framework/util";
import {PKG_V12} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== PipeType =============================== */

export function isPipeType(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V12}::pipe::PipeType` + '<'); }

export interface PipeTypeFields<T0 extends PhantomTypeArgument, T1 extends PhantomTypeArgument> { dummyField: ToField<"bool"> }

export type PipeTypeReified<T0 extends PhantomTypeArgument, T1 extends PhantomTypeArgument> = Reified< PipeType<T0, T1>, PipeTypeFields<T0, T1> >;

export class PipeType<T0 extends PhantomTypeArgument, T1 extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V12}::pipe::PipeType`; static readonly $numTypeParams = 2; static readonly $isPhantom = [true,true,] as const;

 readonly $typeName = PipeType.$typeName; readonly $fullTypeName: `${typeof PKG_V12}::pipe::PipeType<${PhantomToTypeStr<T0>}, ${PhantomToTypeStr<T1>}>`; readonly $typeArgs: [PhantomToTypeStr<T0>, PhantomToTypeStr<T1>]; readonly $isPhantom = PipeType.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [PhantomToTypeStr<T0>, PhantomToTypeStr<T1>], fields: PipeTypeFields<T0, T1>, ) { this.$fullTypeName = composeSuiType( PipeType.$typeName, ...typeArgs ) as `${typeof PKG_V12}::pipe::PipeType<${PhantomToTypeStr<T0>}, ${PhantomToTypeStr<T1>}>`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( T0: T0, T1: T1 ): PipeTypeReified<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { return { typeName: PipeType.$typeName, fullTypeName: composeSuiType( PipeType.$typeName, ...[extractType(T0), extractType(T1)] ) as `${typeof PKG_V12}::pipe::PipeType<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<T1>>}>`, typeArgs: [ extractType(T0), extractType(T1) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T0>>, PhantomToTypeStr<ToPhantomTypeArgument<T1>>], isPhantom: PipeType.$isPhantom, reifiedTypeArgs: [T0, T1], fromFields: (fields: Record<string, any>) => PipeType.fromFields( [T0, T1], fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => PipeType.fromFieldsWithTypes( [T0, T1], item, ), fromBcs: (data: Uint8Array) => PipeType.fromBcs( [T0, T1], data, ), bcs: PipeType.bcs, fromJSONField: (field: any) => PipeType.fromJSONField( [T0, T1], field, ), fromJSON: (json: Record<string, any>) => PipeType.fromJSON( [T0, T1], json, ), fromSuiParsedData: (content: SuiParsedData) => PipeType.fromSuiParsedData( [T0, T1], content, ), fromSuiObjectData: (content: SuiObjectData) => PipeType.fromSuiObjectData( [T0, T1], content, ), fetch: async (client: SuiClient, id: string) => PipeType.fetch( client, [T0, T1], id, ), new: ( fields: PipeTypeFields<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>>, ) => { return new PipeType( [extractType(T0), extractType(T1)], fields ) }, kind: "StructClassReified", } }

 static get r() { return PipeType.reified }

 static phantom<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( T0: T0, T1: T1 ): PhantomReified<ToTypeStr<PipeType<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>>>> { return phantom(PipeType.reified( T0, T1 )); } static get p() { return PipeType.phantom }

 static get bcs() { return bcs.struct("PipeType", {

 dummy_field: bcs.bool()

}) };

 static fromFields<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], fields: Record<string, any> ): PipeType<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { return PipeType.reified( typeArgs[0], typeArgs[1], ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], item: FieldsWithTypes ): PipeType<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { if (!isPipeType(item.type)) { throw new Error("not a PipeType type");

 } assertFieldsWithTypesArgsMatch(item, typeArgs);

 return PipeType.reified( typeArgs[0], typeArgs[1], ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], data: Uint8Array ): PipeType<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { return PipeType.fromFields( typeArgs, PipeType.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], field: any ): PipeType<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { return PipeType.reified( typeArgs[0], typeArgs[1], ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], json: Record<string, any> ): PipeType<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { if (json.$typeName !== PipeType.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(PipeType.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs, )

 return PipeType.fromJSONField( typeArgs, json, ) }

 static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], content: SuiParsedData ): PipeType<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPipeType(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a PipeType object`); } return PipeType.fromFieldsWithTypes( typeArgs, content ); }

 static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], data: SuiObjectData ): PipeType<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isPipeType(data.bcs.type)) { throw new Error(`object at is not a PipeType object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 2) { throw new Error(`type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 2; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

 return PipeType.fromBcs( typeArgs, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return PipeType.fromSuiParsedData( typeArgs, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArgs: [T0, T1], id: string ): Promise<PipeType<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching PipeType object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPipeType(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a PipeType object`); }

 return PipeType.fromSuiObjectData( typeArgs, res.data ); }

 }

/* ============================== Pipe =============================== */

export function isPipe(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V12}::pipe::Pipe` + '<'); }

export interface PipeFields<T0 extends PhantomTypeArgument, T1 extends PhantomTypeArgument> { id: ToField<UID>; outputVolume: ToField<"u64"> }

export type PipeReified<T0 extends PhantomTypeArgument, T1 extends PhantomTypeArgument> = Reified< Pipe<T0, T1>, PipeFields<T0, T1> >;

export class Pipe<T0 extends PhantomTypeArgument, T1 extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V12}::pipe::Pipe`; static readonly $numTypeParams = 2; static readonly $isPhantom = [true,true,] as const;

 readonly $typeName = Pipe.$typeName; readonly $fullTypeName: `${typeof PKG_V12}::pipe::Pipe<${PhantomToTypeStr<T0>}, ${PhantomToTypeStr<T1>}>`; readonly $typeArgs: [PhantomToTypeStr<T0>, PhantomToTypeStr<T1>]; readonly $isPhantom = Pipe.$isPhantom;

 readonly id: ToField<UID>; readonly outputVolume: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<T0>, PhantomToTypeStr<T1>], fields: PipeFields<T0, T1>, ) { this.$fullTypeName = composeSuiType( Pipe.$typeName, ...typeArgs ) as `${typeof PKG_V12}::pipe::Pipe<${PhantomToTypeStr<T0>}, ${PhantomToTypeStr<T1>}>`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.outputVolume = fields.outputVolume; }

 static reified<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( T0: T0, T1: T1 ): PipeReified<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { return { typeName: Pipe.$typeName, fullTypeName: composeSuiType( Pipe.$typeName, ...[extractType(T0), extractType(T1)] ) as `${typeof PKG_V12}::pipe::Pipe<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<T1>>}>`, typeArgs: [ extractType(T0), extractType(T1) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T0>>, PhantomToTypeStr<ToPhantomTypeArgument<T1>>], isPhantom: Pipe.$isPhantom, reifiedTypeArgs: [T0, T1], fromFields: (fields: Record<string, any>) => Pipe.fromFields( [T0, T1], fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Pipe.fromFieldsWithTypes( [T0, T1], item, ), fromBcs: (data: Uint8Array) => Pipe.fromBcs( [T0, T1], data, ), bcs: Pipe.bcs, fromJSONField: (field: any) => Pipe.fromJSONField( [T0, T1], field, ), fromJSON: (json: Record<string, any>) => Pipe.fromJSON( [T0, T1], json, ), fromSuiParsedData: (content: SuiParsedData) => Pipe.fromSuiParsedData( [T0, T1], content, ), fromSuiObjectData: (content: SuiObjectData) => Pipe.fromSuiObjectData( [T0, T1], content, ), fetch: async (client: SuiClient, id: string) => Pipe.fetch( client, [T0, T1], id, ), new: ( fields: PipeFields<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>>, ) => { return new Pipe( [extractType(T0), extractType(T1)], fields ) }, kind: "StructClassReified", } }

 static get r() { return Pipe.reified }

 static phantom<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( T0: T0, T1: T1 ): PhantomReified<ToTypeStr<Pipe<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>>>> { return phantom(Pipe.reified( T0, T1 )); } static get p() { return Pipe.phantom }

 static get bcs() { return bcs.struct("Pipe", {

 id: UID.bcs, output_volume: bcs.u64()

}) };

 static fromFields<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], fields: Record<string, any> ): Pipe<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { return Pipe.reified( typeArgs[0], typeArgs[1], ).new( { id: decodeFromFields(UID.reified(), fields.id), outputVolume: decodeFromFields("u64", fields.output_volume) } ) }

 static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], item: FieldsWithTypes ): Pipe<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { if (!isPipe(item.type)) { throw new Error("not a Pipe type");

 } assertFieldsWithTypesArgsMatch(item, typeArgs);

 return Pipe.reified( typeArgs[0], typeArgs[1], ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), outputVolume: decodeFromFieldsWithTypes("u64", item.fields.output_volume) } ) }

 static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], data: Uint8Array ): Pipe<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { return Pipe.fromFields( typeArgs, Pipe.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,outputVolume: this.outputVolume.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], field: any ): Pipe<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { return Pipe.reified( typeArgs[0], typeArgs[1], ).new( { id: decodeFromJSONField(UID.reified(), field.id), outputVolume: decodeFromJSONField("u64", field.outputVolume) } ) }

 static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], json: Record<string, any> ): Pipe<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { if (json.$typeName !== Pipe.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(Pipe.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs, )

 return Pipe.fromJSONField( typeArgs, json, ) }

 static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], content: SuiParsedData ): Pipe<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPipe(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Pipe object`); } return Pipe.fromFieldsWithTypes( typeArgs, content ); }

 static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], data: SuiObjectData ): Pipe<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isPipe(data.bcs.type)) { throw new Error(`object at is not a Pipe object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 2) { throw new Error(`type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 2; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

 return Pipe.fromBcs( typeArgs, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Pipe.fromSuiParsedData( typeArgs, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArgs: [T0, T1], id: string ): Promise<Pipe<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Pipe object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPipe(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Pipe object`); }

 return Pipe.fromSuiObjectData( typeArgs, res.data ); }

 }

/* ============================== OutputCarrier =============================== */

export function isOutputCarrier(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V12}::pipe::OutputCarrier` + '<'); }

export interface OutputCarrierFields<T0 extends PhantomTypeArgument, T1 extends PhantomTypeArgument> { content: ToField<Balance<T0>> }

export type OutputCarrierReified<T0 extends PhantomTypeArgument, T1 extends PhantomTypeArgument> = Reified< OutputCarrier<T0, T1>, OutputCarrierFields<T0, T1> >;

export class OutputCarrier<T0 extends PhantomTypeArgument, T1 extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V12}::pipe::OutputCarrier`; static readonly $numTypeParams = 2; static readonly $isPhantom = [true,true,] as const;

 readonly $typeName = OutputCarrier.$typeName; readonly $fullTypeName: `${typeof PKG_V12}::pipe::OutputCarrier<${PhantomToTypeStr<T0>}, ${PhantomToTypeStr<T1>}>`; readonly $typeArgs: [PhantomToTypeStr<T0>, PhantomToTypeStr<T1>]; readonly $isPhantom = OutputCarrier.$isPhantom;

 readonly content: ToField<Balance<T0>>

 private constructor(typeArgs: [PhantomToTypeStr<T0>, PhantomToTypeStr<T1>], fields: OutputCarrierFields<T0, T1>, ) { this.$fullTypeName = composeSuiType( OutputCarrier.$typeName, ...typeArgs ) as `${typeof PKG_V12}::pipe::OutputCarrier<${PhantomToTypeStr<T0>}, ${PhantomToTypeStr<T1>}>`; this.$typeArgs = typeArgs;

 this.content = fields.content; }

 static reified<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( T0: T0, T1: T1 ): OutputCarrierReified<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { return { typeName: OutputCarrier.$typeName, fullTypeName: composeSuiType( OutputCarrier.$typeName, ...[extractType(T0), extractType(T1)] ) as `${typeof PKG_V12}::pipe::OutputCarrier<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<T1>>}>`, typeArgs: [ extractType(T0), extractType(T1) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T0>>, PhantomToTypeStr<ToPhantomTypeArgument<T1>>], isPhantom: OutputCarrier.$isPhantom, reifiedTypeArgs: [T0, T1], fromFields: (fields: Record<string, any>) => OutputCarrier.fromFields( [T0, T1], fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => OutputCarrier.fromFieldsWithTypes( [T0, T1], item, ), fromBcs: (data: Uint8Array) => OutputCarrier.fromBcs( [T0, T1], data, ), bcs: OutputCarrier.bcs, fromJSONField: (field: any) => OutputCarrier.fromJSONField( [T0, T1], field, ), fromJSON: (json: Record<string, any>) => OutputCarrier.fromJSON( [T0, T1], json, ), fromSuiParsedData: (content: SuiParsedData) => OutputCarrier.fromSuiParsedData( [T0, T1], content, ), fromSuiObjectData: (content: SuiObjectData) => OutputCarrier.fromSuiObjectData( [T0, T1], content, ), fetch: async (client: SuiClient, id: string) => OutputCarrier.fetch( client, [T0, T1], id, ), new: ( fields: OutputCarrierFields<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>>, ) => { return new OutputCarrier( [extractType(T0), extractType(T1)], fields ) }, kind: "StructClassReified", } }

 static get r() { return OutputCarrier.reified }

 static phantom<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( T0: T0, T1: T1 ): PhantomReified<ToTypeStr<OutputCarrier<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>>>> { return phantom(OutputCarrier.reified( T0, T1 )); } static get p() { return OutputCarrier.phantom }

 static get bcs() { return bcs.struct("OutputCarrier", {

 content: Balance.bcs

}) };

 static fromFields<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], fields: Record<string, any> ): OutputCarrier<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { return OutputCarrier.reified( typeArgs[0], typeArgs[1], ).new( { content: decodeFromFields(Balance.reified(typeArgs[0]), fields.content) } ) }

 static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], item: FieldsWithTypes ): OutputCarrier<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { if (!isOutputCarrier(item.type)) { throw new Error("not a OutputCarrier type");

 } assertFieldsWithTypesArgsMatch(item, typeArgs);

 return OutputCarrier.reified( typeArgs[0], typeArgs[1], ).new( { content: decodeFromFieldsWithTypes(Balance.reified(typeArgs[0]), item.fields.content) } ) }

 static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], data: Uint8Array ): OutputCarrier<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { return OutputCarrier.fromFields( typeArgs, OutputCarrier.bcs.parse(data) ) }

 toJSONField() { return {

 content: this.content.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], field: any ): OutputCarrier<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { return OutputCarrier.reified( typeArgs[0], typeArgs[1], ).new( { content: decodeFromJSONField(Balance.reified(typeArgs[0]), field.content) } ) }

 static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], json: Record<string, any> ): OutputCarrier<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { if (json.$typeName !== OutputCarrier.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(OutputCarrier.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs, )

 return OutputCarrier.fromJSONField( typeArgs, json, ) }

 static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], content: SuiParsedData ): OutputCarrier<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isOutputCarrier(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a OutputCarrier object`); } return OutputCarrier.fromFieldsWithTypes( typeArgs, content ); }

 static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], data: SuiObjectData ): OutputCarrier<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isOutputCarrier(data.bcs.type)) { throw new Error(`object at is not a OutputCarrier object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 2) { throw new Error(`type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 2; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

 return OutputCarrier.fromBcs( typeArgs, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return OutputCarrier.fromSuiParsedData( typeArgs, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArgs: [T0, T1], id: string ): Promise<OutputCarrier<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching OutputCarrier object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isOutputCarrier(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a OutputCarrier object`); }

 return OutputCarrier.fromSuiObjectData( typeArgs, res.data ); }

 }

/* ============================== InputCarrier =============================== */

export function isInputCarrier(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V12}::pipe::InputCarrier` + '<'); }

export interface InputCarrierFields<T0 extends PhantomTypeArgument, T1 extends PhantomTypeArgument> { content: ToField<Balance<T0>> }

export type InputCarrierReified<T0 extends PhantomTypeArgument, T1 extends PhantomTypeArgument> = Reified< InputCarrier<T0, T1>, InputCarrierFields<T0, T1> >;

export class InputCarrier<T0 extends PhantomTypeArgument, T1 extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V12}::pipe::InputCarrier`; static readonly $numTypeParams = 2; static readonly $isPhantom = [true,true,] as const;

 readonly $typeName = InputCarrier.$typeName; readonly $fullTypeName: `${typeof PKG_V12}::pipe::InputCarrier<${PhantomToTypeStr<T0>}, ${PhantomToTypeStr<T1>}>`; readonly $typeArgs: [PhantomToTypeStr<T0>, PhantomToTypeStr<T1>]; readonly $isPhantom = InputCarrier.$isPhantom;

 readonly content: ToField<Balance<T0>>

 private constructor(typeArgs: [PhantomToTypeStr<T0>, PhantomToTypeStr<T1>], fields: InputCarrierFields<T0, T1>, ) { this.$fullTypeName = composeSuiType( InputCarrier.$typeName, ...typeArgs ) as `${typeof PKG_V12}::pipe::InputCarrier<${PhantomToTypeStr<T0>}, ${PhantomToTypeStr<T1>}>`; this.$typeArgs = typeArgs;

 this.content = fields.content; }

 static reified<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( T0: T0, T1: T1 ): InputCarrierReified<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { return { typeName: InputCarrier.$typeName, fullTypeName: composeSuiType( InputCarrier.$typeName, ...[extractType(T0), extractType(T1)] ) as `${typeof PKG_V12}::pipe::InputCarrier<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<T1>>}>`, typeArgs: [ extractType(T0), extractType(T1) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T0>>, PhantomToTypeStr<ToPhantomTypeArgument<T1>>], isPhantom: InputCarrier.$isPhantom, reifiedTypeArgs: [T0, T1], fromFields: (fields: Record<string, any>) => InputCarrier.fromFields( [T0, T1], fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => InputCarrier.fromFieldsWithTypes( [T0, T1], item, ), fromBcs: (data: Uint8Array) => InputCarrier.fromBcs( [T0, T1], data, ), bcs: InputCarrier.bcs, fromJSONField: (field: any) => InputCarrier.fromJSONField( [T0, T1], field, ), fromJSON: (json: Record<string, any>) => InputCarrier.fromJSON( [T0, T1], json, ), fromSuiParsedData: (content: SuiParsedData) => InputCarrier.fromSuiParsedData( [T0, T1], content, ), fromSuiObjectData: (content: SuiObjectData) => InputCarrier.fromSuiObjectData( [T0, T1], content, ), fetch: async (client: SuiClient, id: string) => InputCarrier.fetch( client, [T0, T1], id, ), new: ( fields: InputCarrierFields<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>>, ) => { return new InputCarrier( [extractType(T0), extractType(T1)], fields ) }, kind: "StructClassReified", } }

 static get r() { return InputCarrier.reified }

 static phantom<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( T0: T0, T1: T1 ): PhantomReified<ToTypeStr<InputCarrier<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>>>> { return phantom(InputCarrier.reified( T0, T1 )); } static get p() { return InputCarrier.phantom }

 static get bcs() { return bcs.struct("InputCarrier", {

 content: Balance.bcs

}) };

 static fromFields<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], fields: Record<string, any> ): InputCarrier<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { return InputCarrier.reified( typeArgs[0], typeArgs[1], ).new( { content: decodeFromFields(Balance.reified(typeArgs[0]), fields.content) } ) }

 static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], item: FieldsWithTypes ): InputCarrier<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { if (!isInputCarrier(item.type)) { throw new Error("not a InputCarrier type");

 } assertFieldsWithTypesArgsMatch(item, typeArgs);

 return InputCarrier.reified( typeArgs[0], typeArgs[1], ).new( { content: decodeFromFieldsWithTypes(Balance.reified(typeArgs[0]), item.fields.content) } ) }

 static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], data: Uint8Array ): InputCarrier<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { return InputCarrier.fromFields( typeArgs, InputCarrier.bcs.parse(data) ) }

 toJSONField() { return {

 content: this.content.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], field: any ): InputCarrier<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { return InputCarrier.reified( typeArgs[0], typeArgs[1], ).new( { content: decodeFromJSONField(Balance.reified(typeArgs[0]), field.content) } ) }

 static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], json: Record<string, any> ): InputCarrier<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { if (json.$typeName !== InputCarrier.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(InputCarrier.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs, )

 return InputCarrier.fromJSONField( typeArgs, json, ) }

 static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], content: SuiParsedData ): InputCarrier<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isInputCarrier(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a InputCarrier object`); } return InputCarrier.fromFieldsWithTypes( typeArgs, content ); }

 static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], data: SuiObjectData ): InputCarrier<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isInputCarrier(data.bcs.type)) { throw new Error(`object at is not a InputCarrier object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 2) { throw new Error(`type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 2; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

 return InputCarrier.fromBcs( typeArgs, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return InputCarrier.fromSuiParsedData( typeArgs, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArgs: [T0, T1], id: string ): Promise<InputCarrier<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching InputCarrier object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isInputCarrier(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a InputCarrier object`); }

 return InputCarrier.fromSuiObjectData( typeArgs, res.data ); }

 }
