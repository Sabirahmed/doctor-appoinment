import React, {useState, useEffect} from 'react'
import { Media, Button } from 'reactstrap'
import { connect, useSelector, useDispatch } from 'react-redux';
import * as appoinmentActions from '../../redux/actions/appoinmentActions';
import { bindActionCreators } from 'redux';


const ListAppointments = () => {

  const dispatcher = useDispatch();
  const [appointment, setAppointment] = useState([])
  const {appointmentList} = useSelector(state=>state.appointment)
  //console.log('in list appointment', appointmentList)


  useEffect(()=>{
    setAppointment(appointmentList);
    console.log('changing list', appointment);

  },[appointmentList.length])

  const handleDelete = (event) => {
      console.log(event.target.id)
     dispatcher(appoinmentActions.deletePatient(event.target.id))

  }


  return (
   
    <ul>

      {appointment.length > 0? 
      <> 
        {appointment.map((item) => {
         
         return (
           
           <li className="p-1 card-border shadow-sm p-3 mb-3 bg-white rounded" style={{ "borderRadius": "0.25rem" }} key={item.id}>
             <Media>
               <Media left top>
                 <Button color="danger" className="mr-3 delete-btn"><i id={item.id} onClick={handleDelete} className="fas fa-times"></i></Button>
               </Media>
               <Media body>
                 <Media heading className="m-0">
                   {item.patientName}
                 </Media>
 
                 <p className="mt-4 mb-0"><span className="font-weight-bold">Doctor Name:</span> {item.doctorName} </p>
            
                 <p className="mt-4 mb-0"><span className="font-weight-bold">Age:</span> {item.patientAge} <span className="font-weight-bold">Gender:</span> {item.gender}</p>
                 <p><span className="font-weight-bold">Problem:</span> {item.aptNotes}</p>
                 <p className="mb-0"><span className="font-weight-bold">Checkup time:</span> {(new Date(item.aptDate)).toUTCString()}</p>
               </Media>
             </Media>
           </li>
         )
       })}
      </>: 
      
      <h3> No appointment list found </h3>}
      
      
    </ul>
  );
}

// const mapDispatchToProps = (dispatch)=> {
//   return {
//     actions: bindActionCreators(appoinmentActions, dispatch)
//   }
// }

// const mapStateToProps = (state) => {
//   console.log(state);
//   return {
//     appointment: state.appoitnment

//   }
// }


//export default connect(mapStateToProps, mapDispatchToProps) (ListAppointments)
export default ListAppointments;
