import React from "react";
import "./room.css";
import { useParams } from "react-router-dom";
import Board from "../../components/board/board";

export default function Room() {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="room">
      <h1>ROOM: {id}</h1>
      <Board />
    </div>
  );
}
