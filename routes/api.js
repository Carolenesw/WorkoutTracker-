// require router and module file path 
const router = require("express").Router();
// const Workout = require("../models/models");

const path = require("path");

// require db workout model
let db = require("../models/workout_model");
// const mongoose = require("mongoose");

// create routes to link html pages/routes
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
})

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
})

// create api routes to database
router.get("/api/workouts", (req, res) => {
    console.log("Inside last workout route");
    db.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch (error => {
        res.status(400).json(error);
    });
});




module.exports = router;