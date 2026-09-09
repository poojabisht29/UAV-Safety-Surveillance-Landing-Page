import React, { useState, useEffect } from 'react'
import { AlertCircle, Menu } from 'lucide-react'

const Navbar = ({ onOpenSosModal }) => {
  const [scrolled, setScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      const sections = ['home', 'features', 'tech', 'about', 'team', 'download']
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop - 140
          const height = el.offsetHeight
          if (window.scrollY >= top && window.scrollY < top + height) {
            setActiveTab(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container navbar-container">
        <a href="#home" className="brand-logo">
          <div className="brand-icon">
            <img src="/assets/logo.jpg" alt="UAV Safety & Emergency Logo" />
          </div>
          <div className="brand-name">
            <span className="brand-title">UAV Safety & Emergency</span>
            <span className="brand-sub">Hyperlocal SOS & Location Network</span>
          </div>
        </a>

        <ul className={`nav-links ${mobileMenuOpen ? 'mobile-active' : ''}`}>
          <li><a href="#home" className={activeTab === 'home' ? 'active' : ''}>Home</a></li>
          <li><a href="#features" className={activeTab === 'features' ? 'active' : ''}>Features</a></li>
          <li><a href="#tech" className={activeTab === 'tech' ? 'active' : ''}>Tech Info</a></li>
          <li><a href="#about" className={activeTab === 'about' ? 'active' : ''}>About</a></li>
          <li><a href="#team" className={activeTab === 'team' ? 'active' : ''}>Team</a></li>
          <li><a href="#download" className={activeTab === 'download' ? 'active' : ''}>Download</a></li>
        </ul>

        <div className="nav-cta">
          <button className="btn btn-sos" onClick={onOpenSosModal}>
            <AlertCircle size={18} />
            Test SOS Demo
          </button>
          <a href="#download" className="btn btn-primary">
            Download App
          </a>
        </div>

        <button 
          className="mobile-toggle" 
          aria-label="Toggle navigation"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
