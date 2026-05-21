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
      title: "Diseño desde cero",
      description: "Nos reunimos con vos, entendemos tu vision y creamos el concepto completo del evento. Renders, planos y branding antes de confirmar."
    },
    {
      icon: <FaVideo />,
      title: "Visualizacion avanzada",
      description: "Vas a ver tu evento terminado antes de que suceda: renders 3D, maquetas digitales y planimetria detallada para evitar sorpresas."
    },
    {
      icon: <FaUsers />,
      title: "Ejecucion sin fisuras",
      description: "Un equipo dedicado exclusivamente a tu evento. Montaje, coordinacion en vivo y desmontaje para que vos solo lo vivas."
    }
  ]

  return (
    <section className="what-we-do" id="diferencial" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">POR QUE DGA</p>
          <h2 className="section-title">Hacemos todo. En serio, todo.</h2>
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
