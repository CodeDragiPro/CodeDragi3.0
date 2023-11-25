import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './pages/Home';
import PortfolioId from'./pages/PortfolioId'
import { ToastContainer, Zoom } from 'react-toastify';
import Footer from "./components/Footer";
import SignIn from"./pages/SignIn"
import Settings from './pages/Settings'
import ProtectedRoute from "./Config/ProtectedRoutes";
import Dashboard from "./pages/Dasboard";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/portfolio/:id" element={<PortfolioId/>}/>
      <Route path="/signin" element={<SignIn />} />
      {/* PROTECTED ROUTES */}
      <Route
            path='/dashboard'
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path='/settings'
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />
    </Routes>
    <ToastContainer 
        transition={Zoom}
        />
        <Footer/>
    </BrowserRouter>
  )
}

export default App
