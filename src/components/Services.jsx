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
      title: "CASAMIENTOS",
      description: "Produccion integral para bodas con diseno, tecnica y coordinacion total en el gran dia.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800",
      tags: ["SOCIAL", "PRODUCCION"]
    },
    {
      title: "BAR & BAT MITZVAH",
      description: "Experiencias personalizadas con identidad propia, renders previos y una puesta memorable.",
      image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=800",
      tags: ["CUSTOM", "IDENTIDAD"]
    },
    {
      title: "FIESTAS DE 15",
      description: "Conceptos unicos para celebrar a lo grande: ambientacion, branding y direccion de experiencia.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800",
      tags: ["JUVENTUD", "SHOW"]
    },
    {
      title: "CORPORATIVOS",
      description: "Lanzamientos, convenciones y eventos de marca con enfoque premium y ejecucion impecable.",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=800",
      tags: ["MARCA", "RESULTADOS"]
    },
    {
      title: "FIESTAS & SHOWS",
      description: "Sonido, iluminacion, LED, escenarios y estructuras para eventos de alto impacto.",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800",
      tags: ["ENERGIA", "TECNICA"]
    },
    {
      title: "PROVEEDORES & ALIANZAS",
      description: "Red consolidada de partners para asegurar calidad en cada rubro de tu evento.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800",
      tags: ["RED DGA", "COORDINACION"]
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
          <div className="services-tagline">QUE PRODUCIMOS</div>
          <h2 className="section-title">
            CUBRIMOS{' '}
            <span className="services-highlight">CADA CELEBRACION</span>
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
