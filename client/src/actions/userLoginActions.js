function setUser(user) {
  return {
    type: 'SET_USER',
    payload: user,
  };
}

function removeUser() {
  return {
    type: 'REMOVE_USER',
  };
}
export default { setUser, removeUser };
