import { useEffect, useRef } from "react";
import "./lanterns.css";

const Lanterns = () => {
  const containerRef = useRef(null);

  const createLantern = (x = null, y = null) => {
    const container = containerRef.current;
    if (!container) return;

    const lantern = document.createElement("div");
    lantern.classList.add("lantern");

    const randomX =
      x !== null ? `${x}px` : `${Math.random() * container.offsetWidth}px`;
    const randomY = y !== null ? `${y}px` : `-10%`;
    const randomDelay = Math.random() * 2;
    const randomDuration = 8 + Math.random() * 4;

    lantern.style.left = randomX;
    lantern.style.bottom = randomY;
    lantern.style.animationDelay = `${randomDelay}s`;
    lantern.style.animationDuration = `${randomDuration}s`;

    container.appendChild(lantern);

    setTimeout(() => {
      lantern.remove();
    }, (randomDelay + randomDuration) * 1000);
  };

  useEffect(() => {
    const interval = setInterval(() => createLantern(), 1000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = (e) => {
    const container = containerRef.current;

    if (container) {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = rect.bottom - e.clientY;

      createLantern(x, y);
    }
  };

  return (
    <div
      ref={containerRef}
      className="lantern-container"
      onClick={handleClick}
    ></div>
  );
};

export default Lanterns;
