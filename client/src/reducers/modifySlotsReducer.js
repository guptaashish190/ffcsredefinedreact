
const initialState = {
  visible: true,
  selectedCourse: 'CSE2004',
  responseData: null,
  currentSelections: {
    theory: null,
    lab: null,
  },
  type: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SET_SELECT_SLOT_COURSE':
      return Object.assign({}, state, { selectedCourse: action.payload });
    case 'SET_VISIBLE':
      return Object.assign({}, state, { visible: action.payload });
    case 'SET_TYPE':
      return Object.assign({}, state, { type: action.payload });
    case 'SET_RESPONSE_DATA':
      return Object.assign({}, state, { responseData: action.payload });
    case 'SET_MODIFY_SELECTION_THEORY':
      return Object.assign({}, state, { currentSelections: { theory: action.payload, lab: state.currentSelections.lab } });
    case 'SET_MODIFY_SELECTION_LAB':
      return Object.assign({}, state, { currentSelections: { lab: action.payload, theory: state.currentSelections.theory } });
    case 'SET_LAB_LIST':
      return Object.assign({}, state, { responseData: { theory: state.responseData.theory, lab: action.payload } });
    default:
      return state;
  }
}
