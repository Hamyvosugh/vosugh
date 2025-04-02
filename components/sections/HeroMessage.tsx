'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Code, PenTool, Workflow } from 'lucide-react';

const HeroMessage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      } 
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 10
      }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 15
      }
    },
    hover: { 
      scale: 1.05, 
      boxShadow: "0 0 30px rgba(79, 70, 229, 0.3)",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6 py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl relative z-10"
      >
        <motion.div 
          variants={itemVariants}
          className="mb-2 text-sm font-medium tracking-widest uppercase text-primary-400"
        >
          DIGITALER CONTENT MANAGER
        </motion.div>
        
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
            Du träumst,
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-secondary-600">
            Ich realisiere.
          </span>
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto"
        >
          Ich verwandle deine Vision in greifbare Ergebnisse
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {/* First card - Positioned correctly according to screenshot */}
          <motion.div 
            variants={cardVariants}
            whileHover="hover"
            className="backdrop-blur-lg bg-dark-800/30 border border-primary-500/20 rounded-xl p-5 shadow-glow transform transition-all duration-300"
          >
            <div className="flex items-center justify-center mb-2">
              <Code size={20} className="text-primary-400 mr-2" />
              <span className="text-base font-medium text-primary-400">
                • Web- & App-Entwicklung
              </span>
            </div>
          </motion.div>
          
          {/* Second card - Content Creation */}
          <motion.div 
            variants={cardVariants}
            whileHover="hover"
            className="backdrop-blur-lg bg-dark-800/30 border border-primary-500/20 rounded-xl p-5 shadow-glow transform transition-all duration-300"
          >
            <div className="flex items-center justify-center mb-2">
              <PenTool size={20} className="text-secondary-400 mr-2" />
              <span className="text-base font-medium text-secondary-400">
                • Content Creation
              </span>
            </div>
          </motion.div>
          
          {/* Third card - Automatisierungslösungen */}
          <motion.div 
            variants={cardVariants}
            whileHover="hover"
            className="backdrop-blur-lg bg-dark-800/30 border border-primary-500/20 rounded-xl p-5 shadow-glow transform transition-all duration-300"
          >
            <div className="flex items-center justify-center mb-2">
              <Workflow size={20} className="text-purple-400 mr-2" />
              <span className="text-base font-medium text-purple-400">
                • Automatisierung
              </span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Decorative elements */}
      <div className="absolute left-10 top-1/3 w-2 h-20 bg-primary-500/30 rounded-full blur-sm"></div>
      <div className="absolute right-10 bottom-1/3 w-2 h-20 bg-secondary-500/30 rounded-full blur-sm"></div>
      <div className="absolute left-1/4 bottom-20 w-4 h-4 bg-primary-500/50 rounded-full blur-sm"></div>
      <div className="absolute right-1/4 top-20 w-4 h-4 bg-secondary-500/50 rounded-full blur-sm"></div>
    </div>
  );
};

export default HeroMessage;