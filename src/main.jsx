import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { TaskContextProvider } from './context/TaskContext'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <TaskContextProvider>
        <App />
      </TaskContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
