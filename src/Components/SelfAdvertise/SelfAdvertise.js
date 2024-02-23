import React from 'react'

function SelfAdvertise(props) {
  return (
    <div className="adver">
        <div className="thubm">
            <p>{props.Title1}<br />{props.Title2}</p>
            <div className='thumb-img'>
                <img src={props.Image} alt="" />
            </div>
        </div>
        <div>
            <p>{props.text}</p>
        </div>
    </div>
  )
}

export default SelfAdvertise