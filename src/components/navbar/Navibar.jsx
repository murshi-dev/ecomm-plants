import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
function Navibar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">ZenZone</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="#home">
              {" "}
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link href="#products">
              {" "}
              <Link
                to="/products"
                style={{ textDecoration: "none", color: "white" }}
              >
                Products
              </Link>
            </Nav.Link>
           
            <Nav.Link href="#blog">
              {" "}
              <Link
                to="/blog"
                style={{ textDecoration: "none", color: "white" }}
              >
                Blog
              </Link>
            </Nav.Link>
            <Nav.Link href="#contactus">
              {" "}
              <Link
                to="/contactus"
                style={{ textDecoration: "none", color: "white" }}
              >
                Contact Us
              </Link>
            </Nav.Link>
            <Nav.Link href="#signup">
            {" "}
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "white" }}
            >
              Sign Up
            </Link>
          </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navibar;
