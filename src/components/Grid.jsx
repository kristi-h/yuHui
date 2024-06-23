import React from 'react'
import '../App.jsx'
import { GridSquare } from './GridSquare'
import { shuffle } from '../App'

export default function Grid({level, cluster, handleClick, currentWord }){
    const [gridChar, setGridChar] = React.useState([])

   React.useEffect(()=> {
    function setLevel(){
        if (level === "difficult"){
            setGridChar(cluster.slice(0, 15))
        } else if (level === "medium"){
            setGridChar(cluster.slice(0, 7))
        } else {
            setGridChar(cluster.slice(0, 3))
        }
    }
    setLevel()
   }, [level])

   React.useEffect(()=> {
    function randomizeGridChar(){
        setGridChar(prev => ({
            ...prev,
            currentWord
        }))
    shuffle(gridChar)
    }
    randomizeGridChar()
   },[currentWord])

    const createGrid = ()=> {
        return gridChar.map((index)=> (
            <GridSquare key={index} handleClick={handleClick} gridChar={gridChar} />
        ))
    }

    

    return(
        <div className='grid-container' id={level}>
           {createGrid}
        </div>
     
    )
}