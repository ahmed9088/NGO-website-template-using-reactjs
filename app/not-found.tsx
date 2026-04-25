import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function NotFound() {
  return (
    <main>
      <Navbar />
      <div style={{ 
        minHeight: '80vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        textAlign: 'center',
        padding: 'var(--spacing-xl)',
        backgroundColor: 'var(--bg-color)'
      }}>
        <h1 style={{ fontSize: 'clamp(5rem, 15vw, 10rem)', lineHeight: 1, color: 'var(--secondary-color)', marginBottom: 'var(--spacing-md)' }}>404</h1>
        <h2 style={{ marginBottom: 'var(--spacing-md)' }}>Page Not Found</h2>
        <p style={{ maxWidth: '500px', margin: '0 auto var(--spacing-xl)', fontSize: '1.15rem' }}>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link href="/" className="btn btn-primary interactive">
          Return Home
        </Link>
      </div>
      <Footer />
    </main>
  );
}
