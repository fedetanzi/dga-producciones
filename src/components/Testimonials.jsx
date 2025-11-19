import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa'
import './Testimonials.css'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "María González",
      event: "Boda",
      text: "DGA Producciones transformó nuestra boda en un sueño hecho realidad. Cada detalle fue perfecto, superando todas nuestras expectativas. El profesionalismo y la dedicación de Maia y Guille fueron excepcionales.",
      rating: 5
    },
    {
      name: "Carlos Mendoza",
      event: "Evento Corporativo",
      text: "La producción de nuestro evento anual fue impecable. La atención al detalle y la coordinación logística fueron de primer nivel. Altamente recomendados para eventos corporativos de alto perfil.",
      rating: 5
    },
    {
      name: "Sofía Martínez",
      event: "Celebración Premium",
      text: "Trabajar con DGA fue una experiencia maravillosa. Su creatividad y capacidad para materializar nuestra visión fue sorprendente. Un equipo verdaderamente profesional.",
      rating: 5
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="testimonials" id="testimonials" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Testimonios</h2>
          <p className="section-subtitle">
            La satisfacción de nuestros clientes nos inspira
          </p>
        </motion.div>

        <div className="testimonial-carousel">
          <button 
            className="carousel-btn prev"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>

          <motion.div
            key={currentIndex}
            className="testimonial-card"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <div className="testimonial-stars">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className="testimonial-text">"{testimonials[currentIndex].text}"</p>
            <div className="testimonial-author">
              <h4>{testimonials[currentIndex].name}</h4>
              <p>{testimonials[currentIndex].event}</p>
            </div>
          </motion.div>

          <button 
            className="carousel-btn next"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>
        </div>

        <div className="carousel-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
