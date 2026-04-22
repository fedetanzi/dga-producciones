import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './Portfolio.css'

const Portfolio = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const portfolioItems = [
    { 
      id: 1, 
      title: "GALA 15 AÑOS",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800",
      tags: ["LIGHTING DESIGN", "LIVE SYNC"]
    },
    { 
      id: 2, 
      title: "TECH SUMMIT",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800",
      tags: ["HIGH IMPACT", "LIVE SYNC"]
    },
    { 
      id: 3, 
      title: "ELECTRONIC SESSION",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800",
      tags: ["LIGHTING DESIGN", "HIGH IMPACT"]
    },
    { 
      id: 4, 
      title: "CORPORATE EVENT",
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800",
      tags: ["BRANDING", "LIVE SYNC"]
    },
    { 
      id: 5, 
      title: "FASHION SHOW",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800",
      tags: ["LIGHTING DESIGN", "HIGH IMPACT"]
    },
    { 
      id: 6, 
      title: "MUSIC FESTIVAL",
      image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=800",
      tags: ["LIVE SYNC", "HIGH IMPACT"]
    }
  ]

  return (
    <section className="portfolio" id="portfolio" ref={ref}>
      <div className="container">
        <motion.div
          className="portfolio-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            PORTFOLIO
            <span className="title-underline"></span>
          </h2>
          <p className="section-subtitle">
            Casos de éxito que definen el nuevo estándar de la industria.
          </p>
        </motion.div>

        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="portfolio-item"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div 
                className="portfolio-image"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="portfolio-overlay"></div>
              </div>
              <div className="portfolio-info">
                <h3 className="portfolio-title">{item.title}</h3>
                <div className="portfolio-tags">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className="portfolio-tag">{tag}</span>
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

export default Portfolio
