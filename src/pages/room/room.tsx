import React from "react";
import "./room.css";
import { useHistory, useParams } from "react-router-dom";
import Board from "../../components/board/board";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function Room() {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const handleOnHouseClick = () => {
    history.goBack();
  };
  return (
    <div className="room">
      <span className="headline">
        <FontAwesomeIcon
          className="home-icon"
          icon={faHouse}
          onClick={handleOnHouseClick}
        />
        <h1>ROOM: {id}</h1>
      </span>
      <Board />
    </div>
  );
}
