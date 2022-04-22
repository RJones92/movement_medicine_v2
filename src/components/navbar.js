import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"

export default function NavigationBar() {
  return (
    <Row className='bg-light'>
      <Col>
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col md="8">
              <Navbar expand="lg">
                <Navbar.Brand href="#home">Pallister Road Clinic </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#services">Services</Nav.Link>
                    <Nav.Link href="#location">Contact</Nav.Link>
                    <Nav.Link href="#book">Book Now</Nav.Link>
                    <Nav.Link href="#faq">FAQ</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
    
  )
}
