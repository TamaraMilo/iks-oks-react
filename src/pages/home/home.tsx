import React, { useEffect, useState } from "react";
import { Window as KeplrWindow } from "@keplr-wallet/types";
import "./home.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import { config } from "../../config";
import { SigningCosmosClient } from "@cosmjs/launchpad";
import { setupWebKeplr } from "cosmwasm";

import { Login as LoginDesign } from "@cosmicdapp/design";
import { wallet } from "../../wallet";
import useSdk from "../../hooks/useclient";
import Popup from "../../components/popup/popup";

export default function Home() {
  const history = useHistory();
  const sdk = useSdk();
  const [mnemonic, setMnemonic] = useState("");

  const [inputExistingRoom, setInputExistingRoom] = useState(false);
  const [roomNumber, setRoomNumber] = useState("");
  const [popUpContent, setPopUpContent] = useState<JSX.Element>();
  const [popUp, setPopUp] = useState(false);

  const togglePopUp = () => {
    setPopUp(!popUp);
  };
  // const buttnoPopUpHandle = ()  => {
  //   if(mnemonic === undefined){
  //     return;
  //   }
  //   togglePopUp();
  //   console.log(mnemonic)
  //   const clinet = sdk.createClient(mnemonic);

  // }

  const openExistingRoom = () => {
    history.push(`/room/${roomNumber}`);
    history.goForward();
  };
  const openNewRoom = async () => {
    // // const client = await sdk.createClient(
    // //   "prepare urban venture mixture behave warrior hope clump fat noodle fabric return rookie ginger cheese seed age prefer amount enlist wine brass economy neither"
    // // );
    // // const balance = await client!.getBalance(
    // //   "wasm1fqtyx9yf6ftzk3cg4c42gt363e3cfwt62pnqca",
    // //   "umlg"
    // // );
    // // console.log(balance);

    // const client = sdk.getClient();
    // if(client === undefined)
    // {
    //   setPopUpContent(<div className="mneminic-input">
    //     <input type="password" placeholder="mnemonic" onChange={(e)=>setMnemonic(e.target.value)}/>
    //     <button onClick={buttnoPopUpHandle}>Done</button>
    //   </div>)
    //   togglePopUp();
    // }
    history.push(`/room/1`);
    history.goForward();

  };

  return (
    <div className="home-main-div">
      <h1>Tic-Tac-Toe</h1>
      <div className="buttons-div">
        <button onClick={openNewRoom}>Add new room</button>
        <button
          onClick={() => {
            setInputExistingRoom(!inputExistingRoom);
          }}
        >
          Open existing one
        </button>
        {inputExistingRoom && (
          <div className="inputRoomDiv">
            <input
              type="number"
              placeholder="Room number..."
              onChange={(e) => setRoomNumber(e.target.value)}
            />
            <button onClick={openExistingRoom}>Open</button>
          </div>
        )}
        {popUp && <Popup content={popUpContent!} handleClose={togglePopUp} />}
      </div>
    </div>
  );
}
