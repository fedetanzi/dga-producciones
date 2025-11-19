import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaLightbulb, FaPalette, FaTruck, FaMicrophone, FaUsers, FaStar } from 'react-icons/fa'
import './Services.css'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: <FaLightbulb />,
      title: "Producción Integral",
      description: "Conceptualización y ejecución completa de tu evento, desde la idea hasta el último detalle."
    },
    {
      icon: <FaPalette />,
      title: "Ambientación",
      description: "Diseño y decoración personalizada que refleja tu visión con elegancia y sofisticación."
    },
    {
      icon: <FaTruck />,
      title: "Logística",
      description: "Coordinación precisa de todos los elementos para garantizar un evento impecable."
    },
    {
      icon: <FaMicrophone />,
      title: "Técnica",
      description: "Iluminación profesional, sonido de alta calidad y estructuras especializadas."
    },
    {
      icon: <FaUsers />,
      title: "Gestión de Proveedores",
      description: "Selección y coordinación de los mejores profesionales para cada aspecto del evento."
    },
    {
      icon: <FaStar />,
      title: "Eventos Boutique",
      description: "Experiencias exclusivas y personalizadas para celebraciones íntimas de lujo."
    }
  ]

  return (
    <section className="services" id="services" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-subtitle">
            Ofrecemos soluciones completas para eventos de lujo
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
