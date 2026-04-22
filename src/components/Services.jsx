import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './Services.css'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      title: "PRODUCCIÓN INTEGRAL DE EVENTOS",
      description: "Ejecución total 360° con estándares internacionales de calidad.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800",
      tags: ["RESULTADOS", "PRECISIÓN"]
    },
    {
      title: "DISEÑO DE AMBIENTACIONES",
      description: "Escenografías que cuentan historias y capturan la esencia de la marca.",
      image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=800",
      tags: ["CREATIVIDAD", "PRECISIÓN"]
    },
    {
      title: "RENDERIZADO Y PLANOS TÉCNICOS",
      description: "Previsualización fotorrealista para una planificación sin fallas.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800",
      tags: ["PRECISIÓN", "VISIÓN"]
    },
    {
      title: "SONIDO, ILUMINACIÓN Y LED",
      description: "Tecnología de punta para una experiencia sensorial inmersiva.",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=800",
      tags: ["POTENCIA", "RESULTADOS"]
    },
    {
      title: "ESCENARIOS Y ESTRUCTURAS",
      description: "Montajes seguros y audaces que desafían la arquitectura convencional.",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800",
      tags: ["RIGOR", "CREATIVIDAD"]
    },
    {
      title: "COORDINACIÓN Y GESTIÓN",
      description: "Liderazgo operativo y gestión de proveedores estratégicos.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800",
      tags: ["CONTROL", "EXCELENCIA"]
    }
  ]

  return (
    <section className="services" id="services" ref={ref}>
      <div className="container">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="services-tagline">NUESTRA EXPERTICIA</div>
          <h2 className="section-title">
            SERVICIOS DE{' '}
            <span className="services-highlight">ALTA FIDELIDAD</span>
          </h2>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div 
                className="service-image"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-tags">
                  {service.tags.map((tag, idx) => (
                    <span key={idx} className="service-tag">{tag} —</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
