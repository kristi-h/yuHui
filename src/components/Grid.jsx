import React, { useEffect, useState } from "react";
import { shuffle } from "../pages/Home";
import { GridSquare } from "./GridSquare";

export default function Grid({ level, cluster, currentWord, gameOver }) {
  const [gridChar, setGridChar] = useState([]);
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
    <div className={`grid-container ${level}`}>
      {!gameOver && gridChar.length > 0
        ? gridChar.map((char, index) => (
            <GridSquare key={index} char={char.Chinese} />
          ))
        : `Congrats!! You completed deck ${cluster} successfully!`}
    </div>
  );
}
