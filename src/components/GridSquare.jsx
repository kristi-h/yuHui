import React from "react";
import '../App.css'
import { useSelectedSquare } from '../contexts/SelectedSquareContext'


export const GridSquare = ({handleClick, index, char}) => {
    const { selectedSquare } = useSelectedSquare()
   
    return(
        <div>
            <button className="grid-square" onClick={() => handleClick()} value={char.Chinese} >{char.Chinese}</button>
        </div>
    )
    
}