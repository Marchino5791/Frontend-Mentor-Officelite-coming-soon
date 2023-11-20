import logo from '../../assets/shared/logo.svg'
import './logo.styles.scss'
import { Outlet } from 'react-router-dom'

const Logo = () => {
  return (
    <>
      <div className="logo-container">
        <img src={logo} alt="Officelite's Logo" />
      </div>
      <Outlet />
    </>
  )
}

export default Logo
