import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import {Link} from 'react-router-dom'
import {changeStatus} from '../../store/actions/doctorActions'

const ProjectDetails = (props) => {
  const { prescription,id, auth,changeStatus } = props;
  const clickHandler = (status) => {
    changeStatus(id,status);
  }
  if (!auth.uid) return <Redirect to='/signin' /> 
  if (prescription) {
    return (
      <div className="container section symptom-details">
        <div className="card z-depth-0">
          <div className="card-content">
          <h5>Symptoms :</h5>
          {prescription.symptoms.map(symptom => {
              return(
                <span className="red-text card-title"><img src="https://img.icons8.com/office/16/000000/high-risk.png"/>  {symptom}</span>
              )
          })}
            
          </div>
          <div className="card-action">
          <Link to = {`/createPrescription/${id}`} onClick = {()=>{clickHandler("DOCTOR_WRITING")}}>Prescribe Medicines</Link>
        </div>
        <div className="card-action grey lighten-4 grey-text">
            <div>{moment(prescription.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading symptoms...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
   const pres = ownProps.prescriptions
   const id = pres[pres.length -1]
   const prescriptions = state.firestore.data.prescription
   const prescription = prescriptions? prescriptions[id]: null
  return {
    prescription: prescription,
    id : id,
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = dispatch => {
    return {
      changeStatus: (id,status) => dispatch(changeStatus(id,status))
    }
  }
  
export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  firestoreConnect([{
    collection: 'prescription'
  }])
)(ProjectDetails)