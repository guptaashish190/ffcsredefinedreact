function setSelectSlot(slot) {
  return {
    type: 'SET_SELECT_SLOT',
    payload: slot,
  };
}

function setType(type) {
  return {
    type: 'SET_TYPE',
    payload: type,
  };
}

export default { setSelectSlot, setType };
