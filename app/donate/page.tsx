"use client";
import React from 'react';
import Link from 'next/link';
import DonationWidget from '../../components/DonationWidget';

export default function DonatePage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-color)' }}>
      {/* Minimal Header for distraction-free checkout */}
      <header style={{ padding: '1.5rem 0', background: 'white', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
          <Link href="/" style={{
            fontFamily: 'var(--font-playfair), serif',
            fontSize: '1.75rem',
            fontWeight: 600,
            color: 'var(--primary-color)',
            letterSpacing: '-0.02em'
          }}>
            HopeFront<span style={{color: 'var(--secondary-color)'}}>.</span>
          </Link>
        </div>
      </header>

      <section style={{ flex: 1, display: 'flex', alignItems: 'center', padding: 'var(--spacing-xl) 0' }}>
        <div className="container grid-2-asym" style={{ alignItems: 'flex-start' }}>
          
          <div style={{ paddingTop: '2rem' }}>
            <h1 style={{ marginBottom: 'var(--spacing-md)' }}>Your gift changes everything.</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: 'var(--spacing-lg)' }}>
              100% of your donation goes directly to the field. We operate with full transparency because your trust is our most valuable asset.
            </p>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--primary-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.5rem' }}>
                ✓
              </div>
              <div>
                <strong style={{ display: 'block' }}>Tax Deductible</strong>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>We are a registered 501(c)(3) non-profit.</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--secondary-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.5rem' }}>
                🔒
              </div>
              <div>
                <strong style={{ display: 'block' }}>Secure Payment</strong>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Bank-level encryption protects your details.</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {/* Using the DonationWidget we already built, but in a focused layout */}
            <DonationWidget />
          </div>

        </div>
      </section>
      
      {/* Minimal Footer */}
      <footer style={{ padding: '2rem 0', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        <div className="container">
          &copy; {new Date().getFullYear()} HopeFront NGO. Created by <a href="https://itsahmed.tech" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'var(--primary-color)', fontWeight: 600 }}>Ahmed Saffar</a>. | <Link href="/contact" style={{ textDecoration: 'underline' }}>Need help?</Link>
        </div>
      </footer>
    </main>
  );
}
