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
  const [incorrect, setIncorrect] = useState({
    questWords: [],
    guessedWords: [],
  });
  const { selectedSquare, resetSelectedSquare } = useSelectedSquare();
  const [questionWord, setQuestionWord] = useState(cluster[0]);
  const [questionBank, setQuestionBank] = useState(cluster);
  const [gameOver, setGameOver] = useState(false);
  const [gridChar, setGridChar] = useState([]);

  useEffect(() => {
    const shuffledCluster = [...cluster];
    shuffle(shuffledCluster);
    setQuestionBank(shuffledCluster);
    setQuestionWord(shuffledCluster[0]);
  }, []);

  useEffect(() => {
    checkGuess();
  }, [selectedSquare]);

  useEffect(() => {
    return () => {
      setIncorrect({
        questWords: [],
        guessedWords: [],
      });
    };
  }, []);

  function getPrevious() {
    const currentIndex = questionBank.findIndex(
      (word) => word.Chinese === questionWord.Chinese
    );
    if (currentIndex > 0) {
      setQuestionWord(questionBank[currentIndex - 1]);
    }
  }

  function skipWord() {
    setIncorrect((prev) => ({
      ...prev,
      questWords: [...prev.questWords, questionWord],
    }));

    getNextWord();

    console.log("updated incorrect", incorrect);
  }

  function getNextWord() {
    const currentIndex = questionBank.findIndex(
      (word) => word.Chinese === questionWord.Chinese
    );
    if (currentIndex === -1 || currentIndex === questionBank.length - 1) {
      setGameOver(true);
      return;
    }

    setQuestionWord(questionBank[currentIndex + 1]);
    resetSelectedSquare();
    setIncorrect((prev) => ({
      ...prev,
      guessedWords: [],
    }));
  }

  function checkGuess() {
    if (gameOver) return;

    if (selectedSquare === questionWord.Chinese) {
      console.log("Correct!");
      getNextWord();
    } else if (selectedSquare) {
      console.log("Incorrect!");
      setIncorrect((prev) => {
        const updatedQuestWords = prev.questWords.some(
          (entry) => entry.Chinese === questionWord.Chinese
        )
          ? prev.questWords
          : [...prev.questWords, questionWord];

        const updatedGuessedWords = prev.guessedWords.includes(selectedSquare)
          ? prev.guessedWords
          : [...prev.guessedWords, selectedSquare];

        return {
          ...prev,
          questWords: updatedQuestWords,
          guessedWords: updatedGuessedWords,
        };
      });
    }
  }

  function handleGameOver() {
    setGameOver(!gameOver);
  }

  function handleRepeatDeck() {
    setGameOver(false);
    setQuestionBank(cluster);
    setQuestionWord(cluster[0]);
    setIncorrect({ questWords: [], guessedWords: [] });
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
              setIncorrect={setIncorrect}
            />
          </div>

          <WordController
            // getNextWord={getNextWord}
            skipWord={skipWord}
            getPrevious={getPrevious}
            handleGameOver={handleGameOver}
          />
        </>
      )}
    </div>
  );
}
