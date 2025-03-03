import * as reified from "../../_framework/reified";
import {ID} from "../../_dependencies/onchain/0x2/object/structs";
import {Table} from "../../_dependencies/onchain/0x2/table/structs";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, fieldToJSON, phantom, ToTypeStr as ToPhantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {Option} from "../../std/option/structs";
import {Account} from "../account/structs";
import {Governance} from "../governance/structs";
import {History} from "../history/structs";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== State =============================== */

export function isState(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::state::State`; }

export interface StateFields { accounts: ToField<Table<ToPhantom<ID>, ToPhantom<Account>>>; history: ToField<History>; governance: ToField<Governance> }

export type StateReified = Reified< State, StateFields >;

export class State implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::state::State`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = State.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::state::State`; readonly $typeArgs: []; readonly $isPhantom = State.$isPhantom;

 readonly accounts: ToField<Table<ToPhantom<ID>, ToPhantom<Account>>>; readonly history: ToField<History>; readonly governance: ToField<Governance>

 private constructor(typeArgs: [], fields: StateFields, ) { this.$fullTypeName = composeSuiType( State.$typeName, ...typeArgs ) as `${typeof PKG_V1}::state::State`; this.$typeArgs = typeArgs;

 this.accounts = fields.accounts;; this.history = fields.history;; this.governance = fields.governance; }

 static reified( ): StateReified { return { typeName: State.$typeName, fullTypeName: composeSuiType( State.$typeName, ...[] ) as `${typeof PKG_V1}::state::State`, typeArgs: [ ] as [], isPhantom: State.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => State.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => State.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => State.fromBcs( data, ), bcs: State.bcs, fromJSONField: (field: any) => State.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => State.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => State.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => State.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => State.fetch( client, id, ), new: ( fields: StateFields, ) => { return new State( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return State.reified() }

 static phantom( ): PhantomReified<ToTypeStr<State>> { return phantom(State.reified( )); } static get p() { return State.phantom() }

 static get bcs() { return bcs.struct("State", {

 accounts: Table.bcs, history: History.bcs, governance: Governance.bcs

}) };

 static fromFields( fields: Record<string, any> ): State { return State.reified( ).new( { accounts: decodeFromFields(Table.reified(reified.phantom(ID.reified()), reified.phantom(Account.reified())), fields.accounts), history: decodeFromFields(History.reified(), fields.history), governance: decodeFromFields(Governance.reified(), fields.governance) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): State { if (!isState(item.type)) { throw new Error("not a State type");

 }

 return State.reified( ).new( { accounts: decodeFromFieldsWithTypes(Table.reified(reified.phantom(ID.reified()), reified.phantom(Account.reified())), item.fields.accounts), history: decodeFromFieldsWithTypes(History.reified(), item.fields.history), governance: decodeFromFieldsWithTypes(Governance.reified(), item.fields.governance) } ) }

 static fromBcs( data: Uint8Array ): State { return State.fromFields( State.bcs.parse(data) ) }

 toJSONField() { return {

 accounts: this.accounts.toJSONField(),history: this.history.toJSONField(),governance: this.governance.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): State { return State.reified( ).new( { accounts: decodeFromJSONField(Table.reified(reified.phantom(ID.reified()), reified.phantom(Account.reified())), field.accounts), history: decodeFromJSONField(History.reified(), field.history), governance: decodeFromJSONField(Governance.reified(), field.governance) } ) }

 static fromJSON( json: Record<string, any> ): State { if (json.$typeName !== State.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return State.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): State { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isState(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a State object`); } return State.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): State { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isState(data.bcs.type)) { throw new Error(`object at is not a State object`); }

 return State.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return State.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<State> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching State object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isState(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a State object`); }

 return State.fromSuiObjectData( res.data ); }

 }

/* ============================== StakeEvent =============================== */

export function isStakeEvent(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::state::StakeEvent`; }

export interface StakeEventFields { poolId: ToField<ID>; balanceManagerId: ToField<ID>; epoch: ToField<"u64">; amount: ToField<"u64">; stake: ToField<"bool"> }

export type StakeEventReified = Reified< StakeEvent, StakeEventFields >;

