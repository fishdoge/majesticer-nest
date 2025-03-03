import {PUBLISHED_AT} from "..";
import {ID} from "../../_dependencies/onchain/0x2/object/structs";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function getOrderDeepPrice( tx: Transaction, typeArgs: [string, string], pool: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::get_order_deep_price`, typeArguments: typeArgs, arguments: [ obj(tx, pool) ], }) }

export function loadInnerMut( tx: Transaction, typeArgs: [string, string], pool: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::load_inner_mut`, typeArguments: typeArgs, arguments: [ obj(tx, pool) ], }) }

export function loadInner( tx: Transaction, typeArgs: [string, string], pool: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::load_inner`, typeArguments: typeArgs, arguments: [ obj(tx, pool) ], }) }

export interface AccountArgs { pool: TransactionObjectInput; balanceManager: TransactionObjectInput }

export function account( tx: Transaction, typeArgs: [string, string], args: AccountArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::account`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.balanceManager) ], }) }

export interface ClaimRebatesArgs { pool: TransactionObjectInput; balanceManager: TransactionObjectInput; tradeProof: TransactionObjectInput }

export function claimRebates( tx: Transaction, typeArgs: [string, string], args: ClaimRebatesArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::claim_rebates`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.balanceManager), obj(tx, args.tradeProof) ], }) }

export function setWhitelist( tx: Transaction, typeArgs: [string, string], poolInner: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::set_whitelist`, typeArguments: typeArgs, arguments: [ obj(tx, poolInner) ], }) }

export function whitelisted( tx: Transaction, typeArgs: [string, string], pool: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::whitelisted`, typeArguments: typeArgs, arguments: [ obj(tx, pool) ], }) }

export interface LockedBalanceArgs { pool: TransactionObjectInput; balanceManager: TransactionObjectInput }

export function lockedBalance( tx: Transaction, typeArgs: [string, string], args: LockedBalanceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::locked_balance`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.balanceManager) ], }) }

export function bids( tx: Transaction, typeArgs: [string, string], poolInner: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::bids`, typeArguments: typeArgs, arguments: [ obj(tx, poolInner) ], }) }

export function asks( tx: Transaction, typeArgs: [string, string], poolInner: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::asks`, typeArguments: typeArgs, arguments: [ obj(tx, poolInner) ], }) }

export interface GetQuantityOutArgs { pool: TransactionObjectInput; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument; clock: TransactionObjectInput }

export function getQuantityOut( tx: Transaction, typeArgs: [string, string], args: GetQuantityOutArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::get_quantity_out`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`), obj(tx, args.clock) ], }) }

export interface CancelOrderArgs { pool: TransactionObjectInput; balanceManager: TransactionObjectInput; tradeProof: TransactionObjectInput; u128: bigint | TransactionArgument; clock: TransactionObjectInput }

export function cancelOrder( tx: Transaction, typeArgs: [string, string], args: CancelOrderArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::cancel_order`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.balanceManager), obj(tx, args.tradeProof), pure(tx, args.u128, `u128`), obj(tx, args.clock) ], }) }

export interface ModifyOrderArgs { pool: TransactionObjectInput; balanceManager: TransactionObjectInput; tradeProof: TransactionObjectInput; u128: bigint | TransactionArgument; u64: bigint | TransactionArgument; clock: TransactionObjectInput }

export function modifyOrder( tx: Transaction, typeArgs: [string, string], args: ModifyOrderArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::modify_order`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.balanceManager), obj(tx, args.tradeProof), pure(tx, args.u128, `u128`), pure(tx, args.u64, `u64`), obj(tx, args.clock) ], }) }

export interface MidPriceArgs { pool: TransactionObjectInput; clock: TransactionObjectInput }

export function midPrice( tx: Transaction, typeArgs: [string, string], args: MidPriceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::mid_price`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.clock) ], }) }

export interface GetOrderArgs { pool: TransactionObjectInput; u128: bigint | TransactionArgument }

export function getOrder( tx: Transaction, typeArgs: [string, string], args: GetOrderArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::get_order`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), pure(tx, args.u128, `u128`) ], }) }

export interface WithdrawSettledAmountsArgs { pool: TransactionObjectInput; balanceManager: TransactionObjectInput; tradeProof: TransactionObjectInput }

export function withdrawSettledAmounts( tx: Transaction, typeArgs: [string, string], args: WithdrawSettledAmountsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::withdraw_settled_amounts`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.balanceManager), obj(tx, args.tradeProof) ], }) }

export interface StakeArgs { pool: TransactionObjectInput; balanceManager: TransactionObjectInput; tradeProof: TransactionObjectInput; u64: bigint | TransactionArgument }

export function stake( tx: Transaction, typeArgs: [string, string], args: StakeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::stake`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.balanceManager), obj(tx, args.tradeProof), pure(tx, args.u64, `u64`) ], }) }

