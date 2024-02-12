import React from "react";
import { Row } from './Layout';
import { Box } from './Box';
import { Globe } from '../assets/png';

const WhereBanner = () => {
    return (
        <Box>
            <Row>
                <h2>WHERE’S <br /> UGLY CASH? <br /> RIGHT WHERE <br /> YOU NEED IT</h2>
                <Row gap={80} justifyContent={'flex-end'}>
                    <h5>United States</h5>
                    <h5>
                        Argentina<br />
                        Chile<br />
                        Colombia<br />
                        Costa Rica<br />
                        Dominican Republic<br />
                        Ecuador<br />
                        El Salvador<br />
                        Guatemala<br />
                        Honduras<br />
                        Mexico<br />
                        Panama<br />
                        Paraguay<br />
                        Peru<br />
                        Uruguay<br />
                        Venezuela
                    </h5>
                </Row>
            </Row>
            <img className='globe' src={Globe} />
        </Box>
    )
};

export { WhereBanner }
