"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    // Simuler l'envoi
    setTimeout(() => {
      setStatus("sent");
      e.target.reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-20">
      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Me contacter
        </motion.h2>

        <motion.div
          className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Nom complet
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                required
                rows={5}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="Votre message..."
              />
            </div>

            <div>
              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === "sending"}
              >
                {status === "sending" ? "Envoi en cours..." : status === "sent" ? "Message envoyé !" : "Envoyer"}
              </motion.button>
            </div>
          </form>

          <div className="mt-12 text-center text-gray-300">
            <p>Ou contactez-moi directement par email :</p>
            <a 
              href="mailto:votre@email.com"
              className="inline-block mt-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              yannisnguessan99@gmail.com
            </a>
          </div>
          
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;