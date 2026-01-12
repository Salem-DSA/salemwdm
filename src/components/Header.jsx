import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import logo from "/logo_round.png";
import useScrollDirection from '../hooks/useScrollDirection';

import "./header.css";

function Header({ activeKey }) {
  const scrollDirection = useScrollDirection();
  const handleSelect = (eventKey) => setActiveKey(eventKey);
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" expanded={expanded} variant="dark" sticky="top" className={`navbar-auto-hide ${scrollDirection === 'down' ? 'hide' : 'show'}`}>
      <Container>
        <img
            src={logo} 
            className="navbar-logo d-inline-block align-top me-1"
            alt="Salem DSA logo"
          />
        <Navbar.Toggle aria-controls="navbar-collapse" onClick={() => setExpanded(!expanded)}/>
        <Navbar.Collapse className="navbar-collapse">
          <Nav className="ms-auto" activeKey={activeKey} onSelect={handleSelect}>
            <Nav.Link eventKey="#preamble" href="#preamble" onClick={() => setExpanded(false)}>Platform</Nav.Link>
            <Nav.Link eventKey="#social_housing" href="#social_housing" onClick={() => setExpanded(false)}>Social Housing</Nav.Link>
            <Nav.Link eventKey="#free_buses" href="#free_buses" onClick={() => setExpanded(false)}>Free Buses</Nav.Link>
            <Nav.Link eventKey="#abolish_ICE" href="#abolish_ICE" onClick={() => setExpanded(false)}>Abolish ICE</Nav.Link>
            <Nav.Link eventKey="#tax_the_rich" href="#tax_the_rich" onClick={() => setExpanded(false)}>Tax the Rich</Nav.Link>
            <Nav.Link eventKey="#get_involved" href="#get_involved" onClick={() => setExpanded(false)}>Get Involved!</Nav.Link>
            <NavDropdown title="Sponsors" menuVariant="dark">
              <NavDropdown.Item eventKey="#Sponsors/1.1" href="#Sponsors/1.1" onClick={() => setExpanded(false)}>
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