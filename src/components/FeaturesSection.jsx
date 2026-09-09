import React from 'react'
import { Zap, Navigation, Map, UserCheck, Shield } from 'lucide-react'
import PhoneMockup from './PhoneMockup'

const FeaturesSection = ({ onOpenSosModal }) => {
  return (
    <section className="features-section" id="features">
      <div className="container">
        <div className="features-header animate-element animate-fade-up">
          <span className="section-tag"><span className="dot"></span> Critical Emergency Capabilities</span>
          <h2 className="section-title">Engineered for Split-Second Protection</h2>
          <p className="section-desc">When an emergency occurs, standard communication fails. UAV Safety & Emergency combines high-precision spatial tracking, instant broadcasting, and peer-to-peer helper dispatch.</p>
        </div>

        <div className="features-grid">
          {/* Feature 1: One-Tap SOS Alert Dispatch */}
          <div className="feature-card f-card-wide sos-card animate-element animate-from-left">
            <div>
              <div className="feature-icon-wrapper">
                <Zap size={28} />
              </div>
              <h3 className="feature-title">1. One-Tap SOS Alert Dispatch</h3>
              <p className="feature-desc">A single press activates an immediate high-priority distress signal, streaming live GPS location, ambient audio recordings, and battery telemetry directly to emergency services and trusted contacts.</p>

              <div className="sos-demo-box">
                <button className="sos-trigger-btn" onClick={onOpenSosModal} aria-label="Trigger SOS Simulation">
                  SOS
                </button>
                <div className="sos-demo-text">
                  <h4 style={{ color: '#880529', fontWeight: '700' }}>Interactive SOS Simulator</h4>
                  <p style={{ color: '#A02245', fontSize: '0.85rem' }}>Click the SOS button to test the real-time emergency alert sequence.</p>
                </div>
              </div>

              <div className="feature-phone-wrapper animate-element animate-from-right">
                <PhoneMockup 
                  imageSrc="/assets/screen-dashboard.jpg" 
                  label="Safety Dashboard Screen" 
                  width="250px" 
                  height="520px" 
                />
              </div>
            </div>
          </div>

          {/* Feature 2: Nearby Emergency Services */}
          <div className="feature-card f-card-medium animate-element animate-from-right">
            <div>
              <div className="feature-icon-wrapper">
                <Navigation size={28} />
              </div>
              <h3 className="feature-title">2. Nearby Emergency Services</h3>
              <p className="feature-desc">Instant real-time directory locator for Police Stations, Hospitals, Fire Squads, and 24/7 Pharmacies with direct one-touch calling and turnkey navigation route integration.</p>

              <div className="feature-phone-wrapper animate-element animate-from-left">
                <PhoneMockup 
                  imageSrc="/assets/screen-nearby.jpg" 
                  label="Emergency Services Screen" 
                  width="250px" 
                  height="520px" 
                />
              </div>
            </div>
          </div>

          {/* Feature 3: DIGIPIN Map Tracker */}
          <div className="feature-card f-card-third animate-element animate-from-left">
            <div>
              <div className="feature-icon-wrapper">
                <Map size={28} />
              </div>
              <h3 className="feature-title">3. DIGIPIN Map Tracker</h3>
              <p className="feature-desc">Utilizes India's official 10-character DIGIPIN spatial grid system for 3m x 3m exact location pinpoints even without street addresses.</p>

              <div className="feature-phone-wrapper animate-element animate-from-right">
                <PhoneMockup 
                  imageSrc="/assets/screen-map-tracker.jpg" 
                  label="DIGIPIN Map Tracker Screen" 
                  width="240px" 
                  height="500px" 
                />
              </div>
            </div>
          </div>

          {/* Feature 4: Community Helper Mode */}
          <div className="feature-card f-card-third animate-element animate-fade-up">
            <div>
              <div className="feature-icon-wrapper">
                <UserCheck size={28} />
              </div>
              <h3 className="feature-title">4. Community Helper Mode</h3>
              <p className="feature-desc">Opt-in verified volunteer network. Nearby helpers get immediate push alerts when someone triggers an SOS nearby, offering critical help before ambulances arrive.</p>

              <div className="feature-phone-wrapper animate-element animate-from-left">
                <PhoneMockup 
                  imageSrc="/assets/screen-helper.jpg" 
                  label="Community Helper Screen" 
                  width="240px" 
                  height="500px" 
                />
              </div>
            </div>
          </div>

          {/* Feature 5: Trusted Contacts Network */}
          <div className="feature-card f-card-third animate-element animate-from-right">
            <div>
              <div className="feature-icon-wrapper">
                <Shield size={28} />
              </div>
              <h3 className="feature-title">5. Trusted Contacts Network</h3>
              <p className="feature-desc">High-priority SMS & push alert dispatch to your verified emergency contacts (like Pooja Bisht & Chandra Shekhar Joshi) during crisis events.</p>

              <div className="feature-phone-wrapper animate-element animate-from-right">
                <PhoneMockup 
                  imageSrc="/assets/screen-trusted-contacts.jpg" 
                  label="Trusted Contacts Screen" 
                  width="240px" 
                  height="500px" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
