import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Grid from "../components/Grid";
import { useSelectedSquare } from "../contexts/SelectedSquareContext";
import { useLocation } from "react-router-dom";
import { shuffle } from "./Home";

export default function Practice() {
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

  return (
    <div className="practice-container">
      <h3 className="question-word">
        English Word:{" "}
        <span className="font-serif text-[#7a3e19]">
          {questionWord.English}
        </span>
      </h3>
      <h3 className="question-word">
        Pinyin: <span>{questionWord.Pinyin}</span>
      </h3>

      <div className="mb-8">
        <Grid level={level} cluster={cluster} currentWord={questionWord} />
      </div>

      <div className="flex justify-around">
        <button className="previous" onClick={getNextWord}>
          Previous
        </button>
        <button className="next" onClick={getNextWord}>
          Next
        </button>
      </div>

      {/* Animation for Game Over */}
      <AnimatePresence>
        {gameOver && (
          <motion.div
            key="game-over-animation" // Unique key for rerender
            className="fixed inset-0 flex items-center justify-center bg-transparent"
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.5, 0], opacity: [1, 1, 0] }}
            transition={{ duration: 2 }}
            exit={{ opacity: 0 }}
          >
            {/* Glowing Sphere */}
            <motion.div
              className="absolute bg-yellow-400 rounded-full shadow-[0_0_30px_rgba(255,215,0,0.8)]"
              style={{ width: 150, height: 150 }}
              initial={{ opacity: 0 }}
              animate={{ scale: [1, 1.3, 0], opacity: [1, 0.7, 0] }}
              transition={{ duration: 1 }}
            />

            {/* Dragon Reveal */}
            <motion.div
              className="text-6xl font-bold text-red-700"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 1, duration: 3 }}
            >
              🐉 干得好蚱蜢
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
