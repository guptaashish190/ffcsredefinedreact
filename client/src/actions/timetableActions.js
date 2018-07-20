function setSlot(slotElement) {
  return {
    type: 'SET_SLOT',
    payload: slotElement,
  };
}

function resetSlots() {
  return {
    type: 'RESET_SLOTS',
  };
}

export default { setSlot, resetSlots };
