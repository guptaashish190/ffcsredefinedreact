import axios from 'axios';

function addToCourseList(course) {
  return (dispatch) => {
    axios.get('http://localhost:3005/api/getCourse', { params: { course: course.toUpperCase() } }).then((data) => {
      if (data.data !== 'invalid') {
        dispatch({
          type: 'ADD_COURSE_TO_LIST',
          payload: { ...data.data },
        });
      } else {
        dispatch({
          type: 'ADD_COURSE_TO_INVALID_INPUT',
        });
      }
    });
  };
}
function removeFromCourseList(course) {
  return {
    type: 'REMOVE_FROM_COURSE_LIST',
    payload: course,
  };
}

function submitCourses(courses, timePref) {
  const coursesList = [];

  for (let i = 0; i < courses.length; i += 1) {
    coursesList.push(courses[i].CODE);
  }
  axios.get('http://localhost:3005/api/submitCourses', { params: { courses: coursesList } }).then((data) => {
    console.log(data);
  });

  return {
    type: 'SUBMIT_COURSES',
    payload: { courses, timePref },
  };
}

export default { addToCourseList, removeFromCourseList, submitCourses };