export class StakeEvent implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::state::StakeEvent`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = StakeEvent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::state::StakeEvent`; readonly $typeArgs: []; readonly $isPhantom = StakeEvent.$isPhantom;

 readonly poolId: ToField<ID>; readonly balanceManagerId: ToField<ID>; readonly epoch: ToField<"u64">; readonly amount: ToField<"u64">; readonly stake: ToField<"bool">

 private constructor(typeArgs: [], fields: StakeEventFields, ) { this.$fullTypeName = composeSuiType( StakeEvent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::state::StakeEvent`; this.$typeArgs = typeArgs;

 this.poolId = fields.poolId;; this.balanceManagerId = fields.balanceManagerId;; this.epoch = fields.epoch;; this.amount = fields.amount;; this.stake = fields.stake; }

 static reified( ): StakeEventReified { return { typeName: StakeEvent.$typeName, fullTypeName: composeSuiType( StakeEvent.$typeName, ...[] ) as `${typeof PKG_V1}::state::StakeEvent`, typeArgs: [ ] as [], isPhantom: StakeEvent.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => StakeEvent.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => StakeEvent.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => StakeEvent.fromBcs( data, ), bcs: StakeEvent.bcs, fromJSONField: (field: any) => StakeEvent.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => StakeEvent.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => StakeEvent.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => StakeEvent.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => StakeEvent.fetch( client, id, ), new: ( fields: StakeEventFields, ) => { return new StakeEvent( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return StakeEvent.reified() }

 static phantom( ): PhantomReified<ToTypeStr<StakeEvent>> { return phantom(StakeEvent.reified( )); } static get p() { return StakeEvent.phantom() }

 static get bcs() { return bcs.struct("StakeEvent", {

 pool_id: ID.bcs, balance_manager_id: ID.bcs, epoch: bcs.u64(), amount: bcs.u64(), stake: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): StakeEvent { return StakeEvent.reified( ).new( { poolId: decodeFromFields(ID.reified(), fields.pool_id), balanceManagerId: decodeFromFields(ID.reified(), fields.balance_manager_id), epoch: decodeFromFields("u64", fields.epoch), amount: decodeFromFields("u64", fields.amount), stake: decodeFromFields("bool", fields.stake) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): StakeEvent { if (!isStakeEvent(item.type)) { throw new Error("not a StakeEvent type");

 }

 return StakeEvent.reified( ).new( { poolId: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool_id), balanceManagerId: decodeFromFieldsWithTypes(ID.reified(), item.fields.balance_manager_id), epoch: decodeFromFieldsWithTypes("u64", item.fields.epoch), amount: decodeFromFieldsWithTypes("u64", item.fields.amount), stake: decodeFromFieldsWithTypes("bool", item.fields.stake) } ) }

 static fromBcs( data: Uint8Array ): StakeEvent { return StakeEvent.fromFields( StakeEvent.bcs.parse(data) ) }

 toJSONField() { return {

 poolId: this.poolId,balanceManagerId: this.balanceManagerId,epoch: this.epoch.toString(),amount: this.amount.toString(),stake: this.stake,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): StakeEvent { return StakeEvent.reified( ).new( { poolId: decodeFromJSONField(ID.reified(), field.poolId), balanceManagerId: decodeFromJSONField(ID.reified(), field.balanceManagerId), epoch: decodeFromJSONField("u64", field.epoch), amount: decodeFromJSONField("u64", field.amount), stake: decodeFromJSONField("bool", field.stake) } ) }

 static fromJSON( json: Record<string, any> ): StakeEvent { if (json.$typeName !== StakeEvent.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return StakeEvent.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): StakeEvent { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isStakeEvent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a StakeEvent object`); } return StakeEvent.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): StakeEvent { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isStakeEvent(data.bcs.type)) { throw new Error(`object at is not a StakeEvent object`); }

 return StakeEvent.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return StakeEvent.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<StakeEvent> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching StakeEvent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isStakeEvent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a StakeEvent object`); }

 return StakeEvent.fromSuiObjectData( res.data ); }

 }

/* ============================== ProposalEvent =============================== */

export function isProposalEvent(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::state::ProposalEvent`; }

export interface ProposalEventFields { poolId: ToField<ID>; balanceManagerId: ToField<ID>; epoch: ToField<"u64">; takerFee: ToField<"u64">; makerFee: ToField<"u64">; stakeRequired: ToField<"u64"> }

export type ProposalEventReified = Reified< ProposalEvent, ProposalEventFields >;

