import React from "react";
import '../App.css'
import { useSelectedSquare } from '../contexts/SelectedSquareContext'


export const GridSquare = ({char}) => {
    const { handleClick } = useSelectedSquare()
   
    return(
        <div>
            <button className="grid-square" onClick={(e) => handleClick(e)} value={char.Chinese} >{char.Chinese}</button>
        </div>
    )
    
}