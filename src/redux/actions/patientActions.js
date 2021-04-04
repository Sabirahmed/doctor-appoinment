import { getData } from "../../components/api/Api"
import { FETCH_PATIENT_FAILURE, FETCH_PATIENT_SUCCESS } from "./actionTypes"

export const fetchPatient = () => {
    console.log('patientActions');
    return(async (dispatch)=> {
        try{
             let response = await getData('patients')
              dispatch(fetchPatientSuccess(response.data))
            }catch(error){
                dispatch(fetchPatientFailure(error.message))
            }finally {
                console.log('finally');
            }
    })
}

export const fetchPatientSuccess = (payload)=> {
    return {
        type: FETCH_PATIENT_SUCCESS,
        payload
    }
}

export const fetchPatientFailure = (payload)=> {
    return {
        type: FETCH_PATIENT_FAILURE,
        payload
    }
}



