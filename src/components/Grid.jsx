import React, { useRef } from 'react';
import '../styles/grid.css'
import { VerticalBox, HorizontalBox, SquaryBox } from './Box';
import { Row, Col } from './Layout';
import { CardMc, Cup, Passport } from '../assets/png'
import { SvgPig, SvgCard } from '../assets/svg'
import { delay, motion, useScroll, useTransform } from 'framer-motion';

const MotionVerticalBox = motion(VerticalBox)
const MotionHorizontalBox = motion(HorizontalBox)
const MotionSquaryBox = motion(SquaryBox)

const Grid = () => {

    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0.1 1", "0 0.6"]
    });
    const y = useTransform( scrollYProgress, [0, 1], [100, 0] )
    const style = {
        opacity: scrollYProgress,
        y: y,
    }

    return (
        <div ref={ref} className='grid'>
            <Col minWidth={400}>
                <MotionHorizontalBox
                    style={style}
                    title={'US bank account*.'}
                    subtitle={'(FDIC insured up to $250,000)'}
                    bgColor={'var(--color-primitives-white-100)'}
                    contentColor={'var(--color-primitives-black-100)'}
                />
                <Row maxHeight={800}>
                    <MotionVerticalBox
                        style={style}
                        img={CardMc}
                        title={'Mastercard debit for online & app purchases!**'}
                    />
                    <MotionVerticalBox
                        style={style}
                        img={Passport}
                        title={'Real Latino flow. Start banking* with your passport.'}
                    />
                </Row>
            </Col>
            <Col minWidth={400}>
                <MotionSquaryBox
                    style={style}
                    img={SvgPig}
                    title={`Move money, whether it's next door or abroad to Latin America. Zero Cost. Only with Ugly Cash`}
                    contentColor={'var(--color-text-hl)'}
                />
                <Row maxHeight={500}>
                    <MotionSquaryBox
                        style={style}
                        minWidth={140}
                        img={SvgCard}
                        title={'Members in Latin America can get their own card to easily spend what you send.'}
                    />
                    <MotionSquaryBox
                        style={style}
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
