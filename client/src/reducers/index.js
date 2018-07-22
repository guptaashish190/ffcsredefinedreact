import { combineReducers } from 'redux';
import timetableReducer from './timetableReducer';
import courseListReducer from './courseListReducer';
import userLoginReducer from './UserLoginReducer';
import modifySlotsReducer from './modifySlotsReducer';

const CombinedReducers = combineReducers({
  timetableReducer, courseListReducer, userLoginReducer, modifySlotsReducer,
});

export default CombinedReducers;
