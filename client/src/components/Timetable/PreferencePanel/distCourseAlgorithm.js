let occupiedSlots = [];

const clashing = (slots) => {
  let clashingFlag = false;
  slots.forEach((slot) => {
    if (occupiedSlots.indexOf(slot) >= 0) {
      clashingFlag = true;
    }
  });
  if (clashingFlag) {
    return true;
  }
  return false;
};

const theoryDist = (slotObject) => {
  let selectedSlot = null;
  Object.keys(slotObject).forEach((slotString) => {
    const slots = slotString.split('+');
    if (!clashing(slots)) {
      const facultyLength = Object.keys(slotObject[slotString]).length;
      const randomIndex = Math.floor(Math.random() * facultyLength);
      selectedSlot = slotObject[slotString][randomIndex];
      occupiedSlots.push(...slots);
    }
  });
  return selectedSlot;
};

// Convert Object to list
// for ex object to list => is
// {
//   CSE1002: {...},
//   CSE2003: {...},
//   CSE2001: {...},
// }

// to

// [
//   [CSE1002, {...}],
//   [CSE2003, {...}],
//   [CSE2001, {...}],
// ]

const convertObjToList = (obj) => {
  let list = [];
  Object.keys(obj).forEach((objKey) => {
    list.push([objKey, obj[objKey]]);
  });
  return list;
};

export default function (data) {
  let allDistSlots = [];

  let sortedCourses = [];


  Object.keys(data).forEach((course) => {
    // For Theories
    console.log(course);
    if (data[course].theory) {
      const selectedSlot = theoryDist(data[course].theory);
      if (selectedSlot) {
        const slots = selectedSlot.SLOT.split('+');
        slots.forEach((slot) => {
          allDistSlots.push({
            slot,
            element: {
              SLOT: slot,
              CODE: selectedSlot.CODE,
              VENUE: selectedSlot.VENUE,
            },
          });
        });
      } else {
        console.log('Couldnt set slot for: ', course);
      }
    }
    // For Labs
    if (data[course].lab) {
      const selectedSlot = theoryDist(data[course].lab);
      if (selectedSlot) {
        const slots = selectedSlot.SLOT.split('+');
        slots.forEach((slot) => {
          allDistSlots.push({
            slot,
            element: {
              SLOT: slot,
              CODE: selectedSlot.CODE,
              VENUE: selectedSlot.VENUE,
            },
          });
        });
      } else {
        console.log('Couldnt set slot for: ', course);
      }
    }
  });
  return allDistSlots;
}
