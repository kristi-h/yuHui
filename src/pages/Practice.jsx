import React, { useEffect, useState } from "react";
import Grid from "../components/Grid";
import { useSelectedSquare } from "../contexts/SelectedSquareContext";
import { useLocation } from "react-router-dom";
import { shuffle } from "./Home";

export default function Practice() {
  //from homepage
  const { state } = useLocation();
  const { level } = state;
  const [cluster, setCluster] = useState(state.cluster);

  //from context
  const { selectedSquare } = useSelectedSquare();

  // Display states
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
      (word) => word !== questionWord.Chinese
    );
    setQuestionBank(wordsLeft);
    if (wordsLeft.length < 1) {
      setGameOver(true);
      console.log("You finished the round, congrats!");
      return;
    }
    const randWord = wordsLeft[Math.floor(Math.random() * wordsLeft.length)];
    setQuestionWord(randWord);
  }

  function checkGuess() {
    if (questionWord.Chinese.includes(selectedSquare)) {
      console.log("correct!");
      getNextWord();
    } else {
      console.log("wrong character");
    }
  }

  return (
    <div className="practice-container flex flex-col items-center bg-gradient-to-b from-[#f8f3e7] to-[#e2d7c3] min-h-screen py-10">
      <div className="scroll-box bg-[#faf2dc] bg-opacity-90 border-4 border-[#8b5a00] shadow-lg rounded-lg p-8 w-11/12 md:w-3/4 lg:w-1/2">
        <h3 className="text-[#8b4513] font-semibold text-2xl mb-4">
          English Word:{" "}
          <span className="font-serif text-[#7a3e19]">
            {questionWord.English}
          </span>
        </h3>
        <h3 className="text-[#8b4513] font-semibold text-2xl mb-4">
          Pinyin:{" "}
          <span className="font-serif text-[#7a3e19]">
            {questionWord.Pinyin}
          </span>
        </h3>

        <div className="mb-8">
          <Grid level={level} cluster={cluster} currentWord={questionWord} />
        </div>

        <div className="flex justify-around">
          <button
            className="btn bg-[#8b4513] text-[#fef6e4] font-bold py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-[#6a3c1d]"
            onClick={getNextWord}
          >
            Previous
          </button>
          <button
            className="btn bg-[#8b4513] text-[#fef6e4] font-bold py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-[#6a3c1d]"
            onClick={getNextWord}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
