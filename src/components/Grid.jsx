import { useEffect, useState } from "react";
import { shuffle } from "../pages/Home";
import { GridSquare } from "./GridSquare";
import { motion } from "framer-motion";

export default function Grid({
  level,
  cluster,
  currentWord,
  gameOver,
  gridChar,
  setGridChar,
  onGridAnimationComplete,
}) {
  const [prevAnswerIndex, setPrevAnswerIndex] = useState(null);

  useEffect(() => {
    if (!gameOver) {
      const refreshGrid = () => {
        setGridChar(getGrid());
        shuffle(cluster);
      };
      refreshGrid();
    }
  }, [currentWord, gameOver]);

  const gridVariants = {
    initial: { scale: 1, opacity: 1 },
    // jiggle: {
    //   scale: [1, 1.05, 0.95, 1],
    //   rotate: [0, -5, 5, 0],
    //   transition: { duration: 0.5 },
    // },
    hidden: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
      },
    },
  };

  function getGrid() {
    let tempGrid;
    switch (level) {
      case "difficult":
        tempGrid = cluster.filter((word) => word !== currentWord).slice(0, 15);
        break;
      case "medium":
        tempGrid = cluster.filter((word) => word !== currentWord).slice(0, 8);
        break;
      default:
        tempGrid = cluster.filter((word) => word !== currentWord).slice(0, 3);
    }
    return addCurrentWord(tempGrid);
  }

  function addCurrentWord(tempGrid) {
    let newAnswerIndex;
    do {
      newAnswerIndex = Math.floor(Math.random() * tempGrid.length + 1);
    } while (newAnswerIndex === prevAnswerIndex);

    tempGrid.splice(newAnswerIndex, 0, currentWord);
    setPrevAnswerIndex(newAnswerIndex);
    return tempGrid;
  }

  return (
    <motion.div
      className={`grid-container ${level}`}
      initial="initial"
      animate={gameOver ? "hidden" : "initial"}
      exit="hidden"
      variants={gridVariants}
      onAnimationComplete={() => {
        if (gameOver) {
          onGridAnimationComplete();
        }
      }}
    >
      {gridChar.map((char, index) => (
        <GridSquare key={index} char={char} gameOver={gameOver} />
      ))}
    </motion.div>
  );
}
