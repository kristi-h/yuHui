import React from "react";
import '../App.css'

export const GridSquare = ({handleClick}) => {
    return(
        <div className="grid-square" onClick={handleClick} value="1">报</div>
    )
}