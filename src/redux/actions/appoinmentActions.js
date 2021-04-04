import {ADD_APPOINMENT, REMOVE_APPOINMENT, FETCH_PATIENT_FAILURE,
     FETCH_PATIENT_SUCCESS, DELETE_PATIENT_FAILURE, DELETE_PATIENT_SUCCESS
    } from './actionTypes';

import { getData, deleteData, postData } from "../../components/api/Api"





export const addAppoinment = (item) => {
    console.log('add appointment', item);
    return {
        type: ADD_APPOINMENT,
        payload: item
    }
}


export const removeAppoinment = (id) => {
    return {
        type:REMOVE_APPOINMENT,
        id
    }
}

export const postAppointmentData= (item)=> {
    console.log("hkldshklshlg", item)
    return(async (dispatch)=> {
        try{
             let response = await postData('patients', item)
             if (response.status === 201) {
                dispatch(addAppoinment(response.data))
             }
              
            }catch(error){
                console.log('error', error);
            }finally {
                console.log('finally');
            }
    })
}

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


export const deletePatient = (id) => {
    console.log('deletepatientActions', id);
    return(async (dispatch)=> {
        try{
             let response = await deleteData('patients', id)
             
             if (response.status === 200) {
                console.log('deleted response in if condition', response)
                dispatch(fetchPatient())
             }
            }catch(error){
                console.log('error', error)
            }finally {
                console.log('finally');
            }
    })
}

export const deletePatientSuccess = (payload)=> {
    return {
        type: DELETE_PATIENT_SUCCESS,
        payload
    }
}

export const deletePatientFailure = (payload)=> {
    return {
        type: DELETE_PATIENT_FAILURE,
        payload
    }
}