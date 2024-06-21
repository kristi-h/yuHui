import React from 'react'
import App from '../App.jsx'
import { GridSquare } from './GridSquare'

export default function Grid({level, currentWord }){
    const [gridChar, setGridChar] = React.useState([])

    // function setLevel(){
    //     if (level === "difficult"){
    //         setGridChar(gridChar.length === 16)
    //     } else if (level === "medium"){
    //         setGridChar(gridChar.length === 8)
    //     } else {
    //         setGridChar(gridChar.length === 4)
    //     }
    // }

    // function createGrid(){
    //     gridChar.map(word=> (
    //         <GridSquare handleClick={handleClick} />{word.Chinese}
    //     ))
    // }

    // function handleClick(e) {
    //     const selected = e.target.value
    //     checkAnswer(selected)
    // }

    // function checkAnswer(string) {
    //     if (string === currentWord.Chinese) {
    //         setAnswer(...prev => (
    //             ...prev, 
    //             string
    //         ))
    //     }
    // }

    return(
        <div className='grid-container' id='difficult'>
            {/* <GridSquare handleClick={handleClick}/> */}
            <GridSquare />
            <GridSquare />
            <GridSquare />
            <GridSquare />
            <GridSquare />
            <GridSquare />
            <GridSquare />
            <GridSquare />
            <GridSquare />
            <GridSquare />
            <GridSquare />
            <GridSquare />
            <GridSquare />
            <GridSquare />
            <GridSquare />
        </div>
     
    )
}