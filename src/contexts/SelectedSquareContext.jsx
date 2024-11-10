import { createContext, useState, useContext, useEffect } from "react";

const SelectedSquareContext = createContext();

export const SelectedSquareProvider = ({ children }) => {
  let [selectedSquare, setSelectedSquare] = useState({});
  const resetSelectedSquare = () => setSelectedSquare(null);

  useEffect(() => {
    console.log("selectedSquare updated:", selectedSquare);
  }, [selectedSquare]);

  function handleClick(e) {
    setSelectedSquare(e.target.value);
    console.log("selectedSquare", selectedSquare);
    // checkGuess()
  }

  return (
    <SelectedSquareContext.Provider
      value={{
        selectedSquare,
        setSelectedSquare,
        handleClick,
        resetSelectedSquare,
      }}
    >
      {children}
    </SelectedSquareContext.Provider>
  );
};

export const useSelectedSquare = () => useContext(SelectedSquareContext);
