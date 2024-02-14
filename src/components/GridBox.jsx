import React, { useRef, forwardRef, useState, useEffect } from 'react'
import { Col, Row } from './Layout'
import { Img, ArrowIcon } from './ImageCp'
import { Box } from './Box'
import { motion, useInView } from 'framer-motion'

const MotionBox = motion(Box)
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

    const [showDetails, setShowDetails] = useState(false)
    const boxProps = {
        hasHover: true,
        hoverColor: hoverColor,
        ref: ref,
        bgColor: bgColor,
        maxHeight: maxHeight,
        minWidth: minWidth,
        contentColor: contentColor,
        height: height,
        onClick: () => setShowDetails(!showDetails),
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

    const DetailsContent = () => {
        return (
            <Col gap={16} alignItems={'flex-start'}>
                <h3>Details</h3>
                <ul>
                    <li>Details 1</li>
                    <li>Details 2</li>
                    <li>Details 3</li>
                </ul>
            </Col>
        )
    }

    const boxRef = useRef()
    const isInView = useInView(boxRef, { once: true, margin: "0px 0px 0px 0px" });
    const MotionBoxContent = motion(BoxContent)
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
        <MotionBox {...boxProps }>
            {showDetails ?
                <DetailsContent />
                :
                <MotionBoxContent
                    variants={variantsBoxContent}
                    initial='initial'
                    animate='animate'
                    ref={boxRef}
                    contentColor={contentColor} />}
        </MotionBox>
    )
})

export { GridBox }