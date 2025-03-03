import * as bucketOracle from "./bucket-oracle/structs";
import * as priceAggregator from "./price-aggregator/structs";
import * as singleOracle from "./single-oracle/structs";
import {StructClassLoader} from "../_framework/loader";

export function registerClasses(loader: StructClassLoader) { loader.register(priceAggregator.PriceInfo);
loader.register(priceAggregator.PriceVector);
loader.register(singleOracle.ParsePriceEvent);
loader.register(singleOracle.SingleOracle);
loader.register(singleOracle.PriceCollector);
loader.register(singleOracle.WhitelistRule);
loader.register(bucketOracle.AdminCap);
loader.register(bucketOracle.BucketOracle);
loader.register(bucketOracle.PriceType);
 }
