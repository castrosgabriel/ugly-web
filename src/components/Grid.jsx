import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GridBox } from './GridBox';
import { Row, Col } from './Layout';
import { CardMc, Cup, Passport } from '../assets/png'
import { SvgCard } from '../assets/svg'
import LottiePig from '../assets/lottie/pig.json'
import '../styles/grid.css'

const MotionGridBox = motion(GridBox)

const Grid = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1.4", "0 0.2"]
    });

    const setMotionStyle = (delay) => {
        return {
            scale: useTransform(scrollYProgress, [delay, 1], [.9, 1]),
            opacity: useTransform(scrollYProgress, [delay, 1], [0, 1]),
            y: useTransform(scrollYProgress, [delay, 1], [100, 0]),
        }
    }

    return (
        <motion.div
            initial={{ y: 300 }}
            animate={{ y: 0 }}
            transition={{ duration: .8, delay: .2, ease: 'easeInOut' }}
            ref={ref}
            className='grid'
        >
            <Col minWidth={480}>
                <Row>
                    <MotionGridBox
                        type={'horizontal'}
                        hoverColor={'var(--c-gray-20)'}
                        style={setMotionStyle(0)}
                        title={'US bank account*.'}
                        subtitle={'(FDIC insured up to $250,000)'}
                        bgColor={'var(--c-white-100)'}
                        contentColor={'var(--c-gray-100)'}
                    />
                </Row>
                <Row>
                    <MotionGridBox
                        type={'vertical'}
                        style={setMotionStyle(0.4)}
                        img={CardMc}
                        title={'Mastercard debit for online & app purchases!**'}
                    />
                    <MotionGridBox
                        type={'vertical'}
                        style={setMotionStyle(0.7)}
                        img={Passport}
                        title={'Real Latino flow. Start banking* with your passport.'}
                    />
                </Row>
            </Col>
            <Col minWidth={480}>
                <Row>
                    <MotionGridBox
                        type={'squary'}
                        style={setMotionStyle(0)}
                        hasLottie={true}
                        img={LottiePig}
                        title={`Move money, whether it's next door or abroad to Latin America. Zero Cost. Only with Ugly Cash`}
                        contentColor={'var(--c-text-hl)'}
                    />
                </Row>
                <Row>
                    <MotionGridBox
                        type={'squary'}
                        style={setMotionStyle(0.8)}
                        img={SvgCard}
                        title={'Members in Latin America can get their own card to easily spend what you send.'}
                    />
                    <MotionGridBox
                        type={'squary'}
                        style={setMotionStyle(0.9)}
                        img={Cup}
                        title={'Earn rewards for sending money.'}
                    />
                </Row>
            </Col>
        </motion.div>
    )
}

export { Grid } 
