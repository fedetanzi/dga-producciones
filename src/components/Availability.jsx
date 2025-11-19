import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaMapMarkerAlt, FaGlobe } from 'react-icons/fa'
import './Availability.css'

const Availability = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="availability" id="availability" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Disponibilidad</h2>
          <p className="section-subtitle">
            Donde nos necesites, allí estaremos
          </p>
        </motion.div>

        <div className="availability-grid">
          <motion.div
            className="availability-card"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="availability-icon">
              <FaMapMarkerAlt />
            </div>
            <h3>Base en Buenos Aires</h3>
            <p>
              Con sede en Buenos Aires, Argentina, ofrecemos servicios completos 
              en toda la región metropolitana y provincias circundantes.
            </p>
          </motion.div>

          <motion.div
            className="availability-card"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="availability-icon">
              <FaGlobe />
            </div>
            <h3>Alcance Nacional e Internacional</h3>
            <p>
              Llevamos nuestra experiencia a cualquier destino. Producimos eventos 
              de lujo en toda Argentina y en destinos internacionales selectos.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="availability-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p>¿Tu evento es en otro destino? Consultanos sobre disponibilidad</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Availability
