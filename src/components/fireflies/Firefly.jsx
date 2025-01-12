import "./firefly.css";

const Firefly = () => {
  const colors = ["#FFFF33", "#FFC700", "#4EF2F0", "#8FFBFF"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const randomSize = `${Math.random() * 5 + 5}px`;
  const randomPosition = () => ({
    top: `${Math.random() * 100}vh`,
    left: `${Math.random() * 100}vw`,
    animationDelay: `${Math.random() * 5}s`,
  });

  const randomBlinkDelay = {
    animationDelay: `${Math.random() * 2}s`,
    animationDuration: `${1.5 + Math.random() * 2}s`,
  };

  return (
    <div
      className="firefly"
      style={{ ...randomPosition(), width: randomSize, height: randomSize }}
    >
      <div
        className="glow"
        style={{ ...randomBlinkDelay, backgroundColor: randomColor }}
      ></div>
    </div>
  );
};

export default Firefly;
