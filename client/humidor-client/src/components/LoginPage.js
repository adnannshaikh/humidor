import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Card, Container } from "react-bootstrap";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/auth/login", {
        email,
        password,
      });
  
      localStorage.setItem("token", data.token); // Save token
      localStorage.setItem("username", data.user.name); // Save username
      localStorage.setItem("userId", data.user._id); // 💥 Save userId (important!)
      
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid email or password");
    }
  };
  

  return (
    <Container className="d-flex vh-100 justify-content-center align-items-center">
      <Card className="p-4 shadow" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">Login to Humidor</h3>
        {error && <div className="alert alert-danger">{error}</div>}
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Login
          </Button>
          <p className="mt-3 text-center">
            Don’t have an account? <a href="/signup">Sign up here</a>
          </p>

        </Form>
      </Card>
    </Container>
  );
};

export default LoginPage;
