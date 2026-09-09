import React from 'react'
import { Download, Play } from 'lucide-react'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge animate-element animate-fade-up">
            <span className="pulse-dot"></span>
            Hyperlocal Emergency Safety Network
          </div>
          
          <h1 className="hero-title animate-element animate-fade-up">
            Your Safety,<br />
            <span>One Tap Away</span>
          </h1>

          <p className="hero-subtitle animate-element animate-from-left">
            Instant split-second SOS alert dispatch, live 3m² DIGIPIN coordinate tracking, and a verified community volunteer network that arrives when every second counts.
          </p>

          <div className="hero-actions animate-element animate-fade-up">
            <a href="#download" className="btn btn-primary">
              <Download size={20} />
              Download Now
            </a>
            <a href="#features" className="btn btn-secondary">
              <Play size={20} />
              See How It Works
            </a>
          </div>

          <div className="hero-trust-bar animate-element animate-from-right">
            <div className="trust-item">
              <span className="trust-num">&lt; 15s</span>
              <span className="trust-lbl">Avg Alert Response</span>
            </div>
            <div className="trust-item">
              <span className="trust-num">3m × 3m</span>
              <span className="trust-lbl">DIGIPIN Accuracy</span>
            </div>
            <div className="trust-item">
              <span className="trust-num">24 / 7</span>
              <span className="trust-lbl">Police & Medical Route</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
