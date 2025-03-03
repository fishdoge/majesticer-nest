import {ID} from "../../_dependencies/onchain/0x2/object/structs";
import {VecMap} from "../../_dependencies/onchain/0x2/vec-map/structs";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {PKG_V1} from "../index";
import {TradeParams} from "../trade-params/structs";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== Proposal =============================== */

export function isProposal(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::governance::Proposal`; }

export interface ProposalFields { takerFee: ToField<"u64">; makerFee: ToField<"u64">; stakeRequired: ToField<"u64">; votes: ToField<"u64"> }

export type ProposalReified = Reified< Proposal, ProposalFields >;

export class Proposal implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::governance::Proposal`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Proposal.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::governance::Proposal`; readonly $typeArgs: []; readonly $isPhantom = Proposal.$isPhantom;

 readonly takerFee: ToField<"u64">; readonly makerFee: ToField<"u64">; readonly stakeRequired: ToField<"u64">; readonly votes: ToField<"u64">

 private constructor(typeArgs: [], fields: ProposalFields, ) { this.$fullTypeName = composeSuiType( Proposal.$typeName, ...typeArgs ) as `${typeof PKG_V1}::governance::Proposal`; this.$typeArgs = typeArgs;

 this.takerFee = fields.takerFee;; this.makerFee = fields.makerFee;; this.stakeRequired = fields.stakeRequired;; this.votes = fields.votes; }

 static reified( ): ProposalReified { return { typeName: Proposal.$typeName, fullTypeName: composeSuiType( Proposal.$typeName, ...[] ) as `${typeof PKG_V1}::governance::Proposal`, typeArgs: [ ] as [], isPhantom: Proposal.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Proposal.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Proposal.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Proposal.fromBcs( data, ), bcs: Proposal.bcs, fromJSONField: (field: any) => Proposal.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Proposal.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Proposal.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Proposal.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Proposal.fetch( client, id, ), new: ( fields: ProposalFields, ) => { return new Proposal( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Proposal.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Proposal>> { return phantom(Proposal.reified( )); } static get p() { return Proposal.phantom() }

 static get bcs() { return bcs.struct("Proposal", {

 taker_fee: bcs.u64(), maker_fee: bcs.u64(), stake_required: bcs.u64(), votes: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): Proposal { return Proposal.reified( ).new( { takerFee: decodeFromFields("u64", fields.taker_fee), makerFee: decodeFromFields("u64", fields.maker_fee), stakeRequired: decodeFromFields("u64", fields.stake_required), votes: decodeFromFields("u64", fields.votes) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Proposal { if (!isProposal(item.type)) { throw new Error("not a Proposal type");

 }

 return Proposal.reified( ).new( { takerFee: decodeFromFieldsWithTypes("u64", item.fields.taker_fee), makerFee: decodeFromFieldsWithTypes("u64", item.fields.maker_fee), stakeRequired: decodeFromFieldsWithTypes("u64", item.fields.stake_required), votes: decodeFromFieldsWithTypes("u64", item.fields.votes) } ) }

 static fromBcs( data: Uint8Array ): Proposal { return Proposal.fromFields( Proposal.bcs.parse(data) ) }

 toJSONField() { return {

 takerFee: this.takerFee.toString(),makerFee: this.makerFee.toString(),stakeRequired: this.stakeRequired.toString(),votes: this.votes.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Proposal { return Proposal.reified( ).new( { takerFee: decodeFromJSONField("u64", field.takerFee), makerFee: decodeFromJSONField("u64", field.makerFee), stakeRequired: decodeFromJSONField("u64", field.stakeRequired), votes: decodeFromJSONField("u64", field.votes) } ) }

 static fromJSON( json: Record<string, any> ): Proposal { if (json.$typeName !== Proposal.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Proposal.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Proposal { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isProposal(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Proposal object`); } return Proposal.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Proposal { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isProposal(data.bcs.type)) { throw new Error(`object at is not a Proposal object`); }

 return Proposal.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Proposal.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Proposal> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Proposal object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isProposal(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Proposal object`); }

 return Proposal.fromSuiObjectData( res.data ); }

 }

/* ============================== Governance =============================== */

export function isGovernance(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::governance::Governance`; }

export interface GovernanceFields { epoch: ToField<"u64">; whitelisted: ToField<"bool">; stable: ToField<"bool">; proposals: ToField<VecMap<ID, Proposal>>; tradeParams: ToField<TradeParams>; nextTradeParams: ToField<TradeParams>; votingPower: ToField<"u64">; quorum: ToField<"u64"> }

export type GovernanceReified = Reified< Governance, GovernanceFields >;

