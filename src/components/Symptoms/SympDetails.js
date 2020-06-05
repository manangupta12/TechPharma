import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import Symptoms from './Symptoms'


const SympDetails = (props) => {
  const { student, auth,prescription } = props;
  if (!auth.uid) return <Redirect to='/signin' /> 
  if (student) {
    return (
      <div className="container section symptom-details">
        <div className="card z-depth-0">
          <div className="card-content">
          <img src="https://img.icons8.com/bubbles/50/000000/stethoscope.png"/>
            <span className="card-title">{student.name}  - {student.regno}</span>
            {/* <p>{student.symptoms}</p> */}
            <Symptoms prescriptions = {prescription}/>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            {/* <div>{moment(student.createdAt.toDate()).calendar()}</div> */}
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
  // console.log(state);
  const id = ownProps.match.params.id;
  const students = state.firestore.data.students;
  const student = students ? students[id] : null
  const prescription = student ? student.prescription : null;
  return {
    student: student,
    auth: state.firebase.auth,
    prescription : prescription
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'students'
  }])
)(SympDetails)