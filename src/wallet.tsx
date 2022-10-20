import { setupNodeLocal, setupWebKeplr, SigningCosmWasmClient } from "cosmwasm";
import { config } from "./config";


export class Client 
{
    private static wallet: SigningCosmWasmClient;


    private constructor(){}


    public static async getClient()
    {
        if(!Client.wallet)
        {
            const configKeplr = {
                chainId: config.chainId,
                rpcEndpoint: config.rpcUrl,
                prefix: config.addressPrefix
            }
            const client = await setupNodeLocal(configKeplr,"opinion edge core uncle teach scan stock bargain borrow square champion lock");
            console.log(client)
            this.wallet = client;
        }
        return this.wallet;
    }
}







