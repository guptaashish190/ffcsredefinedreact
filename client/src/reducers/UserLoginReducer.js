const initialState = {
  user: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'GET_USER':
      return state;
    case 'SET_USER':
      return Object.assign({}, state, { user: action.payload });
    case 'REMOVE_USER':
      return { user: null };
    default:
      return state;
  }
}
