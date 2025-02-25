import * as reified from "../../_framework/reified";
import {Table} from "../../_dependencies/onchain/0x2/table/structs";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom, ToTypeStr as ToPhantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {Balances} from "../balances/structs";
import {PKG_V1} from "../index";
import {TradeParams} from "../trade-params/structs";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== Volumes =============================== */

export function isVolumes(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::history::Volumes`; }

export interface VolumesFields { totalVolume: ToField<"u128">; totalStakedVolume: ToField<"u128">; totalFeesCollected: ToField<Balances>; historicMedian: ToField<"u128">; tradeParams: ToField<TradeParams> }

export type VolumesReified = Reified< Volumes, VolumesFields >;

export class Volumes implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::history::Volumes`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Volumes.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::history::Volumes`; readonly $typeArgs: []; readonly $isPhantom = Volumes.$isPhantom;

 readonly totalVolume: ToField<"u128">; readonly totalStakedVolume: ToField<"u128">; readonly totalFeesCollected: ToField<Balances>; readonly historicMedian: ToField<"u128">; readonly tradeParams: ToField<TradeParams>

 private constructor(typeArgs: [], fields: VolumesFields, ) { this.$fullTypeName = composeSuiType( Volumes.$typeName, ...typeArgs ) as `${typeof PKG_V1}::history::Volumes`; this.$typeArgs = typeArgs;

 this.totalVolume = fields.totalVolume;; this.totalStakedVolume = fields.totalStakedVolume;; this.totalFeesCollected = fields.totalFeesCollected;; this.historicMedian = fields.historicMedian;; this.tradeParams = fields.tradeParams; }

 static reified( ): VolumesReified { return { typeName: Volumes.$typeName, fullTypeName: composeSuiType( Volumes.$typeName, ...[] ) as `${typeof PKG_V1}::history::Volumes`, typeArgs: [ ] as [], isPhantom: Volumes.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Volumes.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Volumes.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Volumes.fromBcs( data, ), bcs: Volumes.bcs, fromJSONField: (field: any) => Volumes.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Volumes.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Volumes.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Volumes.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Volumes.fetch( client, id, ), new: ( fields: VolumesFields, ) => { return new Volumes( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Volumes.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Volumes>> { return phantom(Volumes.reified( )); } static get p() { return Volumes.phantom() }

 static get bcs() { return bcs.struct("Volumes", {

 total_volume: bcs.u128(), total_staked_volume: bcs.u128(), total_fees_collected: Balances.bcs, historic_median: bcs.u128(), trade_params: TradeParams.bcs

}) };

 static fromFields( fields: Record<string, any> ): Volumes { return Volumes.reified( ).new( { totalVolume: decodeFromFields("u128", fields.total_volume), totalStakedVolume: decodeFromFields("u128", fields.total_staked_volume), totalFeesCollected: decodeFromFields(Balances.reified(), fields.total_fees_collected), historicMedian: decodeFromFields("u128", fields.historic_median), tradeParams: decodeFromFields(TradeParams.reified(), fields.trade_params) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Volumes { if (!isVolumes(item.type)) { throw new Error("not a Volumes type");

 }

 return Volumes.reified( ).new( { totalVolume: decodeFromFieldsWithTypes("u128", item.fields.total_volume), totalStakedVolume: decodeFromFieldsWithTypes("u128", item.fields.total_staked_volume), totalFeesCollected: decodeFromFieldsWithTypes(Balances.reified(), item.fields.total_fees_collected), historicMedian: decodeFromFieldsWithTypes("u128", item.fields.historic_median), tradeParams: decodeFromFieldsWithTypes(TradeParams.reified(), item.fields.trade_params) } ) }

 static fromBcs( data: Uint8Array ): Volumes { return Volumes.fromFields( Volumes.bcs.parse(data) ) }

 toJSONField() { return {

 totalVolume: this.totalVolume.toString(),totalStakedVolume: this.totalStakedVolume.toString(),totalFeesCollected: this.totalFeesCollected.toJSONField(),historicMedian: this.historicMedian.toString(),tradeParams: this.tradeParams.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Volumes { return Volumes.reified( ).new( { totalVolume: decodeFromJSONField("u128", field.totalVolume), totalStakedVolume: decodeFromJSONField("u128", field.totalStakedVolume), totalFeesCollected: decodeFromJSONField(Balances.reified(), field.totalFeesCollected), historicMedian: decodeFromJSONField("u128", field.historicMedian), tradeParams: decodeFromJSONField(TradeParams.reified(), field.tradeParams) } ) }

 static fromJSON( json: Record<string, any> ): Volumes { if (json.$typeName !== Volumes.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Volumes.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Volumes { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isVolumes(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Volumes object`); } return Volumes.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Volumes { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isVolumes(data.bcs.type)) { throw new Error(`object at is not a Volumes object`); }

 return Volumes.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Volumes.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Volumes> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Volumes object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isVolumes(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Volumes object`); }

 return Volumes.fromSuiObjectData( res.data ); }

 }

/* ============================== History =============================== */

export function isHistory(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::history::History`; }

