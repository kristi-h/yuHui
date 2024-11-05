import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "../App.jsx";
import { GridSquare } from "./GridSquare";
import { shuffle } from "../pages/Home";

// export default function Grid({ level, cluster, currentWord }) {
//   // let gridChar = useMemo(()=> getGrid(level, cluster), [level, currentWord])
//   const [gridChar, setGridChar] = useState([]);
//   console.log("currentWord", currentWord);
//   console.log("level", level);

//   React.useEffect(() => {
//     const refreshGrid = () => {
//       shuffle(cluster);
//       setGridChar(getGrid());
//     };
//     refreshGrid();
//   }, [currentWord]);

//   function getGrid() {
//     let tempGrid;
//     switch (level) {
//       case "difficult":
//         tempGrid = cluster.slice(0, 16);
//         break;
//       case "medium":
//         tempGrid = cluster.slice(0, 9);
//         break;
//       default:
//         tempGrid = cluster.slice(0, 4);
//     }
//     return addCurrentWord(tempGrid);
//   }

//   function addCurrentWord(tempGrid) {
//     if (!tempGrid.includes(currentWord)) {
//       tempGrid.pop();
//       tempGrid.push(currentWord);
//     }
//     return tempGrid;
//   }

//   const createGrid = () => {
//     return gridChar
//       .filter((char) => char)
//       .map((char, index) => <GridSquare key={index} char={char.Chinese} />);
//   };

//   return (
//     <div className="grid-container" id={level}>
//       {gridChar && gridChar.length > 0 && createGrid()}
//     </div>
//   );
// }

export default function Grid({ level, cluster, currentWord }) {
  const [gridChar, setGridChar] = useState([]);

  React.useEffect(() => {
    const refreshGrid = () => {
      shuffle(cluster);
      setGridChar(getGrid());
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
    if (!tempGrid.includes(currentWord)) {
      tempGrid.pop();
      tempGrid.push(currentWord);
    }
    return tempGrid;
  }

  const createGrid = () => {
    return gridChar
      .filter((char) => char)
      .map((char, index) => <GridSquare key={index} char={char.Chinese} />);
  };

  return (
    <div className="grid-container" id={level}>
      {gridChar && gridChar.length > 0 && createGrid()}
    </div>
  );
}
