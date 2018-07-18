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

export default { addToCourseList, removeFromCourseList };
