import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './About.css'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="about" id="about" ref={ref}>
      <div className="container">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">¿Quiénes somos?</h2>
          <div className="about-text-wrapper">
            <p>
              Somos una productora integral de eventos 360°.
            </p>
            <p>
              Contamos con un equipo especializado en diseño, renderizado, planificación técnica y coordinación en vivo.
            </p>
            <p>
              Trabajamos junto a los proveedores líderes del mercado, utilizando equipamiento de última generación para lograr producciones de máximo nivel, tanto en eventos sociales como corporativos y masivos.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
