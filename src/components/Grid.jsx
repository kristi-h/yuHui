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
