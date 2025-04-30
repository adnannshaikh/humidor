import React from "react";
import { Container, Button, Row, Col, Carousel, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import backgroundImage from "../assets/background.png";

const sectorStocks = {
  Banking: ["HDFCBANK", "ICICIBANK", "SBIN"],
  IT: ["INFY", "TCS", "WIPRO"],
  Auto: ["TATAMOTORS", "EICHERMOT", "BAJAJ-AUTO"],
};

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

      {/* 🔥 Sector Stocks Carousel */}
      <Container className="my-5 text-white text-center stock-card p-3 shadow-sm" style={{ backgroundColor: "rgba(0, 156, 70, 0.94)" }}>
        <h2 className="text-center mb-4">Explore Sector-Wise Stocks</h2>
        <Carousel interval={null} indicators={true}>
          {Object.entries(sectorStocks).map(([sector, stocks], idx) => (
            <Carousel.Item key={idx}>
              <h4 className="text-center mb-3">🔹 {sector} Sector</h4>
              <Row className="justify-content-center">
                {stocks.map((stock, i) => (
                  <Col key={i} md={3} className="mb-3">
                    <Link to={`/stock/${stock}.BSE`} style={{ textDecoration: "none" }}>
                      <Card className="p-3 shadow-sm text-center h-100 hoverable">
                        <Card.Body>
                          <Card.Title>{stock}</Card.Title>
                          <Card.Text>Symbol: {stock}.BSE</Card.Text>
                          <Card.Text>Price: ₹--</Card.Text>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

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
