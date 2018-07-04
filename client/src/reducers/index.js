import { combineReducers } from 'redux';
import timetableReducer from './timetableReducer';
import courseListReducer from './courseListReducer';
import userLoginReducer from './UserLoginReducer';

const CombinedReducers = combineReducers({ timetableReducer, courseListReducer, userLoginReducer });

export default CombinedReducers;
