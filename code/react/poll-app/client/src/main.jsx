// import React from 'react'
import ReactDOM from 'react-dom/client'
import { SocketProvider } from './context/SocketContext'
import App from './App'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <SocketProvider>
    <App />
  </SocketProvider>
  // </React.StrictMode>
)
