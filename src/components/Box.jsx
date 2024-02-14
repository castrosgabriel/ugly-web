import React, { forwardRef } from 'react'
import { motion } from 'framer-motion'
import '../styles/box.css'

const Box = forwardRef(({
    children,
    onClick,
    bgColor = 'var(--c-box-1)',
    hoverColor = 'var(--c-gray-60)',
    contentColor = 'var(--c-text)',
    minWidth,
    maxWidth,
    maxHeight,
    minHeight,
    hasHover },
    ref) => {

    const styleBox = {
        minHeight: `${minHeight}px`,
        maxHeight: `${maxHeight}px`,
        maxWidth: `${maxWidth}px`,
        minWidth: `${minWidth}px`,
        backgroundColor: bgColor,
        color: `${contentColor}`,
    }

    return (
        <motion.div
            ref={ref}
            onClick={onClick}
            className="box"
            whileHover={
                hasHover ? {
                    cursor: 'pointer',
                    backgroundColor: hoverColor
                } : null}
            style={styleBox}
        >
            {children}
        </motion.div >
    )
})

export { Box }