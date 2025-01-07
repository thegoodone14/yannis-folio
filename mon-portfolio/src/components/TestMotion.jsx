"use client";

import { motion } from "framer-motion";

export default function TestMotion() {
  return (
    <motion.div
    className="h-screen flex justify-center items-center bg-gray-900 text-white"
    initial={{ x: "-100vw" }} // Commence à gauche hors écran
    animate={{ x: 0 }}        // Se déplace au centre
    transition={{ duration: 1 }}
    >
    <div className="p-4 bg-blue-500 rounded">Je suis centré !</div>
    </motion.div>

  );
}
