import { useSelectedSquare } from "../contexts/SelectedSquareContext";

export const GridSquare = ({ char }) => {
  const { handleClick } = useSelectedSquare();

  return (
    <div>
      <button
        className="grid-square"
        onClick={(e) => handleClick(e)}
        value={char}
      >
        {char}
      </button>
    </div>
  );
};
