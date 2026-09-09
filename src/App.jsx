import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ShowcaseSlider from './components/ShowcaseSlider'
import StatsRibbon from './components/StatsRibbon'
import FeaturesSection from './components/FeaturesSection'
import TechSection from './components/TechSection'
import AboutSection from './components/AboutSection'
import TeamSection from './components/TeamSection'
import DownloadBanner from './components/DownloadBanner'
import Footer from './components/Footer'
import SosModal from './components/SosModal'

function App() {
  const [sosModalOpen, setSosModalOpen] = useState(false)

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          obs.unobserve(entry.target)
        }
      })
    }, observerOptions)

    const animatedEls = document.querySelectorAll('.animate-element')
    animatedEls.forEach(el => observer.observe(el))

    return () => {
      animatedEls.forEach(el => observer.unobserve(el))
    }
  }, [])

  return (
    <div className="app-root">
      {/* High Visibility Ambient Map Zoom Slow-Motion Looping Background */}
      <div className="ambient-map-bg">
        <div className="map-zoom-layer"></div>
      </div>

      <Navbar onOpenSosModal={() => setSosModalOpen(true)} />
      <Hero />
      <ShowcaseSlider />
      <StatsRibbon />
      <FeaturesSection onOpenSosModal={() => setSosModalOpen(true)} />
      <TechSection />
      <AboutSection />
      <TeamSection />
      <DownloadBanner />
      <Footer />

      <SosModal 
        isOpen={sosModalOpen} 
        onClose={() => setSosModalOpen(false)} 
      />
    </div>
  )
}

export default App
