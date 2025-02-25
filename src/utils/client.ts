import { SuiClient, getFullnodeUrl } from "@mysten/sui/client";

export const getClient = (
  network: "mainnet" | "testnet" | "devnet" | "localnet"
) => {
  return new SuiClient({
    url: "https://solitary-sly-wave.sui-mainnet.quiknode.pro/ff29c3e53da6762b9c8d712e8301dae0595c901b",
  });
};