export class ProposalEvent implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::state::ProposalEvent`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = ProposalEvent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::state::ProposalEvent`; readonly $typeArgs: []; readonly $isPhantom = ProposalEvent.$isPhantom;

 readonly poolId: ToField<ID>; readonly balanceManagerId: ToField<ID>; readonly epoch: ToField<"u64">; readonly takerFee: ToField<"u64">; readonly makerFee: ToField<"u64">; readonly stakeRequired: ToField<"u64">

 private constructor(typeArgs: [], fields: ProposalEventFields, ) { this.$fullTypeName = composeSuiType( ProposalEvent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::state::ProposalEvent`; this.$typeArgs = typeArgs;

 this.poolId = fields.poolId;; this.balanceManagerId = fields.balanceManagerId;; this.epoch = fields.epoch;; this.takerFee = fields.takerFee;; this.makerFee = fields.makerFee;; this.stakeRequired = fields.stakeRequired; }

 static reified( ): ProposalEventReified { return { typeName: ProposalEvent.$typeName, fullTypeName: composeSuiType( ProposalEvent.$typeName, ...[] ) as `${typeof PKG_V1}::state::ProposalEvent`, typeArgs: [ ] as [], isPhantom: ProposalEvent.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ProposalEvent.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ProposalEvent.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ProposalEvent.fromBcs( data, ), bcs: ProposalEvent.bcs, fromJSONField: (field: any) => ProposalEvent.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ProposalEvent.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ProposalEvent.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => ProposalEvent.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => ProposalEvent.fetch( client, id, ), new: ( fields: ProposalEventFields, ) => { return new ProposalEvent( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ProposalEvent.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ProposalEvent>> { return phantom(ProposalEvent.reified( )); } static get p() { return ProposalEvent.phantom() }

 static get bcs() { return bcs.struct("ProposalEvent", {

 pool_id: ID.bcs, balance_manager_id: ID.bcs, epoch: bcs.u64(), taker_fee: bcs.u64(), maker_fee: bcs.u64(), stake_required: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): ProposalEvent { return ProposalEvent.reified( ).new( { poolId: decodeFromFields(ID.reified(), fields.pool_id), balanceManagerId: decodeFromFields(ID.reified(), fields.balance_manager_id), epoch: decodeFromFields("u64", fields.epoch), takerFee: decodeFromFields("u64", fields.taker_fee), makerFee: decodeFromFields("u64", fields.maker_fee), stakeRequired: decodeFromFields("u64", fields.stake_required) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ProposalEvent { if (!isProposalEvent(item.type)) { throw new Error("not a ProposalEvent type");

 }

 return ProposalEvent.reified( ).new( { poolId: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool_id), balanceManagerId: decodeFromFieldsWithTypes(ID.reified(), item.fields.balance_manager_id), epoch: decodeFromFieldsWithTypes("u64", item.fields.epoch), takerFee: decodeFromFieldsWithTypes("u64", item.fields.taker_fee), makerFee: decodeFromFieldsWithTypes("u64", item.fields.maker_fee), stakeRequired: decodeFromFieldsWithTypes("u64", item.fields.stake_required) } ) }

 static fromBcs( data: Uint8Array ): ProposalEvent { return ProposalEvent.fromFields( ProposalEvent.bcs.parse(data) ) }

 toJSONField() { return {

 poolId: this.poolId,balanceManagerId: this.balanceManagerId,epoch: this.epoch.toString(),takerFee: this.takerFee.toString(),makerFee: this.makerFee.toString(),stakeRequired: this.stakeRequired.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ProposalEvent { return ProposalEvent.reified( ).new( { poolId: decodeFromJSONField(ID.reified(), field.poolId), balanceManagerId: decodeFromJSONField(ID.reified(), field.balanceManagerId), epoch: decodeFromJSONField("u64", field.epoch), takerFee: decodeFromJSONField("u64", field.takerFee), makerFee: decodeFromJSONField("u64", field.makerFee), stakeRequired: decodeFromJSONField("u64", field.stakeRequired) } ) }

 static fromJSON( json: Record<string, any> ): ProposalEvent { if (json.$typeName !== ProposalEvent.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ProposalEvent.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ProposalEvent { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isProposalEvent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ProposalEvent object`); } return ProposalEvent.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): ProposalEvent { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isProposalEvent(data.bcs.type)) { throw new Error(`object at is not a ProposalEvent object`); }

 return ProposalEvent.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return ProposalEvent.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<ProposalEvent> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ProposalEvent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isProposalEvent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ProposalEvent object`); }

 return ProposalEvent.fromSuiObjectData( res.data ); }

 }

/* ============================== VoteEvent =============================== */

export function isVoteEvent(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::state::VoteEvent`; }

export interface VoteEventFields { poolId: ToField<ID>; balanceManagerId: ToField<ID>; epoch: ToField<"u64">; fromProposalId: ToField<Option<ID>>; toProposalId: ToField<ID>; stake: ToField<"u64"> }

