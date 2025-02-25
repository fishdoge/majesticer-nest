import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== Balances =============================== */

export function isBalances(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::balances::Balances`; }

export interface BalancesFields { base: ToField<"u64">; quote: ToField<"u64">; deep: ToField<"u64"> }

export type BalancesReified = Reified< Balances, BalancesFields >;

export class Balances implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::balances::Balances`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Balances.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::balances::Balances`; readonly $typeArgs: []; readonly $isPhantom = Balances.$isPhantom;

 readonly base: ToField<"u64">; readonly quote: ToField<"u64">; readonly deep: ToField<"u64">

 private constructor(typeArgs: [], fields: BalancesFields, ) { this.$fullTypeName = composeSuiType( Balances.$typeName, ...typeArgs ) as `${typeof PKG_V1}::balances::Balances`; this.$typeArgs = typeArgs;

 this.base = fields.base;; this.quote = fields.quote;; this.deep = fields.deep; }

 static reified( ): BalancesReified { return { typeName: Balances.$typeName, fullTypeName: composeSuiType( Balances.$typeName, ...[] ) as `${typeof PKG_V1}::balances::Balances`, typeArgs: [ ] as [], isPhantom: Balances.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Balances.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Balances.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Balances.fromBcs( data, ), bcs: Balances.bcs, fromJSONField: (field: any) => Balances.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Balances.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Balances.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Balances.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Balances.fetch( client, id, ), new: ( fields: BalancesFields, ) => { return new Balances( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Balances.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Balances>> { return phantom(Balances.reified( )); } static get p() { return Balances.phantom() }

 static get bcs() { return bcs.struct("Balances", {

 base: bcs.u64(), quote: bcs.u64(), deep: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): Balances { return Balances.reified( ).new( { base: decodeFromFields("u64", fields.base), quote: decodeFromFields("u64", fields.quote), deep: decodeFromFields("u64", fields.deep) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Balances { if (!isBalances(item.type)) { throw new Error("not a Balances type");

 }

 return Balances.reified( ).new( { base: decodeFromFieldsWithTypes("u64", item.fields.base), quote: decodeFromFieldsWithTypes("u64", item.fields.quote), deep: decodeFromFieldsWithTypes("u64", item.fields.deep) } ) }

 static fromBcs( data: Uint8Array ): Balances { return Balances.fromFields( Balances.bcs.parse(data) ) }

 toJSONField() { return {

 base: this.base.toString(),quote: this.quote.toString(),deep: this.deep.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Balances { return Balances.reified( ).new( { base: decodeFromJSONField("u64", field.base), quote: decodeFromJSONField("u64", field.quote), deep: decodeFromJSONField("u64", field.deep) } ) }

 static fromJSON( json: Record<string, any> ): Balances { if (json.$typeName !== Balances.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Balances.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Balances { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBalances(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Balances object`); } return Balances.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Balances { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBalances(data.bcs.type)) { throw new Error(`object at is not a Balances object`); }

 return Balances.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Balances.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Balances> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Balances object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBalances(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Balances object`); }

 return Balances.fromSuiObjectData( res.data ); }

 }
