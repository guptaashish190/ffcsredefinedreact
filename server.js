// Imports
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = require("./routes/index");
//mongoose.set('debug', true);

const app = express();
 //Connect to mongodb
mongoose.connect("mongodb://localhost:27017/ffcsDB", (err) => {
    err ? console.log("Error Connecting to the db: " + err) : console.log("Successfully connected to db");
  });

// Use BodyParser for handlingPOST Requests
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//Specify Port 
const PORT = process.env.PORT || 3005;

// Use Morgan for logging
app.use(morgan("dev"));

// Serve Static Files
app.use(express.static(__dirname + "/client/public"));

// Use cors for Cross origin issues
app.use(cors());

// Test Route
app.get("/test",(req,res)=>{
    res.json({
        test: "Express Backend Working"
    });
    res.end();
});

// Index Router
app.use("/api",router);

// Listening to PORT
app.listen(PORT, ()=>{
    console.log("Listening on PORT: " + PORT);
});