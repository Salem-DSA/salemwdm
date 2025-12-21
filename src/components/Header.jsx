import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import logo from "/salem_dsa_logo.jpg"

function Header() {
  return (
    <Navbar expand="lg" bg="danger" variant="dark" sticky="top">
      <Container>
        <img
            src={logo} 
            width="30"
            height="30"
            className="d-inline-block align-top me-1"
            alt="Salem DSA logo"
          />
        <Navbar.Brand href="#preamble" className="me-auto">Salem Workers Deserve More</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#preamble">Preamble</Nav.Link>
            <Nav.Link href="#housing_for_all">Housing For All</Nav.Link>
            <Nav.Link href="#fast_and_free_buses">Fast and Free Buses</Nav.Link>
            <Nav.Link href="#abolish_ice">Abolish ICE</Nav.Link>
            <Nav.Link href="#tax_the_rich">Tax the Rich!</Nav.Link>
            <Nav.Link href="#calls_to_action">Calls to Action</Nav.Link>
            <NavDropdown title="Organizations and Candidates" id="basic-nav-dropdown">
              <NavDropdown.Item href="#orgs_and_candidates/1.1">Organizations</NavDropdown.Item>
              <NavDropdown.Item href="#orgs_and_candidates/1.2">
                Org 1
              </NavDropdown.Item>
              <NavDropdown.Item href="#orgs_and_candidates/1.3">Org 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#orgs_and_candidates/2.1">Candidates</NavDropdown.Item>
              <NavDropdown.Item href="#orgs_and_candidates/2.2">
                Candidate 1
              </NavDropdown.Item>

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;