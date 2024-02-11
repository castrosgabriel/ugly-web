import React from 'react';
import '../styles/grid.css'
import { VerticalBox, HorizontalBox, SquaryBox } from './Box';
import { Row, Col } from './Layout';
import { CardMc, Cup, Passport } from '../assets/png'
import { SvgPig, SvgCard } from '../assets/svg'

const Grid = () => {
    return (
        <div className='grid'>
            <Col minWidth={400}>
                <HorizontalBox
                    title={'US bank account*.'}
                    subtitle={'(FDIC insured up to $250,000)'}
                    bgColor={'var(--color-primitives-white-100)'}
                    contentColor={'var(--color-primitives-black-100)'}
                />
                <Row maxHeight={800}>
                    <VerticalBox
                        img={CardMc}
                        title={'Mastercard debit for online & app purchases!**'}
                    />
                    <VerticalBox
                        img={Passport}
                        title={'Real Latino flow. Start banking* with your passport.'}
                    />
                </Row>
            </Col>
            <Col minWidth={400}>
                <SquaryBox
                    img={SvgPig}
                    title={`Move money, whether it's next door or abroad to Latin America. Zero Cost. Only with Ugly Cash`}
                    contentColor={'var(--color-text-hl)'}
                />
                <Row maxHeight={500}>
                    <SquaryBox
                        minWidth={140}
                        img={SvgCard}
                        title={'Members in Latin America can get their own card to easily spend what you send.'}
                    />
                    <SquaryBox
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