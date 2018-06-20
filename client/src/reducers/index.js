import { combineReducers } from 'redux';
import reducer1 from './reducer1';
import timetableReducer from './timetableReducer';

const CombinedReducers = combineReducers({ reducer1, timetableReducer });

export default CombinedReducers;
