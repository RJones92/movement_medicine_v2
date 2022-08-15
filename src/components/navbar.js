import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavigationBar() {
  return (
    <Navbar expand='md' bg='light' sticky='top'>
      <Container>
        <Navbar.Brand href='/index#home'>Pallister Road Clinic</Navbar.Brand>
        <Navbar.Toggle aria-controls='navbar-nav' />
        <Navbar.Collapse id='navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Item>
              <Nav.Link href='/#home'>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/#about'>About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/#services'>Services</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/#location'>Find Us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/#book'>Contact Us</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
