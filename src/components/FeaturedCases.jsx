import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './FeaturedCases.css'

const FeaturedCases = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const featuredCases = [
    {
      title: "Wonderland",
      description: "Un evento mágico que transportó a los invitados a un mundo de fantasía y elegancia. Producción integral con ambientación temática de lujo.",
      details: ["300+ invitados", "Ambientación inmersiva", "Experiencia 360°"],
      image: "wonderland"
    },
    {
      title: "Boda de Ensueño",
      description: "Celebración íntima en viñedo privado con diseño floral excepcional y experiencia gastronómica de autor.",
      details: ["Ceremonia al atardecer", "Diseño floral exclusivo", "Gastronomía premium"],
      image: "wedding"
    }
  ]

  return (
    <section className="featured-cases" id="featured-cases" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Casos Destacados</h2>
          <p className="section-subtitle">
            Eventos que marcaron la diferencia
          </p>
        </motion.div>

        <div className="featured-grid">
          {featuredCases.map((item, index) => (
            <motion.div
              key={index}
              className="featured-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={`featured-image ${item.image}`}>
                {/* Placeholder for featured case image */}
              </div>
              <div className="featured-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ul className="featured-details">
                  {item.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedCases
