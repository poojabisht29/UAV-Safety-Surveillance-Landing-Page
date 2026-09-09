import React from 'react'
import { ShieldCheck, MapPin, Users, HeartHandshake } from 'lucide-react'

const StatsRibbon = () => {
  return (
    <section className="stats-ribbon">
      <div className="container stats-grid">
        <div className="stat-card animate-element animate-from-left">
          <div className="stat-icon">
            <ShieldCheck size={26} />
          </div>
          <div className="stat-info">
            <h3>One-Tap SOS</h3>
            <p>Instant broadcast to trusted contacts & first responders</p>
          </div>
        </div>

        <div className="stat-card animate-element animate-fade-up">
          <div className="stat-icon">
            <MapPin size={26} />
          </div>
          <div className="stat-info">
            <h3>DIGIPIN Tech</h3>
            <p>3m × 3m precise national spatial addressing</p>
          </div>
        </div>

        <div className="stat-card animate-element animate-fade-up">
          <div className="stat-icon">
            <Users size={26} />
          </div>
          <div className="stat-info">
            <h3>Local Helpers</h3>
            <p>Verified nearby citizen volunteers on standby</p>
          </div>
        </div>

        <div className="stat-card animate-element animate-from-right">
          <div className="stat-icon">
            <HeartHandshake size={26} />
          </div>
          <div className="stat-info">
            <h3>100% Free</h3>
            <p>Public safety emergency network for all citizens</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsRibbon
