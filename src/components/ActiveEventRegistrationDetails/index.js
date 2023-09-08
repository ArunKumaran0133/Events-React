import './index.css'
import {Component} from 'react'

const ActiveEventStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
  initial: 'INITIAL',
}

class ActiveEventRegistration extends Component {
  renderYetToRegister = () => (
    <div className="bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-image"
      />
      <p className="yet-to-register-para">
        A live performance brings so much to your relationship with dance.
      </p>
      <button type="button" className="yet-to-register-button">
        Register Here
      </button>
    </div>
  )

  renderRegisterPage = () => (
    <div className="bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-image"
      />
      <h1 className="registered-text">
        You have already registered for the event
      </h1>
    </div>
  )

  renderRegistrationClosedPage = () => (
    <div className="bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="closed-image"
      />
      <h1 className="closed-heading">Registrations Are Closed Now!</h1>
      <p className="closed-text">Stay tuned. We will reopen</p>
    </div>
  )

  renderNoActiveEvent = () => (
    <div className="no-active-bg-container">
      <p className="active-registration-heading">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  render() {
    const {eventStatus} = this.props

    switch (eventStatus) {
      case ActiveEventStatus.initial:
        return this.renderNoActiveEvent()
      case ActiveEventStatus.yetToRegister:
        return this.renderYetToRegister()
      case ActiveEventStatus.registered:
        return this.renderRegisterPage()
      case ActiveEventStatus.registrationClosed:
        return this.renderRegistrationClosedPage()
      default:
        return null
    }
  }
}

export default ActiveEventRegistration
