import { useSelectedSquare } from "../contexts/SelectedSquareContext";

export const GridSquare = ({ char }) => {
  const { handleClick } = useSelectedSquare();

  return (
    <button
      className="grid-square"
      onClick={(e) => handleClick(e)}
      value={char}
    >
      {char}
    </button>
  );
};

export default GridSquare;
