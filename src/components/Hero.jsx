export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg" />
      <div className="hero-grid-lines" />
      <div className="hero-orb" />
      <div className="hero-content">
        <div className="hero-badge">Productora integral de eventos</div>
        <h1 className="hero-title">
          Ingeniería de<br />
          <strong>momentos</strong>
        </h1>
        <p className="hero-subtitle">Diseño, precisión y ejecución total.</p>
        <div className="hero-actions">
          <a href="#contacto" className="btn-primary">Iniciar mi evento →</a>
          <a href="#proyectos" className="btn-secondary">Ver proyectos</a>
        </div>
      </div>
      <div className="hero-scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