export interface HistoryFields { epoch: ToField<"u64">; epochCreated: ToField<"u64">; volumes: ToField<Volumes>; historicVolumes: ToField<Table<"u64", ToPhantom<Volumes>>>; balanceToBurn: ToField<"u64"> }

export type HistoryReified = Reified< History, HistoryFields >;

export class History implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::history::History`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = History.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::history::History`; readonly $typeArgs: []; readonly $isPhantom = History.$isPhantom;

 readonly epoch: ToField<"u64">; readonly epochCreated: ToField<"u64">; readonly volumes: ToField<Volumes>; readonly historicVolumes: ToField<Table<"u64", ToPhantom<Volumes>>>; readonly balanceToBurn: ToField<"u64">

 private constructor(typeArgs: [], fields: HistoryFields, ) { this.$fullTypeName = composeSuiType( History.$typeName, ...typeArgs ) as `${typeof PKG_V1}::history::History`; this.$typeArgs = typeArgs;

 this.epoch = fields.epoch;; this.epochCreated = fields.epochCreated;; this.volumes = fields.volumes;; this.historicVolumes = fields.historicVolumes;; this.balanceToBurn = fields.balanceToBurn; }

 static reified( ): HistoryReified { return { typeName: History.$typeName, fullTypeName: composeSuiType( History.$typeName, ...[] ) as `${typeof PKG_V1}::history::History`, typeArgs: [ ] as [], isPhantom: History.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => History.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => History.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => History.fromBcs( data, ), bcs: History.bcs, fromJSONField: (field: any) => History.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => History.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => History.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => History.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => History.fetch( client, id, ), new: ( fields: HistoryFields, ) => { return new History( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return History.reified() }

 static phantom( ): PhantomReified<ToTypeStr<History>> { return phantom(History.reified( )); } static get p() { return History.phantom() }

 static get bcs() { return bcs.struct("History", {

 epoch: bcs.u64(), epoch_created: bcs.u64(), volumes: Volumes.bcs, historic_volumes: Table.bcs, balance_to_burn: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): History { return History.reified( ).new( { epoch: decodeFromFields("u64", fields.epoch), epochCreated: decodeFromFields("u64", fields.epoch_created), volumes: decodeFromFields(Volumes.reified(), fields.volumes), historicVolumes: decodeFromFields(Table.reified(reified.phantom("u64"), reified.phantom(Volumes.reified())), fields.historic_volumes), balanceToBurn: decodeFromFields("u64", fields.balance_to_burn) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): History { if (!isHistory(item.type)) { throw new Error("not a History type");

 }

 return History.reified( ).new( { epoch: decodeFromFieldsWithTypes("u64", item.fields.epoch), epochCreated: decodeFromFieldsWithTypes("u64", item.fields.epoch_created), volumes: decodeFromFieldsWithTypes(Volumes.reified(), item.fields.volumes), historicVolumes: decodeFromFieldsWithTypes(Table.reified(reified.phantom("u64"), reified.phantom(Volumes.reified())), item.fields.historic_volumes), balanceToBurn: decodeFromFieldsWithTypes("u64", item.fields.balance_to_burn) } ) }

 static fromBcs( data: Uint8Array ): History { return History.fromFields( History.bcs.parse(data) ) }

 toJSONField() { return {

 epoch: this.epoch.toString(),epochCreated: this.epochCreated.toString(),volumes: this.volumes.toJSONField(),historicVolumes: this.historicVolumes.toJSONField(),balanceToBurn: this.balanceToBurn.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): History { return History.reified( ).new( { epoch: decodeFromJSONField("u64", field.epoch), epochCreated: decodeFromJSONField("u64", field.epochCreated), volumes: decodeFromJSONField(Volumes.reified(), field.volumes), historicVolumes: decodeFromJSONField(Table.reified(reified.phantom("u64"), reified.phantom(Volumes.reified())), field.historicVolumes), balanceToBurn: decodeFromJSONField("u64", field.balanceToBurn) } ) }

 static fromJSON( json: Record<string, any> ): History { if (json.$typeName !== History.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return History.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): History { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHistory(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a History object`); } return History.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): History { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isHistory(data.bcs.type)) { throw new Error(`object at is not a History object`); }

 return History.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return History.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<History> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching History object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHistory(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a History object`); }

 return History.fromSuiObjectData( res.data ); }

 }
