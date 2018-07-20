function setSlot(slot) {
  return {
    type: 'SET_SLOT',
    payload: slot,
  };
}

export default { setSlot };
