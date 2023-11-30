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
import ErrorPage from "./pages/ErrorPage";
import ThermOfUse from "./pages/ThermOfUse";


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/portfolio/:id" element={<PortfolioId/>}/>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/conditions" element={<ThermOfUse />} />
      <Route path="*" element={<ErrorPage />} />

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
        theme="dark"
        transition={Zoom}
       
        />
        
        <Footer/>
    </BrowserRouter>
  )
}

export default App
