import { useState, useEffect, useRef } from 'react'

const servicios = [
  { num: '01', name: 'Casamientos' },
  { num: '02', name: 'Bar & Bat Mitzvah' },
  { num: '03', name: 'Fiestas de 15' },
  { num: '04', name: 'Corporativos' },
  { num: '05', name: 'Fiestas & Shows' },
  { num: '06', name: 'Proveedores & Alianzas' },
]

const servicioData = [
  { title: 'Valentina & Marcos', sub: 'Casamiento en producción · 87% completado', team: '12 personas coordinando ahora mismo' },
  { title: 'Sofía — Bar Mitzvah', sub: 'Diseño aprobado · comenzando producción', team: '8 personas coordinando ahora mismo' },
  { title: 'Renata XVII — Quince', sub: 'Renders presentados · en planificación', team: '10 personas coordinando ahora mismo' },
  { title: 'Nexo Brand Launch', sub: 'Branding corporativo · en ejecución', team: '15 personas coordinando ahora mismo' },
  { title: 'Fiesta electrónica — Enero', sub: 'Producción en curso · venue confirmado', team: '20 personas coordinando ahora mismo' },
  { title: 'Red de proveedores DGA', sub: 'Alianzas activas · +80 proveedores', team: 'Equipo de coordinación disponible' },
]

export default function Servicios() {
  const [active, setActive] = useState(0)
  const [display, setDisplay] = useState(servicioData[0])
  const revealRef = useRef(null)
  const listRef = useRef(null)
  const visualRef = useRef(null)
  const fillRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    ;[revealRef.current, listRef.current, visualRef.current].forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleSelect = (i) => {
    setActive(i)
    setTimeout(() => {
      setDisplay(servicioData[i])
      if (fillRef.current) {
        fillRef.current.style.animation = 'none'
        fillRef.current.offsetHeight
        fillRef.current.style.animation = 'progressAnim 3s ease-in-out infinite'
      }
    }, 220)
  }

  return (
    <section id="servicios">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="reveal" ref={revealRef}>
          <div className="section-label">Qué producimos</div>
          <h2 className="section-title">Cubrimos<br /><strong>cada celebración.</strong></h2>
        </div>

        <div className="servicios-layout">
          <div className="servicios-list reveal" ref={listRef}>
            {servicios.map((s, i) => (
              <div
                key={i}
                className={`servicio-item${active === i ? ' active' : ''}`}
                onClick={() => handleSelect(i)}
              >
                <div className="servicio-left">
                  <span className="servicio-num">{s.num}</span>
                  <span className="servicio-name">{s.name}</span>
                </div>
                <span className="servicio-arrow">→</span>
              </div>
            ))}
          </div>

          <div className="servicios-visual reveal reveal-delay-2" ref={visualRef}>
            <div className="servicios-visual-bg" />
            <div className="svc-orb" />
            <div className="servicios-visual-card svc-card-2">
              <div className="svc-card-title">{display.title}</div>
              <div className="svc-card-sub">{display.sub}</div>
              <div className="svc-progress-bar">
                <div className="svc-progress-fill" ref={fillRef} />
              </div>
            </div>
            <div className="servicios-visual-card svc-card-1">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div className="svc-card-title">Equipo coordinando</div>
                  <div className="svc-card-sub">{display.team}</div>
                </div>
                <div style={{ width: 10, height: 10, background: '#22c55e', borderRadius: '50%', flexShrink: 0, boxShadow: '0 0 0 4px rgba(34,197,94,0.15)' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
