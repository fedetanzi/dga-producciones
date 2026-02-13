import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './Portfolio.css'

const Portfolio = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const portfolioItems = [
    { id: 1, image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800" },
    { id: 2, image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800" },
    { id: 3, image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800" },
    { id: 4, image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800" },
    { id: 5, image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800" },
    { id: 6, image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=800" },
    { id: 7, image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=800" },
    { id: 8, image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=800" },
    { id: 9, image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800" }
  ]

  return (
    <section className="portfolio" id="portfolio" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">portfolio</h2>
        </motion.div>

        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="portfolio-item"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div 
                className="portfolio-image"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="portfolio-overlay">
                <span>ver proyecto</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
