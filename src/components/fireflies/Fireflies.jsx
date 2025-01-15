import { useMemo } from "react";
import MemoizedFirefly from "./Firefly";

const Fireflies = () => {
  const firefliesCount = 30;
  const fireflies = useMemo(
    () =>
      Array.from({ length: firefliesCount }).map((_, index) => (
        <MemoizedFirefly key={index} index={index} />
      )),
    [firefliesCount]
  );

  return <div className="firefly-container">{fireflies}</div>;
};

export default Fireflies;
