const initialState = {
  A1: undefined,
  F1: undefined,
  D1: undefined,
  TB1: undefined,
  TG1: undefined,
  A2: undefined,
  F2: undefined,
  D2: undefined,
  TB2: undefined,
  TG2: undefined,
  V3: undefined,
  B1: undefined,
  G1: undefined,
  E1: undefined,
  TC1: undefined,
  TA1: undefined,
  B2: undefined,
  G2: undefined,
  E2: undefined,
  TC2: undefined,
  TAA2: undefined,
  V4: undefined,
  C1: undefined,
  V1: undefined,
  V2: undefined,
  C2: undefined,
  TD2: undefined,
  TBB2: undefined,
  V5: undefined,
  TE1: undefined,
  TCC1: undefined,
  TE2: undefined,
  TCC2: undefined,
  V6: undefined,
  TF1: undefined,
  TD1: undefined,
  TA2: undefined,
  TF2: undefined,
  TDD2: undefined,
  V7: undefined,
  V8: undefined,
  L1: undefined,
  L2: undefined,
  L3: undefined,
  L4: undefined,
  L5: undefined,
  L6: undefined,
  L7: undefined,
  L8: undefined,
  L9: undefined,
  L10: undefined,
  L11: undefined,
  L12: undefined,
  L13: undefined,
  L14: undefined,
  L15: undefined,
  L16: undefined,
  L17: undefined,
  L18: undefined,
  L19: undefined,
  L20: undefined,
  L21: undefined,
  L22: undefined,
  L23: undefined,
  L24: undefined,
  L25: undefined,
  L26: undefined,
  L27: undefined,
  L28: undefined,
  L29: undefined,
  L30: undefined,
  L31: undefined,
  L32: undefined,
  L33: undefined,
  L34: undefined,
  L35: undefined,
  L36: undefined,
  L37: undefined,
  L38: undefined,
  L39: undefined,
  L40: undefined,
  L41: undefined,
  L42: undefined,
  L43: undefined,
  L44: undefined,
  L45: undefined,
  L46: undefined,
  L47: undefined,
  L48: undefined,
  L49: undefined,
  L50: undefined,
  L51: undefined,
  L52: undefined,
  L53: undefined,
  L54: undefined,
  L55: undefined,
  L56: undefined,
  L57: undefined,
  L58: undefined,
  L59: undefined,
  L60: undefined,
  L61: undefined,
  L62: undefined,
  L63: undefined,
  L64: undefined,
  L65: undefined,
  L66: undefined,
  L67: undefined,
  L68: undefined,
  L69: undefined,
  L70: undefined,
  L71: undefined,
  L72: undefined,
  L73: undefined,
  L74: undefined,
  L75: undefined,
  L76: undefined,
  L77: undefined,
  L78: undefined,
  L79: undefined,
  L80: undefined,
  L81: undefined,
  L82: undefined,
  L83: undefined,
  L84: undefined,
  L85: undefined,
  L86: undefined,
  L87: undefined,
  L88: undefined,
  L89: undefined,
  L90: undefined,
  L91: undefined,
  L92: undefined,
  L93: undefined,
  L94: undefined,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SET_SLOT':
      return Object.assign({}, state, { [action.payload.slot]: action.payload.element });
    case 'RESET_SLOTS':
      return Object.assign(initialState);
    default:
      return state;
  }
}

