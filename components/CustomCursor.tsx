"use client";
import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on desktop
    if (window.matchMedia("(max-width: 768px)").matches) return;

    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('interactive')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '10px',
          height: '10px',
          backgroundColor: isHovering ? 'transparent' : 'var(--secondary-color)',
          border: isHovering ? '2px solid var(--secondary-color)' : 'none',
          borderRadius: '50%',
          transform: `translate(${position.x - 5}px, ${position.y - 5}px) scale(${isHovering ? 4 : 1})`,
          transition: 'transform 0.15s ease-out, background-color 0.15s ease-out, border 0.15s ease-out',
          pointerEvents: 'none',
          zIndex: 99999,
          mixBlendMode: 'difference'
        }}
      />
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '40px',
          height: '40px',
          border: '1px solid rgba(224, 122, 95, 0.4)',
          borderRadius: '50%',
          transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
          transition: 'transform 0.3s ease-out',
          pointerEvents: 'none',
          zIndex: 99998,
          opacity: isHovering ? 0 : 1
        }}
      />
    </>
  );
}
