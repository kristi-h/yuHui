import Firefly from "./Firefly";
import "./firefly.css";

const Fireflies = () => {
  const firefliesCount = 30;

  return (
    <div className="firefly-container">
      {Array.from({ length: firefliesCount }).map((_, index) => (
        <Firefly key={index} index={index} />
      ))}
    </div>
  );
};

export default Fireflies;
