import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import CustomCursor from './components/CustomCursor'
import Header from './components/Header'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import Proyectos from './components/Proyectos'
import Diferencial from './components/Diferencial'
import Servicios from './components/Servicios'
import Proceso from './components/Proceso'
import Experiencias from './components/Experiencias'
import CTA from './components/CTA'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <>
      <CustomCursor />
      <Header />
      <div className="App">
        <main>
          <Hero />
          <StatsBar />
          <Proyectos />
          <Diferencial />
          <Servicios />
          <Proceso />
          <Experiencias />
          <CTA />
        </main>
        <Footer />
      </div>
      <Analytics />
      <SpeedInsights />
    </>
  )
}
