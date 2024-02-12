import React, { useRef } from 'react';
import { Button } from './Button';
import { Box } from './Box';
import { Col } from './Layout';
import { SvgStash } from '../assets/svg';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const heroRef = useRef();
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["0 0", "1 0"]
    });
    const heightBox = useTransform(scrollYProgress, [0, 1], ['80vh', '70vh']);
    const opacityBox = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const yTitle = useTransform(scrollYProgress, [0, 1], [0, -400]);
    const styleBox = {
        height: heightBox, 
        opacity: opacityBox
    }

    return (
        <motion.div
            ref={heroRef}
            style={styleBox}
        >
            <Box>
                <Col justifyContent={'space-between'} alignItems={'center'}>
                    <motion.h1 style={{y: yTitle}}className='title'>Beautiful Banking <br /> Ugly CASH</motion.h1>
                    <Button text={'Snag the App'} />
                    <img className='bg-stash' src={SvgStash} alt='stash' />
                </Col>
            </Box>
        </motion.div>
    )
}

export { Hero }