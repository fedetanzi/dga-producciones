import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import WhatWeDo from './components/WhatWeDo'
import FeaturedCases from './components/FeaturedCases'
import WorkProcess from './components/WorkProcess'
import About from './components/About'
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
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <FeaturedCases />
        <WorkProcess />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
