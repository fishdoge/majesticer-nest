import {PUBLISHED_AT} from "..";
import {ID} from "../../_dependencies/onchain/0x2/object/structs";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface NewArgs { id1: string | TransactionArgument; id2: string | TransactionArgument; u641: bigint | TransactionArgument; address: string | TransactionArgument; u81: number | TransactionArgument; u82: number | TransactionArgument; u642: bigint | TransactionArgument; u643: bigint | TransactionArgument; bool1: boolean | TransactionArgument; bool2: boolean | TransactionArgument; u644: bigint | TransactionArgument; u645: bigint | TransactionArgument; orderDeepPrice: TransactionObjectInput; bool3: boolean | TransactionArgument; u646: bigint | TransactionArgument }

export function new_( tx: Transaction, args: NewArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_info::new`, arguments: [ pure(tx, args.id1, `${ID.$typeName}`), pure(tx, args.id2, `${ID.$typeName}`), pure(tx, args.u641, `u64`), pure(tx, args.address, `address`), pure(tx, args.u81, `u8`), pure(tx, args.u82, `u8`), pure(tx, args.u642, `u64`), pure(tx, args.u643, `u64`), pure(tx, args.bool1, `bool`), pure(tx, args.bool2, `bool`), pure(tx, args.u644, `u64`), pure(tx, args.u645, `u64`), obj(tx, args.orderDeepPrice), pure(tx, args.bool3, `bool`), pure(tx, args.u646, `u64`) ], }) }

export function feeIsDeep( tx: Transaction, orderInfo: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_info::fee_is_deep`, arguments: [ obj(tx, orderInfo) ], }) }

export function status( tx: Transaction, orderInfo: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_info::status`, arguments: [ obj(tx, orderInfo) ], }) }

export function price( tx: Transaction, orderInfo: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_info::price`, arguments: [ obj(tx, orderInfo) ], }) }

export function epoch( tx: Transaction, orderInfo: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_info::epoch`, arguments: [ obj(tx, orderInfo) ], }) }

export function balanceManagerId( tx: Transaction, orderInfo: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_info::balance_manager_id`, arguments: [ obj(tx, orderInfo) ], }) }

export function orderId( tx: Transaction, orderInfo: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_info::order_id`, arguments: [ obj(tx, orderInfo) ], }) }

export function clientOrderId( tx: Transaction, orderInfo: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_info::client_order_id`, arguments: [ obj(tx, orderInfo) ], }) }

export function orderDeepPrice( tx: Transaction, orderInfo: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_info::order_deep_price`, arguments: [ obj(tx, orderInfo) ], }) }

export function expireTimestamp( tx: Transaction, orderInfo: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_info::expire_timestamp`, arguments: [ obj(tx, orderInfo) ], }) }

export function isBid( tx: Transaction, orderInfo: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_info::is_bid`, arguments: [ obj(tx, orderInfo) ], }) }

export function poolId( tx: Transaction, orderInfo: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_info::pool_id`, arguments: [ obj(tx, orderInfo) ], }) }

export function trader( tx: Transaction, orderInfo: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_info::trader`, arguments: [ obj(tx, orderInfo) ], }) }

export function originalQuantity( tx: Transaction, orderInfo: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_info::original_quantity`, arguments: [ obj(tx, orderInfo) ], }) }

export function orderType( tx: Transaction, orderInfo: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_info::order_type`, arguments: [ obj(tx, orderInfo) ], }) }

export function selfMatchingOption( tx: Transaction, orderInfo: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_info::self_matching_option`, arguments: [ obj(tx, orderInfo) ], }) }

export function executedQuantity( tx: Transaction, orderInfo: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_info::executed_quantity`, arguments: [ obj(tx, orderInfo) ], }) }

export function cumulativeQuoteQuantity( tx: Transaction, orderInfo: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_info::cumulative_quote_quantity`, arguments: [ obj(tx, orderInfo) ], }) }

export function fills( tx: Transaction, orderInfo: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_info::fills`, arguments: [ obj(tx, orderInfo) ], }) }

export function paidFees( tx: Transaction, orderInfo: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_info::paid_fees`, arguments: [ obj(tx, orderInfo) ], }) }

export function makerFees( tx: Transaction, orderInfo: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_info::maker_fees`, arguments: [ obj(tx, orderInfo) ], }) }

export function fillLimitReached( tx: Transaction, orderInfo: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_info::fill_limit_reached`, arguments: [ obj(tx, orderInfo) ], }) }

export function orderInserted( tx: Transaction, orderInfo: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_info::order_inserted`, arguments: [ obj(tx, orderInfo) ], }) }

export function marketOrder( tx: Transaction, orderInfo: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_info::market_order`, arguments: [ obj(tx, orderInfo) ], }) }

export interface SetOrderIdArgs { orderInfo: TransactionObjectInput; u128: bigint | TransactionArgument }

