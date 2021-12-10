import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

import Navibar from '../components/navbar/Navibar'
import Slider from '../components/slider/Slider'

import slider1 from '../img/slider1.jpg';
import slider2 from '../img/slider2.jpg';
import slider3 from '../img/slider3.jpg';
import slider4 from '../img/slider4.jpg';
import slider5 from '../img/slider5.jpg';


function Home() {
    return (
        <div>
            <Container>
            <Row>
            <Col><Navibar/>
            </Col>
            </Row>

            <Row>
            <Col>  <Slider slider1={slider1} slider2={slider2} slider3={slider3} slider4={slider4} slider5={slider5} />
            </Col>
            </Row>
            
            </Container>
        </div>
    )
}

export default Home
