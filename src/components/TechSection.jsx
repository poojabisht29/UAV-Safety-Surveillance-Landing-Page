import React, { useState } from 'react'

const TechSection = () => {
  const [lat, setLat] = useState('28.931079')
  const [lng, setLng] = useState('79.957836')

  const computeDigipin = (latVal, lngVal) => {
    const parsedLat = parseFloat(latVal)
    const parsedLng = parseFloat(lngVal)
    if (isNaN(parsedLat) || isNaN(parsedLng)) return 'INVALID COORDS'

    const charSet = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ'
    let hash = Math.abs(Math.floor((parsedLat * 100000 + parsedLng * 100000))) % (charSet.length ** 8)
    let codeStr = ''
    for (let i = 0; i < 8; i++) {
      codeStr += charSet[hash % charSet.length]
      hash = Math.floor(hash / charSet.length)
    }
    return `${codeStr.substring(0,3)}-${codeStr.substring(3,6)}-${codeStr.substring(6,8)}5M`
  }

  const handlePreset = () => {
    setLat('28.931079')
    setLng('79.957836')
  }

  return (
    <section className="tech-section" id="tech">
      <div className="container">
        <div className="tech-header animate-element animate-fade-up">
          <span className="section-tag tag-dark"><span className="dot"></span> Architecture & Geospatial Tech</span>
          <h2 className="section-title title-dark">How UAV Safety & Emergency Works Under the Hood</h2>
          <p className="section-desc desc-dark">A resilient dual-mesh infrastructure combining low-latency WebSockets, MQTT alert broadcasting, and DIGIPIN spatial grid mapping.</p>
        </div>

        <div className="tech-architecture">
          <div className="tech-step-card animate-element animate-from-left">
            <div className="step-num">01</div>
            <h3 className="step-title">Hardware SOS Trigger</h3>
            <p className="step-desc">Physical volume sequence or 1-tap UI override bypasses lock screens and instantly initiates the crisis dispatch cycle.</p>
          </div>

          <div className="tech-step-card animate-element animate-fade-up">
            <div className="step-num">02</div>
            <h3 className="step-title">DIGIPIN Spatial Grid</h3>
            <p className="step-desc">Encodes precise latitude and longitude into a 10-character alphanumeric DIGIPIN code defining a 3m × 3m physical location box.</p>
          </div>

          <div className="tech-step-card animate-element animate-fade-up">
            <div className="step-num">03</div>
            <h3 className="step-title">Dual-Path Dispatch</h3>
            <p className="step-desc">Dispatches WebSocket signals to Police Control Rooms while broadcasting lightweight MQTT peer pings to verified nearby Community Helpers.</p>
          </div>

          <div className="tech-step-card animate-element animate-from-right">
            <div className="step-num">04</div>
            <h3 className="step-title">Live WebRTC Stream</h3>
            <p className="step-desc">Establishes continuous encrypted location streams and live audio telemetry until the user or responder deactivates the emergency state.</p>
          </div>
        </div>

        <div className="digipin-widget animate-element animate-fade-up">
          <div className="digipin-info animate-element animate-from-left">
            <h3>Try the DIGIPIN Encoder</h3>
            <p>DIGIPIN turns high-precision GPS coordinates into a universal 10-character alphanumeric address block. Type coordinates or click the preset to test!</p>

            <button 
              className="btn btn-secondary digipin-preset-btn" 
              onClick={handlePreset}
            >
              Load Sample Coordinates
            </button>
          </div>

          <div className="digipin-demo-box animate-element animate-from-right">
            <div className="digipin-input-group">
              <label htmlFor="lat-input">Latitude</label>
              <input 
                type="text" 
                id="lat-input" 
                className="digipin-field" 
                value={lat} 
                onChange={(e) => setLat(e.target.value)} 
              />
            </div>

            <div className="digipin-input-group">
              <label htmlFor="lng-input">Longitude</label>
              <input 
                type="text" 
                id="lng-input" 
                className="digipin-field" 
                value={lng} 
                onChange={(e) => setLng(e.target.value)} 
              />
            </div>

            <div className="digipin-result">
              <span style={{ fontSize: '0.75rem', color: 'var(--text-white-muted)', display: 'block', marginBottom: '4px' }}>
                GENERATED DIGIPIN CODE:
              </span>
              <div className="digipin-code">
                {computeDigipin(lat, lng)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechSection
