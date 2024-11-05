import React, { useMemo } from "react";
import Grid from "../components/Grid";
import {
  SelectedSquareProvider,
  useSelectedSquare,
} from "../contexts/SelectedSquareContext";
import { useLocation } from "react-router-dom";
// import AnswerBlock from '../components/AnswerBlock'
import { shuffle } from "./Home";

export default function Practice() {
  //from homepage
  const { state } = useLocation();
  const { cluster, level } = state;

  //from context
  const { selectedSquare } = useSelectedSquare();

  //this display
  const [questionWord, setQuestionWord] = React.useState(cluster[0]);
  const [displayedAnswer, setDisplayedAnswer] = React.useState({});

  React.useEffect(() => {
    //shuffle cluster on start
    shuffle(cluster);
  }, [cluster]);
  console.log("questionWord", questionWord);

  React.useEffect(() => {
    //run check every time new square is clicked
    checkGuess();
  }, [selectedSquare]);

  function getNextWord() {
    setQuestionWord((prevWord) => {
      const currentIndex = cluster.indexOf(prevWord);
      return cluster[(currentIndex + 1) % cluster.length];
    });
  }

  function checkGuess(str) {
    // console.log('selectedSquare', selectedSquare)
    //check if guess matches any one char of the currentWord
    console.log("check guess");
    if (questionWord.Chinese.includes(selectedSquare)) {
      const keys = Object.keys(displayedAnswer);
      const index = questionWord.Chinese.indexOf(selectedSquare);
      setDisplayedAnswer((prev) => ({
        ...prev,
        [keys[index]]: selectedSquare,
      }));
      //add another condition for enabling next button when word completes
    } else {
      console.log("wrong character");
    }
  }

  return (
    <div className="practice-container">
      {/* {cluster && cluster[0]} */}
      <h3> English Word: {questionWord.English} </h3>
      <h3> Pinyin: {questionWord.Pinyin} </h3>

      {/* <AnswerBlock questionWord={questionWord} displayedAnswer={displayedAnswer} /> */}
      <br></br>

      <Grid level={level} cluster={cluster} currentWord={questionWord} />
      <button className="btn prev-btn" onClick={getNextWord}>
        Previous
      </button>
      <button className="btn next-btn" onClick={getNextWord}>
        Next
      </button>
    </div>
  );
}
