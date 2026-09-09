import React from 'react'
import PhoneMockup from './PhoneMockup'

const ShowcaseSlider = () => {
  const slides = [
    { id: '1', src: '/assets/screen-dashboard.jpg', label: '1. Safety Dashboard' },
    { id: '2', src: '/assets/screen-nearby.jpg', label: '2. Nearby Emergency Help' },
    { id: '3', src: '/assets/screen-map-tracker.jpg', label: '3. DIGIPIN Map Tracker' },
    { id: '4', src: '/assets/screen-helper.jpg', label: '4. Community Helper Mode' },
    { id: '5', src: '/assets/screen-trusted-contacts.jpg', label: '5. Trusted Contacts Network' }
  ]

  return (
    <section className="showcase-slider-section">
      <div className="showcase-slider-header">
        <h3>Live App Interface Showcase</h3>
      </div>
      <div className="carousel-wrapper">
        <div className="phone-marquee">
          {/* First loop set */}
          {slides.map(slide => (
            <PhoneMockup 
              key={`a-${slide.id}`} 
              imageSrc={slide.src} 
              label={slide.label} 
            />
          ))}
          {/* Duplicate set for continuous infinite marquee loop */}
          {slides.map(slide => (
            <PhoneMockup 
              key={`b-${slide.id}`} 
              imageSrc={slide.src} 
              label={slide.label} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ShowcaseSlider
