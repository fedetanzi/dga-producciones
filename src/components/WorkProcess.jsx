import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaSearch, FaLightbulb, FaPencilRuler, FaCogs, FaCheckCircle } from 'react-icons/fa'
import './WorkProcess.css'

const WorkProcess = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const steps = [
    {
      number: "01",
      icon: <FaSearch />,
      title: "Consulta Inicial",
      description: "Conocemos tu visión, objetivos y necesidades específicas para tu evento."
    },
    {
      number: "02",
      icon: <FaLightbulb />,
      title: "Conceptualización",
      description: "Desarrollamos un concepto único y personalizado que refleja tu estilo y aspiraciones."
    },
    {
      number: "03",
      icon: <FaPencilRuler />,
      title: "Planificación Detallada",
      description: "Diseñamos cada aspecto del evento: ambientación, logística, timing y proveedores."
    },
    {
      number: "04",
      icon: <FaCogs />,
      title: "Producción y Montaje",
      description: "Ejecutamos con precisión cada detalle, coordinando todos los elementos técnicos y estéticos."
    },
    {
      number: "05",
      icon: <FaCheckCircle />,
      title: "Experiencia y Cierre",
      description: "Garantizamos que todo fluya perfectamente, permitiéndote disfrutar cada momento."
    }
  ]

  return (
    <section className="work-process" id="process" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Nuestro Proceso</h2>
          <p className="section-subtitle">
            Cinco pasos hacia la perfección
          </p>
        </motion.div>

        <div className="process-timeline">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="process-step"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.icon}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkProcess
