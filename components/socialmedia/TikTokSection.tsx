// components/socialmedia/TikTokSection.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/Card';

const TikTokSection: React.FC = () => {
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
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.321 5.562C19.114 5.351 19 5.063 19 4.764V4.5C19 4.224 18.776 4 18.5 4H14.5C14.224 4 14 4.224 14 4.5V15.515C14 16.335 13.335 17 12.515 17C11.693 17 11 16.307 11 15.485C11 14.664 11.664 14 12.485 14C12.774 14 13.032 14.082 13.258 14.235C13.467 14.376 13.748 14.278 13.849 14.047V10.401C13.849 10.217 13.687 10.069 13.503 10.081C12.123 10.196 10.829 10.613 9.69 11.274C8.236 12.125 7.087 13.428 6.423 14.983C6.086 15.783 5.92 16.634 5.92 17.501C5.92 21.09 8.83 24 12.42 24C16.013 24 18.92 21.093 18.92 17.5V10.367C20.206 11.304 21.739 11.927 23.383 12.082C23.659 12.102 23.9 11.881 23.9 11.604V7.784C23.9 7.519 23.685 7.303 23.42 7.303C23.393 7.303 23.365 7.305 23.337 7.308C21.221 7.511 19.321 6.79 19.321 5.562Z" fill="url(#tiktok-gradient)"/>
              <defs>
                <linearGradient id="tiktok-gradient" x1="5.92" y1="24" x2="23.9" y2="4" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#69C9D0"/>
                  <stop offset="1" stopColor="#EE1D52"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
            TikTok Creativity
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Virale und trendige Inhalte, die Ihre Zielgruppe auf TikTok begeistern
          </p>
        </div>

        {/* Content Examples */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Trending Challenges Example */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h3 className="text-2xl font-semibold mb-6 text-pink-400">Trending Challenges</h3>
            <Card className="bg-dark-800/30 backdrop-blur-sm border-pink-600/20 overflow-hidden flex-1">
              <CardContent className="p-0">
                <div className="aspect-[9/16] w-[70%] mx-auto relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-blue-500/10"></div>
                  <img 
                    src="/api/placeholder/400/720" 
                    alt="TikTok Challenge Beispiel" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center bg-black/50 rounded-full px-3 py-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                      <span className="text-white text-xs">1.2M</span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white text-xs font-bold overflow-hidden">
                        <img src="/api/placeholder/50/50" alt="Profile" className="w-full h-full object-cover" />
                      </div>
                      <div className="ml-2 flex-1">
                        <p className="text-white text-sm font-medium">@username</p>
                      </div>
                      <div className="flex items-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                        <span className="text-xs">124K</span>
                      </div>
                    </div>
                    <p className="text-white text-xs mt-2">#DanceChallenge #Trending #Viral</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Educational Content Example */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Educational Content</h3>
            <Card className="bg-dark-800/30 backdrop-blur-sm border-cyan-600/20 overflow-hidden flex-1">
              <CardContent className="p-0">
                <div className="aspect-[9/16] w-[70%] mx-auto relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10"></div>
                  <img 
                    src="/api/placeholder/400/720" 
                    alt="TikTok Educational Content Beispiel" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/60 to-transparent">
                    <p className="text-white text-sm font-medium">3 schnelle Social Media Tipps</p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white text-xs">#DigitalMarketing #SocialMedia #TippsUndTricks</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Brand Storytelling Example */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">Brand Storytelling</h3>
            <Card className="bg-dark-800/30 backdrop-blur-sm border-blue-600/20 overflow-hidden flex-1">
              <CardContent className="p-0">
                <div className="aspect-[9/16] w-[70%] mx-auto relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                  <img 
                    src="/api/placeholder/400/720" 
                    alt="TikTok Brand Storytelling Beispiel" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white text-sm font-medium">Die Geschichte hinter unserem neuen Produkt</p>
                    <div className="flex items-center mt-2">
                      <div className="flex items-center text-white mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                        <span className="text-xs">85.4K</span>
                      </div>
                      <div className="flex items-center text-white mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span className="text-xs">2.3K</span>
                      </div>
                      <div className="flex items-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                          <polyline points="16 6 12 2 8 6"></polyline>
                          <line x1="12" y1="2" x2="12" y2="15"></line>
                        </svg>
                        <span className="text-xs">4.1K</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Product Showcases Example */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h3 className="text-2xl font-semibold mb-6 text-purple-400">Product Showcases</h3>
            <Card className="bg-dark-800/30 backdrop-blur-sm border-purple-600/20 overflow-hidden flex-1">
              <CardContent className="p-0">
                <div className="aspect-[9/16] w-[70%] mx-auto relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10"></div>
                  <img 
                    src="/api/placeholder/400/720" 
                    alt="TikTok Product Showcase Beispiel" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-white text-xs font-medium">🛍️ Produkt</span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white text-sm font-medium">Unboxing unserer limitierten Edition</p>
                    <p className="text-white text-xs mt-1">Tippen zum Shoppen</p>
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

export default TikTokSection;