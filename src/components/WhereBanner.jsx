import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView, delay, easeInOut } from 'framer-motion';
import { Row } from './Layout';
import { Box } from './Box';
import { Globe } from '../assets/png';

const MotionBox = motion(Box)

const WhereBanner = () => {
    const bannerRef = useRef();
    const isInView = useInView(bannerRef, { margin: "0px 100px -50px 0px" });
    const { scrollYProgress } = useScroll({ target: bannerRef, offset: ["0 1", "0 0.3"] });
    const styleBannerBox = {
        y: useTransform(scrollYProgress, [0, 1], [200, 0]),
        scale: useTransform(scrollYProgress, [0, 1], [0.9, 1]),
        opacity: useTransform(scrollYProgress, [0, 1], [0, 1])
    }
    const getContentVariants = (delay) => {
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
        <MotionBox style={styleBannerBox} ref={bannerRef}>
            <Row>
                <motion.h2
                    variants={getContentVariants(.3)}
                    initial='initial'
                    animate='animate'
                >
                    WHERE'S <br /> UGLY CASH? <br /> RIGHT WHERE <br /> YOU NEED IT</motion.h2>
                <Row gap={80} justifyContent={'flex-end'}>
                    <motion.h5
                        variants={getContentVariants(.4)}
                        initial='initial'
                        animate='animate'>
                        United States
                    </motion.h5>
                    <motion.h5
                        variants={getContentVariants(.5)}
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
                variants={getContentVariants(.6)}
                initial='initial'
                animate='animate'
                className='globe' src={Globe} />
        </MotionBox>
    )
};

export { WhereBanner }