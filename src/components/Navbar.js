import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './styles/Navbar.css';
import logo from './assets/Miix-black.png';


function Navigation() {
    return (
      <Navbar className="myNavbar" expand="lg">
      <Container>
        <Navbar.Brand href={logo}></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="navItems" href="#home">How it works</Nav.Link>
            <Nav.Link className="navItems" href="#link">Login</Nav.Link>
            <Nav.Link className="navItems" href="#link">Player</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    )
}

export default Navigation;
