import React, { useRef } from 'react';
import { Row } from './Layout';
import { Box } from './Box';
import { Globe } from '../assets/png';
import { motion, useScroll, useTransform, useInView, delay, easeInOut } from 'framer-motion';

const MotionBox = motion(Box)

const WhereBanner = () => {
    const bannerRef = useRef();
    const isInView = useInView(bannerRef, {
        // once: true,
        margin: "0px 100px -50px 0px"
    });
    const { scrollYProgress } = useScroll({
        target: bannerRef,
        offset: ["0 1", "0 0.3"]
    });
    const yBox = useTransform(scrollYProgress, [0, 1], [200, 0]);
    const scaleBox = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
    const opacityBox = useTransform(scrollYProgress, [0, 1], [0, 1]);

    const variantsTitle = (delay) => {
        return {
            initial: { opacity: 0, y: 100 },
            animate: isInView ? {
                opacity: 1,
                y: 0,
                transition: {
                    duration: .8,
                    delay: delay,
                    ease: "easeOut"
                }
            } : null
        }
    }

    return (
        <MotionBox style={{ scale: scaleBox, y: yBox, opacity: opacityBox }} ref={bannerRef}>
            <Row>
                <motion.h2
                    variants={variantsTitle(.3)}
                    initial='initial'
                    animate='animate'
                >
                    WHERE'S <br /> UGLY CASH? <br /> RIGHT WHERE <br /> YOU NEED IT</motion.h2>
                <Row gap={80} justifyContent={'flex-end'}>
                    <motion.h5
                        variants={variantsTitle(.4)}
                        initial='initial'
                        animate='animate'>
                        United States
                    </motion.h5>
                    <motion.h5
                        variants={variantsTitle(.5)}
                        initial='initial'
                        animate='animate'
                    >
                        Argentina<br />
                        Chile<br />
                        Colombia<br />
                        Costa Rica<br />
                        Dominican Republic<br />
                        Ecuador<br />
                        El Salvador<br />
                        Guatemala<br />
                        Honduras<br />
                        Mexico<br />
                        Panama<br />
                        Paraguay<br />
                        Peru<br />
                        Uruguay<br />
                        Venezuela
                    </motion.h5>
                </Row>
            </Row>
            <motion.img
                variants={variantsTitle(.6)}
                initial='initial'
                animate='animate'
                className='globe' src={Globe} />
        </MotionBox>
    )
};

export { WhereBanner }