import appoinmentReducer from './appoinmentReducer';
import { combineReducers } from 'redux';
import patientReducer from './patientReducer';

const rootReducer = combineReducers({
    appointment: appoinmentReducer
   // patient: patientReducer

});

export default rootReducer;