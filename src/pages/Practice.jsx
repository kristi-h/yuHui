import React, { useMemo } from "react";
import Grid from "../components/Grid";
import { useSelectedSquare } from "../contexts/SelectedSquareContext";
import { useLocation } from "react-router-dom";
// import AnswerBlock from '../components/AnswerBlock'
import { shuffle } from "./Home";

export default function Practice() {
  //from homepage
  const { state } = useLocation();
  const { level } = state;
  const [cluster, setCluster] = React.useState(state.cluster);

  //from context
  const { selectedSquare } = useSelectedSquare();

  //this display
  const [questionWord, setQuestionWord] = React.useState(cluster[0]);
  const [questionBank, setQuestionBank] = React.useState(cluster);

  //game log
  const [gameOver, setGameOver] = React.useState(false);

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
    if (questionBank.length < 1) {
      setGameOver(false);
      //round over animation
    }
    const wordsLeft = questionBank.filter((word) => word != questionWord);
    setQuestionBank(wordsLeft);
    const randWord =
      questionBank[Math.floor(Math.random() * questionBank.length)];
    setQuestionWord(randWord);
    return questionWord;
  }

  function checkGuess(str) {
    if (questionWord.Chinese.includes(selectedSquare)) {
      console.log("correct!");
      // setAnswered((prev) => prev, selectedSquare);
      getNextWord();
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
