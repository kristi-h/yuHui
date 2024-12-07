import { motion } from "framer-motion";
import { useSelectedSquare } from "../contexts/SelectedSquareContext";

const squareVariants = {
  initial: { y: 0, opacity: 1 },
  fall: {
    y: "100vh",
    opacity: 0,
    transition: { duration: 0.8, ease: "easeIn" },
  },
};

export const GridSquare = ({ char, gameOver, incorrect }) => {
  const { handleClick } = useSelectedSquare();

  const incorrectEle = () => {
    if (incorrect.guessedWords.includes(char.Chinese)) {
      return "incorrect-border";
    }
    return "";
  };

  console.log("incorrect.guessedWords", incorrect.guessedWords);

  return (
    <motion.button
      className={`grid-square ${incorrectEle()}`}
      onClick={(e) => handleClick(e)}
      value={char.Chinese || ""}
      variants={squareVariants}
      animate={gameOver ? "fall" : "initial"}
    >
      {char.Chinese}
    </motion.button>
  );
};

export default GridSquare;
