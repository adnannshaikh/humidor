import React from "react";
import { Navbar, Nav, Container, Button, Dropdown, DropdownButton } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const AppNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear(); // Clear all localStorage (token, username, userId)
    navigate("/login"); // Redirect to login page
  };

  const isLoggedIn = localStorage.getItem("token");

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm mb-4 sticky-top">
      <Container>
        <Navbar.Brand as={Link} to="/">Humidor 📈</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>

            {isLoggedIn ? (
              <>
                <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                <Button variant="outline-light" onClick={handleLogout} className="ms-2">
                  Logout
                </Button>
              </>
            ) : (
              <DropdownButton variant="outline-light" id="auth-dropdown" title="Login/Signup" className="ms-2">
                <Dropdown.Item as={Link} to="/login">Login</Dropdown.Item>
                <Dropdown.Item as={Link} to="/signup">Signup</Dropdown.Item>
              </DropdownButton>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
