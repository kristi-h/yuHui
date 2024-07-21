import React from 'react'
import '../App.css'

export default function AnswerBlock({questionWord, displayedAnswer}) {

    // const createAnswerBlock = ()=> {
    //     // console.log('questionWord', questionWord)
    //     return questionWord.Chinese.map((word, index)=> (
    //         <div key={index} className='answer-container' id={`${questionWord.Chinese.length > 2}? "three" : ${questionWord.Chinese.length > 1}? "two" : "one" `}></div>
    //     ))
    // }

    return(
        <>
            {/* {createAnswerBlock} */}
            <div>Answer Block</div>
        </>
    )
}