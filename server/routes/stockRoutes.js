const express = require('express');
const axios = require('axios');

const router = express.Router();

// Helper function to fetch stock from NSE
async function fetchNSEStock(symbol) {
  const url = `https://www.nseindia.com/api/quote-equity?symbol=${symbol}`;

  const { data } = await axios.get(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      "Accept": "application/json",
      "Referer": "https://www.nseindia.com/"
    }
  });

  return data;
}

// API Route
router.get('/quotes', async (req, res) => {
  try {
    const symbolsQuery = req.query.symbols; // Example: RELIANCE,TCS,INFY
    if (!symbolsQuery) {
      return res.status(400).json({ message: 'Symbols parameter missing' });
    }

    const symbols = symbolsQuery.split(',');

    const stockPromises = symbols.map(symbol => fetchNSEStock(symbol));
    const stocks = await Promise.all(stockPromises);

    // Return a simplified format to frontend
    const formattedStocks = stocks.map(stock => ({
      symbol: stock.info.symbol,
      name: stock.info.companyName,
      price: stock.priceInfo.lastPrice,
      changePercent: stock.priceInfo.pChange
    }));

    res.json(formattedStocks);
  } catch (error) {
    console.error('NSE Fetch Error:', error.message);
    res.status(500).json({ message: 'Failed to fetch stock data' });
  }
});

module.exports = router;
