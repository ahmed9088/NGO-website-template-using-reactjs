"use client";
import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "The impact HopeFront has made in our community is immeasurable. They brought clean water to our village, changing lives forever.",
    author: "Amina J.",
    role: "Community Leader, Kenya",
    image: "https://loremflickr.com/200/200/portrait,woman,africa?lock=2"
  },
  {
    quote: "Volunteering with this organization gave me a profound sense of purpose. Their dedication to sustainable education is inspiring.",
    author: "David Chen",
    role: "Global Volunteer",
    image: "https://loremflickr.com/200/200/portrait,man,volunteer?lock=3"
  },
  {
    quote: "As a regular donor, I appreciate their full transparency. I know exactly where my money goes and the tangible difference it makes.",
    author: "Sarah Jenkins",
    role: "Monthly Contributor",
    image: "https://loremflickr.com/200/200/portrait,woman,smile?lock=4"
  }
];

export default function TestimonialSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section" style={{ backgroundColor: 'var(--primary-color)', color: 'var(--text-light)', textAlign: 'center' }}>
      <div className="container">
        <h2 style={{ color: 'var(--text-light)', marginBottom: 'var(--spacing-xl)' }}>Voices of Impact</h2>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', minHeight: '300px', position: 'relative' }}>
          {testimonials.map((t, idx) => (
            <div 
              key={idx}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                opacity: active === idx ? 1 : 0,
                transform: active === idx ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                pointerEvents: active === idx ? 'auto' : 'none'
              }}
            >
              <p style={{ 
                fontFamily: 'var(--font-playfair), serif', 
                fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', 
                lineHeight: 1.4,
                color: 'var(--text-light)',
                fontStyle: 'italic',
                marginBottom: 'var(--spacing-lg)'
              }}>
                "{t.quote}"
              </p>
              
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                <img 
                  src={t.image} 
                  alt={t.author} 
                  style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--secondary-color)' }}
                />
                <div style={{ textAlign: 'left' }}>
                  <strong style={{ display: 'block', fontSize: '1.1rem' }}>{t.author}</strong>
                  <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: 'var(--spacing-lg)' }}>
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              style={{
                width: active === idx ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: active === idx ? 'var(--secondary-color)' : 'rgba(255,255,255,0.3)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
