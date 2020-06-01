import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav    from 'react-bootstrap/Nav';

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="sm" sticky="top">
      <Navbar.Brand href="#home">
        <img
          src="/icon.png"
          width="60"
          height="60"
          className="d-inline-block align-top"
          alt="Travers Engineering Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
