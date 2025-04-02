// components/socialmedia/FacebookSection.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/Card';

const FacebookSection: React.FC = () => {
  // Variants for animations
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={contentVariants}
        className="max-w-6xl mx-auto"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#1877F2" stroke="none">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
            Facebook Engagement
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Interaktive und gemeinschaftsbildende Inhalte für Ihre Facebook-Präsenz
          </p>
        </div>

        {/* Content Examples */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Community Posts Example */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">Community Posts</h3>
            <Card className="bg-dark-800/30 backdrop-blur-sm border-blue-600/20 overflow-hidden flex-1">
              <CardContent className="p-0">
                <div className="w-[70%] mx-auto relative overflow-hidden rounded-lg bg-dark-900/60 p-5">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center overflow-hidden">
                      <img src="/api/placeholder/50/50" alt="Brand" className="w-full h-full object-cover" />
                    </div>
                    <div className="ml-3">
                      <p className="text-white text-sm font-medium">Markenname</p>
                      <p className="text-gray-400 text-xs">Gestern um 14:30 • <span className="text-blue-400">🌎</span></p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-white text-sm leading-relaxed">
                      Wir lieben unsere Community! 💙 Teilt uns in den Kommentaren mit, was euch an unseren Produkten am besten gefällt. Die drei besten Antworten erhalten ein exklusives Geschenk! 🎁
                    </p>
                  </div>
                  <div className="rounded-lg overflow-hidden mb-3">
                    <img 
                      src="/api/placeholder/600/350" 
                      alt="Community Post Beispiel" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between text-gray-400 text-xs border-t border-gray-700 pt-3">
                    <div className="flex items-center">
                      <span className="flex items-center mr-2">
                        <span className="flex -space-x-1 mr-1">
                          <span className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center text-white">👍</span>
                          <span className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center text-white">❤️</span>
                        </span>
                        243
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">89 Kommentare</span>
                      <span>32 Mal geteilt</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-700 mt-3 pt-3">
                    <button className="flex items-center justify-center text-gray-400 hover:text-gray-300 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                      </svg>
                      Gefällt mir
                    </button>
                    <button className="flex items-center justify-center text-gray-400 hover:text-gray-300 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                      Kommentieren
                    </button>
                    <button className="flex items-center justify-center text-gray-400 hover:text-gray-300 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                        <polyline points="16 6 12 2 8 6"></polyline>
                        <line x1="12" y1="2" x2="12" y2="15"></line>
                      </svg>
                      Teilen
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Live Events Example */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h3 className="text-2xl font-semibold mb-6 text-red-400">Live Events</h3>
            <Card className="bg-dark-800/30 backdrop-blur-sm border-red-600/20 overflow-hidden flex-1">
              <CardContent className="p-0">
                <div className="w-[70%] mx-auto relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-blue-500/10"></div>
                  <img 
                    src="/api/placeholder/600/350" 
                    alt="Facebook Live Event Beispiel" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-red-600 text-white text-xs font-medium px-2 py-1 rounded-md flex items-center">
                      <span className="mr-1">●</span> LIVE
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md">
                      478 Zuschauer
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full overflow-hidden">
                        <img src="/api/placeholder/50/50" alt="Brand" className="w-full h-full object-cover" />
                      </div>
                      <div className="ml-2">
                        <p className="text-white text-sm font-medium">Markenname</p>
                      </div>
                    </div>
                    <p className="text-white text-sm font-medium mb-2">Q&A Session: Die Zukunft des digitalen Marketings</p>
                    <div className="flex space-x-2">
                      <button className="bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                        </svg>
                        Gefällt mir
                      </button>
                      <button className="bg-gray-700 text-white text-xs font-medium px-3 py-1 rounded flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                        Kommentieren
                      </button>
                      <button className="bg-gray-700 text-white text-xs font-medium px-3 py-1 rounded flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                          <polyline points="16 6 12 2 8 6"></polyline>
                          <line x1="12" y1="2" x2="12" y2="15"></line>
                        </svg>
                        Teilen
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Interactive Content Example */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h3 className="text-2xl font-semibold mb-6 text-green-400">Interactive Content</h3>
            <Card className="bg-dark-800/30 backdrop-blur-sm border-green-600/20 overflow-hidden flex-1">
              <CardContent className="p-0">
                <div className="w-[70%] mx-auto relative overflow-hidden rounded-lg bg-dark-900/60 p-5">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center overflow-hidden">
                      <img src="/api/placeholder/50/50" alt="Brand" className="w-full h-full object-cover" />
                    </div>
                    <div className="ml-3">
                      <p className="text-white text-sm font-medium">Markenname</p>
                      <p className="text-gray-400 text-xs">Gesponsert</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-white text-sm leading-relaxed mb-3">
                      Was ist Ihr bevorzugtes Social Media Tool? Stimmen Sie ab und teilen Sie Ihre Meinung in den Kommentaren! ⬇️
                    </p>
                    <div className="space-y-2">
                      <div className="bg-dark-800 rounded-md p-3 flex items-center justify-between border border-gray-700">
                        <span className="text-white text-sm">Instagram</span>
                        <div className="w-24 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                        <span className="text-gray-400 text-xs">65%</span>
                      </div>
                      <div className="bg-dark-800 rounded-md p-3 flex items-center justify-between border border-gray-700">
                        <span className="text-white text-sm">Facebook</span>
                        <div className="w-24 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full" style={{ width: '42%' }}></div>
                        </div>
                        <span className="text-gray-400 text-xs">42%</span>
                      </div>
                      <div className="bg-dark-800 rounded-md p-3 flex items-center justify-between border border-gray-700">
                        <span className="text-white text-sm">TikTok</span>
                        <div className="w-24 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full" style={{ width: '76%' }}></div>
                        </div>
                        <span className="text-gray-400 text-xs">76%</span>
                      </div>
                      <div className="bg-dark-800 rounded-md p-3 flex items-center justify-between border border-gray-700">
                        <span className="text-white text-sm">LinkedIn</span>
                        <div className="w-24 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full" style={{ width: '38%' }}></div>
                        </div>
                        <span className="text-gray-400 text-xs">38%</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-xs">1,245 Stimmen • 3 Tage übrig</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Page Campaigns Example */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h3 className="text-2xl font-semibold mb-6 text-yellow-400">Page Campaigns</h3>
            <Card className="bg-dark-800/30 backdrop-blur-sm border-yellow-600/20 overflow-hidden flex-1">
              <CardContent className="p-0">
                <div className="w-[70%] mx-auto relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10"></div>
                  <img 
                    src="/api/placeholder/600/350" 
                    alt="Facebook Page Campaign Beispiel" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 via-black/70 to-transparent">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                      <div className="mb-4 md:mb-0 md:mr-4">
                        <h4 className="text-white text-lg font-bold mb-2">Sommer-Rabattaktion</h4>
                        <p className="text-gray-300 text-sm">Nur für kurze Zeit: 25% Rabatt auf alle Sommerprodukte!</p>
                      </div>
                      <button className="bg-yellow-500 hover:bg-yellow-600 transition-colors text-white text-sm font-medium px-4 py-2 rounded whitespace-nowrap">
                        Jetzt einkaufen
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default FacebookSection;