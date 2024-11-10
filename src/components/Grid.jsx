import React, { useEffect, useState } from "react";
import { shuffle } from "../pages/Home";
import { GridSquare } from "./GridSquare";

export default function Grid({ level, cluster, currentWord }) {
  const [gridChar, setGridChar] = useState([]);
  const [prevAnswerIndex, setPrevAnswerIndex] = useState(null);

  useEffect(() => {
    const refreshGrid = () => {
      setGridChar(getGrid());
      shuffle(cluster);
    };
    refreshGrid();
  }, [currentWord]);

  function getGrid() {
    let tempGrid;
    switch (level) {
      case "difficult":
        tempGrid = cluster.slice(0, 16);
        break;
      case "medium":
        tempGrid = cluster.slice(0, 9);
        break;
      default:
        tempGrid = cluster.slice(0, 4);
    }
    return addCurrentWord(tempGrid);
  }

  function addCurrentWord(tempGrid) {
    let newAnswerIndex;
    do {
      newAnswerIndex = Math.floor(Math.random() * tempGrid.length);
    } while (newAnswerIndex === prevAnswerIndex);

    tempGrid[newAnswerIndex] = currentWord;
    setPrevAnswerIndex(newAnswerIndex);
    return tempGrid;
  }

  const createGrid = () => {
    return gridChar.map((char, index) => (
      <GridSquare key={index} char={char.Chinese} />
    ));
  };

  return (
    <div className={`grid-container ${level}`}>
      {gridChar && gridChar.length > 0 && createGrid()}
    </div>
  );
}
