import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './Portfolio.css'

const Portfolio = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const portfolioItems = [
    { id: 1, title: "Boda Elegante", category: "Boda", image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800" },
    { id: 2, title: "Evento Corporativo", category: "Corporativo", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800" },
    { id: 3, title: "Celebración Social", category: "Social", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800" },
    { id: 4, title: "Boda al Atardecer", category: "Boda", image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800" },
    { id: 5, title: "Gala Empresarial", category: "Corporativo", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800" },
    { id: 6, title: "Fiesta Premium", category: "Social", image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=800" },
    { id: 7, title: "Boda de Jardín", category: "Boda", image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=800" },
    { id: 8, title: "Cóctel Nocturno", category: "Social", image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=800" },
    { id: 9, title: "Conferencia VIP", category: "Corporativo", image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800" }
  ]

  const openLightbox = (index) => {
    setCurrentIndex(index)
    setSelectedImage(portfolioItems[index])
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % portfolioItems.length
    setCurrentIndex(newIndex)
    setSelectedImage(portfolioItems[newIndex])
  }

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + portfolioItems.length) % portfolioItems.length
    setCurrentIndex(newIndex)
    setSelectedImage(portfolioItems[newIndex])
  }

  return (
    <section className="portfolio" id="portfolio" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Portafolio</h2>
          <p className="section-subtitle">
            Experiencias que hablan por sí mismas
          </p>
        </motion.div>

        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="portfolio-item"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => openLightbox(index)}
            >
              <div 
                className="portfolio-image"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="portfolio-overlay">
                <h3>{item.title}</h3>
                <p>{item.category}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            >
              <button className="lightbox-close" onClick={closeLightbox}>
                <FaTimes />
              </button>
              <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
                <FaChevronLeft />
              </button>
              <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
                <FaChevronRight />
              </button>
              <motion.div
                className="lightbox-content"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div 
                  className="lightbox-image"
                  style={{ backgroundImage: `url(${selectedImage.image})` }}
                ></div>
                <div className="lightbox-info">
                  <h3>{selectedImage.title}</h3>
                  <p>{selectedImage.category}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Portfolio
