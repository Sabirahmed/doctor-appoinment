import { FETCH_PATIENT_FAILURE, FETCH_PATIENT_SUCCESS } from "../actions/actionTypes";

const initialState = {
    patientList: [],
    error: '',
    isLoading: false
}

const patientReducer = (state =initialState, action={})=> {

    console.log('patient-reducer')
    switch(action.type) {
        case FETCH_PATIENT_SUCCESS:
            return {...state, patientList:action.payload}
        case FETCH_PATIENT_FAILURE:
            return {...state, error:action.payload}    
        default:
            return state    
    }

}

export default patientReducer;