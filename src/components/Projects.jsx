"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

const ProjetCard = ({ projet, index }) => (
  <motion.div
    className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    viewport={{ once: true }}
  >
    <div className="lg:flex">
      <div className="lg:w-1/2">
        <img
          src={projet.image}
          alt={projet.title}
          className="w-full h-64 lg:h-full object-cover"
        />
      </div>
      
      <div className="lg:w-1/2 p-8">
        <h3 className="text-2xl font-bold mb-4">{projet.title}</h3>
        <p className="text-gray-300 mb-6">{projet.description}</p>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-3">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {projet.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-blue-500 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-3">Fonctionnalités</h4>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            {projet.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="flex gap-4">
          <Link
            href={projet.githubLink}
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
          >
            <FaGithub /> GitHub
          </Link>
          <Link
            href={projet.demoLink}
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FaExternalLinkAlt /> Démo
          </Link>
        </div>
      </div>
    </div>
  </motion.div>
);

const Projets = () => {
  const projets = [
    {
      id: 1,
      title: "Parking App",
      description: "Application de gestion de places de parking permettant aux utilisateurs de réserver, gérer et suivre les places disponibles en temps réel.",
      image: "/api/placeholder/600/400",
      technologies: ["Laravel", "MySQL"],
      features: [
        "Système de réservation en temps réel",
        "Interface administrateur",
        "Gestion des places de parking",
        "Historique des réservations"
      ],
      githubLink: "https://github.com/thegoodone14/parking",
      demoLink: "https://parking-app-demo.vercel.app"
    },
    {
      id: 2,
      title: "Todo List",
      description: "Application de gestion de tâches intuitive et responsive avec des fonctionnalités avancées de tri et de filtrage.",
      image: "/screen_todo.png",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      features: [
        "Création et gestion de tâches",
        "Catégorisation par priorité",
        "Filtres et recherche",
        "Mode sombre/clair"
      ],
      githubLink: "https://github.com/yannisdu/todo-app",
      demoLink: "https://todo-frontend-bay-nu.vercel.app/"
    }
  ];

  return (
    <section id="work" className="py-20 bg-gray-900 rounded-2xl shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Mes Projets
        </motion.h2>

        <div className="space-y-20">
          {projets.map((projet, index) => (
            <ProjetCard key={projet.id} projet={projet} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projets;