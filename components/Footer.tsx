"use client";
import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerTop}>
          <div className={styles.footerCol}>
            <Link href="/" className={styles.logo}>HopeFront<span style={{color: 'var(--secondary-color)'}}>.</span></Link>
            <p style={{ marginTop: '1rem', maxWidth: '300px' }}>
              We are a global non-profit dedicated to bringing sustainable solutions, clean water, and education to those who need it most.
            </p>
          </div>
          
          <div className={styles.footerCol}>
            <h4>Explore</h4>
            <div className={styles.footerLinks}>
              <Link href="/about">About Us</Link>
              <Link href="/campaigns">Our Campaigns</Link>
              <Link href="/events">Upcoming Events</Link>
              <Link href="/volunteer">Volunteer Hub</Link>
            </div>
          </div>
          
          <div className={styles.footerCol}>
            <h4>Connect</h4>
            <div className={styles.footerLinks}>
              <Link href="/contact">Contact Support</Link>
              <Link href="#">Press & Media</Link>
              <Link href="#">Partnerships</Link>
              <Link href="#">Annual Reports</Link>
            </div>
          </div>
          
          <div className={styles.footerCol}>
            <h4>Newsletter</h4>
            <p>Join our community. Get weekly updates on our impact and upcoming campaigns.</p>
            <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email address" className={styles.input} />
              <button className="btn btn-accent" type="submit" style={{ padding: '0 1.5rem', borderRadius: 'var(--border-radius-sm)' }}>Join</button>
            </form>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} HopeFront NGO. Created by <a href="https://itsahmed.tech" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'var(--text-light)', fontWeight: 600 }}>Ahmed Saffar</a>.</p>
          <div className={styles.footerLinks} style={{flexDirection: 'row', gap: '2rem'}}>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
