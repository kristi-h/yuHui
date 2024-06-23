// import React from 'react'
// import { GridSquare } from './GridSquare'
// import '../App.css'

// export default function AnswerBlock({currentWord, answer}) {

//     React.useEffect(()=> {
//         const createAnswerBlock = ()=> {
//             return currentWord.Chinese.map((word, index)=> (
//                 <div key={index} className='answer-container' id={`${currentWord.Chinese.length > 2}? "three" : ${currentWord.Chinese.length > 1}? "two" : "one" `}></div>
//             ))
//         }
//         createAnswerBlock()
//     },[currentWord])

//     return(
//         <>
//             {/* {createAnswerBlock} */}
//         </>
//     )
// }