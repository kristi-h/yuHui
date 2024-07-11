import React from 'react'
import Grid from '../components/Grid'
import { SelectedSquareProvider } from '../contexts/SelectedSquareContext'
import { useLocation } from 'react-router-dom';
// import AnswerBlock from '../components/AnswerBlock'
import { shuffle } from './Home'

export default function Practice(){
    const {state} = useLocation()
    const {cluster, level} = state
    
    //question word
    const [currentWord, setCurrentWord] = React.useState({})

    //current answer
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

    function handleSquareClick(e) {
        console.log('e', e)
        const selected = e.currentTarget.value
        // console.log("selected", selected)
        setSquare(selected)
        checkGuess(selected)
    }
    console.log("square", square)

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
        <SelectedSquareProvider>
            <div className='practice-container' >
                {/* {cluster && cluster[0]} */}
                    <h3> English Word: {cluster[0].English} </h3>
                    <h3> Pinyin: {cluster[0].Pinyin} </h3>

                {/* <AnswerBlock currentWord={currentWord}/> */}
                <br></br>
                <Grid level={level} cluster={cluster} handleSquareClick={handleSquareClick} currentWord={currentWord} />
                    <button className='btn prev-btn' onClick={getNextWord}>Previous</button>
                    <button className='btn next-btn' onClick={getNextWord}>Next</button>
            </div>
        </SelectedSquareProvider>
    )
}