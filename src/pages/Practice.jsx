import React from 'react'
import Grid from '../components/Grid'
import Answer from '../components/Answer'
import { shuffle } from '../App'

export default function Practice({cluster, level}){
    const [currentWord, setCurrentWord] = React.useState({})

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
            <h3> English Word: {cluster[0].English} </h3>
            <h3> Pinyin: {cluster[0].Pinyin} </h3>
            <Answer currentWord={currentWord}/>
            <br></br>
            <Grid level={level} cluster={cluster} currentWord={currentWord}/>
                <button className='btn prev-btn' onClick={getNextWord}>Previous</button>
                <button className='btn next-btn' onClick={getNextWord}>Next</button>
        </div>

    )
}