import React, { useEffect, useState } from "react";
import { Container, Button, Spinner, Row, Col, Card, ButtonGroup } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import dummyStockData from "../dummy/stockData";  // Adjust path if needed

import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const StockDetailsPage = () => {
  const { symbol } = useParams();
  const navigate = useNavigate();
  
  const [stockData, setStockData] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [timeframe, setTimeframe] = useState("1y"); // Default 1 year
  const [suggestion, setSuggestion] = useState(""); // Moved correctly inside component

  const fetchStockDetails = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/stocks/quotes?symbols=${symbol}`);
      setStockData(res.data[0]);
    } catch (error) {
      console.error("Error fetching stock details:", error);
    }
  };

  const fetchPrediction = async (priceHistory) => {
    try {
      const res = await axios.post('http://localhost:8000/predict', {
        prices: priceHistory
      });
      setSuggestion(res.data.suggestion);
    } catch (error) {
      console.error('Error fetching prediction:', error);
    }
  };

  const fetchStockHistory = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/stocks/history?symbol=${symbol}&period=${timeframe}`);
      const history = res.data;

      setChartData({
        labels: history.dates,
        datasets: [
          {
            label: `${symbol} Price`,
            data: history.prices,
            fill: false,
            borderColor: "blue",
            tension: 0.3,
          },
        ],
      });

      fetchPrediction(history.prices);  // ✅ After setting chart, predict
      setLoading(false);
    } catch (error) {
      console.error("Error fetching stock history:", error);
      setLoading(false);
    }
  };

//   useEffect(() => {
//     fetchStockDetails();
//     fetchStockHistory();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [symbol, timeframe]);
useEffect(() => {
    setStockData({
      name: dummyStockData.name,
      price: dummyStockData.price,
      changePercent: dummyStockData.changePercent,
    });
  
    setChartData({
      labels: dummyStockData.history.dates,
      datasets: [
        {
          label: `${dummyStockData.symbol} Price`,
          data: dummyStockData.history.prices,
          fill: false,
          borderColor: "blue",
          tension: 0.3,
        },
      ],
    });
  
    setSuggestion(dummyStockData.suggestion);
  
    setLoading(false);
  }, []);
  

  const handleTimeframeChange = (newTimeframe) => {
    setTimeframe(newTimeframe);
  };

  const handleAddToWatchlist = async () => {
    try {
      const userId = localStorage.getItem("userId");

      await axios.post("/api/watchlist/add", {
        userId,
        stock: stockData,
      });

      alert(`${stockData.name} added to Watchlist!`);
    } catch (error) {
      console.error("Error adding to watchlist:", error);
    }
  };

  return (
    <Container className="py-5">
      <Button variant="secondary" onClick={() => navigate("/dashboard")}>← Back</Button>

      {loading ? (
        <div className="text-center py-5">
          <Spinner animation="border" />
        </div>
      ) : (
        <>
          {/* <h2 className="text-center my-4">{stockData?.name} ({symbol})</h2> */}
          <h2 className="text-center my-4">{stockData?.name} ({dummyStockData.symbol})</h2>

          <h4 className="text-center mb-2">₹{stockData?.price}</h4>
          <p className="text-center text-muted">
            Change: {stockData?.changePercent}%
          </p>

          <Row className="text-center mb-4">
            <Col><strong>High:</strong> ₹--</Col>
            <Col><strong>Low:</strong> ₹--</Col>
            <Col><strong>Volume:</strong> --</Col>
          </Row>

          {/* 🧠 AI Prediction Card */}
          <Card className="p-4 text-center mb-4 shadow">
            <h5>🤖 AI Suggestion:</h5>
            <h4 className={suggestion === "Buy" ? "text-success" : suggestion === "Sell" ? "text-danger" : "text-warning"}>
              {suggestion || "Loading..."}
            </h4>
          </Card>

          <div className="d-flex justify-content-center mb-3">
            <ButtonGroup>
              <Button variant="outline-primary" onClick={() => handleTimeframeChange("1d")}>1D</Button>
              <Button variant="outline-primary" onClick={() => handleTimeframeChange("1mo")}>1M</Button>
              <Button variant="outline-primary" onClick={() => handleTimeframeChange("6mo")}>6M</Button>
              <Button variant="outline-primary" onClick={() => handleTimeframeChange("1y")}>1Y</Button>
            </ButtonGroup>
          </div>

          {chartData && <Line data={chartData} />}

          {/* <div className="text-center mt-4">
            <Button variant="success" onClick={handleAddToWatchlist}>
              ➕ Add to Watchlist
            </Button>
          </div> */}
        </>
      )}
    </Container>
  );
};

export default StockDetailsPage;
