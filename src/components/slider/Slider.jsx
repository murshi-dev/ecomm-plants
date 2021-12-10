import React from 'react'
import {Carousel} from 'react-bootstrap'
function Slider(props) {
    return (
        <div>
        <Carousel>
        <Carousel.Item>
        <img style={{height:'100vh',width:'100%'}} 
            className="d-block w-100"
            src={props.slider1}
            alt="First slide"
          />
          <Carousel.Caption style={{'height':"350px"}} >
            <h2>First slide label</h2>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img style={{height:'100vh',width:'100%'}} 
            className="d-block w-100"
            src={props.slider2}
            alt="Second slide"
          />
      
          <Carousel.Caption style={{'height':"350px"}} >
          <h2>Second slide label</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img style={{height:'100vh',width:'100%'}} 
            className="d-block w-100"
            src={props.slider3}
            alt="Third slide"
          />
      
          <Carousel.Caption style={{'height':"350px"}} >
          <h2>Third slide label</h2>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img style={{height:'100vh',width:'100%'}} 
            className="d-block w-100"
            src={props.slider4}
            alt="First slide"
          />
          <Carousel.Caption style={{'height':"350px"}} >
          <h2>Fourth slide label</h2>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img style={{height:'100vh',width:'100%'}} 
            className="d-block w-100"
            src={props.slider5}
            alt="First slide"
          />
          <Carousel.Caption style={{'height':"350px"}} >
          <h2>Fifth slide label</h2>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </div>
    )
}

export default Slider
