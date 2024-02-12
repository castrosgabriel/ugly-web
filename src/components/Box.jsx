import React, { forwardRef } from 'react'
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
                cursor: 'pointer',
                backgroundColor: hoverColor
            } : null}
            style={styleBox()} >
            {children}
        </motion.div >
    )
})

const GridBox = forwardRef(({ type, img, title, subtitle, contentColor, bgColor, hoverColor, minWidth, height, maxHeight }, ref) => {
    const renderContent = () => {

        const boxProps = {
            hoverColor: hoverColor,
            hasHover: true,
            ref: ref,
            bgColor: bgColor,
            maxHeight: maxHeight,
            minWidth: minWidth,
            contentColor: contentColor,
            height: height
        }

        switch (type) {
            case 'vertical':
                return (
                    <Box {...boxProps}>

                        <Col alignItems={'flex-end'}>
                            <Icon icon={SvgArrow} />
                            <Img src={img} />
                            <h3>{title}</h3>
                        </Col>
                    </Box>
                );
            case 'horizontal':
                return (
                    <Box {...boxProps} >
                        <Row gap={16}>
                            <Col gap={4}>
                                <h3>{title}</h3>
                                <h4>{subtitle}</h4>
                            </Col>
                            <Icon icon={SvgArrow} />
                        </Row>
                    </Box>
                );
            case 'squary':
                return (
                    <Box {...boxProps}>
                        <Col>
                            <Row justifyContent={'space-between'}>
                                <Img src={img} maxHeight={200} minHeight={100} />
                                <Icon icon={SvgArrow} />
                            </Row>
                            <h3>{title}</h3>
                        </Col>
                    </Box>
                );
            default:
                return null;
        }
    };

    return renderContent()
})

export { Box, GridBox }