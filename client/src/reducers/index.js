import { combineReducers } from 'redux';
import features from './features';
import timetableReducer from './timetableReducer';
import courseListReducer from './courseListReducer';

const CombinedReducers = combineReducers({ features, timetableReducer, courseListReducer });

export default CombinedReducers;
