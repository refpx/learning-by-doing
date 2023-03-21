import React from 'react'
import ReactDOM from 'react-dom/client'
import CounterWithCustomHook from './01-useState/CounterWithCustomHook'
// import App from './App'
// import CounterApp from './01-useState/CounterApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <CounterApp /> */}
    <CounterWithCustomHook />
  </React.StrictMode>
)
