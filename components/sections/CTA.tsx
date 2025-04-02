// components/sections/CTA.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900/30 to-black/60 z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Bereit für digitalen Erfolg?
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam Ihre digitale Präsenz verbessern und ansprechende Inhalte für Ihre Zielgruppe erstellen.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link 
              href="/kontakt" 
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium text-lg hover:opacity-90 transition-opacity transform hover:scale-105 duration-300"
            >
              Kontaktieren Sie mich
            </Link>
            

          </div>
        </motion.div>
      </div>
      
      {/* Design elements */}
      <div className="absolute -bottom-10 left-0 right-0 h-20 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 blur-xl"></div>
    </section>
  );
};

export default CTA;