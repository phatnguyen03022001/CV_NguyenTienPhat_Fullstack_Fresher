import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaDownload } from "react-icons/fa";

import image1 from "../images/avatar/avt.jpg";
import cv from "../files/CV_NguyenTienPhat_fullstack_intern.pdf";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [shake, setShake] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Shake effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShake(true);
      setTimeout(() => setShake(false), 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Dark mode effect
  useEffect(() => {
    const getDarkMode = () => {
      const savedMode = localStorage.getItem("darkMode");
      return savedMode === "true";
    };

    setDarkMode(getDarkMode());

    const handleStorageChange = () => {
      setDarkMode(getDarkMode());
    };

    window.addEventListener("storage", handleStorageChange);

    const observer = new MutationObserver(() => {
      setDarkMode(getDarkMode());
    });

    observer.observe(document, {
      attributes: true,
      childList: true,
      subtree: true,
    });

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      observer.disconnect();
    };
  }, []);

  const bgClass = darkMode
    ? "from-white to-gray-300 text-gray-950"
    : "from-black to-gray-700 text-white";

  const textClass = darkMode ? "text-black" : "text-yellow-400";

  return (
    <div
      className={`bg-gradient-to-tr ${bgClass} min-h-screen mt-10 flex flex-col justify-center items-center text-center p-8`}>
      <motion.div
        className="flex flex-col justify-center items-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}>
        <div className="relative flex flex-col items-center mb-6">
          <motion.h1
            className={`text-4xl mt-2 z-10 font-extrabold ${textClass}`}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}>
            WEL
            <span className={`${darkMode ? "text-yellow-500" : "text-white"}`}>
              COME
            </span>
          </motion.h1>
          <span
            className={`absolute text-7xl z-0 whitespace-nowrap font-extrabold opacity-20 transform -translate-y-2 ${
              darkMode ? "text-gray-400 opacity-20" : "text-gray-300"
            }`}>
            WORKS
          </span>
        </div>

        <motion.h3
          className="text-3xl font-thinbold"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}>
          Hi, I'm Nguyen Tien Phat
        </motion.h3>

        <motion.p
          className="text-sm mt-2 mb-4 font-thin"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          A passionate Web Developer & Designer
        </motion.p>

        {/* Image with Download CV Section */}
        <motion.div
          className="relative mt-10 mb-6"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          <motion.img
            src={image1}
            alt="Nguyen Tien Phat"
            className={`w-72 h-72 object-cover rounded-full shadow-lg border-4 ${
              darkMode ? "border-gray-700" : "border-gray-300"
            } `}
            animate={{
              scale: isHovered ? 0.98 : 1,
              filter: isHovered ? "brightness(0.4)" : "brightness(1)",
            }}
            transition={{ duration: 0.3 }}
          />

          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2 }}>
                <motion.a
                  href={cv}
                  download="CV_NguyenTienPhat_fullstack_intern.pdf"
                  className="group relative flex items-center justify-center bg-red-600 hover:bg-red-700 text-white rounded-full p-4 shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}>
                  <FaDownload size={28} />
                  <span className="absolute -top-8 transform -translate-x-1/2 bg-black/75 text-white text-xs rounded-md py-1 px-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Download CV
                  </span>
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.p
          className={`mt-4 ${
            darkMode ? "text-black" : "text-white"
          } max-w-xl text-lg p-4`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}>
          I'm seeking a challenging intern position where I can enhance my
          skills in web development and create impactful applications that
          contribute to business growth.
        </motion.p>

        <div className="mt-6 flex space-x-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
            animate={shake ? { x: [0, 15, -15, 0], y: 5 } : {}}
            transition={{ duration: 0.3 }}>
            <Link
              to="/portfolio"
              className="bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-300 transition duration-200">
              View My Portfolio
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
