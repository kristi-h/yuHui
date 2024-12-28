import { useEffect, useRef, useState, useCallback } from "react";
import "./lanterns.css";

const Lanterns = () => {
  const [lanterns, setLanterns] = useState([]);
  const containerRef = useRef(null);

  const createLantern = useCallback((x = null, y = null) => {
    const container = containerRef.current;
    if (!container) return;

    const randomX = x !== null ? x : Math.random() * container.offsetWidth;
    const randomY = y !== null ? y : 0;
    const randomDuration = Math.random() * 5 + 10;
    const randomDelay = Math.random() * 5;

    setLanterns((prev) => {
      const newLanterns = [
        ...prev,
        {
          x: randomX,
          y: randomY,
          duration: randomDuration,
          delay: randomDelay,
        },
      ];
      return newLanterns.slice(-50);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      createLantern();
    }, 1000);

    return () => clearInterval(interval);
  }, [createLantern]);

  const handleClick = (e) => {
    const container = containerRef.current;

    if (container) {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = rect.bottom - e.clientY;

      console.log(`Click registered at: x=${x}, y=${y}`);
      createLantern(x, y);
    }
  };

  return (
    <div ref={containerRef} className="lantern-container" onClick={handleClick}>
      {lanterns.map((lantern, index) => (
        <div
          key={index}
          className="lantern"
          style={{
            left: `${lantern.x}px`,
            bottom: `${lantern.y}px`,
            animationDuration: `${lantern.duration}s`,
            animationDelay: `${lantern.delay}s`,
          }}
        >
          <div className="lantern-top"></div>
          <div className="lantern-body">
            <span className="lantern-character">福</span>
          </div>
          <div className="lantern-tassel"></div>
        </div>
      ))}
    </div>
  );
};

export default Lanterns;
