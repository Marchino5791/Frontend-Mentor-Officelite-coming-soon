import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'

import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter
      basename={
        import.meta.env.DEV ? '/' : '/Frontend-Mentor-Officelite-coming-soon/'
      }
    >
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
