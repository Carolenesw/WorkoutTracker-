const mongoose = require("mongoose");

const schema = mongoose.Schema 

const workoutSchema = new schema ({
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


// create Workout variable and export to seeds file
const Workout = mongoose.model("Workout", workoutSchema)
module.exports = Workout