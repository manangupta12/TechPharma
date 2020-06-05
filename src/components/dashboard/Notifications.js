import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

const Notifications = (props) => {
  const { notifications } = props;
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="collection online-users">
            { notifications && notifications.map(item =>{
              return <li key={item.time}>
              <span className="pink-text">A student submitted a symptom, plese respond asap!</span>
                <div className="note-date grey-text">{moment(item.time.toDate()).fromNow()}</div>
              </li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Notifications