import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaLightbulb, FaVideo, FaUsers } from 'react-icons/fa'
import './WhatWeDo.css'

const WhatWeDo = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const blocks = [
    {
      icon: <FaLightbulb />,
      title: "Producción integral",
      description: "Desde el concepto hasta el último minuto del evento."
    },
    {
      icon: <FaVideo />,
      title: "Equipamiento de última generación",
      description: "Sonido, pantallas, luces, estructuras y escenarios con tecnología líder en el mercado."
    },
    {
      icon: <FaUsers />,
      title: "Coordinación total en vivo",
      description: "Un equipo completo asegurando que todo fluya perfecto mientras vos disfrutás."
    }
  ]

  return (
    <section className="what-we-do" id="what-we-do" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">hacemos que las ideas se conviertan en experiencias inolvidables</h2>
        </motion.div>

        <div className="blocks-grid">
          {blocks.map((block, index) => (
            <motion.div
              key={index}
              className="block-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="block-icon">{block.icon}</div>
              <h3>{block.title}</h3>
              <p>{block.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo
