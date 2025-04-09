const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: String,
  content: String,
  source: String, // Optional: where it's scraped from
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Articles", articleSchema);
