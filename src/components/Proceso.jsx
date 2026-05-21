import { useEffect, useRef } from 'react'

const steps = [
  { num: 'Paso 01', titulo: 'Consulta & Concepto', sub: 'Entendemos tu visión', desc: 'Nos reunimos, te escuchamos y co-creamos la idea central del evento. Identidad, estética, atmósfera.' },
  { num: 'Paso 02', titulo: 'Diseño & Visualización', sub: 'Lo ves antes de que exista', desc: 'Renders 3D, planimetría y branding del evento para que apruebes cada detalle con confianza.' },
  { num: 'Paso 03', titulo: 'Producción', sub: 'Cada pieza en su lugar', desc: 'Coordinamos proveedores, logística y todos los componentes del evento con un equipo dedicado.' },
  { num: 'Paso 04', titulo: 'Ejecución & Cierre', sub: 'Vos solo disfrutás', desc: 'El día del evento, nuestro equipo está en cada rincón. Montaje, coordinación en vivo y desmontaje sin que muevas un dedo.' },
]

export default function Proceso() {
  const headerRef = useRef(null)
  const stepsRef = useRef([])

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible') },
      { threshold: 0.1 }
    )
    if (headerRef.current) revealObserver.observe(headerRef.current)

    const stepsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          stepsRef.current.forEach((el, i) => {
            if (el) setTimeout(() => el.classList.add('visible'), i * 120)
          })
          stepsObserver.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (stepsRef.current[0]) stepsObserver.observe(stepsRef.current[0])

    return () => { revealObserver.disconnect(); stepsObserver.disconnect() }
  }, [])

  return (
    <section id="proceso">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="proceso-header reveal" ref={headerRef}>
          <div>
            <div className="section-label">Metodología</div>
            <h2 className="section-title">Así creamos<br /><strong>tu experiencia.</strong></h2>
          </div>
          <div className="metodo-badge">Método DGA</div>
        </div>

        <div className="proceso-steps">
          {steps.map((s, i) => (
            <div
              className="proceso-step"
              key={i}
              ref={el => stepsRef.current[i] = el}
            >
              <div className="paso-num">{s.num}</div>
              <div className="paso-titulo">{s.titulo}</div>
              <div className="paso-subtitulo">{s.sub}</div>
              <div className="paso-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
