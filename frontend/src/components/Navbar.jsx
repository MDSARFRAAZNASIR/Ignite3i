import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "./images/ignite_logo_small_v1.png";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", path: "./" },
    { name: "About Us", path: "./aboutpage" },
    { name: "What We Do", path: "/aboutpage" },
    { name: "Methodologies", path: "#" },
    { name: "Carees", path: "#" },
    { name: "Industries", path: "#" },
    { name: "Our Clients", path: "#" },
    { name: "Our Expertise", path: "#" },
    { name: "Contact", path: "#" },
  ];
  // Detect scroll for navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all navbar ${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-blue-600"
          >
            {/* <img
              src={logo}
              alt="Computer Illustration"
              className="w-20 md:w-[200px] drop-shadow-lg opacity-40"
            /> */}
            <h1>Ignite3i</h1>
          </motion.h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
            {navLinks.map((link, i) => (
              <motion.li
                key={i}
                whileHover={{ scale: 1.1, color: "#2563eb" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link className="navelement" to={link.path}>
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-white shadow-md"
          >
            <ul className="flex flex-col space-y-4 py-4 px-6 text-gray-700 font-medium">
              {navLinks.map((link, i) => (
                <motion.li
                  key={i}
                  whileHover={{ scale: 1.05, color: "#2563eb" }}
                >
                  <Link to={link.path} onClick={() => setOpen(false)}>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.nav>
    </div>
  );
};

export default Navbar;
