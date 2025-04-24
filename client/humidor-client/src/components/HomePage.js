import React from "react";
import { Container, Button, Row, Col, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

// Import the background image
import backgroundImage from "../assets/background.png";

const HomePage = () => {
  return (
    <>
      <div
        className="hero-section d-flex align-items-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <Container className="text-center text-white">
          <h1 className="display-4 fw-bold">Welcome to Humidor 📊</h1>
          <p className="lead my-4">
            Your all-in-one platform for Indian stock market tracking, watchlists,
            intelligent ML-based analysis, and personalized recommendations.
          </p>
          <Link to="/login">
            <Button variant="primary" size="lg">
              Get Started
            </Button>
          </Link>
        </Container>
      </div>

      {/* Features Carousel Section */}
      <Container className="my-5 py-5" style={{ backgroundColor: "rgba(0, 0, 128, 0.85)" }}>
        <h2 className="text-center text-white mb-4">Key Features of Humidor</h2>
        <Carousel controls={true} interval={3000} indicators={true}>
          <Carousel.Item>
            <Row className="justify-content-center">
              <Col md={4}>
                <div className="text-center p-3 shadow-sm">
                  <h4 className="text-white">📈 Live Market Data</h4>
                  <p className="text-white">Get real-time Indian stock prices and charts.</p>
                </div>
              </Col>
            </Row>
          </Carousel.Item>

          <Carousel.Item>
            <Row className="justify-content-center">
              <Col md={4}>
                <div className="text-center p-3 shadow-sm">
                  <h4 className="text-white">📋 Custom Watchlists</h4>
                  <p className="text-white">Create and manage multiple watchlists effortlessly.</p>
                </div>
              </Col>
            </Row>
          </Carousel.Item>

          <Carousel.Item>
            <Row className="justify-content-center">
              <Col md={4}>
                <div className="text-center p-3 shadow-sm">
                  <h4 className="text-white">🤖 AI-Powered Suggestions</h4>
                  <p className="text-white">Our ML model gives Buy/Hold/Sell signals and predicts future price trends.</p>
                </div>
              </Col>
            </Row>
          </Carousel.Item>

          <Carousel.Item>
            <Row className="justify-content-center">
              <Col md={4}>
                <div className="text-center p-3 shadow-sm">
                  <h4 className="text-white">📊 Interactive Charts</h4>
                  <p className="text-white">View historical price charts with multiple timeframes.</p>
                </div>
              </Col>
            </Row>
          </Carousel.Item>

          <Carousel.Item>
            <Row className="justify-content-center">
              <Col md={4}>
                <div className="text-center p-3 shadow-sm">
                  <h4 className="text-white">🔒 Secure Login System</h4>
                  <p className="text-white">Keep your data safe with JWT-based authentication.</p>
                </div>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
};

export default HomePage;
