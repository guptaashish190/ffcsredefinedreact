const initialState = {
  courses: [],
  totalCredits: 0,
};

export default function (state = initialState, action) {
  const { courses } = state;
  switch (action.type) {
    case 'ADD_COURSE_TO_LIST':
      return Object.assign({}, state, { courses: [...courses, action.payload], totalCredits: state.totalCredits + action.payload.CREDITS });
    case 'ADD_COURSE_TO_LIST_INVALID_INPUT':
      alert('Invalid course');
      return state;
    case 'REMOVE_FROM_COURSE_LIST':
      return Object.assign({}, state, { courses: courses.filter(elem => elem.CODE !== action.payload.CODE), totalCredits: state.totalCredits - action.payload.CREDITS });
    default:
      return state;
  }
}

