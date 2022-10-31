import { CosmWasmClient , SigningCosmWasmClient} from "cosmwasm";
import { SigningStargateClient} from "@cosmjs/stargate"
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { useState } from "react";


function useSdk()
{
    const [client, setClient] = useState<CosmWasmClient>();
    const [wallet, setWallet] = useState<DirectSecp256k1HdWallet>();

    const getClient = () => 
    {
        return client;
    }
    const getWallet = () => 
    {
        return wallet;
    }
    const createClient = async (mnemonic: string)  =>
    {
        
        const w = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic);
        setWallet(w);
        const c = await SigningCosmWasmClient.connectWithSigner("https://rpc.malaga-420.cosmwasm.com:443", w);
        setClient(c);
        return c;
    }
    return {
        getClient,
        getWallet, 
        createClient
    }

}   

export default useSdk;