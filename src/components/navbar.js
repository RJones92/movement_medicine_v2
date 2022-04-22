import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"

export default function NavigationBar() {
  return (
    <Container>
      <Row className="justify-content-center align-items-center">
        <Col md="8">
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Pallister Road Clinic </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#contact">Contact Us</Nav.Link>
                <Nav.Link href="#services">Services</Nav.Link>
                <Nav.Link href="#location">Find Us</Nav.Link>
                <Nav.Link href="#price">Pricing</Nav.Link>
                <Nav.Link href="#faq">FAQ</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  )
}
