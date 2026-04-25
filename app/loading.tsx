export default function Loading() {
  return (
    <div style={{ 
      position: 'fixed', 
      inset: 0, 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundColor: 'var(--bg-color)',
      zIndex: 99999 
    }}>
      <div style={{
        width: '50px',
        height: '50px',
        border: '3px solid rgba(10, 54, 34, 0.1)',
        borderTop: '3px solid var(--secondary-color)',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
      }} />
      <h2 style={{ marginTop: '1.5rem', fontSize: '1.25rem', color: 'var(--primary-color)' }}>Loading...</h2>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
