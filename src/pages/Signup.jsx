import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Register from "../components/forms/Register";

import Navibar from "../components/navbar/Navibar";


function Signup() {
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
          <Register/>
        </Col>
      </Row>
   
      </Container>
    </div>
  );
}

export default Signup;
