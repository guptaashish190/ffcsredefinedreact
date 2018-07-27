const slotArray = [
  'A1', 'F1', 'D1', 'TB1', 'TG1', '--', 'A2', 'F2', 'D2', 'TB2', 'TG2', '--', 'V3',
  'L1', 'L2', 'L3', 'L4', 'L5', 'L6', 'L31', 'L32', 'L33', '34', '35', '36', '--',
  'B1', 'G1', 'E1', 'TC1', 'TAA1', '--', 'B2', 'G2', 'E2', 'TC2', 'TAA2', '--', 'V4',
  'L7', 'L8', 'L9', 'L10', 'L11', 'L12', 'L37', 'L38', 'L39', 'L40', 'L41', 'L42', '--',
  'C1', 'A1', 'F1', 'V1', 'V2', '--', 'C2', 'A2', 'F2', 'TD2', 'TBB2', '--', 'V5',
  'L13', 'L14', 'L15', 'L16', '--', '--', 'L43', 'L44', 'L45', 'L46', 'L47', 'L48', '--',
  'D1', 'B1', 'G1', 'TE1', 'TCC1', '--', 'D2', 'B2', 'G2', 'TE2', 'TCC2', '--', 'V6',
  'L19', 'L20', 'L21', 'L22', 'L23', 'L24', 'L49', 'L50', 'L51', 'L52', 'L53', 'L54', '--',
  'E1', 'C1', 'TA1', 'TF1', 'TD1', '--', 'E2', 'C2', 'TA2', 'TF2', 'TDD2', '--', 'V7',
  'L25', 'L26', 'L27', 'L28', 'L29', 'L30', 'L55', 'L56', 'L57', 'L58', 'L59', 'L60', '--',
  'V8', 'X11', 'X12', 'Y11', 'Y12', '--', 'X21', 'Z21', 'Y21', 'W21', 'W22', '--', 'V9',
  'L71', 'L72', 'L73', 'L74', 'L75', 'L76', 'L77', 'L78', 'L79', 'L80', 'L81', 'L82', '--',
  'V10', 'Y11', 'Y12', 'X11', 'X12', '--', 'Y21', 'Z21', 'X21', 'W21', 'W22', '--', 'V11',
  'L83', 'L84', 'L85', 'L86', 'L87', 'L88', 'L89', 'L90', 'L91', 'L92', 'L93', 'L94', '--',
];


export default function (slot, occupiedSlots) {
  if (occupiedSlots.indexOf(slot) > 0) {
    return true;
  }
  const slotType = slot.includes('L') ? 'Lab' : 'Theory';
  if (slotType === 'Lab') {
    if (occupiedSlots.indexOf(slotArray[slotArray.indexOf(slot) - 13]) > 0) {
      return true;
    }
  } else if (occupiedSlots.indexOf(slotArray[slotArray.indexOf(slot) + 13]) > 0) {
    return true;
  }
  return false;
}
