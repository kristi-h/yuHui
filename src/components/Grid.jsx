import React from 'react'
import { Link } from "react-router-dom";
import '../App.jsx'
import { GridSquare } from './GridSquare'
import { shuffle } from '../pages/Home'
import { useMemo, useState } from 'react';

export default function Grid({level, cluster, handleClick, currentWord }){
    // let gridChar = useMemo(()=> getGrid(level, cluster), [level, currentWord])
    let gridChar = cluster.slice(0, 3)
    console.log("currentWord", currentWord)

    function getGrid(){
        function setLevel(){
            console.log('level-cluster', cluster)
            if (level === "difficult"){
                gridChar = cluster.slice(0, 15)
            } else if (level === "medium"){
                gridChar = cluster.slice(0, 7)
            } else {
                level ==="easy"
                gridChar = cluster.slice(0, 3)
            }
        }
        setLevel()
        randomizeGridChar()
    } 

    function randomizeGridChar(){
        gridChar.push(currentWord)
        shuffle(gridChar)
    }

    console.log('gridChar', gridChar)
    const createGrid = ()=> (
        gridChar.map((char, index)=> (
            <GridSquare key={index} handleClick={handleClick} char={char} />
    )))
    
    return(
        <div className='grid-container' id="medium">
            {getGrid(level)}
           {gridChar && gridChar.length>0 && createGrid()}
        </div>
     
    )
}