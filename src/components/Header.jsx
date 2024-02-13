import React, { forwardRef } from 'react'
import { Row } from './Layout'
import { SvgLogo, SvgLanguage, SvgDollar } from '../assets/svg'
import '../styles/header.css'
import { motion } from 'framer-motion'

const BtnNav = ({ text }) => {
    return (
        <div
            className='btn-nav'>
            <div className='btn-bg' />
            <h5>{text}</h5>
            <img src={SvgDollar} alt="dollar" />
        </div>
    )
}

const MotionRow = motion(Row)

const Header = () => {
    return (
        <header className='header'>
            <MotionRow
                initial={{ opacity: 0, scale: .9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: .3, delay: .2, ease: "easeOut"}}
                maxWidth={1400} justifyContent={'space-between'} alignItems={'center'}>
                <img src={SvgLogo} alt="logo" />
                <div className='btn-container'>
                    <BtnNav text={'Banking'} />
                    <BtnNav text={'Card'} />
                    <BtnNav text={'Send'} />
                    <BtnNav text={'Rewards'} />
                </div>
                <img src={SvgLanguage} />
            </MotionRow>
        </header>
    )
}

export { Header, BtnNav } 