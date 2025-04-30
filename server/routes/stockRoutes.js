// const express = require('express');
// const axios = require('axios');

// const router = express.Router();

// // Helper function to fetch stock from NSE
// async function fetchNSEStock(symbol) {
//   const url = `https://www.nseindia.com/api/quote-equity?symbol=${symbol}`;

//   const { data } = await axios.get(url, {
//     headers: {
//       "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
//       "Accept": "application/json",
//       "Referer": "https://www.nseindia.com/"
//     }
//   });

//   return data;
// }

// // API Route
// router.get('/quotes', async (req, res) => {
//   try {
//     const symbolsQuery = req.query.symbols; // Example: RELIANCE,TCS,INFY
//     if (!symbolsQuery) {
//       return res.status(400).json({ message: 'Symbols parameter missing' });
//     }

//     const symbols = symbolsQuery.split(',');

//     const stockPromises = symbols.map(symbol => fetchNSEStock(symbol));
//     const stocks = await Promise.all(stockPromises);

//     // Return a simplified format to frontend
//     const formattedStocks = stocks.map(stock => ({
//       symbol: stock.info.symbol,
//       name: stock.info.companyName,
//       price: stock.priceInfo.lastPrice,
//       changePercent: stock.priceInfo.pChange
//     }));

//     res.json(formattedStocks);
//   } catch (error) {
//     console.error('NSE Fetch Error:', error.message);
//     res.status(500).json({ message: 'Failed to fetch stock data' });
//   }
// });

// module.exports = router;

// server/routes/stockRoutes.js

const express = require('express');
const axios = require('axios');
const router = express.Router();

const ALPHA_VANTAGE_API_KEY = process.env.ALPHA_VANTAGE_API_KEY;

router.get('/search', async (req, res) => {
  const { query } = req.query;

  try {
    const response = await axios.get('https://www.alphavantage.co/query', {
      params: {
        function: 'SYMBOL_SEARCH',
        keywords: query,
        apikey: ALPHA_VANTAGE_API_KEY,
      },
    });

    const matches = response.data.bestMatches.map((match) => ({
      symbol: match['1. symbol'],
      name: match['2. name'],
    }));

    res.json(matches);
  } catch (error) {
    console.error('Error fetching stock search results:', error);
    res.status(500).json({ error: 'Failed to fetch stock search results' });
  }
});

module.exports = router;
