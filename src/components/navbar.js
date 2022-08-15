import { Link } from 'gatsby';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavigationBar() {
  return (
    <Navbar expand='md' bg='light' sticky='top'>
      <Container>
        <Navbar.Brand href='/'>Pallister Road Clinic</Navbar.Brand>
        <Navbar.Toggle aria-controls='navbar-nav' />
        <Navbar.Collapse id='navbar-nav'>
          <Nav className='ms-auto' as='ul'>
            <Nav.Item as='li' eventKey='/#home'>
              <Link
                to='/#home'
                key='home'
                className='nav-link'
                activeClassName='active'
              >
                Home
              </Link>
            </Nav.Item>
            <Nav.Item as='li' eventKey='/#about'>
              <Link
                to='/#about'
                key='about'
                className='nav-link'
                activeClassName='active'
              >
                About
              </Link>
            </Nav.Item>
            <Nav.Item as='li' eventKey='/#services'>
              <Link
                to='/#services'
                key='services'
                className='nav-link'
                activeClassName='active'
              >
                Services
              </Link>
            </Nav.Item>
            <Nav.Item as='li' eventKey='/#location'>
              <Link
                to='/#location'
                key='location'
                className='nav-link'
                activeClassName='active'
              >
                Find Us
              </Link>
            </Nav.Item>
            <Nav.Item as='li' eventKey='/#book'>
              <Link
                to='/#book'
                key='book'
                className='nav-link'
                activeClassName='active'
              >
                Contact Us
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
