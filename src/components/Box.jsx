import React, { forwardRef, useRef } from 'react'
import '../styles/box.css'
import { Col, Row } from './Layout'
import { Icon, Img, ArrowIcon } from './ImageCp'
import { SvgArrow } from '../assets/svg'
import { motion, useInView } from 'framer-motion'

const Box = forwardRef(({
    bgColor,
    hoverColor = 'var(--c-gray-60)',
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


const GridBox = forwardRef(({
    type,
    img,
    title,
    subtitle,
    contentColor,
    bgColor,
    hoverColor,
    minWidth,
    height,
    maxHeight },
    ref) => {

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

    const BoxContent = forwardRef(({ contentColor = 'var(--c-text)' }, ref) => {
        switch (type) {
            case 'vertical':
                return (
                    <Col ref={ref} alignItems={'flex-end'}>
                        <ArrowIcon fill={contentColor} />
                        <Img src={img} />
                        <h3>{title}</h3>
                    </Col>
                );
            case 'horizontal':
                return (
                    <Row ref={ref} gap={16}>
                        <Col gap={4}>
                            <h3>{title}</h3>
                            <h4>{subtitle}</h4>
                        </Col>
                        <ArrowIcon fill={contentColor} />
                    </Row>
                );
            case 'squary':
                return (
                    <Col ref={ref}>
                        <Row justifyContent={'space-between'}>
                            <Img src={img} maxHeight={200} minHeight={100} />
                            <ArrowIcon fill={contentColor} />
                        </Row>
                        <h3>{title}</h3>
                    </Col>
                );
            default:
                return null;
        }
    });

    const MotionBoxContent = motion(BoxContent)
    const boxRef = useRef()
    const isInView = useInView(boxRef, {
        once: true,
        margin: "0px 0px 0px 0px"
    });
    const variantsBoxContent = {
        initial: {
            opacity: 0,
            scale: 0.95
        },
        animate: isInView ? {
            opacity: 1,
            scale: 1,
            transition: {
                delay: .2,
                duration: .8,
                ease: 'easeOut'
            }
        } : null,
    }


    return (
        <Box {...boxProps}>
            <MotionBoxContent
                variants={variantsBoxContent}
                initial='initial'
                animate='animate'
                ref={boxRef}
                contentColor={contentColor} />
        </Box>

    )

})

export { Box, GridBox }