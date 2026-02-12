"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaDatabase, FaTools, FaPython, FaHtml5, FaGit, FaChartBar, FaBrain
} from 'react-icons/fa';
import { 
  SiMysql, SiPostgresql, 
  SiPowerbi, SiTableau, SiR, SiPandas, SiNumpy, SiScikitlearn, SiJavascript, SiPhp, SiDocker
} from 'react-icons/si';

const skillsData = {
  dataAnalysis: {
    title: "Data Analysis & ML",
    icon: <FaBrain size={24} />,
    skills: [
      { name: "Python", icon: <FaPython size={16} /> },
      { name: "Pandas", icon: <SiPandas size={16} /> },
      { name: "NumPy", icon: <SiNumpy size={16} /> },
      { name: "Scikit-Learn", icon: <SiScikitlearn size={16} /> },
      { name: "R", icon: <SiR size={16} /> }
    ]
  },
  visualization: {
    title: "Visualisation & Reporting",
    icon: <FaChartBar size={24} />,
    skills: [
      { name: "Power BI", icon: <SiPowerbi size={16} /> },
      { name: "Tableau", icon: <SiTableau size={16} /> },
      { name: "Excel", icon: <FaChartBar size={16} /> }
    ]
  },
  database: {
    title: "Bases de données",
    icon: <FaDatabase size={24} />,
    skills: [
      { name: "SQL", icon: <FaDatabase size={16} /> },
      { name: "MySQL", icon: <SiMysql size={16} /> },
      { name: "PostgreSQL", icon: <SiPostgresql size={16} /> }
    ]
  },
  webDev: {
    title: "Développement & Outils",
    icon: <FaTools size={24} />,
    skills: [
      { name: "Git", icon: <FaGit size={16} /> },
      { name: "Docker", icon: <SiDocker size={16} /> },
      { name: "PHP", icon: <SiPhp size={16} /> },
      { name: "JavaScript", icon: <SiJavascript size={16} /> }
    ]
  }
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900 rounded-2xl shadow-lg mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Compétences Techniques
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {Object.values(skillsData).map((category, index) => (
            <motion.div
              key={category.title}
              className="bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-700 hover:border-blue-500/30 transition-colors"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-blue-400">{category.icon}</div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    className="px-3 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors flex items-center gap-2 text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-blue-400">{skill.icon}</span>
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;