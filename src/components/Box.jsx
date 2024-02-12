import React, { forwardRef, useState } from 'react'
import '../styles/box.css'
import { Col, Row } from './Layout'
import { Icon, Img } from './ImageCp'
import { SvgArrow } from '../assets/svg'
import { motion } from 'framer-motion'

const Box = forwardRef(({
    bgColor,
    hoverColor = 'var(--color-primitives-gray-60)',
    children,
    contentColor,
    minWidth,
    maxHeight,
    onClick,
    hasHover },
    ref) => {

    const styleBox = () => {
        return {
            maxHeight: `${maxHeight}px`,
            minWidth: `${minWidth}px`,
            backgroundColor: bgColor,
            color: `${contentColor}`,
        }
    }

    return (
        <motion.div
            ref={ref}
            onClick={onClick}
            className="box"
            whileHover={hasHover ? {
                zoom: 1.02,
                cursor: 'pointer',
                backgroundColor: hoverColor
            } : null}
            style={styleBox()} >
            {children}
        </motion.div >
    )
})


const VerticalBox = forwardRef(({ hoverColor, img, title, bgColor, maxHeight, minWidth, hasHover, newText }, ref) => {

    const [detailsPage, setDetailsPage] = useState(false)

    return (
        <Box
            hoverColor={hoverColor}
            hasHover={hasHover}
            ref={ref}
            minWidth={minWidth}
            maxHeight={maxHeight}
            bgColor={bgColor}
            onClick={() => setDetailsPage(!detailsPage)}
        >
            {detailsPage ?
                <h1>{newText}</h1>
                :
                <Col alignItems={'flex-end'}>
                    <Icon icon={SvgArrow} />
                    <Img src={img} />
                    <h3>{title}</h3>
                </Col>}

        </Box>

    )
})

const HorizontalBox = forwardRef(({ hoverColor, title, subtitle, bgColor, contentColor, maxHeight, hasHover }, ref) => {
    return (
        <Box
            hoverColor={hoverColor}
            hasHover={hasHover}
            ref={ref}
            maxHeight={maxHeight}
            bgColor={bgColor}
            contentColor={contentColor}
        >
            <Row gap={16}>
                <Col gap={4}>
                    <h3>{title}</h3>
                    <h4>{subtitle}</h4>
                </Col>
                <Icon icon={SvgArrow} />
            </Row>
        </Box>
    )
})

const SquaryBox = forwardRef(({ hoverColor, img, title, bgColor, contentColor, minWidth, height, maxHeight, hasHover }, ref) => {
    return (

        <Box
            hoverColor={hoverColor}
            hasHover={hasHover}
            ref={ref}
            maxHeight={maxHeight}
            height={height}
            minWidth={minWidth}
            bgColor={bgColor}
            contentColor={contentColor}
        >
            <Col>
                <Row justifyContent={'space-between'}>
                    <Img src={img} maxHeight={200} minHeight={100} />
                    <Icon icon={SvgArrow} />
                </Row>
                <h3>{title}</h3>
            </Col>
        </Box>

    )
})

export { Box, SquaryBox, HorizontalBox, VerticalBox }