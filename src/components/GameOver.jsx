import { motion, AnimatePresence } from "framer-motion";
import Scoreboard from "./Scoreboard";

export default function GameOver({
  cluster,
  incorrect,
  handleRepeatDeck,
  handleSelectNewDeck,
}) {
  return (
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

      <Scoreboard cluster={cluster} incorrect={incorrect} />

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
  );
}
