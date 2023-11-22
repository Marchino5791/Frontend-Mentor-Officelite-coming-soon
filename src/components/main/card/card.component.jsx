import './card.styles.scss'
import { Link } from 'react-router-dom'

export const Card = ({ text }) => {
  const {
    type,
    price,
    per,
    f1,
    f2,
    f3,
    utilityClass,
    utilityClassButton,
    utilityClassText,
  } = text
  return (
    <div className={`card ${utilityClass}`}>
      <div className="top">
        <h2 className={utilityClassText}>{type}</h2>
      </div>
      <div className="center-grid">
        <div className={`center-grid__expense ${utilityClassText}`}>
          <p className="center-grid__expense__price">{price}</p>
          <p className="center-grid__expense__per">{per}</p>
        </div>
        <div className={`center-grid__features ${utilityClassText}`}>
          <p className="center-grid__features__f">{f1}</p>
          <p className="center-grid__features__f">{f2}</p>
          <p className="center-grid__features__f">{f3}</p>
        </div>
      </div>
      <div className="bottom">
        <Link
          className={utilityClassButton}
          to="/Frontend-Mentor-Officelite-coming-soon/singUp"
        >
          Try for Free
        </Link>
      </div>
    </div>
  )
}
