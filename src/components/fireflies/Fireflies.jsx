import { useEffect, useState } from "react";

const Firefly = () => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    const randomPosition = {
      top: `${Math.random() * 100}vh`,
      left: `${Math.random() * 100}vw`,
      animationDuration: `${3 + Math.random() * 2}s`,
    };
    setStyle(randomPosition);
  }, []);

  return <div className="firefly" style={style}></div>;
};

const Fireflies = () => {
  const firefliesCount = 20;

  return (
    <>
      {Array.from({ length: firefliesCount }).map((_, i) => (
        <Firefly key={i} />
      ))}
    </>
  );
};

export default Fireflies;
