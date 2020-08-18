// require router and module file path 
const router = require("express").Router();
const Workout = require("../models/models");

const path = require("path");

let db = require("../models/models");
const { model } = require("mongoose");

// create routes to link html pages/routes
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
})

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
})





module.exports = router