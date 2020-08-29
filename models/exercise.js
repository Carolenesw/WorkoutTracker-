const mongoose = require("mongoose");

// create workout schema 
const Schema = mongoose.Schema;

// use new schema to give data structure in database/lays foundation for workout types
const ExerciseSchema = new Schema({ 
  
  type: {
    type: String,
  },
  
  name: {
    type: String,
    trim: true
  },
  
  weight: {
    type: Number,
    trim: true
  },
  
  sets: {
    type: Number,
    trim: true
  },
  
  reps: {
    type: Number,
    trim: true
  },
  
  duration: {
    type: Number,
    trim: true
  },
  
  distance: {
    type: Number,
    trim: true
  }, 
//   exercises: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: "Exercise"
//     }
//   ]

});

// use schema to create model and export to seeds file and route
const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;