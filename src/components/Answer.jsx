import React from 'react'
import { GridSquare } from './GridSquare'
import '../App.css'

export default function Answer({currentWord}) {
    return(
        <div className='grid-container answer-container'>
            <GridSquare currentWord={currentWord} />
            <GridSquare currentWord={currentWord}/>
        </div>
    )
}