export type VoteEventReified = Reified< VoteEvent, VoteEventFields >;

export class VoteEvent implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::state::VoteEvent`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = VoteEvent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::state::VoteEvent`; readonly $typeArgs: []; readonly $isPhantom = VoteEvent.$isPhantom;

 readonly poolId: ToField<ID>; readonly balanceManagerId: ToField<ID>; readonly epoch: ToField<"u64">; readonly fromProposalId: ToField<Option<ID>>; readonly toProposalId: ToField<ID>; readonly stake: ToField<"u64">

 private constructor(typeArgs: [], fields: VoteEventFields, ) { this.$fullTypeName = composeSuiType( VoteEvent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::state::VoteEvent`; this.$typeArgs = typeArgs;

 this.poolId = fields.poolId;; this.balanceManagerId = fields.balanceManagerId;; this.epoch = fields.epoch;; this.fromProposalId = fields.fromProposalId;; this.toProposalId = fields.toProposalId;; this.stake = fields.stake; }

 static reified( ): VoteEventReified { return { typeName: VoteEvent.$typeName, fullTypeName: composeSuiType( VoteEvent.$typeName, ...[] ) as `${typeof PKG_V1}::state::VoteEvent`, typeArgs: [ ] as [], isPhantom: VoteEvent.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => VoteEvent.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => VoteEvent.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => VoteEvent.fromBcs( data, ), bcs: VoteEvent.bcs, fromJSONField: (field: any) => VoteEvent.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => VoteEvent.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => VoteEvent.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => VoteEvent.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => VoteEvent.fetch( client, id, ), new: ( fields: VoteEventFields, ) => { return new VoteEvent( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return VoteEvent.reified() }

 static phantom( ): PhantomReified<ToTypeStr<VoteEvent>> { return phantom(VoteEvent.reified( )); } static get p() { return VoteEvent.phantom() }

 static get bcs() { return bcs.struct("VoteEvent", {

 pool_id: ID.bcs, balance_manager_id: ID.bcs, epoch: bcs.u64(), from_proposal_id: Option.bcs(ID.bcs), to_proposal_id: ID.bcs, stake: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): VoteEvent { return VoteEvent.reified( ).new( { poolId: decodeFromFields(ID.reified(), fields.pool_id), balanceManagerId: decodeFromFields(ID.reified(), fields.balance_manager_id), epoch: decodeFromFields("u64", fields.epoch), fromProposalId: decodeFromFields(Option.reified(ID.reified()), fields.from_proposal_id), toProposalId: decodeFromFields(ID.reified(), fields.to_proposal_id), stake: decodeFromFields("u64", fields.stake) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): VoteEvent { if (!isVoteEvent(item.type)) { throw new Error("not a VoteEvent type");

 }

 return VoteEvent.reified( ).new( { poolId: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool_id), balanceManagerId: decodeFromFieldsWithTypes(ID.reified(), item.fields.balance_manager_id), epoch: decodeFromFieldsWithTypes("u64", item.fields.epoch), fromProposalId: decodeFromFieldsWithTypes(Option.reified(ID.reified()), item.fields.from_proposal_id), toProposalId: decodeFromFieldsWithTypes(ID.reified(), item.fields.to_proposal_id), stake: decodeFromFieldsWithTypes("u64", item.fields.stake) } ) }

 static fromBcs( data: Uint8Array ): VoteEvent { return VoteEvent.fromFields( VoteEvent.bcs.parse(data) ) }

 toJSONField() { return {

 poolId: this.poolId,balanceManagerId: this.balanceManagerId,epoch: this.epoch.toString(),fromProposalId: fieldToJSON<Option<ID>>(`${Option.$typeName}<${ID.$typeName}>`, this.fromProposalId),toProposalId: this.toProposalId,stake: this.stake.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): VoteEvent { return VoteEvent.reified( ).new( { poolId: decodeFromJSONField(ID.reified(), field.poolId), balanceManagerId: decodeFromJSONField(ID.reified(), field.balanceManagerId), epoch: decodeFromJSONField("u64", field.epoch), fromProposalId: decodeFromJSONField(Option.reified(ID.reified()), field.fromProposalId), toProposalId: decodeFromJSONField(ID.reified(), field.toProposalId), stake: decodeFromJSONField("u64", field.stake) } ) }

 static fromJSON( json: Record<string, any> ): VoteEvent { if (json.$typeName !== VoteEvent.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return VoteEvent.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): VoteEvent { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isVoteEvent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a VoteEvent object`); } return VoteEvent.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): VoteEvent { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isVoteEvent(data.bcs.type)) { throw new Error(`object at is not a VoteEvent object`); }

 return VoteEvent.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return VoteEvent.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<VoteEvent> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching VoteEvent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isVoteEvent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a VoteEvent object`); }

 return VoteEvent.fromSuiObjectData( res.data ); }

 }

/* ============================== RebateEvent =============================== */

export function isRebateEvent(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::state::RebateEvent`; }

