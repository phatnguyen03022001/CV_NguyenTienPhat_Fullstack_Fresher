import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TbPlayerSkipBack, TbPlayerSkipForward, TbLink } from "react-icons/tb";
import { Link } from "react-router-dom";

import M1 from "../images/project_EEB/M.jpg";
import H_1 from "../images/project_EEB/H_1.jpg";
import H_2 from "../images/project_EEB/H_2.jpg";
import H_3 from "../images/project_EEB/H_3.jpg";
import H_4 from "../images/project_EEB/H_4.jpg";
import H_5 from "../images/project_EEB/H_5.jpg";
import H_6 from "../images/project_EEB/H_6.jpg";
import S_1 from "../images/project_EEB/S_1.jpg";
import S_2 from "../images/project_EEB/S_2.jpg";
import S_3 from "../images/project_EEB/S_3.jpg";
import T_1 from "../images/project_EEB/T_1.jpg";
import T_2 from "../images/project_EEB/T_2.jpg";
import T_3 from "../images/project_EEB/T_3.jpg";

// project 2
import M2 from "../images/project_Hotel/M2.jpg";
import A_1 from "../images/project_Hotel/A_1.jpg";
import A_2 from "../images/project_Hotel/A_2.jpg";
import A_3 from "../images/project_Hotel/A_3.jpg";
import A_4 from "../images/project_Hotel/A_4.jpg";
import A_5 from "../images/project_Hotel/A_5.jpg";
import A_6 from "../images/project_Hotel/A_6.jpg";
import C_1 from "../images/project_Hotel/C_1.jpg";
import C_2 from "../images/project_Hotel/C_2.jpg";
import C_3 from "../images/project_Hotel/C_3.jpg";

