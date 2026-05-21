import { useEffect, useRef } from 'react'
import { FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa'

export default function CTA() {
  const innerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible') },
      { threshold: 0.1 }
    )
    if (innerRef.current) observer.observe(innerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contacto">
      <div className="cta-inner reveal" ref={innerRef}>
        <div className="cta-label">¿Tenés un evento en mente?</div>
        <h2 className="cta-title">Tu próximo<br /><strong>momento nos espera.</strong></h2>
        <p className="cta-subtitle">Agendá una reunión sin compromiso. Contanos tu idea y juntos empezamos a darle forma.</p>
        <div className="cta-social">
          <a href="https://wa.me/5491155672305" target="_blank" rel="noopener noreferrer" className="cta-social-link" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
          <a href="https://instagram.com/dgaproducciones" target="_blank" rel="noopener noreferrer" className="cta-social-link" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://tiktok.com/@dgaproducciones" target="_blank" rel="noopener noreferrer" className="cta-social-link" aria-label="TikTok">
            <FaTiktok />
          </a>
        </div>
      </div>
    </section>
  )
}
