import React from 'react'
import Grid from '../components/Grid'
import { GridSquare } from '../components/GridSquare'
// import { shuffle } from './Home'

export default function Practice({cluster, level}){
    const [word, setWord] = React.useState({
        english: "",
        pinyin: "",
        traditional: ""
      })

    // React.useEffect(()=> {
    //     //shuffle cluster on start
    //     shuffle(cluster)
    // }, [])

    function getNextWord() {
        console.log('next word')
    }

    return(
        <div className='practice-container' >
            <h3> English Word </h3>
            <h3> Pinyin </h3>
            <div className='grid-container answer-container'>
                <GridSquare />
                <GridSquare />
            </div>
            <br></br>
            <Grid level={level}/>
                <button className='btn prev-btn' onClick={getNextWord}>Previous</button>
                <button className='btn next-btn' onClick={getNextWord}>Next</button>
        </div>

    )
}