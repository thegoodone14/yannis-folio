"use client";

import { motion } from "framer-motion";

const About = () => (
  <section id="about" className="py-20">
    <motion.div
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 inline-block bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          À propos de moi
        </motion.h2>
        
        <motion.div
          className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed mb-6">
              Passionné par le développement web depuis mes débuts en BTS SIO, 
              je m'efforce constamment d'apprendre et de maîtriser les dernières technologies 
              du web moderne.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Mon parcours m'a permis d'acquérir une solide expérience dans le développement 
              d'applications web, en utilisant des technologies comme React, Node.js, et Next.js.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-700 bg-opacity-50 rounded-lg">
              <h3 className="font-bold text-blue-400">Frontend</h3>
              <p className="text-sm text-gray-300">React, Next.js</p>
            </div>
            <div className="p-4 bg-gray-700 bg-opacity-50 rounded-lg">
              <h3 className="font-bold text-blue-400">Backend</h3>
              <p className="text-sm text-gray-300">Node.js, Express</p>
            </div>
            <div className="p-4 bg-gray-700 bg-opacity-50 rounded-lg">
              <h3 className="font-bold text-blue-400">Database</h3>
              <p className="text-sm text-gray-300">MongoDB, MySQL</p>
            </div>
            <div className="p-4 bg-gray-700 bg-opacity-50 rounded-lg">
              <h3 className="font-bold text-blue-400">Tools</h3>
              <p className="text-sm text-gray-300">Git, Docker</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default About;