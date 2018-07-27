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

function setOccupiedSlots(occupiedSlotsList) {
  return {
    type: 'SET_OCCUPIED_SLOTS',
    payload: occupiedSlotsList,
  };
}

export default { setSlot, resetSlots, setOccupiedSlots };
