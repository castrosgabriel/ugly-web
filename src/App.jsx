import React, { useEffect } from "react";
import { Grid } from './components/Grid';
import { Box } from './components/Box';
import { Col, Row } from './components/Layout';
import { Button } from './components/Button';
import { Header } from './components/Header';
import SvgStash from './assets/svg/stash.svg'
import { Globe } from './assets/png'
import './App.css';

const App = () => {

  return (
    <div className='page'>
      <div className='page-col'>
        <Header />
        <div className='first'>
          <Box>
            <Col justifyContent={'space-between'} alignItems={'center'}>
              <h1 className='title'>Beautiful Banking <br /> Ugly CASH</h1>
              <Button text={'Snag the App'} />
              <img className='bg-stash' src={SvgStash} alt='stash' />
            </Col>
          </Box>
        </div>
        <Grid />
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
          <img className='globe' src={Globe} alt='stash' />
        </Box>
      </div >
    </div >
  )
}

export default App; 