'use client';
import { useEffect, useRef } from 'react';

export default function HtmlPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Fetch from the correct path
    fetch('/email-sample/index.html')  // Adjust path based on where you place it in public
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to fetch HTML: ${response.status}`);
        }
        return response.text();
      })
      .then(html => {
        if (containerRef.current) {
          containerRef.current.innerHTML = html;
        }
      })
      .catch(error => {
        console.error("Error loading HTML:", error);
      });
  }, []);
  
  return <div ref={containerRef}></div>;
}