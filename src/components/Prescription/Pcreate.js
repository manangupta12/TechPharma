import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPrescription } from '../../store/actions/doctorActions'
import { Redirect } from 'react-router-dom'
import {changeStatus} from '../../store/actions/doctorActions'

class CreatePrescription extends Component {
  state = {
    tablet: '',
    intake: '',
    message: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.changeStatus(this.props.id,"COMPLETED");
    this.props.createPrescription(this.props.id,this.state);
    this.props.history.push('/');
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create Prescription</h5>
          <div className="input-field">
            <input type="text" id='tablet' onChange={this.handleChange} />
            <label htmlFor="title">Enter the Tablet name</label>
          </div>
          <div className="input-field">
            <input type="text" id='intake' onChange={this.handleChange} />
            <label htmlFor="title">Enter the intake here</label>
          </div>
          <div className="input-field">
            <input type="text" id='message' onChange={this.handleChange} />
            <label htmlFor="title">Message</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Prescribe</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state,ownProps) => {
  const id = ownProps.match.params.id;
  return {
    auth: state.firebase.auth,
    id: id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createPrescription: (id,prescription) => dispatch(createPrescription(id,prescription)),
    changeStatus: (id,status) => dispatch(changeStatus(id,status))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePrescription)