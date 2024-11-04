import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa6";
import { motion } from "framer-motion";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    
    // Kiểm tra đường dẫn và điều hướng nếu không phải là một trong các đường dẫn đã định nghĩa
    const validPaths = ["/", "/portfolio", "/about", "/contact"];
    if (!validPaths.includes(location.pathname)) {
      navigate("/"); // Chuyển hướng về Home
    }
  }, [location.pathname, navigate]);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 p-2 shadow-md ${
        darkMode ? "bg-white" : "bg-black"
      } z-50`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div
          className={`text-${
            darkMode ? "black" : "yellow-400"
          } font-bold text-lg`}
        >
          My Portfolio
        </div>
        <div className="hidden md:flex space-x-6">
          {["/", "/portfolio", "/about", "/contact"].map((path) => (
            <Link
              key={path}
              to={path}
              className={`relative text-${
                darkMode ? "black" : "yellow-400"
              } hover:text-yellow-300 transition duration-200 ${
                location.pathname === path ? "font-bold" : ""
              }`}
            >
              {path === "/"
                ? "Home"
                : path.substring(1).charAt(0).toUpperCase() + path.slice(2)}
              {location.pathname === path && (
                <span className="absolute left-0 right-0 bottom-[-5px] border-b-2 border-yellow-400"></span>
              )}
            </Link>
          ))}
        </div>
        <button
          onClick={toggleDarkMode}
          className={`ml-4 p-2 rounded transition duration-200 ${
            darkMode ? "bg-yellow-400 text-black" : "bg-white text-black"
          }`}
        >
          <span
            className={`text-lg ${darkMode ? "text-black" : "text-yellow-400"}`}
          >
            {darkMode ? <FaLightbulb /> : <FaRegLightbulb />}
          </span>
        </button>
        <button className="md:hidden p-2" onClick={toggleMenu}>
          {isMenuOpen ? (
            <IoClose
              size={24}
              className={darkMode ? "text-black" : "text-yellow-400"}
            />
          ) : (
            <FiMenu
              size={24}
              className={darkMode ? "text-black" : "text-yellow-400"}
            />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={`md:hidden p-4 ${
              darkMode ? "bg-white text-gray-950" : "bg-black text-yellow-400"
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
          >
            {["/", "/portfolio", "/about", "/contact"].map((path) => (
              <Link
                key={path}
                to={path}
                className={`block py-2 text-${
                  darkMode ? "yellow-500" : "yellow-400"
                } hover:text-yellow-300 transition duration-200`}
                onClick={() => setIsMenuOpen(false)}
              >
                {path === "/"
                  ? "Home"
                  : path.substring(1).charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            ))}
          </motion.div>
        </motion.div>
      )}
    </nav>
  );
};

export default Header;
