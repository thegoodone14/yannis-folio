"use client";

import { motion } from "framer-motion";

const projects = [
  { id: 1, title: "TP Seven", description: "Gestion des utilisateurs et des droits." },
  { id: 2, title: "Parking App", description: "Gestion de places de parking." },
  { id: 3, title: "Portfolio", description: "Création de mon portfolio personnel." },
];

const Projects = () => (
  <section id="projects" className="p-8 bg-gray-800 rounded-lg shadow-lg">
    <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-4">Mes Projets</h2>
    <div className="bg-gray-800 text-white-300 text-center rounded-lg shadow-lg">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          className="p-5  rounded shadow hover:shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p>{project.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Projects;
