import React from "react";
import '../App.css'


export const GridSquare = ({handleClick, index, char}) => {
    
   
   
    return(
        <div className="grid-square" onClick={handleClick} value={index}>{char.Chinese}</div>
    )
}