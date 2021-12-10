import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Navibar from "../components/navbar/Navibar";
import Contact from "../components/forms/Contact";
import InfoContact from "../components/forms/InfoContact";

function Contactus() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Navibar />
          </Col>
        </Row>

        <Row>
        <Col><InfoContact/> </Col>
          <Col><Contact/></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contactus;
