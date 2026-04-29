import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header 
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-container">
        <div className="header-logo">
          <div className="logo-box">DGA</div>
          <span className="logo-text">DGA PRODUCCIONES</span>
        </div>

        <nav className="header-nav">
          <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>
            SERVICES
          </a>
          <a href="#process" onClick={(e) => { e.preventDefault(); scrollToSection('process'); }}>
            PROCESS
          </a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
            CONTACT
          </a>
        </nav>

        <button 
          className="header-cta"
          onClick={() => scrollToSection('contact')}
        >
          INICIA TU PROYECTO
        </button>
      </div>
    </motion.header>
  )
}

export default Header
