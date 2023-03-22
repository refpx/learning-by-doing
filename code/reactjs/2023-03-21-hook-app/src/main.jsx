import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import App from './App'
// import CounterApp from './01-useState/CounterApp'
// import SimpleForm from './02-useEffect/SimpleForm'
// import CounterWithCustomHook from './01-useState/CounterWithCustomHook'
// import FormWithCustomHook from './02-useEffect/FormWithCustomHook'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // <App />
  // <CounterApp />
  // <CounterWithCustomHook />
  // <SimpleForm />
  // <FormWithCustomHook />
  <MultipleCustomHooks />
  // </React.StrictMode>
)
