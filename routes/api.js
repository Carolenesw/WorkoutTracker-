// // require router and module file path 
const router = require("express").Router();
const path = require("path");

let db = require("../models/workout_model");


router.get("/api/workouts", (req, res) => {
  db.find({})
    .populate("exercises")
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/exercise", (req, res) => {
  res.sendFile(path.resolve("public/exercise.html"));
});

router.get("/stats", (req, res) => {
  res.sendFile(path.resolve("public/stats.html"));
});

router.post("/api/workouts", ({ body }, res) => {
  db.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  db.create(req.body)
    .then((response) => {
      console.log(response);
      let idObj = { _id: req.params.id };
      let updateObj = { 
        $push: { exercises: response._id },  
        $inc: { totalDuration: response.duration }
      };

      db.findByIdAndUpdate(idObj, updateObj, { new: true })
        .then(exercise => {
          console.log(exercise);
          res.json(exercise);
        })
        .catch(err => {
          res.json(err);
        });
    });
});

router.get("/api/workouts/range", (req, res) => {
  db.find({})  
    .populate("exercises")
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;


