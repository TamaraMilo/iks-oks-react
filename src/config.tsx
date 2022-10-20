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

const local: AppConfig = 
{
    chainId: "malaga-420",
    chainName: "malaga-420",
    addressPrefix: "wasm",
    rpcUrl: "https://rpc.malaga-420.cosmwasm.com/status",
    httpUrl: "https://rpc.malaga-420.cosmwasm.com/status",
    faucetUrl: "https://faucet.malaga-420.cosmwasm.com/status",
    feeToken: "",
    stakingToken: "",
    coinMap: {},
    gasPrice: 0.025
}

const configs: NetworkConfigs = { local,  }; //uninet, pebblenet
export const config = getAppConfig(configs);