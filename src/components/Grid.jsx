import React from 'react'
import '../App.jsx'
import { GridSquare } from './GridSquare'
import { shuffle } from '../App'

export default function Grid({level, cluster, handleClick, currentWord }){
    const [gridChar, setGridChar] = React.useState([])
    console.log('gridChar', gridChar)

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
   console.log('gridChar', gridChar)

   React.useEffect(()=> {
    function randomizeGridChar(){
        setGridChar(prev => ({
            ...prev, 
            currentWord
        })
        )
        shuffle(gridChar)
    }
    
    randomizeGridChar()
   },[currentWord])
   console.log('gridChar', gridChar)

    console.log('gridChar', gridChar)
    const createGrid = ()=> (
        gridChar.map((char, index)=> (
            <div key={index} >Testing</div>
            // <GridSquare key={index} handleClick={handleClick} char={char} />
    )))
    
    return(
        <div className='grid-container' id={level}>
           {gridChar && gridChar.length>0 && createGrid()}
        </div>
     
    )
}