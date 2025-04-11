import mongoose from "mongoose";
import { string } from "zod";

const armorySchema = new mongoose.Schema({
  gun: String,
  vendor: String,
  price: String,
  description: String,

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Armory = mongoose.model("Armory", armorySchema);
