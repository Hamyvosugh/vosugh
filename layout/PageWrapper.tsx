// components/PageWrapper.tsx
"use client";

import { motion } from 'framer-motion';
import { ReactNode, useEffect } from 'react';
import ParallaxElements from '../components/background/ParallaxElements';
import RotatingCube from '../components/background/RotatingCube';
import Navbar from '../components/Navbar';
import GridBackground from '../components/background/GridBackground';


interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  // Debug function to check if there are any overlay elements blocking clicks
  useEffect(() => {
    const checkForOverlays = () => {
      console.log('Checking for elements that might block clicks');
      // Look for any elements with pointer-events set
      const elements = document.querySelectorAll('*');
      let suspiciousElements = 0;
      
      elements.forEach(el => {
        const style = window.getComputedStyle(el);
        // Check if element covers the whole viewport and has pointer-events: auto
        const rect = el.getBoundingClientRect();
        const coversViewport = 
          rect.width >= window.innerWidth * 0.9 &&
          rect.height >= window.innerHeight * 0.9 &&
          rect.top <= 10 &&
          rect.left <= 10;
        
        if (coversViewport && style.pointerEvents !== 'none' && el.tagName !== 'MAIN' && !el.closest('main')) {
          suspiciousElements++;
          console.warn('Possible overlay blocking clicks:', el, {
            position: style.position,
            zIndex: style.zIndex,
            pointerEvents: style.pointerEvents,
            dimensions: rect
          });
        }
      });
      
      console.log(`Found ${suspiciousElements} possible elements blocking clicks`);
    };
    
    // Run the check after a short delay to ensure the page is fully rendered
    const timeoutId = setTimeout(checkForOverlays, 2000);
    return () => clearTimeout(timeoutId);
  }, []);
  
  return (
    <div className="relative min-h-screen">
      {/* Interactive background - ensure it doesn't block clicks */}
       
        <GridBackground />
       
      
      {/* Decorative 3D elements */}
      <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <RotatingCube position="top-right" size={80} color="#4642eb" delay={2} />
        <RotatingCube position="bottom-left" size={120} color="#9e35ea" delay={1} />
      </div>
      
      {/* Parallax floating elements - FIXED: Added fixed positioning and proper z-index */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <ParallaxElements />
      </div>
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content with fade-in effect - ensure it has a high z-index */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-10"
      >
        {children}
      </motion.main>
      
      {/* Footer can be added here */}
    </div>
  );
};

export default PageWrapper;