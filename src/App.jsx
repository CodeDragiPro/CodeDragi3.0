import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './pages/Home';
import PortfolioId from'./pages/PortfolioId'
import { ToastContainer, Zoom } from 'react-toastify';
import Footer from "./components/Footer";
import SignIn from"./pages/SignIn"
import { AuthContextProvider } from "./Config/AuthContext";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <AuthContextProvider>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/portfolio/:id" element={<PortfolioId/>}/>
      <Route path="/signin" element={<SignIn />} />
    </Routes>
    <ToastContainer 
        transition={Zoom}
        />
        </AuthContextProvider>
        <Footer/>
    </BrowserRouter>
  )
}

export default App
