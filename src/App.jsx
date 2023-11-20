import './App.scss'
import Home from './roots/home/home'

import { Routes, Route } from 'react-router-dom'
import SingUp from './roots/singUp/singUp'
import Logo from './components/logo/logo.component'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route
          path="/Frontend-Mentor-Officelite-coming-soon/"
          element={<Logo />}
        >
          <Route
            path="/Frontend-Mentor-Officelite-coming-soon/"
            element={<Home />}
          />
          <Route
            path="/Frontend-Mentor-Officelite-coming-soon/singUp"
            element={<SingUp />}
          />
        </Route>
      </Routes>
    </div>
  )
}

export default App
