import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Coin, SigningStargateClient } from "@cosmjs/stargate";
import { CosmWasmClient } from "cosmwasm";

const sender = {
  mnemonic:
    "prepare urban venture mixture behave warrior hope clump fat noodle fabric return rookie ginger cheese seed age prefer amount enlist wine brass economy neither",
  address: "wasm1qjdjcfrur950ze2uu2wqv6fvvvdhglryqwgdlx",
};
const tendermintUrl = "https://rpc.malaga-420.cosmwasm.com:443";
// (async () => {
// const wallet = await DirectSecp256k1HdWallet.fromMnemonic(sender.mnemonic);
// const client = await SigningStargateClient.connectWithSigner(tendermintUrl, wallet);
// const before = await client.getBalance(sender.address, "uatom");
// console.log(before);
// })();

export async function wallet() {
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(sender.mnemonic);
  const client = await CosmWasmClient.connect(tendermintUrl);
  
  console.log(
    await client.getBalance(
      "wasm1f0fclqu37dzncjnn47jqnjck5wqls0pd9wpydu",
      "umlg"
    )
  );

}
