import React from 'react'
import './timerNumber.styles.scss'

const TimerNumber = ({ number, text }) => {
  return (
    <div className="box">
      <p className="box__number">{number}</p>
      <div className="box__text">{text}</div>
    </div>
  )
}

export default TimerNumber