export class Governance implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::governance::Governance`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Governance.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::governance::Governance`; readonly $typeArgs: []; readonly $isPhantom = Governance.$isPhantom;

 readonly epoch: ToField<"u64">; readonly whitelisted: ToField<"bool">; readonly stable: ToField<"bool">; readonly proposals: ToField<VecMap<ID, Proposal>>; readonly tradeParams: ToField<TradeParams>; readonly nextTradeParams: ToField<TradeParams>; readonly votingPower: ToField<"u64">; readonly quorum: ToField<"u64">

 private constructor(typeArgs: [], fields: GovernanceFields, ) { this.$fullTypeName = composeSuiType( Governance.$typeName, ...typeArgs ) as `${typeof PKG_V1}::governance::Governance`; this.$typeArgs = typeArgs;

 this.epoch = fields.epoch;; this.whitelisted = fields.whitelisted;; this.stable = fields.stable;; this.proposals = fields.proposals;; this.tradeParams = fields.tradeParams;; this.nextTradeParams = fields.nextTradeParams;; this.votingPower = fields.votingPower;; this.quorum = fields.quorum; }

 static reified( ): GovernanceReified { return { typeName: Governance.$typeName, fullTypeName: composeSuiType( Governance.$typeName, ...[] ) as `${typeof PKG_V1}::governance::Governance`, typeArgs: [ ] as [], isPhantom: Governance.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Governance.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Governance.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Governance.fromBcs( data, ), bcs: Governance.bcs, fromJSONField: (field: any) => Governance.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Governance.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Governance.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Governance.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Governance.fetch( client, id, ), new: ( fields: GovernanceFields, ) => { return new Governance( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Governance.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Governance>> { return phantom(Governance.reified( )); } static get p() { return Governance.phantom() }

 static get bcs() { return bcs.struct("Governance", {

 epoch: bcs.u64(), whitelisted: bcs.bool(), stable: bcs.bool(), proposals: VecMap.bcs(ID.bcs, Proposal.bcs), trade_params: TradeParams.bcs, next_trade_params: TradeParams.bcs, voting_power: bcs.u64(), quorum: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): Governance { return Governance.reified( ).new( { epoch: decodeFromFields("u64", fields.epoch), whitelisted: decodeFromFields("bool", fields.whitelisted), stable: decodeFromFields("bool", fields.stable), proposals: decodeFromFields(VecMap.reified(ID.reified(), Proposal.reified()), fields.proposals), tradeParams: decodeFromFields(TradeParams.reified(), fields.trade_params), nextTradeParams: decodeFromFields(TradeParams.reified(), fields.next_trade_params), votingPower: decodeFromFields("u64", fields.voting_power), quorum: decodeFromFields("u64", fields.quorum) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Governance { if (!isGovernance(item.type)) { throw new Error("not a Governance type");

 }

 return Governance.reified( ).new( { epoch: decodeFromFieldsWithTypes("u64", item.fields.epoch), whitelisted: decodeFromFieldsWithTypes("bool", item.fields.whitelisted), stable: decodeFromFieldsWithTypes("bool", item.fields.stable), proposals: decodeFromFieldsWithTypes(VecMap.reified(ID.reified(), Proposal.reified()), item.fields.proposals), tradeParams: decodeFromFieldsWithTypes(TradeParams.reified(), item.fields.trade_params), nextTradeParams: decodeFromFieldsWithTypes(TradeParams.reified(), item.fields.next_trade_params), votingPower: decodeFromFieldsWithTypes("u64", item.fields.voting_power), quorum: decodeFromFieldsWithTypes("u64", item.fields.quorum) } ) }

 static fromBcs( data: Uint8Array ): Governance { return Governance.fromFields( Governance.bcs.parse(data) ) }

 toJSONField() { return {

 epoch: this.epoch.toString(),whitelisted: this.whitelisted,stable: this.stable,proposals: this.proposals.toJSONField(),tradeParams: this.tradeParams.toJSONField(),nextTradeParams: this.nextTradeParams.toJSONField(),votingPower: this.votingPower.toString(),quorum: this.quorum.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Governance { return Governance.reified( ).new( { epoch: decodeFromJSONField("u64", field.epoch), whitelisted: decodeFromJSONField("bool", field.whitelisted), stable: decodeFromJSONField("bool", field.stable), proposals: decodeFromJSONField(VecMap.reified(ID.reified(), Proposal.reified()), field.proposals), tradeParams: decodeFromJSONField(TradeParams.reified(), field.tradeParams), nextTradeParams: decodeFromJSONField(TradeParams.reified(), field.nextTradeParams), votingPower: decodeFromJSONField("u64", field.votingPower), quorum: decodeFromJSONField("u64", field.quorum) } ) }

 static fromJSON( json: Record<string, any> ): Governance { if (json.$typeName !== Governance.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Governance.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Governance { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isGovernance(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Governance object`); } return Governance.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Governance { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isGovernance(data.bcs.type)) { throw new Error(`object at is not a Governance object`); }

 return Governance.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Governance.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Governance> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Governance object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isGovernance(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Governance object`); }

 return Governance.fromSuiObjectData( res.data ); }

 }

/* ============================== TradeParamsUpdateEvent =============================== */

export function isTradeParamsUpdateEvent(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::governance::TradeParamsUpdateEvent`; }

export interface TradeParamsUpdateEventFields { takerFee: ToField<"u64">; makerFee: ToField<"u64">; stakeRequired: ToField<"u64"> }

export type TradeParamsUpdateEventReified = Reified< TradeParamsUpdateEvent, TradeParamsUpdateEventFields >;

export class TradeParamsUpdateEvent implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::governance::TradeParamsUpdateEvent`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = TradeParamsUpdateEvent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::governance::TradeParamsUpdateEvent`; readonly $typeArgs: []; readonly $isPhantom = TradeParamsUpdateEvent.$isPhantom;

 readonly takerFee: ToField<"u64">; readonly makerFee: ToField<"u64">; readonly stakeRequired: ToField<"u64">

 private constructor(typeArgs: [], fields: TradeParamsUpdateEventFields, ) { this.$fullTypeName = composeSuiType( TradeParamsUpdateEvent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::governance::TradeParamsUpdateEvent`; this.$typeArgs = typeArgs;

 this.takerFee = fields.takerFee;; this.makerFee = fields.makerFee;; this.stakeRequired = fields.stakeRequired; }

 static reified( ): TradeParamsUpdateEventReified { return { typeName: TradeParamsUpdateEvent.$typeName, fullTypeName: composeSuiType( TradeParamsUpdateEvent.$typeName, ...[] ) as `${typeof PKG_V1}::governance::TradeParamsUpdateEvent`, typeArgs: [ ] as [], isPhantom: TradeParamsUpdateEvent.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => TradeParamsUpdateEvent.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => TradeParamsUpdateEvent.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => TradeParamsUpdateEvent.fromBcs( data, ), bcs: TradeParamsUpdateEvent.bcs, fromJSONField: (field: any) => TradeParamsUpdateEvent.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => TradeParamsUpdateEvent.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => TradeParamsUpdateEvent.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => TradeParamsUpdateEvent.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => TradeParamsUpdateEvent.fetch( client, id, ), new: ( fields: TradeParamsUpdateEventFields, ) => { return new TradeParamsUpdateEvent( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return TradeParamsUpdateEvent.reified() }

 static phantom( ): PhantomReified<ToTypeStr<TradeParamsUpdateEvent>> { return phantom(TradeParamsUpdateEvent.reified( )); } static get p() { return TradeParamsUpdateEvent.phantom() }

 static get bcs() { return bcs.struct("TradeParamsUpdateEvent", {

 taker_fee: bcs.u64(), maker_fee: bcs.u64(), stake_required: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): TradeParamsUpdateEvent { return TradeParamsUpdateEvent.reified( ).new( { takerFee: decodeFromFields("u64", fields.taker_fee), makerFee: decodeFromFields("u64", fields.maker_fee), stakeRequired: decodeFromFields("u64", fields.stake_required) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): TradeParamsUpdateEvent { if (!isTradeParamsUpdateEvent(item.type)) { throw new Error("not a TradeParamsUpdateEvent type");

 }

 return TradeParamsUpdateEvent.reified( ).new( { takerFee: decodeFromFieldsWithTypes("u64", item.fields.taker_fee), makerFee: decodeFromFieldsWithTypes("u64", item.fields.maker_fee), stakeRequired: decodeFromFieldsWithTypes("u64", item.fields.stake_required) } ) }

 static fromBcs( data: Uint8Array ): TradeParamsUpdateEvent { return TradeParamsUpdateEvent.fromFields( TradeParamsUpdateEvent.bcs.parse(data) ) }

 toJSONField() { return {

 takerFee: this.takerFee.toString(),makerFee: this.makerFee.toString(),stakeRequired: this.stakeRequired.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): TradeParamsUpdateEvent { return TradeParamsUpdateEvent.reified( ).new( { takerFee: decodeFromJSONField("u64", field.takerFee), makerFee: decodeFromJSONField("u64", field.makerFee), stakeRequired: decodeFromJSONField("u64", field.stakeRequired) } ) }

 static fromJSON( json: Record<string, any> ): TradeParamsUpdateEvent { if (json.$typeName !== TradeParamsUpdateEvent.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return TradeParamsUpdateEvent.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): TradeParamsUpdateEvent { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isTradeParamsUpdateEvent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a TradeParamsUpdateEvent object`); } return TradeParamsUpdateEvent.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): TradeParamsUpdateEvent { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isTradeParamsUpdateEvent(data.bcs.type)) { throw new Error(`object at is not a TradeParamsUpdateEvent object`); }

 return TradeParamsUpdateEvent.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return TradeParamsUpdateEvent.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<TradeParamsUpdateEvent> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching TradeParamsUpdateEvent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isTradeParamsUpdateEvent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a TradeParamsUpdateEvent object`); }

 return TradeParamsUpdateEvent.fromSuiObjectData( res.data ); }

 }
