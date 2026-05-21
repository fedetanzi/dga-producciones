export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <div className="footer-logo">DGA<span>.</span> Producciones</div>
          <div className="footer-tagline">Ingeniería de momentos inolvidables.</div>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h4>Navegación</h4>
            <ul>
              <li><a href="#proyectos">Proyectos</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#proceso">Proceso</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Eventos</h4>
            <ul>
              <li><a href="#">Casamientos</a></li>
              <li><a href="#">Bat & Bar Mitzvah</a></li>
              <li><a href="#">Fiestas de 15</a></li>
              <li><a href="#">Corporativos</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contacto</h4>
            <ul>
              <li><a href="mailto:hola@dgaproducciones.com">hola@dgaproducciones.com</a></li>
              <li><a href="#">WhatsApp</a></li>
              <li><a href="#">Buenos Aires, AR</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">© 2025 DGA Producciones. Todos los derechos reservados.</div>
        <div className="social-links">
          <a href="#" className="social-link">in</a>
          <a href="#" className="social-link">ig</a>
          <a href="#" className="social-link">fb</a>
        </div>
      </div>
    </footer>
  )
}
