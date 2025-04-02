// components/background/InteractiveBackground.tsx
"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import GridBackground from './GridBackground';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
}

const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  // Colors from your tailwind config
  const colors = [
    '#4642eb', // primary-600
    '#9e35ea', // secondary-600
    '#7c87fc', // primary-400
    '#ca8afd', // secondary-400
  ];
  
  // Initialize canvas and particles
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Create initial particles
    const initialParticles: Particle[] = Array.from({ length: 60 }, () => createParticle());
    setParticles(initialParticles);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Create a single particle
  const createParticle = (mx?: number, my?: number): Particle => {
    const isMouseParticle = mx !== undefined && my !== undefined;
    
    return {
      x: isMouseParticle ? mx : Math.random() * dimensions.width,
      y: isMouseParticle ? my : Math.random() * dimensions.height,
      size: isMouseParticle ? Math.random() * 4 + 2 : Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.7,
      speedY: (Math.random() - 0.5) * 0.7,
      opacity: isMouseParticle ? Math.random() * 0.6 + 0.4 : Math.random() * 0.4 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
    };
  };
  
  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
      
      // Add particles on mouse move, but limit the rate
      if (isHovering && Math.random() > 0.85) {
        const newParticle = createParticle(event.clientX, event.clientY);
        setParticles(prev => [...prev.slice(-99), newParticle]);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovering, dimensions]);
  
  // Animation loop
  useEffect(() => {
    if (!canvasRef.current || particles.length === 0) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    
    const render = () => {
      if (!canvasRef.current) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      const updatedParticles = particles.map(particle => {
        // Move particles
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Boundary check with wrapping
        if (particle.x < 0) particle.x = dimensions.width;
        if (particle.x > dimensions.width) particle.x = 0;
        if (particle.y < 0) particle.y = dimensions.height;
        if (particle.y > dimensions.height) particle.y = 0;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();
        
        // Slowly fade out particles
        return {
          ...particle,
          opacity: Math.max(particle.opacity - 0.001, 0),
        };
      }).filter(particle => particle.opacity > 0.01);
      
      // Connect particles that are close to each other
      for (let i = 0; i < updatedParticles.length; i++) {
        for (let j = i + 1; j < updatedParticles.length; j++) {
          const dx = updatedParticles[i].x - updatedParticles[j].x;
          const dy = updatedParticles[i].y - updatedParticles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const opacity = 0.15 * (1 - distance / 150);
            ctx.beginPath();
            ctx.moveTo(updatedParticles[i].x, updatedParticles[i].y);
            ctx.lineTo(updatedParticles[j].x, updatedParticles[j].y);
            ctx.strokeStyle = `rgba(120, 120, 240, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      
      // Add new particles occasionally to maintain density
      if (updatedParticles.length < 60 && Math.random() > 0.95) {
        updatedParticles.push(createParticle());
      }
      
      setParticles(updatedParticles);
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [particles, dimensions]);
  
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      {/* Grid background */}
      <GridBackground />
      
      {/* Particle canvas - CRITICAL FIX: Explicit pointer-events-none */}
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        className="absolute inset-0 pointer-events-none"
        style={{ pointerEvents: 'none' }}
      />
      
      {/* Gradient overlays for depth - CRITICAL FIX: Explicit pointer-events-none */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-transparent to-black opacity-60 pointer-events-none"
        style={{ pointerEvents: 'none' }}
      />
      
      {/* Interactive glow effect that follows the mouse */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-primary-500 opacity-5 blur-3xl pointer-events-none"
        style={{ pointerEvents: 'none' }}
        animate={{
          x: mousePosition.x - 128,
          y: mousePosition.y - 128,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 100,
          mass: 0.5
        }}
      />
      
      {/* Subtle noise texture overlay */}
      <div 
        className="absolute inset-0 bg-noise opacity-5 mix-blend-overlay pointer-events-none"
        style={{ pointerEvents: 'none' }}
      />
    </div>
  );
};

export default InteractiveBackground;