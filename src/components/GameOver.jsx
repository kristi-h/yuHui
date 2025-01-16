import { motion } from "framer-motion";
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
          incorrect={incorrect}
        />
      )}

      {!showGrid && (
        <div className="game-over-contents">
          <motion.div
            className="game-over-gif"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              // backgroundImage: `url("/assets/congrats.gif")`,
              backgroundImage: `url("/assets/gif/disciple-sunglasses.png")`,
              backgroundSize: "cover",
              height: "100vh",
              width: "100vw",
              marginTop: "-15px",
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
        </div>
      )}
    </div>
  );
}
