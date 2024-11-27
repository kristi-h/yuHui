import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Grid from "./Grid";
import Scoreboard from "./Scoreboard";

export default function GameOver({
  cluster,
  incorrect,
  gridChar,
  handleRepeatDeck,
  handleSelectNewDeck,
  gameOver,
}) {
  const [showGrid, setShowGrid] = useState(true);

  const handleGridAnimationComplete = () => {
    setShowGrid(false);
  };

  return (
    <div className="game-over-container">
      {showGrid && (
        <Grid
          gridChar={gridChar}
          gameOver={gameOver}
          onGridAnimationComplete={handleGridAnimationComplete}
        />
      )}

      {!showGrid && (
        <>
          <motion.div
            className="game-over-gif"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              backgroundImage: `url("/assets/congrats.gif")`,
              backgroundSize: "cover",
              height: "100vh",
            }}
          >
            <h1 className="congrats-title">
              真棒! You successfully completed your deck!
            </h1>
            <Scoreboard cluster={cluster} incorrect={incorrect} />
            <div className="btns-container mt-8">
              <button className="btn" onClick={handleRepeatDeck}>
                Repeat Deck
              </button>
              <button className="btn" onClick={handleSelectNewDeck}>
                Select New Deck
              </button>
            </div>
          </motion.div>
        </>
      )}

      <button className="btn" onClick={!gameOver}>
        Trigger Game Over
      </button>
    </div>
  );
}
