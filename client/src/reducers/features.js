const initialState = {
  theme: 'green',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_THEME':
      return Object.assign({}, state, { theme: action.payload });
      break;
    default:
      return state;
      break;
  }
}
