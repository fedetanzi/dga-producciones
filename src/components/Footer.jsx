import React from 'react'
import { FaWhatsapp, FaInstagram, FaTiktok, FaEnvelope, FaHeart } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">DGA Producciones</h3>
            <p>Creando experiencias inolvidables desde Buenos Aires hacia el mundo</p>
            <div className="footer-social">
              <a 
                href="https://wa.me/5491123456789" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a 
                href="https://instagram.com/dgaproducciones" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://tiktok.com/@dgaproducciones" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <FaTiktok />
              </a>
              <a 
                href="mailto:info@dgaproducciones.com"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Navegación</h4>
            <ul>
              <li><button onClick={() => scrollToSection('about')}>Nosotros</button></li>
              <li><button onClick={() => scrollToSection('services')}>Servicios</button></li>
              <li><button onClick={() => scrollToSection('portfolio')}>Portafolio</button></li>
              <li><button onClick={() => scrollToSection('process')}>Proceso</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Servicios</h4>
            <ul>
              <li>Producción Integral</li>
              <li>Ambientación</li>
              <li>Logística</li>
              <li>Técnica</li>
              <li>Eventos Boutique</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contacto</h4>
            <ul>
              <li>Buenos Aires, Argentina</li>
              <li><a href="mailto:info@dgaproducciones.com">info@dgaproducciones.com</a></li>
              <li><a href="tel:+5491123456789">+54 9 11 2345-6789</a></li>
              <li><button onClick={() => scrollToSection('contact')}>Solicitar Propuesta</button></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} DGA Producciones. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
