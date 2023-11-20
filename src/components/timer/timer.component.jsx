import TimerNumber from './timerNumber.component.jsx/timerNumber.component'
import './timer.styles.scss'
import { useState, useEffect } from 'react'

const Timer = () => {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const day = 30
  const month = 'Dec'
  const year = 2023

  const deadline = `${month}, ${day}, ${year}`

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now()

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)))
    setHours(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
    setMinutes(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)))
    setSeconds(Math.floor((time % (1000 * 60)) / 1000))

    if (time < 0) {
      setDays(0)
      setHours(0)
      setMinutes(0)
      setSeconds(0)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000)
    return () => clearInterval(interval)
  }, [])

  function improveAesthetics(number) {
    if (number >= 0 && number <= 9) {
      return `0${number}`
    } else {
      return number
    }
  }

  return (
    <div className="coming-section">
      <p className="coming-section__date">
        coming{' '}
        <span>
          {day} {month} {year}
        </span>
      </p>
      <div className="coming-section__timer">
        <TimerNumber number={improveAesthetics(days)} text="days" />
        <TimerNumber number={improveAesthetics(hours)} text="hours" />
        <TimerNumber number={improveAesthetics(minutes)} text="min" />
        <TimerNumber number={improveAesthetics(seconds)} text="sec" />
      </div>
    </div>
  )
}

export default Timer
