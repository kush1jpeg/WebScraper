const mongoose = require("mongoose");

const drugSchema = new mongoose.Schema({
  name: String,
  vendor: String,
  price: Number,
  description: String
});

module.exports = mongoose.model("Drugs", drugSchema);
