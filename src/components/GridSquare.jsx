import { motion } from "framer-motion";
import { useSelectedSquare } from "../contexts/SelectedSquareContext";

export const GridSquare = ({ char, gameOver }) => {
  const { handleClick } = useSelectedSquare();

  const squareVariants = {
    initial: { y: 0, opacity: 1 },
    fall: {
      y: "100vh",
      opacity: 0,
      transition: { duration: 0.8, ease: "easeIn" },
    },
  };

  return (
    <motion.button
      className="grid-square"
      onClick={(e) => handleClick(e)}
      value={char.Chinese || ""}
      variants={squareVariants}
      animate={gameOver ? "fall" : "initial"}
    >
      {char?.Chinese || ""}
    </motion.button>
  );
};

export default GridSquare;
