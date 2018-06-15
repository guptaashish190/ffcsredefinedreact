const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3005;

app.use(morgan("dev"));
app.use(express.static(__dirname + "/client/public"));
app.use(cors());

app.get("/test",(req,res)=>{
    res.json({
        test: "Express Backend Working"
    });
    res.end();
});

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/client/public/index.html");
});

app.listen(PORT, ()=>{
    console.log("Listening on PORT: " + PORT);
});