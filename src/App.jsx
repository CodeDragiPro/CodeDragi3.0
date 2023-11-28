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
import PortfolioList from "./pages/PortfolioList";
import PortfolioNew from "./pages/PortfolioNew";
import Clients from "./pages/Clients";

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
            path='/dashboard/list'
            element={
              <ProtectedRoute>
                <PortfolioList />
              </ProtectedRoute>
            }
          />
             <Route
            path='/dashboard/new'
            element={
              <ProtectedRoute>
                <PortfolioNew />
              </ProtectedRoute>
            }
          />
             <Route
            path='/dashboard/clients'
            element={
              <ProtectedRoute>
                <Clients />
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
