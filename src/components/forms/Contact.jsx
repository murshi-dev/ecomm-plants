import React from "react";

import { Form, Row, Col, Button } from "react-bootstrap";

function Contact() {
  return (
    <div className="mt-5 pt-5">
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter first name" />
          </Form.Group>

          <Form.Group as={Col}>
          Last<Form.Label> Name</Form.Label>
          <Form.Control type="text" placeholder="Enter last name" />
        </Form.Group>
        </Row>

        <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="number" placeholder="Enter phone number" />
        </Form.Group>


 


      </Row>

      <Row>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Example textarea</Form.Label>
      <Form.Control as="textarea" rows={3} />
    </Form.Group>
      </Row>





        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Contact;
