"use client";
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import CampaignCard from '../../components/CampaignCard';

const allCampaigns = [
  {
    title: "Clean Water Initiative",
    description: "Help us build sustainable water wells in remote villages, providing clean and safe drinking water to hundreds of families.",
    image: "https://loremflickr.com/800/600/water,well?lock=5",
    category: "Health",
    raised: 45000,
    goal: 50000,
    slug: "clean-water-initiative"
  },
  {
    title: "Education for All",
    description: "Providing school supplies, uniforms, and scholarships to children who otherwise wouldn't have access to basic education.",
    image: "https://loremflickr.com/800/600/education,school?lock=6",
    category: "Education",
    raised: 28500,
    goal: 40000,
    slug: "education-for-all"
  },
  {
    title: "Disaster Relief Fund",
    description: "Emergency response fund to deliver immediate medical supplies, food, and shelter to communities affected by natural disasters.",
    image: "https://loremflickr.com/800/600/disaster,rescue?lock=7",
    category: "Emergency",
    raised: 85000,
    goal: 100000,
    slug: "disaster-relief"
  },
  {
    title: "Women's Empowerment",
    description: "Vocational training and micro-loans for women entrepreneurs in developing regions to build sustainable businesses.",
    image: "https://loremflickr.com/800/600/women,empowerment?lock=10",
    category: "Empowerment",
    raised: 12000,
    goal: 30000,
    slug: "womens-empowerment"
  },
  {
    title: "Reforestation Project",
    description: "Planting 1 million trees in deforested areas to combat climate change and restore local ecosystems.",
    image: "https://loremflickr.com/800/600/nature,tree,planting?lock=11",
    category: "Environment",
    raised: 150000,
    goal: 500000,
    slug: "reforestation-project"
  },
  {
    title: "Medical Outreach Caravan",
    description: "Mobile clinics providing free check-ups, vaccines, and essential medicines to isolated rural communities.",
    image: "https://loremflickr.com/800/600/medical,doctor,rural?lock=12",
    category: "Health",
    raised: 62000,
    goal: 75000,
    slug: "medical-outreach"
  }
];

const categories = ["All", "Health", "Education", "Emergency", "Empowerment", "Environment"];

export default function CampaignsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredCampaigns = activeFilter === "All" 
    ? allCampaigns 
    : allCampaigns.filter(c => c.category === activeFilter);

  return (
    <main>
      <Navbar />
      <PageHeader 
        title="Our Campaigns" 
        breadcrumb="Campaigns"
        image="https://loremflickr.com/1200/600/charity,campaign?lock=13"
      />

      <section className="section">
        <div className="container">
          
          {/* Filters */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: 'var(--spacing-xl)' }}>
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  padding: '0.5rem 1.5rem',
                  borderRadius: 'var(--border-radius-full)',
                  border: `1px solid ${activeFilter === cat ? 'var(--primary-color)' : 'rgba(0,0,0,0.1)'}`,
                  background: activeFilter === cat ? 'var(--primary-color)' : 'white',
                  color: activeFilter === cat ? 'white' : 'var(--text-primary)',
                  cursor: 'pointer',
                  fontWeight: 500,
                  transition: 'all var(--transition-fast)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
            gap: 'var(--spacing-lg)' 
          }}>
            {filteredCampaigns.map((campaign, index) => (
              <CampaignCard key={index} {...campaign} />
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
