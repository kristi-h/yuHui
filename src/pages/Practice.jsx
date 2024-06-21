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

    return(
        <>
            <h3> English Word </h3>
            <h3> Pinyin </h3>
            <div className='grid-container answer-container'>
                <GridSquare />
                <GridSquare />
            </div>
            <br></br>
            <Grid level={level}/>
        </>

    )
}