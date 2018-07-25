function setSelectSlotCourse(slot) {
  return {
    type: 'SET_SELECT_SLOT_COURSE',
    payload: slot,
  };
}

function setVisible(visible) {
  return {
    type: 'SET_VISIBLE',
    payload: visible,
  };
}

function setType(type) {
  return {
    type: 'SET_TYPE',
    payload: type,
  };
}
function setResponseData(data) {
  return {
    type: 'SET_RESPONSE_DATA',
    payload: data,
  };
}

function setModifySelectedTheory(selection) {
  return {
    type: 'SET_MODIFY_SELECTION_THEORY',
    payload: selection,
  };
}
function setModifySelectedLab(selection) {
  return {
    type: 'SET_MODIFY_SELECTION_LAB',
    payload: selection,
  };
}
export default {
  setSelectSlotCourse,
  setVisible,
  setType,
  setResponseData,
  setModifySelectedTheory,
  setModifySelectedLab,
};
