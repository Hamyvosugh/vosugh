// components/socialmedia/LinkedInSection.tsx
"use client";

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/Card';

const LinkedInSection: React.FC = () => {
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

  // Video controls
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to toggle play/pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
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
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0A66C2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
            LinkedIn Professional
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professionelle Inhalte, die Ihr Unternehmen als Branchenführer positionieren
          </p>
        </div>

        {/* Content Examples */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Thought Leadership Posts Example */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h3 className="text-2xl font-semibold mb-6 text-indigo-400">Thought Leadership</h3>
            <Card className="bg-dark-800/30 backdrop-blur-sm border-indigo-600/20 overflow-hidden flex-1">
              <CardContent className="p-0">
                <div className="w-[70%] mx-auto relative overflow-hidden rounded-lg bg-dark-900/80 p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-white text-sm font-bold">HV</div>
                    <div className="ml-3">
                      <p className="text-white text-sm font-medium">Hamy Vosugh</p>
                      <p className="text-gray-300 text-xs">Digitaler Content Manager • 2h</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-white text-sm leading-relaxed">
                      5 Schlüsselstrategien, die erfolgreiche Marken in ihrer Content-Strategie umsetzen:
                      <br /><br />
                      1. Konsistente Brand-Voice über alle Kanäle<br />
                      2. Datengestützte Content-Entscheidungen<br />
                      3. Personalisierung auf Kundensegmentebene<br />
                      4. Interaktive Formate zur Steigerung des Engagements<br />
                      5. Strategische Content-Distribution<br /><br />
                      Was würden Sie dieser Liste hinzufügen? Teilen Sie Ihre Gedanken in den Kommentaren!
                    </p>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <span className="flex items-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                      </svg>
                      354
                    </span>
                    <span className="flex items-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                      48
                    </span>
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="16"></line>
                        <line x1="8" y1="12" x2="16" y2="12"></line>
                      </svg>
                      Teilen
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Video Content Example */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">Video Content</h3>
            <Card className="bg-dark-800/30 backdrop-blur-sm border-blue-600/20 overflow-hidden flex-1">
              <CardContent className="p-0">
                <div className="aspect-[9/16] w-[70%] mx-auto relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10"></div>
                  
                  {/* Video element replacing image */}
                  <video 
                    ref={videoRef}
                    className="w-full h-full object-cover cursor-pointer"
                    poster="/api/placeholder/400/720"
                    onClick={togglePlay}
                    playsInline
                  >
                    <source src="/assets/videos/promotion.mp4" type="video/mp4" />
                    Ihr Browser unterstützt keine Videos.
                  </video>
                  
                  {/* Play button overlay */}
                  <div 
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    onClick={togglePlay}
                  >
                    {!isPlaying && (
                      <div className="w-16 h-16 rounded-full bg-blue-500/80 flex items-center justify-center transition-transform hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      </div>
                    )}
                  </div>
                  
                  {/* Video controls */}
                  <div className="absolute top-4 right-4 z-10">
                    <button 
                      className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        togglePlay();
                      }}
                      aria-label={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="6" y="4" width="4" height="16"></rect>
                          <rect x="14" y="4" width="4" height="16"></rect>
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      )}
                    </button>
                  </div>
                  
                  {/* LinkedIn video stats */}
                  <div className="absolute top-4 left-4 bg-black/50 rounded-md px-2 py-1 text-white text-xs flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    2:45
                  </div>
                  
                  {/* Video title and description */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white font-medium mb-1">Experten-Interview: Digital Transformation</p>
                    <div className="flex items-center text-gray-300 text-xs">
                      <span className="flex items-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                        </svg>
                        678
                      </span>
                      <span className="flex items-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                        52
                      </span>
                      <span className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="8" x2="12" y2="16"></line>
                          <line x1="8" y1="12" x2="16" y2="12"></line>
                        </svg>
                        Teilen
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Additional LinkedIn Formats (Optional) */}
        <motion.div 
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-6 text-blue-400">Weitere LinkedIn Formate</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Documents/Slides */}
            <div className="bg-dark-800/30 backdrop-blur-sm border border-blue-600/20 rounded-lg p-4 hover:bg-dark-700/30 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A66C2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h4 className="text-white font-medium mb-1">Dokumente & Slides</h4>
              <p className="text-gray-400 text-sm">Präsentationen und Whitepapers zur Wissensvermittlung</p>
            </div>
            
            {/* Polls */}
            <div className="bg-dark-800/30 backdrop-blur-sm border border-blue-600/20 rounded-lg p-4 hover:bg-dark-700/30 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A66C2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10"></line>
                  <line x1="12" y1="20" x2="12" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="14"></line>
                </svg>
              </div>
              <h4 className="text-white font-medium mb-1">Umfragen</h4>
              <p className="text-gray-400 text-sm">Engagement durch interaktive Meinungsabfragen</p>
            </div>
            
            {/* Articles */}
            <div className="bg-dark-800/30 backdrop-blur-sm border border-blue-600/20 rounded-lg p-4 hover:bg-dark-700/30 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A66C2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
              </div>
              <h4 className="text-white font-medium mb-1">Artikel</h4>
              <p className="text-gray-400 text-sm">Tiefgehende Expertenbeiträge zum Aufbau von Autorität</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LinkedInSection;