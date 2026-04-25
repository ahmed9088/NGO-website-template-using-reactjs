import React from 'react';
import Link from 'next/link';
import DonationWidget from './DonationWidget';

export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '80px',
      overflow: 'hidden',
      backgroundColor: 'var(--bg-color)'
    }}>
      {/* Decorative background element */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(224, 122, 95, 0.1) 0%, rgba(251, 249, 246, 0) 70%)',
        zIndex: 0
      }}></div>

      <div className="container grid-2-asym" style={{ position: 'relative', zIndex: 1 }}>
        <div className="animate-fade-in-up">
          <span style={{ 
            display: 'inline-block',
            padding: '0.25rem 1rem',
            border: '1px solid var(--secondary-color)',
            borderRadius: 'var(--border-radius-full)',
            color: 'var(--secondary-color)',
            fontSize: '0.85rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: 'var(--spacing-md)'
          }}>
            Global Impact Initiative
          </span>
          <h1 style={{ marginBottom: 'var(--spacing-md)' }}>
            Empower <span style={{ fontStyle: 'italic', color: 'var(--secondary-color)' }}>communities</span>.<br/>Transform futures.
          </h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '500px', marginBottom: 'var(--spacing-lg)' }}>
            We are on a mission to eradicate poverty and provide sustainable education, healthcare, and clean water to the world's most vulnerable regions.
          </p>
          <div style={{ display: 'flex', gap: 'var(--spacing-md)', alignItems: 'center' }}>
            <Link href="/campaigns" className="btn btn-primary">
              Discover Our Work
            </Link>
            <Link href="/about" className="btn btn-outline" style={{ border: 'none', borderBottom: '1px solid var(--primary-color)', borderRadius: 0, padding: '0.5rem 0' }}>
              Read Our Story
            </Link>
          </div>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.3s', position: 'relative' }}>
          {/* Main Image */}
          <div style={{ position: 'relative', borderRadius: 'var(--border-radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
            <img 
              src="https://loremflickr.com/1470/800/charity,children,smile?lock=1" 
              alt="Children smiling" 
              style={{ width: '100%', height: '600px', objectFit: 'cover' }}
            />
            {/* Overlay Donation Widget */}
            <div style={{ position: 'absolute', bottom: '-40px', left: '-40px', zIndex: 2 }}>
              <div style={{ transform: 'scale(0.85)', transformOrigin: 'bottom left' }}>
                <DonationWidget />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
