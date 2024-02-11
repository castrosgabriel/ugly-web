import React from "react";
import '../styles/grid.css'

const Col = ({ gap, children, alignItems, justifyContent, maxWidth, minWidth, maxHeight, minHeight }) => {
    const styleCol = {
        maxHeight: `${maxHeight}px`,
        minHeight: `${minHeight}px`,
        justifyContent: `${justifyContent}`,
        gap: `${gap}px`,
        alignItems: `${alignItems}`,
        maxWidth: `${maxWidth}px`,
        minWidth: `${minWidth}px`
    }
    return (
        <div className='col' style={styleCol}>
            {children}
        </div>
    )
};

const Row = ({ gap, children, alignItems, justifyContent, maxWidth, minWidth, maxHeight, minHeight }) => {
    const styleRow = {
        maxHeight: `${maxHeight}px`,
        minHeight: `${minHeight}px`,
        justifyContent: `${justifyContent}`,
        gap: `${gap}px`,
        alignItems: `${alignItems}`,
        maxWidth: `${maxWidth}px`,
        minWidth: `${minWidth}px`
    }
    return (
        <div className='row' style={styleRow}>
            {children}
        </div>
    )
};

export { Col, Row }