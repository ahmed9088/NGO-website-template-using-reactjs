"use client";
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import Stats from '../../components/Stats';

const team = [
  { name: "Eleanor Wright", role: "Founder & CEO", image: "https://loremflickr.com/600/600/portrait,woman,ceo?lock=19" },
  { name: "Dr. Marcus Chen", role: "Head of Health Initiatives", image: "https://loremflickr.com/600/600/portrait,man,doctor?lock=20" },
  { name: "Sarah Al-Fayed", role: "Director of Education", image: "https://loremflickr.com/600/600/portrait,woman,director?lock=21" },
  { name: "David Osei", role: "Chief Operations Officer", image: "https://loremflickr.com/600/600/portrait,man,business?lock=22" }
];

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <PageHeader 
        title="Our Story" 
        breadcrumb="About Us"
        image="https://loremflickr.com/1200/600/charity,history?lock=23" 
      />

      <section className="section">
        <div className="container grid-2-asym">
          <div>
            <h2 style={{ marginBottom: 'var(--spacing-md)' }}>A Decade of Hope</h2>
            <p>
              HopeFront was born out of a simple observation: that while talent is distributed equally around the world, opportunity is not. What started in 2010 as a small grassroots movement to build a single school has blossomed into a global NGO.
            </p>
            <p>
              We don't believe in band-aid solutions. Our methodology relies on embedding ourselves within communities, understanding their unique challenges, and working alongside local leaders to engineer sustainable, long-term solutions.
            </p>
          </div>
          <div>
            <img src="https://loremflickr.com/1000/600/charity,impact?lock=9" alt="Our history" className="img-editorial" style={{ width: '100%' }} />
          </div>
        </div>
      </section>

      <Stats />

      <section className="section" style={{ backgroundColor: 'var(--bg-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
            <h2>Leadership Team</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Meet the dedicated professionals who guide our vision and operations worldwide.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-lg)' }}>
            {team.map((member, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <div style={{ width: '200px', height: '200px', margin: '0 auto var(--spacing-md)', borderRadius: '50%', overflow: 'hidden' }}>
                  <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h4 style={{ margin: 0, fontSize: '1.25rem' }}>{member.name}</h4>
                <p style={{ color: 'var(--secondary-color)', fontSize: '0.95rem' }}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
