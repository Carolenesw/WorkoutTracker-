const mongoose = require("mongoose");

// create workout schema 
const Schema = mongoose.Schema 

// use new schema to give data structure in database/lays foundation for workout types
const workoutSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now
    },
    exercise: [{
        type: {
            type: String,
        },
        name: {
            type: String,
            trim: true,
        },
        duration: {
            type: Number,
        },
        weight: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        distance: {
            type: Number
        }
    }]
});

// use schema to create model and export to seeds file
const Workout = mongoose.model("Workout", workoutSchema)
module.exports = Workout