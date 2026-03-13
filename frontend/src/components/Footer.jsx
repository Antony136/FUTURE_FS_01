import React from 'react';

const Footer = () => {
  return (
    <footer style={{ borderTop: '1px solid var(--glass-border)', padding: '40px 20px', textAlign: 'center' }}>
      <div className="container mx-auto">
        <h2 className="gradient-text" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>Portfolio.</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
          Built with MERN Stack • Designed with Passion
        </p>
        <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Antony. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
