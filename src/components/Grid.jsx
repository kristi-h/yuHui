import React from 'react'
import { Link } from "react-router-dom";
import '../App.jsx'
import { GridSquare } from './GridSquare'
import { shuffle } from '../pages/Home'
import { useMemo, useState } from 'react';

export default function Grid({level, cluster, handleClick, currentWord }){
    // let gridChar = useMemo(()=> getGrid(level, cluster), [level, currentWord])
    let gridChar = cluster.slice(0, 2)

    function getGrid(){
        function setLevel(){
            console.log('level-cluster', cluster)
            if (level === "difficult"){
                gridChar = cluster.slice(0, 14)
            } else if (level === "medium"){
                gridChar = cluster.slice(0, 6)
            } else {
                gridChar = cluster.slice(0, 2)
            }
        }
        setLevel
        randomizeGridChar()
    }  

    function randomizeGridChar(){
        gridChar.push(currentWord)
        shuffle(gridChar)
    }
//    React.useEffect(()=> {
//     function setLevel(){
//         console.log('level-cluster', cluster)
//         if (level === "difficult"){
//             setGridChar(cluster.slice(0, 14))
//         } else if (level === "medium"){
//             setGridChar(cluster.slice(0, 6))
//         } else {
//             setGridChar(cluster.slice(0, 2))
//         }
//     }
//     setLevel()
//    }, [level])
//    console.log('gridChar', gridChar)
//    console.log('grid-cluster', cluster)

// React.useEffect(()=> {
//     function randomizeGridChar(){
//         setGridChar(gridChar, currentWord)
//         shuffle(gridChar)
//     }
    
//     randomizeGridChar()
//    },[currentWord])

    console.log('gridChar', gridChar)
    const createGrid = ()=> (
        gridChar.map((char, index)=> (
            // <>
            //     <div key={index} >Testing</div>
            //     <Link to='/'>Go back home</Link>
            // </>
            <GridSquare key={index} handleClick={handleClick} char={char} />
    )))
    
    return(
        <div className='grid-container' id={level}>
           {gridChar && gridChar.length>0 && createGrid()}
        </div>
     
    )
}