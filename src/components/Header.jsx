import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import logo from "/logo_round.png";
import useScrollDirection from '../hooks/useScrollDirection';

import "./header.css";

function Header({ activeKey }) {
  const scrollDirection = useScrollDirection();
  const handleSelect = (eventKey) => setActiveKey(eventKey);

  return (
    <Navbar expand="lg" variant="dark" sticky="top" className={`navbar-auto-hide ${scrollDirection === 'down' ? 'hide' : 'show'}`}>
      <Container>
        <img
            src={logo} 
            className="navbar-logo d-inline-block align-top me-1"
            alt="Salem DSA logo"
          />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse">
          <Nav className="ms-auto" activeKey={activeKey} onSelect={handleSelect}>
            <Nav.Link eventKey="#preamble" href="#preamble">Platform</Nav.Link>
            <Nav.Link eventKey="#social_housing" href="#social_housing">Social Housing</Nav.Link>
            <Nav.Link eventKey="#free_buses" href="#free_buses">Free Buses</Nav.Link>
            <Nav.Link eventKey="#abolish_ICE" href="#abolish_ICE">Abolish ICE</Nav.Link>
            <Nav.Link eventKey="#tax_the_rich" href="#tax_the_rich">Tax the Rich</Nav.Link>
            <Nav.Link href="#get_involved">Get Involved!</Nav.Link>
            <NavDropdown title="Sponsors" id="basic-nav-dropdown" className="navbar-dropdown">
              <NavDropdown.Item href="#Sponsors/1.1" className="navbar-dropdown">
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