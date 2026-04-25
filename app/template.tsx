"use client";

import React, { useEffect, useState } from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div 
      style={{
        opacity: isMounted ? 1 : 0,
        transform: isMounted ? 'translateY(0)' : 'translateY(10px)',
        transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {children}
    </div>
  );
}
