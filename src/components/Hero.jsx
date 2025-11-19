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

  const words = ["Creamos", "experiencias", "inolvidables"]

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
          {words.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.3 + index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              style={{ display: 'inline-block', marginRight: '0.5rem' }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
        
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Producción <span className="highlight">integral de eventos de lujo</span> con proyección nacional e internacional
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
            Solicitar Propuesta
          </motion.button>
          <motion.button 
            className="btn btn-secondary"
            onClick={() => scrollToSection('portfolio')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Portafolio
          </motion.button>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          onClick={() => scrollToSection('about')}
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
