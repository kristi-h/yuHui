import React, { createContext, useState, useContext } from 'react'
import ReactDOM from 'react-dom'

const SelectedSquareContext = createContext()

export const SelectedSquareProvider = ({ children }) => {
    const [ selectedSquare, setSelectedSquare ] = useState()

    return (
        <SelectedSquareContext.Provider value={{ selectedSquare, setSelectedSquare }}>
            { children }
        </SelectedSquareContext.Provider>
    )
}

export const useSelectedSquare = () => useContext(SelectedSquareContext)