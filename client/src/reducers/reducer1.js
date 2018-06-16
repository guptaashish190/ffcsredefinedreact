const initialState = {
  test: 'Redux State Working (Click to check Redux Dispatch)',
  fetchedData: 'Check Express Fetch',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_TEST':
      return Object.assign({}, state, { test: action.payload });
      break;
    case 'FETCH_EXPRESS_RES':
      return Object.assign({}, state, { fetchedData: action.payload });
      break;
    default:
      return state;
      break;
  }
}
