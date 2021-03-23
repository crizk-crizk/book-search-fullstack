import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const BookNav = () => {
  return (
    <Navbar bg="light" expand="sm">
      <Navbar.Brand href="#home">Book Search</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/saved">Saved Books</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/">Search Books</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default BookNav;
