import React from 'react';
import '../styles/image-wrapper.css';

const Icon = ({ icon }) => {
    const styleIcon = {
        mixBlendMode: 'exclusion'
    }
    return (
        <img className='icon' src={icon} style={styleIcon} />
    )
}

const ArrowIcon = ({ fill }) => {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_8_389)">
                <path fillRule="evenodd" clipRule="evenodd" d="M28.6707 6.39049L2.06124 33L-1 29.9388L25.6095 3.32925L0.53062 3.32925L0.530619 -1L33 -1L33 31.4694L28.6707 31.4694L28.6707 6.39049Z" fill={fill} />
            </g>
            <defs>
                <clipPath id="clip0_8_389">
                    <rect width="32" height="32" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

const Img = ({ src, minWidth, maxWidth, minHeight, maxHeight }) => {
    const styleImg = {
        minWidth: `${minWidth}px`,
        maxWidth: `${maxWidth}px`,
        minHeight: `${minHeight}px`,
        maxHeight: `${maxHeight}px`
    }
    return (
        <div className="img-wrapper" style={styleImg}>
            <img src={src} alt={src} />
        </div>
    )
}

export { Icon, Img, ArrowIcon }