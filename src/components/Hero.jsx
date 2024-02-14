import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './Button';
import { Box } from './Box';
import { Col } from './Layout';
import { Icon } from './ImageCp';
import { SvgInstagram, SvgStash, SvgTiktok, SvgTwitter } from '../assets/svg';
import '../styles/hero.css';
import Lottie from 'react-lottie';
import animationMember from '../assets/lottie/member.json';

const MotionButton = motion(Button);

const Hero = () => {
    const animationOptions = {
        loop: true,
        autoplay: true,
        animationData: animationMember,
    }
    const heroRef = useRef();
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["0 0", "1 0"] });

    const heightBox = useTransform(scrollYProgress, [0, 1], ['80vh', '70vh']);
    const opacityBox = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const yTitle = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const scaleBox = useTransform(scrollYProgress, [0, 1], [1, .8]);

    const styleBox = { height: heightBox, opacity: opacityBox, scale: scaleBox }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            ref={heroRef}
            style={styleBox}
            className='hero'
        >
            <Box>
                <Col justifyContent={'space-between'} alignItems={'center'}>
                    <motion.h1 initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        style={{ y: yTitle }}
                        className='title'>
                        Beautiful Banking <br />
                        Ugly CASH
                    </motion.h1>
                    <MotionButton
                        initial={{ scale: .8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ ease: 'easeInOut', delay: 0.5, duration: .4 }}
                        text={'Snag the App'}
                    />
                    <motion.img
                        initial={{ y: '10vh', opacity: 0 }}
                        animate={{ y: '5vh', opacity: 1 }}
                        transition={{ delay: .3, duration: 1 }}
                        className='bg-stash' src={SvgStash} alt='stash'
                    />
                    <div className='social-media'>
                        <Icon icon={SvgTiktok} />
                        <Icon icon={SvgTwitter} />
                        <Icon icon={SvgInstagram} />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, rotate: -20, scale: 0.6 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        transition={{ duration: .2, delay: 0.3 }}
                        className='member-tag'
                    >
                        <Lottie options={animationOptions} />
                    </motion.div>
                </Col>
            </Box>
        </motion.div>
    )
}

export { Hero }