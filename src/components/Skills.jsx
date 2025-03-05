"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaReact, 
  FaServer, 
  FaDatabase, 
  FaTools, 
  FaCertificate,
  FaJs,
  FaPython,
  FaJava,
  FaPhp,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaDocker,
  FaGit,
  FaAward
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiExpress, 
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiNextdotjs,
  SiC
} from 'react-icons/si';

const skillsData = {
  languages: {
    title: "Langages de programmation",
    icon: <FaCode size={24} />,
    skills: [
      { name: "JavaScript", icon: <FaJs size={16} /> },
      { name: "Python", icon: <FaPython size={16} /> },
      { name: "Java", icon: <FaJava size={16} /> },
      { name: "C", icon: <SiC size={16} /> },
      { name: "PHP", icon: <FaPhp size={16} /> }
    ]
  },
  frontend: {
    title: "Frontend",
    icon: <FaReact size={24} />,
    skills: [
      { name: "React.js", icon: <FaReact size={16} /> },
      { name: "Next.js", icon: <SiNextdotjs size={16} /> },
      { name: "TypeScript", icon: <SiTypescript size={16} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={16} /> },
      { name: "HTML/CSS", icon: <FaHtml5 size={16} /> }
    ]
  },
  backend: {
    title: "Backend",
    icon: <FaServer size={24} />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs size={16} /> },
      { name: "Express", icon: <SiExpress size={16} /> },
      { name: "Laravel", icon: <SiLaravel size={16} /> },
      { name: "API REST", icon: <FaServer size={16} /> }
    ]
  },
  database: {
    title: "Bases de données",
    icon: <FaDatabase size={24} />,
    skills: [
      { name: "MongoDB", icon: <SiMongodb size={16} /> },
      { name: "MySQL", icon: <SiMysql size={16} /> },
      { name: "PostgreSQL", icon: <SiPostgresql size={16} /> }
    ]
  },
  tools: {
    title: "Outils & Méthodes",
    icon: <FaTools size={24} />,
    skills: [
      { name: "Git", icon: <FaGit size={16} /> },
      { name: "Docker", icon: <FaDocker size={16} /> },
      { name: "Agile/Scrum", icon: <FaCode size={16} /> }
    ]
  }
};

const certifications = [
  {
    title: "Meta Frontend Developer Professional Certificate",
    issuer: "Coursera",
    date: "2024",
    icon: <FaCertificate size={24} />
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2023",
    icon: <FaServer size={24} />
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2023",
    icon: <FaCode size={24} />
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900 rounded-2xl shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Compétences & Certifications
        </motion.h2>

        {/* Grille des compétences */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {Object.values(skillsData).map((category, index) => (
            <motion.div
              key={category.title}
              className="bg-gray-800 rounded-2xl p-6 shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-blue-400">{category.icon}</div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors flex items-center gap-2"
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

        {/* Certifications */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gray-800 rounded-2xl p-8 shadow-xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <FaAward className="text-blue-400" size={24} />
            <h3 className="text-2xl font-bold">Certifications</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-blue-400 mb-4">{cert.icon}</div>
                <h4 className="font-semibold mb-2">{cert.title}</h4>
                <p className="text-sm text-gray-400">{cert.issuer}</p>
                <p className="text-sm text-blue-400 mt-2">{cert.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Skills;