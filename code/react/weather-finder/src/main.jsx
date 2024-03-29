import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import './main.css'
import { CssBaseline } from '@mui/material'
import { SnackbarProvider } from 'notistack'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SnackbarProvider>
    <CssBaseline />
    <App />
  </SnackbarProvider>
)
