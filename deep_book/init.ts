import * as account from "./account/structs";
import * as balanceManager from "./balance-manager/structs";
import * as balances from "./balances/structs";
import * as bigVector from "./big-vector/structs";
import * as book from "./book/structs";
import * as deepPrice from "./deep-price/structs";
import * as fill from "./fill/structs";
import * as governance from "./governance/structs";
import * as history from "./history/structs";
import * as orderInfo from "./order-info/structs";
import * as orderQuery from "./order-query/structs";
import * as order from "./order/structs";
import * as pool from "./pool/structs";
import * as registry from "./registry/structs";
import * as state from "./state/structs";
import * as tradeParams from "./trade-params/structs";
import * as vault from "./vault/structs";
import {StructClassLoader} from "../_framework/loader";

export function registerClasses(loader: StructClassLoader) { loader.register(tradeParams.TradeParams);
loader.register(balances.Balances);
loader.register(deepPrice.Price);
loader.register(deepPrice.PriceAdded);
loader.register(deepPrice.DeepPrice);
loader.register(deepPrice.OrderDeepPrice);
loader.register(fill.Fill);
loader.register(history.Volumes);
loader.register(history.History);
loader.register(bigVector.BigVector);
loader.register(bigVector.Slice);
loader.register(bigVector.SliceRef);
loader.register(account.Account);
loader.register(governance.Proposal);
loader.register(governance.Governance);
loader.register(governance.TradeParamsUpdateEvent);
loader.register(order.Order);
loader.register(order.OrderCanceled);
loader.register(order.OrderModified);
loader.register(orderInfo.OrderInfo);
loader.register(orderInfo.OrderFilled);
loader.register(orderInfo.OrderPlaced);
loader.register(orderInfo.OrderExpired);
loader.register(book.Book);
loader.register(state.State);
loader.register(state.StakeEvent);
loader.register(state.ProposalEvent);
loader.register(state.VoteEvent);
loader.register(state.RebateEvent);
loader.register(balanceManager.BalanceManager);
loader.register(balanceManager.BalanceEvent);
loader.register(balanceManager.BalanceKey);
loader.register(balanceManager.TradeCap);
loader.register(balanceManager.TradeProof);
loader.register(registry.REGISTRY);
loader.register(registry.DeepbookAdminCap);
loader.register(registry.Registry);
loader.register(registry.RegistryInner);
loader.register(registry.PoolKey);
loader.register(vault.Vault);
loader.register(vault.FlashLoan);
loader.register(vault.FlashLoanBorrowed);
loader.register(pool.Pool);
loader.register(pool.PoolInner);
loader.register(pool.PoolCreated);
loader.register(orderQuery.OrderPage);
 }
