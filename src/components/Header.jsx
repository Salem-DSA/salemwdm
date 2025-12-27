import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import logo from "/logo_round.png";
import useScrollDirection from '../hooks/useScrollDirection';

import "./header.css";

function Header() {
  const scrollDirection = useScrollDirection();

  return (
    <Navbar expand="lg" variant="dark" sticky="top" style={{ backgroundColor: "var(--theme-primary)" }} 
    className={`navbar-auto-hide ${scrollDirection === 'down' ? 'hide' : 'show'}`}>
      <Container>
        <img
            src={logo} 
            className="navbar-logo d-inline-block align-top me-1"
            alt="Salem DSA logo"
          />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#preamble">Platform</Nav.Link>
            <Nav.Link href="#social_housing">Social Housing</Nav.Link>
            <Nav.Link href="#free_buses">Free Buses</Nav.Link>
            <Nav.Link href="#abolish_ICE">Abolish ICE</Nav.Link>
            <Nav.Link href="#tax_the_rich">Tax the Rich</Nav.Link>
            <Nav.Link href="#get_involved">Get Involved!</Nav.Link>
            <NavDropdown title="Sponsors" id="basic-nav-dropdown">
              <NavDropdown.Item href="#Sponsors/1.1">
                Salem DSA
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;