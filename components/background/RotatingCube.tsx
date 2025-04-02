// components/RotatingCube.tsx
"use client";

import { motion } from 'framer-motion';

interface RotatingCubeProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  size?: number;
  color?: string;
  delay?: number;
}

const RotatingCube = ({
  position,
  size = 100,
  color = '#4642eb',
  delay = 0
}: RotatingCubeProps) => {
  // Calculate position classes
  const positionClasses = {
    'top-left': 'top-20 left-20',
    'top-right': 'top-20 right-20',
    'bottom-left': 'bottom-20 left-20',
    'bottom-right': 'bottom-20 right-20',
  };

  // Animation variants for 3D rotation
  const cubeVariants = {
    animate: {
      rotateX: [0, 360],
      rotateY: [0, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
        delay: delay,
      }
    }
  };

  // Face styles for 3D cube
  const faceStyle = {
    position: 'absolute' as const,
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: 'transparent',
    border: `1px solid ${color}`,
    backfaceVisibility: 'visible' as const,
  };

  return (
    <div className={`absolute ${positionClasses[position]} z-0 opacity-40`}>
      <motion.div
        className="relative preserve-3d"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          transformStyle: 'preserve-3d' as const,
        }}
        variants={cubeVariants}
        animate="animate"
      >
        {/* Front face */}
        <div 
          style={{
            ...faceStyle,
            transform: `translateZ(${size / 2}px)`,
          }}
        />
        
        {/* Back face */}
        <div 
          style={{
            ...faceStyle,
            transform: `translateZ(-${size / 2}px) rotateY(180deg)`,
          }}
        />
        
        {/* Right face */}
        <div 
          style={{
            ...faceStyle,
            transform: `translateX(${size / 2}px) rotateY(90deg)`,
          }}
        />
        
        {/* Left face */}
        <div 
          style={{
            ...faceStyle,
            transform: `translateX(-${size / 2}px) rotateY(-90deg)`,
          }}
        />
        
        {/* Top face */}
        <div 
          style={{
            ...faceStyle,
            transform: `translateY(-${size / 2}px) rotateX(90deg)`,
          }}
        />
        
        {/* Bottom face */}
        <div 
          style={{
            ...faceStyle,
            transform: `translateY(${size / 2}px) rotateX(-90deg)`,
          }}
        />
      </motion.div>
    </div>
  );
};

export default RotatingCube;