import React from 'react'

const PhoneMockup = ({ 
  imageSrc, 
  label, 
  width = '270px', 
  height = '550px', 
  alt = 'Android Phone Screenshot',
  className = '' 
}) => {
  return (
    <div className={`android-phone-frame ${className}`} style={{ width, height }}>
      <div className="android-screen-container">
        {/* Seamless Android Top Status Bar Overlay */}
        <div className="android-top-bar">
          <span className="android-top-time">9:42</span>
          <div className="android-punch-hole"></div>
          <div className="android-top-icons">
            <span>5G</span>
            <span>93%</span>
          </div>
        </div>
        
        {/* Full Uncropped App Screenshot */}
        <img 
          src={imageSrc} 
          alt={alt} 
          className="android-screen-img"
        />

        {/* Android Gesture Pill */}
        <div className="android-gesture-bar"></div>

        {label && <span className="phone-frame-label">{label}</span>}
      </div>
    </div>
  )
}

export default PhoneMockup
