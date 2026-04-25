"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Add background when scrolled past 20px
      if (currentScrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100 && !menuOpen) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Campaigns', path: '/campaigns' },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${hidden ? styles.hidden : ''}`}>
        <div className={`container ${styles.navContainer}`}>
          <Link href="/" className={styles.logo} style={{ color: menuOpen ? 'white' : '' }}>
            HopeFront<span style={{color: 'var(--secondary-color)'}}>.</span>
          </Link>
          
          <nav className={styles.navLinks}>
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.path} 
                className={styles.navLink} 
                style={{ color: pathname === link.path || (link.path !== '/' && pathname?.startsWith(link.path)) ? 'var(--secondary-color)' : '' }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className={styles.actions}>
            <Link href="/volunteer" className="btn btn-outline interactive" style={{ padding: '0.75rem 1.5rem' }}>Volunteer</Link>
            <Link href="/donate" className="btn btn-primary interactive" style={{ padding: '0.75rem 1.5rem' }}>Donate Now</Link>
          </div>

          <button 
            className={`${styles.mobileMenuBtn} interactive`} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
            style={{ color: menuOpen ? 'white' : '' }}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>

      {/* Full Screen Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
        {navLinks.map((link, index) => (
          <Link 
            key={link.name} 
            href={link.path} 
            className={styles.mobileNavLink}
            style={{ transitionDelay: `${index * 0.1}s` }}
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <Link 
          href="/donate" 
          className="btn btn-accent interactive" 
          style={{ marginTop: '2rem', transitionDelay: '0.5s' }}
          onClick={() => setMenuOpen(false)}
        >
          Donate Now
        </Link>
      </div>
    </>
  );
}
