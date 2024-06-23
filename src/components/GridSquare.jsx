import React from "react";
import '../App.css'


export const GridSquare = ({handleClick, index, gridChar}) => {
    
   
   
    return(
        <div className="grid-square" onClick={handleClick} value={index}>{gridChar.Chinese}</div>
    )
}