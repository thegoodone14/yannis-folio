"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const ProjetCard = ({ projet, index }) => (
  <motion.div
    className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-700"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    viewport={{ once: true }}
  >
    <div className="lg:flex h-full">
      <div className="lg:w-1/2 relative min-h-[300px] bg-gray-700 group">
        {/* Placeholder ou Image */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-500 bg-gray-800">
             {/* Si pas d'image, affiche le titre en filigrane */}
             <span className="text-4xl font-bold opacity-10">{projet.title}</span>
        </div>
        
        {/* Décommentez la ligne suivante quand vous aurez vos images dans le dossier public/ */}
        {/* <img src={projet.image} alt={projet.title} className="absolute inset-0 w-full h-full object-cover" /> */}
        
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60 lg:opacity-0" />
      </div>
      
      <div className="lg:w-1/2 p-8 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-white">{projet.title}</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">{projet.description}</p>

          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3 text-blue-400">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {projet.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-blue-900/50 border border-blue-500/30 text-blue-200 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-3 text-blue-400">Fonctionnalités Clés</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
              {projet.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex gap-4">
          {projet.githubLink && (
            <Link
              href={projet.githubLink}
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors text-white font-medium"
            >
              <FaGithub size={20} /> Voir sur GitHub
            </Link>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

const Projets = () => {
  const projets = [
    {
      id: 1,
      title: "Analyse de Crypto Monnaies",
      description: "Projet complet d'analyse de données financières visant à optimiser le suivi de la volatilité des marchés.",
      image: "/crypto-project.jpg", 
      technologies: ["SQL", "Power BI", "DAX", "Data Cleaning"],
      features: [
        "Analyse de plus de 50 000 lignes de données",
        "Nettoyage et structuration des données via SQL",
        "Création de dashboards dynamiques (DAX)",
        "Suivi des performances pour l'aide à la décision"
      ],
      githubLink: "https://github.com/thegoodone14",
    },
    {
      id: 2,
      title: "Prédiction des salaires NBA",
      description: "Développement d'un modèle de Machine Learning pour estimer les revenus des joueurs NBA basé sur leurs statistiques.",
      image: "/nba-project.jpg",
      technologies: ["Python", "Scikit-Learn", "Pandas", "Random Forest"],
      features: [
        "Cycle ETL complet (Extract, Transform, Load)",
        "Analyse exploratoire des données (EDA)",
        "Modélisation prédictive avec Random Forest",
        "Optimisation algorithmique des performances"
      ],
      githubLink: "https://github.com/thegoodone14",
    },
    {
       id: 3,
       title: "Parking App (Fullstack)",
       description: "Application de gestion de places de parking (Projet Web).",
       image: "/parking-project.jpg",
       technologies: ["Laravel", "MySQL"],
       features: ["Réservation temps réel", "Interface Admin"],
       githubLink: "https://github.com/thegoodone14/parking",
    }
  ];

  return (
    <section id="work" className="py-20 bg-gray-900 rounded-2xl shadow-lg mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Mes Projets Data & IA
        </motion.h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Sélection de projets illustrant mes compétences en traitement de données et Machine Learning.
        </p>

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