export interface BorrowFlashloanBaseArgs { pool: TransactionObjectInput; u64: bigint | TransactionArgument }

export function borrowFlashloanBase( tx: Transaction, typeArgs: [string, string], args: BorrowFlashloanBaseArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::borrow_flashloan_base`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), pure(tx, args.u64, `u64`) ], }) }

export interface BorrowFlashloanQuoteArgs { pool: TransactionObjectInput; u64: bigint | TransactionArgument }

export function borrowFlashloanQuote( tx: Transaction, typeArgs: [string, string], args: BorrowFlashloanQuoteArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::borrow_flashloan_quote`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), pure(tx, args.u64, `u64`) ], }) }

export interface ReturnFlashloanBaseArgs { pool: TransactionObjectInput; coin: TransactionObjectInput; flashLoan: TransactionObjectInput }

export function returnFlashloanBase( tx: Transaction, typeArgs: [string, string], args: ReturnFlashloanBaseArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::return_flashloan_base`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.coin), obj(tx, args.flashLoan) ], }) }

export interface ReturnFlashloanQuoteArgs { pool: TransactionObjectInput; coin: TransactionObjectInput; flashLoan: TransactionObjectInput }

export function returnFlashloanQuote( tx: Transaction, typeArgs: [string, string], args: ReturnFlashloanQuoteArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::return_flashloan_quote`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.coin), obj(tx, args.flashLoan) ], }) }

export interface PlaceLimitOrderArgs { pool: TransactionObjectInput; balanceManager: TransactionObjectInput; tradeProof: TransactionObjectInput; u641: bigint | TransactionArgument; u81: number | TransactionArgument; u82: number | TransactionArgument; u642: bigint | TransactionArgument; u643: bigint | TransactionArgument; bool1: boolean | TransactionArgument; bool2: boolean | TransactionArgument; u644: bigint | TransactionArgument; clock: TransactionObjectInput }

export function placeLimitOrder( tx: Transaction, typeArgs: [string, string], args: PlaceLimitOrderArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::place_limit_order`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.balanceManager), obj(tx, args.tradeProof), pure(tx, args.u641, `u64`), pure(tx, args.u81, `u8`), pure(tx, args.u82, `u8`), pure(tx, args.u642, `u64`), pure(tx, args.u643, `u64`), pure(tx, args.bool1, `bool`), pure(tx, args.bool2, `bool`), pure(tx, args.u644, `u64`), obj(tx, args.clock) ], }) }

export interface PlaceMarketOrderArgs { pool: TransactionObjectInput; balanceManager: TransactionObjectInput; tradeProof: TransactionObjectInput; u641: bigint | TransactionArgument; u8: number | TransactionArgument; u642: bigint | TransactionArgument; bool1: boolean | TransactionArgument; bool2: boolean | TransactionArgument; clock: TransactionObjectInput }

export function placeMarketOrder( tx: Transaction, typeArgs: [string, string], args: PlaceMarketOrderArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::place_market_order`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.balanceManager), obj(tx, args.tradeProof), pure(tx, args.u641, `u64`), pure(tx, args.u8, `u8`), pure(tx, args.u642, `u64`), pure(tx, args.bool1, `bool`), pure(tx, args.bool2, `bool`), obj(tx, args.clock) ], }) }

export interface SwapExactBaseForQuoteArgs { pool: TransactionObjectInput; coin1: TransactionObjectInput; coin2: TransactionObjectInput; u64: bigint | TransactionArgument; clock: TransactionObjectInput }

export function swapExactBaseForQuote( tx: Transaction, typeArgs: [string, string], args: SwapExactBaseForQuoteArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::swap_exact_base_for_quote`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.coin1), obj(tx, args.coin2), pure(tx, args.u64, `u64`), obj(tx, args.clock) ], }) }

export interface SwapExactQuoteForBaseArgs { pool: TransactionObjectInput; coin1: TransactionObjectInput; coin2: TransactionObjectInput; u64: bigint | TransactionArgument; clock: TransactionObjectInput }

export function swapExactQuoteForBase( tx: Transaction, typeArgs: [string, string], args: SwapExactQuoteForBaseArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::swap_exact_quote_for_base`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.coin1), obj(tx, args.coin2), pure(tx, args.u64, `u64`), obj(tx, args.clock) ], }) }

export interface SwapExactQuantityArgs { pool: TransactionObjectInput; coin1: TransactionObjectInput; coin2: TransactionObjectInput; coin3: TransactionObjectInput; u64: bigint | TransactionArgument; clock: TransactionObjectInput }

