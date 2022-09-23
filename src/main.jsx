import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'flowbite'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
import UserProvider from './context/UserProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserProvider>
)
