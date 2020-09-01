// require router and module file path
const router = require("express").Router();
const path = require("path");

let db = require("../models/models");

// create routes to link html pages/routes
router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

// create api routes to database and populate db
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .populate("exercise")
    .then((dbWorkout) => {
      res.json(dbWorkout);

      //   console.log("Populate:", dbWorkout);
      console.log("Work database located");
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// // create new workout route
router.post("/api/workouts", ({ body }, res) => {
  db.Workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);

      console.log("New Workout route created");
      console.log("New array:", body);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// add new exercise to route and push to array
router.put("/api/workouts/:id", (req, res) => {

  db.Workout.findByIdAndUpdate(
    req.params.id,
    { $push: { exercises: req.body } },
    { new: true }
  )
    .then((exercise) => {
      console.log("exercise:", exercise);

      res.json(exercise);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// view multiple combine workouts on stats page
router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .populate("exercise")
    .then((dbWorkout) => {
      res.json(dbWorkout);

      console.log("workout stats:", dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
