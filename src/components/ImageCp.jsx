import React from 'react';
import '../styles/wrapper.css';

const Icon = ({ icon }) => {
    const styleIcon = {
        mixBlendMode: 'exclusion'
    }
    return (
        <img className='icon' src={icon} style={styleIcon} />
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

export { Icon, Img }