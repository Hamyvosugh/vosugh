// app/social-media/page.tsx
"use client";

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import InstagramSection from '@/components/socialmedia/InstagramSection';
import LinkedInSection from '@/components/socialmedia/LinkedInSection';
import TikTokSection from '@/components/socialmedia/TikTokSection';
import FacebookSection from '@/components/socialmedia/FacebookSection';
import YouTubeSection from '@/components/socialmedia/YouTubeSection';

export default function SocialMediaShowcase() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-dark relative overflow-hidden">
      {/* Background elements */}
      
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-36 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Social Media Content Showcase
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Entdecken Sie meine Expertise in der Erstellung von einzigartigem Content für verschiedene Social-Media-Plattformen
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Showcase Sections */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="pb-32"
      >
        {/* Instagram Section */}
        <motion.section 
          variants={itemVariants}
          className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20"
        >
          <InstagramSection />
        </motion.section>
        
        {/* LinkedIn Section */}
        <motion.section 
          variants={itemVariants}
          className="py-20 bg-gradient-to-r from-blue-900/20 to-cyan-900/20"
        >
          <LinkedInSection />
        </motion.section>
        
        {/* TikTok Section */}
        <motion.section 
          variants={itemVariants}
          className="py-20 bg-gradient-to-r from-gray-900/30 to-cyan-900/20"
        >
          <TikTokSection />
        </motion.section>
        
        {/* Facebook Section */}
        <motion.section 
          variants={itemVariants}
          className="py-20 bg-gradient-to-r from-blue-900/30 to-indigo-900/20"
        >
          <FacebookSection />
        </motion.section>
        
        {/* YouTube Section */}
        <motion.section 
          variants={itemVariants}
          className="py-20 bg-gradient-to-r from-red-900/20 to-rose-900/10"
        >
          <YouTubeSection />
        </motion.section>
      </motion.div>
    </main>
  );
}