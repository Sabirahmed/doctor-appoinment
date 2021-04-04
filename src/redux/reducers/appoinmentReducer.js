import { ADD_APPOINMENT, REMOVE_APPOINMENT, FETCH_PATIENT_SUCCESS, FETCH_PATIENT_FAILURE, DELETE_PATIENT_SUCCESS, DELETE_PATIENT_FAILURE } from "../actions/actionTypes";

const initialState = {
    appointmentList: [],
    error: '',
    isLoading: false
}

const appoinmentReducer = (state = initialState, action={}) => {
    console.log('appoinment reducer', action);

    switch(action.type) {
        case ADD_APPOINMENT:


        return {...state, appointmentList:[...state.appointmentList, action.payload]}

        case REMOVE_APPOINMENT:

        return {...state, appointmentList: state.appointmentList.filter((item) => item.id !== action.id)};

         


        case FETCH_PATIENT_SUCCESS:
            return {...state, appointmentList:action.payload}


        case FETCH_PATIENT_FAILURE:
            return {...state, error:action.payload} 

        case DELETE_PATIENT_SUCCESS:
            return {...state.appointmentList.filter((item)=>item.id !== action.id)}    

         case DELETE_PATIENT_FAILURE:
            return {...state, error:action.payload} 

        default: 
         return state; 
    }

    

}

export default appoinmentReducer;