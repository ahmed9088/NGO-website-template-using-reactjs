"use client";
import React, { useState } from 'react';

export default function DonationWidget() {
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time');
  const [amount, setAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>('');

  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setAmount(0);
  };

  const presetAmounts = [25, 50, 100, 250];

  return (
    <div style={{
      background: 'var(--surface-color)',
      padding: 'var(--spacing-lg)',
      borderRadius: 'var(--border-radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      maxWidth: '450px',
      width: '100%'
    }}>
      <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-sm)' }}>Make an Impact</h3>
      <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-lg)' }}>
        Your generosity brings hope and tangible change to those who need it most.
      </p>

      {/* Frequency Toggle */}
      <div style={{ 
        display: 'flex', 
        background: 'var(--surface-alt)', 
        borderRadius: 'var(--border-radius-full)',
        padding: '0.25rem',
        marginBottom: 'var(--spacing-md)'
      }}>
        <button 
          onClick={() => setFrequency('one-time')}
          style={{
            flex: 1,
            padding: '0.75rem',
            borderRadius: 'var(--border-radius-full)',
            border: 'none',
            background: frequency === 'one-time' ? 'var(--primary-color)' : 'transparent',
            color: frequency === 'one-time' ? 'white' : 'var(--text-secondary)',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all var(--transition-fast)'
          }}
        >
          Give Once
        </button>
        <button 
          onClick={() => setFrequency('monthly')}
          style={{
            flex: 1,
            padding: '0.75rem',
            borderRadius: 'var(--border-radius-full)',
            border: 'none',
            background: frequency === 'monthly' ? 'var(--primary-color)' : 'transparent',
            color: frequency === 'monthly' ? 'white' : 'var(--text-secondary)',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all var(--transition-fast)'
          }}
        >
          Monthly
        </button>
      </div>

      {/* Amount Selection */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: 'var(--spacing-md)' }}>
        {presetAmounts.map((preset) => (
          <button
            key={preset}
            onClick={() => { setAmount(preset); setCustomAmount(''); }}
            style={{
              padding: '1rem',
              borderRadius: 'var(--border-radius-md)',
              border: amount === preset ? '2px solid var(--primary-color)' : '1px solid rgba(0,0,0,0.1)',
              background: amount === preset ? 'rgba(10, 54, 34, 0.05)' : 'white',
              color: 'var(--text-primary)',
              fontWeight: 600,
              fontSize: '1.1rem',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)'
            }}
          >
            ${preset}
          </button>
        ))}
      </div>

      <div style={{ marginBottom: 'var(--spacing-lg)', position: 'relative' }}>
        <span style={{ 
          position: 'absolute', 
          left: '1rem', 
          top: '50%', 
          transform: 'translateY(-50%)',
          color: 'var(--text-secondary)',
          fontWeight: 600
        }}>$</span>
        <input 
          type="number" 
          placeholder="Custom Amount" 
          className="input"
          value={customAmount}
          onChange={handleCustomAmount}
          style={{ 
            paddingLeft: '2.5rem', 
            borderColor: customAmount ? 'var(--primary-color)' : 'rgba(0,0,0,0.1)',
            background: customAmount ? 'rgba(10, 54, 34, 0.05)' : 'white',
          }}
        />
      </div>

      <button className="btn btn-accent" style={{ width: '100%' }}>
        Donate {amount > 0 ? `$${amount}` : customAmount ? `$${customAmount}` : ''} {frequency === 'monthly' ? '/ mo' : ''}
      </button>

      <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: 'var(--spacing-md)' }}>
        🔒 Secure checkout. You can cancel monthly donations at any time.
      </p>
    </div>
  );
}
