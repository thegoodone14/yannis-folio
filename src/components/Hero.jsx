"use client";

import { motion } from "framer-motion";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => (
  <motion.section
    id="home"
    className="min-h-screen flex flex-col justify-center items-center relative py-20"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <div className="text-center space-y-8 max-w-4xl px-4">
      {/* Photo de profil */}
      <motion.div
        className="mb-8"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
          {/* Assurez-vous que l'image est bien dans public/ */}
          <img
            src="/1734090891801.jpg"
            alt="Yannis N'GUESSAN"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Nom et titre */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="space-y-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Yannis N'GUESSAN
        </h1>
        <div className="space-y-2">
          <span className="block text-2xl md:text-3xl text-gray-300 font-normal">
            Développeur Data & IA
          </span>
          <span className="block text-lg text-blue-400">
            Bachelor Data & IA (3ème année) - ECE Paris
          </span>
        </div>
      </motion.div>

      {/* Description */}
      <motion.p
        className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Étudiant passionné par l'analyse de données et l'intelligence artificielle. 
        Je recherche un <strong>stage de 4 à 6 mois à partir d'avril</strong> pour apporter de la valeur 
        à travers le nettoyage de données, la visualisation et le Machine Learning.
      </motion.p>

      {/* Boutons d'action */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <motion.a
          href="/cv.pdf"
          target="_blank" // Ouvre le PDF dans un nouvel onglet
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold inline-flex items-center justify-center gap-2 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaDownload />
          Télécharger mon CV
        </motion.a>
        <a href="#work">
          <motion.button
            className="px-8 py-4 border-2 border-white rounded-lg text-white font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-300 w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Voir mes projets Data
          </motion.button>
        </a>
      </motion.div>

      {/* Réseaux sociaux */}
      <motion.div
        className="flex justify-center gap-6 mt-8"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <motion.a
          href="https://github.com/thegoodone14"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-colors"
          whileHover={{ scale: 1.1 }}
        >
          <FaGithub size={28} />
        </motion.a>
        <motion.a
          href="https://linkedin.com/in/yannis-n-guessan-907730211/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-colors"
          whileHover={{ scale: 1.1 }}
        >
          <FaLinkedin size={28} />
        </motion.a>
      </motion.div>
    </div>
  </motion.section>
);

export default Hero;