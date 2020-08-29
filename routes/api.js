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
      res.json(err);
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
      res.json(err);
    });
});


 // add new exercise to route and push to array
router.put("/api/workouts/:id", (req, res) => {
  db.Exercise.create(req.body).then((response) => {

    console.log("Create Workout: ", response);

    const objID = req.params.id;
    let exercise = {
      $push: { exercises: response._id },
      $inc: { totalDuration: response.duration },
    };

    console.log("Last workout:", exercise);
    console.log("Workout id:", objID);

    db.Workout.findByIdAndUpdate(objID, exercise, { new: true })
      .then((exercise) => {
        console.log("exercise:", exercise);

        res.json(exercise);
      })
      .catch((err) => {
        res.json(err);
      });
  });
});

// view multiple combine workouts on stats page
router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    // .populate("exercises")
    .then((dbWorkout) => {
        console.log("dbWorkout:", dbWorkout)
      res.json(dbWorkout);

      console.log("workout stats:", dbWorkout )


    })
    .catch((err) => {
      res.json(err);
      console.log("err:", err)
    });
});

module.exports = router;
