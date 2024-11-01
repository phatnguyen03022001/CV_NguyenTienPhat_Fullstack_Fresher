import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion từ framer-motion
import image1 from "../images/avt44.jpg";

const Home = () => {
  return (
    <motion.div
      className="bg-black text-yellow-400 min-h-screen flex flex-col justify-center items-center text-center"
      initial={{ opacity: 0, y: 20 }} // Đặt trạng thái ban đầu
      animate={{ opacity: 1, y: 0 }} // Trạng thái khi kết thúc
      transition={{ duration: 0.5 }} // Thời gian chuyển tiếp
    >
      <h1 className="text-6xl font-extrabold mb-4">Welcome to My Portfolio</h1>
      <h3 className="text-3xl mb-2">Hi, I'm Nguyen Tien Phat</h3>
      <p className="text-xl mb-4">A passionate Web Developer & Designer</p>
      
      <motion.img 
        src={image1} 
        alt="Nguyen Tien Phat" 
        className="w-64 h-64 object-cover rounded-full shadow-lg mb-6 transition-transform duration-300 hover:scale-105"
        initial={{ scale: 0 }} // Đặt trạng thái ban đầu cho ảnh
        animate={{ scale: 1 }} // Trạng thái khi kết thúc
        transition={{ duration: 0.5, delay: 0.2 }} // Thời gian và độ trễ
      />

      <p className="mt-4 text-yellow-300 max-w-xl text-lg">
        I'm seeking a challenging intern position where I can enhance my skills in web development and create impactful applications that contribute to business growth.
      </p>
      
      <div className="mt-6">
        <Link
          to="/portfolio"
          className="bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-300 transition duration-200 mr-4"
        >
          View My Work
        </Link>
        <Link
          to="/contact"
          className="bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-300 transition duration-200"
        >
          Contact Me
        </Link>
      </div>
    </motion.div>
  );
};

export default Home;
