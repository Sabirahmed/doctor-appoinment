import React, {useEffect, useState} from 'react';
import _ from 'lodash';
import { Container } from 'reactstrap';
import NavBar from '../navBar/NavBar';
import AddAppointments from '../appoinments/AddAppointments';
import SearchAppointments from '../appoinments/SearchAppointments';
import ListAppointments from '../appoinments/ListAppointments';
import Footer from '../footer/Footer';
import { deleteData, getData, postData } from '../api/Api';
import * as appoinmentActions from '../../redux/actions/appoinmentActions';
import { bindActionCreators } from 'redux';
//import {fetchPatient} from '../../redux/actions/patientActions'

import { connect, useDispatch, useSelector } from 'react-redux';

const Home = (props) => {
  
 const dispatcher = useDispatch();
 const {appointmentList} = useSelector(state=>state.appointment)

console.log(appointmentList);

  

  useEffect(()=> {
    dispatcher(appoinmentActions.fetchPatient())
    

  }, [])

  

  
  // Saving patient details
  const saveAppointment = (newAppointment) => {
    //console.log("newAppointment", newAppointment);
    props.actions.postAppointmentData(newAppointment);
    
    
  }


    return (
      <>
        <NavBar />
        <Container>
          <AddAppointments  saveApt={saveAppointment}/>
          
          <ListAppointments />
        </Container>
        <Footer />
      </>
    );
  
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    appointment: state.appointment

  }
}

const mapDispatchToProps = (dispatch)=> {

    return {
        //actions: dispatch(appoinmentActions);
        actions: bindActionCreators(appoinmentActions, dispatch)
    }
  

}

export default connect(mapDispatchToProps, mapDispatchToProps)(Home)



