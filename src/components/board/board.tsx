import React, { useState } from "react";
import { Coordinates } from "../../dtos/coordinates";
import { CellModel } from "../../dtos/cell";
import Cell from "../cell/cell";
import "./board.css";

export default function Board() {
  const [selectedCell, setSelectedCell] = useState(new CellModel(5, 5));
  const [player, setPlayer] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);

  const player1: CellModel[] = [];
  const player2: CellModel[] = [];
  const [board, setBoard] = useState([
    [new CellModel(0, 0), new CellModel(0, 1), new CellModel(0, 2)],
    [new CellModel(1, 0), new CellModel(1, 1), new CellModel(1, 2)],
    [new CellModel(2, 0), new CellModel(2, 1), new CellModel(2, 2)],
  ]);

  const handlePlayMove = () => {
    if (!selectedCell) {
      alert("You need to select cell");
      return;
    }
    if (player === 0) {
      player1.push(selectedCell);
    } else {
      player2.push(selectedCell);
    }
    selectedCell.played = true;
    selectedCell.simbol = player === 0 ? "x" : "o";
    if (player1.length + player2.length === 9) {
      alert("Game ended in a tie!");
      setGameEnded(true);
    }
    if (checkForWin(selectedCell)) {
      console.log(true);
    }
    console.log(selectedCell);

    setPlayer((player + 1) % 2);
  };

  const deselect = () => {
    board.forEach((row) => {
      row.forEach((cell) => {
        if (cell.selected) cell.selected = false;
      });
    });
  };

  const checkForWin = (cell: CellModel) => {
    const win_lines: Coordinates[][][] = [
      [
        [new Coordinates(0, 1), new Coordinates(0, 2)],
        [new Coordinates(1, 1), new Coordinates(2, 2)],
        [new Coordinates(1, 0), new Coordinates(2, 0)],
      ],
      [
        [new Coordinates(0, 0), new Coordinates(0, 2)],
        [new Coordinates(1, 1), new Coordinates(2, 1)],
      ],
      [
        [new Coordinates(0, 0), new Coordinates(0, 1)],
        [new Coordinates(1, 1), new Coordinates(2, 0)],
        [new Coordinates(1, 2), new Coordinates(2, 2)],
      ],
      [
        [new Coordinates(1, 1), new Coordinates(1, 0)],
        [new Coordinates(0, 0), new Coordinates(2, 0)],
      ],
      [
        [new Coordinates(1, 0), new Coordinates(1, 2)],
        [new Coordinates(0, 0), new Coordinates(2, 2)],
        [new Coordinates(0, 2), new Coordinates(2, 0)],
        [new Coordinates(0, 1), new Coordinates(2, 1)],
      ],
      [
        [new Coordinates(1, 0), new Coordinates(1, 1)],
        [new Coordinates(0, 2), new Coordinates(2, 2)],
      ],
      [
        [new Coordinates(2, 1), new Coordinates(2, 2)],
        [new Coordinates(0, 2), new Coordinates(1, 1)],
        [new Coordinates(0, 0), new Coordinates(1, 0)],
      ],
      [
        [new Coordinates(2, 0), new Coordinates(2, 2)],
        [new Coordinates(0, 1), new Coordinates(1, 1)],
      ],
      [
        [new Coordinates(2, 0), new Coordinates(2, 1)],
        [new Coordinates(0, 1), new Coordinates(1, 1)],
        [new Coordinates(0, 2), new Coordinates(1, 2)],
      ],
    ];
    let last_move: number = cell.coordinates.index();
    let player_simbol = board[cell.coordinates.x][cell.coordinates.y].simbol;
    for (let i = 0; i < win_lines[last_move].length; i++) {
      let line = win_lines[last_move][i].length;
      if (
        player_simbol ===
          board[win_lines[last_move][i][0].x][win_lines[last_move][i][0].y]
            .simbol &&
        player_simbol ===
          board[win_lines[last_move][i][1].x][win_lines[last_move][i][1].y]
            .simbol
      ) {
        return true;
      }
    }
    return false;
  };

  return (
    <div className="board">
      <h2>Turn: {player === 0 ? "Player 1" : "Player 2"}</h2>
      <div className="cells">
        {board.map((row, _key) => {
          return row.map((element, _key) => {
            return (
              <Cell
                celldata={element}
                setSelectedCell={setSelectedCell}
                player={player}
                selectedCell={selectedCell}
                deselect={deselect}
              />
            );
          });
        })}
      </div>

      <button onClick={handlePlayMove}> Play Move</button>
    </div>
  );
}
