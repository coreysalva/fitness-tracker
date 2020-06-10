
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


let workoutSchema = new Schema({

    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [
        {
            type: {
                type: String,
                required: "Exercise type required"
            },
            name: {
                type: String,
                required: "Name of Exercise is required"
            },
            duration: {
                type: Number,
                required: "Duration in minutes is required"
            },
            weight: {
              type: Number 
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]
},
{
    toJSON: {
        virtuals: true
    }
});

workoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((total, curr) => {
            return total+=curr.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;