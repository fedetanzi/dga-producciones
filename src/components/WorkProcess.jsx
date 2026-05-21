import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './WorkProcess.css'

const WorkProcess = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const steps = [
    {
      number: "01",
      title: "CONSULTA & CONCEPTO",
      description: "Entendemos tu vision. Nos reunimos, te escuchamos y co-creamos la idea central del evento."
    },
    {
      number: "02",
      title: "DISENO & VISUALIZACION",
      description: "Lo ves antes de que exista. Renders 3D, planimetria y branding para aprobar cada detalle."
    },
    {
      number: "03",
      title: "PRODUCCION",
      description: "Cada pieza en su lugar. Coordinamos proveedores, logistica y todos los componentes con equipo dedicado."
    },
    {
      number: "04",
      title: "EJECUCION & CIERRE",
      description: "Vos solo disfrutas. Montaje, coordinacion en vivo y desmontaje sin que muevas un dedo."
    }
  ]

  return (
    <section className="work-process" id="process" ref={ref}>
      <div className="container">
        <div className="process-layout">
          <motion.div
            className="process-intro"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="process-main-title">
              METODO{' '}
              <span className="process-highlight">DGA</span>
            </h2>
            <div className="process-underline"></div>
            <p className="process-description">
              Asi creamos tu experiencia: una metodologia clara para transformar 
              ideas en eventos memorables con precision operativa.
            </p>
          </motion.div>

          <div className="process-steps">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="process-step"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="step-header">
                  <span className="step-number">{step.number}</span>
                  <h3 className="step-title">{step.title}</h3>
                </div>
                <p className="step-description">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkProcess
