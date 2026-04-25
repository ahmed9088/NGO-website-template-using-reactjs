import React from 'react';

const stats = [
  { label: "Lives Impacted", value: "2.5M+", description: "Across 40+ countries" },
  { label: "Clean Water Wells", value: "1,200", description: "Built in rural communities" },
  { label: "Children Educated", value: "350K", description: "Given access to schools" },
  { label: "Funds Raised", value: "$45M", description: "In the last decade" }
];

export default function Stats() {
  return (
    <section className="section section-alt" style={{ padding: 'var(--spacing-xl) 0' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: 'var(--spacing-lg)',
          textAlign: 'center' 
        }}>
          {stats.map((stat, idx) => (
            <div key={idx} className="animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div style={{ 
                fontFamily: 'var(--font-playfair), serif', 
                fontSize: '3.5rem', 
                fontWeight: 600, 
                color: 'var(--primary-color)',
                lineHeight: 1,
                marginBottom: 'var(--spacing-xs)'
              }}>
                {stat.value}
              </div>
              <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.25rem' }}>{stat.label}</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
