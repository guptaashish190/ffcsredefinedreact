
const initialState = {
  selectedSlot: null,
  type: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SET_SELECT_SLOT':
      return Object.assign({}, state, { selectedSlot: action.payload });
    case 'SET_TYPE':
      return Object.assign({}, state, { type: action.payload });
    default:
      return state;
  }
}
