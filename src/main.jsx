import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Logo from './components/logo/logo.component.jsx'
import Home from './roots/home/home.jsx'
import SingUp from './roots/singUp/singUp.jsx'

const router = createBrowserRouter([
  {
    path: '/Frontend-Mentor-Officelite-coming-soon/',
    element: <App />,
    children: [
      {
        path: '/Frontend-Mentor-Officelite-coming-soon/',
        element: <Logo />,
      },
      {
        path: '/Frontend-Mentor-Officelite-coming-soon/',
        element: <Home />,
      },
      {
        path: '/Frontend-Mentor-Officelite-coming-soon/singUp',
        element: <SingUp />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
