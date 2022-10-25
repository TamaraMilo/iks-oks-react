import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faO } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { Coordinates } from "../../dtos/coordinates";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import "./cell.css";
import { CellModel } from "../../dtos/cell";

interface CellProps {
  celldata: CellModel;
  selectedCell: CellModel | null;
  setSelectedCell: (params: any) => any;
  player: number;
  deselect: () => void;
}

export default function Cell({
  celldata,
  setSelectedCell,
  player,
  selectedCell,
  deselect
}: CellProps): JSX.Element {
  const [selected, setSelected] = useState(false);
  const [played, setPlayed] = useState(false);
  const selectCell = () => {
    
    if(celldata.played) return;
    deselect();
 
    
    !celldata.selected ? setSelectedCell(celldata) : setSelectedCell(null);
    console.log(celldata.selected)
    celldata.selected = !celldata.selected;
  };
  useEffect(()=>{},[selectedCell])
  return (
    <div
      className={celldata.selected ? "cell-div-selected" : "cell-div"}
      onClick={selectCell}
    >
      {!celldata.played ? (celldata.selected && (player === 0 ?  <FontAwesomeIcon className="icons" icon={faX} />:<FontAwesomeIcon className="icons" icon={faO} /> ))
      :
      (celldata.simbol === "x" ? <FontAwesomeIcon className="icons" icon={faX} /> :  <FontAwesomeIcon className="icons" icon={faO} />)}
    
    </div>
  );
}
