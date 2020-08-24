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
    console.log("Work database located");
    db.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch (error => {
        res.status(400).json(error);
    });
});

// create new workout route
router.post("/api/workouts", ({ body }, res) => {
    console.log("New Workout route created")
    console.log("New array:", body)

    db.Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
       res.status(400).json(error);
      });
  });

  // add new exercise to route and push to array
router.put("/api/workouts/:id", (req, res) => {
    const objID = req.params.objID
    const exercise = req.body

    console.log("New work workout:", exercise)

    db.Workout.findByIdAndUpdate({_id: objID},
        {$push: {exercise}})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(error => {
            res.status(400).json(error);
        });
});

// view multiple combine workouts on stats page
router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
        console.log("Workout completed:", dbWorkout)
    })
    .catch(error => {
        res.status(404).json(error);
    });
});

module.exports = router;