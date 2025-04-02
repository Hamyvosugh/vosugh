// components/ParallaxElements.tsx
"use client";

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import useMouseParallax from '../../hooks/useMouseParallax';

const ParallaxElements = () => {
  const parallax = useMouseParallax(0.03, 30);
  
  // Define element shapes - memoize to prevent re-creation on renders
  const elements = useMemo(() => [
    {
      type: 'circle',
      size: 60,
      x: '15%',
      y: '20%',
      depth: 0.6,
      color: 'rgba(79, 70, 229, 0.15)', // primary
      blur: 'blur-lg',
    },
    {
      type: 'rect',
      size: 80,
      x: '85%',
      y: '25%',
      depth: 0.8,
      color: 'rgba(158, 53, 234, 0.12)', // secondary
      blur: 'blur-md',
    },
    {
      type: 'circle',
      size: 120,
      x: '75%',
      y: '70%',
      depth: 0.4,
      color: 'rgba(79, 70, 229, 0.08)', // primary
      blur: 'blur-xl',
    },
    {
      type: 'rect',
      size: 100,
      x: '25%',
      y: '80%',
      depth: 0.7,
      color: 'rgba(158, 53, 234, 0.1)', // secondary
      blur: 'blur-xl',
    },
    {
      type: 'diamond',
      size: 70,
      x: '40%',
      y: '30%',
      depth: 0.5,
      color: 'rgba(124, 135, 252, 0.08)', // primary-400
      blur: 'blur-md',
    },
  ], []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden">
      {elements.map((el, index) => {
        // Apply different parallax strength based on depth
        const offsetX = parallax.offsetX * el.depth;
        const offsetY = parallax.offsetY * el.depth;
        
        let shape;
        if (el.type === 'circle') {
          shape = (
            <div 
              className={`absolute rounded-full ${el.blur}`}
              style={{
                width: `${el.size}px`,
                height: `${el.size}px`,
                backgroundColor: el.color,
                left: `calc(${el.x} - ${el.size / 2}px)`,
                top: `calc(${el.y} - ${el.size / 2}px)`,
              }}
            />
          );
        } else if (el.type === 'rect') {
          shape = (
            <div 
              className={`absolute rounded-md ${el.blur}`}
              style={{
                width: `${el.size}px`,
                height: `${el.size}px`,
                backgroundColor: el.color,
                left: `calc(${el.x} - ${el.size / 2}px)`,
                top: `calc(${el.y} - ${el.size / 2}px)`,
              }}
            />
          );
        } else if (el.type === 'diamond') {
          shape = (
            <div 
              className={`absolute ${el.blur}`}
              style={{
                width: `${el.size}px`,
                height: `${el.size}px`,
                backgroundColor: el.color,
                left: `calc(${el.x} - ${el.size / 2}px)`,
                top: `calc(${el.y} - ${el.size / 2}px)`,
                transform: 'rotate(45deg)',
              }}
            />
          );
        }
        
        return (
          <motion.div
            key={index}
            initial={{ x: 0, y: 0 }}
            animate={{
              x: offsetX,
              y: offsetY,
              rotateX: parallax.rotateX * el.depth,
              rotateY: parallax.rotateY * el.depth,
            }}
            transition={{
              type: "spring",
              mass: 0.3,
              damping: 15,
              stiffness: 40
            }}
            className="absolute"
            style={{
              left: el.x,
              top: el.y,
              zIndex: 0,
            }}
          >
            {shape}
          </motion.div>
        );
      })}
    </div>
  );
};

export default ParallaxElements;