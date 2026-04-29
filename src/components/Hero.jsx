import React from 'react'
import { motion } from 'framer-motion'
import './Hero.css'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero" id="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <motion.div
          className="hero-tagline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="hero-live-dot" aria-hidden="true"></span>
          LIVE PRODUCTION EXCELLENCE
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          INGENIERÍA DE{' '}
          <span className="hero-highlight">MOMENTOS</span>{' '}
          INOLVIDABLES
        </motion.h1>
        
        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Desde la concepción creativa hasta la ejecución técnica,
          transformamos espacios en experiencias sensoriales.
        </motion.p>

        <motion.div 
          className="hero-ctas"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <button 
            className="btn-hero-primary"
            onClick={() => scrollToSection('contact')}
          >
            INICIA TU PROYECTO
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
