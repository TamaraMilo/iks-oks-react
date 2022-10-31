import { AppConfig, getAppConfig, NetworkConfigs } from "@cosmicdapp/logic";

// export const config = {
//     chainId: "malaga-420",
//     chainName: "malaga-420",
//     addressPrefix: "wasm",
//     rpcUrl: "https://rpc.malaga-420.cosmwasm.com/status",
//     httpUrl: "https://rpc.malaga-420.cosmwasm.com/status",
//     faucetUrl: "https://faucet.malaga-420.cosmwasm.com/status",
//     feeToken: "",
//     stakingToken: "",
//     gasPrice: 0.025
// }

const local: AppConfig = {
  chainId: "testing",
  chainName: "ibiza",
  addressPrefix: "wasm",
  rpcUrl: "http://localhost:26657",
  httpUrl: "http://localhost:26657",
  faucetUrl: "http://localhost:26657",
  feeToken: "ucosm",
  stakingToken: "ustake",
  coinMap: {
    ucosm: { denom: "ucosm", fractionalDigits: 6 },
    ustake: { denom: "ustake", fractionalDigits: 6 },
  },
  gasPrice: 0.025,
};

const configs: NetworkConfigs = { local }; //uninet, pebblenet
export const config = getAppConfig(configs);