export interface RebateEventFields { poolId: ToField<ID>; balanceManagerId: ToField<ID>; epoch: ToField<"u64">; claimAmount: ToField<"u64"> }

export type RebateEventReified = Reified< RebateEvent, RebateEventFields >;

export class RebateEvent implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::state::RebateEvent`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = RebateEvent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::state::RebateEvent`; readonly $typeArgs: []; readonly $isPhantom = RebateEvent.$isPhantom;

 readonly poolId: ToField<ID>; readonly balanceManagerId: ToField<ID>; readonly epoch: ToField<"u64">; readonly claimAmount: ToField<"u64">

 private constructor(typeArgs: [], fields: RebateEventFields, ) { this.$fullTypeName = composeSuiType( RebateEvent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::state::RebateEvent`; this.$typeArgs = typeArgs;

 this.poolId = fields.poolId;; this.balanceManagerId = fields.balanceManagerId;; this.epoch = fields.epoch;; this.claimAmount = fields.claimAmount; }

 static reified( ): RebateEventReified { return { typeName: RebateEvent.$typeName, fullTypeName: composeSuiType( RebateEvent.$typeName, ...[] ) as `${typeof PKG_V1}::state::RebateEvent`, typeArgs: [ ] as [], isPhantom: RebateEvent.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => RebateEvent.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => RebateEvent.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => RebateEvent.fromBcs( data, ), bcs: RebateEvent.bcs, fromJSONField: (field: any) => RebateEvent.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => RebateEvent.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => RebateEvent.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => RebateEvent.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => RebateEvent.fetch( client, id, ), new: ( fields: RebateEventFields, ) => { return new RebateEvent( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return RebateEvent.reified() }

 static phantom( ): PhantomReified<ToTypeStr<RebateEvent>> { return phantom(RebateEvent.reified( )); } static get p() { return RebateEvent.phantom() }

 static get bcs() { return bcs.struct("RebateEvent", {

 pool_id: ID.bcs, balance_manager_id: ID.bcs, epoch: bcs.u64(), claim_amount: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): RebateEvent { return RebateEvent.reified( ).new( { poolId: decodeFromFields(ID.reified(), fields.pool_id), balanceManagerId: decodeFromFields(ID.reified(), fields.balance_manager_id), epoch: decodeFromFields("u64", fields.epoch), claimAmount: decodeFromFields("u64", fields.claim_amount) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): RebateEvent { if (!isRebateEvent(item.type)) { throw new Error("not a RebateEvent type");

 }

 return RebateEvent.reified( ).new( { poolId: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool_id), balanceManagerId: decodeFromFieldsWithTypes(ID.reified(), item.fields.balance_manager_id), epoch: decodeFromFieldsWithTypes("u64", item.fields.epoch), claimAmount: decodeFromFieldsWithTypes("u64", item.fields.claim_amount) } ) }

 static fromBcs( data: Uint8Array ): RebateEvent { return RebateEvent.fromFields( RebateEvent.bcs.parse(data) ) }

 toJSONField() { return {

 poolId: this.poolId,balanceManagerId: this.balanceManagerId,epoch: this.epoch.toString(),claimAmount: this.claimAmount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): RebateEvent { return RebateEvent.reified( ).new( { poolId: decodeFromJSONField(ID.reified(), field.poolId), balanceManagerId: decodeFromJSONField(ID.reified(), field.balanceManagerId), epoch: decodeFromJSONField("u64", field.epoch), claimAmount: decodeFromJSONField("u64", field.claimAmount) } ) }

 static fromJSON( json: Record<string, any> ): RebateEvent { if (json.$typeName !== RebateEvent.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return RebateEvent.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): RebateEvent { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isRebateEvent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a RebateEvent object`); } return RebateEvent.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): RebateEvent { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isRebateEvent(data.bcs.type)) { throw new Error(`object at is not a RebateEvent object`); }

 return RebateEvent.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return RebateEvent.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<RebateEvent> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching RebateEvent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isRebateEvent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a RebateEvent object`); }

 return RebateEvent.fromSuiObjectData( res.data ); }

 }
