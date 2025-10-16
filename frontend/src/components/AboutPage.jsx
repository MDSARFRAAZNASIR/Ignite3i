
 import { React } from "react";
 import { motion } from "framer-motion";
 
const AboutPage = () => {
   
  return (


    <div className="w-full min-h-screen bg-black text-white flex items-center justify-center px-6 py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            About to <span className="text-blue-600">Comapany</span> 
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            We are a software service company floated on <span className="font-semibold text-white">October 2019</span>.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            The vision of the company is to enable the client company to grow
            their business.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            We work under customers who are marching in their journey in
            emerging technologies like{" "}
            <span className="font-semibold text-white">
              Artificial Intelligence, Machine Learning, Android, Cloud
              Engineering, Telecom Networking, Automation
            </span>{" "}
            and{" "}
            <span className="font-semibold text-white">Automotive</span>.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            We supplement our capability in{" "}
            <span className="font-semibold text-white">
              consulting and business development
            </span>{" "}
            to customers in{" "}
            <span className="font-semibold text-white">
              retail, banking, telecom, hi-tech, and healthcare
            </span>
            .
          </p>
        </motion.div>

        {/* Right: Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/9414/9414209.png"
            alt="Tech Illustration"
            className="w-80 md:w-[420px] drop-shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
}



export default AboutPage
