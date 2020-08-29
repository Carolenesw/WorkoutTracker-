const mongoose = require("mongoose");

// create workout schema 
const Schema = mongoose.Schema;

// use new schema to give data structure in database/lays foundation for workout types
const WorkoutSchema = new Schema({ 
  
  day: {
    type: Date,
    default: Date.now
  },
  
  totalDuration: {
    type: Number,
    default: 0
  },

  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exercise"
    }
  ]
});

// use schema to create model and export to seeds file
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;