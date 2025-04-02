// components/socialmedia/InstagramSection.tsx
"use client";

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/Card';

const InstagramSection: React.FC = () => {
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

  // Video controls for each video
  const reelsVideoRef = useRef<HTMLVideoElement>(null);
  const storiesVideoRef = useRef<HTMLVideoElement>(null);
  const feedVideoRef = useRef<HTMLVideoElement>(null);
  const carouselVideoRef = useRef<HTMLVideoElement>(null);

  const [playingStatus, setPlayingStatus] = useState({
    reels: false,
    stories: false,
    feed: false,
    carousel: false
  });

  // Function to toggle play/pause
  const togglePlay = (videoType: 'reels' | 'stories' | 'feed' | 'carousel') => {
    const videoRefs = {
      reels: reelsVideoRef,
      stories: storiesVideoRef,
      feed: feedVideoRef,
      carousel: carouselVideoRef
    };

    const videoRef = videoRefs[videoType];
    
    if (videoRef.current) {
      if (playingStatus[videoType]) {
        videoRef.current.pause();
      } else {
        // Pause all other videos first
        Object.keys(videoRefs).forEach((type) => {
          if (type !== videoType && videoRefs[type as keyof typeof videoRefs].current) {
            videoRefs[type as keyof typeof videoRefs].current!.pause();
          }
        });
        
        // Update all playing statuses
        setPlayingStatus({
          reels: false,
          stories: false,
          feed: false,
          carousel: false,
          [videoType]: true
        });
        
        videoRef.current.play();
        return;
      }
    }
    
    setPlayingStatus({
      ...playingStatus,
      [videoType]: !playingStatus[videoType]
    });
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
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="url(#instagram-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <defs>
                <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FCAF45" />
                  <stop offset="25%" stopColor="#E1306C" />
                  <stop offset="50%" stopColor="#C13584" />
                  <stop offset="75%" stopColor="#833AB4" />
                  <stop offset="100%" stopColor="#5851DB" />
                </linearGradient>
              </defs>
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <circle cx="12" cy="12" r="3"></circle>
              <circle cx="17.5" cy="6.5" r="1.5"></circle>
            </svg>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500">
            Instagram Mastery
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Kreative und ansprechende Inhalte, die Ihre Marke auf Instagram zum Leben erwecken
          </p>
        </div>

        {/* Content Examples */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Stories Example */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h3 className="text-2xl font-semibold mb-6 text-pink-400">Stories</h3>
            <Card className="bg-dark-800/30 backdrop-blur-sm border-pink-600/20 overflow-hidden flex-1">
              <CardContent className="p-0">
                <div className="aspect-[9/16] w-[70%] mx-auto relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10"></div>
                  
                  {/* Video instead of image for stories */}
                  <video 
                    ref={storiesVideoRef}
                    onClick={() => togglePlay('stories')}
                    className="w-full h-full object-cover cursor-pointer"
                    poster="/socialmedia/story-instagram.webp"
                    playsInline
                  >
                    <source src="/socialmedia/story.mp4" type="video/mp4" />
                    Ihr Browser unterstützt keine Videos.
                  </video>
                  
                  {/* Play/Pause overlay */}
                  <div className="absolute top-0 left-0 right-0 p-4">
                    <div className="flex items-center text-white">
                      <button 
                        className="mr-2 focus:outline-none"
                        onClick={(e) => {
                          e.stopPropagation();
                          togglePlay('stories');
                        }}
                        aria-label={playingStatus.stories ? "Pause" : "Play"}
                      >
                        {playingStatus.stories ? (
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
                      <span className="text-sm font-medium">Story Highlight</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Reels Example */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h3 className="text-2xl font-semibold mb-6 text-purple-400">Reels</h3>
            <Card className="bg-dark-800/30 backdrop-blur-sm border-purple-600/20 overflow-hidden flex-1">
              <CardContent className="p-0">
                <div className="aspect-[9/16] w-[70%] mx-auto relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10"></div>
                  
                  {/* Video element for reels */}
                  <video 
                    ref={reelsVideoRef}
                    onClick={() => togglePlay('reels')}
                    className="w-full h-full object-cover cursor-pointer"
                    poster="/api/placeholder/400/720"
                    playsInline
                  >
                    <source src="/assets/videos/reel.mp4" type="video/mp4" />
                    Ihr Browser unterstützt keine Videos.
                  </video>
                  
                  {/* Play/pause controls */}
                  <div className="absolute top-0 left-0 right-0 p-4">
                    <div className="flex items-center text-white">
                      <button 
                        className="mr-2 focus:outline-none"
                        onClick={(e) => {
                          e.stopPropagation();
                          togglePlay('reels');
                        }}
                        aria-label={playingStatus.reels ? "Pause" : "Play"}
                      >
                        {playingStatus.reels ? (
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
                      <span className="text-sm font-medium">Trend Challenge</span>
                    </div>
                  </div>
                  
                  {/* Social media interactions */}
                  <div className="absolute bottom-4 right-4 flex flex-col items-center space-y-4">
                    <button className="text-white hover:text-purple-300 transition-colors" aria-label="Like">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                      <span className="text-xs block mt-1">1.2k</span>
                    </button>
                    <button className="text-white hover:text-purple-300 transition-colors" aria-label="Comment">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                      </svg>
                      <span className="text-xs block mt-1">342</span>
                    </button>
                    <button className="text-white hover:text-purple-300 transition-colors" aria-label="Share">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                      <span className="text-xs block mt-1">78</span>
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          

          {/* Carousel Example */}
          
        </div>
      </motion.div>
    </div>
  );
};

export default InstagramSection;