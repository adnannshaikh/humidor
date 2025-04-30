import React, { useState } from "react";
import axios from "axios";

const TestAlphaFetch = () => {
  const [stockData, setStockData] = useState(null);
  const [error, setError] = useState("");

  const fetchStock = async () => {
    try {
      const symbol = "RELIANCE.BSE"; // Test symbol
      const res = await axios.get(`http://localhost:8000/api/stocks/quote?symbol=${symbol}`);
      setStockData(res.data);
      setError("");
    } catch (err) {
      console.error("Error fetching stock:", err);
      setError("Failed to fetch stock data.");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>🔎 AlphaVantage Fetch Test</h1>
      <button onClick={fetchStock}>Fetch RELIANCE.BSE</button>

      {stockData && (
        <div style={{ marginTop: "20px" }}>
          <h3>Result:</h3>
          <pre>{JSON.stringify(stockData, null, 2)}</pre>
        </div>
      )}

      {error && (
        <div style={{ marginTop: "20px", color: "red" }}>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default TestAlphaFetch;
