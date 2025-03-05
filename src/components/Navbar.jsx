"use client";

import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      }));

      const currentSection = sectionElements.find(section => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-5 left-0 right-0 mx-auto max-w-[90%] xl:max-w-[1223px] px-6 py-4 bg-gray-900/80 text-white flex items-center justify-between rounded-2xl z-50 shadow-lg backdrop-blur-md border border-gray-800"
    >
      {/* Logo */}
      <motion.div 
        className="text-xl font-bold"
        whileHover={{ scale: 1.1 }}
      >
        <Link href="/">
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Y</span>
        </Link>
      </motion.div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-2 md:space-x-6">
        {sections.map((section) => (
          <Link
            key={section.id}
            href={`#${section.id}`}
            className="relative px-3 py-2 group"
          >
            <span className={`text-sm md:text-base transition-colors duration-300 ${
              activeSection === section.id ? 'text-blue-400' : 'text-gray-300 hover:text-white'
            }`}>
              {section.label}
            </span>
            {activeSection === section.id && (
              <motion.div
                layoutId="activeSection"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400"
                initial={false}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Link>
        ))}
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-4">
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link 
            href="https://www.linkedin.com/in/yannis-n-guessan-907730211/" 
            target="_blank" 
            className="hover:text-blue-400 transition-colors p-2"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link 
            href="https://github.com/thegoodone14" 
            target="_blank" 
            className="hover:text-blue-400 transition-colors p-2"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;