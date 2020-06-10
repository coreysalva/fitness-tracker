const path = require("path");


module.exports = function(server){

    server.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    server.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    server.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
    
}