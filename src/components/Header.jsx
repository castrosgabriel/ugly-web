import React, { forwardRef } from 'react'
import { Row } from './Layout'
import { SvgLogo, SvgLanguage, SvgDollar } from '../assets/svg'
import '../styles/header.css'

const BtnNav = ({ text }) => {
    return (
        <div className='btn-nav'>
            <h5>{text}</h5>
            <img src={SvgDollar} alt="dollar" />
        </div>
    )
}

const Header = () => {
    return (
        <header className='header'>
            <Row maxWidth={1400} justifyContent={'space-between'} alignItems={'center'}>
                <img src={SvgLogo} alt="logo" />
                <div className='btn-container'>
                    <BtnNav text={'Banking'} />
                    <BtnNav text={'Card'} />
                    <BtnNav text={'Send'} />
                    <BtnNav text={'Rewards'} />
                </div>
                <img src={SvgLanguage} />
            </Row>
        </header>
    )
}

export { Header } 