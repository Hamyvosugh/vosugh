// components/Hero.tsx
"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  
  // List of content management skills to animate through
  const contentSkills = [
    "Content Creation",
    "Editorial Planning",
    "CMS Management",
    "Social Media Strategy",
    "Content Analytics"
  ];
  
  const [skillIndex, setSkillIndex] = useState(0);
  
  useEffect(() => {
    setMounted(true);
    
    // Rotate through skills every 3 seconds
    const interval = setInterval(() => {
      setSkillIndex((prev) => (prev + 1) % contentSkills.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  if (!mounted) return null;
  
  return (
    <section className="relative w-full min-h-screen flex items-center bg-transparent overflow-hidden">
      {/* Abstract geometric background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-80 h-80 rounded-full bg-blue-500 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-purple-500 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-blue-500 font-medium uppercase tracking-wider">Creative </p>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Digitaler <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                  Content Manager
                </span>
              </h1>
              
              <div className="h-16">
                <motion.p 
                  key={skillIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl md:text-2xl text-gray-300"
                >
                  {contentSkills[skillIndex]}
                </motion.p>
              </div>
              
              <p className="text-gray-400 max-w-md">
                Ich entwickle und verwalte digitale Inhalte, die Ihre Marke stärken und Ihre Zielgruppe effektiv ansprechen.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-6">
                <Link href="/portfolio" className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity">
                  Portfolio ansehen
                </Link>
                <Link href="/kontakt" className="px-8 py-3 bg-transparent border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-all">
                  Kontakt
                </Link>
              </div>
            </motion.div>
          </div>
          
          <div className="w-full md:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Content creation visual element */}
              <div className="w-full aspect-square max-w-md mx-auto bg-gray-900/80 rounded-xl p-6 border border-white/10 shadow-2xl backdrop-blur-sm relative overflow-hidden">
                {/* Document editor header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-xs text-gray-400 px-2 py-1 rounded bg-gray-800/70">Content Editor</div>
                  </div>
                </div>
                
                {/* Content editor interface */}
                <div className="space-y-3">
                  {/* Title field */}
                  <div className="bg-gray-800/40 rounded p-2">
                    <div className="text-xs text-gray-500 mb-1">TITLE</div>
                    <div className="text-white font-medium">How to Create Engaging Content</div>
                  </div>
                  
                  {/* Rich text editor toolbar */}
                  <div className="flex items-center gap-2 bg-gray-800/40 p-2 rounded">
                    <div className="w-6 h-6 flex items-center justify-center rounded hover:bg-gray-700/50 text-gray-400 text-xs">B</div>
                    <div className="w-6 h-6 flex items-center justify-center rounded hover:bg-gray-700/50 text-gray-400 text-xs italic">I</div>
                    <div className="w-6 h-6 flex items-center justify-center rounded hover:bg-gray-700/50 text-gray-400 text-xs underline">U</div>
                    <div className="h-4 w-px bg-gray-700"></div>
                    <div className="w-6 h-6 flex items-center justify-center rounded bg-blue-500/20 text-blue-400 text-xs">H1</div>
                    <div className="w-6 h-6 flex items-center justify-center rounded hover:bg-gray-700/50 text-gray-400 text-xs">H2</div>
                    <div className="h-4 w-px bg-gray-700"></div>
                    <div className="w-6 h-6 flex items-center justify-center rounded hover:bg-gray-700/50 text-gray-400 text-xs">⋮⋮</div>
                    <div className="w-6 h-6 flex items-center justify-center rounded hover:bg-gray-700/50 text-gray-400 text-xs">⋯</div>
                  </div>
                  
                  {/* Content blocks */}
                  <div className="bg-gray-800/40 rounded p-3 text-gray-300 text-sm">
                    <p className="mb-2">Der Schlüssel zu erfolgreichem Content Marketing liegt in der <span className="text-blue-400">strategischen Planung</span> und der <span className="text-blue-400">zielgruppenorientierten Umsetzung</span>.</p>
                    <p>Erfolgreiche Inhalte müssen:</p>
                  </div>
                  
                  {/* List items */}
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 text-sm">
                      <div className="text-blue-500 mt-0.5">•</div>
                      <div className="bg-gray-800/40 rounded py-1 px-2 text-gray-300 flex-1">Relevant und wertvoll für die Zielgruppe sein</div>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <div className="text-blue-500 mt-0.5">•</div>
                      <div className="bg-gray-800/40 rounded py-1 px-2 text-gray-300 flex-1">Optimiert für Suchmaschinen und soziale Medien</div>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <div className="text-blue-500 mt-0.5">•</div>
                      <div className="bg-gray-800/40 rounded py-1 px-2 text-gray-300 flex-1">Ein klares Call-to-Action enthalten</div>
                    </div>
                  </div>
                </div>
                
                {/* Content metrics dashboard */}
                <div className="mt-6 border-t border-white/10 pt-4">
                  <div className="text-xs text-gray-400 mb-2">CONTENT PERFORMANCE</div>
                  <div className="flex gap-3">
                    <div className="bg-gray-800/40 rounded py-1.5 px-2 flex-1">
                      <div className="text-xs text-gray-500">Views</div>
                      <div className="text-blue-400 font-medium">2.4k</div>
                    </div>
                    <div className="bg-gray-800/40 rounded py-1.5 px-2 flex-1">
                      <div className="text-xs text-gray-500">Engagement</div>
                      <div className="text-purple-400 font-medium">18.5%</div>
                    </div>
                    <div className="bg-gray-800/40 rounded py-1.5 px-2 flex-1">
                      <div className="text-xs text-gray-500">Shares</div>
                      <div className="text-green-400 font-medium">94</div>
                    </div>
                  </div>
                </div>
                
   
                
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-xl rounded-xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center">
          <div className="w-1.5 h-3 bg-white/60 rounded-full mt-1.5"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;