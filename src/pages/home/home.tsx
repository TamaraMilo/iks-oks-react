import React, { useState } from "react";
import { Window as KeplrWindow } from "@keplr-wallet/types";
import "./home.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import { config } from "../../config";
import { SigningCosmosClient } from "@cosmjs/launchpad";
import { setupWebKeplr } from "cosmwasm";
import { Client } from "../../wallet";
import { useSdk } from "@cosmicdapp/logic";
import { Login as LoginDesign } from "@cosmicdapp/design";

export default function Home() {
  const history = useHistory();
  const [inputExistingRoom, setInputExistingRoom] = useState(false);
  const [roomNumber, setRoomNumber] = useState("");

  const openExistingRoom = () => {
    history.push(`/room/${roomNumber}`);
    history.goForward();
  };
  const openNewRoom = () => {
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
              placeholder="Room number ..."
              onChange={(e) => setRoomNumber(e.target.value)}
            />{" "}
            <button onClick={openExistingRoom}>Open</button>
          </div>
        )}
      </div>
    </div>
  );
}
