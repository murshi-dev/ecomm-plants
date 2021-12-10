import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Navibar from "../components/navbar/Navibar";
import Custreview from "../components/blogcontents/Custreview";
import FAQs from "../components/blogcontents/FAQs";

function Blog() {
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
            <Custreview />
          </Col>
        </Row>

        <Row>
          <Col>
            <FAQs/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Blog;
