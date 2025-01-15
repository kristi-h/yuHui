import React, { useEffect, useState } from "react";
import "./firefly.css";

const Firefly = ({ index }) => {
  const [styles, setStyles] = useState({});

  useEffect(() => {
    const randomPosition = {
      top: `${Math.random() * 100}vh`,
      left: `${Math.random() * 100}vw`,
    };

    const randomSize = `${Math.random() * 5 + 5}px`; // 5-10px
    const randomFloatDuration = `${24 + Math.random() * 2}s`; // 24-16s
    const randomGlowDuration = `${2.5 + Math.random() * 1.5}s`; // 2.5-3s
    const randomGlowDelay = `${Math.random() * 2}s`; // 0-2s

    setStyles({
      ...randomPosition,
      width: randomSize,
      height: randomSize,
      animation: `float ${randomFloatDuration} infinite ease-in-out`,
      "--glow-duration": randomGlowDuration,
      "--glow-delay": randomGlowDelay,
    });
  }, [index]);

  return <div className="firefly" style={styles}></div>;
};

const MemoizedFirefly = React.memo(Firefly);

export default MemoizedFirefly;
