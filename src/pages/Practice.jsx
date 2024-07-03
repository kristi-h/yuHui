import React from 'react'
import Grid from '../components/Grid'
import { useLocation } from 'react-router-dom';
// import AnswerBlock from '../components/AnswerBlock'
import { shuffle } from './Home'

export default function Practice(){
    const {state: _cluster, level} = useLocation()
    const {cluster} = _cluster
    
    
    const [currentWord, setCurrentWord] = React.useState({})
    //answer is one char in currentWord.Chinese
    const [answer, setAnswer] = React.useState({
        first_char: "",
        second_char: "",
        third_char: "",
        isComplete: false
    })

    React.useEffect(()=> {
        //shuffle cluster on start
        shuffle(cluster)
        setCurrentWord(cluster[0])
    }, [cluster])
    console.log('after-shuffle: cluster', cluster)

    function getNextWord() {
        console.log('next word')
        setCurrentWord(prev =>  cluster[prev + 1])
    }

    function handleClick(e) {
        const selected = e.target.value
        checkGuess(selected)
    }

    function checkGuess(str) {
        //check if guess matches any one char of the currentWord
        if (currentWord.Chinese.includes) {
            const keys = Object.keys(answer)
            const index = currentWord.Chinese.indexOf(str)
            setAnswer(prev => ({
                ...prev, 
                [keys[index]]: str
        }))
            //add another condition for enabling next button when word completes
        }
    }

    return(
        <div className='practice-container' >
            {/* {cluster && cluster[0]} */}
                <h3> English Word: {cluster[0].English} </h3>
                <h3> Pinyin: {cluster[0].Pinyin} </h3>

            {/* <AnswerBlock currentWord={currentWord}/> */}
            <br></br>
            <Grid level={level} cluster={cluster} handleClick={handleClick} currentWord={currentWord}/>
                <button className='btn prev-btn' onClick={getNextWord}>Previous</button>
                <button className='btn next-btn' onClick={getNextWord}>Next</button>
        </div>

    )
}