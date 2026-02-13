import React from 'react'
import { motion } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'
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
        <div className="hero-image"></div>
      </div>
      
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Producción integral de eventos de alto impacto
        </motion.h1>
        
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          sociales • corporativos • masivos
        </motion.p>

        <motion.div 
          className="hero-ctas"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <motion.button 
            className="btn btn-primary"
            onClick={() => scrollToSection('contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Planificar mi evento
          </motion.button>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          onClick={() => scrollToSection('services')}
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <FaChevronDown />
          </motion.div>
          <span>Descubre más</span>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
