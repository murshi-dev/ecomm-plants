import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../components/card/ProductCard";


import Navibar from "../components/navbar/Navibar";

import card1 from "../img/card1.jpg";
import card2 from "../img/card2.jpg";
import card3 from "../img/card3.jpg";
import card4 from "../img/card4.jpg";
import card5 from "../img/card5.jpg";
import card6 from "../img/card6.jpg";



function Products() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Navibar />
          </Col>
        </Row>



        <Row>
          <Col>
            {" "}
            <ProductCard card={card1} />
          </Col>
          <Col>
            {" "}
            <ProductCard card={card2} />
          </Col>
          <Col>
            {" "}
            <ProductCard card={card3} />
          </Col>
        </Row>

        <Row>
          <Col>
            {" "}
            <ProductCard card={card4} />
          </Col>
          <Col>
            {" "}
            <ProductCard card={card5} />
          </Col>
          <Col>
            {" "}
            <ProductCard card={card6} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Products;
