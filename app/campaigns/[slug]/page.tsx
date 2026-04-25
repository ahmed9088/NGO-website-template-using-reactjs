"use client";
import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import PageHeader from '../../../components/PageHeader';
import DonationWidget from '../../../components/DonationWidget';

// In a real app, this would be fetched dynamically based on params.slug
export default function CampaignDetail({ params }: { params: { slug: string } }) {
  // Mock data for demonstration
  const campaign = {
    title: "Clean Water Initiative",
    category: "Health & Water",
    raised: 45000,
    goal: 50000,
    donors: 1240,
    daysLeft: 12
  };

  const percentage = Math.min(Math.round((campaign.raised / campaign.goal) * 100), 100);

  return (
    <main>
      <Navbar />
      <PageHeader 
        title={campaign.title} 
        breadcrumb={`Campaigns / ${campaign.title}`}
        image="https://loremflickr.com/1200/600/water,well?lock=5"
      />

      <section className="section">
        <div className="container grid-2-asym">
          
          {/* Main Content */}
          <div>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: 'var(--spacing-md)' }}>
              <span style={{ background: 'rgba(224, 122, 95, 0.1)', color: 'var(--secondary-color)', padding: '0.25rem 0.75rem', borderRadius: 'var(--border-radius-sm)', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase' }}>
                {campaign.category}
              </span>
            </div>
            
            <h2 style={{ marginBottom: 'var(--spacing-md)' }}>The Problem</h2>
            <p>
              In many rural areas of Sub-Saharan Africa, women and children walk an average of 6 kilometers every day just to fetch water. Often, this water is contaminated, leading to waterborne diseases that are the leading cause of death among children under five.
            </p>
            
            <h2 style={{ marginTop: 'var(--spacing-lg)', marginBottom: 'var(--spacing-md)' }}>Our Solution</h2>
            <p>
              By drilling deep-water wells and installing solar-powered pumps, we bring clean, safe drinking water directly into the heart of these villages. This not only eradicates waterborne illnesses but also allows children to return to school and empowers women to start micro-businesses instead of spending their days walking for water.
            </p>

            <img 
              src="https://loremflickr.com/1000/600/water,clean,africa?lock=14" 
              alt="Clean water" 
              className="img-editorial"
              style={{ width: '100%', margin: 'var(--spacing-lg) 0' }}
            />

            <h3 style={{ marginBottom: 'var(--spacing-md)' }}>How Your Donation Helps</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: 'var(--spacing-lg)' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>$50</strong> provides a family with a bio-sand water filter.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>$200</strong> trains a local mechanic to maintain the well.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>$5,000</strong> completely funds a new deep-water well for an entire village.</li>
            </ul>
          </div>

          {/* Sticky Sidebar */}
          <div style={{ position: 'sticky', top: '120px', alignSelf: 'start' }}>
            
            <div style={{ 
              background: 'white', 
              padding: 'var(--spacing-lg)', 
              borderRadius: 'var(--border-radius-lg)', 
              boxShadow: 'var(--shadow-md)',
              marginBottom: 'var(--spacing-lg)'
            }}>
              <div style={{ fontSize: '2rem', fontFamily: 'var(--font-playfair), serif', color: 'var(--primary-color)', marginBottom: '0.25rem' }}>
                ${campaign.raised.toLocaleString()}
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: 'var(--spacing-md)' }}>
                raised of ${campaign.goal.toLocaleString()} goal
              </div>
              
              <div style={{ width: '100%', height: '8px', background: 'rgba(0,0,0,0.05)', borderRadius: '4px', overflow: 'hidden', marginBottom: 'var(--spacing-md)' }}>
                <div style={{ width: `${percentage}%`, height: '100%', background: 'var(--secondary-color)', borderRadius: '4px' }}></div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.9rem' }}>
                <span>{campaign.donors} Donors</span>
                <span>{campaign.daysLeft} Days Left</span>
              </div>
            </div>

            <DonationWidget />

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
