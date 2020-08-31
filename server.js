// require npm packages
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

// create route for user to have access to app
require('dotenv').config();

// app.use(logger("dev"));

// set up connection path
const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// create connection using mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
useUnifiedTopology: true,
useNewUrlParser: true,
useFindAndModify: false,

});

// connect to routes
app.use(require("./routes/api"));

// port for listen connectionls
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});