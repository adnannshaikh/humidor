import React, { useState } from "react";
import { Form, Button, Card, Container, Spinner } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);  // Start loading state

    try {
      await axios.post("/api/auth/signup", { name, email, password });
      navigate("/login");  // Redirect to login after signup
    } catch (err) {
      setLoading(false);  // Stop loading
      // Display specific error messages
      if (err.response && err.response.data) {
        setError(err.response.data.message || "Signup failed");
      } else {
        setError("Signup failed. Please try again later.");
      }
    }
  };

  const handleChange = (e) => {
    // Clear error when user starts typing
    setError("");
    if (e.target.name === "name") setName(e.target.value);
    if (e.target.name === "email") setEmail(e.target.value);
    if (e.target.name === "password") setPassword(e.target.value);
  };

  return (
    <Container className="d-flex vh-100 justify-content-center align-items-center">
      <Card className="p-4 shadow" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">Sign Up for Humidor</h3>
        {error && <div className="alert alert-danger">{error}</div>}
        <Form onSubmit={handleSignup}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter name" 
              value={name} 
              onChange={handleChange} 
              name="name"
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter email" 
              value={email} 
              onChange={handleChange} 
              name="email"
              required 
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={handleChange} 
              name="password"
              required 
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100" disabled={loading}>
            {loading ? <Spinner animation="border" size="sm" /> : "Sign Up"}
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default SignupPage;
