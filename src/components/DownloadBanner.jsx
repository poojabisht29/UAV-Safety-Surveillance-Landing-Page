import React from 'react'
import PhoneMockup from './PhoneMockup'

const DownloadBanner = () => {
  return (
    <section className="download-section" id="download">
      <div className="container">
        <div className="download-card animate-element animate-fade-up">
          <div className="download-content animate-element animate-from-left">
            <h2>Download UAV Safety & Emergency</h2>
            <p>Protect yourself, your family, and your community. Available for iOS and Android devices with 100% free lifetime access.</p>

            <div className="store-badges">
              <a
  href="https://github.com/poojabisht29/UAV-Safety-Surveillance/releases/download/v1.0.0/app-release.apk"
  className="store-btn"
  target="_blank"
  rel="noopener noreferrer"
>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M3.6 2.3c-.2.2-.3.5-.3.9v17.6c0 .4.1.7.3.9l.1.1 9.9-9.9v-.2L3.7 2.2l-.1.1zm12.3 8.3-2.3-2.3L3.7 2.2c.4-.4 1-.4 1.5-.1l10.7 6.1zm0 2.8 2.3 2.3-10.7 6.1c-.5.3-1.1.3-1.5-.1l9.9-8.3zm3.1-1.4-2.5-1.4-2.6 2.6 2.6 2.6 2.5-1.4c.7-.4.7-1.7 0-2.4z"/></svg>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.68rem', opacity: 0.8, textTransform: 'uppercase' }}>Get it on</span>
                  <span className="store-btn-title">Google Play</span>
                </div>
              </a>

              <a href="#" className="store-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.24c.66-.82 1.12-1.95.99-3.1-.97.04-2.16.65-2.85 1.46-.62.72-1.16 1.88-1.01 3.01 1.09.08 2.21-.55 2.87-1.37z"/></svg>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.68rem', opacity: 0.8, textTransform: 'uppercase' }}>Download on the</span>
                  <span className="store-btn-title">App Store</span>
                </div>
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }} className="animate-element animate-from-right">
            <PhoneMockup 
              imageSrc="/assets/screen-dashboard.jpg" 
              label="UAV Safety App Download" 
              width="230px" 
              height="480px" 
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DownloadBanner
