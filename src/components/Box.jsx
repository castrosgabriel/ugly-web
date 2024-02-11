import React, { forwardRef } from 'react'
import '../styles/box.css'
import { Col, Row } from './Layout'
import { Icon, Img } from './ImageCp'
import { SvgArrow } from '../assets/svg'
import { motion } from 'framer-motion'


const Box = forwardRef(({ bgColor, children, contentColor, minWidth, maxHeight }, ref) => {
    const styleBox = {
        maxHeight: `${maxHeight}px`,
        minWidth: `${minWidth}px`,
        backgroundColor: `${bgColor}`,
        color: `${contentColor}`,
    }
    return (
        <div ref={ref} className="box" style={styleBox}>
            {children}
        </div >
    )
})


const VerticalBox = forwardRef(({ img, title, bgColor, maxHeight, minWidth }, ref) => {

    return (
        <Box
            ref={ref}
            minWidth={minWidth}
            maxHeight={maxHeight}
            bgColor={bgColor}
        >
            <Col alignItems={'flex-end'}>
                <Icon icon={SvgArrow} />
                <Img src={img} />
                <h3>{title}</h3>
            </Col>
        </Box>

    )
})

const HorizontalBox = forwardRef(({ title, subtitle, bgColor, contentColor, maxHeight }, ref) => {
    return (
        <Box
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

const SquaryBox = forwardRef(({ img, title, bgColor, contentColor, minWidth, height, maxHeight }, ref) => {
    return (

        <Box
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