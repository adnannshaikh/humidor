const express = require('express');
const router = express.Router();
const Watchlist = require('../models/Watchlist');

// ➡️ Auto-add stock to default watchlist
router.post('/auto-add', async (req, res) => {
  const { userId, stock } = req.body;

  try {
    let watchlist = await Watchlist.findOne({ userId });

    if (!watchlist) {
      // If no watchlist exists for the user, create one
      watchlist = new Watchlist({
        userId,
        name: 'My Watchlist',
        stocks: [stock]
      });
      await watchlist.save();
      return res.status(201).json({ message: 'Watchlist created and stock added!', watchlist });
    }

    // Check if stock already exists
    const exists = watchlist.stocks.find((s) => s.symbol === stock.symbol);
    if (exists) {
      return res.status(400).json({ message: 'Stock already exists in your watchlist.' });
    }

    watchlist.stocks.push(stock);
    await watchlist.save();
    res.status(200).json({ message: 'Stock added to existing watchlist!', watchlist });
  } catch (err) {
    console.error('Auto-Add Error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// ➡️ Remove Stock from Watchlist
router.delete('/remove-stock', async (req, res) => {
  const { userId, symbol } = req.body;

  try {
    const watchlist = await Watchlist.findOne({ userId });
    if (!watchlist) return res.status(404).json({ message: 'Watchlist not found' });

    watchlist.stocks = watchlist.stocks.filter((stock) => stock.symbol !== symbol);
    await watchlist.save();

    res.status(200).json({ message: 'Stock removed successfully!' });
  } catch (err) {
    console.error('Remove Stock Error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// ➡️ Get All Watchlists for a User
router.get('/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const watchlists = await Watchlist.find({ userId });
    res.status(200).json(watchlists);
  } catch (err) {
    console.error('Fetch Watchlists Error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
