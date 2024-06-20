import React from 'react'
import { 
  RouterProvider, 
  createBrowserRouter,
  createRoutesFromElements,
  Routes, 
  Route, 
  } from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import Practice from './pages/Practice'
import Layout from './components/Layout'

const router = createBrowserRouter(createRoutesFromElements(
  <>
     <Route path="/" element={<Home />} />
     <Route path="/practice/:cluster" element={<Practice />} />
  </>
))

function App() {
 
  return (
    <RouterProvider router={router} />
  )
}

export default App
