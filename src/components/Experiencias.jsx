import { useEffect, useRef } from 'react'

const testimonios = [
  {
    tag: 'Casamiento',
    text: 'No tuvimos que preocuparnos por absolutamente nada. El día de nuestra boda nos dedicamos a celebrar mientras el equipo de DGA se encargaba de todo. Superó lo que habíamos imaginado.',
    avatar: 'VM',
    name: 'Valentina & Marcos',
    event: 'Casamiento · 250 personas',
  },
  {
    tag: 'Bat Mitzvah',
    text: 'Cuando vimos los renders por primera vez, lloramos de emoción. Saber exactamente cómo iba a ser la noche antes de que pasara fue algo increíble. Y la ejecución fue idéntica a lo prometido.',
    avatar: 'RL',
    name: 'Raquel Leibovich',
    event: 'Bat Mitzvah de Sofía · 180 personas',
  },
  {
    tag: 'Corporativo',
    text: 'Como marca necesitábamos un lanzamiento que se sintiera premium. DGA entendió la identidad de Nexo desde el primer día y diseñó una experiencia que nuestros clientes todavía recuerdan.',
    avatar: 'CP',
    name: 'Carolina Pérez',
    event: 'Directora de Marketing · Nexo Brand',
  },
  {
    tag: 'Fiesta de 15',
    text: 'Mi hija quería algo único y diferente. DGA no solo cumplió, sino que nos sorprendió en cada etapa. El branding personalizado fue un detalle que hizo que todo se sintiera coherente y especial.',
    avatar: 'MG',
    name: 'Marcela Gutiérrez',
    event: 'Fiesta de 15 de Renata · 320 personas',
  },
]

export default function Experiencias() {
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
    <section id="experiencias">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="reveal" ref={revealRef}>
          <div className="section-label">Lo que dicen</div>
          <h2 className="section-title">Experiencias<br /><strong>que hablan.</strong></h2>
        </div>

        <div className="experiencias-grid reveal reveal-delay-1" ref={gridRef}>
          {testimonios.map((t, i) => (
            <div className="testimonio-card" key={i}>
              <div className="testimonio-header">
                <div className="testimonio-quote">"</div>
                <div className="event-type-tag">{t.tag}</div>
              </div>
              <p className="testimonio-text">{t.text}</p>
              <div className="testimonio-author">
                <div className="author-avatar">{t.avatar}</div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-event">{t.event}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
