import { useRef, useEffect } from 'react'

const projects = Array.from({ length: 8 }, (_, i) => `/eventos/evento-0${i + 1}.jpg`).reverse()

export default function Proyectos() {
  const trackRef = useRef(null)
  const headerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible') },
      { threshold: 0.1 }
    )
    if (headerRef.current) observer.observe(headerRef.current)
    return () => observer.disconnect()
  }, [])

  const scroll = (dir) => {
    trackRef.current?.scrollBy({ left: dir * 432, behavior: 'smooth' })
  }

  return (
    <section id="proyectos">
      <div className="projects-header reveal" ref={headerRef}>
        <div>
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">Cada evento,<br /><strong>una obra.</strong></h2>
        </div>
      </div>

      <div className="carousel-container">
        <div className="carousel-track" ref={trackRef}>
          {projects.map((img, i) => (
            <div className="project-card" key={img}>
              <div className="project-card-placeholder">
                <img
                  src={img}
                  alt={`Evento ${i + 1}`}
                  className="pc-bg"
                  loading="lazy"
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-nav">
        <button className="carousel-btn" onClick={() => scroll(-1)}>←</button>
        <button className="carousel-btn" onClick={() => scroll(1)}>→</button>
      </div>
    </section>
  )
}
