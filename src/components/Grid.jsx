import React, { useRef } from 'react';
import '../styles/grid.css'
import { GridBox } from './Box';
import { Row, Col } from './Layout';
import { CardMc, Cup, Passport } from '../assets/png'
import { SvgPig, SvgCard } from '../assets/svg'
import { motion, useScroll, useTransform } from 'framer-motion';

const MotionGridBox = motion(GridBox)

const Grid = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "0 0.2"]
    });

    const setMotionStyle = (delay) => {
        return {
            scale: useTransform(scrollYProgress, [delay, 1], [.9, 1]),
            opacity: useTransform(scrollYProgress, [delay, 1], [0, 1]),
            y: useTransform(scrollYProgress, [delay, 1], [100, 0]),
        }
    }

    return (
        <div ref={ref} className='grid'>
            <Col minWidth={400}>
                <MotionGridBox
                    type={'horizontal'}
                    hoverColor={'var(--color-primitives-gray-20)'}
                    hasHover={true}
                    style={setMotionStyle(0)}
                    title={'US bank account*.'}
                    subtitle={'(FDIC insured up to $250,000)'}
                    bgColor={'var(--color-primitives-white-100)'}
                    contentColor={'var(--color-primitives-black-100)'}
                />
                <Row maxHeight={800}>
                    <MotionGridBox
                        type={'vertical'}
                        hasHover={true}
                        style={setMotionStyle(0.4)}
                        img={CardMc}
                        title={'Mastercard debit for online & app purchases!**'}
                        newText={'New Text'}
                    />
                    <MotionGridBox
                        type={'vertical'}
                        hasHover={true}
                        style={setMotionStyle(0.5)}
                        img={Passport}
                        title={'Real Latino flow. Start banking* with your passport.'}
                    />
                </Row>
            </Col>
            <Col minWidth={400}>
                <Row>
                    <MotionGridBox
                        type={'squary'}
                        hasHover={true}
                        style={setMotionStyle(0)}
                        img={SvgPig}
                        title={`Move money, whether it's next door or abroad to Latin America. Zero Cost. Only with Ugly Cash`}
                        contentColor={'var(--color-text-hl)'}
                    />
                </Row>
                <Row maxHeight={500}>
                    <MotionGridBox
                        type={'squary'}
                        hasHover={true}
                        style={setMotionStyle(0.8)}
                        minWidth={140}
                        img={SvgCard}
                        title={'Members in Latin America can get their own card to easily spend what you send.'}
                    />
                    <MotionGridBox
                        type={'squary'}
                        hasHover={true}
                        style={setMotionStyle(0.9)}
                        minWidth={140}
                        img={Cup}
                        title={'Earn rewards for sending money.'}
                        height={100}
                    />
                </Row>
            </Col>
        </div>
    )
}

export { Grid } 
