import React, { forwardRef } from 'react'
import { motion } from 'framer-motion'
import '../styles/button.css'

const Button = forwardRef(({ text }, ref) => {
    return (
        <motion.button className='main-button' whileHover={{ scale: 1.1, backgroundColor: 'var(--c-pressed)' }} ref={ref}>
            <p>{text}</p>
        </motion.button>
    )
})

export { Button }