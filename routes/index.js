// Imports
const express = require("express");
const ffcsDB = require("../models/ffcsMongo.model");
const router = express.Router();


// Get Prefs from the main route and shrink the database

/* Preferences Structure:
    courses : ['CSE2003', 'CSE1004' ...]
    preferredTime : "Evening" / "Morning" */

router.get('/getSlots', (req,res) =>{

    // Get Courses List and Time from URL
    let courses = req.query.courses;
    let time = req.query.preferredTime;

    // Set Slot Number for querying time
    let timeIncludes;
    if(time === 'evening'){
        timeIncludes = 2;
    }else{
        timeIncludes = 1;
    }
    let filteredList = [];

    // Find all courses from the database and send
    ffcsDB.find({CODE : {$in : courses}},(err,data) => {
        // If there are errors in finding the list the console log the error
        if(err) console.log(err);

        for(let i=0 ; i< data.length ; i++){
            
            let slotsList = data[i].SLOT.split("+");
            if(data[i].TYPE === 'TH' || data[i].TYPE === 'ETH'){
                if(slotsList[0].includes(timeIncludes)){
                    filteredList.push(data[i]);
                }
            }else{
                if(slotsList[slotsList.length -1]){
                    let labNumber = slotsList[slotsList.length -1].split("L")[1];
                    
                    if(timeIncludes === 2 && Number(labNumber) <= 30){ 
                        filteredList.push(data[i]);
                    }else if(timeIncludes === 1 && Number(labNumber) > 30){
                        filteredList.push(data[i]);
                    }
                }
            }
        }
        res.send({
            original : data.length,
            filteredTime : filteredList.length
        });

    });
    
});

// Export Router
module.exports = router;