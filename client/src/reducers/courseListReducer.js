const initialState = {
  courses: [
    { CODE: 'STS2001', TITLE: 'Reasoning Skill Enhancement', CREDITS: 1 },
    { CODE: 'CSE2002', TITLE: 'Theory of Computation and Compiler design', CREDITS: 4 },
    { CODE: 'CSE2004', TITLE: 'Database Management Systems', CREDITS: 4 },
    { CODE: 'CSE2005', TITLE: 'Operating Systems', CREDITS: 4 },
    { CODE: 'CSE4015', TITLE: 'Human Computer Interaction', CREDITS: 4 },
    { CODE: 'CSE4019', TITLE: 'Image Processing', CREDITS: 4 },
    { CODE: 'CSE2001', TITLE: 'Computer Architecture and Organization', CREDITS: 3 },
  ],
};

export default function (state = initialState, action) {
  const { courses } = state;
  switch (action.type) {
    case 'ADD_COURSE_TO_LIST':

      return Object.assign({}, state, { courses: [...courses, action.payload] });
    case 'ADD_COURSE_TO_LIST_INVALID_INPUT':
      alert('Invalid course');
      return state;
    case 'REMOVE_FROM_COURSE_LIST':
      return Object.assign({}, state, { courses: courses.filter(elem => elem.CODE !== action.payload) });
    default:
      return state;
  }
}

