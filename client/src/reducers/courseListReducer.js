const initialState = {
  courses: [

    { CODE: 'MEE2002', TITLE: 'Strength of Materials', CREDITS: 4 },

    { CODE: 'MEE2004', TITLE: 'Mechanics of Machines', CREDITS: 4 },

    { CODE: 'MEE2003', TITLE: 'Thermal Engineering Systems', CREDITS: 4 },

    { CODE: 'STS2001', TITLE: 'Reasoning Skill Enhancement', CREDITS: 1 },

    { CODE: 'MAT2002', TITLE: 'Applications of Differential and Difference Equations', CREDITS: 4 },

    { CODE: 'MEE1004', TITLE: 'Fluid Mechanics', CREDITS: 4 },

    { CODE: 'MEE2005', TITLE: 'Heat Transfer', CREDITS: 4 },
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

