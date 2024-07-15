import React, { useMemo } from 'react'
import Grid from '../components/Grid'
import { SelectedSquareProvider } from '../contexts/SelectedSquareContext'
import { useLocation } from 'react-router-dom';
// import AnswerBlock from '../components/AnswerBlock'
import { shuffle } from './Home'

export default function Practice(){
    const {state} = useLocation()
    const {cluster, level} = state
    let { selectedSquare } = useSelectedSquare()
    selectedSquare = useMemo(checkGuess, selectedSquare)
    const [questionWord, setQuestionWord] = React.useState()
    const [displayedAnswer, setDisplayedAnswer] = React.useState()
    
    React.useEffect(()=> {
        //shuffle cluster on start
        shuffle(cluster)
        setQuestionWord(cluster[0])
    }, [cluster])
    console.log('after-shuffle: cluster', cluster)

    function getNextWord() {
        console.log('next word')
        setQuestionWord(prev =>  cluster[prev + 1])
    }

    function checkGuess(str) {
        //check if guess matches any one char of the currentWord
        if (selectedSquare === questionWord) {
            console.log("completedWord")         
        }
        else if (questionWord.Chinese.includes) {
            const keys = Object.keys(displayedAnswer)
            const index = questionWord.Chinese.indexOf(str)
            setDisplayedAnswer(prev => ({
                ...prev, 
                [keys[index]]: str
        }))
            //add another condition for enabling next button when word completes
        }
    }

    return(
        <SelectedSquareProvider>
            <div className='practice-container' >
                {/* {cluster && cluster[0]} */}
                    <h3> English Word: {cluster[0].English} </h3>
                    <h3> Pinyin: {cluster[0].Pinyin} </h3>

                {/* <AnswerBlock currentWord={currentWord}/> */}
                <br></br>
                {/* <Grid level={level} cluster={cluster} handleSquareClick={handleSquareClick} currentWord={currentWord} /> */}
                <Grid level={level} cluster={cluster} currentWord={questionWord} />
                    <button className='btn prev-btn' onClick={getNextWord}>Previous</button>
                    <button className='btn next-btn' onClick={getNextWord}>Next</button>
            </div>
        </SelectedSquareProvider>
    )
}