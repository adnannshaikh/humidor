// --- FRONTEND: Updated StockDetailsPage.js ---

import React, { useEffect, useState } from "react";
import { Container, Button, Spinner, Row, Col, Card, ButtonGroup, ToggleButton } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
import { Line } from 'react-chartjs-2';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend, zoomPlugin);

const StockDetailsPage = () => {
  const { symbol } = useParams();
  const navigate = useNavigate();

  const [stockData, setStockData] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [timeframe, setTimeframe] = useState("1y");
  const [suggestion, setSuggestion] = useState("");

  useEffect(() => {
    fetchStock();
  }, [symbol, timeframe]);

  const fetchStock = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:8000/api/stocks/history", {
        params: { symbol, timeframe },
      });
      const history = res.data;

      setStockData({
        name: symbol.split(".")[0],
        price: history.prices[history.prices.length - 1],
        changePercent: ((history.prices.at(-1) - history.prices[0]) / history.prices[0] * 100).toFixed(2),
      });

      setChartData({
        labels: history.dates,
        datasets: [
          {
            label: `${symbol} Price`,
            data: history.prices,
            fill: true,
            backgroundColor: "rgba(65, 105, 225, 0.1)",
            borderColor: "royalblue",
            tension: 0.4,
            pointRadius: 1,
          },
        ],
      });

      const predRes = await axios.post("http://localhost:8000/predict", {
        prices: history.prices,
      });
      setSuggestion(predRes.data.suggestion);
    } catch (err) {
      console.error("Error fetching stock history:", err);
    }
    setLoading(false);
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
      zoom: {
        zoom: {
          wheel: { enabled: true },
          pinch: { enabled: true },
          mode: "x",
        },
        pan: {
          enabled: true,
          mode: "x",
        },
      },
    },
    scales: {
      x: { grid: { color: "#e0e0e0" } },
      y: { grid: { color: "#e0e0e0" } },
    },
  };

  return (
    <Container className="py-5">
      <Button variant="outline-secondary" onClick={() => navigate("/dashboard")}>← Back</Button>

      {loading ? (
        <div className="text-center py-5">
          <Spinner animation="border" />
        </div>
      ) : (
        <>
          <h2 className="text-center my-4">{stockData?.name} ({symbol})</h2>
          <h4 className="text-center mb-2 text-primary">₹{stockData?.price}</h4>
          <p className="text-center text-muted">
            Change: {stockData?.changePercent}%
          </p>

          <Row className="text-center mb-4">
            <Col><strong>High:</strong> ₹--</Col>
            <Col><strong>Low:</strong> ₹--</Col>
            <Col><strong>Volume:</strong> --</Col>
          </Row>

          <Card className="p-4 text-center mb-5 shadow-lg border-0">
            <h5 className="mb-2">🤖 AI Suggestion</h5>
            <h2 className={suggestion === "Buy" ? "text-success" : suggestion === "Sell" ? "text-danger" : "text-warning"}>
              {suggestion || "Loading..."}
            </h2>
          </Card>

          <div className="d-flex justify-content-center mb-4">
            <ButtonGroup>
              {["1d", "1mo", "6mo", "1y"].map((frame) => (
                <ToggleButton
                  key={frame}
                  type="radio"
                  variant={frame === timeframe ? "primary" : "outline-primary"}
                  name="timeframe"
                  value={frame}
                  checked={timeframe === frame}
                  onChange={() => setTimeframe(frame)}
                >
                  {frame.toUpperCase()}
                </ToggleButton>
              ))}
            </ButtonGroup>
          </div>

          <Card className="p-4 shadow-sm mb-5">
            {chartData && <Line data={chartData} options={chartOptions} />}
          </Card>
        </>
      )}
    </Container>
  );
};

export default StockDetailsPage;
