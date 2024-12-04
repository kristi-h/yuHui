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

  console.log("incorrect", incorrect);

  return (
    <motion.button
      className={`grid-square ${
        incorrect?.guessedWord ? "incorrect-border" : ""
      } `}
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
