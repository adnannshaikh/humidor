const mongoose = require('mongoose');

const watchlistSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  stocks: [
    {
      symbol: { type: String, required: true },
      name: { type: String },
      price: { type: Number }
    }
  ]
});

const Watchlist = mongoose.model('Watchlist', watchlistSchema);

module.exports = Watchlist;