// project 3
import M3 from "../images/project_Chat/M3.jpg";
import U_1 from "../images/project_Chat/U_1.jpg";
import U_2 from "../images/project_Chat/U_2.jpg";
const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Current image index
  const [shake, setShake] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Thiết lập độ trễ 0.6 giây trước khi hiển thị nút
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Thực hiện lắc nút mỗi 3 giây
    const interval = setInterval(() => {
      if (isVisible) {
        setShake((prev) => !prev); // Lắc nút
      }
    }, 3000);

    return () => clearInterval(interval); // Dọn dẹp khi component unmount
  }, [isVisible]);

  // Mô tả chi tiết cho các dự án
  const projectDetails = [
    {
      title: "English Exam Bank",
      time: "06-08/2024",
      description:
        "The website serves 3 types of users: Heads, Teachers and Students. English Exam Bank offers a comprehensive exam management solution with features like custom exam creation, vast question banks, and detailed analytics.",
      images: [H_1, H_2, H_3, H_4, H_5, H_6, S_1, S_2, S_3, T_1, T_2, T_3],
      technologies: "ReactJS, NodeJS, ExpressJS MongoDB, ... ",
      members: 2,
      links: "https://github.com/phatnguyen03022001/ExamBankEnglish",
      image: M1,
      tag: "Graduation Project",
      score: "8.2",
    },
    {
      title: "Hotel Management",
      time: "02 - 05/2023",
      description:
        "Experience seamless hotel management with our intuitive platform. Designed for both Administrators and Guests, our system streamlines operations and enhances the guest experience. From check-in to check-out, we provide a smooth journey for every visitor.",
      images: [A_1, A_2, A_3, A_4, A_5, A_6, C_1, C_2, C_3],
      technologies: "EJS, NodeJS, ExpressJS, MySQL, ... ",
      members: 4,
      links: "https://github.com/phatnguyen03022001/hotel",
      image: M2,
      tag: "Final Project",
      score: "9",
    },
    {
      title: "RealChat",
      time: "03/2024",
      description:
        "This project is an application that allows users to chat in real time.",
      images: [U_1, U_2],
      technologies: "Nodejs, Express, Socket.io",
      members: 1,
      links: "https://example.com/project3",
      image: M3,
      tag: "Midterm Project",
      score: "9",
    },
  ];

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
    : "from-black to-gray-700 text-yellow-600";

  const textClass = darkMode ? "text-black" : "text-yellow-500";

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex + 1) % projectDetails[currentProjectIndex].images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + projectDetails[currentProjectIndex].images.length) %
        projectDetails[currentProjectIndex].images.length
    );
  };

  return (
    <motion.div
      className={`bg-gradient-to-tr ${bgClass} min-h-screen flex flex-col text-center relative`}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.5 }}>
      <div className="container mx-auto p-6 mt-20">
        <div className="relative flex flex-col items-center mb-6">
          <motion.h1
            className={`text-4xl mt-2 z-10 font-extrabold ${textClass}`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}>
            MY{" "}
            <span className={`${darkMode ? "text-yellow-500" : "text-white"}`}>
              PORTFOLIO
            </span>
          </motion.h1>
          <span
            className={`absolute text-7xl z-0 whitespace-nowrap font-extrabold opacity-20 transform -translate-y-2 ${
              darkMode ? "text-gray-400 opacity-20" : "text-gray-300"
            }`}>
            WORKS
          </span>
        </div>

        <p
          className={`mt-2 text-center mb-8 ${
            darkMode ? "text-gray-800" : "text-white"
          }`}>
          Here are some of my projects about:{" "}
        </p>

        <motion.div
          className="flex justify-center text-sm space-x-2 mb-4"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}>
          {["NodeJS", "ExpressJS", "ReactJS", "MongoDB", "MySQL"].map(
            (tech) => (
              <div
                key={tech}
                className={`p-2 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 ${
                  darkMode ? "bg-gray-300 text-black" : "bg-gray-600 text-white"
                }`}>
                {tech}
              </div>
            )
          )}
        </motion.div>

        {/* Project list with motion effects */}
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
          {projectDetails.map((project, index) => (
            <motion.div
              key={index}
              className="relative group transition-transform duration-300 hover:scale-105 overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.3, delay: index * 0.1 }} // Delay for each project
            >
              <img
                src={project.image}
                alt={`Dự Án ${index + 1}`}
                className="rounded-lg w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <div className="text-white text-center">
                  <h3 className="font-semibold text-xl">{project.title}</h3>
                  <p className="text-gray-300 text-xs p-2">
                    {project.description}
                  </p>
                  <button
                    onClick={() => {
                      setModalOpen(true);
                      setCurrentProjectIndex(index);
                      setCurrentImageIndex(0);
                    }}
                    className="mt-2 bg-yellow-400 text-black px-4 py-2 text-sm rounded hover:bg-yellow-300 transition">
                    See detail
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal for project details */}
        {modalOpen && (
          <div
            className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-70"
            onClick={() => setModalOpen(false)}>
            <div
              className="bg-white mt-14 rounded-lg p-6 shadow-lg transition-transform transform scale-105 max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}>
              <h2 className="relative font-semibold text-2xl mb-1 text-gray-800 text-center">
                {projectDetails[currentProjectIndex].title}
                <span className="absolute right-0 text-xs text-gray-500">
                  {projectDetails[currentProjectIndex].time}
                </span>
              </h2>

              <p className="mt-2 text-gray-800 text-xs mx-10 my-4">
                {projectDetails[currentProjectIndex].description}
              </p>
              <p className="mt-1 font-semibold text-xs text-gray-900">
                Technologies:{" "}
                <span className="font-normal">
                  {projectDetails[currentProjectIndex].technologies}
                </span>
              </p>
              <p className="mt-1 font-semibold text-xs text-gray-900">
                Members: {projectDetails[currentProjectIndex].members}
                <span className="mx-2">|</span>{" "}
                {/* Thêm dấu phân cách với khoảng cách */}
                Tags: {projectDetails[currentProjectIndex].tag}
                <span className="mx-2">|</span>{" "}
                {/* Thêm dấu phân cách với khoảng cách */}
                Score: {projectDetails[currentProjectIndex].score}
              </p>
              <a
                href={projectDetails[currentProjectIndex].links}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 flex items-center justify-center text-blue-500 hover:underline whitespace-nowrap">
                <TbLink className="mr-1" />
                <span>View project (github)</span>
              </a>

              <div className="mt-4 flex items-center justify-center relative text-gray-500">
                <button
                  onClick={prevImage}
                  className="absolute left-0 z-40 hover:scale-150 p-3 rounded-full transition flex items-center justify-center">
                  <TbPlayerSkipBack size={20} />
                </button>

                <img
                  src={
                    projectDetails[currentProjectIndex].images[
                      currentImageIndex
                    ]
                  }
                  alt={`Hình ${currentImageIndex + 1}`}
                  className="rounded-lg w-full h-auto max-w-[800px] shadow-lg object-contain transition-transform duration-300 transform"
                />

                <button
                  onClick={nextImage}
                  className="absolute right-0 z-40 hover:scale-150 p-3 rounded-full transition flex items-center justify-center">
                  <TbPlayerSkipForward size={20} />
                </button>
              </div>

              <p className="mt-2 text-gray-500 px-4 py-1 rounded-lg text-xs transition">
                {currentImageIndex + 1} /{" "}
                {projectDetails[currentProjectIndex].images.length}
              </p>

              <button
                onClick={() => setModalOpen(false)}
                className="mt-2 bg-red-600 text-white px-4 py-1 rounded-lg hover:bg-red-500 text-xs transition">
                Close
              </button>
            </div>
          </div>
        )}

        <div className="mt-20 text-center items-center justify-center flex space-x-4">
          {isVisible && (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              exit={{ opacity: 0, y: 0 }}
              className="inline-block"
              initial={{ opacity: 0, y: 100 }} // Chỉ định ban đầu
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.3 },
                ...(shake ? { x: [0, 15, -15, 0], y: 5 } : {}), // Thêm lắc nếu cần
              }}>
              <Link
                to="/about"
                className="bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-300 transition duration-200">
                About Me
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
