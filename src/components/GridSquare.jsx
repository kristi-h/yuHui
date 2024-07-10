import React from "react";
import '../App.css'


export const GridSquare = ({handleClick, index, char}) => {
    console.log("char", char)
    console.log('handleClick', handleClick)
   
    return(
        <button className="grid-square" onClick={() => handleClick()} value={char.Chinese} >{char.Chinese}</button>
    )
    
}