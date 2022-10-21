import React from "react";
import './room.css';
import {useParams} from 'react-router-dom'
import { Board } from "../../components/board/board";


export function Room()
{

    const id = useParams();
    
    return(<div>
        <h1>ROOM: </h1>

        <Board />
        
    </div>)
}