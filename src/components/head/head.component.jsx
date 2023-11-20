import './head.styles.scss'

import Logo from '../logo/logo.component'

export const Head = ({ img, title, subtitle, button }) => {
  return (
    <header>
      {/* <Logo /> */}
      <div className="title-container">
        {img}
        <div className="title-container__text">
          <h1>{title}</h1>
          <p>{subtitle}</p>
          {button}
        </div>
      </div>
    </header>
  )
}
