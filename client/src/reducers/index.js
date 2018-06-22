import { combineReducers } from 'redux';
import reducer1 from './reducer1';
import timetableReducer from './timetableReducer';
import courseListReducer from './courseListReducer';

const CombinedReducers = combineReducers({ reducer1, timetableReducer, courseListReducer });

export default CombinedReducers;
