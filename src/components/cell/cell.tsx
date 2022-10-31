import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faO } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import "./cell.css";
import { CellModel } from "../../models/cell";

interface CellProps {
  celldata: CellModel;
  selectedCell: CellModel | null;
  setSelectedCell: (params: any) => any;
  player: number;
  deselect: () => void;
  gameEnded: boolean;
}

export default function Cell({
  celldata,
  setSelectedCell,
  player,
  selectedCell,
  deselect,
  gameEnded,
}: CellProps): JSX.Element {

  const selectCell = () => {
    if (gameEnded) return;
    if (celldata.played) return;
    deselect();
    !celldata.selected ? setSelectedCell(celldata) : setSelectedCell(null);
    celldata.selected = !celldata.selected;
  };
  useEffect(() => {}, [selectedCell]);
  return (
    <div
      className={celldata.selected ? "cell-div-selected" : "cell-div"}
      onClick={selectCell}
    >
      {!celldata.played ? (
        celldata.selected &&
        (player === 0 ? (
          <FontAwesomeIcon className="icons" icon={faX} />
        ) : (
          <FontAwesomeIcon className="icons" icon={faO} />
        ))
      ) : celldata.simbol === "x" ? (
        <FontAwesomeIcon className="icons" icon={faX} />
      ) : (
        <FontAwesomeIcon className="icons" icon={faO} />
      )}
    </div>
  );
}
