import { CosmWasmClient, SigningCosmWasmClient } from "cosmwasm";
import { SigningStargateClient } from "@cosmjs/stargate"
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { useState } from "react";


function useSdk() {
    const [client, setClient] = useState<CosmWasmClient>();
    const [address, setAddress] = useState<string>();
    const [wallet, setWallet] = useState<DirectSecp256k1HdWallet>();

    const getClient = () => {
        return client;
    }
    const getWallet = () => {
        return wallet;
    }
    const getAddress = () => {
        return address;
    }
    const createClient = async (mnemonic: string, address: string) => {
        const w = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic);
        setWallet(w);
        setAddress(address);

        const c = await SigningCosmWasmClient.connectWithSigner("https://rpc.malaga-420.cosmwasm.com:443", w);
    
        setClient(c);
        return c;
    }
    return {
        getClient,
        getAddress,
        getWallet,
        createClient
    }

}

export default useSdk;