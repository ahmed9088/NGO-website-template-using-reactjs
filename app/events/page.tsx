"use client";
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';

const events = [
  {
    title: "Annual Charity Gala 2026",
    date: "November 15, 2026",
    location: "New York, NY",
    description: "Join us for an evening of inspiration and fundraising as we celebrate a decade of global impact.",
    image: "https://loremflickr.com/600/600/event,gala,charity?lock=15"
  },
  {
    title: "Global Volunteer Training",
    date: "August 10-12, 2026",
    location: "Virtual & Local Chapters",
    description: "A comprehensive 3-day training seminar for incoming volunteers heading to our field operations.",
    image: "https://loremflickr.com/600/600/training,volunteer?lock=16"
  },
  {
    title: "Run for Water 10K",
    date: "September 5, 2026",
    location: "London, UK",
    description: "Lace up your running shoes and help us raise funds to build 50 new wells in rural communities.",
    image: "https://loremflickr.com/600/600/running,marathon?lock=17"
  }
];

export default function EventsPage() {
  return (
    <main>
      <Navbar />
      <PageHeader 
        title="Upcoming Events" 
        breadcrumb="Events"
        image="https://loremflickr.com/1200/600/events,gathering?lock=18"
      />

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--spacing-xl)' }}>
            
            {events.map((event, idx) => (
              <div key={idx} style={{ 
                display: 'flex', 
                flexDirection: idx % 2 !== 0 ? 'row-reverse' : 'row',
                gap: 'var(--spacing-lg)',
                alignItems: 'center',
                background: 'var(--surface-color)',
                borderRadius: 'var(--border-radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                flexWrap: 'wrap'
              }}>
                <div style={{ flex: '1 1 300px', height: '300px' }}>
                  <img src={event.image} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ flex: '1 1 300px', padding: 'var(--spacing-lg)' }}>
                  <div style={{ display: 'flex', gap: '1rem', color: 'var(--secondary-color)', fontWeight: 600, fontSize: '0.9rem', marginBottom: 'var(--spacing-sm)' }}>
                    <span>🗓 {event.date}</span>
                    <span>📍 {event.location}</span>
                  </div>
                  <h3 style={{ fontSize: '1.75rem', marginBottom: 'var(--spacing-sm)' }}>{event.title}</h3>
                  <p style={{ marginBottom: 'var(--spacing-md)' }}>{event.description}</p>
                  <button className="btn btn-outline">RSVP Now</button>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