export function setOrderId( tx: Transaction, args: SetOrderIdArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_info::set_order_id`, arguments: [ obj(tx, args.orderInfo), pure(tx, args.u128, `u128`) ], }) }

export interface SetPaidFeesArgs { orderInfo: TransactionObjectInput; u64: bigint | TransactionArgument }

export function setPaidFees( tx: Transaction, args: SetPaidFeesArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_info::set_paid_fees`, arguments: [ obj(tx, args.orderInfo), pure(tx, args.u64, `u64`) ], }) }

export interface AddFillArgs { orderInfo: TransactionObjectInput; fill: TransactionObjectInput }

export function addFill( tx: Transaction, args: AddFillArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_info::add_fill`, arguments: [ obj(tx, args.orderInfo), obj(tx, args.fill) ], }) }

export function fillsRef( tx: Transaction, orderInfo: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_info::fills_ref`, arguments: [ obj(tx, orderInfo) ], }) }

export interface CalculatePartialFillBalancesArgs { orderInfo: TransactionObjectInput; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument }

export function calculatePartialFillBalances( tx: Transaction, args: CalculatePartialFillBalancesArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_info::calculate_partial_fill_balances`, arguments: [ obj(tx, args.orderInfo), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`) ], }) }

export function toOrder( tx: Transaction, orderInfo: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_info::to_order`, arguments: [ obj(tx, orderInfo) ], }) }

export interface ValidateInputsArgs { orderInfo: TransactionObjectInput; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument; u643: bigint | TransactionArgument; u644: bigint | TransactionArgument }

export function validateInputs( tx: Transaction, args: ValidateInputsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_info::validate_inputs`, arguments: [ obj(tx, args.orderInfo), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`), pure(tx, args.u643, `u64`), pure(tx, args.u644, `u64`) ], }) }

export function assertExecution( tx: Transaction, orderInfo: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_info::assert_execution`, arguments: [ obj(tx, orderInfo) ], }) }

export function remainingQuantity( tx: Transaction, orderInfo: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_info::remaining_quantity`, arguments: [ obj(tx, orderInfo) ], }) }

export interface CanMatchArgs { orderInfo: TransactionObjectInput; order: TransactionObjectInput }

export function canMatch( tx: Transaction, args: CanMatchArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_info::can_match`, arguments: [ obj(tx, args.orderInfo), obj(tx, args.order) ], }) }

export interface MatchMakerArgs { orderInfo: TransactionObjectInput; order: TransactionObjectInput; u64: bigint | TransactionArgument }

export function matchMaker( tx: Transaction, args: MatchMakerArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_info::match_maker`, arguments: [ obj(tx, args.orderInfo), obj(tx, args.order), pure(tx, args.u64, `u64`) ], }) }

export interface EmitOrdersFilledArgs { orderInfo: TransactionObjectInput; u64: bigint | TransactionArgument }

export function emitOrdersFilled( tx: Transaction, args: EmitOrdersFilledArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_info::emit_orders_filled`, arguments: [ obj(tx, args.orderInfo), pure(tx, args.u64, `u64`) ], }) }

export function emitOrderPlaced( tx: Transaction, orderInfo: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_info::emit_order_placed`, arguments: [ obj(tx, orderInfo) ], }) }

export function emitOrderInfo( tx: Transaction, orderInfo: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_info::emit_order_info`, arguments: [ obj(tx, orderInfo) ], }) }

export function setFillLimitReached( tx: Transaction, orderInfo: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_info::set_fill_limit_reached`, arguments: [ obj(tx, orderInfo) ], }) }

export function setOrderInserted( tx: Transaction, orderInfo: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_info::set_order_inserted`, arguments: [ obj(tx, orderInfo) ], }) }

export interface OrderFilledFromFillArgs { orderInfo: TransactionObjectInput; fill: TransactionObjectInput; u64: bigint | TransactionArgument }

export function orderFilledFromFill( tx: Transaction, args: OrderFilledFromFillArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_info::order_filled_from_fill`, arguments: [ obj(tx, args.orderInfo), obj(tx, args.fill), pure(tx, args.u64, `u64`) ], }) }

export interface OrderExpiredFromFillArgs { orderInfo: TransactionObjectInput; fill: TransactionObjectInput; u64: bigint | TransactionArgument }

export function orderExpiredFromFill( tx: Transaction, args: OrderExpiredFromFillArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_info::order_expired_from_fill`, arguments: [ obj(tx, args.orderInfo), obj(tx, args.fill), pure(tx, args.u64, `u64`) ], }) }

export interface EmitOrderCanceledMakerFromFillArgs { orderInfo: TransactionObjectInput; fill: TransactionObjectInput; u64: bigint | TransactionArgument }

export function emitOrderCanceledMakerFromFill( tx: Transaction, args: EmitOrderCanceledMakerFromFillArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_info::emit_order_canceled_maker_from_fill`, arguments: [ obj(tx, args.orderInfo), obj(tx, args.fill), pure(tx, args.u64, `u64`) ], }) }
