import '../styles/box.css'
import { Col, Row } from './Layout'
import { Icon, Img } from './ImageCp'

import { SvgArrow } from '../assets/svg'

const Box = ({ bgColor, children, contentColor, minWidth, maxHeight, delay, animationScroll }) => {

    const styleBox = {
        animationPlayState: `${animationScroll ? 'paused' : 'running'}`,
        animationDelay: `${delay}s`,
        maxHeight: `${maxHeight}px`,
        minWidth: `${minWidth}px`,
        backgroundColor: `${bgColor}`,
        color: `${contentColor}`,
    }

    return (
        <>
            <div className="box" style={styleBox}>
                {children}
            </div >
        </>
    )
}

const VerticalBox = ({ img, title, bgColor, maxHeight, minWidth, delay, animationScroll }) => {

    return (
        <Box
            animationScroll={animationScroll}
            delay={delay}
            minWidth={minWidth}
            maxHeight={maxHeight}
            bgColor={bgColor}
        >
            <Col alignItems={'flex-end'}>
                <Icon icon={SvgArrow} />
                <Img src={img} />
                <h3>{title}</h3>
            </Col>
        </Box>
    )
}

const HorizontalBox = ({ title, subtitle, bgColor, contentColor, maxHeight, delay, animationScroll }) => {
    return (
        <Box
            animationScroll={animationScroll}
            delay={delay}
            maxHeight={maxHeight}
            bgColor={bgColor}
            contentColor={contentColor}
        >
            <Row gap={16}>
                <Col gap={4}>
                    <h3>{title}</h3>
                    <h4>{subtitle}</h4>
                </Col>
                <Icon icon={SvgArrow} />
            </Row>
        </Box>
    )
}

const SquaryBox = ({ img, title, bgColor, contentColor, minWidth, height, maxHeight, delay, animationScroll }) => {
    return (

        <Box
            animationScroll={animationScroll}
            delay={delay}
            maxHeight={maxHeight}
            height={height}
            minWidth={minWidth}
            bgColor={bgColor}
            contentColor={contentColor}
        >
            <Col>
                <Row justifyContent={'space-between'}>
                    <Img src={img} maxHeight={200} minHeight={100} />
                    <Icon icon={SvgArrow} />
                </Row>
                <h3>{title}</h3>
            </Col>
        </Box>

    )
}

export { Box, SquaryBox, HorizontalBox, VerticalBox }