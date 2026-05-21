import { useEffect, useRef } from 'react'

const cards = [
  { num: '01', icon: '🎨', title: 'Diseño desde cero', text: 'Nos reunimos con vos, entendemos tu visión y creamos el concepto completo del evento. Renders, planos, branding — todo antes de confirmar.' },
  { num: '02', icon: '🏗️', title: 'Visualización avanzada', text: 'Vas a ver tu evento terminado antes de que suceda. Renders 3D, maquetas digitales y planimetría detallada para que no haya sorpresas.' },
  { num: '03', icon: '⚡', title: 'Ejecución sin fisuras', text: 'Un equipo dedicado exclusivamente a tu evento. Montaje, coordinación en vivo, desmontaje. El día de tu evento, vos solo lo vivís.' },
]

export default function Diferencial() {
  const revealRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    ;[revealRef.current, gridRef.current].forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="diferencial">
      <div className="diferencial-glow-title" />
      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div className="reveal" ref={revealRef}>
          <div className="section-label">Por qué DGA</div>
          <h2 className="section-title" style={{ color: 'white' }}>
            Hacemos todo.<br /><strong>En serio, todo.</strong>
          </h2>
        </div>
        <div className="diferencial-grid reveal reveal-delay-1" ref={gridRef}>
          {cards.map((c) => (
            <div className="diferencial-card" key={c.num}>
              <div className="diferencial-number">{c.num}</div>
              <div className="diferencial-icon">{c.icon}</div>
              <div className="diferencial-title">{c.title}</div>
              <div className="diferencial-text">{c.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
