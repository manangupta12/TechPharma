import React from 'react'
import moment from 'moment'

const SympSummary = ({student}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{student.name} {student.regno}</span>
        {/* <p className="grey-text">{moment(student.createdAt.toDate()).calendar()}</p> */}
        <p className="grey-text">Sex: {student.sex}</p>
        <p className="grey-text">Age: {student.age}</p>
        <p className="grey-text">Hostel: {student.hostel}</p>
      </div>
    </div>
  )
}

export default SympSummary