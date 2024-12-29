import { useEffect, useRef, useState, useCallback } from "react";
import "./lanterns.css";

const Lanterns = () => {
  const [lanterns, setLanterns] = useState([]);
  const containerRef = useRef(null);
  const MAX_LANTERNS = 12;
  const MIN_DISTANCE = 90;

  const createLantern = useCallback((x = null, y = null) => {
    const container = containerRef.current;
    if (!container) return;

    const randomX = x !== null ? x : Math.random() * container.offsetWidth;
    const randomY = y !== null ? y : 0;
    const randomDuration = Math.random() * 8 + 12;
    const randomDelay = Math.random() * 5;

    setLanterns((prev) => {
      if (prev.length >= MAX_LANTERNS) {
        return prev;
      }

      const isTooClose = prev.some((lantern) => {
        const dx = lantern.x - randomX;
        const dy = lantern.y - randomY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance < MIN_DISTANCE;
      });

      if (isTooClose) {
        return prev;
      }

      return [
        ...prev,
        {
          x: randomX,
          y: randomY,
          duration: randomDuration,
          delay: randomDelay,
        },
      ];
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
          <div className="lantern-top">
            <span className="lantern-details"></span>
          </div>
          <div className="lantern-body">
            <span className="lantern-character">福</span>
          </div>
          <div className="lantern-bottom">
            <span className="lantern-details"></span>
          </div>
          <div className="lantern-tassel left-tassel">
            <svg
              className="curly-tassel-svg"
              viewBox="0 0 100 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50 0 C35 30, 65 60, 50 90 C40 120, 70 160, 50 200"
                stroke="#ffd700"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="lantern-tassel middle-tassel">
            <svg
              className="curly-tassel-svg"
              viewBox="0 0 100 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M48 0 C30 50, 60 80, 50 110 C40 140, 55 170, 45 210"
                stroke="#ffd700"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="lantern-tassel right-tassel">
            <svg
              className="curly-tassel-svg"
              viewBox="0 0 100 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M55 0 C50 40, 65 70, 45 100 C35 130, 60 170, 55 195"
                stroke="#ffd700"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Lanterns;
