import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Grid from "../components/Grid";
import Scoreboard from "../components/Scoreboard";
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

  useEffect(() => {
    shuffle(cluster);
  }, [cluster, questionWord]);

  useEffect(() => {
    checkGuess();
  }, [selectedSquare]);

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

  function checkGuess() {
    if (gameOver) return;
    if (selectedSquare && questionWord.Chinese.includes(selectedSquare)) {
      console.log("correct!");
      getNextWord();
    } else {
      console.log("selectedSquare", selectedSquare);
      if (!incorrect.includes(questionWord)) {
        setIncorrect((prev) => {
          return [...prev, questionWord];
        });
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
        <div className="game-over-container">
          <h1 className="congrats-title">
            真棒! You successfully completed your deck!
          </h1>

          <AnimatePresence>
            <motion.div
              key="checkmark-animation"
              className="grid-container fixed inset-0 flex items-center justify-center"
              style={{
                width: "140%",
                height: "140%",
                maxWidth: "10em",
                maxHeight: "10em",
              }}
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.5, 1], rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              <motion.img
                src="/assets/congrats.gif"
                alt="Congratulations"
                style={{ width: "10em", height: "10em" }}
                className="gif"
              />
            </motion.div>
          </AnimatePresence>

          <Scoreboard incorrect={incorrect} />

          <div className="btns-container mt-8">
            <div className="flex justify-center mt-4 space-x-4">
              <button className="btn" onClick={handleRepeatDeck}>
                Repeat Deck
              </button>
              <button className="btn" onClick={handleSelectNewDeck}>
                Select New Deck
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="question-container">
            <h3 className="english-word">English: {questionWord.English}</h3>
            <h3 className="pinyin-word">Pinyin: {questionWord.Pinyin}</h3>
          </div>

          <div className="mb-8">
            <Grid level={level} cluster={cluster} currentWord={questionWord} />
          </div>

          <div className="btns-container">
            <button className="btn" onClick={getNextWord}>
              Previous
            </button>
            <button className="btn" onClick={getNextWord}>
              Next
            </button>
            <button className="btn" onClick={handleGameOver}>
              GameOver
            </button>
          </div>
        </>
      )}
    </div>
  );
}
