import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName} from "../../_framework/util";
import {PKG_V12} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== Output =============================== */

export function isOutput(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V12}::pipe_events::Output` + '<'); }

export interface OutputFields<T0 extends PhantomTypeArgument, T1 extends PhantomTypeArgument> { volume: ToField<"u64"> }

export type OutputReified<T0 extends PhantomTypeArgument, T1 extends PhantomTypeArgument> = Reified< Output<T0, T1>, OutputFields<T0, T1> >;

export class Output<T0 extends PhantomTypeArgument, T1 extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V12}::pipe_events::Output`; static readonly $numTypeParams = 2; static readonly $isPhantom = [true,true,] as const;

 readonly $typeName = Output.$typeName; readonly $fullTypeName: `${typeof PKG_V12}::pipe_events::Output<${PhantomToTypeStr<T0>}, ${PhantomToTypeStr<T1>}>`; readonly $typeArgs: [PhantomToTypeStr<T0>, PhantomToTypeStr<T1>]; readonly $isPhantom = Output.$isPhantom;

 readonly volume: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<T0>, PhantomToTypeStr<T1>], fields: OutputFields<T0, T1>, ) { this.$fullTypeName = composeSuiType( Output.$typeName, ...typeArgs ) as `${typeof PKG_V12}::pipe_events::Output<${PhantomToTypeStr<T0>}, ${PhantomToTypeStr<T1>}>`; this.$typeArgs = typeArgs;

 this.volume = fields.volume; }

 static reified<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( T0: T0, T1: T1 ): OutputReified<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { return { typeName: Output.$typeName, fullTypeName: composeSuiType( Output.$typeName, ...[extractType(T0), extractType(T1)] ) as `${typeof PKG_V12}::pipe_events::Output<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<T1>>}>`, typeArgs: [ extractType(T0), extractType(T1) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T0>>, PhantomToTypeStr<ToPhantomTypeArgument<T1>>], isPhantom: Output.$isPhantom, reifiedTypeArgs: [T0, T1], fromFields: (fields: Record<string, any>) => Output.fromFields( [T0, T1], fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Output.fromFieldsWithTypes( [T0, T1], item, ), fromBcs: (data: Uint8Array) => Output.fromBcs( [T0, T1], data, ), bcs: Output.bcs, fromJSONField: (field: any) => Output.fromJSONField( [T0, T1], field, ), fromJSON: (json: Record<string, any>) => Output.fromJSON( [T0, T1], json, ), fromSuiParsedData: (content: SuiParsedData) => Output.fromSuiParsedData( [T0, T1], content, ), fromSuiObjectData: (content: SuiObjectData) => Output.fromSuiObjectData( [T0, T1], content, ), fetch: async (client: SuiClient, id: string) => Output.fetch( client, [T0, T1], id, ), new: ( fields: OutputFields<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>>, ) => { return new Output( [extractType(T0), extractType(T1)], fields ) }, kind: "StructClassReified", } }

 static get r() { return Output.reified }

 static phantom<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( T0: T0, T1: T1 ): PhantomReified<ToTypeStr<Output<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>>>> { return phantom(Output.reified( T0, T1 )); } static get p() { return Output.phantom }

 static get bcs() { return bcs.struct("Output", {

 volume: bcs.u64()

}) };

 static fromFields<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], fields: Record<string, any> ): Output<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { return Output.reified( typeArgs[0], typeArgs[1], ).new( { volume: decodeFromFields("u64", fields.volume) } ) }

 static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], item: FieldsWithTypes ): Output<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { if (!isOutput(item.type)) { throw new Error("not a Output type");

 } assertFieldsWithTypesArgsMatch(item, typeArgs);

 return Output.reified( typeArgs[0], typeArgs[1], ).new( { volume: decodeFromFieldsWithTypes("u64", item.fields.volume) } ) }

 static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], data: Uint8Array ): Output<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { return Output.fromFields( typeArgs, Output.bcs.parse(data) ) }

 toJSONField() { return {

 volume: this.volume.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], field: any ): Output<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { return Output.reified( typeArgs[0], typeArgs[1], ).new( { volume: decodeFromJSONField("u64", field.volume) } ) }

 static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], json: Record<string, any> ): Output<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { if (json.$typeName !== Output.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(Output.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs, )

 return Output.fromJSONField( typeArgs, json, ) }

 static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], content: SuiParsedData ): Output<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isOutput(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Output object`); } return Output.fromFieldsWithTypes( typeArgs, content ); }

 static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], data: SuiObjectData ): Output<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isOutput(data.bcs.type)) { throw new Error(`object at is not a Output object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 2) { throw new Error(`type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 2; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

 return Output.fromBcs( typeArgs, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Output.fromSuiParsedData( typeArgs, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArgs: [T0, T1], id: string ): Promise<Output<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Output object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isOutput(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Output object`); }

 return Output.fromSuiObjectData( typeArgs, res.data ); }

 }

