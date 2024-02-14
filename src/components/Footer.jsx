import React, { useRef } from 'react';
import { Col, Row } from './Layout';
import { Box } from './Box';
import { BtnNav } from './Header';
import { SvgTiktok, SvgTwitter, SvgInstagram, SvgStashFooter, SvgByBff } from '../assets/svg';
import { motion, useScroll, useTransform } from 'framer-motion';

const MotionBox = motion(Box)
const Footer = () => {
    const footerRef = useRef();
    const { scrollYProgress } = useScroll({
        target: footerRef,
        offset: ["0 1", "1 1"]
    });
    const scaleFooter = useTransform(scrollYProgress, [0, 1], [.9, 1]);
    const opacityFooter = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const styleFooter = { scale: scaleFooter, opacity: opacityFooter }

    return (
        <footer ref={footerRef}>
            <MotionBox style={styleFooter} >
                <Row justifyContent={'space-between'}>
                    <Col flex={2}>
                        <Row gap={0} alignItems={'center'}>
                            <img src={SvgStashFooter} alt='Ugly Cash' />
                            <img src={SvgByBff} alt='Best Friend Finance' />
                        </Row>
                        <p className='legal-text' >
                            *Ugly Cash is a financial technology company, not a bank.
                            Banking services provided by Bangor Savings Bank, Member FDIC.
                            **The Ugly Cash Mastercard® Debit Card is issued by Bangor Savings
                            Bank pursuant to license by Mastercard International Incorporated.
                            Mastercard is a registered trademark, and the circle design is a
                            trademark of Mastercard International Incorporated.
                            Spend anywhere Mastercard is accepted.

                            1International card issuing partner will be announced soon.
                            Any other brands mentioned in the announcement are not part of
                            the international card program.Best Friend Finance, LLC.
                        </p>
                    </Col>
                    <Col gap={56} justifyContent={'space-between'}>
                        <Row gap={56} justifyContent={'flex-end'}>
                            <Col gap={4}>
                                <BtnNav text={'Banking'} />
                                <BtnNav text={'Card'} />
                                <BtnNav text={'Send'} />
                                <BtnNav text={'Rewards'} />
                            </Col>
                            <Col gap={4}>
                                <h4>Contact Us</h4>
                                <p> support@ugly.cash</p>
                            </Col>
                        </Row>
                        <Row gap={56} justifyContent={'flex-end'}>
                            <Col gap={4}>
                                <p>Terms and conditions</p>
                                <p>Privacy Policy</p>
                                <p>FAQs</p>
                            </Col>
                            <Row>
                                <img src={SvgTiktok} alt='Tiktok' />
                                <img src={SvgTwitter} alt='Twitter' />
                                <img src={SvgInstagram} alt='Instagram' />
                            </Row>
                        </Row>
                    </Col>
                </Row>
            </MotionBox>
        </footer>
    );
}

export { Footer }