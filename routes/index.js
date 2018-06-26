// Imports
const express = require("express");
const ffcsDB = require("../models/ffcsMongo.model");
const router = express.Router();

// Get Prefs from the main route and shrink the database

/* Preferences Structure:
    courses : ['CSE2003', 'CSE1004' ...]
    preferredTime : "Evening" / "Morning" */

router.get('/getSlots', (req, res) => {

    // Get Courses List and Time from URL
    let courses = req.query.courses;
    let time = req.query.preferredTime;

    // Set Slot Number for querying time
    let timeIncludes;
    if (time === 'evening') {
        timeIncludes = 2;
    } else {
        timeIncludes = 1;
    }

    // Initialize filtered list
    let filteredList = [];

    // Find all courses from the database using courses from URL
    ffcsDB.find({ CODE: { $in: courses } }, (err, data) => {

        // If there are errors in finding the list then console log the error
        if (err) console.log(err);

        // Loop through Every element from the db response for time checking
        for (let i = 0; i < data.length; i++) {

            // Make a list of slots for ex ====== "L13+L34+l56" becomes ['L13' , 'L34' , 'L56']
            let slotsList = data[i].SLOT.split("+");

            // Check if the current element is theory
            if (data[i].TYPE === 'TH' || data[i].TYPE === 'ETH') {

                // If it is then check whether the first item in the slot list contains 1 or 2 (1 for morning, 2 for evening)
                if (slotsList[0].includes(timeIncludes)) {
                    filteredList.push(data[i]);
                }
            } else {
                /* 
                Else check the current element's last slot number 
                Morning input means we need evening lab slots
                ( >30 for morning and <=30 for evening ) */

                let labNumber = slotsList[slotsList.length - 1].split("L")[1];

                if (timeIncludes === 2 && Number(labNumber) <= 30) {
                    filteredList.push(data[i]);
                } else if (timeIncludes === 1 && Number(labNumber) > 30) {
                    filteredList.push(data[i]);
                }
            }
        }
        // Send the Response
        res.send({
            original: data.length,
            filteredTime: filteredList.length,
            data : filteredList
        });

    });

});

// Get the courses to add to the addedCourses list { Send The Course Validity Credits and Title}
router.get('/getCourse', (req,res) => {
         ffcsDB.find({CODE : req.query.course}, (err, data)=>{
             
            if(data[0] !== undefined){
                let testFaculty = data[0].FACULTY;
                let credits = Number(data[0].CREDITS);
                let type = [data[0].TYPE];
                for(let i =0; i < data.length; i++){
                    if(testFaculty === data[i].FACULTY && !type.includes(data[i].TYPE)){
                        credits+=Number(data[i].CREDITS);
                        type.push(data[i].TYPE);
                    }
                }
                res.send({
                    CODE: data[0].CODE,
                    TITLE: data[0].TITLE,
                    CREDITS: credits
                });
            }else{
                res.send("invalid");
            }
            res.end();
        });
});

router.get('/submitCourses', (req,res) => {
    const { courses, timePref } = req.query;
    let sortedCourses = {};
    let i = 0;
    while(i<courses.length){

        ffcsDB.find({CODE : courses[i]}, (err, data) => {
            for(let j=0; j< data.length; j++){
                if(sortedCourses[data[j].CODE] === undefined){
                    sortedCourses[data[j].CODE] = {};
                }
                if(sortedCourses[data[j].CODE][data[j].FACULTY] === undefined){
                    sortedCourses[data[j].CODE][data[j].FACULTY] = [];
                }
                sortedCourses[data[j].CODE][data[j].FACULTY].push(data[j]);
            }
            if(i === courses.length -1){
                res.send(sortedCourses);
            }
            i++;
        });

    }
});

// Export Router
module.exports = router;