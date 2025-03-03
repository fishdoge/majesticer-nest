import {Balance} from "../../_dependencies/onchain/0x2/balance/structs";
import {UID} from "../../_dependencies/onchain/0x2/object/structs";
import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName} from "../../_framework/util";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== VestingLock =============================== */

export function isVestingLock(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::vesting_lock::VestingLock` + '<'); }

export interface VestingLockFields<T0 extends PhantomTypeArgument> { id: ToField<UID>; vault: ToField<Balance<T0>>; startTime: ToField<"u64">; duration: ToField<"u64">; releasedAmount: ToField<"u64"> }

export type VestingLockReified<T0 extends PhantomTypeArgument> = Reified< VestingLock<T0>, VestingLockFields<T0> >;

export class VestingLock<T0 extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::vesting_lock::VestingLock`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = VestingLock.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::vesting_lock::VestingLock<${PhantomToTypeStr<T0>}>`; readonly $typeArgs: [PhantomToTypeStr<T0>]; readonly $isPhantom = VestingLock.$isPhantom;

 readonly id: ToField<UID>; readonly vault: ToField<Balance<T0>>; readonly startTime: ToField<"u64">; readonly duration: ToField<"u64">; readonly releasedAmount: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<T0>], fields: VestingLockFields<T0>, ) { this.$fullTypeName = composeSuiType( VestingLock.$typeName, ...typeArgs ) as `${typeof PKG_V1}::vesting_lock::VestingLock<${PhantomToTypeStr<T0>}>`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.vault = fields.vault;; this.startTime = fields.startTime;; this.duration = fields.duration;; this.releasedAmount = fields.releasedAmount; }

 static reified<T0 extends PhantomReified<PhantomTypeArgument>>( T0: T0 ): VestingLockReified<ToPhantomTypeArgument<T0>> { return { typeName: VestingLock.$typeName, fullTypeName: composeSuiType( VestingLock.$typeName, ...[extractType(T0)] ) as `${typeof PKG_V1}::vesting_lock::VestingLock<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`, typeArgs: [ extractType(T0) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T0>>], isPhantom: VestingLock.$isPhantom, reifiedTypeArgs: [T0], fromFields: (fields: Record<string, any>) => VestingLock.fromFields( T0, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => VestingLock.fromFieldsWithTypes( T0, item, ), fromBcs: (data: Uint8Array) => VestingLock.fromBcs( T0, data, ), bcs: VestingLock.bcs, fromJSONField: (field: any) => VestingLock.fromJSONField( T0, field, ), fromJSON: (json: Record<string, any>) => VestingLock.fromJSON( T0, json, ), fromSuiParsedData: (content: SuiParsedData) => VestingLock.fromSuiParsedData( T0, content, ), fromSuiObjectData: (content: SuiObjectData) => VestingLock.fromSuiObjectData( T0, content, ), fetch: async (client: SuiClient, id: string) => VestingLock.fetch( client, T0, id, ), new: ( fields: VestingLockFields<ToPhantomTypeArgument<T0>>, ) => { return new VestingLock( [extractType(T0)], fields ) }, kind: "StructClassReified", } }

 static get r() { return VestingLock.reified }

 static phantom<T0 extends PhantomReified<PhantomTypeArgument>>( T0: T0 ): PhantomReified<ToTypeStr<VestingLock<ToPhantomTypeArgument<T0>>>> { return phantom(VestingLock.reified( T0 )); } static get p() { return VestingLock.phantom }

 static get bcs() { return bcs.struct("VestingLock", {

 id: UID.bcs, vault: Balance.bcs, start_time: bcs.u64(), duration: bcs.u64(), released_amount: bcs.u64()

}) };

 static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, fields: Record<string, any> ): VestingLock<ToPhantomTypeArgument<T0>> { return VestingLock.reified( typeArg, ).new( { id: decodeFromFields(UID.reified(), fields.id), vault: decodeFromFields(Balance.reified(typeArg), fields.vault), startTime: decodeFromFields("u64", fields.start_time), duration: decodeFromFields("u64", fields.duration), releasedAmount: decodeFromFields("u64", fields.released_amount) } ) }

 static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, item: FieldsWithTypes ): VestingLock<ToPhantomTypeArgument<T0>> { if (!isVestingLock(item.type)) { throw new Error("not a VestingLock type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return VestingLock.reified( typeArg, ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), vault: decodeFromFieldsWithTypes(Balance.reified(typeArg), item.fields.vault), startTime: decodeFromFieldsWithTypes("u64", item.fields.start_time), duration: decodeFromFieldsWithTypes("u64", item.fields.duration), releasedAmount: decodeFromFieldsWithTypes("u64", item.fields.released_amount) } ) }

 static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, data: Uint8Array ): VestingLock<ToPhantomTypeArgument<T0>> { return VestingLock.fromFields( typeArg, VestingLock.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,vault: this.vault.toJSONField(),startTime: this.startTime.toString(),duration: this.duration.toString(),releasedAmount: this.releasedAmount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, field: any ): VestingLock<ToPhantomTypeArgument<T0>> { return VestingLock.reified( typeArg, ).new( { id: decodeFromJSONField(UID.reified(), field.id), vault: decodeFromJSONField(Balance.reified(typeArg), field.vault), startTime: decodeFromJSONField("u64", field.startTime), duration: decodeFromJSONField("u64", field.duration), releasedAmount: decodeFromJSONField("u64", field.releasedAmount) } ) }

 static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, json: Record<string, any> ): VestingLock<ToPhantomTypeArgument<T0>> { if (json.$typeName !== VestingLock.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(VestingLock.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return VestingLock.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, content: SuiParsedData ): VestingLock<ToPhantomTypeArgument<T0>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isVestingLock(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a VestingLock object`); } return VestingLock.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, data: SuiObjectData ): VestingLock<ToPhantomTypeArgument<T0>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isVestingLock(data.bcs.type)) { throw new Error(`object at is not a VestingLock object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return VestingLock.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return VestingLock.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: T0, id: string ): Promise<VestingLock<ToPhantomTypeArgument<T0>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching VestingLock object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isVestingLock(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a VestingLock object`); }

 return VestingLock.fromSuiObjectData( typeArg, res.data ); }

 }
