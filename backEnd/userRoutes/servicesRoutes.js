import express from "express";

export const servicesRoute = express.Router()

// Add routes
servicesRoute.get("/all", (req, res) => {
  res.send("List of Services");
});

servicesRoute.get("/:id", (req, res) => {
  res.send(`Details for service ${req.params.id}`);
});
