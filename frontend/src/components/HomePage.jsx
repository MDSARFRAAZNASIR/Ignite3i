import React from "react";
// import image1 from './images/cbi.jpg'
// import image2 from'./images/ig.jpg'
// import image3 from'./images/igg.jpg'
import image4 from "./images/iggg.jpeg";

import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button"; // if you're using shadcn, else replace with <button>

const HomePage = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 homepage">
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-lg"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-blue-600">Ignite3i</span>
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Ignite3i is a cutting-edge software company delivering scalable,
            secure, and innovative digital solutions. From web applications to
            AI-driven platforms, we help businesses transform ideas into
            powerful products.
          </p>
          {/* <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md">
            Get Started
          </Button> */}
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-10 md:mt-0"
        >
          <img
            src={image4}
            alt="Computer Illustration"
            className="w-100 md:w-[600px] drop-shadow-lg opacity-40"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;
