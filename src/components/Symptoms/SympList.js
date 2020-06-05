import React from 'react'
import SympSummary from './SympSummary'
import { Link } from 'react-router-dom'

const SympList = ({students}) => {
  return (
    <div className="project-list section">
      { students && students.map(student => {
        return (
          <Link to={`student/${student.regno}`} key={student.regno}>
            <SympSummary student={student} />
          </Link>
        )
      })}  
    </div>
  )
}

export default SympList