import React from "react";
import './room.css';
import {useParams} from  "react-router-dom"
import Board  from "../../components/board/board";


export default function Room()
{

    
    
    return(<div>

        <h1>ROOM: </h1>
        <Board />
        
    </div>)
}