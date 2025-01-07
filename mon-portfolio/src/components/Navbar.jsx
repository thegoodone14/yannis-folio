"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-5 left-0 right-0 mx-auto max-w-[90%] xl:max-w-[1223px] px-10 py-4 bg-[#d9d9d91f] text-white flex items-center justify-between rounded-2xl z-50 shadow-lg backdrop-blur-md"
    >

      {/* Logo */}
      <div className="text-xl font-bold">
        <Link href="/">
          <span className="text-blue-500">Y</span>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6 text-lg">
        <Link href="#home" className="hover:text-blue-400">
          Home
        </Link>
        <Link href="#work" className="hover:text-blue-400">
          Work
        </Link>
        <Link href="#about" className="hover:text-blue-400">
          About
        </Link>
        <Link href="#contact" className="hover:text-blue-400">
          Contact
        </Link>
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-4">
        <Link href="https://linkedin.com" target="_blank" className="hover:text-blue-400">
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
        <Link href="https://github.com" target="_blank" className="hover:text-blue-400">
          <FontAwesomeIcon icon={faGithub} />
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
