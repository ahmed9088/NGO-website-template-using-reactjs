"use client";
import React from 'react';
import Link from 'next/link';

interface CampaignCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  raised: number;
  goal: number;
  slug?: string;
}

export default function CampaignCard({ title, description, image, category, raised, goal, slug = 'sample-campaign' }: CampaignCardProps) {
  const percentage = Math.min(Math.round((raised / goal) * 100), 100);

  return (
    <div style={{
      position: 'relative',
      background: 'var(--surface-color)',
      borderRadius: 'var(--border-radius-md)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-sm)',
      transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      cursor: 'pointer'
    }}
    className="interactive bento-item"
    onMouseEnter={(e) => {
      const img = e.currentTarget.querySelector('.card-img') as HTMLElement;
      const overlay = e.currentTarget.querySelector('.card-overlay') as HTMLElement;
      if (img) img.style.transform = 'scale(1.1)';
      if (overlay) overlay.style.opacity = '1';
    }}
    onMouseLeave={(e) => {
      const img = e.currentTarget.querySelector('.card-img') as HTMLElement;
      const overlay = e.currentTarget.querySelector('.card-overlay') as HTMLElement;
      if (img) img.style.transform = 'scale(1)';
      if (overlay) overlay.style.opacity = '0';
    }}>
      
      {/* Image Container with advanced hover overlay */}
      <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
        <img 
          src={image} 
          alt={title} 
          className="card-img"
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' 
          }}
        />
        
        {/* Dark gradient overlay that appears on hover */}
        <div 
          className="card-overlay"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(10, 54, 34, 0.9), rgba(10, 54, 34, 0.2))',
            opacity: 0,
            transition: 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Link href={`/campaigns/${slug}`} style={{
            padding: '0.75rem 2rem',
            background: 'var(--secondary-color)',
            color: 'white',
            borderRadius: 'var(--border-radius-full)',
            fontWeight: 600,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            fontSize: '0.85rem'
          }}>
            Donate Now
          </Link>
        </div>

        <div style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          background: 'var(--surface-color)',
          color: 'var(--primary-color)',
          padding: '0.35rem 0.85rem',
          borderRadius: 'var(--border-radius-full)',
          fontSize: '0.75rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          boxShadow: 'var(--shadow-sm)',
          zIndex: 2
        }}>
          {category}
        </div>
      </div>

      <div style={{ padding: 'var(--spacing-md)', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontSize: '1.35rem', marginBottom: 'var(--spacing-sm)', fontFamily: 'var(--font-playfair), serif' }}>
          <Link href={`/campaigns/${slug}`} style={{ color: 'inherit' }}>{title}</Link>
        </h3>
        <p style={{ fontSize: '0.95rem', marginBottom: 'var(--spacing-md)', flex: 1, color: 'var(--text-secondary)' }}>{description}</p>
        
        {/* Progress Bar */}
        <div style={{ marginTop: 'auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.5rem', fontWeight: 600 }}>
            <span style={{ color: 'var(--secondary-color)' }}>${raised.toLocaleString()} raised</span>
            <span style={{ color: 'var(--text-secondary)' }}>{percentage}%</span>
          </div>
          <div style={{ width: '100%', height: '4px', background: 'rgba(0,0,0,0.05)', borderRadius: '2px', overflow: 'hidden' }}>
            <div style={{ width: `${percentage}%`, height: '100%', background: 'var(--secondary-color)', borderRadius: '2px', transition: 'width 1s cubic-bezier(0.16, 1, 0.3, 1)' }}></div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
            <span>Goal: ${goal.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
