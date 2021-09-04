import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';

const NavMenu = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/home"}>Order</Nav.Link>
            <Nav.Link as={Link} to={"/admin"}>Admin</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavMenu;