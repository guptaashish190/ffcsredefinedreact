import axios from 'axios';

function changeTest(val) {
  return {
    type: 'CHANGE_TEST',
    payload: val,
  };
}
function fetchExpressRes() {
  return (dispatch) => {
    axios.get('http://localhost:3005/test').then((res) => {
      dispatch({
        type: 'FETCH_EXPRESS_RES',
        payload: res.data.test,
      });
    });
  };
}
export default { changeTest, fetchExpressRes };

