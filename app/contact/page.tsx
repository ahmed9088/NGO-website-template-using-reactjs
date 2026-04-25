"use client";
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import styles from './page.module.css';

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      
      <PageHeader 
        title="Contact Us" 
        breadcrumb="Contact" 
        image="https://loremflickr.com/1200/600/contact,help,charity?lock=25"
      />

      <section className={styles.contactSection}>
        <div className={`container ${styles.contactGrid}`}>
          
          <div className={styles.contactInfo}>
            <h3 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}>Get In Touch</h3>
            <p style={{ marginBottom: 'var(--spacing-lg)', color: 'rgba(251,249,246,0.8)' }}>
              Whether you want to partner with us, ask about our campaigns, or just learn more about our mission, our dedicated team is here to assist you.
            </p>

            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Global Headquarters</span>
              <span className={styles.infoText}>123 Hope Street, Suite 400<br/>New York, NY 10001, USA</span>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Direct Line</span>
              <span className={styles.infoText}>+1 (555) 123-4567<br/>+1 (555) 987-6543</span>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Email Directory</span>
              <span className={styles.infoText}>hello@hopefront.org<br/>partnerships@hopefront.org</span>
            </div>
            
            <div style={{ marginTop: 'var(--spacing-xl)', paddingTop: 'var(--spacing-md)', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
              <p style={{ fontSize: '0.9rem', color: 'rgba(251,249,246,0.7)', margin: 0 }}>
                Looking for media resources? <a href="#" style={{ color: 'var(--secondary-color)', textDecoration: 'underline' }}>Visit our Press Room</a>.
              </p>
            </div>
          </div>

          <div className={styles.contactForm}>
            <h3 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '2rem', marginBottom: 'var(--spacing-xs)' }}>Send us a message</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-lg)' }}>
              Fill out the form below and a member of our support team will get back to you within 24 business hours.
            </p>
            
            <form onSubmit={(e) => e.preventDefault()}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-md)' }}>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" className="input" placeholder="John" required />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" className="input" placeholder="Doe" required />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="email">Email Address</label>
                <input type="email" id="email" className="input" placeholder="john@example.com" required />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="subject">Subject</label>
                <select id="subject" className="input" required style={{ appearance: 'none' }}>
                  <option value="" disabled selected>Select an inquiry type</option>
                  <option value="general">General Inquiry</option>
                  <option value="donation">Donation Support</option>
                  <option value="volunteer">Volunteering</option>
                  <option value="partnership">Partnerships</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="message">Message</label>
                <textarea id="message" className="textarea" placeholder="How can we help you?" required></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: 'var(--spacing-md)' }}>
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
