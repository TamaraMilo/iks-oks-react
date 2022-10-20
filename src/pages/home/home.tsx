import React from "react";
import { Window as KeplrWindow } from "@keplr-wallet/types";
import "./home.css";
import { config } from "../../config";
import { SigningCosmosClient } from "@cosmjs/launchpad";
import { setupWebKeplr } from "cosmwasm";
import { Client } from "../../wallet";
import { useSdk } from "@cosmicdapp/logic";
import {Login as LoginDesign} from "@cosmicdapp/design";

export function Home() {
    const client  = useSdk().getClient()
  const addRoom = async () => {
    const hanleMsg = {
        
    }
    // client.execute(process.env.REACT_APP_CONTRACT_ADDR, )
  };

  return (
    <div className="home-main-div">
      <h1>Tic-Tac-Toe</h1>
      <div className="buttons-div">
        <button onClick={addRoom}>Add new room</button>
        <button>Open existing one</button>
      </div>
    </div>
  );
}
