import React from "react";
import Cell  from "../cell/cell";
import "./board.css" 

export default function Board()
{

    var matrix: String[][] = [["", "", ""],["", "", ""],["", "", ""]]

    return(<div className="board">
        {matrix.map((row)=> {
            return row.map((element)=>
            {
                console.log("nestp")
                return <Cell/>
            })
        })}

    </div>)
}