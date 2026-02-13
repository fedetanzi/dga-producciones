import React from 'react'
import { motion } from 'framer-motion'
import './StarDecoration.css'

const StarDecoration = ({ size = 'medium', className = '' }) => {
  const sizes = {
    small: 20,
    medium: 30,
    large: 40
  }

  return (
    <motion.div 
      className={`star-decoration ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360],
        opacity: [0.6, 1, 0.6]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <svg 
        width={sizes[size]} 
        height={sizes[size]} 
        viewBox="0 0 24 24" 
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
          fill="currentColor"
        />
      </svg>
    </motion.div>
  )
}

export default StarDecoration
