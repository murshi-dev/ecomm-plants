import React from "react";
import { Carousel } from "react-bootstrap";

import rv1 from '../../img/rv1.jpg'
import rv2 from '../../img/rv2.jpg'
import rv3 from '../../img/rv3.jpg'

function Custreview() {
  return (
    <div className="mt-5 pt-5">
    <Carousel>
    <Carousel.Item>
      <img height="300px" width="100%"
        className="d-block w-100"
        src={rv1}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img height="300px" width="100%"
        className="d-block w-100"
        src={rv2}
        alt="Second slide"
      />
  
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img height="300px" width="100%"
        className="d-block w-100"
        src={rv3}
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    </div>
  );
}

export default Custreview;
