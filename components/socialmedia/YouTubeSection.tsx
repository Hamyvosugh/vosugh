// components/socialmedia/YouTubeSection.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/Card';

const YouTubeSection: React.FC = () => {
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
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#FF0000" stroke="none">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
            YouTube Strategy
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professionelle Video-Inhalte, die Ihre Marke auf YouTube stärken und erweitern
          </p>
        </div>

        {/* Content Examples */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Short-form Content Example */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h3 className="text-2xl font-semibold mb-6 text-red-400">Short-form Content</h3>
            <Card className="bg-dark-800/30 backdrop-blur-sm border-red-600/20 overflow-hidden flex-1">
              <CardContent className="p-0">
                <div className="aspect-[9/16] w-[70%] mx-auto relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-pink-500/10"></div>
                  <img 
                    src="/api/placeholder/400/720" 
                    alt="YouTube Shorts Beispiel" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-red-600/80 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-black/50 rounded-md px-2 py-1 text-white text-xs flex items-center">
                      <span>0:45</span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white text-sm font-medium">Quick Tips: Social Media Hacks</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center text-gray-300 text-xs">
                        <span>243K views</span>
                        <span className="mx-1">•</span>
                        <span>2 days ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Tutorial Videos Example */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h3 className="text-2xl font-semibold mb-6 text-orange-400">Tutorial Videos</h3>
            <Card className="bg-dark-800/30 backdrop-blur-sm border-orange-600/20 overflow-hidden flex-1">
              <CardContent className="p-0">
                <div className="w-[70%] mx-auto relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10"></div>
                  <img 
                    src="/api/placeholder/800/450" 
                    alt="YouTube Tutorial Beispiel" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-orange-600/80 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-black/50 backdrop-blur-sm rounded-md px-2 py-1 text-white text-xs flex items-center">
                      <span>15:22</span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                        <img src="/api/placeholder/50/50" alt="Channel" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="text-white text-base font-medium">Social Media Masterclass: Content-Strategie 2025</h4>
                        <div className="flex items-center text-gray-300 text-xs mt-1">
                          <span>Kanalname</span>
                          <span className="mx-1">•</span>
                          <span>56K views</span>
                          <span className="mx-1">•</span>
                          <span>2 weeks ago</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Brand Channels Example */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h3 className="text-2xl font-semibold mb-6 text-rose-400">Brand Channels</h3>
            <Card className="bg-dark-800/30 backdrop-blur-sm border-rose-600/20 overflow-hidden flex-1">
              <CardContent className="p-0">
                <div className="w-[70%] mx-auto relative overflow-hidden rounded-lg">
                  <div className="h-28 bg-gradient-to-r from-rose-600/20 to-red-600/20 relative">
                    <img 
                      src="/api/placeholder/800/200" 
                      alt="YouTube Channel Banner" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-dark-900/80 p-5 relative">
                    <div className="flex flex-col md:flex-row items-center">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-dark-900/80 absolute -top-10 left-5">
                        <img src="/api/placeholder/100/100" alt="Channel Logo" className="w-full h-full object-cover" />
                      </div>
                      <div className="ml-0 md:ml-28 mt-10 md:mt-0 text-center md:text-left">
                        <h4 className="text-white text-lg font-bold">Markenname</h4>
                        <div className="flex items-center justify-center md:justify-start mt-1 text-gray-400 text-sm">
                          <span>@markenname</span>
                          <span className="mx-2">•</span>
                          <span>125K subscribers</span>
                          <span className="mx-2">•</span>
                          <span>243 videos</span>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 md:ml-auto">
                        <button className="bg-red-600 hover:bg-red-700 transition-colors text-white rounded-md px-4 py-2 text-sm font-medium">
                          Subscribe
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
                      <div className="bg-dark-800 rounded-md overflow-hidden">
                        <div className="relative">
                          <img src="/api/placeholder/320/180" alt="Video Thumbnail" className="w-full h-auto" />
                          <div className="absolute bottom-2 right-2 bg-black/70 rounded text-white text-xs px-1">12:34</div>
                        </div>
                        <div className="p-3">
                          <h5 className="text-white text-sm font-medium line-clamp-2">Content-Strategie für Anfänger</h5>
                          <p className="text-gray-400 text-xs mt-1">35K views • 3 weeks ago</p>
                        </div>
                      </div>
                      <div className="bg-dark-800 rounded-md overflow-hidden">
                        <div className="relative">
                          <img src="/api/placeholder/320/180" alt="Video Thumbnail" className="w-full h-auto" />
                          <div className="absolute bottom-2 right-2 bg-black/70 rounded text-white text-xs px-1">8:47</div>
                        </div>
                        <div className="p-3">
                          <h5 className="text-white text-sm font-medium line-clamp-2">Social Media Trends 2025</h5>
                          <p className="text-gray-400 text-xs mt-1">42K views • 2 weeks ago</p>
                        </div>
                      </div>
                      <div className="bg-dark-800 rounded-md overflow-hidden">
                        <div className="relative">
                          <img src="/api/placeholder/320/180" alt="Video Thumbnail" className="w-full h-auto" />
                          <div className="absolute bottom-2 right-2 bg-black/70 rounded text-white text-xs px-1">17:22</div>
                        </div>
                        <div className="p-3">
                          <h5 className="text-white text-sm font-medium line-clamp-2">Erfolgreiche Content-Planung</h5>
                          <p className="text-gray-400 text-xs mt-1">29K views • 5 days ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Video Series Example */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h3 className="text-2xl font-semibold mb-6 text-amber-400">Video Series</h3>
            <Card className="bg-dark-800/30 backdrop-blur-sm border-amber-600/20 overflow-hidden flex-1">
              <CardContent className="p-0">
                <div className="w-[70%] mx-auto relative overflow-hidden rounded-lg bg-dark-900/80 p-5">
                  <div className="mb-4">
                    <h4 className="text-white text-lg font-bold flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFB400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
                      </svg>
                      Social Media Masterclass Serie
                    </h4>
                    <p className="text-gray-400 text-sm ml-7">Eine komplette Serie zur Optimierung Ihrer Social-Media-Strategie</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-dark-800 rounded-md overflow-hidden flex">
                      <div className="w-32 h-20 flex-shrink-0 relative">
                        <img src="/api/placeholder/128/80" alt="Thumbnail" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                          <div className="w-8 h-8 rounded-full bg-red-600/80 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polygon points="5 3 19 12 5 21 5 3"></polygon>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="p-3">
                        <p className="text-white text-sm font-medium">Episode 1: Grundlagen der Content-Erstellung</p>
                        <p className="text-gray-400 text-xs mt-1">86K views • 18:24</p>
                      </div>
                    </div>
                    
                    <div className="bg-dark-800 rounded-md overflow-hidden flex">
                      <div className="w-32 h-20 flex-shrink-0 relative">
                        <img src="/api/placeholder/128/80" alt="Thumbnail" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                          <div className="w-8 h-8 rounded-full bg-red-600/80 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polygon points="5 3 19 12 5 21 5 3"></polygon>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="p-3">
                        <p className="text-white text-sm font-medium">Episode 2: Effektives Content Management</p>
                        <p className="text-gray-400 text-xs mt-1">64K views • 21:35</p>
                      </div>
                    </div>
                    
                    <div className="bg-dark-800 rounded-md overflow-hidden flex">
                      <div className="w-32 h-20 flex-shrink-0 relative">
                        <img src="/api/placeholder/128/80" alt="Thumbnail" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                          <div className="w-8 h-8 rounded-full bg-red-600/80 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polygon points="5 3 19 12 5 21 5 3"></polygon>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="p-3">
                        <p className="text-white text-sm font-medium">Episode 3: Analytics & Optimierung</p>
                        <p className="text-gray-400 text-xs mt-1">42K views • 24:08</p>
                      </div>
                    </div>
                    
                    <div className="rounded-md border border-dashed border-gray-700 p-3 flex justify-center items-center text-gray-500 text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="16"></line>
                        <line x1="8" y1="12" x2="16" y2="12"></line>
                      </svg>
                      Neue Episode kommt bald
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

export default YouTubeSection;