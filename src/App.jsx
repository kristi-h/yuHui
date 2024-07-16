import React from 'react'
import { 
  RouterProvider, 
  createBrowserRouter,
  createRoutesFromElements,
  Routes, 
  Route
  } from "react-router-dom"
import { SelectedSquareProvider } from './contexts/SelectedSquareContext'
import './App.css'
import Home from './pages/Home'
import Practice from './pages/Practice'
import Layout from './components/Layout'
import ReactDOM from "react-dom/client";

function App() {
  

  const router = createBrowserRouter(createRoutesFromElements(
    
      <Route path="/" element={<Layout />}>
       <Route index element={<Home />} />
        <Route path="/practice/:cluster" element={<Practice />} />
      </Route>
    
  ))
 
  return (
    <SelectedSquareProvider>
      <RouterProvider router={router} />
    </SelectedSquareProvider>
  )
}

export default App
