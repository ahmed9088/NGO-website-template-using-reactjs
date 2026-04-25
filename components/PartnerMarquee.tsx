"use client";
import React from 'react';

const partners = [
  "UNICEF", "World Health Organization", "Red Cross", "Oxfam", "Save the Children", "Amnesty International", "WWF", "Doctors Without Borders"
];

export default function PartnerMarquee() {
  return (
    <div style={{
      background: 'var(--surface-color)',
      padding: 'var(--spacing-xl) 0',
      borderTop: '1px solid rgba(0,0,0,0.05)',
      borderBottom: '1px solid rgba(0,0,0,0.05)',
      overflow: 'hidden'
    }}>
      <div className="container">
        <p style={{ 
          textAlign: 'center', 
          textTransform: 'uppercase', 
          letterSpacing: '0.1em', 
          fontSize: '0.85rem',
          color: 'var(--text-secondary)',
          marginBottom: 'var(--spacing-lg)'
        }}>
          Trusted by global organizations
        </p>
      </div>
      
      <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        <div style={{
          display: 'flex',
          gap: '4rem',
          whiteSpace: 'nowrap',
          animation: 'marquee 40s linear infinite'
        }}>
          {/* Double the array for seamless looping */}
          {[...partners, ...partners, ...partners].map((partner, idx) => (
            <div 
              key={idx} 
              style={{
                fontFamily: 'var(--font-playfair), serif',
                fontSize: '1.5rem',
                color: 'var(--text-secondary)',
                opacity: 0.6,
                display: 'inline-block'
              }}
            >
              {partner}
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
}
