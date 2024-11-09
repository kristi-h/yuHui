import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
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
  const [searchParams, setSearchParams] = useSearchParams();
  const [vocabList, setVocabList] = React.useState(hsk3);
  const [clusters, setClusters] = React.useState([]);
  const [level, setLevel] = React.useState("easy");

  React.useEffect(() => {
    function createClusters() {
      shuffle(vocabList);
      const clustered = [];
      for (let i = 0; i < vocabList.length; i++) {
        clustered.push(vocabList.slice(i, i + 20));
        i += 20;
      }
      setClusters(clustered);
    }
    createClusters();
  }, [vocabList]);

  function handleLevelClick(e) {
    setLevel(e.currentTarget.value);
  }

  function handleClusterClick(e) {
    navigate(`/practice/:${parseInt(e.currentTarget.value) + 1}`, {
      state: {
        cluster: clusters[e.currentTarget.value],
        level,
      },
    });
  }

  function clustersEle() {
    return clusters.map((_, index) => (
      <button
        key={index}
        onClick={handleClusterClick}
        className="clusters-btn"
        value={index}
      >
        {index + 1}
      </button>
    ));
  }

  return (
    <div className="home-container min-h-screen flex items-center justify-center bg-cover bg-center">
      <div className="scroll-box p-6 md:p-12 lg:w-3/4">
        <h1 className="title">选择你的难度:</h1>
        <div className="button-group">
          <button onClick={handleLevelClick} value="easy" className="level-btn">
            简单
          </button>
          <button
            onClick={handleLevelClick}
            value="medium"
            className="level-btn"
          >
            中等
          </button>
          <button
            onClick={handleLevelClick}
            value="difficult"
            className="level-btn"
          >
            困难
          </button>
        </div>
        <h1 className="title">选择一个簇:</h1>
        <div className="clusters-container">{clustersEle()}</div>
      </div>
    </div>
  );
}
