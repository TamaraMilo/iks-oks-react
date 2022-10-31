import React, { useEffect, useState } from "react";
import "./home.css";
import { useHistory } from "react-router-dom";
import useSdk from "../../hooks/useclient";
import Popup from "../../components/popup/popup";
import Modal from "react-modal";
import { coin, StdFee } from "cosmwasm";


export default function Home() {
  const history = useHistory();
  const sdk = useSdk();
  const [mnemonic, setMnemonic] = useState<string>();
  const [address, setAddress] = useState<string>();
  const [inputExistingRoom, setInputExistingRoom] = useState(false);
  const [roomNumber, setRoomNumber] = useState("");
  const [popUpContent, setPopUpContent] = useState<JSX.Element>();
  const [popUp, setPopUp] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const defaultFee: StdFee = { amount: [{amount: "200", denom: "umlg",},], gas: "200000",};


  const modalToggle = () => {
    setIsOpen(!isOpen);
  }
  const createClientAfterClose = async () => {
    if (mnemonic === undefined || mnemonic === "" || address === undefined || address === "") {
      return;
    }
    console.log(mnemonic);
    const client = await sdk.createClient(mnemonic, address);
    const res = await client.execute(sdk.getAddress()!, process.env.REACT_APP_CONTRACT_ADDR!, { add_room: { player1: "addr", player2: "addr2" } },defaultFee);
    console.log(res)
  }
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

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
    const client = sdk.getClient();
    if (client === undefined)
      modalToggle();
    // // console.log(balance);


    // if(client === undefined)
    // {
    //   setPopUpContent(<div className="mneminic-input">
    //     <input type="password" placeholder="mnemonic" value={mnemonic} onChange={(e)=>setMnemonic(e.target.value)}/>
    //     <button onClick={buttnoPopUpHandle}>Done</button>
    //   </div>)
    //   togglePopUp();
    // }

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
        <Modal
          isOpen={isOpen}
          onAfterClose={createClientAfterClose}
          style={customStyles}
        >
          <div className="modal">
            <h2 >Input mnemonic</h2>
            <input type="password" value={mnemonic} onChange={(e) => { setMnemonic(e.target.value) }} />
            <h2 >Input wallet address???</h2>
            <input value={address} onChange={(e) => { setAddress(e.target.value) }} />
            <button onClick={modalToggle}>Done</button>
          </div>
        </Modal>
      </div>
    </div>
  );
}
