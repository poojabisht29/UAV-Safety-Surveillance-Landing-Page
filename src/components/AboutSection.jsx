import React from 'react'
import { Shield, MapPin, Users, Lock } from 'lucide-react'
import PhoneMockup from './PhoneMockup'

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="container about-grid">
        <div className="about-phone-wrapper animate-element animate-from-left">
          <PhoneMockup 
            imageSrc="/assets/screen-map-tracker.jpg" 
            label="Live Map Tracker Infrastructure" 
            width="260px" 
            height="540px" 
          />
        </div>

        <div className="about-content animate-element animate-from-right">
          <span className="section-tag"><span className="dot"></span> Our Core Mission</span>
          <h2 className="section-title">Bridging the Critical Gap in Emergency Response</h2>
          <p className="section-desc">Traditional emergency response services face latency when locating people in dense urban alleys or remote rural areas without street addresses. UAV Safety & Emergency was built to solve this exact problem.</p>

          <p style={{ marginTop: '16px', color: 'var(--text-body)' }}>
            By integrating India's official DIGIPIN 3m² grid technology with a verified peer-to-peer volunteer mesh, UAV Safety & Emergency ensures that help is dispatched instantly and arrives within minutes.
          </p>

          <div className="about-pillars">
            <div className="pillar-item">
              <div className="pillar-icon">
                <Shield size={18} />
              </div>
              <div>
                <h5>Zero Latency</h5>
                <p>Direct alert routing without call center delays</p>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon">
                <MapPin size={18} />
              </div>
              <div>
                <h5>3m² Precision</h5>
                <p>DIGIPIN spatial grid for pinpoint accuracy</p>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon">
                <Users size={18} />
              </div>
              <div>
                <h5>Hyperlocal Mesh</h5>
                <p>Nearby citizen volunteers respond instantly</p>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon">
                <Lock size={18} />
              </div>
              <div>
                <h5>Privacy First</h5>
                <p>Location streamed strictly during active SOS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
