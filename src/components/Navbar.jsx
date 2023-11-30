import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import logoWeb from "../assets/logoWeb.png";
import { useNavigate } from "react-router-dom";
import { FaCode, FaTimes, FaSignInAlt } from "react-icons/fa";
import Button from "./ui/Button";
import { UserAuth } from "../Config/AuthContext";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = UserAuth();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsUserMenuOpen(false);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <nav className=" flex justify-between items-center  w-full z-50 text-white top-0 bg-gray-900">
      <Link
        to="/"
        className="flex items-center justify-center md:p-2 p-4"
        onClick={closeMobileMenu}
      >
        <img src={logoWeb} className="w-40" alt="Logo" />
      </Link>
      <div className="hidden md:flex space-x-4">
        <Link to="/" onClick={closeMobileMenu}>
          Accueil
        </Link>
        <Link to="/#expertise" onClick={closeMobileMenu}>
          Expertise
        </Link>
        <Link to="/#projets" onClick={closeMobileMenu}>
          Projets
        </Link>

        <Link to="/#contact" onClick={closeMobileMenu}>
          Contact
        </Link>
        <Link to="/#skills" onClick={closeMobileMenu}>
          Skills
        </Link>
      </div>
      <div className="hidden md:flex text-white space-x-2 p-2">
        {!user && (
          <Link to="/signin">
            <Button text="Connexion" />
          </Link>
        )}

        {user && (
          <div className="relative group">
            <div
              className="flex flex-col items-center justify-center cursor-pointer"
              onClick={toggleUserMenu}
            >
              <img
                src={user.photoURL}
                alt="Avatar"
                className="rounded-full overflow-hidden w-8 h-8 bg-gray-500 object-cover"
              />
              <span className="text-center pt-2 font-bold">
                {user.displayName}
              </span>
            </div>
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 bg-gray-800 rounded-md shadow-lg z-50">
                <Link
                  to="/dashboard"
                  className="block px-4 py-2 text-white"
                  onClick={() => {
                    closeMobileMenu();
                    setIsUserMenuOpen(false); 
                  }}
                >
                  Dashboard
                </Link>
                <Link
                  to="/dashboard/new"
                  className="block px-4 py-2 text-white"
                  onClick={() => {
                    closeMobileMenu();
                    setIsUserMenuOpen(false); 
                  }}
                >
                  Nouveau portfolio
                </Link>
                <Link
                  to="/dashboard/list"
                  className="block px-4 py-2 text-white"
                  onClick={() => {
                    closeMobileMenu();
                    setIsUserMenuOpen(false); 
                  }}
                >
                  Liste des portfolios
                </Link>
                <Link
                  to="/dashboard/clients"
                  className="block px-4 py-2 text-white"
                  onClick={() => {
                    closeMobileMenu();
                    setIsUserMenuOpen(false); 
                  }}
                >
                  Liste des clients
                </Link>
                <Link
                  to="/settings"
                  className="block px-4 py-2 text-white"
                  onClick={() => {
                    closeMobileMenu();
                    setIsUserMenuOpen(false); 
                  }}
                >
                  Settings
                </Link>
                <span
                  onClick={handleLogout}
                  className="block px-4 py-2 text-white cursor-pointer"
                >
                  Déconnexion
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="md:hidden text-white p-2" onClick={toggleMobileMenu}>
        <FaCode size={24} />
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-900 flex flex-col items-center justify-center z-50">
          <div className="absolute top-0 right-0 mt-6 mr-4">
            <button onClick={toggleMobileMenu} className="focus:outline-none">
              <FaTimes size={24} />
            </button>
          </div>
          <div className="text-center space-y-4 flex flex-col items-center">
            <Link to="/" className="block" onClick={closeMobileMenu}>
              Accueil
            </Link>
            <Link to="/#expertise" onClick={closeMobileMenu}>
              Expertise
            </Link>
            <Link to="/#projets" onClick={closeMobileMenu}>
              Projets
            </Link>
            <Link to="/#contact" onClick={closeMobileMenu}>
              Contact
            </Link>
            <Link to="/#skills" onClick={closeMobileMenu}>
              Skills
            </Link>
          </div>
          <div className="fixed bottom-0 pb-20 flex items-center justify-center space-x-2">
            {!user && (
              <Link to="/signin">
                <FaSignInAlt size={24} />
              </Link>
            )}
            {user && (
              <div className="relative group">
                <div
                  className="flex flex-col items-center justify-center cursor-pointer"
                  onClick={toggleUserMenu}
                >
                  <img
                    src={user.photoURL}
                    alt="Avatar"
                    className="rounded-full overflow-hidden w-8 h-8 bg-gray-500 object-cover"
                  />
                  <span className="text-center pt-2 font-bold">
                    {user.displayName}
                  </span>
                </div>
                {isUserMenuOpen && (
                  <div className="absolute bottom-8 mt-2 bg-gray-800 rounded-md shadow-lg">
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-white"
                      onClick={closeMobileMenu}
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/dashboard/new"
                      className="block px-4 py-2 text-white"
                      onClick={closeMobileMenu}
                    >
                      Nouveau portfolio
                    </Link>
                    <Link
                      to="/dashboard/list"
                      className="block px-4 py-2 text-white"
                      onClick={closeMobileMenu}
                    >
                      Liste des portfolios
                    </Link>
                    <Link
                      to="/dashboard/clients"
                      className="block px-4 py-2 text-white"
                      onClick={closeMobileMenu}
                    >
                      Liste des clients
                    </Link>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 text-white"
                      onClick={closeMobileMenu}
                    >
                      Settings
                    </Link>
                    <span
                      onClick={handleLogout}
                      className="block px-4 py-2 text-white cursor-pointer"
                    >
                      Déconnexion
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
