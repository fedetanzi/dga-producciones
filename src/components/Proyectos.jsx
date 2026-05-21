import { useRef, useEffect } from 'react'

const projects = [
  {
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800',
    tag: 'Casamiento', name: 'Valentina & Marcos', desc: '250 personas · Palermo, Buenos Aires',
  },
  {
    img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800',
    tag: 'Bat Mitzvah', name: 'La noche de Sofía', desc: '180 personas · Salón Gran Rex',
  },
  {
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800',
    tag: 'Fiesta de 15', name: 'Renata XVII', desc: '320 personas · Haras La Quebrada',
  },
  {
    img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800',
    tag: 'Corporativo', name: 'Lanzamiento Nexo Brand', desc: '500 personas · Centro Cultural Kirchner',
  },
  {
    img: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=800',
    tag: 'Bar Mitzvah', name: 'La era de Tomás', desc: '200 personas · Parque Norte',
  },
]

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
          {projects.map((p, i) => (
            <div className="project-card" key={i}>
              <div className="project-card-placeholder">
                <img
                  src={p.img}
                  alt={p.name}
                  className="pc-bg"
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
              <div className="project-overlay">
                <div className="project-tag">{p.tag}</div>
                <div className="project-name">{p.name}</div>
                <div className="project-desc">{p.desc}</div>
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
