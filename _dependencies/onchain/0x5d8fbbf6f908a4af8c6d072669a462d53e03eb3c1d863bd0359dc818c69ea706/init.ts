import * as supraSValueFeed from "./suprasvaluefeed/structs";
import {StructClassLoader} from "../../../_framework/loader";

export function registerClasses(loader: StructClassLoader) { loader.register(supraSValueFeed.Price);
loader.register(supraSValueFeed.Entry);
loader.register(supraSValueFeed.OwnerCap);
loader.register(supraSValueFeed.DkgState);
loader.register(supraSValueFeed.OracleHolder);
loader.register(supraSValueFeed.MinBlock);
loader.register(supraSValueFeed.Vote);
loader.register(supraSValueFeed.MinBatch);
loader.register(supraSValueFeed.MinTxn);
loader.register(supraSValueFeed.SignedCoherentCluster);
loader.register(supraSValueFeed.CoherentCluster);
loader.register(supraSValueFeed.Origin);
loader.register(supraSValueFeed.SCCProcessedEvent);
 }
