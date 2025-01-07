"use client";

import { motion } from "framer-motion";

const Hero = () => (
  <motion.section
    id="hero"
    className="  h-screen flex flex-col justify-center items-center bg-gray-900 text-white"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <motion.h1
      className="text-5xl font-bold"
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      Bienvenue, je suis Yannis
    </motion.h1>
    <p className="mt-4 text-lg">Étudiant en BTS SIO - Développeur Web</p>
    <a href="#projects">
      <motion.button
        className="mt-6 px-6 py-3 bg-blue-500 rounded hover:bg-blue-600"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Découvrez mes projets
      </motion.button>
    </a>
  </motion.section>
);

export default Hero;