export function swapExactQuantity( tx: Transaction, typeArgs: [string, string], args: SwapExactQuantityArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::swap_exact_quantity`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.coin1), obj(tx, args.coin2), obj(tx, args.coin3), pure(tx, args.u64, `u64`), obj(tx, args.clock) ], }) }

export interface CancelOrdersArgs { pool: TransactionObjectInput; balanceManager: TransactionObjectInput; tradeProof: TransactionObjectInput; vecU128: Array<bigint | TransactionArgument> | TransactionArgument; clock: TransactionObjectInput }

export function cancelOrders( tx: Transaction, typeArgs: [string, string], args: CancelOrdersArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::cancel_orders`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.balanceManager), obj(tx, args.tradeProof), pure(tx, args.vecU128, `vector<u128>`), obj(tx, args.clock) ], }) }

export interface CancelAllOrdersArgs { pool: TransactionObjectInput; balanceManager: TransactionObjectInput; tradeProof: TransactionObjectInput; clock: TransactionObjectInput }

export function cancelAllOrders( tx: Transaction, typeArgs: [string, string], args: CancelAllOrdersArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::cancel_all_orders`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.balanceManager), obj(tx, args.tradeProof), obj(tx, args.clock) ], }) }

export interface UnstakeArgs { pool: TransactionObjectInput; balanceManager: TransactionObjectInput; tradeProof: TransactionObjectInput }

export function unstake( tx: Transaction, typeArgs: [string, string], args: UnstakeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::unstake`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.balanceManager), obj(tx, args.tradeProof) ], }) }

export interface SubmitProposalArgs { pool: TransactionObjectInput; balanceManager: TransactionObjectInput; tradeProof: TransactionObjectInput; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument; u643: bigint | TransactionArgument }

export function submitProposal( tx: Transaction, typeArgs: [string, string], args: SubmitProposalArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::submit_proposal`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.balanceManager), obj(tx, args.tradeProof), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`), pure(tx, args.u643, `u64`) ], }) }

export interface VoteArgs { pool: TransactionObjectInput; balanceManager: TransactionObjectInput; tradeProof: TransactionObjectInput; id: string | TransactionArgument }

export function vote( tx: Transaction, typeArgs: [string, string], args: VoteArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::vote`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.balanceManager), obj(tx, args.tradeProof), pure(tx, args.id, `${ID.$typeName}`) ], }) }

export interface AddDeepPricePointArgs { pool1: TransactionObjectInput; pool2: TransactionObjectInput; clock: TransactionObjectInput }

export function addDeepPricePoint( tx: Transaction, typeArgs: [string, string, string, string], args: AddDeepPricePointArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::add_deep_price_point`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool1), obj(tx, args.pool2), obj(tx, args.clock) ], }) }

export interface BurnDeepArgs { pool: TransactionObjectInput; protectedTreasury: TransactionObjectInput }

export function burnDeep( tx: Transaction, typeArgs: [string, string], args: BurnDeepArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::burn_deep`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.protectedTreasury) ], }) }

export interface CreatePoolAdminArgs { registry: TransactionObjectInput; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument; u643: bigint | TransactionArgument; bool1: boolean | TransactionArgument; bool2: boolean | TransactionArgument; deepbookAdminCap: TransactionObjectInput }

export function createPoolAdmin( tx: Transaction, typeArgs: [string, string], args: CreatePoolAdminArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::create_pool_admin`, typeArguments: typeArgs, arguments: [ obj(tx, args.registry), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`), pure(tx, args.u643, `u64`), pure(tx, args.bool1, `bool`), pure(tx, args.bool2, `bool`), obj(tx, args.deepbookAdminCap) ], }) }

export interface UnregisterPoolAdminArgs { pool: TransactionObjectInput; registry: TransactionObjectInput; deepbookAdminCap: TransactionObjectInput }

export function unregisterPoolAdmin( tx: Transaction, typeArgs: [string, string], args: UnregisterPoolAdminArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::unregister_pool_admin`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.registry), obj(tx, args.deepbookAdminCap) ], }) }

export interface UpdateAllowedVersionsArgs { pool: TransactionObjectInput; registry: TransactionObjectInput; deepbookAdminCap: TransactionObjectInput }

export function updateAllowedVersions( tx: Transaction, typeArgs: [string, string], args: UpdateAllowedVersionsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::update_allowed_versions`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.registry), obj(tx, args.deepbookAdminCap) ], }) }

export function registeredPool( tx: Transaction, typeArgs: [string, string], pool: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::registered_pool`, typeArguments: typeArgs, arguments: [ obj(tx, pool) ], }) }

export interface GetQuoteQuantityOutArgs { pool: TransactionObjectInput; u64: bigint | TransactionArgument; clock: TransactionObjectInput }

