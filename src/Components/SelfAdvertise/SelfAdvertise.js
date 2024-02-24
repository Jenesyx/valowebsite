import React from 'react'
import './SelfAdvertise.css'

function SelfAdvertise(props) {
  return (
    <div className="adver">
      <div className="thubm">
          <img src={props.Icon} alt="Advertise-Icon" />
      </div>
      <p>{props.Text}</p>
    </div>
  )
}

export default SelfAdvertise