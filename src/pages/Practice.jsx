import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Grid from "../components/Grid";
import { useSelectedSquare } from "../contexts/SelectedSquareContext";
import { useLocation } from "react-router-dom";
import { shuffle } from "./Home";

export default function Practice() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { level } = state;
  const [cluster] = useState(state.cluster);
  const { selectedSquare, resetSelectedSquare } = useSelectedSquare();
  const [questionWord, setQuestionWord] = useState(cluster[0]);
  const [questionBank, setQuestionBank] = useState(cluster);
  const [gameOver, setGameOver] = useState(false);
  const [checkmarkPosition, setCheckmarkPosition] = useState({
    x: "50%",
    y: "50%",
  });

  useEffect(() => {
    shuffle(cluster);
  }, [cluster, questionWord]);

  useEffect(() => {
    checkGuess();
  }, [selectedSquare]);

  useEffect(() => {
    if (gameOver) {
      console.log("Game over! Triggering animation...");
      startCheckmarkAnimation();
    }
    return () => clearInterval(checkmarkAnimationInterval);
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

  function handleGameOver() {
    setGameOver(!gameOver);
  }

  function handleRepeatDeck() {
    setGameOver(false);
    setQuestionBank(cluster);
    setQuestionWord(cluster[0]);
  }

  function handleSelectNewDeck() {
    navigate("/");
  }

  function generateRandomPosition() {
    const x = Math.random() * 80 + 10 + "%";
    const y = Math.random() * 80 + 10 + "%";
    return { x, y };
  }

  let checkmarkAnimationInterval;
  function startCheckmarkAnimation() {
    checkmarkAnimationInterval = setInterval(() => {
      setCheckmarkPosition(generateRandomPosition());
    }, 1000);
  }

  return (
    <div className="practice-container">
      {gameOver ? (
        <>
          <AnimatePresence>
            <motion.div
              key="checkmark-animation"
              className="grid-container flex items-center justify-center relative overflow-hidden"
            >
              <motion.span
                className="absolute text-green-500"
                style={{ fontSize: "12em" }}
                animate={{
                  x: checkmarkPosition.x,
                  y: checkmarkPosition.y,
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              >
                ✔️
              </motion.span>
              <motion.div
                className="congrats-message text-center text-5xl font-bold mt-8"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  scale: [1, 1.1, 1],
                  color: ["#ff0000", "#ff3333"],
                  textShadow: [
                    "0 0 5px rgba(255, 0, 0, 0.8)",
                    "0 0 15px rgba(255, 255, 255, 0.8)",
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 0.6,
                  ease: "easeInOut",
                }}
              >
                🎉 Congrats!! You completed deck successfully! 🎉
              </motion.div>
            </motion.div>
          </AnimatePresence>

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
            <button className="btn" onClick={handleGameOver}>
              Game over
            </button>
          </div>
        </>
      )}
    </div>
  );
}