/* ============================== Input =============================== */

export function isInput(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V12}::pipe_events::Input` + '<'); }

export interface InputFields<T0 extends PhantomTypeArgument, T1 extends PhantomTypeArgument> { volume: ToField<"u64"> }

export type InputReified<T0 extends PhantomTypeArgument, T1 extends PhantomTypeArgument> = Reified< Input<T0, T1>, InputFields<T0, T1> >;

export class Input<T0 extends PhantomTypeArgument, T1 extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V12}::pipe_events::Input`; static readonly $numTypeParams = 2; static readonly $isPhantom = [true,true,] as const;

 readonly $typeName = Input.$typeName; readonly $fullTypeName: `${typeof PKG_V12}::pipe_events::Input<${PhantomToTypeStr<T0>}, ${PhantomToTypeStr<T1>}>`; readonly $typeArgs: [PhantomToTypeStr<T0>, PhantomToTypeStr<T1>]; readonly $isPhantom = Input.$isPhantom;

 readonly volume: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<T0>, PhantomToTypeStr<T1>], fields: InputFields<T0, T1>, ) { this.$fullTypeName = composeSuiType( Input.$typeName, ...typeArgs ) as `${typeof PKG_V12}::pipe_events::Input<${PhantomToTypeStr<T0>}, ${PhantomToTypeStr<T1>}>`; this.$typeArgs = typeArgs;

 this.volume = fields.volume; }

 static reified<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( T0: T0, T1: T1 ): InputReified<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { return { typeName: Input.$typeName, fullTypeName: composeSuiType( Input.$typeName, ...[extractType(T0), extractType(T1)] ) as `${typeof PKG_V12}::pipe_events::Input<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<T1>>}>`, typeArgs: [ extractType(T0), extractType(T1) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T0>>, PhantomToTypeStr<ToPhantomTypeArgument<T1>>], isPhantom: Input.$isPhantom, reifiedTypeArgs: [T0, T1], fromFields: (fields: Record<string, any>) => Input.fromFields( [T0, T1], fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Input.fromFieldsWithTypes( [T0, T1], item, ), fromBcs: (data: Uint8Array) => Input.fromBcs( [T0, T1], data, ), bcs: Input.bcs, fromJSONField: (field: any) => Input.fromJSONField( [T0, T1], field, ), fromJSON: (json: Record<string, any>) => Input.fromJSON( [T0, T1], json, ), fromSuiParsedData: (content: SuiParsedData) => Input.fromSuiParsedData( [T0, T1], content, ), fromSuiObjectData: (content: SuiObjectData) => Input.fromSuiObjectData( [T0, T1], content, ), fetch: async (client: SuiClient, id: string) => Input.fetch( client, [T0, T1], id, ), new: ( fields: InputFields<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>>, ) => { return new Input( [extractType(T0), extractType(T1)], fields ) }, kind: "StructClassReified", } }

 static get r() { return Input.reified }

 static phantom<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( T0: T0, T1: T1 ): PhantomReified<ToTypeStr<Input<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>>>> { return phantom(Input.reified( T0, T1 )); } static get p() { return Input.phantom }

 static get bcs() { return bcs.struct("Input", {

 volume: bcs.u64()

}) };

 static fromFields<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], fields: Record<string, any> ): Input<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { return Input.reified( typeArgs[0], typeArgs[1], ).new( { volume: decodeFromFields("u64", fields.volume) } ) }

 static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], item: FieldsWithTypes ): Input<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { if (!isInput(item.type)) { throw new Error("not a Input type");

 } assertFieldsWithTypesArgsMatch(item, typeArgs);

 return Input.reified( typeArgs[0], typeArgs[1], ).new( { volume: decodeFromFieldsWithTypes("u64", item.fields.volume) } ) }

 static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], data: Uint8Array ): Input<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { return Input.fromFields( typeArgs, Input.bcs.parse(data) ) }

 toJSONField() { return {

 volume: this.volume.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], field: any ): Input<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { return Input.reified( typeArgs[0], typeArgs[1], ).new( { volume: decodeFromJSONField("u64", field.volume) } ) }

 static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], json: Record<string, any> ): Input<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { if (json.$typeName !== Input.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(Input.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs, )

 return Input.fromJSONField( typeArgs, json, ) }

 static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], content: SuiParsedData ): Input<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isInput(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Input object`); } return Input.fromFieldsWithTypes( typeArgs, content ); }

 static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( typeArgs: [T0, T1], data: SuiObjectData ): Input<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isInput(data.bcs.type)) { throw new Error(`object at is not a Input object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 2) { throw new Error(`type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 2; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

 return Input.fromBcs( typeArgs, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Input.fromSuiParsedData( typeArgs, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T0 extends PhantomReified<PhantomTypeArgument>, T1 extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArgs: [T0, T1], id: string ): Promise<Input<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Input object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isInput(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Input object`); }

 return Input.fromSuiObjectData( typeArgs, res.data ); }

 }
