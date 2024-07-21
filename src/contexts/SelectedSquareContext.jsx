import React, { createContext, useState, useContext } from 'react'
import ReactDOM from 'react-dom'

const SelectedSquareContext = createContext()

export const SelectedSquareProvider = ({ children }) => {
    let [ selectedSquare, setSelectedSquare ] = useState()

    function handleClick(e){
        setSelectedSquare(e.target.value)
        console.log('selectedSquare', selectedSquare)
        // checkGuess()
    }

    return (
        <SelectedSquareContext.Provider value={{ selectedSquare, setSelectedSquare, handleClick }}>
            { children }
        </SelectedSquareContext.Provider>
    )
}

export const useSelectedSquare = () => useContext(SelectedSquareContext)