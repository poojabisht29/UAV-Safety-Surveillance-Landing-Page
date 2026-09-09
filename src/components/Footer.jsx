import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="brand-logo">
            <div className="brand-icon">
              <img src="/assets/logo.jpg" alt="UAV Safety Logo" />
            </div>
            <div className="brand-name">
              <span className="brand-title" style={{ color: '#fff' }}>UAV Safety & Emergency</span>
              <span className="brand-sub" style={{ color: 'var(--text-white-muted)' }}>Hyperlocal SOS & Location Network</span>
            </div>
          </div>
          <p>Empowering citizens with split-second SOS alert broadcasting, 3m² DIGIPIN location precision, and verified community helper networks.</p>

          <div className="status-badge">
            <span className="status-dot"></span>
            UAV Emergency Network: 100% Operational
          </div>
        </div>

        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#tech">Tech Info</a></li>
            <li><a href="#about">About Mission</a></li>
            <li><a href="#team">Our Team</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Features</h4>
          <ul>
            <li><a href="#features">One-Tap SOS Alert</a></li>
            <li><a href="#features">Nearby Services Locator</a></li>
            <li><a href="#features">DIGIPIN Map Tracker</a></li>
            <li><a href="#features">Community Helper Mode</a></li>
            <li><a href="#features">Trusted Contacts Network</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Legal & Contact</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Emergency Hotline Protocol</a></li>
            <li><a href="#">support@uav-safety.org</a></li>
            <li><a href="#">Khatima, Uttarakhand, India</a></li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 UAV Safety & Emergency. All rights reserved. Built for emergency resilience & citizen protection.</p>
        <p style={{ opacity: 0.7 }}>Developed by Harshit, Chandra, Pooja & Shafiq.</p>
      </div>
    </footer>
  )
}

export default Footer
