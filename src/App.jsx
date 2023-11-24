import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './pages/Home';
import PortfolioId from'./pages/PortfolioId'
import { ToastContainer, Zoom } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/portfolio/:id" element={<PortfolioId/>}/>
    </Routes>
    <ToastContainer 
        transition={Zoom}
        />
    </BrowserRouter>
  )
}

export default App
