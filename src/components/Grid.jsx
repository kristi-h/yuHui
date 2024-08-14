import React from 'react'
import { Link } from "react-router-dom";
import '../App.jsx'
import { GridSquare } from './GridSquare'
import { shuffle } from '../pages/Home'
import { useMemo, useState } from 'react';

export default function Grid({level, cluster, currentWord }){
    // let gridChar = useMemo(()=> getGrid(level, cluster), [level, currentWord])
    let gridChar = cluster.slice(0, 3)
    console.log("currentWord", currentWord)
    console.log("level", level)

    React.useEffect(()=> {
        function refreshGrid(){
            shuffle(cluster)
            getGrid()
        }
       refreshGrid()

    },[currentWord])

    function getGrid(){
        function setLevel(){
            console.log('level-cluster', cluster)
            if (level === "difficult"){
                gridChar = cluster.slice(0, 16)
            } else if (level === "medium"){
                gridChar = cluster.slice(0, 9)
            } else {
                level ==="easy"
                gridChar = cluster.slice(0, 4)
            }
        }
        setLevel()
        addCurrentWord()
    } 

    function addCurrentWord(){
        if (!gridChar.includes(currentWord)){
            gridChar.pop()
            gridChar.push(currentWord)
        } 
    }

    console.log('gridChar', gridChar)
    const createGrid = () => {
        return gridChar
          .filter(char => char)
          .map(
          (char, index) => {
            console.log(char,"char")
            return <GridSquare key={index} char={char} />
        })
      }
    
    return(
        <div className='grid-container' id={level}>
            {getGrid(level)}
           {gridChar && gridChar.length>0 && createGrid()}
        </div>
     
    )
}