export function getQuoteQuantityOut( tx: Transaction, typeArgs: [string, string], args: GetQuoteQuantityOutArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::get_quote_quantity_out`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), pure(tx, args.u64, `u64`), obj(tx, args.clock) ], }) }

export interface GetBaseQuantityOutArgs { pool: TransactionObjectInput; u64: bigint | TransactionArgument; clock: TransactionObjectInput }

export function getBaseQuantityOut( tx: Transaction, typeArgs: [string, string], args: GetBaseQuantityOutArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::get_base_quantity_out`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), pure(tx, args.u64, `u64`), obj(tx, args.clock) ], }) }

export interface AccountOpenOrdersArgs { pool: TransactionObjectInput; balanceManager: TransactionObjectInput }

export function accountOpenOrders( tx: Transaction, typeArgs: [string, string], args: AccountOpenOrdersArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::account_open_orders`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.balanceManager) ], }) }

export interface GetLevel2RangeArgs { pool: TransactionObjectInput; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument; bool: boolean | TransactionArgument; clock: TransactionObjectInput }

export function getLevel2Range( tx: Transaction, typeArgs: [string, string], args: GetLevel2RangeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::get_level2_range`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`), pure(tx, args.bool, `bool`), obj(tx, args.clock) ], }) }

export interface GetLevel2TicksFromMidArgs { pool: TransactionObjectInput; u64: bigint | TransactionArgument; clock: TransactionObjectInput }

export function getLevel2TicksFromMid( tx: Transaction, typeArgs: [string, string], args: GetLevel2TicksFromMidArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::get_level2_ticks_from_mid`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), pure(tx, args.u64, `u64`), obj(tx, args.clock) ], }) }

export function vaultBalances( tx: Transaction, typeArgs: [string, string], pool: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::vault_balances`, typeArguments: typeArgs, arguments: [ obj(tx, pool) ], }) }

export function getPoolIdByAsset( tx: Transaction, typeArgs: [string, string], registry: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::get_pool_id_by_asset`, typeArguments: typeArgs, arguments: [ obj(tx, registry) ], }) }

export interface GetOrdersArgs { pool: TransactionObjectInput; vecU128: Array<bigint | TransactionArgument> | TransactionArgument }

export function getOrders( tx: Transaction, typeArgs: [string, string], args: GetOrdersArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::get_orders`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), pure(tx, args.vecU128, `vector<u128>`) ], }) }

export interface GetAccountOrderDetailsArgs { pool: TransactionObjectInput; balanceManager: TransactionObjectInput }

export function getAccountOrderDetails( tx: Transaction, typeArgs: [string, string], args: GetAccountOrderDetailsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::get_account_order_details`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.balanceManager) ], }) }

export interface GetOrderDeepRequiredArgs { pool: TransactionObjectInput; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument }

export function getOrderDeepRequired( tx: Transaction, typeArgs: [string, string], args: GetOrderDeepRequiredArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::get_order_deep_required`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`) ], }) }

export function poolTradeParams( tx: Transaction, typeArgs: [string, string], pool: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::pool_trade_params`, typeArguments: typeArgs, arguments: [ obj(tx, pool) ], }) }

export function poolBookParams( tx: Transaction, typeArgs: [string, string], pool: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::pool_book_params`, typeArguments: typeArgs, arguments: [ obj(tx, pool) ], }) }

export interface CreatePoolArgs { registry: TransactionObjectInput; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument; u643: bigint | TransactionArgument; coin: TransactionObjectInput; bool1: boolean | TransactionArgument; bool2: boolean | TransactionArgument }

export function createPool( tx: Transaction, typeArgs: [string, string], args: CreatePoolArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::create_pool`, typeArguments: typeArgs, arguments: [ obj(tx, args.registry), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`), pure(tx, args.u643, `u64`), obj(tx, args.coin), pure(tx, args.bool1, `bool`), pure(tx, args.bool2, `bool`) ], }) }

export interface PlaceOrderIntArgs { pool: TransactionObjectInput; balanceManager: TransactionObjectInput; tradeProof: TransactionObjectInput; u641: bigint | TransactionArgument; u81: number | TransactionArgument; u82: number | TransactionArgument; u642: bigint | TransactionArgument; u643: bigint | TransactionArgument; bool1: boolean | TransactionArgument; bool2: boolean | TransactionArgument; u644: bigint | TransactionArgument; clock: TransactionObjectInput; bool3: boolean | TransactionArgument }

export function placeOrderInt( tx: Transaction, typeArgs: [string, string], args: PlaceOrderIntArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::pool::place_order_int`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.balanceManager), obj(tx, args.tradeProof), pure(tx, args.u641, `u64`), pure(tx, args.u81, `u8`), pure(tx, args.u82, `u8`), pure(tx, args.u642, `u64`), pure(tx, args.u643, `u64`), pure(tx, args.bool1, `bool`), pure(tx, args.bool2, `bool`), pure(tx, args.u644, `u64`), obj(tx, args.clock), pure(tx, args.bool3, `bool`) ], }) }
