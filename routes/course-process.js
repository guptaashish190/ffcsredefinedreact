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

// Send sorted courses from db
router.get('/submitCourses', (req,res) => {
    let { courses, timePref } = req.query;
    let sortedCourses = {};
    let i = 0;

    const addCourseToSortedJSON = (data) => {
        if(sortedCourses[data.CODE] === undefined){
            sortedCourses[data.CODE] = {};
        }

        if(data.TYPE.includes('L')){
            
            if(sortedCourses[data.CODE]['lab'] === undefined){
            sortedCourses[data.CODE]['lab'] = {};
            }
            if(sortedCourses[data.CODE]['lab'][data.SLOT] === undefined){
                sortedCourses[data.CODE]['lab'][data.SLOT] = [];
            }
            sortedCourses[data.CODE]['lab'][data.SLOT].push(data);
        }else{
            
            if(sortedCourses[data.CODE]['theory'] === undefined){
            sortedCourses[data.CODE]['theory'] = {};
            }
        
            if(sortedCourses[data.CODE]['theory'][data.SLOT] === undefined){
                sortedCourses[data.CODE]['theory'][data.SLOT] = [];
            }
            sortedCourses[data.CODE]['theory'][data.SLOT].push(data);
        }
    }
    
    let coursePromises = [];

    courses.forEach((element) => {
        coursePromises.push(ffcsDB.find({CODE : element}, (err, data) => {
            for(let j=0; j< data.length; j++){
                const slots = data[j].SLOT.split('+');
                if(timePref === 'morning'){
                    if((data[j].TYPE.includes('TH') || data[j].TYPE === 'SS') && slots[0].includes('1')){
                        // Morning Theories
                            addCourseToSortedJSON(data[j]);
                    }else{
                        // Evening Labs
                        const slotNumber = data[j].SLOT.split('+')[0].split('L')[1];
                        if(slotNumber >= 31 && slotNumber <=60){
                            addCourseToSortedJSON(data[j]);
                        }
                    }
                }else{
                    if((data[j].TYPE.includes('TH') || data[j].TYPE === 'SS') && slots[0].includes('2')){
                        // Evening Theories
                            addCourseToSortedJSON(data[j]);
                    }else{
                        // Morning Labs
                        const slotNumber = slots[0].split('L')[1];
                        if(slotNumber >= 1 && slotNumber <=30){
                            addCourseToSortedJSON(data[j]);
                        }
                    }
                }
            }
        }));
    });

    Promise.all(coursePromises).then(() => {
        res.send(sortedCourses);
    });
});

router.get('/autosuggest', (req,res) => {
    ffcsDB.distinct('CODE', (err,data) => {
        res.send(data);
    });
});

router.get('/getModifySlots', (req, res) => {
    const {course, type}  = req.query;
    console.log(course);
    const categorized = {};
    if(type === 'Slot'){
        ffcsDB.find({CODE: course, TYPE: {$regex: '^((?!PJ).)*$'}},(err, data) => {
            data.forEach( elem => {
                if(elem.SLOT.includes('L')){
                    if(categorized['Lab'] === undefined){
                        categorized['Lab'] = {};
                    }
                    if(categorized['Lab'][elem.FACULTY] === undefined){
                        categorized['Lab'][elem.FACULTY] = [];
                    }
                    categorized['Lab'][elem.FACULTY].push(elem);
                }else{
                    if(categorized['Theory'] === undefined){
                        categorized['Theory'] = {};
                    }
                    if(categorized['Theory'][elem.FACULTY] === undefined){
                        categorized['Theory'][elem.FACULTY] = [];
                    }
                    categorized['Theory'][elem.FACULTY].push(elem);
                }
            });
            
            res.send(categorized);
        });
    }
});

// Export Router
module.exports = router;