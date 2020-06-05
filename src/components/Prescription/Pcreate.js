import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPrescription } from '../../store/actions/doctorActions'
import { Redirect } from 'react-router-dom'
import {changeStatus} from '../../store/actions/doctorActions'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import doc from "../../doc.gif"
toast.configure()

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
    toast.info('Prescription has been submitted !',{position: toast.POSITION.TOP_RIGHT,autoClose:3000})
    e.preventDefault();
    this.props.changeStatus(this.props.id,"COMPLETED");
    this.props.createPrescription(this.props.id,this.state);
    this.props.history.push('/');
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="container col s12 m6">
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
        <div className="col s12 m5">
        <img src = {doc}></img>
        </div>
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