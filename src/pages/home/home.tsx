
import React from "react";
import { Window as KeplrWindow } from "@keplr-wallet/types";
import "./home.css";
import {Link, useHistory, useLocation} from "react-router-dom"
import { config } from "../../config";
import { SigningCosmosClient } from "@cosmjs/launchpad";
import { setupWebKeplr } from "cosmwasm";
import { Client } from "../../wallet";
import { useSdk } from "@cosmicdapp/logic";
import {Login as LoginDesign} from "@cosmicdapp/design";



export default function Home() {
 


  return (
    <div className="home-main-div">
      <h1>Tic-Tac-Toe</h1>
      <div className="buttons-div">
        <Link to="/room/1">
        <button >Add new room</button>
        </Link>
        <button>Open existing one</button>
      </div>
    </div>
  );
}
