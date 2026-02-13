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
      title: "Boda de ensueño",
      description: "Celebración íntima en hotel lujoso, ambientación con ultima tecnología",
      tags: ["300+ invitados", "ambientación inmersiva", "experiencia 360"],
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800"
    },
    {
      title: "Boda de ensueño",
      description: "Celebración íntima en hotel lujoso, ambientación con ultima tecnología",
      tags: ["300+ invitados", "ambientación inmersiva", "experiencia 360"],
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800"
    },
    {
      title: "Boda de ensueño",
      description: "Celebración íntima en hotel lujoso, ambientación con ultima tecnología",
      tags: ["300+ invitados", "ambientación inmersiva", "experiencia 360"],
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800"
    },
    {
      title: "Boda de ensueño",
      description: "Celebración íntima en hotel lujoso, ambientación con ultima tecnología",
      tags: ["300+ invitados", "ambientación inmersiva", "experiencia 360"],
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800"
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
