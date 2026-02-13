import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaCheck } from 'react-icons/fa'
import './Services.css'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    "Producción integral de eventos",
    "Diseño de ambientaciones y escenografías",
    "Renderizado y planos técnicos",
    "Sonido, iluminación y pantallas LED",
    "Escenarios y estructuras",
    "Coordinación general del evento",
    "Gestión de proveedores líderes"
  ]

  return (
    <section className="services" id="services" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">nuestros servicios</h2>
        </motion.div>

        <div className="services-list">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-item"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="service-icon">
                <FaCheck />
              </div>
              <p>{service}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
