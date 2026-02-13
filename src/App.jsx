import React, { useState, useEffect } from 'react'
import Hero from './components/Hero'
import WhatWeDo from './components/WhatWeDo'
import FeaturedCases from './components/FeaturedCases'
import Services from './components/Services'
import WorkProcess from './components/WorkProcess'
import About from './components/About'
import Portfolio from './components/Portfolio'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="App">
      <main>
        <Hero />
        <WhatWeDo />
        <FeaturedCases />
        <Services />
        <WorkProcess />
        <About />
        <Portfolio />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
