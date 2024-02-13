import React, { forwardRef } from "react";
import '../styles/grid.css'

const Col = forwardRef(({ gap, children, alignItems, justifyContent, maxWidth, minWidth, maxHeight, minHeight, flex = 1 }, ref) => {
    const styleCol = {
        maxHeight: `${maxHeight}px`,
        minHeight: `${minHeight}px`,
        justifyContent: `${justifyContent}`,
        gap: `${gap}px`,
        alignItems: `${alignItems}`,
        maxWidth: `${maxWidth}px`,
        minWidth: `${minWidth}px`,
        flex: `${flex}`
    }
    return (
        <div ref={ref} className='col' style={styleCol}>
            {children}
        </div>
    )
});

const Row = forwardRef(({ gap, children, alignItems, justifyContent, maxWidth, minWidth, maxHeight, minHeight, flex = 1 }, ref) => {
    const styleRow = {
        maxHeight: `${maxHeight}px`,
        minHeight: `${minHeight}px`,
        justifyContent: `${justifyContent}`,
        gap: `${gap}px`,
        alignItems: `${alignItems}`,
        maxWidth: `${maxWidth}px`,
        minWidth: `${minWidth}px`,
        flex: `${flex}`
    }
    return (
        <div ref={ref} className='row' style={styleRow}>
            {children}
        </div>
    )
});

export { Col, Row }