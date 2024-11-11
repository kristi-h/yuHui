import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { hsk3 } from "../hsk3.jsx";

export function shuffle(array) {
  let currentIndex = array.length;
  while (currentIndex !== 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

export default function Home() {
  const navigate = useNavigate();
  const [vocabList, setVocabList] = useState(hsk3);
  const [clusters, setClusters] = useState([]);
  const [level, setLevel] = useState("easy");
  const [currentDeck, setCurrentDeck] = useState(0);

  useEffect(() => {
    function createClusters() {
      shuffle(vocabList);
      const clustered = [];
      for (let i = 0; i < vocabList.length; i += 20) {
        clustered.push(vocabList.slice(i, i + 20));
      }
      setClusters(clustered);
    }
    createClusters();
  }, [vocabList]);

  function handleLevelClick(level) {
    setLevel(level);
  }

  function handleNextDeck() {
    setCurrentDeck((prev) => (prev + 1) % clusters.length);
  }

  function handlePrevDeck() {
    setCurrentDeck((prev) => (prev - 1 + clusters.length) % clusters.length);
  }

  function handleDeckSelection() {
    navigate(`/practice/:${currentDeck + 1}`, {
      state: { cluster: clusters[currentDeck], level },
    });
  }

  return (
    <div className="home-center-container">
      <div className="content-box">
        <h1 className="home-title">Intensity: </h1>
        <div className="centered-carousel">
          {["easy", "medium", "difficult"].map((lvl) => (
            <button
              key={lvl}
              onClick={() => handleLevelClick(lvl)}
              className={`level-btn ${level === lvl ? "selected" : ""}`}
            >
              {lvl === "easy" ? "简单" : lvl === "medium" ? "中等" : "困难"}
            </button>
          ))}
        </div>
        <h1 className="home-title">Deck: </h1>
        <div className="deck-carousel">
          <button className="arrow-btn" onClick={handlePrevDeck}>
            &lt;
          </button>
          <button className="deck-btn" onClick={handleDeckSelection}>
            {currentDeck + 1} 号
          </button>
          <button className="deck-btn" onClick={handleDeckSelection}>
            {currentDeck + 2} 号
          </button>
          <button className="deck-btn" onClick={handleDeckSelection}>
            {currentDeck + 3} 号
          </button>
          <button className="arrow-btn" onClick={handleNextDeck}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
