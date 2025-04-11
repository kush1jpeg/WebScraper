const express = require("express");
const app = express();
const startTorAndScrape = require("./tor/logic/connection.js");
require("dotenv").config({ path: "./config/darkInfo.env" });
import { checkJWT } from "../middleWares/checkJWT.js";

//mongoose
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL, () =>
  console.log("Mongoose connected"),
);

//cookies
const cookieParser = require("cookie-parser");
app.use(cookieParser());

//routes
import { router } from "./userRoutes/routes.js";
import { servicesRoute } from "./userRoutes/servicesRoutes.js";

//to save the users time i am booting tor on startup
startTorAndScrape(null);

app.use("/auth", router);
app.use("/services", checkJWT, servicesRoute);

app.listen(process.env.PORT, () => {
  console.log("Server started on " + process.env.PORT);
});
