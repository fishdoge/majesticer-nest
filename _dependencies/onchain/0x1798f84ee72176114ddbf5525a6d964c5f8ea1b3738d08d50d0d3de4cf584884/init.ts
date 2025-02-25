import * as event from "./event/structs";
import * as float_ from "./float/structs";
import * as sbuck from "./sbuck/structs";
import {StructClassLoader} from "../../../_framework/loader";

export function registerClasses(loader: StructClassLoader) { loader.register(float_.Float);
loader.register(event.CollectRewards);
loader.register(event.Deposit);
loader.register(event.Burn);
loader.register(sbuck.SBUCK);
loader.register(sbuck.Flask);
loader.register(sbuck.WhitelistCap);
 }
