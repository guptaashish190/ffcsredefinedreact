let occupiedSlots;
/* Convert Object to list
for ex object to list => is
{
  CSE1002: {...},
  CSE2003: {...},
  CSE2001: {...},
}

to

[
  [CSE1002, {...}],
  [CSE2003, {...}],
  [CSE2001, {...}],
]
*/

const convertObjToList = (obj) => {
  let list = [];
  Object.keys(obj).forEach((objKey) => {
    list.push([objKey, obj[objKey]]);
  });
  return list;
};


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

const getElement = (slotObject, type, timeSlot) => {
  let selectedSlot = null;

  // Don't touch this for theories for now ..
  let slotSetSortedList = Object.keys(slotObject);

  // Lab Sorting
  if (type === 'LA') {
    slotSetSortedList.sort((first, second) => {
      let labNumberF = first.split('+')[0].split('L')[1];
      let labNumberS = second.split('+')[0].split('L')[1];
      if (timeSlot === 'morning') {
        return labNumberF % 6 > labNumberS % 6;
      }
      return labNumberF % 6 < labNumberS % 6;
    });
    console.log(slotSetSortedList);
  }

  try {
    slotSetSortedList.forEach((slotString) => {
      const slots = slotString.split('+');
      if (!clashing(slots)) {
        const facultyLength = Object.keys(slotObject[slotString]).length;
        const randomIndex = Math.floor(Math.random() * facultyLength);
        selectedSlot = slotObject[slotString][randomIndex];
        occupiedSlots.push(...slots);
        throw selectedSlot;
      }
    });
  } catch (err) {
    return err;
  }

  return false;
};

const sortBasedOnAvailableSlots = (list, type) => {
  list.sort((first, second) => {
    if (first[1][type] && second[1][type]) {
      return Object.keys(first[1][type]).length > Object.keys(second[1][type]).length;
    } else if (first[1][type]) {
      return 1;
    }
    return -1;
  });
  return list;
};

const convertNestedToCoursesList = (nestedList) => {
  const list = [];
  nestedList.forEach((elem) => {
    list.push(elem[0]);
  });
  return list;
};

export default function (data, timeSlot) {
  let allDistSlots = [];
  occupiedSlots = [];
  let listOfData = convertObjToList(data);
  const errorStatus = [];
  const successStatus = [];
  // Dist for Labs only
  const sortedLabs = sortBasedOnAvailableSlots(listOfData, 'lab');
  let sortedCoursesLA = convertNestedToCoursesList(sortedLabs);

  sortedCoursesLA.forEach((course) => {
    // For Labs
    if (data[course].lab) {
      const selectedSlot = getElement(data[course].lab, 'LA', timeSlot);
      if (selectedSlot) {
        const slots = selectedSlot.SLOT.split('+');
        slots.forEach((slot) => {
          allDistSlots.push({
            slot,
            element: {
              SLOT: slot,
              CODE: selectedSlot.CODE,
              VENUE: selectedSlot.VENUE,
              FACULTY: selectedSlot.FACULTY,
              TITLE: selectedSlot.TITLE,
            },
          });
        });
        successStatus.push(`Added Lab for: ${course}`);
      } else {
        errorStatus.push(`Couldn't set slot for ${course} lab`);
        console.log('Couldnt set slot for: ', course);
      }
    }
  });


  // Dist for theories only
  const sortedTheories = sortBasedOnAvailableSlots(listOfData, 'theory');
  let sortedCoursesTH = convertNestedToCoursesList(sortedTheories);

  sortedCoursesTH.forEach((course) => {
    // For Theories
    console.log(course);
    if (data[course].theory) {
      const selectedSlot = getElement(data[course].theory, 'TH', timeSlot);
      if (selectedSlot) {
        const slots = selectedSlot.SLOT.split('+');
        slots.forEach((slot) => {
          allDistSlots.push({
            slot,
            element: {
              SLOT: slot,
              CODE: selectedSlot.CODE,
              VENUE: selectedSlot.VENUE,
              FACULTY: selectedSlot.FACULTY,
              TITLE: selectedSlot.TITLE,
            },
          });
        });
        successStatus.push(`Added theory for: ${course}`);
      } else {
        errorStatus.push(`Couldn't set slot for ${course} theory`);
        console.log('Couldnt set slot for: ', course);
      }
    }
  });
  return { objs: allDistSlots, occupiedSlots, status: { errors: errorStatus, success: successStatus } };
}
