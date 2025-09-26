import React from "react";

import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const services = [
    {
      title: "Artificial Intelligence",
      desc: "Building intelligent solutions with AI & ML models to automate workflows and enhance decision-making.",
      icon: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png",
    },
    {
      title: "Cloud Engineering",
      desc: "Secure and scalable cloud solutions, enabling businesses to innovate and grow faster.",
      icon: "https://cdn-icons-png.flaticon.com/512/4149/4149670.png",
    },
    {
      title: "Telecom & Networking",
      desc: "Advanced telecom and networking solutions to keep enterprises globally connected.",
      icon: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
    },
    {
      title: "Automation & Automotive",
      desc: "Smart automation and next-gen automotive software for modern industries.",
      icon: "https://cdn-icons-png.flaticon.com/512/8099/8099460.png",
    },
    {
      title: "Consulting & Strategy",
      desc: "Helping enterprises with business development, consulting, and digital transformation.",
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      title: "Healthcare & Retail",
      desc: "Innovative IT solutions for healthcare, retail, banking, and hi-tech sectors.",
      icon: "https://cdn-icons-png.flaticon.com/512/2920/2920231.png",
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-black text-white px-6 py-16 overflow-hidden flex flex-col">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "#000" },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
          },
          particles: {
            color: { value: "#00bfff" },
            links: {
              color: "#00bfff",
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            move: { enable: true, speed: 2 },
            number: { value: 60 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 4 } },
          },
          detectRetina: true,
        }}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

      {/* About Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-400">
            Welcome to Ignite3i
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            We are a software service company floated on{" "}
            <span className="font-semibold text-white">October 2019</span>.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            The vision of the company is to enable the client company to grow
            their business.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            We work under customers who are marching in their journey in
            emerging technologies like{" "}
            <span className="font-semibold text-white">
              Artificial Intelligence, Machine Learning, Android, Cloud
              Engineering, Telecom Networking, Automation
            </span>{" "}
            and <span className="font-semibold text-white">Automotive</span>.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
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

        {/* Right: Image */}
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

      {/* Services Section */}
      <div className="max-w-7xl mx-auto relative z-10 mb-20">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-blue-400 mb-12"
        >
          Our Services
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg text-center hover:shadow-blue-500/30"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto bg-gray-950 py-8 text-center relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-lg font-semibold text-white mb-2">Ignite3i</h3>
          <p className="text-gray-400 text-sm mb-4">
            Empowering businesses through technology & innovation.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-blue-400 transition text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-blue-400 transition text-2xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-blue-400 transition text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:contact@ignite3i.com"
              className="text-gray-400 hover:text-blue-400 transition text-2xl"
            >
              <FaEnvelope />
            </a>
          </div>

          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Ignite3i. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
