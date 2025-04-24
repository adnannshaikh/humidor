import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const AppNavbar = () => {
  return (
    <Navbar
      expand="lg"
      className="shadow-sm mb-0"
      style={{
        backgroundColor: "rgba(0, 0, 128, 0.85)", // Dark blue shade
        position: "sticky", // Make it sticky
        top: 0, // Keep it at the top
        zIndex: 1000, // Ensure it's above other content
      }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-white">Humidor 📈</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="text-white">Home</Nav.Link>
            <Nav.Link as={Link} to="/login" className="text-white">Login</Nav.Link>
            <Nav.Link as={Link} to="/dashboard" className="text-white">Dashboard</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
