// Write your code here
// Write your code here

import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import {format} from 'date-fns'

import './index.css'

import AppointmentItems from '../AppointmentItem/index'

class Appointments extends Component {
  state = {
    appointmentsList: [],
    nameInput: '',
    dateInput: '',
  }

  onDateChange = event => {
    this.setState({dateInput: event.target.value})
  }

  onNameChange = event => {
    this.setState({nameInput: event.target.value})
  }

  getAppointmentDetails = event => {
    event.preventDefault()

    const {nameInput, dateInput} = this.state
    const formateDate = dateInput
      ? format(new Date(dateInput), 'dd MMMM yyyy, EEEE')
      : ''

    const addNewAppointment = {
      id: uuidv4(),
      name: nameInput,
      date: formateDate,
    }

    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, addNewAppointment],
    }))
  }

  render() {
    const {appointmentsList, nameInput, dateInput} = this.state

    return (
      <div className="app-container">
        <div className="card-container">
          <div className="responsive-container">
            <div className="appointment-container">
              <div>
                <h1> Add Appointments </h1>
                <form
                  className="form-container"
                  onSubmit={this.getAppointmentDetails}
                >
                  <label htmlFor="title"> TITLE</label>
                  <br />
                  <input
                    type="text"
                    id="title"
                    className="input"
                    placeholder="Title"
                    onChange={this.onNameChange}
                    value={nameInput}
                  />
                  <br />

                  <label htmlFor="date"> DATE</label>
                  <br />
                  <input
                    type="date"
                    id="date"
                    className="input"
                    onChange={this.onDateChange}
                    value={dateInput}
                  />
                </form>
                <button type="submit" className="button">
                  {' '}
                  Add{' '}
                </button>
              </div>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png "
                  alt="appointments"
                  className="appointment-img"
                />
              </div>
            </div>
            <hr className="seperator" />
            <div className="stared-container">
              <h1 className="heading"> Appointments </h1>
              <button type="button" className="strbtn">
                stared
              </button>
            </div>
            <ul className="orderlist-container">
              {appointmentsList.map(eachappointment => (
                <AppointmentItems
                  key={eachappointment.id}
                  eachappointment={eachappointment}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
