require("dotenv").config();
const EXPRESS = require("express");
const CORS = require("cors");
const APP = EXPRESS();
const BODYPARSER = require("body-parser");
const ROUTES = require("./routes/routes");
const MONGOOSE = require("mongoose");

// MIDDLEWARE
APP.use(CORS());
APP.use("/uploads", EXPRESS.static("./outputs"));
APP.use(
  BODYPARSER.urlencoded({
    extended: true,
  })
);
APP.use(BODYPARSER.json());

MONGOOSE.connect(
  "mongodb+srv://admin:admin@cluster0.i7ly8.mongodb.net/pitchfx",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
);

APP.use("/", ROUTES);

module.exports = APP;
