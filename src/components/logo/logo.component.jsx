import logo from '../../assets/shared/logo.svg'
import './logo.styles.scss'
import { Link, Outlet } from 'react-router-dom'

const Logo = () => {
  return (
    <>
      <div className="logo-container">
        <Link to="/Frontend-Mentor-Officelite-coming-soon">
          <img src={logo} alt="Officelite's Logo" />
        </Link>
      </div>
      <Outlet />
    </>
  )
}

export default Logo
