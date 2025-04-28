import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Container className="text-center py-5">
      <h1>404 🚫</h1>
      <p>Oops! The page you're looking for does not exist.</p>
      <Button variant="primary" onClick={() => navigate("/")}>
        Go Home
      </Button>
    </Container>
  );
};

export default NotFoundPage;
