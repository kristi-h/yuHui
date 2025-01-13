import { useEffect, useState } from "react";
import "./firefly.css";

const Firefly = ({ index }) => {
  const [styles, setStyles] = useState({});

  useEffect(() => {
    const randomPosition = {
      top: `${Math.random() * 100}vh`,
      left: `${Math.random() * 100}vw`,
    };

    const randomSize = `${Math.random() * 5 + 5}px`;
    const randomFloatDuration = `${4 + Math.random() * 2}s`; // 4-6s
    const randomGlowDuration = `${1.5 + Math.random() * 1.5}s`; // 1.5-3s
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

export default Firefly;
