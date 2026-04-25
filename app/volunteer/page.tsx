"use client";
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';

export default function VolunteerPage() {
  return (
    <main>
      <Navbar />
      <PageHeader 
        title="Become a Volunteer" 
        breadcrumb="Volunteer"
        image="https://loremflickr.com/1200/600/charity,volunteer?lock=24"
      />

      <section className="section">
        <div className="container grid-2-asym">
          
          <div>
            <h2 style={{ marginBottom: 'var(--spacing-md)' }}>Your time can change the world.</h2>
            <p>
              We rely on the passion and dedication of thousands of volunteers worldwide. Whether you have specialized skills in medicine or engineering, or simply have a few hours a week to help us organize local fundraisers, there is a place for you here.
            </p>
            
            <div style={{ marginTop: 'var(--spacing-lg)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-sm)' }}>Opportunities Include:</h3>
              <ul style={{ paddingLeft: '0', listStyle: 'none' }}>
                <li style={{ padding: '1rem', background: 'var(--surface-color)', marginBottom: '0.5rem', borderRadius: 'var(--border-radius-md)', boxShadow: 'var(--shadow-sm)', borderLeft: '4px solid var(--secondary-color)' }}>
                  <strong>Field Relief Worker</strong><br/>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Deploy to crisis zones to assist with immediate aid distribution. (Requires specialized training)</span>
                </li>
                <li style={{ padding: '1rem', background: 'var(--surface-color)', marginBottom: '0.5rem', borderRadius: 'var(--border-radius-md)', boxShadow: 'var(--shadow-sm)', borderLeft: '4px solid var(--accent-color)' }}>
                  <strong>Remote Tutor / Mentor</strong><br/>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Provide online education support to children in our sponsored programs. (Flexible hours)</span>
                </li>
                <li style={{ padding: '1rem', background: 'var(--surface-color)', marginBottom: '0.5rem', borderRadius: 'var(--border-radius-md)', boxShadow: 'var(--shadow-sm)', borderLeft: '4px solid var(--primary-color)' }}>
                  <strong>Community Ambassador</strong><br/>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Organize local events, run marathons, and spread awareness in your hometown.</span>
                </li>
              </ul>
            </div>
          </div>

          <div style={{ background: 'var(--surface-color)', padding: 'var(--spacing-xl)', borderRadius: 'var(--border-radius-lg)', boxShadow: 'var(--shadow-md)' }}>
            <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Volunteer Application</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="formGroup" style={{ marginBottom: '1rem' }}>
                <label className="label" style={{ display: 'block', marginBottom: '0.5rem' }}>Full Name</label>
                <input type="text" className="input" required />
              </div>
              
              <div className="formGroup" style={{ marginBottom: '1rem' }}>
                <label className="label" style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
                <input type="email" className="input" required />
              </div>

              <div className="formGroup" style={{ marginBottom: '1rem' }}>
                <label className="label" style={{ display: 'block', marginBottom: '0.5rem' }}>Area of Interest</label>
                <select className="input" required style={{ appearance: 'none' }}>
                  <option>Field Work</option>
                  <option>Remote Mentorship</option>
                  <option>Event Organization</option>
                  <option>Administrative Support</option>
                </select>
              </div>

              <div className="formGroup" style={{ marginBottom: '1rem' }}>
                <label className="label" style={{ display: 'block', marginBottom: '0.5rem' }}>Why do you want to join us?</label>
                <textarea className="textarea" rows={4} required></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Submit Application</button>
            </form>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
