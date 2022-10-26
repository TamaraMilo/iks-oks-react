import React, { useState } from "react";
import { Coordinates } from "../../models/coordinates";
  import {CellModel} from "../../models/cell";
import Cell from "../cell/cell";
import "./board.css";
import Popup from "../popup/popup";
import { GameState } from "../../gamestate";

export default function Board() {
  const [selectedCell, setSelectedCell] = useState<CellModel | null>(null);
  const [player, setPlayer] = useState(0);
  const [noMoves, setNoMoves] = useState(0);
  const [gameState, setGameState] = useState(GameState.InProgress);
  const [tiePopUp, setTiePopup] = useState(false);
  const [winPopup, setWinPopup] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);

  const [board, setBoard] = useState<CellModel[][]>([
    [
      {
        coordinates: { x: 0, y: 0 },
        played: false,
        simbol: "",
        selected: false,
      },
      {
        coordinates: { x: 0, y: 1 },
        played: false,
        simbol: "",
        selected: false,
      },
      {
        coordinates: { x: 0, y: 2 },
        played: false,
        simbol: "",
        selected: false,
      },
    ],
    [
      {
        coordinates: { x: 1, y: 0 },
        played: false,
        simbol: "",
        selected: false,
      },
      {
        coordinates: { x: 1, y: 1 },
        played: false,
        simbol: "",
        selected:false,
      },
      {
        coordinates: { x: 1, y: 2 },
        played: false,
        simbol: "",
        selected: false,
      },
    ],
    [
      {
        coordinates: { x: 2, y: 0 },
        played: false,
        simbol: "",
        selected: false,
      },
      {
        coordinates: { x: 2, y: 1 },
        played: false,
        simbol: "",
        selected: false,
      },
      {
        coordinates: { x: 2, y: 2 },
        played: false,
        simbol: "",
        selected: false,
      },
    ],
  ]);

  const toggleTiePopup = () => {
    setTiePopup(!tiePopUp);
  };
  const toggleWinPopup = () => {
    setWinPopup(!winPopup);
  };
  const handlePlayMove = () => {
    if (!GameState.InProgress) {
      return;
    }
    if (!selectedCell) {
      alert("You need to select cell");
      return;
    }

    selectedCell.played = true;
    selectedCell.simbol = player === 0 ? "x" : "o";
    setNoMoves(noMoves + 1);
    if (checkForWin(selectedCell)) {
      setGameState(GameState.Won);
      toggleWinPopup();
      setGameEnded(true);
      console.log(true);
      return;
    }
    if (noMoves === 8 && gameState === GameState.InProgress) {
      setGameState(GameState.Tie);
      setGameEnded(true);
      toggleTiePopup();
      return;
    }
    setPlayer((player + 1) % 2);
    setSelectedCell(null);
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
        [{x:0, y:1}, {x:0, y:2}],
        [{x:1, y:1}, {x:2,y:2}],
        [{x:1,y:0}, {x:2,y:0}],
      ],
      [
        [{x:0,y:0}, {x:0,y:2}],
        [{x:1,y:1}, {x:2,y:1}],
      ],
      [
        [{x:0,y:0}, {x:0,y:1}],
        [{x:1,y:1}, {x:2,y:0}],
        [{x:1,y:2},{x:2,y:2}],
      ],
      [
        [{x:1,y:1}, {x:1,y:2}],
        [{x:0,y:0}, {x:2,y:0}],
      ],
      [
        [{x:1,y:0}, {x:1,y:2}],
        [{x:0,y:0}, {x:2,y:2}],
        [{x:0,y:2}, {x:2,y:0}],
        [{x:0,y:1}, {x:2,y:1}],
      ],
      [
        [{x:1,y:0}, {x:1,y:1}],
        [{x:0,y:2}, {x:2,y:2}],
      ],
      [
        [{x:2,y:1}, {x:2,y:2}],
        [{x:0,y:2}, {x:1,y:1}],
        [{x:0,y:0}, {x:1,y:0}],
      ],
      [
        [{x:2,y:0}, {x:2,y:2}],
        [{x:0,y:1}, {x:1,y:1}],
      ],
      [
        [{x:2,y:0}, {x:2,y:1}],
        [{x:0,y:1}, {x:1,y:1}],
        [{x:0,y:2}, {x:1,y:2}],
      ],
    ];
    let last_move: number = cell.coordinates!.x * 3+ cell.coordinates!.y;
    let player_simbol = board[cell.coordinates!.x][cell.coordinates!.y].simbol;
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
  const restartGame = () => {
    board.forEach((row) => {
      row.forEach((cell) => {
        cell.played = false;
        cell.selected = false;
        cell.simbol = "";
      });
    });
    setSelectedCell(null);
    setPlayer(0);
    setNoMoves(0);
    setGameState(GameState.InProgress);
    setGameEnded(false);
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
                gameEnded={gameEnded}
              />
            );
          });
        })}
      </div>

      {!gameEnded && <button onClick={handlePlayMove}> Play Move</button>}
      {gameEnded && <button onClick={restartGame}>Restart game</button>}
      {tiePopUp && (
        <Popup
          content={
            <>
              <h1>Game ended in a tie!</h1>
            </>
          }
          handleClose={toggleTiePopup}
        />
      )}
      {winPopup && (
        <Popup
          content={
            <>
              <h1>Player: {player + 1} won!</h1>
            </>
          }
          handleClose={toggleWinPopup}
        />
      )}
    </div>
  );
}
