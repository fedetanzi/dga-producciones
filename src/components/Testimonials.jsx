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
      name: "Valentina & Marcos",
      event: "Casamiento · 250 personas",
      text: "No tuvimos que preocuparnos por absolutamente nada. El dia de nuestra boda nos dedicamos a celebrar mientras el equipo de DGA se encargo de todo. Supero lo que habiamos imaginado.",
      rating: 5
    },
    {
      name: "Carolina Perez",
      event: "Directora de Marketing · Nexo Brand",
      text: "Como marca necesitabamos un lanzamiento que se sintiera premium. DGA entendio la identidad desde el primer dia y diseno una experiencia que nuestros clientes todavia recuerdan.",
      rating: 5
    },
    {
      name: "Marcela Gutierrez",
      event: "Fiesta de 15 de Renata · 320 personas",
      text: "Mi hija queria algo unico y diferente. DGA no solo cumplio, sino que nos sorprendio en cada etapa. El branding personalizado hizo que todo se sintiera coherente y especial.",
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
    <section className="testimonials" id="experiencias" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Experiencias que hablan.</h2>
          <p className="section-subtitle">
            Lo que dicen quienes ya vivieron un evento DGA
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
