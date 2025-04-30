import React, { useEffect, useState } from "react";
import {
  Container,
  Card,
  Button,
  Row,
  Col,
  Form,
  Toast,
  ToastContainer,
  Spinner,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import stockList from "../dummy/stockList";

const DashboardPage = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const userId = localStorage.getItem("userId");

  const [searchInput, setSearchInput] = useState("");
  const [watchlist, setWatchlist] = useState([]);
  const [toast, setToast] = useState({ show: false, message: "", variant: "" });
  const [loading, setLoading] = useState(true);

  // 🔥 Static hardcoded indexes
  const indexes = [
    { name: "Nifty 50", price: 22350, changePercent: 0.45 },
    { name: "Bank Nifty", price: 47650, changePercent: -0.15 },
  ];

  const fetchWatchlist = async () => {
    try {
      const res = await axios.get(`/api/watchlists/${userId}`);
      if (res.data.length > 0) {
        const allStocks = res.data.flatMap((w) => w.stocks);
        setWatchlist(allStocks);
      } else {
        setWatchlist([]);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching watchlist:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!username) navigate("/login");
    fetchWatchlist();
  }, [navigate, username]);

  const handleSearchAdd = async (e) => {
    e.preventDefault();
    if (!searchInput) return;

    let symbol = searchInput.toUpperCase();
    if (!symbol.includes(".")) {
      symbol += ".BSE"; 
    }

    try {
      const quote = await axios.get(`http://localhost:8000/api/stocks/quote`, {
        params: { symbol },
      });

      let fallback = false;
      if (!quote.data.price || quote.data.Note) {
        fallback = true;
        setToast({ show: true, message: "API limit hit or stock not found! Using fallback price.", variant: "warning" });
      }

      const finalSymbol = fallback ? symbol : quote.data.symbol;
      const finalPrice = fallback ? 1000 : parseFloat(quote.data.price);
      const finalChange = fallback ? 0 : parseFloat(quote.data.change_percent.replace("%", ""));

      const res = await axios.post("/api/watchlists/auto-add", {
        userId,
        stock: {
          symbol: finalSymbol,
          name: finalSymbol,
          price: finalPrice,
          changePercent: finalChange,
        },
      });

      if (res.status === 200) {
        setToast({ show: true, message: "Stock added to Watchlist!", variant: "success" });
        setSearchInput("");
        fetchWatchlist();
      }
    } catch (error) {
      if (error.response?.status === 400) {
        setToast({ show: true, message: error.response.data.message, variant: "danger" });
      } else {
        console.error("Error adding stock:", error);
        setToast({ show: true, message: "Failed to add stock.", variant: "danger" });
      }
    }
  };

  const handleRemoveStock = async (symbol) => {
    try {
      await axios.delete(`/api/watchlists/remove-stock`, {
        data: { userId, symbol },
      });
      setToast({ show: true, message: "Stock removed from Watchlist!", variant: "warning" });
      fetchWatchlist();
    } catch (error) {
      console.error("Error removing stock:", error);
    }
  };

  return (
    <Container className="py-5">
      <ToastContainer position="top-center" className="p-3">
        <Toast
          bg={toast.variant}
          onClose={() => setToast({ show: false, message: "", variant: "" })}
          show={toast.show}
          delay={3000}
          autohide
        >
          <Toast.Body className="text-white">{toast.message}</Toast.Body>
        </Toast>
      </ToastContainer>

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Welcome, {username} 👋</h2>
      </div>

      {/* Static Index Section */}
      <Row className="g-4">
        {indexes.map((index, idx) => (
          <Col md={6} key={idx}>
            <Card className="text-center p-4 shadow-sm mb-3">
              <Card.Title>{index.name}</Card.Title>
              <Card.Text>Price: ₹{index.price}</Card.Text>
              <Card.Text>Change: {index.changePercent}%</Card.Text>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Search Bar */}
      <Card className="p-4 shadow-sm mb-5">
        <Form onSubmit={handleSearchAdd}>
          <Form.Group className="mb-3">
            <Form.Control
              list="stockOptions"
              type="text"
              placeholder="Search Stock Symbol or Name"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <datalist id="stockOptions">
              {stockList
                .filter(
                  (stock) =>
                    stock.symbol.toLowerCase().includes(searchInput.toLowerCase()) ||
                    stock.name.toLowerCase().includes(searchInput.toLowerCase())
                )
                .slice(0, 10)
                .map((stock, idx) => (
                  <option key={idx} value={stock.symbol}>
                    {stock.name}
                  </option>
                ))}
            </datalist>
          </Form.Group>
          <Button type="submit" variant="primary" className="w-100">
            ➕ Add to Watchlist
          </Button>
        </Form>
      </Card>

      {/* Watchlist Section */}
      <h4 className="mb-4">📋 My Watchlist</h4>
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      ) : watchlist.length > 0 ? (
        <Row>
          {watchlist.map((stock, idx) => (
            <Col md={3} key={idx} className="mb-4">
              <Card className="text-center p-3 shadow-sm">
                <Card.Title>{stock.name}</Card.Title>
                <Card.Text>Symbol: {stock.symbol}</Card.Text>
                <Card.Text>Price: ₹{stock.price}</Card.Text>
                <Button variant="info" size="sm" onClick={() => navigate(`/stock/${stock.symbol}`)}>
                  📈 View Chart
                </Button>{" "}
                <Button variant="danger" size="sm" onClick={() => handleRemoveStock(stock.symbol)}>
                  ❌ Remove
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <p>No stocks in your watchlist yet. Start adding!</p>
      )}
    </Container>
  );
};

export default DashboardPage;
