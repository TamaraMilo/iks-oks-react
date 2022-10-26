
import React from "react"
import "./popup.css"

interface PopupProps{
    content: JSX.Element;
    handleClose: () => void;
}



export default function Popup({content,handleClose}:PopupProps)
{
    return(<div className="popup-box">
        <div className="box">
            <span className="close-icon" onClick={handleClose}></span>
            {content}
        </div>
    </div>)
}