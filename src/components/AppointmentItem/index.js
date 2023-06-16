import './index.css'

const AppointmentItems = props => {
  const {eachappointment} = props

  const {name, date} = eachappointment

  //   const favoriteImage = isStarred
  //     ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  //     : 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'

  return (
    <li className="list-container">
      <div className="name-container">
        <h1 className="heading"> {name}</h1>
        <button type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png"
            alt="favorite img"
            className="image"
          />
        </button>
      </div>
      <p> {date}</p>
    </li>
  )
}

export default AppointmentItems
