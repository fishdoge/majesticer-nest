import {ID} from "../../_dependencies/onchain/0x2/object/structs";
import {VecSet} from "../../_dependencies/onchain/0x2/vec-set/structs";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, fieldToJSON, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {Option} from "../../std/option/structs";
import {Balances} from "../balances/structs";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== Account =============================== */

export function isAccount(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::account::Account`; }

export interface AccountFields { epoch: ToField<"u64">; openOrders: ToField<VecSet<"u128">>; takerVolume: ToField<"u128">; makerVolume: ToField<"u128">; activeStake: ToField<"u64">; inactiveStake: ToField<"u64">; createdProposal: ToField<"bool">; votedProposal: ToField<Option<ID>>; unclaimedRebates: ToField<Balances>; settledBalances: ToField<Balances>; owedBalances: ToField<Balances> }

export type AccountReified = Reified< Account, AccountFields >;

export class Account implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::account::Account`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Account.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::account::Account`; readonly $typeArgs: []; readonly $isPhantom = Account.$isPhantom;

 readonly epoch: ToField<"u64">; readonly openOrders: ToField<VecSet<"u128">>; readonly takerVolume: ToField<"u128">; readonly makerVolume: ToField<"u128">; readonly activeStake: ToField<"u64">; readonly inactiveStake: ToField<"u64">; readonly createdProposal: ToField<"bool">; readonly votedProposal: ToField<Option<ID>>; readonly unclaimedRebates: ToField<Balances>; readonly settledBalances: ToField<Balances>; readonly owedBalances: ToField<Balances>

 private constructor(typeArgs: [], fields: AccountFields, ) { this.$fullTypeName = composeSuiType( Account.$typeName, ...typeArgs ) as `${typeof PKG_V1}::account::Account`; this.$typeArgs = typeArgs;

 this.epoch = fields.epoch;; this.openOrders = fields.openOrders;; this.takerVolume = fields.takerVolume;; this.makerVolume = fields.makerVolume;; this.activeStake = fields.activeStake;; this.inactiveStake = fields.inactiveStake;; this.createdProposal = fields.createdProposal;; this.votedProposal = fields.votedProposal;; this.unclaimedRebates = fields.unclaimedRebates;; this.settledBalances = fields.settledBalances;; this.owedBalances = fields.owedBalances; }

 static reified( ): AccountReified { return { typeName: Account.$typeName, fullTypeName: composeSuiType( Account.$typeName, ...[] ) as `${typeof PKG_V1}::account::Account`, typeArgs: [ ] as [], isPhantom: Account.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Account.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Account.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Account.fromBcs( data, ), bcs: Account.bcs, fromJSONField: (field: any) => Account.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Account.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Account.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Account.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Account.fetch( client, id, ), new: ( fields: AccountFields, ) => { return new Account( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Account.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Account>> { return phantom(Account.reified( )); } static get p() { return Account.phantom() }

 static get bcs() { return bcs.struct("Account", {

 epoch: bcs.u64(), open_orders: VecSet.bcs(bcs.u128()), taker_volume: bcs.u128(), maker_volume: bcs.u128(), active_stake: bcs.u64(), inactive_stake: bcs.u64(), created_proposal: bcs.bool(), voted_proposal: Option.bcs(ID.bcs), unclaimed_rebates: Balances.bcs, settled_balances: Balances.bcs, owed_balances: Balances.bcs

}) };

 static fromFields( fields: Record<string, any> ): Account { return Account.reified( ).new( { epoch: decodeFromFields("u64", fields.epoch), openOrders: decodeFromFields(VecSet.reified("u128"), fields.open_orders), takerVolume: decodeFromFields("u128", fields.taker_volume), makerVolume: decodeFromFields("u128", fields.maker_volume), activeStake: decodeFromFields("u64", fields.active_stake), inactiveStake: decodeFromFields("u64", fields.inactive_stake), createdProposal: decodeFromFields("bool", fields.created_proposal), votedProposal: decodeFromFields(Option.reified(ID.reified()), fields.voted_proposal), unclaimedRebates: decodeFromFields(Balances.reified(), fields.unclaimed_rebates), settledBalances: decodeFromFields(Balances.reified(), fields.settled_balances), owedBalances: decodeFromFields(Balances.reified(), fields.owed_balances) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Account { if (!isAccount(item.type)) { throw new Error("not a Account type");

 }

 return Account.reified( ).new( { epoch: decodeFromFieldsWithTypes("u64", item.fields.epoch), openOrders: decodeFromFieldsWithTypes(VecSet.reified("u128"), item.fields.open_orders), takerVolume: decodeFromFieldsWithTypes("u128", item.fields.taker_volume), makerVolume: decodeFromFieldsWithTypes("u128", item.fields.maker_volume), activeStake: decodeFromFieldsWithTypes("u64", item.fields.active_stake), inactiveStake: decodeFromFieldsWithTypes("u64", item.fields.inactive_stake), createdProposal: decodeFromFieldsWithTypes("bool", item.fields.created_proposal), votedProposal: decodeFromFieldsWithTypes(Option.reified(ID.reified()), item.fields.voted_proposal), unclaimedRebates: decodeFromFieldsWithTypes(Balances.reified(), item.fields.unclaimed_rebates), settledBalances: decodeFromFieldsWithTypes(Balances.reified(), item.fields.settled_balances), owedBalances: decodeFromFieldsWithTypes(Balances.reified(), item.fields.owed_balances) } ) }

 static fromBcs( data: Uint8Array ): Account { return Account.fromFields( Account.bcs.parse(data) ) }

 toJSONField() { return {

 epoch: this.epoch.toString(),openOrders: this.openOrders.toJSONField(),takerVolume: this.takerVolume.toString(),makerVolume: this.makerVolume.toString(),activeStake: this.activeStake.toString(),inactiveStake: this.inactiveStake.toString(),createdProposal: this.createdProposal,votedProposal: fieldToJSON<Option<ID>>(`${Option.$typeName}<${ID.$typeName}>`, this.votedProposal),unclaimedRebates: this.unclaimedRebates.toJSONField(),settledBalances: this.settledBalances.toJSONField(),owedBalances: this.owedBalances.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Account { return Account.reified( ).new( { epoch: decodeFromJSONField("u64", field.epoch), openOrders: decodeFromJSONField(VecSet.reified("u128"), field.openOrders), takerVolume: decodeFromJSONField("u128", field.takerVolume), makerVolume: decodeFromJSONField("u128", field.makerVolume), activeStake: decodeFromJSONField("u64", field.activeStake), inactiveStake: decodeFromJSONField("u64", field.inactiveStake), createdProposal: decodeFromJSONField("bool", field.createdProposal), votedProposal: decodeFromJSONField(Option.reified(ID.reified()), field.votedProposal), unclaimedRebates: decodeFromJSONField(Balances.reified(), field.unclaimedRebates), settledBalances: decodeFromJSONField(Balances.reified(), field.settledBalances), owedBalances: decodeFromJSONField(Balances.reified(), field.owedBalances) } ) }

 static fromJSON( json: Record<string, any> ): Account { if (json.$typeName !== Account.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Account.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Account { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isAccount(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Account object`); } return Account.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Account { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isAccount(data.bcs.type)) { throw new Error(`object at is not a Account object`); }

 return Account.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Account.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Account> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Account object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isAccount(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Account object`); }

 return Account.fromSuiObjectData( res.data ); }

 }
