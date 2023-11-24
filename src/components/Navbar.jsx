import React, { useState } from "react";
import {Link} from "react-router-dom";
import logoWeb from "../assets/logoWeb.png";
import { FaCode, FaTimes, FaSignInAlt } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className=" flex justify-between items-center  w-full z-50 text-white top-0 bg-gray-900">
      <Link to="/" className="flex items-center justify-center p-2 mt-2" onClick={closeMobileMenu}>
        <img src={logoWeb} className="w-40" alt="Logo" />
      </Link>
      <div className="hidden md:flex space-x-4">
        <Link to="/" onClick={closeMobileMenu}>
          Accueil
        </Link>
        <Link to="#expertise" onClick={closeMobileMenu}>
          Expertise
        </Link>
        <Link to="#projets" onClick={closeMobileMenu}>
          Projets
        </Link>
        <Link to="#contact" onClick={closeMobileMenu}>
          Contact
        </Link>
        <Link to="#skills" onClick={closeMobileMenu}>
          Skills
        </Link>
      </div>

      <div className="hidden md:flex text-white space-x-2 p-2">
        <Link to="/dashboard">
          <FaSignInAlt size={24} />
        </Link>
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

            <Link to="/expertise" onClick={closeMobileMenu}>
              Expertise
            </Link>
            <Link to="/projets" onClick={closeMobileMenu}>
              Projets
            </Link>
            <Link to="/contact" onClick={closeMobileMenu}>
              Contact
            </Link>
            <Link to="/skills" onClick={closeMobileMenu}>
              Skills
            </Link>
          </div>

          <div className="fixed bottom-0 mb-12 flex items-center justify-center space-x-2">
            <Link to="/signin">
              <FaSignInAlt size={24} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
