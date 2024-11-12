import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom"; // For navigation
import Grid from "../components/Grid";
import { useSelectedSquare } from "../contexts/SelectedSquareContext";
import { useLocation } from "react-router-dom";
import { shuffle } from "./Home";

export default function Practice() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { level } = state;
  const [cluster, setCluster] = useState(state.cluster);
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

  useEffect(() => {
    if (gameOver) {
      console.log("Game over! Triggering animation...");
    }
  }, [gameOver]);

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
      console.log("wrong character");
    }
  }

  function handleRepeatDeck() {
    setGameOver(false);
    setQuestionBank(cluster);
    setQuestionWord(cluster[0]);
  }

  function handleSelectNewDeck() {
    navigate("/");
  }

  return (
    <div className="practice-container">
      {gameOver ? (
        <>
          <AnimatePresence>
            <motion.div
              key="checkmark-animation"
              className="grid-container flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.5, 1], rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              <motion.span
                className="text-green-500 text-9xl"
                style={{ fontSize: "10em" }}
              >
                ✔️
              </motion.span>
            </motion.div>
          </AnimatePresence>

          <div className="alert-container mt-8">
            <h2 className="text-xl font-bold text-center">Deck Complete!</h2>
            <div className="flex justify-center mt-4 space-x-4">
              <button className="btn" onClick={handleRepeatDeck}>
                Repeat Deck
              </button>
              <button className="btn" onClick={handleSelectNewDeck}>
                Select New Deck
              </button>
            </div>
          </div>
        </>
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
          </div>
        </>
      )}
    </div>
  );
}
