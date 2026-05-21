import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import './FeaturedCases.css'

const FeaturedCases = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const scrollRef = useRef(null)

  const featuredCases = [
    {
      title: "Valentina & Marcos",
      description: "Casamiento · 250 personas · Palermo, Buenos Aires",
      tags: ["CASAMIENTO", "PRODUCCION INTEGRAL", "EXPERIENCIA 360"],
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800"
    },
    {
      title: "La noche de Sofia",
      description: "Bat Mitzvah · 180 personas · Salon Gran Rex",
      tags: ["BAT MITZVAH", "DISEÑO A MEDIDA", "AMBIENTACION"],
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800"
    },
    {
      title: "Renata XVII",
      description: "Fiesta de 15 · 320 personas · Haras La Quebrada",
      tags: ["FIESTA DE 15", "BRANDING", "PUESTA ESCENICA"],
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800"
    },
    {
      title: "Lanzamiento Nexo Brand",
      description: "Corporativo · 500 personas · Centro Cultural Kirchner",
      tags: ["CORPORATIVO", "LANZAMIENTO", "PREMIUM"],
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800"
    }
  ]

  return (
    <section className="featured-cases" id="proyectos" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">PORTFOLIO</p>
          <h2 className="section-title">Cada evento, una obra.</h2>
        </motion.div>

        <div className="slider-wrapper">
          <div className="slider-container" ref={scrollRef}>
            {featuredCases.map((item, index) => (
              <motion.div
                key={index}
                className="case-card"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div 
                  className="case-image"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="case-overlay"></div>
                </div>
                <div className="case-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="case-tags">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedCases
