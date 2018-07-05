function setUser(user) {
  return {
    type: 'SET_USER',
    payload: user,
  };
}

function logoutUser() {
  window.localStorage.removeItem('token');
  return {
    type: 'LOGOUT_USER',
  };
}
export default { setUser, logoutUser };
