import React from 'react'
import { FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">DGA Producciones</h3>
            <p>Ingenieria de momentos inolvidables.</p>
            <div className="footer-social">
              <a 
                href="https://wa.me/5491155672305" 
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
            </div>
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
