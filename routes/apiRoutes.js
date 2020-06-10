const db = require("../models");
const mongojs = require("mongojs");


module.exports = function(server){


    server.get("/api/workouts", (req, res) => {
        db.Workout.find({}, (error, data) => {
            if(error){
                console.log("Error finding workouts")
            }
            else
                res.json(data);
        }); 
    });

    server.post("/api/workouts", (req, res) => {
        db.Workout.create({}, (error, data) => {
            if(error){
                console.log("Error creating workout");
            }
            else
                res.json(data);
        });
    });

    server.put("/api/workouts/:id", (req , res) => {

        let id = req.params.id;
        let excersizeData = req.body;
        
        db.Workout.updateOne({ _id: mongojs.ObjectId(id) }, { $push: { exercises: excersizeData }}, (error, updatedWorkout) => {
            if(error){
                console.log("Error updating workout")
            }
            else{
                res.json(updatedWorkout);
            }
                
        });
    });

    server.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}, (error, data) => {
            if(error){
                console.log("Error finding workout range")
            }
            else {
                res.json(data);
            }
                
        }); 
    });


}