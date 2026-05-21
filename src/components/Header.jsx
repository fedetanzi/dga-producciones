import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav id="navbar" className={`${scrolled ? 'scrolled' : ''}${menuOpen ? ' menu-open' : ''}`}>
      <a href="#" className="logo">DGA<span>.</span></a>

      <ul className={menuOpen ? 'nav-open' : ''}>
        <li><a href="#proyectos" onClick={closeMenu}>Proyectos</a></li>
        <li><a href="#servicios" onClick={closeMenu}>Servicios</a></li>
        <li><a href="#proceso" onClick={closeMenu}>Proceso</a></li>
        <li><a href="#contacto" className="nav-cta" onClick={closeMenu}>Agendar reunión</a></li>
      </ul>

      <button
        className="nav-hamburger"
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Menú"
      >
        <span className={menuOpen ? 'open' : ''} />
        <span className={menuOpen ? 'open' : ''} />
        <span className={menuOpen ? 'open' : ''} />
      </button>
    </nav>
  )
}
