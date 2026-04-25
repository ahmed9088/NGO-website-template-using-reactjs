import React from 'react';
import Link from 'next/link';

interface PageHeaderProps {
  title: string;
  breadcrumb: string;
  image?: string;
}

export default function PageHeader({ title, breadcrumb, image }: PageHeaderProps) {
  return (
    <div style={{
      position: 'relative',
      padding: 'var(--spacing-xxl) 0 var(--spacing-xl)',
      backgroundColor: 'var(--primary-color)',
      backgroundImage: image ? `linear-gradient(rgba(10, 54, 34, 0.8), rgba(10, 54, 34, 0.9)), url(${image})` : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'var(--text-light)',
      textAlign: 'center',
      marginTop: '80px', /* offset navbar */
      minHeight: '350px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <div className="container animate-fade-in-up">
        <h1 style={{ color: 'var(--text-light)', marginBottom: 'var(--spacing-sm)' }}>{title}</h1>
        <p style={{ 
          fontFamily: 'var(--font-inter)', 
          textTransform: 'uppercase', 
          letterSpacing: '0.1em',
          fontSize: '0.9rem',
          color: 'var(--secondary-color)'
        }}>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.7)' }}>Home</Link> <span style={{ margin: '0 0.5rem' }}>—</span> {breadcrumb}
        </p>
      </div>
    </div>
  );
}
