import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "../components/Grid";
import GameOver from "../components/GameOver";
import Question from "../components/Question";
import WordController from "../components/WordController";
import { useSelectedSquare } from "../contexts/SelectedSquareContext";
import { useLocation } from "react-router-dom";
import { shuffle } from "./Home";

export default function Practice() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { level } = state;
  const [cluster] = useState(state.cluster);
  const [incorrect, setIncorrect] = useState([]);
  const { selectedSquare, resetSelectedSquare } = useSelectedSquare();
  const [questionWord, setQuestionWord] = useState(cluster[0]);
  const [questionBank, setQuestionBank] = useState(cluster);
  const [gameOver, setGameOver] = useState(false);
  const [gridChar, setGridChar] = useState([]);

  useEffect(() => {
    shuffle(cluster);
  }, [cluster, questionWord]);

  useEffect(() => {
    checkGuess();
  }, [selectedSquare]);

  useEffect(() => {
    return () => {
      setIncorrect([]);
    };
  }, []);

  function getNextWord() {
    const wordsLeft = questionBank.filter(
      (word) => word.Chinese !== questionWord.Chinese
    );

    if (wordsLeft.length < 1) {
      setGameOver(true);
      return;
    }

    setQuestionBank(wordsLeft);
    const randWord = wordsLeft[Math.floor(Math.random() * wordsLeft.length)];
    setQuestionWord(randWord);
    resetSelectedSquare();
  }

  // const isSquareIncorrect = (square) => {
  //   return incorrect.some((entry) => entry.guessedWord === square.Chinese);
  // };

  // function checkGuess() {
  //   if (gameOver) return;
  //   if (selectedSquare && questionWord.Chinese.includes(selectedSquare)) {
  //     console.log("correct!");
  //     getNextWord();
  //   } else {
  //     console.log("selectedSquare", selectedSquare);
  //     isSquareIncorrect();
  //     if (
  //       !incorrect.some(
  //         (word) => word.questWord.Chinese === questionWord.Chinese
  //       )
  //     ) {
  //       setIncorrect((prev) => [
  //         ...prev,
  //         { questWord: questionWord, guessedWord: selectedSquare },
  //       ]);
  //     }
  //   }
  // }

  function checkGuess() {
    if (gameOver) return;

    if (selectedSquare === questionWord.Chinese) {
      console.log("correct!");
      getNextWord();
    } else {
      console.log("incorrect!");
      // isSquareIncorrect(selectedSquare);
      if (
        !incorrect.some(
          (entry) => entry.questWord.Chinese === questionWord.Chinese
        )
      ) {
        setIncorrect((prev) => [
          ...prev,
          { questWord: questionWord, guessedWord: selectedSquare },
        ]);
      }
    }
  }

  function handleGameOver() {
    setGameOver(!gameOver);
  }

  function handleRepeatDeck() {
    setGameOver(false);
    setQuestionBank(cluster);
    setQuestionWord(cluster[0]);
    setIncorrect([]);
  }

  function handleSelectNewDeck() {
    navigate("/");
    setIncorrect([]);
  }

  return (
    <div className="practice-container">
      {gameOver ? (
        <GameOver
          cluster={cluster}
          incorrect={incorrect}
          handleRepeatDeck={handleRepeatDeck}
          handleSelectNewDeck={handleSelectNewDeck}
          gameOver={gameOver}
          gridChar={gridChar}
        />
      ) : (
        <>
          <Question questionWord={questionWord} />

          <div className="mb-8">
            <Grid
              level={level}
              cluster={cluster}
              currentWord={questionWord}
              gridChar={gridChar}
              setGridChar={setGridChar}
              incorrect={incorrect}
            />
          </div>

          <WordController
            getNextWord={getNextWord}
            handleGameOver={handleGameOver}
          />
        </>
      )}
    </div>
  );
}
