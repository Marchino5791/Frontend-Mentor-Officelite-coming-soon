import './form.styles.scss'
import { useState } from 'react'
import Button from '../../components/button/button.component'
import cross from '../../assets/sign-up/icon-cross.svg'

export const Form = () => {
  const [isActive, setIsActive] = useState(1)
  const [isError, setIsError] = useState(false)
  const [isEmpty, setIsEmpty] = useState(false)

  const handleClick = (e) => {
    setIsActive(e)
  }

  function verifyEmail(e) {
    const emailInput = e.target.value
    const regex = /[^\s@]+@[^\s@]+\.[^\s@]+/gi
    if (emailInput.match(regex)) {
      setIsError(false)
    } else {
      setIsError(true)
    }
  }

  function verifyName(e) {
    const nameInput = e.target.value
    if (nameInput == '' || nameInput == null) {
      setIsEmpty(true)
    } else {
      setIsEmpty(false)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    verifyName()
    verifyEmail()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="field-container">
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          onChange={verifyName}
          className={isEmpty && 'error-text'}
        />
        <img
          src={cross}
          alt="cross"
          className={`error ${isEmpty && 'error-display'}`}
        />
      </div>

      <div className="field-container">
        <label htmlFor="email" className="sr-only ">
          Email Address
        </label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          onChange={verifyEmail}
          className={isError && 'error-text'}
        />
        <img
          src={cross}
          alt="cross"
          className={`error ${isError && 'error-display'}`}
        />
      </div>

      <label htmlFor="pack" className="sr-only">
        Pack
      </label>
      <details className="custom-select">
        <summary className="radios" id="pack">
          <input
            type="radio"
            name="item"
            id="basic"
            title="Basic Pack"
            value="Free"
            checked
          />
          <input
            type="radio"
            name="item"
            id="pro"
            title="Pro Pack"
            value="$9.99"
          />
          <input
            type="radio"
            name="item"
            id="ultimate"
            title="Ultimate Pack"
            value="$19.99"
          />
        </summary>
        <ul className="list">
          <li
            className={isActive == 1 ? 'active' : ''}
            onClick={() => handleClick(1)}
          >
            <label htmlFor="basic">
              Basic Pack<span>Free</span>
            </label>
          </li>
          <li
            className={isActive == 2 ? 'active' : ''}
            onClick={() => handleClick(2)}
          >
            <label htmlFor="pro">
              Pro Pack<span>$9.99</span>
            </label>
          </li>
          <li
            className={isActive == 3 ? 'active' : ''}
            onClick={() => handleClick(3)}
          >
            <label htmlFor="ultimate">
              Ultimate Pack<span>$19.99</span>
            </label>
          </li>
        </ul>
      </details>

      <label htmlFor="phone" className="sr-only">
        Phone Number
      </label>
      <input type="number" name="phone" id="phone" placeholder="Phone Number" />

      <label htmlFor="company" className="sr-only">
        Company
      </label>
      <input type="text" name="company" id="company" placeholder="Company" />

      <button type="submit" className="getOnList">
        Get on the list
      </button>
    </form>
  )
}
