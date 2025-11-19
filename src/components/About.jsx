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
          <h2 className="section-title">Sobre Nosotros</h2>
          <div className="about-grid">
            <div className="about-text">
              <h3>DGA Producciones</h3>
              <p>
                Somos un equipo de productores especializados en eventos sociales de lujo, 
                comprometidos con la excelencia y el detalle. Con base en Buenos Aires, 
                llevamos nuestro expertise a nivel nacional e internacional.
              </p>
              <p>
                Bajo la dirección de Maia & Guille, transformamos visiones en experiencias 
                memorables, fusionando creatividad, logística impecable y un servicio 
                personalizado que supera expectativas.
              </p>
              <p>
                Cada evento es una oportunidad para crear momentos únicos que perduran en 
                el tiempo, con la sofisticación y profesionalismo que caracteriza a DGA.
              </p>
            </div>
            <motion.div 
              className="about-image"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="image-placeholder">
                {/* Placeholder for professional image */}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
