import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import logo from '../assets/logo.png';
import './navBar.css';
function navBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* Navbar.Brand centered */}
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" style={{ width: '60px', height: 'auto' }} />
         
        </Navbar.Brand>

        {/* Toggle button for mobile screens */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Centered Nav items */}
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home </Nav.Link>
            <Nav.Link href="#about">About </Nav.Link>
            <Nav.Link href="#services"> Services </Nav.Link>
            <Nav.Link href="#contact"> Contact </Nav.Link>
            
          </Nav>

          {/* Independent Buttons (FAQ & Get Quotes) aligned right on larger screens */}
          <Nav className="ms-auto">
            <Nav.Link href="#faq">
            <Button variant="" className="ms-2 border-transparent text-black">
              FAQ
            </Button>
          </Nav.Link>

                    
          <Nav.Link href="#getQuotes">
            <Button className="get-quotes-button ms-2">
              Get Quotes
            </Button>
          </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navBar;
