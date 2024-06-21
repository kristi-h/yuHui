import React from 'react'
import Grid from '../components/Grid'
import { GridSquare } from '../components/GridSquare'
import { shuffle } from '../App'

export default function Practice({cluster, level}){
    const [currentWord, setCurrentWord] = React.useState({
        English: "",
        Pinyin: "",
        Chinese: ""
      })

    React.useEffect(()=> {
        //shuffle cluster on start
        shuffle(cluster)
        setCurrentWord(cluster[0])
    }, [])

    function getNextWord() {
        console.log('next word')
        setCurrentWord(prev => prev + 1)
    }

    return(
        <div className='practice-container' >
            <h3> English Word </h3>
            <h3> Pinyin </h3>
            <div className='grid-container answer-container'>
                <GridSquare currentWord={currentWord} />
                <GridSquare currentWord={currentWord}/>
            </div>
            <br></br>
            <Grid level={level} currentWord={currentWord}/>
                <button className='btn prev-btn' onClick={getNextWord}>Previous</button>
                <button className='btn next-btn' onClick={getNextWord}>Next</button>
        </div>

    )
}