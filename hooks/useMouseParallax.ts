// hooks/useMouseParallax.ts
import { useState, useEffect, useRef } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

interface ParallaxValues {
  offsetX: number;
  offsetY: number;
  rotateX: number;
  rotateY: number;
}

/**
 * Custom hook for mouse parallax effects
 * @param strength - Strength of the parallax effect (0-1)
 * @param damping - Damping factor to make movement smoother (higher = smoother)
 * @returns Parallax offset and rotation values
 */
const useMouseParallax = (strength = 0.05, damping = 20): ParallaxValues => {
  const mousePositionRef = useRef<MousePosition>({ x: 0, y: 0 });
  const [parallaxValues, setParallaxValues] = useState<ParallaxValues>({
    offsetX: 0,
    offsetY: 0,
    rotateX: 0,
    rotateY: 0,
  });
  
  // Animation frame reference to clean up properly
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // Calculate distance from center (normalized to -1 to 1)
      const normalizedX = (e.clientX - centerX) / centerX;
      const normalizedY = (e.clientY - centerY) / centerY;
      
      mousePositionRef.current = { x: normalizedX, y: normalizedY };
    };

    const updateParallax = () => {
      setParallaxValues((prev) => {
        // Apply damping for smoother transitions
        const offsetX = prev.offsetX + (mousePositionRef.current.x * strength * 100 - prev.offsetX) / damping;
        const offsetY = prev.offsetY + (mousePositionRef.current.y * strength * 100 - prev.offsetY) / damping;
        
        // Calculate subtle rotation effects
        const rotateX = prev.rotateX + (mousePositionRef.current.y * -1 * strength * 10 - prev.rotateX) / damping;
        const rotateY = prev.rotateY + (mousePositionRef.current.x * strength * 10 - prev.rotateY) / damping;
        
        return { offsetX, offsetY, rotateX, rotateY };
      });
      
      animationFrameRef.current = requestAnimationFrame(updateParallax);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameRef.current = requestAnimationFrame(updateParallax);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [strength, damping]); // Only re-run if these change

  return parallaxValues;
};

export default useMouseParallax;