import './index.css'

const EventItem = props => {
  const {eachEvent, onGetEventStatus} = props
  const {imageUrl, name, location, registrationStatus} = eachEvent

  const getEventStatus = () => {
    onGetEventStatus(registrationStatus)
  }

  return (
    <li className="item-container">
      <button type="button" className="event-button" onClick={getEventStatus}>
        <img src={imageUrl} alt="event" className="event-item-image" />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
