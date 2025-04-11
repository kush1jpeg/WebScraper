import express from "express";
import { Armory } from "../db/armorySchema.js";
import { Articles } from "../db/articleSchema.js";
import { Drugs } from "../db/drugsSchema.js";

export const servicesRoute = express.Router();

// Added routes for armory                              Bruh remember you gotta store the raw data in the db cuz i dont think cheerios will fucking work

servicesRoute.get("/armory", async (req, res) => {
  const guns = await Armory.find({});
  res.json(guns);
});

servicesRoute.get("/armory/:id", async (req, res) => {
  id = req.params.id;
  const gun = await Armory.findById(req.params.id);
  if (!gun) res.status(404).json({ msg: "gun with this id doesn't exist" });
  res.json(gun);
});

// Added routes for drugs

servicesRoute.get("/drugs", async (req, res) => {
  const drug = await Drugs.find({});
  res.json(drug);
});

servicesRoute.get("/drugs/:id", async (req, res) => {
  id = req.params.id;
  const drug = await Drugs.findById(req.params.id);
  if (!gun) res.status(404).json({ msg: "drug with this id doesn't exist" });
  res.json(drug);
});

// Added routes for article

servicesRoute.get("/articles", async (req, res) => {
  const articles = await Articles.find({});
  res.json(articles);
});

servicesRoute.get("/articles/:id", async (req, res) => {
  id = req.params.id;
  const article = await Articles.findById(req.params.id);
  if (!article)
    res.status(404).json({ msg: "drug with this id doesn't exist" });
  res.json(article);
});
