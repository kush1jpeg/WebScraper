import mongoose from "mongoose";

const armorySchema = new mongoose.Schema({
  name: String,
  description: String,
  price: String,
  stock: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

export const Armory = mongoose.model("Armory", armorySchema);
