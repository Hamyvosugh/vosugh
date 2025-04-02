// components/background/GridBackground.tsx
"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const GridBackground = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  
  // Scroll parallax effect
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleScroll = () => {
      if (!gridRef.current) return;
      const scrollY = window.scrollY;
      gridRef.current.style.transform = `translateY(${scrollY * 0.15}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ pointerEvents: 'none' }}>
      <div 
        ref={gridRef}
        className="absolute inset-0 w-full h-[200vh] pointer-events-none" 
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(79, 70, 229, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(79, 70, 229, 0.05) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          backgroundPosition: 'center center',
          pointerEvents: 'none'
        }}
      />
      
      {/* Horizontal lines with animation */}
      {Array.from({ length: 5 }).map((_, index) => (
        <motion.div
          key={`h-line-${index}`}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent pointer-events-none"
          style={{ top: `${20 + index * 15}%`, pointerEvents: 'none' }}
          animate={{
            opacity: [0.9, 0.9, 0.9],
            scaleY: [1, 1.5, 1],
          }}
          transition={{
            duration: 10 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Vertical lines with animation */}
      {Array.from({ length: 5 }).map((_, index) => (
        <motion.div
          key={`v-line-${index}`}
          className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-secondary-500/20 to-transparent pointer-events-none"
          style={{ left: `${20 + index * 15}%`, pointerEvents: 'none' }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scaleX: [1, 1.5, 1],
          }}
          transition={{
            duration: 12 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Glowing accent spots */}
      {Array.from({ length: 5 }).map((_, index) => (
        <motion.div
          key={`glow-${index}`}
          className="absolute rounded-full bg-primary-500/10 blur-3xl pointer-events-none"
          style={{
            width: `${Math.random() * 30 + 10}vh`,
            height: `${Math.random() * 30 + 10}vh`,
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
            pointerEvents: 'none'
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default GridBackground;