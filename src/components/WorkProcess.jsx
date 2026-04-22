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
      title: "CONSULTA INICIAL",
      description: "Conocemos tu visión y objetivos. Analizamos cada variable para sentar las bases de lo que será una experiencia inolvidable."
    },
    {
      number: "02",
      title: "CONCEPTUALIZACIÓN",
      description: "Creamos un concepto único y personalizado. No replicamos moldes; inventamos estéticas que responden a tu identidad."
    },
    {
      number: "03",
      title: "PLANIFICACIÓN DETALLADA",
      description: "Diseñamos cada aspecto técnico, estético y logístico. Planos que convierten conceptos en realidades ejecutables."
    },
    {
      number: "04",
      title: "PRODUCCIÓN Y MONTAJE",
      description: "Ejecutamos cada detalle con precisión. Un despliegue técnico donde el rigor y el arte convergen en tiempo real."
    },
    {
      number: "05",
      title: "EXPERIENCIA Y CIERRE",
      description: "Garantizamos que todo fluya perfectamente. Nuestra labor termina solo cuando el último invitado se retira conmovido."
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
              MÉTODO{' '}
              <span className="process-highlight">GUILLO</span>
            </h2>
            <div className="process-underline"></div>
            <p className="process-description">
              Transformamos una idea abstracta en una realidad física 
              y emocional a través de un proceso riguroso de diseño y técnica.
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
